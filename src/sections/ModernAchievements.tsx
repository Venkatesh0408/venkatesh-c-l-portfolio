import React, { useState } from 'react';
import { Award, Trophy, Wrench, Calendar, CheckCircle2, X, Eye } from 'lucide-react';
import { awardsList } from '../data/achievements';

export const ModernAchievements: React.FC = () => {
  const [selectedScan, setSelectedScan] = useState<string | null>(null);

  const awards = awardsList.filter(a => a.category === "Award");
  const workshops = awardsList.filter(a => a.category === "Workshop");

  return (
    <section id="achievements" className="py-20 relative bg-space-950 border-t border-cyan-500/15">
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>06 // Awards & Workshops</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Awards, Achievements & Workshops (From Resume)
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            Verified collegiate awards, hackathons, and certified workshops from Page 1 of the resume.
          </p>
        </div>

        {/* Two Columns: Awards & Workshops */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Awards & Achievements Column */}
          <div className="lg:col-span-7 hud-panel hud-corner rounded-3xl p-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider pb-3 border-b border-cyan-500/20">
              <Trophy className="w-4 h-4 text-cyan-400" />
              <span>AWARDS & ACHIEVEMENTS (5 VERIFIED)</span>
            </div>

            <ul className="space-y-3.5 pt-1">
              {awards.map((award) => (
                <li
                  key={award.id}
                  className="p-3.5 rounded-2xl bg-space-900 border border-space-800 flex items-start justify-between gap-3 text-xs sm:text-sm text-slate-200"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold font-mono mt-0.5">•</span>
                    <span className="leading-relaxed">{award.title}</span>
                  </div>

                  {award.scanUrl && (
                    <button
                      onClick={() => setSelectedScan(award.scanUrl!)}
                      className="shrink-0 px-2.5 py-1 rounded-lg bg-cyan-500/15 text-cyan-400 hover:bg-cyan-500 hover:text-black font-mono text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Scan</span>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Workshops & Activities Column */}
          <div className="lg:col-span-5 hud-panel hud-corner rounded-3xl p-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider pb-3 border-b border-cyan-500/20">
              <Wrench className="w-4 h-4 text-cyan-400" />
              <span>WORKSHOPS & ACTIVITIES (2 VERIFIED)</span>
            </div>

            <ul className="space-y-3.5 pt-1">
              {workshops.map((workshop) => (
                <li
                  key={workshop.id}
                  className="p-3.5 rounded-2xl bg-space-900 border border-space-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                >
                  <span className="text-cyan-400 font-bold font-mono mt-0.5">•</span>
                  <span className="leading-relaxed">{workshop.title}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-space-800 flex items-center gap-1.5 text-emerald-400 text-xs font-mono">
              <CheckCircle2 className="w-4 h-4" />
              <span>Exact Page 1 Resume Records</span>
            </div>
          </div>

        </div>

        {/* Certificate Scan Modal */}
        {selectedScan && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-xl w-full bg-space-900 border border-cyan-400/50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-4 bg-space-950 border-b border-space-800 flex items-center justify-between">
                <span className="text-sm font-bold text-white font-mono">Certificate Scan</span>
                <button
                  onClick={() => setSelectedScan(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-space-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 bg-black/60 flex items-center justify-center max-h-[70vh] overflow-auto">
                <img src={selectedScan} alt="Certificate Scan" className="max-h-[60vh] object-contain rounded-lg" />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
