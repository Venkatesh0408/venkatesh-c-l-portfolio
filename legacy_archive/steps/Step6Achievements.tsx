import React, { useState } from 'react';
import { Trophy, ArrowRight, ArrowLeft, Calendar, Award, Eye, X } from 'lucide-react';
import { achievementsData, AchievementItem } from '../../data/achievements';
import { TelemetryPoint } from '../../components/ui/TelemetryPoint';
import { KaliSnakeDragon } from '../../components/ui/KaliSnakeDragon';

interface Step6AchievementsProps {
  onPrevStep: () => void;
  onNextStep: () => void;
}

export const Step6Achievements: React.FC<Step6AchievementsProps> = ({ onPrevStep, onNextStep }) => {
  const [selectedScan, setSelectedScan] = useState<AchievementItem | null>(null);

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between py-8 px-4 font-mono select-none">
      {/* Background Kali Snake Dragon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none overflow-hidden z-0">
        <div className="w-[110%] max-w-4xl">
          <KaliSnakeDragon />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full my-auto space-y-6">
        {/* Step Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#14243A]">
          <div>
            <span className="text-[10px] text-[#007BFF] font-bold block">&gt; PIPELINE STAGE // 06</span>
            <h2 className="text-xl sm:text-3xl font-black text-white tracking-wide flex items-center gap-2">
              <Trophy className="w-6 h-6 text-[#00D4FF]" />
              HONORS & CREDENTIALS
            </h2>
          </div>
          <span className="text-[10px] text-[#00D4FF] border border-[#00D4FF44] px-2.5 py-1 rounded">
            [VERIFIED CERTIFICATIONS]
          </span>
        </div>

        <p className="text-xs text-[#91A8BF]">
          Hover or tap on any credential point below to inspect awards, hackathon outcomes, and verified certificates.
        </p>

        {/* Telemetry Points */}
        <div className="space-y-4 pt-2">
          {achievementsData.slice(0, 4).map((item, idx) => (
            <TelemetryPoint
              key={item.id}
              id={item.id}
              index={idx + 1}
              label={item.title}
              tag={item.awardPlacement}
              isOpenDefault={idx === 0}
              onInspect={item.hasScan && item.scanUrl ? () => setSelectedScan(item) : undefined}
              inspectLabel="View Genuine Scan"
            >
              <div className="space-y-2 text-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[#00D4FF]">
                  <span>Organiser: {item.organiser}</span>
                  <span className="text-[#91A8BF]">{item.date}</span>
                </div>
                <p className="text-[#EAF5FF] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </TelemetryPoint>
          ))}
        </div>

        {/* Navigation Step Actions */}
        <div className="pt-6 flex items-center justify-between">
          <button
            onClick={onPrevStep}
            className="px-4 py-2 bg-[#0A1220] hover:bg-[#14243A] text-[#00D4FF] border border-[#14243A] hover:border-[#00D4FF] rounded text-xs flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Prev: Skills</span>
          </button>

          <button
            onClick={onNextStep}
            className="px-5 py-2 bg-[#007BFF] hover:bg-[#00D4FF] text-black font-bold rounded text-xs flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(0,123,255,0.3)] cursor-pointer"
          >
            <span>Next: Communications Hub</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modal for Genuine Scan */}
      {selectedScan && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#050B14] border border-[#00D4FF] rounded-lg max-w-lg w-full p-5 space-y-4 shadow-[0_0_50px_rgba(0,212,255,0.3)]">
            <div className="flex items-center justify-between pb-2 border-b border-[#14243A]">
              <span className="text-xs text-[#00D4FF] font-bold">OFFICIAL CREDENTIAL SCAN</span>
              <button onClick={() => setSelectedScan(null)} className="p-1 text-[#91A8BF] hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-[#000000] p-3 rounded flex items-center justify-center">
              <img src={selectedScan.scanUrl} alt={selectedScan.title} className="max-h-[300px] object-contain" />
            </div>
            <div className="text-xs text-[#EAF5FF]">{selectedScan.title}</div>
            <div className="flex justify-end">
              <button onClick={() => setSelectedScan(null)} className="px-4 py-1.5 bg-[#00D4FF] text-black font-bold text-xs rounded">
                Close Scan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
