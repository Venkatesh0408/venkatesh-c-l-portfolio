import React from 'react';
import { Briefcase, Calendar, CheckCircle2, ShieldCheck, Wrench, Factory, Crosshair } from 'lucide-react';
import { experienceData } from '../data/experience';

export const ModernExperience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-space-950 border-t border-cyan-500/15">
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Crosshair className="w-3.5 h-3.5 text-cyan-400" />
            <span>03 // Industrial Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industrial Internship Experience
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Eight cumulative months of hands-on industrial training across manufacturing automation lines, laser calibration machinery, and electrical control cabinet wiring.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="hud-panel hud-corner rounded-2xl p-7 sm:p-9 flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300"
            >
              <div>
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-cyan-500/20">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                      <Factory className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {exp.company}
                      </h3>
                      <div className="text-xs font-semibold text-cyan-400 font-mono">
                        {exp.role}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-space-900 border border-space-700 text-xs font-mono font-semibold text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.datesText}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-xs sm:text-sm mt-4 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Core Responsibilities */}
                <div className="mt-6 space-y-2.5">
                  <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                    Practical Responsibilities & Operations:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Equipment & Systems Handled */}
                <div className="mt-6 pt-4 border-t border-space-800">
                  <h4 className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Hardware, Tools & Systems Handled:</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.equipment.map((eq, eqIdx) => (
                      <span
                        key={eqIdx}
                        className="px-2.5 py-1 rounded-md bg-space-900 text-slate-300 border border-space-800 text-[11px] font-mono"
                      >
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Footer */}
              <div className="mt-7 pt-4 border-t border-space-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  VERIFIED_INDUSTRIAL_TERM
                </span>
                <span>{exp.duration} Practical Term</span>
              </div>
            </div>
          ))}
        </div>

        {/* Cumulative Summary Bar */}
        <div className="mt-10 p-4 rounded-xl bg-space-900/70 border border-space-800 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-400 font-mono">
          <span>
            Combined 8 Months of Industrial Training covering electrical schematics, assembly testing stations, laser calibration, and industrial panel wiring.
          </span>
          <span className="text-emerald-400 font-bold">100% RESUME-VERIFIED</span>
        </div>

      </div>
    </section>
  );
};
