import React from 'react';
import { Target, CheckCircle2, Compass } from 'lucide-react';
import { profileData } from '../data/profile';

export const ModernAbout: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-black border-t border-neutral-800">
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-700 text-white text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>01 // Profile & Career Objective</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Venkatesh C L
          </h2>
          <p className="mt-2 text-neutral-400 text-sm sm:text-base leading-relaxed">
            BE – Robotics & Automation student seeking an internship in robotics, embedded systems, industrial automation or product development.
          </p>
        </div>

        {/* Career Objective Full Width */}
        <div className="hud-panel hud-corner rounded-3xl p-7 sm:p-9 space-y-5 bg-neutral-950 border border-neutral-800 mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-white font-bold uppercase tracking-wider pb-3 border-b border-neutral-800">
            <Target className="w-4 h-4 text-white" />
            <span>CAREER OBJECTIVE</span>
          </div>
          
          <blockquote className="text-neutral-200 text-base sm:text-lg leading-relaxed italic border-l-2 border-white pl-4 py-1">
            &ldquo;{profileData.careerObjective}&rdquo;
          </blockquote>

          <div className="pt-4 border-t border-neutral-850 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono text-neutral-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
              <span>Hands-on engineering, sensor integration, microcontroller-based systems.</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
              <span>Prototyping, testing, and willingness to contribute to practical engineering projects.</span>
            </div>
          </div>
        </div>

        {/* Areas of Interest Grid */}
        <div className="hud-panel hud-corner rounded-3xl p-7 sm:p-9 space-y-5 bg-neutral-950 border border-neutral-800">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800 font-mono text-xs">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-white" />
              <span className="text-white font-bold uppercase tracking-wider">
                AREAS OF INTEREST
              </span>
            </div>
            <span className="text-neutral-400">8 KEY DISCIPLINES</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {profileData.areasOfInterest.map((interest, idx) => (
              <div
                key={idx}
                className="px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white font-mono text-xs hover:border-white transition-colors flex items-center gap-2"
              >
                <span className="text-neutral-500 font-bold">•</span>
                <span>{interest}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
