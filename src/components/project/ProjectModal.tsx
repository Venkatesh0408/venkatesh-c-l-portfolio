import React, { useEffect, useState } from 'react';
import { X, AlertTriangle, ExternalLink, CheckCircle2, ChevronDown } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { ProjectItem } from '../../data/projects';
import { DemoOptionsPanel } from './DemoSelector';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [showDemoOptions, setShowDemoOptions] = useState(false);

  useEffect(() => {
    setShowDemoOptions(false);
  }, [project?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-neutral-950 border border-neutral-700 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-neutral-900 px-6 py-4 border-b border-neutral-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2.5 font-mono">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span className="text-xs text-white font-bold uppercase tracking-wider">
              PROJECT OVERVIEW // {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg transition-all cursor-pointer"
            title="Close (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 scrollbar-thin text-xs sm:text-sm">
          {/* Title & Category Banner */}
          <div className="border-b border-neutral-800 pb-5">
            <div className="flex flex-wrap items-center gap-2 mb-2.5 font-mono">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-neutral-900 text-neutral-200 border border-neutral-750">
                {project.category}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-3 mt-4 font-mono">
              {project.demoLinks ? (
                <button
                  type="button"
                  onClick={() => setShowDemoOptions((prev) => !prev)}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white text-black hover:bg-neutral-200 text-xs font-bold transition-colors shadow-sm cursor-pointer"
                >
                  <span>Live Project Demo</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      showDemoOptions ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              ) : (
                project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white text-black hover:bg-neutral-200 text-xs font-bold transition-colors shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Project Demo</span>
                  </a>
                )
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-900 text-neutral-200 border border-neutral-700 hover:text-white hover:border-white text-xs transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>

            {project.demoLinks && (
              <DemoOptionsPanel
                isOpen={showDemoOptions}
                demoLinks={project.demoLinks}
                onClose={() => setShowDemoOptions(false)}
              />
            )}
          </div>

          {/* Verified Engineering Boundary Notice */}
          {project.verifiedNote && (
            <div className="p-4 bg-neutral-900 border border-neutral-700 rounded-2xl space-y-1.5 font-mono">
              <div className="flex items-center gap-2 text-white font-bold text-xs tracking-wide">
                <AlertTriangle className="w-4 h-4 shrink-0 text-white" />
                <span>TECHNICAL NOTE</span>
              </div>
              <p className="text-neutral-300 text-xs leading-relaxed">
                {project.verifiedNote}
              </p>
            </div>
          )}

          {/* Bullet Points */}
          <div className="p-5 bg-neutral-900/80 border border-neutral-800 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-white font-mono font-bold text-xs">
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>PROJECT SUMMARY & TECHNICAL DETAILS</span>
            </div>
            <ul className="space-y-2.5">
              {project.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-neutral-200 leading-relaxed">
                  <span className="text-white font-bold font-mono mt-0.5 shrink-0">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-neutral-900 px-6 py-4 border-t border-neutral-800 flex items-center justify-between font-mono text-xs">
          <span className="text-[11px] text-neutral-400">
            RAJARAJESWARI COLLEGE OF ENGINEERING • ROBOTICS & AUTOMATION
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-white text-black hover:bg-neutral-200 font-bold text-xs rounded-xl transition-all cursor-pointer shadow-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
