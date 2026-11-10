import React, { useEffect, useState } from 'react';
import { Mic, Volume2 } from 'lucide-react';

interface CircularWaveformProps {
  isListening: boolean;
  isSpeaking: boolean;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export const CircularWaveform: React.FC<CircularWaveformProps> = ({
  isListening,
  isSpeaking,
  onClick,
  size = 'md'
}) => {
  const [pulseHeights, setPulseHeights] = useState<number[]>([12, 24, 18, 32, 45, 28, 40, 22, 36, 16, 28, 14]);

  useEffect(() => {
    if (!isListening && !isSpeaking) {
      setPulseHeights([8, 14, 10, 18, 22, 16, 20, 12, 16, 10, 14, 8]);
      return;
    }

    const interval = setInterval(() => {
      setPulseHeights(prev =>
        prev.map(() => Math.floor(Math.random() * 38) + 12)
      );
    }, 120);

    return () => clearInterval(interval);
  }, [isListening, isSpeaking]);

  const sizeClass = size === 'sm' ? 'w-24 h-24' : size === 'lg' ? 'w-48 h-48' : 'w-36 h-36';

  return (
    <div
      onClick={onClick}
      className={`relative ${sizeClass} rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 group select-none`}
      role="button"
      tabIndex={0}
      title={isListening ? "Listening... Click to stop" : isSpeaking ? "Speaking... Click to pause" : "Click to Speak with VENKY AI"}
    >
      {/* Outer Pulse Rings */}
      <div className={`absolute inset-0 rounded-full border border-[#00D4FF44] transition-all duration-700 ${
        (isListening || isSpeaking) ? 'scale-110 border-[#00D4FF] shadow-[0_0_25px_rgba(0,212,255,0.4)] animate-pulse' : 'group-hover:border-[#00D4FF88]'
      }`} />
      
      <div className={`absolute inset-2 rounded-full border border-dashed border-[#007BFF44] ${
        (isListening || isSpeaking) ? 'animate-spin border-[#007BFF]' : 'group-hover:border-[#007BFF88]'
      }`} style={{ animationDuration: '10s' }} />

      {/* Dark Inner Core */}
      <div className="absolute inset-4 rounded-full bg-[#0B0F1A] border border-[#182A42] flex items-center justify-center shadow-inner overflow-hidden">
        {/* Radial Waveform Bars */}
        <div className="flex items-center justify-center gap-[3px] z-10 px-3">
          {pulseHeights.map((h, idx) => (
            <div
              key={idx}
              className={`w-[3px] rounded-full transition-all duration-100 ${
                isListening
                  ? 'bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]'
                  : isSpeaking
                  ? 'bg-[#007BFF] shadow-[0_0_8px_#007BFF]'
                  : 'bg-[#91A8BF44] group-hover:bg-[#00D4FF88]'
              }`}
              style={{
                height: `${h}px`,
              }}
            />
          ))}
        </div>

        {/* Status Indicator Icon overlay */}
        <div className="absolute bottom-2 text-[10px] text-[#00D4FF] tracking-wider font-mono flex items-center gap-1 opacity-80 group-hover:opacity-100">
          {isListening ? (
            <span className="flex items-center gap-1 text-xs text-[#00D4FF] animate-pulse">
              <Mic className="w-3 h-3 text-[#00D4FF]" /> REC
            </span>
          ) : isSpeaking ? (
            <span className="flex items-center gap-1 text-xs text-[#007BFF] animate-pulse">
              <Volume2 className="w-3 h-3 text-[#007BFF]" /> SPEAKING
            </span>
          ) : (
            <span className="text-[10px] text-[#91A8BF]">VOICE AI</span>
          )}
        </div>
      </div>
    </div>
  );
};
