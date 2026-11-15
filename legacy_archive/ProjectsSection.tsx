import React, { useState } from 'react';
import { FolderGit2, Cpu, ExternalLink, ChevronRight, AlertTriangle, Layers, Eye } from 'lucide-react';
import { projectsData, ProjectItem } from '../data/projects';

interface ProjectsSectionProps {
  onOpenProjectModal: (projectId: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenProjectModal }) => {
  const [filter, setFilter] = useState<'All' | 'Robotics' | 'Industrial' | 'Software'>('All');

  const filteredProjects = projectsData.filter((p: ProjectItem) => {
    if (filter === 'All') return true;
    if (filter === 'Robotics') return p.category.includes('Robotics') || p.category.includes('Marine');
    if (filter === 'Industrial') return p.category.includes('Industrial');
    if (filter === 'Software') return p.category.includes('Software') || p.category.includes('AI');
    return true;
  });

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto font-mono scroll-mt-14">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-[#182A42] mb-8">
        <div className="flex items-center gap-2">
          <span className="text-[#00D4FF]">&gt;</span>
          <h2 className="text-xl sm:text-2xl font-black text-[#EAF5FF] tracking-wider flex items-center gap-2">
            <FolderGit2 className="w-5 h-5 text-[#00D4FF]" />
            ENGINEERING_SYSTEMS // MAJOR_PROJECTS
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 text-xs">
          {(['All', 'Robotics', 'Industrial', 'Software'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1 rounded transition-all ${
                filter === tab
                  ? 'bg-[#00D4FF] text-black font-bold shadow-[0_0_10px_rgba(0,212,255,0.3)]'
                  : 'bg-[#101B2B] text-[#91A8BF] hover:text-[#EAF5FF] border border-[#182A42]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project: ProjectItem, idx: number) => (
          <div
            key={project.id}
            className="bg-[#101B2B] border border-[#182A42] hover:border-[#00D4FF] rounded-lg p-5 sm:p-6 shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Card Header & Status */}
              <div className="flex items-center justify-between pb-3 border-b border-[#182A42] mb-3">
                <span className="text-[11px] text-[#00D4FF] font-semibold">
                  0{idx + 1} // {project.category.toUpperCase()}
                </span>
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${
                    project.statusType === 'verified'
                      ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/40'
                      : 'bg-purple-950/40 text-purple-400 border-purple-500/40'
                  }`}
                >
                  [{project.status.toUpperCase()}]
                </span>
              </div>

              {/* Title & Summary */}
              <div className="space-y-1.5 mb-3">
                <h3 className="text-lg font-bold text-[#EAF5FF] group-hover:text-[#00D4FF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#91A8BF] leading-relaxed">
                  {project.shortSummary}
                </p>
              </div>

              {/* Verified Hardware Badges */}
              <div className="space-y-1.5 mb-4">
                <span className="text-[10px] text-[#91A8BF] font-semibold block flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5 text-[#00D4FF]" /> HARDWARE SPECIFICATION:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.hardware.slice(0, 4).map((hw: string, hIdx: number) => (
                    <span
                      key={hIdx}
                      className="text-[10px] bg-[#0B0F1A] text-[#EAF5FF] border border-[#182A42] px-2 py-0.5 rounded"
                    >
                      {hw.split('(')[0]}
                    </span>
                  ))}
                  {project.hardware.length > 4 && (
                    <span className="text-[10px] text-[#91A8BF] self-center">
                      +{project.hardware.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Strict Limitation Callout banner */}
              {project.limitations.length > 0 && (
                <div className="p-2.5 bg-amber-950/20 border border-amber-600/30 rounded text-[11px] text-amber-300/90 flex items-start gap-1.5 mb-4">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-amber-400 mt-0.5" />
                  <span className="leading-tight">{project.limitations[0]}</span>
                </div>
              )}
            </div>

            {/* Inspect Dossier Action Button */}
            <div className="pt-3 border-t border-[#182A42] flex items-center justify-between">
              <span className="text-[10px] text-[#91A8BF]">
                {project.images.length > 0 ? `${project.images.length} verified test photos available` : 'Conceptual architecture model'}
              </span>

              <button
                onClick={() => onOpenProjectModal(project.id)}
                className="px-3.5 py-1.5 bg-[#14243A] hover:bg-[#00D4FF] text-[#00D4FF] hover:text-black font-semibold text-xs rounded border border-[#00D4FF44] hover:border-[#00D4FF] transition-all flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Inspect Dossier</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
