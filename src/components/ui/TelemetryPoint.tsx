import React, { useState } from 'react';
import { ChevronRight, Sparkles, AlertTriangle } from 'lucide-react';

interface TelemetryPointProps {
  id: string;
  index: number;
  label: string;
  tag?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  accentColor?: string;
  isOpenDefault?: boolean;
  onInspect?: () => void;
  inspectLabel?: string;
}

export const TelemetryPoint: React.FC<TelemetryPointProps> = ({
  id,
  index,
  label,
  tag,
  icon,
  children,
  accentColor = "#00D4FF",
  isOpenDefault = false,
  onInspect,
  inspectLabel = "Inspect Dossier"
}) => {
  const [isHovered, setIsHovered] = useState(isOpenDefault);

  return (
    <div
      className="relative group transition-all duration-300 font-mono"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      {/* 1. The Interactive Radar Point / Pin */}
      <div
        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer select-none transition-all duration-300 backdrop-blur-md ${
          isHovered
            ? 'bg-[#001226]/90 border-[#00D4FF] shadow-[0_0_25px_rgba(0,212,255,0.35)] translate-x-1'
            : 'bg-[#050B14]/80 border-[#14243A] hover:border-[#007BFF88]'
        }`}
      >
        {/* Pulsing Node Dot */}
        <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-[#000000] border border-[#007BFF] shrink-0">
          <span
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              isHovered ? 'bg-[#00D4FF] scale-125 shadow-[0_0_12px_#00D4FF]' : 'bg-[#007BFF]'
            }`}
          />
          {/* Animated sonar ring */}
          <span
            className={`absolute inset-0 rounded-full border border-[#00D4FF] transition-all duration-700 ${
              isHovered ? 'animate-ping opacity-75' : 'opacity-0'
            }`}
          />
        </div>

        {/* Minimal Point Header */}
        <div className="flex-1 min-w-0 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="text-[10px] text-[#007BFF] font-bold shrink-0">
              [PNT 0{index}]
            </span>
            <span className={`text-xs sm:text-sm font-bold truncate transition-colors ${
              isHovered ? 'text-[#00D4FF] glow-text-cyan' : 'text-[#EAF5FF]'
            }`}>
              {label}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {tag && (
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#00D4FF15] text-[#00D4FF] border border-[#00D4FF33]">
                {tag}
              </span>
            )}
            <span className={`text-[10px] text-[#91A8BF] transition-transform duration-300 ${
              isHovered ? 'rotate-90 text-[#00D4FF]' : ''
            }`}>
              ▶
            </span>
          </div>
        </div>
      </div>

      {/* 2. Revealed Detail HUD (Appears when mouse pointer is near / on the point) */}
      {isHovered && (
        <div className="mt-2 p-4 rounded-lg bg-[#080E1A]/95 border border-[#00D4FF88] shadow-[0_10px_35px_rgba(0,0,0,0.9),0_0_20px_rgba(0,212,255,0.2)] text-xs text-[#EAF5FF] animate-in fade-in slide-in-from-top-2 duration-200 z-20 space-y-3">
          {/* HUD Target Lock header */}
          <div className="flex items-center justify-between pb-2 border-b border-[#14243A] text-[10px] text-[#91A8BF]">
            <span className="flex items-center gap-1.5 text-[#00D4FF]">
              <Sparkles className="w-3 h-3 text-[#00D4FF]" />
              TELEMETRY_LOCK // {label.toUpperCase()}
            </span>
            <span>STATUS: ACTIVE</span>
          </div>

          {/* Point Content Body */}
          <div className="space-y-2 leading-relaxed text-[#91A8BF]">
            {children}
          </div>

          {/* Action button if inspectable */}
          {onInspect && (
            <div className="pt-2 border-t border-[#14243A] flex justify-end">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onInspect();
                }}
                className="px-3 py-1.5 bg-[#00D4FF] hover:bg-white text-black font-bold text-xs rounded transition-all flex items-center gap-1 shadow-[0_0_12px_rgba(0,212,255,0.3)]"
              >
                <span>&gt; {inspectLabel}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
