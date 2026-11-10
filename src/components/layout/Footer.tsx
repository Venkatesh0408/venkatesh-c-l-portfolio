import React from 'react';
import { Terminal, ShieldCheck, Heart } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080B12] border-t border-[#182A42] py-8 px-4 sm:px-6 font-mono text-xs select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[#91A8BF]">
        {/* Left: Terminal status & identity */}
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#00D4FF]" />
          <span className="text-[#EAF5FF] font-semibold">{profileData.name}</span>
          <span className="text-[#182A42]">|</span>
          <span className="text-[#00D4FF]">ENGINEERING_COMMAND_CENTER</span>
        </div>

        {/* Center: Verification status */}
        <div className="flex items-center gap-2 text-[11px] text-[#00E599]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>RIGOROUS TRUTH-CHECKED SPECIFICATION • ZERO SYNTHETIC METRICS</span>
        </div>

        {/* Right: Copyright & GPS */}
        <div className="text-[11px] text-right">
          <div>© {new Date().getFullYear()} Venkatesh C L. All Rights Reserved.</div>
          <div className="text-[#91A8BF]/60 text-[10px]">{profileData.gpsCoordinates}</div>
        </div>
      </div>
    </footer>
  );
};
