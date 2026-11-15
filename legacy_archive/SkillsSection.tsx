import React, { useState } from 'react';
import { Cpu, Zap, Layers, Terminal, CheckCircle2 } from 'lucide-react';
import { skillsData, SkillItem } from '../data/skills';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Embedded & Hardware',
    'Industrial & Electrical',
    'CAD & Prototyping',
    'Software & Tools'
  ];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((s: SkillItem) => s.category === activeCategory);

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto font-mono scroll-mt-14">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-[#182A42] mb-8">
        <div className="flex items-center gap-2">
          <span className="text-[#00D4FF]">&gt;</span>
          <h2 className="text-xl sm:text-2xl font-black text-[#EAF5FF] tracking-wider flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#00D4FF]" />
            TECHNICAL_TOOLCHAIN // SKILLS
          </h2>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded transition-all ${
                activeCategory === cat
                  ? 'bg-[#00D4FF] text-black font-bold shadow-[0_0_10px_rgba(0,212,255,0.3)]'
                  : 'bg-[#101B2B] text-[#91A8BF] hover:text-[#EAF5FF] border border-[#182A42]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Notice Banner */}
      <div className="mb-6 p-3 bg-[#101B2B] border-l-2 border-[#00D4FF] text-xs text-[#91A8BF]">
        <strong className="text-[#00D4FF]">[NO ARBITRARY PERCENTAGES]</strong> Every skill listed represents physical lab builds, verified shop-floor wiring, or direct firmware implementations.
      </div>

      {/* Skills Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill: SkillItem, idx: number) => (
          <div
            key={idx}
            className="p-4 bg-[#101B2B] border border-[#182A42] hover:border-[#00D4FF] rounded-lg transition-all duration-200 flex flex-col justify-between space-y-3 group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <h3 className="text-sm font-bold text-[#EAF5FF] group-hover:text-[#00D4FF] transition-colors">
                  {skill.name}
                </h3>
                <span className="text-[9px] bg-[#0B0F1A] text-[#007BFF] border border-[#182A42] px-1.5 py-0.5 rounded shrink-0">
                  {skill.category}
                </span>
              </div>

              <p className="text-xs text-[#91A8BF] leading-relaxed">
                {skill.practicalUse}
              </p>
            </div>

            <div className="pt-2 border-t border-[#182A42]/60 text-[11px] text-[#00E599] flex items-start gap-1.5">
              <span className="font-bold">»</span>
              <span className="text-[#EAF5FF]/80"><strong>Applied in:</strong> {skill.appliedIn}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
