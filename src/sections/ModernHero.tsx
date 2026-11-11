import React from 'react';
import { FileText, ArrowRight, Mail, Phone, ExternalLink, Bot, CheckCircle, Award } from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';
import { KaliSnakeDragon } from '../components/ui/KaliSnakeDragon';

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
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle grid and radial glow background */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:32px_32px] opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-accent-blue/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Kali Dragon Watermark in the background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[650px] h-[650px] opacity-10 pointer-events-none text-accent-cyan select-none">
        <KaliSnakeDragon className="w-full h-full text-accent-cyan" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Identity & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Professional Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/80 border border-accent-cyan/30 text-accent-cyan shadow-[0_0_15px_rgba(0,212,255,0.15)] text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span>ROBOTICS & EMBEDDED SYSTEMS ENGINEER</span>
            </div>

            {/* Primary Name & Degree Headings */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                {profileData.name}
              </h1>
              <div className="text-lg sm:text-xl font-bold text-accent-cyan tracking-wide">
                {profileData.degree}
              </div>
              <div className="text-sm sm:text-base font-semibold text-slate-300">
                {profileData.college}
              </div>
            </div>

            {/* Verified Short Introduction */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              {profileData.introduction}
            </p>

            {/* Functional Call To Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* View Resume Button */}
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-accent-blue to-accent-cyan hover:opacity-95 shadow-[0_0_20px_rgba(8,123,255,0.35)] transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              {/* Explore Projects Button */}
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-navy-900/90 hover:bg-navy-800 border border-navy-700 hover:border-accent-cyan/60 shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-accent-cyan" />
              </button>

              {/* Contact Me Button */}
              <button
                onClick={onContactMe}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
              >
                <Mail className="w-4 h-4 text-accent-cyan" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social & Contact Channels */}
            <div className="pt-4 border-t border-navy-800/80 flex flex-wrap items-center gap-5 text-xs text-slate-400">
              <span className="font-semibold text-slate-300 uppercase tracking-wider text-[11px]">
                Connect Directly:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 hover:border-accent-cyan/50 hover:text-white transition-all"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 hover:border-accent-cyan/50 hover:text-white transition-all"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 hover:border-accent-cyan/50 hover:text-white transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>{profileData.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hardware Telemetry & Verified Credentials Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl bg-navy-900/70 border border-accent-cyan/30 p-6 backdrop-blur-xl shadow-[0_0_35px_rgba(0,212,255,0.12)]">
              
              {/* Top Card Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-navy-700/60">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-white tracking-wide">
                    ENGINEERING PROFILE
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-accent-blue/20 text-accent-cyan border border-accent-blue/40">
                  RRCE • VTU
                </span>
              </div>

              {/* Award Callout */}
              <div className="my-4 p-3.5 rounded-xl bg-gradient-to-r from-accent-blue/15 to-accent-cyan/10 border border-accent-cyan/30 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent-blue/30 text-accent-cyan shrink-0">
                  <Award className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>1st Prize Winner — Innovex 2026</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    Submersible Micro Robot for Confined Water Body & Turbidity Inspection
                  </p>
                </div>
              </div>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-navy-950/80 border border-navy-800">
                  <div className="text-[11px] text-slate-400 font-medium">B.E. CGPA</div>
                  <div className="text-2xl font-black text-white mt-0.5 tracking-tight">
                    {profileData.stats.cgpaBe}
                  </div>
                  <div className="text-[10px] text-accent-cyan font-semibold mt-0.5">
                    Pursuing (Final Year)
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-navy-950/80 border border-navy-800">
                  <div className="text-[11px] text-slate-400 font-medium">Diploma in EEE</div>
                  <div className="text-2xl font-black text-white mt-0.5 tracking-tight">
                    {profileData.stats.diplomaScore}
                  </div>
                  <div className="text-[10px] text-accent-cyan font-semibold mt-0.5">
                    CGPA 8.29 • MEI Poly.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-navy-950/80 border border-navy-800">
                  <div className="text-[11px] text-slate-400 font-medium">Industrial Training</div>
                  <div className="text-2xl font-black text-white mt-0.5 tracking-tight">
                    {profileData.stats.internshipDuration}
                  </div>
                  <div className="text-[10px] text-slate-300 font-medium mt-0.5">
                    Arrow & XNG Automation
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-navy-950/80 border border-navy-800">
                  <div className="text-[11px] text-slate-400 font-medium">Engineered Systems</div>
                  <div className="text-2xl font-black text-white mt-0.5 tracking-tight">
                    4 Projects
                  </div>
                  <div className="text-[10px] text-slate-300 font-medium mt-0.5">
                    Hardware Prototypes
                  </div>
                </div>
              </div>

              {/* Interactive AI Assistant Pill inside Hero */}
              <div className="mt-4 pt-4 border-t border-navy-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-accent-cyan" />
                  <span className="text-xs text-slate-300 font-medium">
                    Have questions about my projects?
                  </span>
                </div>
                <button
                  onClick={onOpenAssistant}
                  className="px-3 py-1.5 rounded-lg bg-accent-cyan/15 hover:bg-accent-cyan text-accent-cyan hover:text-navy-950 font-bold text-xs border border-accent-cyan/40 transition-all flex items-center gap-1"
                >
                  <span>Ask VENKY AI</span>
                </button>
              </div>
            </div>

            {/* Credential Verification Banner */}
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-navy-950/60 border border-navy-800 text-[11px] text-slate-400">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Verified credentials suitable for ISRO, robotics & industrial automation roles.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
