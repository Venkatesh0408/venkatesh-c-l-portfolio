import React, { useEffect } from 'react';
import { X, Cpu, HardDrive, AlertTriangle, ArrowRight, CheckCircle2, Layers, Award, Crosshair } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-space-950 border border-cyan-400/40 rounded-3xl shadow-[0_0_60px_rgba(0,212,255,0.25)] overflow-hidden my-auto max-h-[92vh] flex flex-col hud-corner">
        
        {/* Modal Modern Header */}
        <div className="bg-space-900 px-6 py-4 border-b border-cyan-500/20 flex items-center justify-between select-none">
          <div className="flex items-center gap-2.5 font-mono">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00F0FF]" />
            <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">
              TECHNICAL_DOSSIER // {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-space-800 rounded-lg transition-all cursor-pointer"
            title="Close dossier (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 scrollbar-thin text-xs sm:text-sm">
          {/* Top Title & Status Banner */}
          <div className="border-b border-space-800 pb-5">
            <div className="flex flex-wrap items-center gap-2 mb-2.5 font-mono">
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-400/30">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-emerald-950/40 text-emerald-400 border border-emerald-500/40">
                [{project.status.toUpperCase()}]
              </span>
              {project.id === 'submersible-micro-robot' && (
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>1ST PRIZE (GOLD) // INNOVEX 2026 WINNER</span>
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              {project.shortSummary}
            </p>
          </div>

          {/* Strict Technical Limitations Notice */}
          {project.limitations.length > 0 && (
            <div className="p-4 bg-amber-950/25 border border-amber-500/40 rounded-2xl space-y-1.5 font-mono">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs tracking-wide">
                <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
                <span>VERIFIED BENCH BOUNDARIES & HARDWARE FACTS</span>
              </div>
              <ul className="list-disc list-inside text-amber-200/90 text-xs space-y-1 pl-1">
                {project.limitations.map((lim, idx) => (
                  <li key={idx} className="leading-relaxed">{lim}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Problem, Objective & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-space-900/80 border border-space-800 rounded-2xl">
              <span className="text-[11px] text-cyan-400 font-mono font-bold uppercase tracking-wider block mb-1">
                01 // The Problem
              </span>
              <p className="text-slate-300 text-xs leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-4 bg-space-900/80 border border-space-800 rounded-2xl">
              <span className="text-[11px] text-cyan-400 font-mono font-bold uppercase tracking-wider block mb-1">
                02 // Engineering Objective
              </span>
              <p className="text-slate-300 text-xs leading-relaxed">{project.objective}</p>
            </div>
            <div className="p-4 bg-space-900/80 border border-space-800 rounded-2xl">
              <span className="text-[11px] text-emerald-400 font-mono font-bold uppercase tracking-wider block mb-1">
                03 // Architecture & Solution
              </span>
              <p className="text-slate-300 text-xs leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Hardware BOM & Software Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Hardware BOM */}
            <div className="p-5 bg-space-900/80 border border-space-800 rounded-2xl">
              <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold text-xs mb-3">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>HARDWARE BILL OF MATERIALS (BOM)</span>
              </div>
              <ul className="space-y-2">
                {project.hardware.map((hw, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 font-mono">
                    <span className="text-cyan-400 font-bold mt-0.5">›</span>
                    <span className="leading-relaxed">{hw}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Software Stack */}
            <div className="p-5 bg-space-900/80 border border-space-800 rounded-2xl">
              <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold text-xs mb-3">
                <HardDrive className="w-4 h-4 text-cyan-400" />
                <span>SOFTWARE, PROTOCOLS & FIRMWARE</span>
              </div>
              <ul className="space-y-2">
                {project.software.map((sw, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 font-mono">
                    <span className="text-electric-400 font-bold mt-0.5">›</span>
                    <span className="leading-relaxed">{sw}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Engineering Contributions */}
          <div className="p-5 bg-space-900/80 border border-space-800 rounded-2xl">
            <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-xs mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>PERSONAL ENGINEERING CONTRIBUTIONS</span>
            </div>
            <ul className="space-y-2">
              {project.keyContributions.map((kc, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                  <span className="text-emerald-400 font-mono font-bold shrink-0">[✓]</span>
                  <span className="leading-relaxed">{kc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Photo Gallery */}
          {project.images && project.images.length > 0 && (
            <div>
              <div className="text-xs font-mono font-bold text-cyan-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>VERIFIED TEST BENCH & CAD IMAGERY</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.images.map((img, idx) => (
                  <div key={idx} className="bg-space-900 border border-space-800 rounded-xl overflow-hidden group">
                    <div className="h-44 bg-space-950 flex items-center justify-center overflow-hidden">
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="object-contain w-full h-full p-2 group-hover:scale-105 transition-all duration-300"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="p-2.5 border-t border-space-800 text-[11px] font-mono text-slate-400">
                      {img.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Future Roadmap */}
          {project.futureWork && project.futureWork.length > 0 && (
            <div className="p-4 bg-space-900/80 border border-space-800 rounded-2xl">
              <span className="text-xs font-mono font-bold text-cyan-400 block mb-2">FUTURE ENHANCEMENT ROADMAP</span>
              <ul className="space-y-1.5">
                {project.futureWork.map((fw, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-center gap-2 font-mono">
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{fw}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-space-900 px-6 py-4 border-t border-cyan-500/20 flex items-center justify-between font-mono text-xs">
          <span className="text-[11px] text-slate-400">
            VERIFIED GROUND TRUTH • RRCE DEPARTMENT OF ROBOTICS & AUTOMATION
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gradient-to-r from-electric-500 to-cyan-500 hover:opacity-95 text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-md"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
