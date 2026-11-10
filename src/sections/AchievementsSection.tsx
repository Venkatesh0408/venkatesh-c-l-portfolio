import React, { useState } from 'react';
import { Trophy, Award, Calendar, CheckCircle2, Eye, X, ExternalLink } from 'lucide-react';
import { achievementsData, AchievementItem } from '../data/achievements';

export const AchievementsSection: React.FC = () => {
  const [selectedScan, setSelectedScan] = useState<AchievementItem | null>(null);
  const [filter, setFilter] = useState<'All' | 'Award' | 'Hackathon' | 'Workshop'>('All');

  const filteredAchievements = achievementsData.filter((a: AchievementItem) => {
    if (filter === 'All') return true;
    return a.category === filter;
  });

  return (
    <section id="achievements" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto font-mono scroll-mt-14">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-[#182A42] mb-8">
        <div className="flex items-center gap-2">
          <span className="text-[#00D4FF]">&gt;</span>
          <h2 className="text-xl sm:text-2xl font-black text-[#EAF5FF] tracking-wider flex items-center gap-2">
            <Trophy className="w-5 h-5 text-[#00D4FF]" />
            HONORS_&_CREDENTIALS // ACHIEVEMENTS
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 text-xs">
          {(['All', 'Award', 'Hackathon', 'Workshop'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1 rounded transition-all ${
                filter === tab
                  ? 'bg-[#00D4FF] text-black font-bold shadow-[0_0_10px_rgba(0,212,255,0.3)]'
                  : 'bg-[#101B2B] text-[#91A8BF] hover:text-[#EAF5FF] border border-[#182A42]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredAchievements.map((item: AchievementItem) => (
          <div
            key={item.id}
            className="bg-[#101B2B] border border-[#182A42] hover:border-[#00D4FF] rounded-lg p-5 shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-2.5 border-b border-[#182A42] mb-3">
                <span className="text-[10px] text-[#007BFF] font-semibold">
                  [{item.category.toUpperCase()}]
                </span>
                <span className="text-[10px] bg-[#00D4FF15] text-[#00D4FF] border border-[#00D4FF44] px-2 py-0.5 rounded font-bold">
                  {item.awardPlacement}
                </span>
              </div>

              {/* Title & Organiser */}
              <div className="space-y-1 mb-2.5">
                <h3 className="text-sm font-bold text-[#EAF5FF] group-hover:text-[#00D4FF] transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs text-[#007BFF] font-semibold">
                  {item.organiser}
                </div>
                <div className="text-[11px] text-[#91A8BF] flex items-center gap-1 pt-0.5">
                  <Calendar className="w-3 h-3 text-[#91A8BF]" />
                  <span>{item.date}</span>
                </div>
              </div>

              <p className="text-xs text-[#91A8BF] leading-relaxed mb-4">
                {item.description}
              </p>
            </div>

            {/* Scan Preview Action */}
            <div className="pt-3 border-t border-[#182A42] flex items-center justify-between">
              {item.hasScan && item.scanUrl ? (
                <button
                  onClick={() => setSelectedScan(item)}
                  className="text-xs text-[#00D4FF] hover:underline flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Official Scan</span>
                </button>
              ) : (
                <span className="text-[10px] text-[#91A8BF]/70 italic">
                  Text-verified record (no synthetic scan)
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Certificate / Scan Modal */}
      {selectedScan && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#101B2B] border border-[#00D4FF] rounded-lg max-w-xl w-full p-5 space-y-4 shadow-[0_0_40px_rgba(0,212,255,0.3)]">
            <div className="flex items-center justify-between pb-3 border-b border-[#182A42]">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#00D4FF]" />
                <span className="text-xs text-[#00D4FF] font-bold">OFFICIAL CREDENTIAL SCAN</span>
              </div>
              <button
                onClick={() => setSelectedScan(null)}
                className="p-1 text-[#91A8BF] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-[#0B0F1A] border border-[#182A42] rounded p-2 flex items-center justify-center min-h-[260px] max-h-[380px] overflow-hidden">
              <img
                src={selectedScan.scanUrl}
                alt={selectedScan.title}
                className="max-h-[340px] object-contain rounded"
              />
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#EAF5FF]">{selectedScan.title}</h4>
              <p className="text-xs text-[#91A8BF]">{selectedScan.description}</p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedScan(null)}
                className="px-4 py-1.5 bg-[#14243A] hover:bg-[#00D4FF] text-[#00D4FF] hover:text-black text-xs font-semibold rounded border border-[#00D4FF44] transition-all"
              >
                Close Scan
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
