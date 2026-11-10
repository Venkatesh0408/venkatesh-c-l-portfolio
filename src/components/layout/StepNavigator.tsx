import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, Terminal, Sparkles, Volume2, VolumeX } from 'lucide-react';

export interface StepItem {
  id: string;
  number: string;
  label: string;
  cmd: string;
}

export const stepsList: StepItem[] = [
  { id: 'identity', number: '01', label: 'IDENTITY', cmd: 'whoami' },
  { id: 'education', number: '02', label: 'EDUCATION', cmd: 'academics' },
  { id: 'experience', number: '03', label: 'EXPERIENCE', cmd: 'internships' },
  { id: 'projects', number: '04', label: 'PROJECTS', cmd: 'systems' },
  { id: 'skills', number: '05', label: 'SKILLS', cmd: 'toolchain' },
  { id: 'achievements', number: '06', label: 'HONORS', cmd: 'credentials' },
  { id: 'contact', number: '07', label: 'CONTACT', cmd: 'comms' }
];

interface StepNavigatorProps {
  currentStepIndex: number;
  onSelectStep: (index: number) => void;
  voiceEnabled: boolean;
  onToggleVoice: () => void;
  onOpenAssistant: () => void;
}

export const StepNavigator: React.FC<StepNavigatorProps> = ({
  currentStepIndex,
  onSelectStep,
  voiceEnabled,
  onToggleVoice,
  onOpenAssistant
}) => {
  const currentStep = stepsList[currentStepIndex];

  // Arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowRight') {
        if (currentStepIndex < stepsList.length - 1) onSelectStep(currentStepIndex + 1);
      } else if (e.key === 'ArrowLeft') {
        if (currentStepIndex > 0) onSelectStep(currentStepIndex - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStepIndex, onSelectStep]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#000000]/95 backdrop-blur-md border-b border-[#14243A] font-mono select-none">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Brand Terminal Node */}
        <div
          onClick={() => onSelectStep(0)}
          className="flex items-center gap-2 cursor-pointer group shrink-0"
        >
          <span className="text-[#00D4FF] font-bold text-sm tracking-wider flex items-center gap-1 group-hover:glow-text-cyan transition-all">
            <span className="text-[#007BFF]">&gt;_</span> Venkatesh C L
          </span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-[#0A1220] text-[#91A8BF] border border-[#14243A] rounded">
            STEP {currentStep.number}/07
          </span>
        </div>

        {/* Desktop Step Pipeline */}
        <div className="hidden lg:flex items-center gap-1">
          {stepsList.map((step, idx) => {
            const isActive = idx === currentStepIndex;
            const isCompleted = idx < currentStepIndex;
            return (
              <button
                key={step.id}
                onClick={() => onSelectStep(idx)}
                className={`px-3 py-1 rounded text-xs transition-all flex items-center gap-1.5 border ${
                  isActive
                    ? 'bg-[#002244] text-[#00D4FF] border-[#00D4FF] font-bold shadow-[0_0_15px_rgba(0,212,255,0.3)]'
                    : isCompleted
                    ? 'bg-[#050B14] text-[#91A8BF] border-[#14243A] hover:border-[#007BFF]'
                    : 'text-[#91A8BF]/60 border-transparent hover:text-white'
                }`}
              >
                <span className={isActive ? 'text-[#00D4FF]' : 'text-[#007BFF]'}>
                  {step.number}
                </span>
                <span>{step.label}</span>
              </button>
            );
          })}
        </div>

        {/* Step Direction Controls & Assistant */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Previous Step Button */}
          <button
            onClick={() => onSelectStep(Math.max(0, currentStepIndex - 1))}
            disabled={currentStepIndex === 0}
            className="p-2 rounded bg-[#0A1220] hover:bg-[#14243A] text-[#00D4FF] border border-[#14243A] hover:border-[#00D4FF] transition-all disabled:opacity-30 disabled:cursor-not-allowed text-xs flex items-center gap-1"
            title="Previous Step (Left Arrow Key)"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">PREV</span>
          </button>

          {/* Next Step Button */}
          <button
            onClick={() => onSelectStep(Math.min(stepsList.length - 1, currentStepIndex + 1))}
            disabled={currentStepIndex === stepsList.length - 1}
            className="p-2 rounded bg-[#007BFF] hover:bg-[#00D4FF] text-black font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed text-xs flex items-center gap-1 shadow-[0_0_12px_rgba(0,123,255,0.3)]"
            title="Next Step (Right Arrow Key)"
          >
            <span className="hidden sm:inline">NEXT</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Audio Synthesizer Toggle */}
          <button
            onClick={onToggleVoice}
            className={`p-2 rounded text-xs border transition-all ${
              voiceEnabled
                ? 'bg-[#002244] text-[#00D4FF] border-[#00D4FF44]'
                : 'bg-[#0A1220] text-[#91A8BF] border-[#14243A]'
            }`}
            title={voiceEnabled ? "Voice Feedback Active" : "Voice Muted"}
          >
            {voiceEnabled ? <Volume2 className="w-4 h-4 text-[#00D4FF]" /> : <VolumeX className="w-4 h-4 text-[#91A8BF]" />}
          </button>

          {/* Assistant Trigger */}
          <button
            onClick={onOpenAssistant}
            className="px-3 py-1.5 bg-[#00D4FF18] hover:bg-[#00D4FF] text-[#00D4FF] hover:text-black font-bold text-xs border border-[#00D4FF] rounded flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(0,212,255,0.2)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden md:inline">VENKY AI</span>
          </button>
        </div>
      </div>
    </header>
  );
};
