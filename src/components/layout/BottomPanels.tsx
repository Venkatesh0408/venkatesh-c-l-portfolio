import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight, Bot, Info, Palette } from 'lucide-react';
import { CircularWaveform } from '../assistant/CircularWaveform';

interface BottomPanelsProps {
  onAskQuestion: (q: string) => void;
  isListening: boolean;
  isSpeaking: boolean;
  onToggleMic: () => void;
}

export const BottomPanels: React.FC<BottomPanelsProps> = ({
  onAskQuestion,
  isListening,
  isSpeaking,
  onToggleMic,
}) => {
  const suggestedPrompts = [
    "Tell me about Venkatesh",
    "Show me his projects",
    "Explain his work experience",
    "What are his skills?",
    "Open contact section"
  ];

  const keyInfoList = [
    "Personal Intro & Vision",
    "Education (SSLC 70.8%, Diploma 75.4%, BE 7.8)",
    "Internships & Industrial Exposure (8 Months)",
    "Major Projects (4 Rigorous Case Studies)",
    "Technical Skills (No fake percentages)",
    "Achievements & Workshops",
    "Resume (View & Download PDF)",
    "Contact & Social Links"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 my-10 space-y-6 font-mono select-none">
      {/* 1. Animations & Interactions Storyboard Row */}
      <div className="bg-[#101B2B] border border-[#182A42] rounded-lg p-5 shadow-xl">
        <div className="flex items-center gap-2 pb-3 border-b border-[#182A42] mb-4">
          <Sparkles className="w-4 h-4 text-[#00D4FF]" />
          <h3 className="text-xs font-bold text-[#EAF5FF] tracking-wider">
            ANIMATIONS & INTERACTIONS STORYBOARD
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {/* Step 1 */}
          <div className="p-3.5 bg-[#0B0F1A] border border-[#182A42] rounded-lg flex flex-col justify-between">
            <div className="space-y-1">
              <span className="text-[10px] text-[#00D4FF] font-semibold">01 // SEQUENCE</span>
              <h4 className="font-bold text-[#EAF5FF]">Terminal Boot</h4>
              <p className="text-[11px] text-[#91A8BF]">
                BIOS & kernel telemetry initialization (2-3 seconds, skippable with ESC).
              </p>
            </div>
            <span className="text-[10px] text-[#00E599] mt-3 font-semibold">[✓] Ready State</span>
          </div>

          {/* Step 2 */}
          <div className="p-3.5 bg-[#0B0F1A] border border-[#182A42] rounded-lg flex flex-col justify-between">
            <div className="space-y-1">
              <span className="text-[10px] text-[#00D4FF] font-semibold">02 // REVEAL</span>
              <h4 className="font-bold text-[#EAF5FF]">Hero Reveal</h4>
              <p className="text-[11px] text-[#91A8BF]">
                Kali dragon backdrop, engineer silhouette, and live terminal prompt stream.
              </p>
            </div>
            <span className="text-[10px] text-[#00D4FF] mt-3 font-semibold">&gt; Engineer_Mode: ON</span>
          </div>

          {/* Step 3 */}
          <div className="p-3.5 bg-[#0B0F1A] border border-[#182A42] rounded-lg flex flex-col justify-between">
            <div className="space-y-1">
              <span className="text-[10px] text-[#00D4FF] font-semibold">03 // EXPLORATION</span>
              <h4 className="font-bold text-[#EAF5FF]">Scroll Animations</h4>
              <p className="text-[11px] text-[#91A8BF]">
                Smooth opacity and translate reveals with tactile border response.
              </p>
            </div>
            <span className="text-[10px] text-[#007BFF] mt-3 font-semibold">&gt; Parallax + Fade</span>
          </div>

          {/* Step 4 */}
          <div className="p-3.5 bg-[#0B0F1A] border border-[#182A42] rounded-lg flex flex-col justify-between">
            <div className="space-y-1">
              <span className="text-[10px] text-[#00D4FF] font-semibold">04 // ASSISTANCE</span>
              <h4 className="font-bold text-[#EAF5FF]">Voice Interaction</h4>
              <p className="text-[11px] text-[#91A8BF]">
                Speak or click commands to dynamically trigger audio readouts and section navigation.
              </p>
            </div>
            <span className="text-[10px] text-[#B388FF] mt-3 font-semibold">Speak → Respond → Navigate</span>
          </div>
        </div>
      </div>

      {/* 2. Voice Assistant (AI Bot) & System Spec Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left / Center: Voice Assistant (AI Bot) Panel */}
        <div className="lg:col-span-8 bg-[#101B2B] border border-[#182A42] rounded-lg p-5 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#182A42]">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-[#00D4FF]" />
              <h3 className="text-xs font-bold text-[#EAF5FF] tracking-wider">
                VOICE ASSISTANT (AI BOT) — LIVE INTERACTION HUB
              </h3>
            </div>
            <span className="text-[10px] text-[#00E599] font-mono">[READY TO GUIDE]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Waveform & Mic Trigger */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-3 bg-[#0B0F1A] rounded border border-[#182A42]">
              <CircularWaveform
                isListening={isListening}
                isSpeaking={isSpeaking}
                onClick={onToggleMic}
                size="sm"
              />
              <span className="text-[11px] text-[#91A8BF] mt-2">
                {isListening ? "Listening now..." : isSpeaking ? "Voice speaking..." : "Click mic to speak"}
              </span>
            </div>

            {/* Clickable Prompts List */}
            <div className="md:col-span-8 space-y-2">
              <span className="text-[11px] text-[#91A8BF] font-semibold block">
                COMMAND TRIGGERS (CLICK TO GUIDE VIEW):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {suggestedPrompts.map((prompt, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => onAskQuestion(prompt)}
                    className="text-xs bg-[#14243A] hover:bg-[#00D4FF] hover:text-black text-[#00D4FF] px-3 py-1.5 rounded border border-[#00D4FF44] transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <span>&gt;</span>
                    <span>"{prompt}"</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bot Response Live Example Readout */}
          <div className="p-3.5 bg-[#0B0F1A] border border-[#182A42] rounded-lg">
            <span className="text-[10px] text-[#00D4FF] font-semibold block mb-1">
              CURRENT VERIFIED KNOWLEDGE STREAM:
            </span>
            <p className="text-xs text-[#EAF5FF] leading-relaxed">
              "Venkatesh C L is a Robotics and Automation Engineer from Bengaluru. He completed his B.E. in Robotics & Automation with a CGPA of 7.8, a Diploma in EEE with 75.40% (CGPA 8.29), and has 8 months of verified industrial internship experience at Arrow Automation and XNG Automation."
            </p>
          </div>
        </div>

        {/* Right: Key Info & Color Theme Panel */}
        <div className="lg:col-span-4 space-y-4">
          {/* Key Information Checklist */}
          <div className="bg-[#101B2B] border border-[#182A42] rounded-lg p-4 shadow-xl">
            <div className="flex items-center gap-2 pb-2 border-b border-[#182A42] mb-3">
              <Info className="w-4 h-4 text-[#00D4FF]" />
              <h4 className="text-xs font-bold text-[#EAF5FF] tracking-wider">
                KEY INFORMATION (INCLUDED)
              </h4>
            </div>
            <ul className="space-y-1.5 text-xs text-[#91A8BF]">
              {keyInfoList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E599] shrink-0 mt-0.5" />
                  <span className="text-[11px] text-[#EAF5FF]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Color Theme (Kali-Inspired) */}
          <div className="bg-[#101B2B] border border-[#182A42] rounded-lg p-4 shadow-xl">
            <div className="flex items-center gap-2 pb-2 border-b border-[#182A42] mb-3">
              <Palette className="w-4 h-4 text-[#00D4FF]" />
              <h4 className="text-xs font-bold text-[#EAF5FF] tracking-wider">
                COLOR THEME (KALI-INSPIRED)
              </h4>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className="p-2 rounded bg-[#0B0F1A] border border-[#182A42]">
                <div className="w-5 h-5 mx-auto rounded-full bg-[#0B0F1A] border border-white/20 mb-1" />
                <span className="text-[#91A8BF] block font-mono">#0B0F1A</span>
                <span className="text-[#EAF5FF] text-[9px]">(Black)</span>
              </div>
              <div className="p-2 rounded bg-[#101B2B] border border-[#182A42]">
                <div className="w-5 h-5 mx-auto rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF] mb-1" />
                <span className="text-[#00D4FF] block font-mono">#00D4FF</span>
                <span className="text-[#EAF5FF] text-[9px]">(Light Blue)</span>
              </div>
              <div className="p-2 rounded bg-[#101B2B] border border-[#182A42]">
                <div className="w-5 h-5 mx-auto rounded-full bg-[#007BFF] shadow-[0_0_8px_#007BFF] mb-1" />
                <span className="text-[#007BFF] block font-mono">#007BFF</span>
                <span className="text-[#EAF5FF] text-[9px]">(Blue)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
