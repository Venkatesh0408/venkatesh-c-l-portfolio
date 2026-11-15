import React from 'react';
import { Briefcase, ArrowRight, ArrowLeft, Calendar, Building, Wrench, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../../data/experience';
import { TelemetryPoint } from '../../components/ui/TelemetryPoint';
import { KaliSnakeDragon } from '../../components/ui/KaliSnakeDragon';

interface Step3ExperienceProps {
  onPrevStep: () => void;
  onNextStep: () => void;
}

export const Step3Experience: React.FC<Step3ExperienceProps> = ({ onPrevStep, onNextStep }) => {
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
            <span className="text-[10px] text-[#007BFF] font-bold block">&gt; PIPELINE STAGE // 03</span>
            <h2 className="text-xl sm:text-3xl font-black text-white tracking-wide flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-[#00D4FF]" />
              INDUSTRIAL INTERNSHIPS
            </h2>
          </div>
          <span className="text-[10px] text-[#00E599] border border-[#00E59944] px-2.5 py-1 rounded">
            [8 MONTHS SHOP-FLOOR EXPOSURE]
          </span>
        </div>

        <p className="text-xs text-[#91A8BF]">
          Hover or tap on an organization coordinate point to reveal verified responsibilities and industrial equipment handled.
        </p>

        {/* 2 Industrial Telemetry Points */}
        <div className="space-y-4 pt-2">
          {experienceData.map((exp, idx) => (
            <TelemetryPoint
              key={exp.id}
              id={exp.id}
              index={idx + 1}
              label={`${exp.role} @ ${exp.company}`}
              tag={exp.duration}
              isOpenDefault={idx === 0}
            >
              <div className="space-y-3 text-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 text-[#EAF5FF]">
                  <span className="text-[#00D4FF] font-semibold">{exp.datesText}</span>
                  <span className="text-[#91A8BF]">{exp.summary}</span>
                </div>

                {/* Responsibilities */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] text-[#00E599] font-bold block">
                    SHOP-FLOOR CONTRIBUTIONS:
                  </span>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-[#EAF5FF]/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D4FF] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Machinery Handled */}
                <div className="pt-2 border-t border-[#14243A]">
                  <span className="text-[10px] text-[#91A8BF] font-semibold block mb-1.5 flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-[#007BFF]" /> MACHINERY & TOOLS:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.equipment.map((eq, eIdx) => (
                      <span key={eIdx} className="text-[10px] bg-[#000000] text-[#00D4FF] border border-[#14243A] px-2 py-0.5 rounded">
                        {eq}
                      </span>
                    ))}
                  </div>
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
            <span>Prev: Academics</span>
          </button>

          <button
            onClick={onNextStep}
            className="px-5 py-2 bg-[#007BFF] hover:bg-[#00D4FF] text-black font-bold rounded text-xs flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(0,123,255,0.3)] cursor-pointer"
          >
            <span>Next: Engineering Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
