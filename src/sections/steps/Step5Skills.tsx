import React from 'react';
import { Cpu, ArrowRight, ArrowLeft, Wrench, Layers, Terminal, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../../data/skills';
import { TelemetryPoint } from '../../components/ui/TelemetryPoint';
import { KaliSnakeDragon } from '../../components/ui/KaliSnakeDragon';

interface Step5SkillsProps {
  onPrevStep: () => void;
  onNextStep: () => void;
}

export const Step5Skills: React.FC<Step5SkillsProps> = ({ onPrevStep, onNextStep }) => {
  const embeddedSkills = skillsData.filter(s => s.category === "Embedded & Hardware");
  const industrialSkills = skillsData.filter(s => s.category === "Industrial & Electrical");
  const cadSkills = skillsData.filter(s => s.category === "CAD & Prototyping");
  const softwareSkills = skillsData.filter(s => s.category === "Software & Tools");

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
            <span className="text-[10px] text-[#007BFF] font-bold block">&gt; PIPELINE STAGE // 05</span>
            <h2 className="text-xl sm:text-3xl font-black text-white tracking-wide flex items-center gap-2">
              <Cpu className="w-6 h-6 text-[#00D4FF]" />
              TECHNICAL TOOLCHAIN
            </h2>
          </div>
          <span className="text-[10px] text-[#00E599] border border-[#00E59944] px-2.5 py-1 rounded">
            [ZERO FAKE PERCENTAGES]
          </span>
        </div>

        <p className="text-xs text-[#91A8BF]">
          Hover or tap on any engineering domain point below to inspect hands-on tool usage and project applications.
        </p>

        {/* 4 Categorized Skill Telemetry Points */}
        <div className="space-y-4 pt-2">
          {/* Point 1: Embedded */}
          <TelemetryPoint
            id="embedded"
            index={1}
            label="Embedded & Microcontroller Platforms"
            tag="HARDWARE"
            isOpenDefault={true}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {embeddedSkills.map((s, idx) => (
                <div key={idx} className="p-2 bg-[#000000] border border-[#14243A] rounded space-y-0.5">
                  <div className="font-bold text-[#00D4FF]">{s.name}</div>
                  <div className="text-[10px] text-[#91A8BF]">{s.practicalUse}</div>
                </div>
              ))}
            </div>
          </TelemetryPoint>

          {/* Point 2: Industrial */}
          <TelemetryPoint
            id="industrial"
            index={2}
            label="Industrial Automation & Control Panel Wiring"
            tag="8 MOS EXP"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {industrialSkills.map((s, idx) => (
                <div key={idx} className="p-2 bg-[#000000] border border-[#14243A] rounded space-y-0.5">
                  <div className="font-bold text-[#007BFF]">{s.name}</div>
                  <div className="text-[10px] text-[#91A8BF]">{s.practicalUse}</div>
                </div>
              ))}
            </div>
          </TelemetryPoint>

          {/* Point 3: CAD */}
          <TelemetryPoint
            id="cad"
            index={3}
            label="Mechanical CAD & 3D Prototyping"
            tag="SOLID EDGE"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {cadSkills.map((s, idx) => (
                <div key={idx} className="p-2 bg-[#000000] border border-[#14243A] rounded space-y-0.5">
                  <div className="font-bold text-[#B388FF]">{s.name}</div>
                  <div className="text-[10px] text-[#91A8BF]">{s.practicalUse}</div>
                </div>
              ))}
            </div>
          </TelemetryPoint>

          {/* Point 4: Software */}
          <TelemetryPoint
            id="software"
            index={4}
            label="Software Engineering & Protocols"
            tag="C++ / ARDUINO"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {softwareSkills.map((s, idx) => (
                <div key={idx} className="p-2 bg-[#000000] border border-[#14243A] rounded space-y-0.5">
                  <div className="font-bold text-[#00E599]">{s.name}</div>
                  <div className="text-[10px] text-[#91A8BF]">{s.practicalUse}</div>
                </div>
              ))}
            </div>
          </TelemetryPoint>
        </div>

        {/* Navigation Step Actions */}
        <div className="pt-6 flex items-center justify-between">
          <button
            onClick={onPrevStep}
            className="px-4 py-2 bg-[#0A1220] hover:bg-[#14243A] text-[#00D4FF] border border-[#14243A] hover:border-[#00D4FF] rounded text-xs flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Prev: Projects</span>
          </button>

          <button
            onClick={onNextStep}
            className="px-5 py-2 bg-[#007BFF] hover:bg-[#00D4FF] text-black font-bold rounded text-xs flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(0,123,255,0.3)] cursor-pointer"
          >
            <span>Next: Honors & Credentials</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
