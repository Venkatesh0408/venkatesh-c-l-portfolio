import React, { useEffect } from 'react';
import { X, AlertTriangle, Layers, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
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
        
        {/* Modal Header */}
        <div className="bg-space-900 px-6 py-4 border-b border-cyan-500/20 flex items-center justify-between select-none">
          <div className="flex items-center gap-2.5 font-mono">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00F0FF]" />
            <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">
              PROJECT DOSSIER // {project.category}
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
          {/* Title & Category Banner */}
          <div className="border-b border-space-800 pb-5">
            <div className="flex flex-wrap items-center gap-2 mb-2.5 font-mono">
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-400/30">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-emerald-950/40 text-emerald-400 border border-emerald-500/40">
                [VERIFIED RESUME PROJECT]
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-500/30 font-mono text-xs font-semibold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Project Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-space-800 text-slate-200 border border-space-700 hover:text-white hover:border-slate-500 font-mono text-xs transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Verified Engineering Boundary Notice */}
          {project.verifiedNote && (
            <div className="p-4 bg-amber-950/25 border border-amber-500/40 rounded-2xl space-y-1.5 font-mono">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs tracking-wide">
                <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
                <span>HARDWARE BOUNDARY NOTICE</span>
              </div>
              <p className="text-amber-200/90 text-xs leading-relaxed">
                {project.verifiedNote}
              </p>
            </div>
          )}

          {/* Exact Resume Bullet Points */}
          <div className="p-5 bg-space-900/80 border border-space-800 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold text-xs">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>PROJECT SUMMARY & TECHNICAL DETAILS</span>
            </div>
            <ul className="space-y-2.5">
              {project.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-200 leading-relaxed">
                  <span className="text-cyan-400 font-bold font-mono mt-0.5 shrink-0">›</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Photo Gallery */}
          {project.images && project.images.length > 0 && (
            <div>
              <div className="text-xs font-mono font-bold text-cyan-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>PROJECT VISUALS & SYSTEM DIAGRAMS</span>
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
        </div>

        {/* Modal Footer */}
        <div className="bg-space-900 px-6 py-4 border-t border-cyan-500/20 flex items-center justify-between font-mono text-xs">
          <span className="text-[11px] text-slate-400">
            VERIFIED GROUND TRUTH • RAJARAJESWARI COLLEGE OF ENGINEERING
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
