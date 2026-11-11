import React from 'react';
import { Briefcase, Calendar, CheckCircle2, ShieldCheck, Wrench, Factory } from 'lucide-react';
import { experienceData } from '../data/experience';

export const ModernExperience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-navy-950/40 border-t border-navy-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-blue/10 border border-accent-blue/30 text-accent-cyan text-xs font-bold uppercase tracking-wider mb-3">
            <span>03 // Industry Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internship Experience
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Eight months of hands-on industrial training across manufacturing automation lines, laser calibration machinery, and electrical control cabinet wiring.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experienceData.map((exp, idx) => (
            <div
              key={exp.id}
              className="rounded-2xl bg-navy-900/60 border border-navy-700/80 hover:border-accent-cyan/40 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,212,255,0.08)] flex flex-col justify-between"
            >
              <div>
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-navy-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-blue/15 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan">
                      <Factory className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {exp.company}
                      </h3>
                      <div className="text-xs font-semibold text-accent-cyan">
                        {exp.role}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-800 border border-navy-700 text-xs font-semibold text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>{exp.datesText}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-xs sm:text-sm mt-4 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Core Responsibilities */}
                <div className="mt-5 space-y-2.5">
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Key Practical Responsibilities:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Equipment & Systems Handled */}
                <div className="mt-5 pt-4 border-t border-navy-800">
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Wrench className="w-3 h-3 text-accent-cyan" />
                    <span>Tools & Systems Handled:</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.equipment.map((eq, eqIdx) => (
                      <span
                        key={eqIdx}
                        className="px-2.5 py-1 rounded-md bg-navy-950 text-slate-300 border border-navy-800 text-[11px] font-medium"
                      >
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Footer */}
              <div className="mt-6 pt-3 border-t border-navy-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Verified Industrial Internship
                </span>
                <span>{exp.duration} Practical Term</span>
              </div>
            </div>
          ))}
        </div>

        {/* Cumulative Summary Bar */}
        <div className="mt-8 p-4 rounded-xl bg-navy-900/40 border border-navy-800 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-400">
          <span>
            Combined 8 Months of Industrial Training covering electrical schematics, assembly testing stations, laser calibration, and industrial panel wiring.
          </span>
          <span className="text-emerald-400 font-semibold">100% Resume-Verified</span>
        </div>

      </div>
    </section>
  );
};
