import React from 'react';
import { Cpu, Wrench, Layers, Terminal, CheckCircle2 } from 'lucide-react';
import { skillsResumeData } from '../data/skills';

export const ModernSkills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Embedded & Electronics":
        return <Cpu className="w-5 h-5 text-white" />;
      case "Automation":
        return <Wrench className="w-5 h-5 text-white" />;
      case "Design & Fabrication":
        return <Layers className="w-5 h-5 text-white" />;
      default:
        return <Terminal className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-black border-t border-neutral-800">
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-700 text-white text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>05 // Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-2 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Core engineering competencies across embedded systems, industrial automation, CAD design, and software tools.
          </p>
        </div>

        {/* 4 Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsResumeData.map((group, idx) => (
            <div
              key={idx}
              className="hud-panel hud-corner rounded-3xl p-7 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300 bg-neutral-950 border border-neutral-850"
            >
              <div>
                <div className="flex items-center gap-3 pb-3 border-b border-neutral-800 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight font-mono">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="px-3.5 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 text-xs font-mono hover:border-white transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-neutral-850 flex items-center gap-1.5 text-neutral-400 text-xs font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>Verified Technical Competencies</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
