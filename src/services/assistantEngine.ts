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

  public static speak(text: string, onEnd?: () => void, onError?: () => void): void {
    if (!this.synth) {
      if (onEnd) onEnd();
      return;
    }

    this.stopSpeaking();

    // Clean plain text for speech
    const cleanSpeech = text
      .replace(/\*\*/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[#*_`]/g, '')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanSpeech);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    // Pick best English voice if available
    const voices = this.synth.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('David') || v.name.includes('Male')));
    if (englishVoice) {
      utterance.voice = englishVoice;
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
}
