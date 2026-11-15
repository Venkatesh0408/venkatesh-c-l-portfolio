import React from 'react';
import { Factory, Calendar, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/experience';

export const ModernExperience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-space-950 border-t border-cyan-500/15">
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>03 // Internship Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internship Experience (From Resume)
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            Verified internship placements at Arrow Automation and XNG Automation.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="hud-panel hud-corner rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300"
            >
              <div>
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-cyan-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                      <Factory className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-cyan-400 font-mono">
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-space-900 border border-space-700 text-xs font-mono font-semibold text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Resume Bullet Points */}
                <div className="mt-5 space-y-3">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <span className="text-cyan-400 font-bold font-mono mt-0.5">•</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Verified Footer */}
              <div className="mt-6 pt-4 border-t border-space-800 flex items-center justify-between text-xs font-mono text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Resume Verified Experience</span>
                </span>
                <span className="text-slate-400">{exp.duration}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
