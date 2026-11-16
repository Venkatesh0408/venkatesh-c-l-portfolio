import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Send, Sparkles, Navigation, X, Bot, Play, Mail, CheckCircle2, MessageSquare } from 'lucide-react';
import { matchAssistantQuery, SpeechService } from '../../services/assistantEngine';
import { AssistantIntent } from '../../data/faqKnowledgeBase';
import { WhatsappIcon } from '../ui/Icons';
import { profileData } from '../../data/profile';

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
      text: "👋 Welcome! I am VENKY AI, Venkatesh C L's interactive robotics engineering assistant. I can guide you through his Submersible Micro Robot prototype, 7 months of industrial automation experience at Arrow & XNG Automation, academic scores, and technical skills.\n\nYou can speak to me, type below, or record a voice comment directly for Venkatesh!",
      intent: {
        id: 'welcome',
        keywords: [],
        spokenText: "Hello and welcome! I am VENKY AI, Venkatesh's robotics engineering assistant. I can guide you through his projects, industrial training, and credentials. What would you like to explore?",
        displayedText: "",
        suggestedQuestions: [
          "Tell me about Venkatesh",
          "Show me his projects",
          "Explain the Submersible Micro Robot",
          "Explain his work experience",
          "What are his technical skills?",
          "How can I contact Venkatesh?"
        ]
      }
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceMuted, setVoiceMuted] = useState(false);
  const [activeSpeechError, setActiveSpeechError] = useState<string | null>(null);
  const [voiceCommentMode, setVoiceCommentMode] = useState(false);
  const [recordedVoiceComment, setRecordedVoiceComment] = useState<string | null>(null);

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

        if (voiceCommentMode) {
          setRecordedVoiceComment(spoken);
          setVoiceCommentMode(false);
        } else {
          handleUserQuery(spoken);
        }
      };

      recognition.onerror = (event: any) => {
        setIsListening(false);
        setVoiceCommentMode(false);
        if (event.error === 'not-allowed') {
          setActiveSpeechError('Microphone permission denied. You can continue typing below.');
        } else if (event.error === 'no-speech') {
          setActiveSpeechError('No speech detected. Please try clicking the microphone again and speaking clearly.');
        } else {
          setActiveSpeechError(`Audio notice: ${event.error}`);
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, [voiceCommentMode]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, recordedVoiceComment]);

  const handleToggleMic = (isCommentMode = false) => {
    if (isListening) {
      if (recognitionRef.current) recognitionRef.current.stop();
      setIsListening(false);
      setVoiceCommentMode(false);
    } else {
      if (recognitionRef.current) {
        SpeechService.stopSpeaking();
        setIsSpeaking(false);
        setVoiceCommentMode(isCommentMode);
        try {
          recognitionRef.current.start();
        } catch (e) {
          console.warn(e);
        }
      } else {
        setActiveSpeechError('Speech recognition is not supported in this browser. Please use the keyboard input.');
      }
    }
  };

  const handleUserQuery = (queryText: string) => {
    if (!queryText.trim()) return;

    const cleanUserText = queryText.trim();
    setMessages(prev => [...prev, { sender: 'user', text: cleanUserText }]);
    setInputQuery('');
    setRecordedVoiceComment(null);

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

  const playWelcomeSpeech = () => {
    if (isSpeaking) {
      SpeechService.stopSpeaking();
      setIsSpeaking(false);
      return;
    }

    const welcomeMsg = "Hello and welcome to Venkatesh C L's portfolio! I am VENKY AI, his robotics engineering assistant. I can guide you through his Submersible Micro Robot, industrial automation experience at Arrow and XNG Automation, and his technical skills. Feel free to speak or type any question, or leave a voice comment for Venkatesh!";
    setIsSpeaking(true);
    SpeechService.speak(welcomeMsg, () => setIsSpeaking(false), () => setIsSpeaking(false));
  };

  return (
    <div className="flex flex-col h-full bg-neutral-950 border-l border-neutral-800 shadow-2xl overflow-hidden text-sm">
      
      {/* HUD Header */}
      <div className="bg-neutral-900 px-5 py-4 border-b border-neutral-800 flex items-center justify-between select-none">
        <div className="flex items-center gap-2.5 font-mono">
          <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-white font-bold text-xs flex items-center gap-1.5">
              <span>VENKY AI // ASSISTANT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </div>
            <div className="text-[10px] text-neutral-400">
              Natural Voice & Interactive Guide
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono">
          {/* Mute Voice Toggle */}
          <button
            onClick={handleToggleMute}
            className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-all cursor-pointer ${
              voiceMuted
                ? 'bg-neutral-800 text-neutral-400 border border-neutral-700'
                : 'bg-neutral-800 text-white border border-neutral-700 hover:border-white'
            }`}
            title={voiceMuted ? "Unmute Voice" : "Mute Voice"}
          >
            {voiceMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span className="text-[10px] font-bold hidden sm:inline">{voiceMuted ? "MUTED" : "VOICE"}</span>
          </button>

          {onToggleFloating && (
            <button
              onClick={onToggleFloating}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              title="Close drawer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Proactive Welcome Banner with Audio Intro Button */}
      <div className="bg-neutral-900/80 px-4 py-3 border-b border-neutral-800 flex items-center justify-between gap-3 font-mono text-xs">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-white shrink-0" />
          <span className="text-neutral-300 text-[11px] truncate">
            {isSpeaking ? "Speaking now..." : "Natural Voice Engine Ready"}
          </span>
        </div>
        <button
          onClick={playWelcomeSpeech}
          className={`px-3 py-1 rounded-md text-[11px] font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
            isSpeaking
              ? 'bg-white text-black animate-pulse'
              : 'bg-neutral-800 text-white hover:bg-white hover:text-black border border-neutral-700'
          }`}
          title="Listen to spoken introduction"
        >
          <Play className="w-3 h-3" />
          <span>{isSpeaking ? "Stop Speaking" : "Play Welcome Voice"}</span>
        </button>
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
            <div className="text-[10px] text-neutral-400 mb-1 font-mono font-semibold flex items-center gap-1">
              {msg.sender === 'user' ? (
                <span>COMMAND_INPUT</span>
              ) : (
                <span className="text-white flex items-center gap-1">
                  <Bot className="w-3 h-3 text-white" /> VENKY AI [AUTHORIZED ASSISTANT]
                </span>
              )}
            </div>

            <div
              className={`p-3.5 rounded-2xl max-w-[92%] leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-white text-black font-medium shadow-md rounded-tr-sm'
                  : 'bg-neutral-900 text-neutral-200 border border-neutral-800 shadow-md rounded-tl-sm'
              }`}
            >
              <div className="whitespace-pre-line text-xs sm:text-sm">
                {msg.text}
              </div>

              {/* Navigation Link Pill if present */}
              {msg.intent?.navigationTarget && (
                <div className="mt-3 pt-2 border-t border-neutral-800 flex items-center justify-between">
                  <button
                    onClick={() => onNavigateSection && onNavigateSection(msg.intent!.navigationTarget!)}
                    className="text-[11px] font-mono text-white hover:underline flex items-center gap-1 bg-neutral-800 px-2.5 py-1 rounded-md border border-neutral-700 cursor-pointer"
                  >
                    <Navigation className="w-3 h-3 text-white" /> Jump to #{msg.intent.navigationTarget}
                  </button>
                  <span className="text-[10px] font-mono text-neutral-400">Navigation guide</span>
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
                    className="text-[11px] font-mono bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white px-3 py-1.5 rounded-lg border border-neutral-800 hover:border-neutral-600 transition-all flex items-center gap-1 font-medium cursor-pointer"
                  >
                    <span>›</span> {q}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Live Voice Recording Status */}
        {isListening && (
          <div className="p-3.5 rounded-xl bg-neutral-900 border border-white/40 flex items-center gap-3 animate-pulse">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
            <div className="text-xs font-mono text-white">
              {voiceCommentMode
                ? "🎙️ Recording your voice comment for Venkatesh... Please speak clearly."
                : "🎙️ Listening to your question... Speak now."}
            </div>
          </div>
        )}

        {/* Recorded Voice Comment Card with Send Options */}
        {recordedVoiceComment && (
          <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-700 space-y-3 font-mono text-xs">
            <div className="flex items-center gap-1.5 text-white font-bold">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>TRANSCRIBED VOICE COMMENT</span>
            </div>
            <p className="text-neutral-200 bg-black/60 p-3 rounded-xl border border-neutral-800 italic">
              &ldquo;{recordedVoiceComment}&rdquo;
            </p>
            <div className="text-[11px] text-neutral-400">
              Choose how you would like to send your comment to Venkatesh:
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {/* WhatsApp direct */}
              <a
                href={`https://wa.me/918147134789?text=${encodeURIComponent(
                  `Hello Venkatesh, here is a voice comment from your portfolio:\n\n"${recordedVoiceComment}"`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white text-black font-bold flex items-center gap-1.5 hover:bg-neutral-200 transition-colors shadow-sm"
              >
                <WhatsappIcon className="w-3.5 h-3.5" />
                <span>Send via WhatsApp</span>
              </a>

              {/* Email direct */}
              <a
                href={`mailto:${profileData.email}?subject=Voice%20Comment%20from%20Portfolio&body=${encodeURIComponent(
                  `Hello Venkatesh,\n\nHere is a voice comment recorded on your portfolio:\n\n"${recordedVoiceComment}"`
                )}`}
                className="px-3 py-1.5 rounded-lg bg-neutral-800 text-white font-bold flex items-center gap-1.5 hover:bg-neutral-700 border border-neutral-700 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send via Email</span>
              </a>

              {/* Ask VENKY AI */}
              <button
                onClick={() => handleUserQuery(recordedVoiceComment)}
                className="px-3 py-1.5 rounded-lg bg-neutral-800 text-neutral-300 font-bold flex items-center gap-1.5 hover:text-white border border-neutral-700 transition-colors cursor-pointer"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Ask VENKY AI</span>
              </button>
            </div>
          </div>
        )}

        {/* Speech Error Banner */}
        {activeSpeechError && (
          <div className="p-3 bg-neutral-900 border border-neutral-700 rounded-xl text-neutral-300 text-xs font-mono">
            {activeSpeechError}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Voice Comment Quick Action Bar */}
      <div className="px-4 py-2 bg-neutral-900/90 border-t border-neutral-850 flex items-center justify-between font-mono text-[11px]">
        <button
          onClick={() => handleToggleMic(true)}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
            isListening && voiceCommentMode
              ? 'bg-red-950 text-red-300 border border-red-800 animate-pulse'
              : 'text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700'
          }`}
          title="Record a voice comment to send to Venkatesh"
        >
          <Mic className="w-3.5 h-3.5" />
          <span>{isListening && voiceCommentMode ? "Recording Comment..." : "Record Voice Comment"}</span>
        </button>

        <span className="text-neutral-500 hidden sm:inline">
          WhatsApp & Email connected
        </span>
      </div>

      {/* Input Console Bar */}
      <div className="bg-neutral-900 p-3.5 border-t border-neutral-800">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUserQuery(inputQuery);
          }}
          className="flex items-center gap-2"
        >
          {/* Mic Toggle Button for Queries */}
          <button
            type="button"
            onClick={() => handleToggleMic(false)}
            className={`p-2.5 rounded-xl border transition-all flex items-center justify-center cursor-pointer ${
              isListening && !voiceCommentMode
                ? 'bg-neutral-800 text-white border-white animate-pulse'
                : 'bg-black text-neutral-300 border-neutral-800 hover:border-neutral-600'
            }`}
            title={isListening ? "Listening... click to stop" : "Speak to VENKY AI"}
          >
            {isListening ? <Mic className="w-4 h-4 text-white" /> : <Mic className="w-4 h-4" />}
          </button>

          {/* Text Input */}
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder={isListening ? "Listening to your voice..." : "Ask VENKY AI or enter a query..."}
            className="flex-1 bg-black border border-neutral-800 focus:border-white focus:outline-none rounded-xl py-2 px-3 text-xs sm:text-sm text-white placeholder-neutral-500 transition-colors font-mono"
          />

          {/* Send Button */}
          <button
            type="submit"
            disabled={!inputQuery.trim()}
            className="px-4 py-2 bg-white hover:bg-neutral-200 text-black font-mono font-bold rounded-xl text-xs flex items-center gap-1 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer shadow-sm"
          >
            <Send className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Ask</span>
          </button>
        </form>
      </div>
    </div>
  );
};
