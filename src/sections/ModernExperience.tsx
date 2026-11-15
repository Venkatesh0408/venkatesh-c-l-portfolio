import React from 'react';
import { Factory, Calendar, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/experience';

export const ModernExperience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-black border-t border-neutral-800">
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-700 text-white text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>03 // Internship Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internship Experience
          </h2>
          <p className="mt-2 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Industrial automation internships at Arrow Automation and XNG Automation.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="hud-panel hud-corner rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300 bg-neutral-950 border border-neutral-850"
            >
              <div>
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-neutral-800">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                      <Factory className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-neutral-300 font-mono">
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono font-semibold text-neutral-300">
                    <Calendar className="w-3.5 h-3.5 text-white" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="mt-5 space-y-3">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <span className="text-white font-bold font-mono mt-0.5">•</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Verified Footer */}
              <div className="mt-6 pt-4 border-t border-neutral-850 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Industrial Experience</span>
                </span>
                <span className="text-neutral-400">{exp.duration}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
