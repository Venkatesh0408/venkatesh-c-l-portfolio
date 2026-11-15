import React from 'react';
import { Briefcase, Calendar, Wrench, CheckCircle2, Building, ShieldCheck } from 'lucide-react';
import { experienceData, ExperienceItem } from '../data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto font-mono scroll-mt-14">
      {/* Section Header */}
      <div className="flex items-center gap-2 pb-3 border-b border-[#182A42] mb-8">
        <span className="text-[#00D4FF]">&gt;</span>
        <h2 className="text-xl sm:text-2xl font-black text-[#EAF5FF] tracking-wider flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-[#00D4FF]" />
          INDUSTRIAL_EXPERIENCE // INTERNSHIPS
        </h2>
        <span className="text-[10px] text-[#00E599] ml-auto border border-[#00E59944] px-2 py-0.5 rounded">
          [8 MONTHS TOTAL INDUSTRIAL PLACEMENT]
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experienceData.map((exp: ExperienceItem, idx: number) => (
          <div
            key={exp.id}
            className="bg-[#101B2B] border border-[#182A42] hover:border-[#00D4FF] rounded-lg p-5 sm:p-6 shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-3 border-b border-[#182A42] mb-3">
                <span className="text-xs text-[#00D4FF] font-semibold">
                  0{idx + 1} // {exp.type.toUpperCase()}
                </span>
                <span className="text-[10px] bg-emerald-950/40 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 rounded">
                  [VERIFIED DURATION: {exp.duration}]
                </span>
              </div>

              {/* Company & Role */}
              <div className="space-y-1 mb-4">
                <h3 className="text-lg font-bold text-[#EAF5FF] group-hover:text-[#00D4FF] transition-colors">
                  {exp.role}
                </h3>
                <div className="text-xs sm:text-sm text-[#007BFF] font-semibold flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#007BFF]" />
                  <span>{exp.company}</span>
                </div>
                <div className="text-xs text-[#91A8BF] flex items-center gap-1.5 pt-0.5">
                  <Calendar className="w-3.5 h-3.5 text-[#91A8BF]" />
                  <span>{exp.datesText}</span>
                </div>
              </div>

              <p className="text-xs text-[#91A8BF] leading-relaxed mb-4">
                {exp.summary}
              </p>

              {/* Responsibilities */}
              <div className="space-y-2 mb-5">
                <span className="text-[11px] font-bold text-[#EAF5FF] block tracking-wide">
                  KEY SHOP-FLOOR RESPONSIBILITIES:
                </span>
                {exp.responsibilities.map((resp: string, rIdx: number) => (
                  <div key={rIdx} className="flex items-start gap-2 text-xs text-[#EAF5FF]/90">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00D4FF] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industrial Equipment Exposure */}
            <div className="pt-3 border-t border-[#182A42]">
              <span className="text-[10px] text-[#91A8BF] font-semibold block mb-2 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-[#007BFF]" /> MACHINERY & TOOLS HANDLED:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {exp.equipment.map((eq: string, eIdx: number) => (
                  <span
                    key={eIdx}
                    className="text-[10px] bg-[#0B0F1A] text-[#00D4FF] border border-[#182A42] px-2 py-0.5 rounded"
                  >
                    {eq}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
