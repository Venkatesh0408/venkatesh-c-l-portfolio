import React from 'react';
import { FolderGit2, ArrowRight, ArrowLeft, Cpu, AlertTriangle, Layers, Eye } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { TelemetryPoint } from '../../components/ui/TelemetryPoint';
import { KaliSnakeDragon } from '../../components/ui/KaliSnakeDragon';

interface Step4ProjectsProps {
  onPrevStep: () => void;
  onNextStep: () => void;
  onOpenProjectModal: (projectId: string) => void;
}

export const Step4Projects: React.FC<Step4ProjectsProps> = ({
  onPrevStep,
  onNextStep,
  onOpenProjectModal
}) => {
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
            <span className="text-[10px] text-[#007BFF] font-bold block">&gt; PIPELINE STAGE // 04</span>
            <h2 className="text-xl sm:text-3xl font-black text-white tracking-wide flex items-center gap-2">
              <FolderGit2 className="w-6 h-6 text-[#00D4FF]" />
              ENGINEERING SYSTEMS
            </h2>
          </div>
          <span className="text-[10px] text-[#00D4FF] border border-[#00D4FF44] px-2.5 py-1 rounded">
            [4 VERIFIED ARCHITECTURES]
          </span>
        </div>

        <p className="text-xs text-[#91A8BF]">
          Hover or tap on any engineering project point below to inspect hardware bill of materials, verified test photos, and limitations.
        </p>

        {/* 4 Projects Telemetry Points */}
        <div className="space-y-4 pt-2">
          {projectsData.map((project, idx) => (
            <TelemetryPoint
              key={project.id}
              id={project.id}
              index={idx + 1}
              label={project.title}
              tag={project.status.toUpperCase()}
              isOpenDefault={idx === 0}
              onInspect={() => onOpenProjectModal(project.id)}
              inspectLabel="Inspect Full Technical Dossier"
            >
              <div className="space-y-2.5 text-xs">
                <p className="text-[#EAF5FF] font-medium leading-relaxed">
                  {project.shortSummary}
                </p>

                {/* Hardware Spec */}
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-[10px] text-[#00D4FF] font-bold flex items-center gap-1">
                    <Cpu className="w-3 h-3" /> HARDWARE:
                  </span>
                  {project.hardware.slice(0, 3).map((hw, hIdx) => (
                    <span key={hIdx} className="text-[10px] bg-[#000000] text-[#EAF5FF] border border-[#14243A] px-2 py-0.5 rounded">
                      {hw.split('(')[0]}
                    </span>
                  ))}
                  {project.hardware.length > 3 && (
                    <span className="text-[10px] text-[#91A8BF]">
                      +{project.hardware.length - 3} more
                    </span>
                  )}
                </div>

                {/* Limitation Warning */}
                {project.limitations.length > 0 && (
                  <div className="p-2 bg-amber-950/20 border border-amber-600/30 rounded text-[11px] text-amber-300 flex items-start gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{project.limitations[0]}</span>
                  </div>
                )}
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
            <span>Prev: Experience</span>
          </button>

          <button
            onClick={onNextStep}
            className="px-5 py-2 bg-[#007BFF] hover:bg-[#00D4FF] text-black font-bold rounded text-xs flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(0,123,255,0.3)] cursor-pointer"
          >
            <span>Next: Technical Skills</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
