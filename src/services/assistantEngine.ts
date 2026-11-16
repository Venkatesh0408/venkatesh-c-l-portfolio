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
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  public static isSpeechRecognitionSupported(): boolean {
    if (typeof window === 'undefined') return false;
    return 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
  }

  public static stopSpeaking(): void {
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
    }
  }

  public static getBestVoice(): SpeechSynthesisVoice | null {
    this.initVoices();
    const voices = this.cachedVoices.length > 0 ? this.cachedVoices : (this.synth ? this.synth.getVoices() : []);
    if (!voices || voices.length === 0) return null;

    // 1. Highest tier: Microsoft Natural / Neural online voices (super fluent & human-like)
    const naturalVoice = voices.find(v => 
      v.lang.startsWith('en') && 
      (v.name.includes('Natural') || v.name.includes('Neural') || v.name.includes('Christopher') || v.name.includes('Guy') || v.name.includes('Jenny') || v.name.includes('Aria') || v.name.includes('Ryan'))
    );
    if (naturalVoice) return naturalVoice;

    // 2. Google US/UK English natural voices
    const googleVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Studio')));
    if (googleVoice) return googleVoice;

    // 3. Apple Enhanced voices (Daniel, Oliver, Samantha, Serena)
    const appleVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Enhanced') || v.name.includes('Daniel') || v.name.includes('Oliver')));
    if (appleVoice) return appleVoice;

    // 4. Any English voice
    const anyEnglish = voices.find(v => v.lang === 'en-US' || v.lang === 'en-GB' || v.lang.startsWith('en'));
    return anyEnglish || voices[0] || null;
  }

  public static getBestVoiceName(): string {
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

  public static speak(text: string, onEnd?: () => void, onError?: () => void): void {
    if (!this.synth) {
      if (onEnd) onEnd();
      return;
    }

    this.stopSpeaking();
    const cleanSpeech = this.formatTextForSpeech(text);

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

    utterance.onerror = (e) => {
      this.currentUtterance = null;
      if (onError) onError();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }
}
