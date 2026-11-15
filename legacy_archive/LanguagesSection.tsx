import React from 'react';
import { Globe2, MessageSquare, CheckCircle } from 'lucide-react';
import { languagesData, LanguageItem } from '../data/languages';

export const LanguagesSection: React.FC = () => {
  return (
    <section id="languages" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto font-mono scroll-mt-14">
      {/* Section Header */}
      <div className="flex items-center gap-2 pb-3 border-b border-[#182A42] mb-8">
        <span className="text-[#00D4FF]">&gt;</span>
        <h2 className="text-xl sm:text-2xl font-black text-[#EAF5FF] tracking-wider flex items-center gap-2">
          <Globe2 className="w-5 h-5 text-[#00D4FF]" />
          COMMUNICATION // LANGUAGES
        </h2>
        <span className="text-[10px] text-[#91A8BF] ml-auto border border-[#182A42] px-2 py-0.5 rounded">
          [RESUME VERIFIED PROFICIENCY]
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {languagesData.map((lang: LanguageItem, idx: number) => (
          <div
            key={idx}
            className="p-5 bg-[#101B2B] border border-[#182A42] hover:border-[#00D4FF] rounded-lg transition-all duration-300 shadow-xl group space-y-3"
          >
            <div className="flex items-center justify-between pb-2.5 border-b border-[#182A42]">
              <span className="text-xs text-[#007BFF] font-semibold">0{idx + 1} // LANG</span>
              <span className="text-[10px] bg-[#00D4FF15] text-[#00D4FF] border border-[#00D4FF44] px-2 py-0.5 rounded font-bold">
                {lang.level}
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#EAF5FF] group-hover:text-[#00D4FF] transition-colors">
                {lang.name}
              </h3>
              <span className="text-xs text-[#007BFF] block font-semibold">
                {lang.type}
              </span>
            </div>

            <p className="text-xs text-[#91A8BF] leading-relaxed">
              {lang.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
