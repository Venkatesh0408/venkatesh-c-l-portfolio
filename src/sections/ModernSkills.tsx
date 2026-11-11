import React, { useState } from 'react';
import { Cpu, Zap, Code, ShieldCheck, CheckCircle2, Search, Sliders } from 'lucide-react';
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
        return 'bg-emerald-950/40 text-emerald-400 border-emerald-500/40';
      case 'Industrial Training':
        return 'bg-accent-blue/15 text-accent-cyan border-accent-blue/40';
      case 'Project-Level Exposure':
        return 'bg-purple-950/40 text-purple-300 border-purple-500/40';
      case 'Foundational Knowledge':
        return 'bg-navy-800 text-slate-300 border-navy-700';
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-navy-950/40 border-t border-navy-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-blue/10 border border-accent-blue/30 text-accent-cyan text-xs font-bold uppercase tracking-wider mb-3">
              <span>05 // Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Skills & Toolchain
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Organized across 8 specialized domains with practical application context and transparent proficiency distinctions.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by skill, sensor, tool..."
              className="w-full bg-navy-900 border border-navy-700 focus:border-accent-cyan/60 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* 8 Categories Navigation Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-accent-blue text-white shadow-[0_0_12px_rgba(8,123,255,0.3)]'
                : 'bg-navy-900/80 text-slate-300 hover:text-white border border-navy-800'
            }`}
          >
            All Competencies ({skillsData.length})
          </button>
          {skillCategories.map((cat) => {
            const count = skillsData.filter(s => s.category === cat).length;
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-accent-blue text-white shadow-[0_0_12px_rgba(8,123,255,0.3)]'
                    : 'bg-navy-900/80 text-slate-300 hover:text-white border border-navy-800'
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
              className="rounded-xl bg-navy-900/60 border border-navy-800 hover:border-accent-cyan/40 p-5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.08)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <span className="text-[10px] text-accent-cyan font-bold uppercase tracking-wider">
                    {skill.category}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${getLevelBadgeClass(skill.level)}`}>
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

              <div className="pt-3 border-t border-navy-800/80 text-[11px] text-slate-400">
                <span className="text-slate-500 font-medium">Applied In: </span>
                <span className="text-slate-200">{skill.appliedIn}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 bg-navy-900/30 rounded-2xl border border-navy-800">
            <p className="text-slate-400 text-sm">No skills found matching &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-3 px-4 py-1.5 rounded-lg text-xs font-semibold bg-accent-blue text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Transparency Legend */}
        <div className="mt-10 p-5 rounded-2xl bg-navy-900/40 border border-navy-800">
          <div className="text-xs font-bold text-white mb-2 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent-cyan" />
            <span>Honest Proficiency Classification</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs text-slate-300 pt-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span><strong>Practical Proficiency:</strong> Direct hardware bench work & firmware building.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan" />
              <span><strong>Industrial Training:</strong> Verified shop-floor experience at Arrow / XNG.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
              <span><strong>Project Exposure:</strong> Prototyped within academic / hackathon systems.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
              <span><strong>Foundational Knowledge:</strong> Structured engineering laboratory modules.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
