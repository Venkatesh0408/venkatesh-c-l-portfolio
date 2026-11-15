import React from 'react';
import { Target, Globe, BookOpen, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';

export const ModernAbout: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-space-950 border-t border-cyan-500/15">
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>01 // Profile & Career Objective</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Venkatesh C L
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            BE – Robotics & Automation student seeking an internship in robotics, embedded systems, industrial automation or product development.
          </p>
        </div>

        {/* Two-Column Grid: Career Objective & Areas of Interest */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          
          {/* Career Objective Card */}
          <div className="lg:col-span-7 hud-panel hud-corner rounded-3xl p-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider pb-2 border-b border-cyan-500/20">
              <Target className="w-4 h-4 text-cyan-400" />
              <span>CAREER OBJECTIVE (FROM RESUME)</span>
            </div>
            
            <blockquote className="text-slate-200 text-sm sm:text-base leading-relaxed italic border-l-2 border-cyan-400 pl-4 py-1">
              &ldquo;{profileData.careerObjective}&rdquo;
            </blockquote>

            <div className="pt-3 border-t border-space-800 space-y-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Hands-on engineering, sensor integration, microcontroller-based systems.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Prototyping, testing, and willingness to contribute to practical engineering projects.</span>
              </div>
            </div>
          </div>

          {/* Languages & Quick Facts Card */}
          <div className="lg:col-span-5 hud-panel hud-corner rounded-3xl p-7 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider pb-2 border-b border-cyan-500/20">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>LANGUAGES (FROM RESUME)</span>
            </div>

            <div className="space-y-2.5">
              {profileData.languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-space-900 border border-space-800 text-xs font-mono"
                >
                  <span className="font-bold text-white">{lang.language}</span>
                  <span className="px-2.5 py-0.5 rounded text-[11px] bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-space-800 text-xs font-mono text-slate-400">
              <span>Location: </span>
              <strong className="text-white">{profileData.location}</strong>
            </div>
          </div>
        </div>

        {/* Areas of Interest Grid - Exact from Resume */}
        <div className="hud-panel hud-corner rounded-3xl p-7 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20 font-mono text-xs">
            <span className="text-cyan-400 font-bold uppercase tracking-wider">
              AREAS OF INTEREST (FROM RESUME)
            </span>
            <span className="text-slate-400">8 KEY DISCIPLINES</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {profileData.areasOfInterest.map((interest, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-space-900 border border-cyan-500/25 text-white font-mono text-xs hover:border-cyan-400 transition-colors"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
