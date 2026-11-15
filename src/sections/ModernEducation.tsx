import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2, ShieldCheck, Crosshair } from 'lucide-react';
import { educationData } from '../data/education';

export const ModernEducation: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-space-950 border-t border-cyan-500/15">
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Crosshair className="w-3.5 h-3.5 text-cyan-400" />
            <span>02 // Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Academic Grounding
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Rigorous technical grounding in electrical engineering principles followed by specialized degree study in autonomous robotics systems.
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
                className={`hud-panel hud-corner rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isBE
                    ? 'border-cyan-400/50 shadow-[0_0_35px_rgba(0,212,255,0.18)]'
                    : 'hover:border-cyan-400/40'
                }`}
              >
                <div>
                  {/* Top Badge & Identifier */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                      {isBE ? <GraduationCap className="w-6 h-6" /> : isDiploma ? <Award className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-bold ${
                      isBE
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                        : 'bg-space-850 text-slate-300 border border-space-700'
                    }`}>
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-cyan-400 mt-1">
                    {edu.discipline}
                  </div>
                  <div className="text-xs text-slate-300 mt-1 font-medium">
                    {edu.institution}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
                    {edu.location}
                  </div>

                  {/* Score Highlight Box */}
                  <div className="my-5 p-3.5 rounded-xl bg-space-900/90 border border-space-800">
                    <div className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">
                      Verified Academic Score
                    </div>
                    <div className="text-xl font-black text-white mt-0.5 tracking-tight font-mono">
                      {edu.score}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 text-xs text-slate-300">
                    {edu.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Verification Status */}
                <div className="mt-6 pt-4 border-t border-space-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10B981]" />
                    VERIFIED_RECORD
                  </span>
                  <span>GROUND_TRUTH</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Policy Note */}
        <div className="mt-10 p-4 rounded-xl bg-space-900/70 border border-space-800 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-400 font-mono">
          <span>
            VERIFIED ACADEMIC RECORD: B.E. CGPA 7.8, Diploma 75.40% (CGPA 8.29), SSLC 70.8%. (No PUC; no projected or unverified grades).
          </span>
          <span className="text-cyan-400 font-bold">RRCE DEPARTMENT OF ROBOTICS & AUTOMATION</span>
        </div>

      </div>
    </section>
  );
};
