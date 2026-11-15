import React from 'react';
import { FileText, ArrowRight, Mail, Phone, ExternalLink, Bot, Award, CheckCircle2, Globe, Compass } from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';

interface ModernHeroProps {
  onExploreProjects: () => void;
  onContactMe: () => void;
  onOpenAssistant: () => void;
}

export const ModernHero: React.FC<ModernHeroProps> = ({
  onExploreProjects,
  onContactMe,
  onOpenAssistant,
}) => {
  return (
    <section id="hero" className="relative min-h-[680px] lg:min-h-[760px] flex items-center pt-24 pb-16 overflow-hidden bg-space-950">
      {/* Subtle Animated Technical Grid */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[400px] bg-electric-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Exact Identity from Resume */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Status Reticle Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-space-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00F0FF]" />
              <span>BE – ROBOTICS & AUTOMATION | INTERNSHIP APPLICANT</span>
            </div>

            {/* Name & Academic Institution */}
            <div className="space-y-1.5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                {profileData.name}
              </h1>
              <div className="text-lg sm:text-xl font-bold text-cyan-400 font-mono">
                {profileData.college}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-mono">
                {profileData.location} | {profileData.phone} | {profileData.email}
              </div>
            </div>

            {/* Career Objective - Word for Word from Resume */}
            <div className="p-4 rounded-2xl bg-space-900/80 border border-cyan-500/20 space-y-1.5">
              <div className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                CAREER OBJECTIVE
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                &ldquo;{profileData.careerObjective}&rdquo;
              </p>
            </div>

            {/* Functional Call To Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-electric-500 to-cyan-500 hover:opacity-95 shadow-[0_0_20px_rgba(8,123,255,0.4)] transition-all cursor-pointer font-mono"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <a
                href={profileData.resumeUrl}
                download="Venkatesh_CL_RESUME.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-space-900 hover:bg-space-850 border border-cyan-400/40 hover:border-cyan-400 shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all font-mono"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume PDF</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <button
                onClick={onContactMe}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer font-mono"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Resume Verified Links */}
            <div className="pt-3 border-t border-space-800 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
              <span className="font-bold text-slate-300">Resume Links:</span>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-space-900 border border-space-700 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-space-900 border border-space-700 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={profileData.projectDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-space-900 border border-space-700 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>Project Demo</span>
              </a>
            </div>
          </div>

          {/* Right Column: Verified Academic & Internship Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="hud-panel hud-corner rounded-3xl p-6 relative">
              <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20 font-mono text-xs">
                <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#10B981]" />
                  RESUME_VERIFIED_DATA
                </span>
                <span className="text-slate-400 text-[10px]">RRCE • VTU</span>
              </div>

              {/* Award Callout from Resume */}
              <div className="my-4 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-white">First Prize – Innovex 2026 (3 Nov 2026)</div>
                  <div className="text-slate-300 text-[11px] mt-0.5">
                    College-Level Project Exhibition, Rajarajeswari College of Engineering.
                  </div>
                </div>
              </div>

              {/* Verified Scores Grid from Resume */}
              <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
                <div className="p-3 rounded-xl bg-space-950 border border-space-800">
                  <div className="text-slate-400 text-[10px]">B.E. ROBOTICS & AUTO.</div>
                  <div className="text-xl font-black text-white mt-0.5">CGPA 7.8</div>
                  <div className="text-[10px] text-cyan-400 mt-0.5">Pursuing</div>
                </div>

                <div className="p-3 rounded-xl bg-space-950 border border-space-800">
                  <div className="text-slate-400 text-[10px]">DIPLOMA IN EEE</div>
                  <div className="text-xl font-black text-white mt-0.5">75.40%</div>
                  <div className="text-[10px] text-cyan-400 mt-0.5">CGPA 8.29 • Completed</div>
                </div>

                <div className="p-3 rounded-xl bg-space-950 border border-space-800">
                  <div className="text-slate-400 text-[10px]">SSLC</div>
                  <div className="text-xl font-black text-white mt-0.5">70.8%</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Completed</div>
                </div>

                <div className="p-3 rounded-xl bg-space-950 border border-space-800">
                  <div className="text-slate-400 text-[10px]">INTERNSHIPS</div>
                  <div className="text-base font-bold text-white mt-0.5">Arrow & XNG</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">4 Months + 3 Months</div>
                </div>
              </div>

              {/* Interactive AI Assistant Pill inside Hero */}
              <div className="mt-4 pt-3.5 border-t border-space-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-slate-300 font-medium">
                    Questions about my resume?
                  </span>
                </div>
                <button
                  onClick={onOpenAssistant}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500 text-cyan-400 hover:text-black font-bold text-xs font-mono border border-cyan-400/40 transition-all cursor-pointer"
                >
                  Ask VENKY AI
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-space-900/60 border border-space-800 text-[11px] font-mono text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% matched to uploaded Venkatesh C L Resume PDF.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
