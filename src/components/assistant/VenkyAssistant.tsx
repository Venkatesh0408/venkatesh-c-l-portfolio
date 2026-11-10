import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Send, Terminal, Sparkles, Navigation, X } from 'lucide-react';
import { CircularWaveform } from './CircularWaveform';
import { matchAssistantQuery, SpeechService } from '../../services/assistantEngine';
import { AssistantIntent } from '../../data/faqKnowledgeBase';

interface VenkyAssistantProps {
  onNavigateSection?: (sectionId: string) => void;
  onOpenProjectModal?: (projectId: string) => void;
  isFloatingOpen?: boolean;
  onToggleFloating?: () => void;
}

export const VenkyAssistant: React.FC<VenkyAssistantProps> = ({
  onNavigateSection,
  onOpenProjectModal,
  isFloatingOpen = false,
  onToggleFloating
}) => {
  const [messages, setMessages] = useState<Array<{ sender: 'venky' | 'user'; text: string; intent?: AssistantIntent }>>([
    {
      sender: 'venky',
      text: "Hello! Welcome to Venkatesh's engineering command center. I'm VENKY AI. I can guide you through his robotics projects, industrial experience, skills, and verified achievements. Click any prompt below or speak to me!",
      intent: {
        id: 'welcome',
        keywords: [],
        spokenText: "Hello! Welcome to Venkatesh's engineering portfolio. I'm VENKY AI. What would you like to explore?",
        displayedText: "",
        suggestedQuestions: [
          "Tell me about Venkatesh",
          "Show me his projects",
          "Explain his work experience",
          "What are his skills?",
          "Open contact section"
        ]
      }
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceMuted, setVoiceMuted] = useState(false);
  const [activeSpeechError, setActiveSpeechError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Initialize Speech Recognition once
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRec) {
      const recognition = new SpeechRec();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        setActiveSpeechError(null);
      };

      recognition.onresult = (event: any) => {
        const spoken = event.results[0][0].transcript;
        setIsListening(false);
        handleUserQuery(spoken);
      };

      recognition.onerror = (event: any) => {
        setIsListening(false);
        if (event.error === 'not-allowed') {
          setActiveSpeechError('Microphone permission denied. Continuing in typed terminal mode.');
        } else if (event.error === 'no-speech') {
          setActiveSpeechError('No speech detected. Please try again or type below.');
        } else {
          setActiveSpeechError(`Audio notice: ${event.error}`);
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleToggleMic = () => {
    if (isListening) {
      if (recognitionRef.current) recognitionRef.current.stop();
      setIsListening(false);
    } else {
      if (recognitionRef.current) {
        SpeechService.stopSpeaking();
        setIsSpeaking(false);
        try {
          recognitionRef.current.start();
        } catch (e) {
          console.warn(e);
        }
      } else {
        setActiveSpeechError('Speech recognition is unavailable in this browser. Please use text input.');
      }
    }
  };

  const handleUserQuery = (queryText: string) => {
    if (!queryText.trim()) return;

    // Add user message
    const cleanUserText = queryText.trim();
    setMessages(prev => [...prev, { sender: 'user', text: cleanUserText }]);
    setInputQuery('');

    // Match intent
    const matched = matchAssistantQuery(cleanUserText);

    setTimeout(() => {
      setMessages(prev => [...prev, {
        sender: 'venky',
        text: matched.displayedText || matched.spokenText,
        intent: matched
      }]);

      // Speak response if voice isn't muted
      if (!voiceMuted && SpeechService.isSpeechSynthesisSupported()) {
        setIsSpeaking(true);
        SpeechService.speak(matched.spokenText, () => setIsSpeaking(false), () => setIsSpeaking(false));
      }

      // Execute navigation guidance!
      if (matched.navigationTarget && onNavigateSection) {
        onNavigateSection(matched.navigationTarget);
      }

      // Execute special action
      if (matched.action === 'openModal' && matched.actionPayload && onOpenProjectModal) {
        onOpenProjectModal(matched.actionPayload);
      } else if (matched.action === 'downloadResume') {
        const link = document.createElement('a');
        link.href = '/assets/Venkatesh_CL_RESUME.pdf';
        link.download = 'Venkatesh_CL_RESUME.pdf';
        link.click();
      }
    }, 200);
  };

  const handlePromptClick = (prompt: string) => {
    handleUserQuery(prompt);
  };

  const handleToggleMute = () => {
    if (!voiceMuted) {
      SpeechService.stopSpeaking();
      setIsSpeaking(false);
      setVoiceMuted(true);
    } else {
      setVoiceMuted(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#0B0F1A] border border-[#182A42] rounded-lg shadow-2xl overflow-hidden font-mono text-sm">
      {/* Console Header */}
      <div className="bg-[#101B2B] px-4 py-3 border-b border-[#182A42] flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-[#00D4FF] font-semibold text-xs flex items-center gap-1.5 ml-2">
            <Terminal className="w-3.5 h-3.5 text-[#00D4FF]" />
            VENKY_AI // COMMAND_ASSISTANT v1.0
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Mute Voice Toggle */}
          <button
            onClick={handleToggleMute}
            className={`p-1.5 rounded text-xs flex items-center gap-1 transition-all ${
              voiceMuted
                ? 'bg-red-950/40 text-red-400 border border-red-800/50'
                : 'bg-[#14243A] text-[#00D4FF] border border-[#182A42] hover:border-[#00D4FF]'
            }`}
            title={voiceMuted ? "Unmute Voice Readout" : "Mute Voice Readout"}
          >
            {voiceMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span className="text-[11px] hidden sm:inline">{voiceMuted ? "MUTED" : "VOICE ON"}</span>
          </button>

          {onToggleFloating && (
            <button
              onClick={onToggleFloating}
              className="p-1 rounded text-[#91A8BF] hover:text-white hover:bg-[#14243A]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Main Conversation Stream */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 max-h-[460px] scrollbar-thin">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex flex-col ${
              msg.sender === 'user' ? 'items-end' : 'items-start'
            }`}
          >
            <div className="text-[10px] text-[#91A8BF] mb-1 font-mono flex items-center gap-1">
              {msg.sender === 'user' ? (
                <span>USER_TERMINAL</span>
              ) : (
                <span className="text-[#00D4FF] flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" /> VENKY AI [AUTHORIZED RESPONDER]
                </span>
              )}
            </div>

            <div
              className={`p-3 rounded-md max-w-[92%] leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-[#14243A] text-[#EAF5FF] border border-[#007BFF55]'
                  : 'bg-[#101B2B] text-[#EAF5FF] border border-[#182A42] shadow-md'
              }`}
            >
              <div className="whitespace-pre-line text-xs sm:text-sm font-mono">
                {msg.text}
              </div>

              {/* Navigation Link Pill if present */}
              {msg.intent?.navigationTarget && (
                <div className="mt-2.5 pt-2 border-t border-[#182A42] flex items-center justify-between">
                  <button
                    onClick={() => onNavigateSection && onNavigateSection(msg.intent!.navigationTarget!)}
                    className="text-[11px] text-[#00D4FF] hover:underline flex items-center gap-1 bg-[#00D4FF15] px-2 py-1 rounded border border-[#00D4FF44]"
                  >
                    <Navigation className="w-3 h-3 text-[#00D4FF]" /> Jump to #{msg.intent.navigationTarget}
                  </button>
                  <span className="text-[10px] text-[#91A8BF]">Automatic navigation triggered</span>
                </div>
              )}
            </div>

            {/* Quick Suggested Follow-Up Prompts */}
            {msg.intent?.suggestedQuestions && i === messages.length - 1 && (
              <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[95%]">
                {msg.intent.suggestedQuestions.map((q, qIdx) => (
                  <button
                    key={qIdx}
                    onClick={() => handlePromptClick(q)}
                    className="text-[11px] bg-[#14243A] hover:bg-[#182A42] text-[#00D4FF] hover:text-white px-2.5 py-1 rounded border border-[#00D4FF33] hover:border-[#00D4FF] transition-all flex items-center gap-1"
                  >
                    <span>&gt;</span> {q}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Speech Error Banner */}
        {activeSpeechError && (
          <div className="p-2.5 bg-amber-950/30 border border-amber-600/40 rounded text-amber-300 text-xs font-mono">
            [SYS_NOTICE]: {activeSpeechError}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Console Bar */}
      <div className="bg-[#101B2B] p-3 border-t border-[#182A42]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUserQuery(inputQuery);
          }}
          className="flex items-center gap-2"
        >
          {/* Mic Toggle Button with Wave Indicator */}
          <button
            type="button"
            onClick={handleToggleMic}
            className={`p-2.5 rounded border transition-all flex items-center justify-center ${
              isListening
                ? 'bg-red-600/20 text-red-400 border-red-500 animate-pulse shadow-[0_0_12px_#ef4444]'
                : 'bg-[#14243A] text-[#00D4FF] border-[#182A42] hover:border-[#00D4FF]'
            }`}
            title={isListening ? "Listening... click to stop" : "Click to speak with VENKY AI"}
          >
            {isListening ? <Mic className="w-4 h-4 text-red-400" /> : <Mic className="w-4 h-4 text-[#00D4FF]" />}
          </button>

          {/* Terminal Command Input */}
          <div className="relative flex-1">
            <span className="absolute left-2.5 top-2.5 text-[#00D4FF] text-xs font-mono">&gt;</span>
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder={isListening ? "Listening to your voice..." : "Ask VENKY AI or enter command (e.g., 'show projects')..."}
              className="w-full bg-[#0B0F1A] border border-[#182A42] focus:border-[#00D4FF] focus:outline-none rounded py-2 pl-7 pr-3 text-xs sm:text-sm text-[#EAF5FF] font-mono placeholder:text-[#91A8BF]/60 transition-colors"
            />
          </div>

          {/* Send Button */}
          <button
            type="submit"
            disabled={!inputQuery.trim()}
            className="px-3.5 py-2 bg-[#007BFF] hover:bg-[#00D4FF] text-black font-semibold rounded text-xs font-mono flex items-center gap-1 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Send className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">RUN</span>
          </button>
        </form>
      </div>
    </div>
  );
};
