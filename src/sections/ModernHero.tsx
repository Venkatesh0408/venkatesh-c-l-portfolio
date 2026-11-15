import React from 'react';
import { FileText, ArrowRight, Mail, Phone, Bot, Award, CheckCircle2, Globe, Eye } from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';

interface ModernHeroProps {
  onExploreProjects: () => void;
  onContactMe: () => void;
  onOpenAssistant: () => void;
  onViewResume: () => void;
}

export const ModernHero: React.FC<ModernHeroProps> = ({
  onExploreProjects,
  onContactMe,
  onOpenAssistant,
  onViewResume,
}) => {
  return (
    <section id="hero" className="relative min-h-[660px] lg:min-h-[720px] flex items-center pt-24 pb-16 overflow-hidden bg-black">
      {/* Subtle Monochrome Technical Grid */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Identity & Objective */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Status Reticle Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-700 text-white text-xs font-mono font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>BE – ROBOTICS & AUTOMATION | INTERNSHIP APPLICANT</span>
            </div>

            {/* Name & Personal Details Only (No College Name under Name) */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                {profileData.name}
              </h1>
              <div className="text-base sm:text-lg font-bold text-neutral-200 font-mono tracking-tight">
                Robotics & Automation Engineer
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-neutral-400 font-mono">
                <span>{profileData.location}</span>
                <span className="text-neutral-600">•</span>
                <span>{profileData.phone}</span>
                <span className="text-neutral-600">•</span>
                <span>{profileData.email}</span>
              </div>
            </div>

            {/* Career Objective */}
            <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-1.5">
              <div className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
                CAREER OBJECTIVE
              </div>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                &ldquo;{profileData.careerObjective}&rdquo;
              </p>
            </div>

            {/* Functional Call To Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-black bg-white hover:bg-neutral-200 transition-all cursor-pointer font-mono shadow-sm"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              {/* View Resume Button (Opens Modal with Download Inside) */}
              <button
                onClick={onViewResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-white transition-all cursor-pointer font-mono"
              >
                <Eye className="w-4 h-4 text-white" />
                <span>View Resume</span>
              </button>

              <button
                onClick={onContactMe}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-neutral-300 hover:text-white bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all cursor-pointer font-mono"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Professional Links */}
            <div className="pt-3 border-t border-neutral-850 flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
              <span className="font-bold text-white">Links:</span>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-white hover:text-white transition-all"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-white hover:text-white transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={profileData.projectDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 hover:border-white hover:text-white transition-all"
              >
                <Globe className="w-3.5 h-3.5 text-white" />
                <span>Project Demo</span>
              </a>
            </div>
          </div>

          {/* Right Column: Academic & Credential Overview (Clearly defined one by one, no boxes) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="hud-panel hud-corner rounded-3xl p-6 relative border border-neutral-800 bg-neutral-950">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800 font-mono text-xs">
                <span className="text-white font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  ACADEMIC & CREDENTIAL PROFILE
                </span>
                <span className="text-neutral-400 text-[10px]">VERIFIED</span>
              </div>

              {/* Award Callout */}
              <div className="my-4 p-3 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-start gap-3">
                <Award className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-white">First Prize – Innovex 2026 (3 Nov 2026)</div>
                  <div className="text-neutral-400 text-[11px] mt-0.5">
                    College-Level Project Exhibition, Rajarajeswari College of Engineering.
                  </div>
                </div>
              </div>

              {/* Clearly Defined One by One (No 2x2 grid boxes) */}
              <div className="space-y-2.5 text-xs font-mono">
                <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/60 border border-neutral-850">
                  <div>
                    <div className="text-white font-bold">B.E. – Robotics & Automation</div>
                    <div className="text-[10px] text-neutral-400">Rajarajeswari College of Engineering • Pursuing</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-neutral-400 block uppercase">CGPA</span>
                    <span className="text-sm font-black text-white">7.8</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/60 border border-neutral-850">
                  <div>
                    <div className="text-white font-bold">Diploma – Electrical & Electronics</div>
                    <div className="text-[10px] text-neutral-400">MEI Polytechnic • Completed</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-neutral-400 block uppercase">Score / CGPA</span>
                    <span className="text-sm font-black text-white">75.40% | 8.29</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/60 border border-neutral-850">
                  <div>
                    <div className="text-white font-bold">SSLC</div>
                    <div className="text-[10px] text-neutral-400">Karnataka Secondary Education Board • Completed</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-neutral-400 block uppercase">Percentage</span>
                    <span className="text-sm font-black text-white">70.8%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/60 border border-neutral-850">
                  <div>
                    <div className="text-white font-bold">Internships</div>
                    <div className="text-[10px] text-neutral-400">Arrow Automation & XNG Automation</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-neutral-400 block uppercase">Duration</span>
                    <span className="text-xs font-bold text-white">4 Mos + 3 Mos</span>
                  </div>
                </div>
              </div>

              {/* Interactive AI Assistant Pill inside Hero */}
              <div className="mt-4 pt-3.5 border-t border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-white" />
                  <span className="text-xs text-neutral-300 font-medium">
                    Questions about my profile?
                  </span>
                </div>
                <button
                  onClick={onOpenAssistant}
                  className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-white text-white hover:text-black font-bold text-xs font-mono border border-neutral-700 transition-all cursor-pointer"
                >
                  Ask VENKY AI
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-950 border border-neutral-850 text-[11px] font-mono text-neutral-300">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
              <span>Verified Academic & Engineering Profile.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
