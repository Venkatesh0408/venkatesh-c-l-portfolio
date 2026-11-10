import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { educationData, EducationItem } from '../data/education';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto font-mono scroll-mt-14">
      {/* Section Header */}
      <div className="flex items-center gap-2 pb-3 border-b border-[#182A42] mb-8">
        <span className="text-[#00D4FF]">&gt;</span>
        <h2 className="text-xl sm:text-2xl font-black text-[#EAF5FF] tracking-wider flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-[#00D4FF]" />
          ACADEMIC_TRAJECTORY // EDUCATION
        </h2>
        <span className="text-[10px] text-[#00D4FF] ml-auto border border-[#00D4FF44] px-2 py-0.5 rounded">
          [FORMAL CREDENTIALS]
        </span>
      </div>

      <div className="space-y-6">
        {educationData.map((edu: EducationItem, idx: number) => (
          <div
            key={edu.id}
            className="bg-[#101B2B] border border-[#182A42] hover:border-[#00D4FF] rounded-lg p-5 sm:p-6 shadow-xl transition-all duration-300 relative group"
          >
            {/* Top Indicator */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#182A42] mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#00D4FF] font-semibold">0{idx + 1} // {edu.discipline.toUpperCase()}</span>
                <span className="text-[10px] bg-emerald-950/40 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 rounded">
                  [VERIFIED]
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#91A8BF]">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#007BFF]" /> {edu.period}
                </span>
                <span className="px-2.5 py-0.5 bg-[#00D4FF15] text-[#00D4FF] font-bold border border-[#00D4FF44] rounded">
                  {edu.score}
                </span>
              </div>
            </div>

            {/* Main Degree Info */}
            <div className="space-y-2">
              <h3 className="text-base sm:text-xl font-bold text-[#EAF5FF] group-hover:text-[#00D4FF] transition-colors">
                {edu.degree}
              </h3>
              <div className="text-xs sm:text-sm text-[#91A8BF] flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#00D4FF]" />
                <span>{edu.institution}</span>
                <span>•</span>
                <span>{edu.location}</span>
              </div>
            </div>

            {/* Highlights */}
            {edu.highlights.length > 0 && (
              <div className="mt-4 pt-3 border-t border-[#182A42]/60 space-y-1.5">
                {edu.highlights.map((item: string, hIdx: number) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-[#EAF5FF]/90">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00D4FF] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
