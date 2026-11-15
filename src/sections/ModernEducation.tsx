import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/education';

export const ModernEducation: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-space-950 border-t border-cyan-500/15">
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>02 // Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education (From Resume)
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            Verified academic qualifications in Robotics & Automation Engineering, Electrical & Electronics, and SSLC.
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
                className={`hud-panel hud-corner rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  isBE
                    ? 'border-cyan-400/50 shadow-[0_0_35px_rgba(0,212,255,0.15)]'
                    : 'hover:border-cyan-400/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                      {isBE ? <GraduationCap className="w-6 h-6" /> : isDiploma ? <Award className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                      {edu.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                    {edu.degree}
                  </h3>
                  <div className="text-xs text-slate-300 mt-2 font-mono">
                    {edu.institution}
                  </div>

                  {/* Score Highlight Box */}
                  <div className="my-5 p-4 rounded-2xl bg-space-900 border border-space-800">
                    <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                      Academic Score
                    </div>
                    <div className="text-2xl font-black text-white mt-0.5 tracking-tight font-mono">
                      {edu.score}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-space-800 flex items-center justify-between text-xs font-mono text-emerald-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Exact Resume Record</span>
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
