import React, { useState } from 'react';
import { Award, Trophy, Calendar, CheckCircle2, X, Eye, Crosshair } from 'lucide-react';
import { achievementsData, AchievementItem } from '../data/achievements';

export const ModernAchievements: React.FC = () => {
  const [selectedScan, setSelectedScan] = useState<{ title: string; url: string } | null>(null);

  const getCategoryBadgeClass = (category: AchievementItem['category']) => {
    switch (category) {
      case 'Award':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'Workshop':
        return 'bg-cyan-500/15 text-cyan-300 border-cyan-400/40';
      case 'Hackathon':
        return 'bg-purple-950/40 text-purple-300 border-purple-500/40';
      case 'Extracurricular':
        return 'bg-emerald-950/40 text-emerald-300 border-emerald-500/40';
    }
  };

  return (
    <section id="achievements" className="py-24 relative bg-space-950 border-t border-cyan-500/15">
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Crosshair className="w-3.5 h-3.5 text-cyan-400" />
            <span>06 // Honors & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Workshops & Achievements
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Documented engineering exhibition prizes, specialized industrial automation certifications, and inter-collegiate recognitions.
          </p>
        </div>

        {/* Featured 1st Prize Hero Card */}
        {achievementsData.filter(a => a.id === 'innovex-2026').map(firstPrize => (
          <div
            key={firstPrize.id}
            className="mb-10 hud-panel hud-corner rounded-3xl p-7 sm:p-9 border-2 border-amber-500/40 shadow-[0_0_40px_rgba(245,158,11,0.15)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shrink-0 shadow-lg">
                <div className="w-full h-full bg-space-950 rounded-[14px] flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-amber-400" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    {firstPrize.awardPlacement}
                  </span>
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{firstPrize.date}</span>
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {firstPrize.title}
                </h3>
                <div className="text-xs font-semibold text-cyan-400 font-mono">
                  {firstPrize.event} • {firstPrize.organiser}
                </div>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
                  {firstPrize.description}
                </p>
              </div>
            </div>

            {firstPrize.hasScan && firstPrize.scanUrl && (
              <button
                onClick={() => setSelectedScan({ title: firstPrize.title, url: firstPrize.scanUrl! })}
                className="shrink-0 px-4 py-2.5 rounded-xl bg-gradient-to-r from-electric-500 to-cyan-500 hover:opacity-95 text-white font-bold text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(8,123,255,0.4)] transition-all cursor-pointer font-mono"
              >
                <Eye className="w-4 h-4" />
                <span>View Certificate Scan</span>
              </button>
            )}
          </div>
        ))}

        {/* Remaining Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.filter(a => a.id !== 'innovex-2026').map((item) => (
            <div
              key={item.id}
              className="hud-panel hud-corner rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border ${getCategoryBadgeClass(item.category)}`}>
                    {item.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1 font-medium">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{item.date}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight leading-snug mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-cyan-400 font-mono mb-2">
                  {item.event} • {item.organiser}
                </div>

                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-space-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 font-medium">Placement: <strong className="text-white">{item.awardPlacement}</strong></span>
                {item.hasScan && item.scanUrl ? (
                  <button
                    onClick={() => setSelectedScan({ title: item.title, url: item.scanUrl! })}
                    className="text-cyan-400 hover:underline flex items-center gap-1 text-[11px] font-semibold cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Scan</span>
                  </button>
                ) : (
                  <span className="text-emerald-400 text-[11px] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Scan Modal */}
        {selectedScan && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-xl w-full bg-space-900 border border-cyan-400/50 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-4 bg-space-950 border-b border-space-800 flex items-center justify-between">
                <h4 className="text-sm font-bold text-white truncate max-w-[80%] font-mono">
                  {selectedScan.title}
                </h4>
                <button
                  onClick={() => setSelectedScan(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-space-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 bg-black/60 flex items-center justify-center max-h-[70vh] overflow-auto">
                <img
                  src={selectedScan.url}
                  alt={selectedScan.title}
                  className="max-h-[60vh] object-contain rounded-lg"
                />
              </div>
              <div className="p-3.5 bg-space-950 border-t border-space-800 text-right">
                <button
                  onClick={() => setSelectedScan(null)}
                  className="px-4 py-1.5 rounded-lg bg-space-800 hover:bg-space-700 text-white text-xs font-mono font-semibold cursor-pointer"
                >
                  Close Scan
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
