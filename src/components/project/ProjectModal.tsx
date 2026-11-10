import React, { useEffect } from 'react';
import { X, Cpu, HardDrive, AlertTriangle, ArrowRight, CheckCircle2, ShieldCheck, Layers } from 'lucide-react';
import { ProjectItem } from '../../data/projects';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-mono">
      <div className="relative w-full max-w-4xl bg-[#101B2B] border border-[#00D4FF] rounded-lg shadow-[0_0_50px_rgba(0,212,255,0.25)] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Terminal Header */}
        <div className="bg-[#14243A] px-4 py-3 border-b border-[#182A42] flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00D4FF] animate-pulse" />
            <span className="text-xs text-[#00D4FF] font-semibold">
              PROJECT_DOSSIER // {project.id.toUpperCase()}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#91A8BF] hover:text-white hover:bg-[#182A42] rounded transition-all"
            title="Close dossier (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 scrollbar-thin text-xs sm:text-sm">
          {/* Top Title & Status Banner */}
          <div className="border-b border-[#182A42] pb-4">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded text-[11px] bg-[#00D4FF15] text-[#00D4FF] border border-[#00D4FF44]">
                {project.category}
              </span>
              <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${
                project.statusType === 'verified'
                  ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/40'
                  : 'bg-purple-950/40 text-purple-400 border-purple-500/40'
              }`}>
                [{project.status.toUpperCase()}]
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-[#EAF5FF] tracking-wide">
              {project.title}
            </h2>
            <p className="text-[#91A8BF] text-xs sm:text-sm mt-1.5 leading-relaxed">
              {project.shortSummary}
            </p>
          </div>

          {/* Strict Technical Limitations Notice */}
          {project.limitations.length > 0 && (
            <div className="p-3.5 bg-amber-950/30 border border-amber-600/50 rounded-lg space-y-1.5">
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs tracking-wide">
                <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
                VERIFIED TECHNICAL BOUNDARIES & LIMITATIONS
              </div>
              <ul className="list-disc list-inside text-amber-200/90 text-xs space-y-1 pl-1">
                {project.limitations.map((lim, idx) => (
                  <li key={idx} className="leading-relaxed">{lim}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Problem, Objective & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            <div className="p-3.5 bg-[#0B0F1A] border border-[#182A42] rounded">
              <span className="text-[11px] text-[#007BFF] font-semibold block mb-1">01 // THE PROBLEM</span>
              <p className="text-[#91A8BF] text-xs leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-3.5 bg-[#0B0F1A] border border-[#182A42] rounded">
              <span className="text-[11px] text-[#00D4FF] font-semibold block mb-1">02 // OBJECTIVE</span>
              <p className="text-[#91A8BF] text-xs leading-relaxed">{project.objective}</p>
            </div>
            <div className="p-3.5 bg-[#0B0F1A] border border-[#182A42] rounded">
              <span className="text-[11px] text-[#00E599] font-semibold block mb-1">03 // ARCHITECTURE</span>
              <p className="text-[#91A8BF] text-xs leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Hardware BOM & Software Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Hardware BOM */}
            <div className="p-4 bg-[#0B0F1A] border border-[#182A42] rounded-lg">
              <div className="flex items-center gap-2 text-[#00D4FF] font-semibold text-xs mb-3">
                <Cpu className="w-4 h-4" /> HARDWARE BILL OF MATERIALS (BOM)
              </div>
              <ul className="space-y-1.5">
                {project.hardware.map((hw, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#EAF5FF]">
                    <span className="text-[#00D4FF] font-bold">»</span>
                    <span>{hw}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Software Stack */}
            <div className="p-4 bg-[#0B0F1A] border border-[#182A42] rounded-lg">
              <div className="flex items-center gap-2 text-[#007BFF] font-semibold text-xs mb-3">
                <HardDrive className="w-4 h-4" /> SOFTWARE & PROTOCOLS
              </div>
              <ul className="space-y-1.5">
                {project.software.map((sw, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#EAF5FF]">
                    <span className="text-[#007BFF] font-bold">»</span>
                    <span>{sw}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Engineering Contributions */}
          <div className="p-4 bg-[#0B0F1A] border border-[#182A42] rounded-lg">
            <div className="flex items-center gap-2 text-[#00E599] font-semibold text-xs mb-3">
              <CheckCircle2 className="w-4 h-4" /> PERSONAL ENGINEERING CONTRIBUTIONS
            </div>
            <ul className="space-y-2">
              {project.keyContributions.map((kc, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#EAF5FF]">
                  <span className="text-[#00E599] font-bold">[✓]</span>
                  <span className="leading-relaxed">{kc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Real Photo Gallery */}
          {project.images.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-[#00D4FF] mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" /> VERIFIED TEST RIG & CAD IMAGERY
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {project.images.map((img, idx) => (
                  <div key={idx} className="bg-[#0B0F1A] border border-[#182A42] rounded overflow-hidden group">
                    <div className="h-44 bg-black/40 flex items-center justify-center overflow-hidden">
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="object-contain w-full h-full p-2 group-hover:scale-105 transition-all duration-300"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="p-2 border-t border-[#182A42] text-[11px] text-[#91A8BF]">
                      {img.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Future Work */}
          {project.futureWork.length > 0 && (
            <div className="p-3.5 bg-[#0B0F1A] border border-[#182A42] rounded-lg">
              <span className="text-xs font-semibold text-[#00D4FF] block mb-2">FUTURE ENHANCEMENT ROADMAP</span>
              <ul className="space-y-1">
                {project.futureWork.map((fw, idx) => (
                  <li key={idx} className="text-xs text-[#91A8BF] flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-[#00D4FF]" />
                    <span>{fw}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#14243A] px-6 py-3 border-t border-[#182A42] flex items-center justify-between">
          <span className="text-[11px] text-[#91A8BF]">
            VERIFIED GROUND TRUTH • RRCE DEPARTMENT OF ROBOTICS & AUTOMATION
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#00D4FF] hover:bg-white text-black font-semibold text-xs rounded transition-all"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
