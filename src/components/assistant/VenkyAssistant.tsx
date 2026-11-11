import React, { useState, useEffect, useRef } from 'react';
import { Mic, Volume2, VolumeX, Send, Sparkles, Navigation, X, Bot, CheckCircle } from 'lucide-react';
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
      text: "Hello! Welcome to Venkatesh's engineering portfolio. I'm VENKY AI, his interactive engineering assistant. I can guide you through his robotics projects, industrial internships at Arrow & XNG Automation, skills, academic scores, and achievements. Speak to me or click any prompt below!",
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
          setActiveSpeechError('Microphone permission denied. Continuing in typed chat mode.');
        } else if (event.error === 'no-speech') {
          setActiveSpeechError('No speech detected. Please speak clearly or type below.');
        } else {
          setActiveSpeechError(`Audio note: ${event.error}`);
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
        setActiveSpeechError('Speech recognition is not supported in this browser. Please use text input.');
      }
    }
  };

  const handleUserQuery = (queryText: string) => {
    if (!queryText.trim()) return;

    const cleanUserText = queryText.trim();
    setMessages(prev => [...prev, { sender: 'user', text: cleanUserText }]);
    setInputQuery('');

    const matched = matchAssistantQuery(cleanUserText);

    setTimeout(() => {
      setMessages(prev => [...prev, {
        sender: 'venky',
        text: matched.displayedText || matched.spokenText,
        intent: matched
      }]);

      if (!voiceMuted && SpeechService.isSpeechSynthesisSupported()) {
        setIsSpeaking(true);
        SpeechService.speak(matched.spokenText, () => setIsSpeaking(false), () => setIsSpeaking(false));
      }

      if (matched.navigationTarget && onNavigateSection) {
        onNavigateSection(matched.navigationTarget);
      }

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
    <div className="flex flex-col h-full bg-navy-950 border-l border-navy-800 shadow-2xl overflow-hidden text-sm">
      {/* Modern Header */}
      <div className="bg-navy-900 px-5 py-4 border-b border-navy-800 flex items-center justify-between select-none">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-accent-blue/20 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan">
            <Bot className="w-4 h-4 text-accent-cyan" />
          </div>
          <div>
            <div className="text-white font-bold text-xs flex items-center gap-1.5">
              <span>VENKY AI ASSISTANT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="text-[10px] text-slate-400">Interactive Voice & Portfolio Guide</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Mute Voice Toggle */}
          <button
            onClick={handleToggleMute}
            className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-all ${
              voiceMuted
                ? 'bg-red-950/40 text-red-400 border border-red-800/50'
                : 'bg-navy-800 text-accent-cyan border border-navy-700 hover:border-accent-cyan'
            }`}
            title={voiceMuted ? "Unmute Voice" : "Mute Voice"}
          >
            {voiceMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span className="text-[10px] font-bold hidden sm:inline">{voiceMuted ? "MUTED" : "VOICE"}</span>
          </button>

          {onToggleFloating && (
            <button
              onClick={onToggleFloating}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-navy-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Main Conversation Stream */}
      <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 max-h-[480px] scrollbar-thin">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex flex-col ${
              msg.sender === 'user' ? 'items-end' : 'items-start'
            }`}
          >
            <div className="text-[10px] text-slate-400 mb-1 font-semibold flex items-center gap-1">
              {msg.sender === 'user' ? (
                <span>YOU</span>
              ) : (
                <span className="text-accent-cyan flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" /> VENKY AI
                </span>
              )}
            </div>

            <div
              className={`p-3.5 rounded-2xl max-w-[92%] leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-accent-blue to-accent-cyan text-white shadow-md rounded-tr-sm'
                  : 'bg-navy-900 text-slate-200 border border-navy-800 shadow-md rounded-tl-sm'
              }`}
            >
              <div className="whitespace-pre-line text-xs sm:text-sm">
                {msg.text}
              </div>

              {/* Navigation Link Pill if present */}
              {msg.intent?.navigationTarget && (
                <div className="mt-3 pt-2 border-t border-navy-700/80 flex items-center justify-between">
                  <button
                    onClick={() => onNavigateSection && onNavigateSection(msg.intent!.navigationTarget!)}
                    className="text-[11px] text-accent-cyan hover:underline flex items-center gap-1 bg-accent-blue/15 px-2.5 py-1 rounded-md border border-accent-cyan/30"
                  >
                    <Navigation className="w-3 h-3 text-accent-cyan" /> Scroll to #{msg.intent.navigationTarget}
                  </button>
                  <span className="text-[10px] text-slate-400">Section linked</span>
                </div>
              )}
            </div>

            {/* Quick Suggested Follow-Up Prompts */}
            {msg.intent?.suggestedQuestions && i === messages.length - 1 && (
              <div className="mt-3 flex flex-wrap gap-1.5 max-w-[95%]">
                {msg.intent.suggestedQuestions.map((q, qIdx) => (
                  <button
                    key={qIdx}
                    onClick={() => handlePromptClick(q)}
                    className="text-[11px] bg-navy-900 hover:bg-navy-800 text-accent-cyan hover:text-white px-3 py-1.5 rounded-lg border border-accent-cyan/30 hover:border-accent-cyan transition-all flex items-center gap-1 font-medium"
                  >
                    <span>›</span> {q}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Speech Error Banner */}
        {activeSpeechError && (
          <div className="p-3 bg-amber-950/30 border border-amber-600/40 rounded-xl text-amber-300 text-xs">
            {activeSpeechError}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Console Bar */}
      <div className="bg-navy-900 p-3.5 border-t border-navy-800">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUserQuery(inputQuery);
          }}
          className="flex items-center gap-2"
        >
          {/* Mic Toggle Button */}
          <button
            type="button"
            onClick={handleToggleMic}
            className={`p-2.5 rounded-xl border transition-all flex items-center justify-center ${
              isListening
                ? 'bg-red-600/20 text-red-400 border-red-500 animate-pulse shadow-[0_0_12px_#ef4444]'
                : 'bg-navy-950 text-accent-cyan border-navy-800 hover:border-accent-cyan'
            }`}
            title={isListening ? "Listening... click to stop" : "Click to speak"}
          >
            <Mic className="w-4 h-4" />
          </button>

          {/* Text Input */}
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder={isListening ? "Listening to your voice..." : "Ask VENKY AI a question..."}
            className="flex-1 bg-navy-950 border border-navy-800 focus:border-accent-cyan focus:outline-none rounded-xl py-2 px-3 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors"
          />

          {/* Send Button */}
          <button
            type="submit"
            disabled={!inputQuery.trim()}
            className="px-4 py-2 bg-gradient-to-r from-accent-blue to-accent-cyan hover:opacity-95 text-white font-bold rounded-xl text-xs flex items-center gap-1 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Send className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Ask</span>
          </button>
        </form>
      </div>
    </div>
  );
};
