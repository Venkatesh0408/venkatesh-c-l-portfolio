import { assistantIntents, fallbackIntent, AssistantIntent } from '../data/faqKnowledgeBase';

export function matchAssistantQuery(userInput: string): AssistantIntent {
  const cleanInput = userInput.toLowerCase().trim().replace(/[^\w\s]/gi, '');
  if (!cleanInput) return fallbackIntent;

  let bestMatch: AssistantIntent | null = null;
  let maxScore = 0;

  for (const intent of assistantIntents) {
    let score = 0;
    for (const keyword of intent.keywords) {
      const cleanKeyword = keyword.toLowerCase().trim();
      if (cleanInput === cleanKeyword) {
        score += 10;
      } else if (cleanInput.includes(cleanKeyword)) {
        score += 5;
      } else {
        const tokens = cleanKeyword.split(' ');
        const matchedTokens = tokens.filter(t => cleanInput.includes(t));
        if (matchedTokens.length > 0) {
          score += (matchedTokens.length / tokens.length) * 3;
        }
      }
    }

    if (score > maxScore) {
      maxScore = score;
      bestMatch = intent;
    }
  }

  return (maxScore > 1.5 && bestMatch) ? bestMatch : fallbackIntent;
}

export class SpeechService {
  private static synth: SpeechSynthesis | null = typeof window !== 'undefined' ? window.speechSynthesis : null;
  private static currentUtterance: SpeechSynthesisUtterance | null = null;
  private static cachedVoices: SpeechSynthesisVoice[] = [];
  private static isInitialized = false;

  // ElevenLabs High-Definition Voice Configuration
  private static activeAudio: HTMLAudioElement | null = null;
  private static abortController: AbortController | null = null;
  private static audioCache = new Map<string, string>(); // cleanText -> blobUrl

  private static readonly ELEVENLABS_KEY = import.meta.env.VITE_ELEVENLABS_API_KEY || 'sk_4652efd3468fc48ac5aaf9802da653981d8411caf0d7f0f4';
  private static readonly ELEVENLABS_VOICE_ID = import.meta.env.VITE_ELEVENLABS_VOICE_ID || 'JBFqnCBsd6RMkjVDRZzb'; // George (Professional Male)
  private static readonly ELEVENLABS_MODEL_ID = import.meta.env.VITE_ELEVENLABS_MODEL_ID || 'eleven_turbo_v2_5';

  private static initVoices(): void {
    if (!this.synth || this.isInitialized) return;
    this.cachedVoices = this.synth.getVoices();
    if (typeof window !== 'undefined' && this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = () => {
        if (this.synth) {
          this.cachedVoices = this.synth.getVoices();
        }
      };
    }
    this.isInitialized = true;
  }

  public static isSpeechSynthesisSupported(): boolean {
    if (typeof window === 'undefined') return false;
    return Boolean(this.ELEVENLABS_KEY) || ('speechSynthesis' in window);
  }

  public static isSpeechRecognitionSupported(): boolean {
    if (typeof window === 'undefined') return false;
    return 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
  }

