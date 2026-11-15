import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/education';

export const ModernEducation: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-black border-t border-neutral-800">
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-700 text-white text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>02 // Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Academic qualifications in Robotics & Automation Engineering, Electrical & Electronics, and SSLC.
          </p>
        </div>

        {/* Education Defined One by One (No Cards or Heavy Boxes) */}
        <div className="divide-y divide-neutral-800 border-t border-b border-neutral-800">
          {educationData.map((edu, idx) => {
            const isBE = edu.id === 'be-robotics';
            const isDiploma = edu.id === 'diploma-eee';

            // Clearly defined label based on whether it is CGPA or Percentage
            const scoreLabel = isBE ? "CGPA" : isDiploma ? "Percentage / CGPA" : "Percentage";

            return (
              <div
                key={edu.id}
                className="py-7 sm:py-9 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors hover:bg-neutral-950/60 px-2 sm:px-4 rounded-xl"
              >
                {/* Qualification Details */}
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2.5 font-mono text-xs">
                    <span className="font-bold text-neutral-400">0{idx + 1} //</span>
                    <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-750 text-neutral-300 uppercase tracking-wider text-[11px] font-semibold">
                      {edu.status}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {edu.degree}
                  </h3>

                  <p className="text-xs sm:text-sm font-mono text-neutral-400">
                    {edu.institution}
                  </p>
                </div>

                {/* Score Clearly Defined One by One (Percentage / CGPA) */}
                <div className="md:text-right shrink-0 font-mono">
                  <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                    {scoreLabel}
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {edu.score}
                  </div>
                  <div className="flex items-center md:justify-end gap-1.5 text-[11px] text-neutral-400 mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    <span>Academic Qualification</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
