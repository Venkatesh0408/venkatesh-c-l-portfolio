import React, { useState, useEffect } from 'react';
import { Terminal, ChevronRight } from 'lucide-react';

interface BootSequenceProps {
  onComplete: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const bootScript = [
    "Initializing Portfolio...",
    "[✓] Loading assets...",
    "[✓] Mounting command interface...",
    "[✓] Initializing VENKY AI neural matrix...",
    "[✓] Loading engineering modules & CAD blueprints...",
    "[✓] System Online. Launching Engineering Cockpit..."
  ];

  const [stepIndex, setStepIndex] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setStepIndex((prev) => {
        if (prev < bootScript.length) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 350);
          return prev;
        }
      });
    }, 350);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        clearInterval(timer);
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  const visibleLines = bootScript.slice(0, stepIndex);
  const progress = Math.min(100, Math.round((stepIndex / bootScript.length) * 100));

  return (
    <div className="fixed inset-0 z-50 bg-[#0B0F1A] flex flex-col items-center justify-center p-4 font-mono select-none">
      <div className="w-full max-w-lg bg-[#101B2B] border border-[#00D4FF] rounded-lg shadow-[0_0_50px_rgba(0,212,255,0.25)] overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-[#14243A] px-4 py-2.5 border-b border-[#182A42] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-xs text-[#00D4FF] font-semibold">BOOT_KERNEL // VENKATESH_CL_SYSTEM</span>
          </div>
          <button
            onClick={onComplete}
            className="text-[11px] text-[#91A8BF] hover:text-[#00D4FF] border border-[#182A42] hover:border-[#00D4FF] px-2 py-0.5 rounded transition-all cursor-pointer"
          >
            [ESC] Skip Boot
          </button>
        </div>

        {/* Boot Terminal Screen */}
        <div className="p-6 space-y-2.5 text-xs sm:text-sm min-h-[220px]">
          {visibleLines.map((line, idx) => (
            <div key={idx} className="flex items-center gap-2 text-[#EAF5FF]">
              <ChevronRight className="w-3.5 h-3.5 text-[#00D4FF] shrink-0" />
              <span className={line && line.includes('[✓]') ? 'text-[#00E599]' : 'text-[#00D4FF]'}>
                {line}
              </span>
            </div>
          ))}
          {stepIndex < bootScript.length && (
            <div className="flex items-center gap-2 text-[#00D4FF]">
              <span className="w-2.5 h-4 bg-[#00D4FF] inline-block cmd-cursor" />
            </div>
          )}
        </div>

        {/* Progress Bar Footer */}
        <div className="p-4 bg-[#0B0F1A] border-t border-[#182A42] flex items-center justify-between gap-4">
          <div className="flex-1 bg-[#14243A] h-2 rounded-full overflow-hidden border border-[#182A42]">
            <div
              className="bg-gradient-to-r from-[#007BFF] to-[#00D4FF] h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-[#00D4FF] font-mono shrink-0">{progress}%</span>
        </div>
      </div>
    </div>
  );
};
