import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/education';

export const ModernEducation: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-black border-t border-neutral-800">
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
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

        {/* 3 Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu) => {
            const isBE = edu.id === 'be-robotics';
            const isDiploma = edu.id === 'diploma-eee';

            return (
              <div
                key={edu.id}
                className={`hud-panel hud-corner rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 bg-neutral-950 border ${
                  isBE
                    ? 'border-neutral-700 shadow-[0_4px_30px_rgba(255,255,255,0.05)]'
                    : 'border-neutral-850 hover:border-neutral-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                      {isBE ? <GraduationCap className="w-6 h-6" /> : isDiploma ? <Award className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-neutral-900 text-neutral-200 border border-neutral-750">
                      {edu.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                    {edu.degree}
                  </h3>
                  <div className="text-xs text-neutral-400 mt-2 font-mono">
                    {edu.institution}
                  </div>

                  {/* Score Highlight Box */}
                  <div className="my-5 p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                    <div className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider">
                      Academic Score
                    </div>
                    <div className="text-2xl font-black text-white mt-0.5 tracking-tight font-mono">
                      {edu.score}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-850 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-1.5 text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Academic Qualification</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
