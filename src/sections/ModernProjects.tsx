import React from 'react';
import { ExternalLink, Award, AlertTriangle, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projects';
import { GithubIcon } from '../components/ui/Icons';
import { DemoHoverMenu } from '../components/project/DemoHoverMenu';

interface ModernProjectsProps {
  onOpenProjectModal?: (projectId: string) => void;
}

export const ModernProjects: React.FC<ModernProjectsProps> = () => {
  return (
    <section id="projects" className="py-20 relative bg-black border-t border-neutral-800">
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-700 text-white text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>04 // Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects
          </h2>
          <p className="mt-2 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Engineering projects developed across robotics, embedded systems, industrial automation, and software.
          </p>
        </div>

        {/* Projects List - Clean, compact, no image space or blank areas */}
        <div className="space-y-8">
          {projectsData.map((project) => {
            const isFlagship = project.id === 'submersible-micro-robot';

            return (
              <div
                key={project.id}
                className={`rounded-2xl bg-neutral-950 border p-6 sm:p-8 transition-all duration-200 relative ${
                  isFlagship
                    ? 'border-neutral-700 hover:border-white shadow-[0_4px_30px_rgba(255,255,255,0.05)]'
                    : 'border-neutral-850 hover:border-neutral-600'
                }`}
              >
                {/* Header: Title, Category, and Action URLs */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-neutral-800">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                      <span className="px-2.5 py-0.5 rounded bg-neutral-900 text-neutral-300 border border-neutral-700 font-medium">
                        {project.category}
                      </span>
                      {isFlagship && (
                        <span className="px-2.5 py-0.5 rounded bg-white text-black font-bold flex items-center gap-1">
                          <Award className="w-3.5 h-3.5" />
                          <span>1st Prize Winner • Innovex 2026</span>
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Project URLs */}
                  <div className="flex flex-wrap items-center gap-2.5 shrink-0 font-mono text-xs">
                    {project.demoLinks ? (
                      <DemoHoverMenu
                        demoLinks={project.demoLinks}
                        label="Live Demo"
                        variant="primary"
                        align="right"
                        direction="down"
                      />
                    ) : (
                      project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-black font-bold hover:bg-neutral-200 transition-colors shadow-sm"
                          title="Open live project deployment"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-200 hover:text-white hover:border-white transition-colors"
                        title="View GitHub repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Brief Explanation in Points */}
                <div className="mt-5 space-y-3">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-400 block">
                    Technical Overview & Implementation:
                  </span>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    {project.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="text-white font-bold font-mono mt-0.5 shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Verified Technical Boundary Note */}
                {project.verifiedNote && (
                  <div className="mt-5 p-3.5 rounded-xl bg-neutral-900 border border-neutral-700 text-xs font-mono text-neutral-300 flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <span className="font-bold text-white uppercase tracking-wider">Technical Note:</span>
                      <p className="text-neutral-300 leading-relaxed">{project.verifiedNote}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
