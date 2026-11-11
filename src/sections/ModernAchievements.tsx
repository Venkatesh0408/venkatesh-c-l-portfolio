import React, { useState } from 'react';
import { Award, Trophy, Wrench, Sparkles, Calendar, CheckCircle2, X, Eye } from 'lucide-react';
import { achievementsData, AchievementItem } from '../data/achievements';

export const ModernAchievements: React.FC = () => {
  const [selectedScan, setSelectedScan] = useState<{ title: string; url: string } | null>(null);

  const getCategoryBadgeClass = (category: AchievementItem['category']) => {
    switch (category) {
      case 'Award':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/40';
      case 'Workshop':
        return 'bg-accent-blue/15 text-accent-cyan border-accent-blue/40';
      case 'Hackathon':
        return 'bg-purple-950/40 text-purple-300 border-purple-500/40';
      case 'Extracurricular':
        return 'bg-emerald-950/40 text-emerald-300 border-emerald-500/40';
    }
  };

  return (
    <section id="achievements" className="py-20 relative bg-navy-950/70 border-t border-navy-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-blue/10 border border-accent-blue/30 text-accent-cyan text-xs font-bold uppercase tracking-wider mb-3">
            <span>06 // Verified Honors</span>
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
            className="mb-8 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-900 to-navy-950 border-2 border-accent-cyan/50 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(0,212,255,0.15)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shrink-0 shadow-lg">
                <div className="w-full h-full bg-navy-950 rounded-[14px] flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-amber-400" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    {firstPrize.awardPlacement}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>{firstPrize.date}</span>
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {firstPrize.title}
                </h3>
                <div className="text-xs font-semibold text-accent-cyan">
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
                className="shrink-0 px-4 py-2.5 rounded-xl bg-accent-blue hover:bg-accent-blue/90 text-white font-bold text-xs flex items-center gap-2 shadow-[0_0_15px_rgba(8,123,255,0.35)] transition-all"
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
              className="rounded-2xl bg-navy-900/60 border border-navy-800 hover:border-accent-cyan/40 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,212,255,0.08)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${getCategoryBadgeClass(item.category)}`}>
                    {item.category}
                  </span>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                    <Calendar className="w-3 h-3 text-accent-cyan" />
                    <span>{item.date}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight leading-snug mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-accent-cyan mb-2">
                  {item.event} • {item.organiser}
                </div>

                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-navy-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Placement: <strong className="text-white">{item.awardPlacement}</strong></span>
                {item.hasScan && item.scanUrl ? (
                  <button
                    onClick={() => setSelectedScan({ title: item.title, url: item.scanUrl! })}
                    className="text-accent-cyan hover:underline flex items-center gap-1 text-[11px] font-semibold"
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
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-xl w-full bg-navy-900 border border-accent-cyan/40 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-4 bg-navy-950 border-b border-navy-800 flex items-center justify-between">
                <h4 className="text-sm font-bold text-white truncate max-w-[80%]">
                  {selectedScan.title}
                </h4>
                <button
                  onClick={() => setSelectedScan(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-navy-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 bg-black/50 flex items-center justify-center max-h-[70vh] overflow-auto">
                <img
                  src={selectedScan.url}
                  alt={selectedScan.title}
                  className="max-h-[60vh] object-contain rounded-lg"
                />
              </div>
              <div className="p-3 bg-navy-950 border-t border-navy-800 text-right">
                <button
                  onClick={() => setSelectedScan(null)}
                  className="px-4 py-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-white text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
