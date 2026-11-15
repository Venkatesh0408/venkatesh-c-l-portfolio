import React, { useState } from 'react';
import { Trophy, Wrench, CheckCircle2, X, Eye } from 'lucide-react';
import { awardsList } from '../data/achievements';

export const ModernAchievements: React.FC = () => {
  const [selectedScan, setSelectedScan] = useState<string | null>(null);

  const awards = awardsList.filter(a => a.category === "Award");
  const workshops = awardsList.filter(a => a.category === "Workshop");

  return (
    <section id="achievements" className="py-20 relative bg-black border-t border-neutral-800">
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-700 text-white text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>06 // Achievements & Workshops</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements & Workshops
          </h2>
          <p className="mt-2 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Collegiate awards, hackathons, and certified engineering workshops.
          </p>
        </div>

        {/* Two Columns: Awards & Workshops */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Awards & Achievements Column */}
          <div className="lg:col-span-7 hud-panel hud-corner rounded-3xl p-7 space-y-4 bg-neutral-950 border border-neutral-800">
            <div className="flex items-center gap-2 text-xs font-mono text-white font-bold uppercase tracking-wider pb-3 border-b border-neutral-800">
              <Trophy className="w-4 h-4 text-white" />
              <span>AWARDS & RECOGNITIONS</span>
            </div>

            <ul className="space-y-3.5 pt-1">
              {awards.map((award) => (
                <li
                  key={award.id}
                  className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-start justify-between gap-3 text-xs sm:text-sm text-neutral-200"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="text-white font-bold font-mono mt-0.5">•</span>
                    <span className="leading-relaxed">{award.title}</span>
                  </div>

                  {award.scanUrl && (
                    <button
                      onClick={() => setSelectedScan(award.scanUrl!)}
                      className="shrink-0 px-2.5 py-1 rounded-lg bg-neutral-800 text-white hover:bg-white hover:text-black font-mono text-xs font-bold transition-all flex items-center gap-1 cursor-pointer border border-neutral-700"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View</span>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Workshops & Activities Column */}
          <div className="lg:col-span-5 hud-panel hud-corner rounded-3xl p-7 space-y-4 bg-neutral-950 border border-neutral-800">
            <div className="flex items-center gap-2 text-xs font-mono text-white font-bold uppercase tracking-wider pb-3 border-b border-neutral-800">
              <Wrench className="w-4 h-4 text-white" />
              <span>WORKSHOPS & ACTIVITIES</span>
            </div>

            <ul className="space-y-3.5 pt-1">
              {workshops.map((workshop) => (
                <li
                  key={workshop.id}
                  className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200"
                >
                  <span className="text-white font-bold font-mono mt-0.5">•</span>
                  <span className="leading-relaxed">{workshop.title}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-neutral-850 flex items-center gap-1.5 text-neutral-400 text-xs font-mono">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>Certified Technical Participation</span>
            </div>
          </div>

        </div>

        {/* Certificate Scan Modal */}
        {selectedScan && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-xl w-full bg-neutral-950 border border-neutral-700 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-4 bg-black border-b border-neutral-800 flex items-center justify-between">
                <span className="text-sm font-bold text-white font-mono">Certificate Scan</span>
                <button
                  onClick={() => setSelectedScan(null)}
                  className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 bg-black flex items-center justify-center">
                <img src={selectedScan} alt="Certificate Scan" className="max-h-[70vh] object-contain rounded-lg" />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
