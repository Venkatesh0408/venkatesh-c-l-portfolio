import React from 'react';
import { GraduationCap, ArrowRight, ArrowLeft, Calendar, Building, CheckCircle2 } from 'lucide-react';
import { educationData } from '../../data/education';
import { TelemetryPoint } from '../../components/ui/TelemetryPoint';
import { KaliSnakeDragon } from '../../components/ui/KaliSnakeDragon';

interface Step2EducationProps {
  onPrevStep: () => void;
  onNextStep: () => void;
}

export const Step2Education: React.FC<Step2EducationProps> = ({ onPrevStep, onNextStep }) => {
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
            <span className="text-[10px] text-[#007BFF] font-bold block">&gt; PIPELINE STAGE // 02</span>
            <h2 className="text-xl sm:text-3xl font-black text-white tracking-wide flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-[#00D4FF]" />
              ACADEMIC TRAJECTORY
            </h2>
          </div>
          <span className="text-[10px] text-[#00E599] border border-[#00E59944] px-2.5 py-1 rounded">
            [VERIFIED RECORDS]
          </span>
        </div>

        <p className="text-xs text-[#91A8BF]">
          Hover or tap on any academic coordinate point below to inspect degree details, scores, and coursework.
        </p>

        {/* 3 Interactive Academic Points */}
        <div className="space-y-4 pt-2">
          {educationData.map((edu, idx) => (
            <TelemetryPoint
              key={edu.id}
              id={edu.id}
              index={idx + 1}
              label={`${edu.degree} — ${edu.discipline}`}
              tag={edu.score}
              isOpenDefault={idx === 0}
            >
              <div className="space-y-2 text-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[#EAF5FF]">
                  <span className="font-bold flex items-center gap-1.5 text-[#00D4FF]">
                    <Building className="w-3.5 h-3.5" /> {edu.institution}
                  </span>
                  <span className="text-[#91A8BF] flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#007BFF]" /> {edu.period} • {edu.location}
                  </span>
                </div>

                <div className="pt-2 border-t border-[#14243A] space-y-1">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-[#91A8BF]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00E599] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
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
            <span>Prev: Identity</span>
          </button>

          <button
            onClick={onNextStep}
            className="px-5 py-2 bg-[#007BFF] hover:bg-[#00D4FF] text-black font-bold rounded text-xs flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(0,123,255,0.3)] cursor-pointer"
          >
            <span>Next: Industrial Experience</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
