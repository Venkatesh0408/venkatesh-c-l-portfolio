import React, { useState } from 'react';
import { ExternalLink, Award, AlertTriangle, Layers, ChevronRight, Globe } from 'lucide-react';
import { projectsData } from '../data/projects';
import { GithubIcon } from '../components/ui/Icons';

interface ModernProjectsProps {
  onOpenProjectModal: (projectId: string) => void;
}

export const ModernProjects: React.FC<ModernProjectsProps> = ({ onOpenProjectModal }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const flagshipProject = projectsData[0];
  const secondaryProjects = projectsData.slice(1);

  return (
    <section id="projects" className="py-20 relative bg-space-950 border-t border-cyan-500/15">
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>04 // Projects (From Resume)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Projects
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            The four engineering projects exactly as documented on Page 2 of the uploaded resume.
          </p>
        </div>

        {/* FLAGSHIP SHOWCASE: Submersible Micro Robot */}
        <div className="mb-14">
          <div className="hud-panel hud-corner rounded-3xl p-6 sm:p-9 border-2 border-cyan-400/40 shadow-[0_0_45px_rgba(0,212,255,0.15)]">
            
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-cyan-500/20 font-mono text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>FIRST PRIZE // INNOVEX 2026 (3 NOV 2026)</span>
                </span>
                <span className="px-3 py-1 rounded-full font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  FLAGSHIP PROJECT
                </span>
              </div>

              {/* Verified Links from Resume */}
              <div className="flex items-center gap-2">
                <a
                  href={flagshipProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-space-900 border border-space-700 hover:border-cyan-400 text-slate-300 hover:text-white flex items-center gap-1.5 transition-all text-xs"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
                <a
                  href={flagshipProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-electric-500 to-cyan-500 text-white font-bold flex items-center gap-1.5 transition-all text-xs shadow-md"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Project Demo</span>
                </a>
              </div>
            </div>

            {/* Title */}
            <div className="mt-5 space-y-1">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {flagshipProject.title}
              </h3>
            </div>

            {/* Grid: Imagery & Exact Resume Bullets */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-start">
              
              {/* Left Column: Real Test Images */}
              <div className="lg:col-span-6 space-y-3">
                <div className="relative h-64 sm:h-76 rounded-2xl bg-space-900 border border-cyan-500/30 overflow-hidden flex items-center justify-center">
                  <img
                    src={flagshipProject.images[activeImageIndex]?.url || flagshipProject.images[0].url}
                    alt={flagshipProject.images[activeImageIndex]?.caption || "Submersible Micro Robot test"}
                    className="w-full h-full object-contain p-2"
                  />
                  <div className="absolute bottom-2 left-2 right-2 p-2 rounded-xl bg-space-950/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center justify-between">
                    <span className="truncate">{flagshipProject.images[activeImageIndex]?.caption}</span>
                    <span className="text-[10px] text-slate-400">{activeImageIndex + 1}/{flagshipProject.images.length}</span>
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-3 gap-2">
                  {flagshipProject.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`h-16 rounded-xl overflow-hidden bg-space-900 border transition-all cursor-pointer ${
                        activeImageIndex === idx
                          ? 'border-cyan-400 ring-1 ring-cyan-400'
                          : 'border-space-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>

                {/* Verified pH Boundary Notice - Exact from Resume */}
                <div className="p-3.5 rounded-2xl bg-amber-950/25 border border-amber-500/40 text-amber-200 text-xs font-mono space-y-1">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                    <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
                    <span>EXACT RESUME NOTE:</span>
                  </div>
                  <p className="leading-relaxed">
                    &ldquo;Camera-based visual assessment is distinguished from measured pH; the project does not use a pH sensor.&rdquo;
                  </p>
                </div>
              </div>

              {/* Right Column: Exact Resume Bullets */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-6 rounded-2xl bg-space-900/80 border border-space-800 space-y-3">
                  <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider pb-2 border-b border-cyan-500/20">
                    PROJECT DETAILS (EXACTLY AS SUBMITTED IN RESUME):
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                    {flagshipProject.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <span className="text-cyan-400 font-bold font-mono mt-0.5">•</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => onOpenProjectModal(flagshipProject.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold text-cyan-400 hover:text-white bg-space-900 border border-cyan-500/30 hover:border-cyan-400 transition-all cursor-pointer"
                  >
                    <span>View Technical Dossier</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 3 SECONDARY PROJECTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="hud-panel hud-corner rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300"
            >
              <div>
                {/* Image preview if exists */}
                {project.images.length > 0 ? (
                  <div className="h-44 rounded-2xl bg-space-900 border border-space-800 overflow-hidden mb-4 flex items-center justify-center">
                    <img
                      src={project.images[0].url}
                      alt={project.images[0].caption}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-28 rounded-2xl bg-space-900 border border-space-800 mb-4 flex items-center justify-center text-xs font-mono text-slate-400">
                    <span>DIGITAL ASSISTANT CONCEPT</span>
                  </div>
                )}

                <h4 className="text-lg font-bold text-white tracking-tight">
                  {project.title}
                </h4>

                {/* Bullets directly from resume */}
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  {project.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold font-mono mt-0.5">•</span>
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-space-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">From Page 2 Resume</span>
                <button
                  onClick={() => onOpenProjectModal(project.id)}
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-cyan-400 hover:text-white transition-colors cursor-pointer"
                >
                  <span>Dossier</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
