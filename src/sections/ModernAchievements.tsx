import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Wrench, CheckCircle2, X, Eye, Download, ExternalLink } from 'lucide-react';
import { awardsList, AwardItem } from '../data/achievements';

export const ModernAchievements: React.FC = () => {
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);

  const awards = awardsList.filter(a => a.category === "Award");
  const workshops = awardsList.filter(a => a.category === "Workshop");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedAward(null);
    };
    if (selectedAward) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedAward]);

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
                      type="button"
                      onClick={() => setSelectedAward(award)}
                      className="shrink-0 px-2.5 py-1 rounded-lg bg-neutral-800 text-white hover:bg-white hover:text-black font-mono text-xs font-bold transition-all flex items-center gap-1 cursor-pointer border border-neutral-700"
                      title={award.id === "sports" ? "View Award Trophies" : "View Certificate"}
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

        {/* Animated Certificate Viewer Modal */}
        <AnimatePresence>
          {selectedAward && selectedAward.scanUrl && (
            <motion.div
              key="cert-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedAward(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            >
              <motion.div
                key="cert-modal"
                initial={{ opacity: 0, scale: 0.94, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 10 }}
                transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full bg-neutral-950 border border-neutral-700 rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="px-4 sm:px-5 py-3.5 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-xs sm:text-sm font-bold text-white font-mono block truncate">
                      {selectedAward.title}
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider">
                      {selectedAward.id === "sports" ? "Verified Award & Trophies" : "Verified Certificate"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 font-mono">
                    {selectedAward.pdfUrl && (
                      <>
                        <a
                          href={selectedAward.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white border border-neutral-700 text-xs flex items-center gap-1.5 transition-colors"
                          title="Open PDF in new tab"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">PDF</span>
                        </a>
                        <a
                          href={selectedAward.pdfUrl}
                          download
                          className="px-3 py-1.5 rounded-lg bg-white hover:bg-neutral-200 text-black font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
                          title={selectedAward.id === "sports" ? "Download Award PDF" : "Download Certificate PDF"}
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Download</span>
                        </a>
                      </>
                    )}
                    <button
                      type="button"
                      onClick={() => setSelectedAward(null)}
                      className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                      title="Close (ESC)"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="p-3 sm:p-5 bg-black flex items-center justify-center">
                  <img
                    src={selectedAward.scanUrl}
                    alt={selectedAward.title}
                    className="max-h-[75vh] w-auto object-contain rounded-lg border border-neutral-800 shadow-lg"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
