import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/education';

export const ModernEducation: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-navy-950/70 border-t border-navy-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-blue/10 border border-accent-blue/30 text-accent-cyan text-xs font-bold uppercase tracking-wider mb-3">
            <span>02 // Academic Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Rigorous technical grounding in electrical engineering principles followed by specialized degree study in autonomous robotics systems.
          </p>
        </div>

        {/* 3 Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu, idx) => {
            const isBE = edu.id === 'be-robotics';
            const isDiploma = edu.id === 'diploma-eee';

            return (
              <div
                key={edu.id}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isBE
                    ? 'bg-gradient-to-b from-navy-900/90 to-navy-950 border-2 border-accent-cyan/40 shadow-[0_0_30px_rgba(0,212,255,0.12)]'
                    : 'bg-navy-900/50 border border-navy-800 hover:border-navy-700'
                }`}
              >
                {/* Top Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-blue/15 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan">
                      {isBE ? <GraduationCap className="w-5 h-5" /> : isDiploma ? <Award className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                      isBE
                        ? 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30'
                        : 'bg-navy-800 text-slate-300 border border-navy-700'
                    }`}>
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-accent-cyan mt-1">
                    {edu.discipline}
                  </div>
                  <div className="text-xs text-slate-300 mt-1 font-medium">
                    {edu.institution}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {edu.location}
                  </div>

                  {/* Score Highlight Box */}
                  <div className="my-5 p-3.5 rounded-xl bg-navy-950/80 border border-navy-800">
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      Verified Academic Score
                    </div>
                    <div className="text-xl font-extrabold text-white mt-0.5 tracking-tight">
                      {edu.score}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 text-xs text-slate-300">
                    {edu.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Verification Status */}
                <div className="mt-6 pt-4 border-t border-navy-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Verified Official Record
                  </span>
                  <span>Ground Truth</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Policy Note */}
        <div className="mt-8 p-4 rounded-xl bg-navy-900/40 border border-navy-800 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-400">
          <span>
            Strict adherence to verified academic scores: B.E. CGPA 7.8, Diploma 75.40% (CGPA 8.29), SSLC 70.8%. (No PUC; no projected or unverified grades).
          </span>
          <span className="text-accent-cyan font-semibold">Department of Robotics & Automation</span>
        </div>

      </div>
    </section>
  );
};
