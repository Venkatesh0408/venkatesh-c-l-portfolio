import React, { useState } from 'react';
import { Search, ShieldCheck, Crosshair, CheckCircle2 } from 'lucide-react';
import { skillsData, skillCategories, SkillCategory, SkillItem } from '../data/skills';

export const ModernSkills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.practicalUse.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.appliedIn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getLevelBadgeClass = (level: SkillItem['level']) => {
    switch (level) {
      case 'Practical Proficiency':
        return 'bg-emerald-950/50 text-emerald-300 border-emerald-500/40';
      case 'Industrial Training':
        return 'bg-cyan-500/15 text-cyan-300 border-cyan-400/40';
      case 'Project-Level Exposure':
        return 'bg-purple-950/40 text-purple-300 border-purple-500/40';
      case 'Foundational Knowledge':
        return 'bg-space-850 text-slate-300 border-space-700';
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-space-950 border-t border-cyan-500/15">
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Crosshair className="w-3.5 h-3.5 text-cyan-400" />
              <span>05 // Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Engineering Tools
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Organized into 5 professional robotics domains with verified practical use and transparent proficiency ratings.
            </p>
          </div>

          {/* Search Filter Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools, hardware, sensors..."
              className="w-full bg-space-900 border border-cyan-500/25 focus:border-cyan-400 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors font-mono"
            />
          </div>
        </div>

        {/* 5 Professional Categories Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-electric-500 to-cyan-500 text-white shadow-[0_0_15px_rgba(8,123,255,0.35)]'
                : 'bg-space-900/80 text-slate-300 hover:text-white border border-space-800'
            }`}
          >
            All Tools ({skillsData.length})
          </button>
          {skillCategories.map((cat) => {
            const count = skillsData.filter(s => s.category === cat).length;
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-electric-500 to-cyan-500 text-white shadow-[0_0_15px_rgba(8,123,255,0.35)]'
                    : 'bg-space-900/80 text-slate-300 hover:text-white border border-space-800'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="hud-panel hud-corner rounded-2xl p-5 hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <span className="text-[10px] text-cyan-400 font-mono font-bold uppercase tracking-wider">
                    {skill.category}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${getLevelBadgeClass(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight mb-2">
                  {skill.name}
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed mb-3">
                  {skill.practicalUse}
                </p>
              </div>

              <div className="pt-3 border-t border-space-800 text-[11px] font-mono text-slate-400">
                <span className="text-slate-500 font-medium">Applied In: </span>
                <span className="text-slate-200">{skill.appliedIn}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 bg-space-900/40 rounded-2xl border border-space-800">
            <p className="text-slate-400 text-sm font-mono">No technical skills matching &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-3 px-4 py-1.5 rounded-lg text-xs font-mono font-semibold bg-cyan-500 text-black cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Transparency Legend */}
        <div className="mt-12 p-5 rounded-2xl bg-space-900/60 border border-space-800">
          <div className="text-xs font-mono font-bold text-white mb-2.5 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Honest Proficiency Distinctions (No Inflated Bars)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs text-slate-300 pt-1 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span><strong>Practical Proficiency:</strong> Hands-on prototype bench testing & firmware build.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span><strong>Industrial Training:</strong> Verified factory internship at Arrow / XNG.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
              <span><strong>Project Exposure:</strong> Integrated in academic hardware prototypes.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
              <span><strong>Foundational Knowledge:</strong> Structured engineering lab coursework.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
