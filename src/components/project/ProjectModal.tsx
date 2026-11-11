import React, { useEffect } from 'react';
import { X, Cpu, HardDrive, AlertTriangle, ArrowRight, CheckCircle2, Layers, Award } from 'lucide-react';
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
      <div className="relative w-full max-w-4xl bg-navy-950 border border-accent-cyan/40 rounded-2xl shadow-[0_0_50px_rgba(0,212,255,0.2)] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Modern Header */}
        <div className="bg-navy-900 px-6 py-4 border-b border-navy-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-xs text-accent-cyan font-bold uppercase tracking-wider">
              Technical Dossier // {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-navy-800 rounded-lg transition-all"
            title="Close dossier (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 scrollbar-thin text-xs sm:text-sm">
          {/* Top Title & Status Banner */}
          <div className="border-b border-navy-800 pb-5">
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-accent-blue/15 text-accent-cyan border border-accent-blue/30">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-emerald-950/40 text-emerald-400 border border-emerald-500/40">
                {project.status}
              </span>
              {project.id === 'submersible-micro-robot' && (
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>1st Prize Innovex 2026 Winner</span>
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
            <div className="p-4 bg-amber-950/25 border border-amber-600/40 rounded-xl space-y-1.5">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs tracking-wide">
                <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
                VERIFIED TECHNICAL BOUNDARIES & BENCH FACTS
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
            <div className="p-4 bg-navy-900/60 border border-navy-800 rounded-xl">
              <span className="text-[11px] text-accent-cyan font-bold uppercase tracking-wider block mb-1">
                01 // The Problem
              </span>
              <p className="text-slate-300 text-xs leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-4 bg-navy-900/60 border border-navy-800 rounded-xl">
              <span className="text-[11px] text-accent-cyan font-bold uppercase tracking-wider block mb-1">
                02 // Engineering Objective
              </span>
              <p className="text-slate-300 text-xs leading-relaxed">{project.objective}</p>
            </div>
            <div className="p-4 bg-navy-900/60 border border-navy-800 rounded-xl">
              <span className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                03 // Architecture & Solution
              </span>
              <p className="text-slate-300 text-xs leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Hardware BOM & Software Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Hardware BOM */}
            <div className="p-5 bg-navy-900/60 border border-navy-800 rounded-xl">
              <div className="flex items-center gap-2 text-accent-cyan font-bold text-xs mb-3">
                <Cpu className="w-4 h-4 text-accent-cyan" />
                <span>HARDWARE BILL OF MATERIALS (BOM)</span>
              </div>
              <ul className="space-y-2">
                {project.hardware.map((hw, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <span className="text-accent-cyan font-bold mt-0.5">›</span>
                    <span className="leading-relaxed">{hw}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Software Stack */}
            <div className="p-5 bg-navy-900/60 border border-navy-800 rounded-xl">
              <div className="flex items-center gap-2 text-accent-cyan font-bold text-xs mb-3">
                <HardDrive className="w-4 h-4 text-accent-cyan" />
                <span>SOFTWARE, PROTOCOLS & FIRMWARE</span>
              </div>
              <ul className="space-y-2">
                {project.software.map((sw, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <span className="text-accent-blue font-bold mt-0.5">›</span>
                    <span className="leading-relaxed">{sw}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Engineering Contributions */}
          <div className="p-5 bg-navy-900/60 border border-navy-800 rounded-xl">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>PERSONAL ENGINEERING CONTRIBUTIONS</span>
            </div>
            <ul className="space-y-2">
              {project.keyContributions.map((kc, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                  <span className="text-emerald-400 font-bold shrink-0">[✓]</span>
                  <span className="leading-relaxed">{kc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Real Photo Gallery */}
          {project.images && project.images.length > 0 && (
            <div>
              <div className="text-xs font-bold text-accent-cyan mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-accent-cyan" />
                <span>VERIFIED TEST BENCH & CAD IMAGERY</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.images.map((img, idx) => (
                  <div key={idx} className="bg-navy-900 border border-navy-800 rounded-xl overflow-hidden group">
                    <div className="h-44 bg-navy-950 flex items-center justify-center overflow-hidden">
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="object-contain w-full h-full p-2 group-hover:scale-105 transition-all duration-300"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="p-2.5 border-t border-navy-800 text-[11px] text-slate-400">
                      {img.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Future Work */}
          {project.futureWork && project.futureWork.length > 0 && (
            <div className="p-4 bg-navy-900/60 border border-navy-800 rounded-xl">
              <span className="text-xs font-bold text-accent-cyan block mb-2">FUTURE ENHANCEMENT ROADMAP</span>
              <ul className="space-y-1.5">
                {project.futureWork.map((fw, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                    <span>{fw}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-navy-900 px-6 py-4 border-t border-navy-800 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            VERIFIED GROUND TRUTH • RRCE DEPARTMENT OF ROBOTICS & AUTOMATION
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gradient-to-r from-accent-blue to-accent-cyan hover:opacity-95 text-white font-bold text-xs rounded-lg transition-all"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
