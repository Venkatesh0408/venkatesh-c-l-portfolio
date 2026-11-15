import React from 'react';
import { Globe, MessageSquare } from 'lucide-react';
import { profileData } from '../data/profile';

export const ModernLanguages: React.FC = () => {
  return (
    <section id="languages" className="py-20 relative bg-black border-t border-neutral-800">
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-700 text-white text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>07 // Languages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Languages
          </h2>
          <p className="mt-2 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Linguistic proficiencies and communication capabilities.
          </p>
        </div>

        {/* Languages Defined One by One */}
        <div className="hud-panel hud-corner rounded-3xl p-7 sm:p-9 bg-neutral-950 border border-neutral-800">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6 font-mono text-xs">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-white" />
              <span className="text-white font-bold uppercase tracking-wider">
                LANGUAGE PROFICIENCIES
              </span>
            </div>
            <span className="text-neutral-400">3 LANGUAGES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {profileData.languages.map((lang, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-lg font-bold text-white tracking-tight">
                    {lang.language}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-neutral-800 text-neutral-200 border border-neutral-700">
                    {lang.proficiency}
                  </span>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 flex items-center gap-2 text-xs font-mono text-neutral-400">
                  <MessageSquare className="w-3.5 h-3.5 text-neutral-400" />
                  <span>
                    {lang.proficiency === 'Advanced' ? 'Fluent & Professional' : 'Working Proficiency'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
