import React, { useState } from 'react';
import { Cpu, Eye, AlertTriangle, Layers, ExternalLink, ChevronRight, Award, CheckCircle2 } from 'lucide-react';
import { projectsData, ProjectItem } from '../data/projects';

interface ModernProjectsProps {
  onOpenProjectModal: (projectId: string) => void;
}

export const ModernProjects: React.FC<ModernProjectsProps> = ({ onOpenProjectModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.id === selectedCategory);

  return (
    <section id="projects" className="py-20 relative bg-navy-950/70 border-t border-navy-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-blue/10 border border-accent-blue/30 text-accent-cyan text-xs font-bold uppercase tracking-wider mb-3">
              <span>04 // Engineering Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Real-world prototypes spanning marine robotics, embedded sensor telemetry, industrial PLC sorting, and intelligent digital assistants.
            </p>
          </div>

          {/* Quick Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-accent-blue text-white shadow-[0_0_12px_rgba(8,123,255,0.3)]'
                  : 'bg-navy-900 text-slate-300 hover:text-white border border-navy-800'
              }`}
            >
              All Systems (4)
            </button>
            {projectsData.map(p => (
              <button
                key={p.id}
                onClick={() => setSelectedCategory(p.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === p.id
                    ? 'bg-accent-blue text-white shadow-[0_0_12px_rgba(8,123,255,0.3)]'
                    : 'bg-navy-900 text-slate-300 hover:text-white border border-navy-800'
                }`}
              >
                {p.id === 'submersible-micro-robot' ? 'Submersible Robot' : p.id === 'automated-fish-boat' ? 'Fish-Catching Boat' : p.id === 'plc-object-segregation' ? 'PLC Sorting' : 'AI Health'}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: ProjectItem) => {
            const isSubmersible = project.id === 'submersible-micro-robot';
            const hasImages = project.images && project.images.length > 0;

            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-navy-900/60 border border-navy-700/80 hover:border-accent-cyan/50 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,212,255,0.12)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Image Preview Banner */}
                  <div className="relative h-56 bg-navy-950 overflow-hidden flex items-center justify-center border-b border-navy-800">
                    {hasImages ? (
                      <img
                        src={project.images[0].url}
                        alt={project.images[0].caption}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-navy-900 to-navy-950 flex flex-col items-center justify-center p-6 text-center">
                        <Layers className="w-12 h-12 text-accent-cyan/40 mb-2" />
                        <span className="text-xs text-slate-400 font-medium">
                          Software & Intelligence Architecture
                        </span>
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-80" />

                    {/* Category & Status Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-navy-950/80 backdrop-blur-md text-accent-cyan border border-accent-cyan/30">
                        {project.category}
                      </span>
                      {isSubmersible ? (
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-500/20 backdrop-blur-md text-amber-300 border border-amber-500/40 flex items-center gap-1 shadow-lg">
                          <Award className="w-3.5 h-3.5 text-amber-400" />
                          <span>1st Prize Innovex 2026</span>
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-navy-950/80 backdrop-blur-md text-slate-300 border border-navy-700">
                          {project.status}
                        </span>
                      )}
                    </div>

                    {/* Image Caption Pill if present */}
                    {hasImages && (
                      <div className="absolute bottom-3 left-3 right-3 text-[11px] text-slate-300 bg-navy-950/70 backdrop-blur-sm px-2.5 py-1 rounded border border-navy-700/60 truncate">
                        {project.images[0].caption}
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {project.shortSummary}
                    </p>

                    {/* Critical Limitation Callout for Underwater Robot */}
                    {isSubmersible && (
                      <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-600/30 text-amber-300/90 text-xs flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">
                          <strong>Verified Hardware Note:</strong> Tested with Turbidity sensor and ESP32-CAM. Does not use pH or ultrasonic distance sensors in this validated iteration.
                        </span>
                      </div>
                    )}

                    {/* Hardware & Software Components */}
                    <div className="space-y-3 pt-2">
                      <div>
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
                          <span>Key Components & Hardware:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.hardware.slice(0, 4).map((hw, hIdx) => (
                            <span
                              key={hIdx}
                              className="px-2.5 py-1 rounded-md bg-navy-950 text-slate-300 border border-navy-800 text-[11px]"
                            >
                              {hw}
                            </span>
                          ))}
                          {project.hardware.length > 4 && (
                            <span className="px-2 py-1 rounded-md bg-navy-950 text-accent-cyan border border-navy-800 text-[11px]">
                              +{project.hardware.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div>
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                          Software & Protocols:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.software.slice(0, 3).map((sw, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-0.5 rounded text-[11px] bg-accent-blue/10 text-accent-cyan border border-accent-blue/30 font-medium"
                            >
                              {sw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer with Modal Trigger */}
                <div className="px-6 pb-6 pt-2 border-t border-navy-800 flex items-center justify-between gap-3">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Verified Test Prototype</span>
                  </div>

                  <button
                    onClick={() => onOpenProjectModal(project.id)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-accent-blue hover:bg-accent-blue/90 shadow-[0_0_15px_rgba(8,123,255,0.3)] transition-all"
                  >
                    <span>View Technical Dossier</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Transparency Guarantee */}
        <div className="mt-12 p-5 rounded-2xl bg-navy-900/40 border border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
            <span>
              All project specifications reflect physical laboratory tests and actual microcontroller code benches. No fabricated pH readings, sonar distance data, or autonomous claims.
            </span>
          </div>
          <span className="font-bold text-accent-cyan shrink-0">
            RRCE Robotics & Automation Bench Data
          </span>
        </div>

      </div>
    </section>
  );
};