  public static stopSpeaking(): void {
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
    if (this.activeAudio) {
      this.activeAudio.pause();
      this.activeAudio.currentTime = 0;
      this.activeAudio = null;
    }
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
    }
  }

  public static isCurrentlySpeaking(): boolean {
    return Boolean(this.activeAudio) || Boolean(this.synth && this.synth.speaking);
  }

  public static getBestVoice(): SpeechSynthesisVoice | null {
    this.initVoices();
    const voices = this.cachedVoices.length > 0 ? this.cachedVoices : (this.synth ? this.synth.getVoices() : []);
    if (!voices || voices.length === 0) return null;

    // 1. Highest tier: Microsoft Natural / Neural online voices
    const naturalVoice = voices.find(v => 
      v.lang.startsWith('en') && 
      (v.name.includes('Natural') || v.name.includes('Neural') || v.name.includes('Christopher') || v.name.includes('Guy') || v.name.includes('Jenny') || v.name.includes('Aria') || v.name.includes('Ryan'))
    );
    if (naturalVoice) return naturalVoice;

    // 2. Google US/UK English natural voices
    const googleVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Studio')));
    if (googleVoice) return googleVoice;

    // 3. Apple Enhanced voices
    const appleVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Enhanced') || v.name.includes('Daniel') || v.name.includes('Oliver')));
    if (appleVoice) return appleVoice;

    // 4. Any English voice
    const anyEnglish = voices.find(v => v.lang === 'en-US' || v.lang === 'en-GB' || v.lang.startsWith('en'));
    return anyEnglish || voices[0] || null;
  }

  public static getBestVoiceName(): string {
    if (this.ELEVENLABS_KEY) {
      return "ElevenLabs Neural Voice (George - HD)";
    }
    const voice = this.getBestVoice();
    if (!voice) return "Standard Web Speech Engine";
    return voice.name.replace(/Microsoft |Online |\(Natural\) |\(Enhanced\) |English /gi, '').trim() + " (Natural)";
  }

  /**
   * Cleans text and optimizes technical acronym pronunciation for smooth human cadency
   */
  public static formatTextForSpeech(text: string): string {
    return text
      .replace(/\*\*/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[#*_`]/g, '')
      .replace(/ESP8266/gi, 'E. S. P. 82 66')
      .replace(/ESP32-CAM/gi, 'E. S. P. 32 Cam')
      .replace(/ESP32/gi, 'E. S. P. 32')
      .replace(/VTU/gi, 'V. T. U.')
      .replace(/RRCE/gi, 'R. R. C. E.')
      .replace(/CGPA/gi, 'C. G. P. A.')
      .replace(/PLC/gi, 'P. L. C.')
      .replace(/EEE/gi, 'E. E. E.')
      .replace(/SSLC/gi, 'S. S. L. C.')
      .replace(/AI/gi, 'A. I.')
      .replace(/CAD/gi, 'Cad')
      .replace(/–/g, ' to ')
      .trim();
  }

  private static playAudioBlobUrl(url: string, onEnd?: () => void, onError?: () => void): void {
    try {
      const audio = new Audio(url);
      this.activeAudio = audio;

      audio.onended = () => {
        if (this.activeAudio === audio) {
          this.activeAudio = null;
        }
        if (onEnd) onEnd();
      };

      audio.onerror = (e) => {
        console.warn('[VENKY AI] Audio playback error:', e);
        if (this.activeAudio === audio) {
          this.activeAudio = null;
        }
        if (onError) onError();
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          if (err.name === 'AbortError') return;
          console.warn('[VENKY AI] Autoplay prevented or aborted:', err);
          if (this.activeAudio === audio) {
            this.activeAudio = null;
          }
          if (onError) onError();
        });
      }
    } catch (err) {
      console.warn('[VENKY AI] Play error:', err);
      this.activeAudio = null;
      if (onError) onError();
    }
  }

  private static speakWithWebSpeech(cleanSpeech: string, onEnd?: () => void, onError?: () => void): void {
    if (!this.synth) {
      if (onEnd) onEnd();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(cleanSpeech);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    const voice = this.getBestVoice();
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onend = () => {
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      this.currentUtterance = null;
      if (onError) onError();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public static async speak(text: string, onEnd?: () => void, onError?: () => void): Promise<void> {
    this.stopSpeaking();
    const cleanSpeech = this.formatTextForSpeech(text);
    if (!cleanSpeech) {
      if (onEnd) onEnd();
      return;
    }

    // 1. Instant cache playback if already synthesized
    if (this.audioCache.has(cleanSpeech)) {
      const cachedUrl = this.audioCache.get(cleanSpeech)!;
      this.playAudioBlobUrl(cachedUrl, onEnd, onError);
      return;
    }

    // 2. ElevenLabs High-Definition Neural Voice
    if (this.ELEVENLABS_KEY && typeof window !== 'undefined' && typeof fetch === 'function') {
      const controller = new AbortController();
      this.abortController = controller;

      try {
        const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${this.ELEVENLABS_VOICE_ID}`, {
          method: 'POST',
          signal: controller.signal,
          headers: {
            'xi-api-key': this.ELEVENLABS_KEY,
            'Content-Type': 'application/json',
            'Accept': 'audio/mpeg'
          },
          body: JSON.stringify({
            text: cleanSpeech,
            model_id: this.ELEVENLABS_MODEL_ID,
            voice_settings: {
              stability: 0.5,
              similarity_boost: 0.75,
              style: 0.0,
              use_speaker_boost: true
            }
          })
        });

        if (response.ok) {
          const blob = await response.blob();
          const audioUrl = URL.createObjectURL(blob);
          this.audioCache.set(cleanSpeech, audioUrl);
          this.abortController = null;
          this.playAudioBlobUrl(audioUrl, onEnd, onError);
          return;
        } else {
          const errText = await response.text();
          console.warn(`[VENKY AI] ElevenLabs TTS returned ${response.status}:`, errText);
        }
      } catch (err: any) {
        if (err.name === 'AbortError') {
          return; // Intentional stop or replacement
        }
        console.warn('[VENKY AI] ElevenLabs error, falling back to Web Speech:', err);
      }
    }

    // 3. Fallback to Web Speech API
    this.speakWithWebSpeech(cleanSpeech, onEnd, onError);
  }
}
