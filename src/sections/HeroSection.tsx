import React from 'react';
import { Terminal, Download, ArrowRight, Mail, Phone, ChevronRight, User, GraduationCap, Briefcase, FolderGit2, Cpu, Trophy, Send } from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';
import { EngineerConsoleGraphic } from '../components/ui/EngineerConsoleGraphic';
import { CircularWaveform } from '../components/assistant/CircularWaveform';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenAssistant: () => void;
  isListening: boolean;
  isSpeaking: boolean;
  onToggleMic: () => void;
  onAskQuestion: (query: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenAssistant,
  isListening,
  isSpeaking,
  onToggleMic,
  onAskQuestion
}) => {
  const overviewCards = [
    {
      cmd: 'about --me',
      title: 'About Me',
      desc: 'My journey, interests, and what drives me as an engineer.',
      icon: <User className="w-4 h-4 text-[#00D4FF]" />,
      target: 'about'
    },
    {
      cmd: 'edu --details',
      title: 'Education',
      desc: 'BE in Robotics & Automation, Diploma in EEE, with academic scores.',
      icon: <GraduationCap className="w-4 h-4 text-[#00D4FF]" />,
      target: 'education'
    },
    {
      cmd: 'exp --internships',
      title: 'Experience',
      desc: 'Arrow Automation (4 Months), XNG Automation (4 Months).',
      icon: <Briefcase className="w-4 h-4 text-[#00D4FF]" />,
      target: 'experience'
    },
    {
      cmd: 'projects --list',
      title: 'Projects',
      desc: 'My major engineering projects with technical details, images and outcomes.',
      icon: <FolderGit2 className="w-4 h-4 text-[#00D4FF]" />,
      target: 'projects'
    },
    {
      cmd: 'skills --tech',
      title: 'Skills',
      desc: 'Core engineering, automation and tool expertise.',
      icon: <Cpu className="w-4 h-4 text-[#00D4FF]" />,
      target: 'skills'
    },
    {
      cmd: 'achieve --list',
      title: 'Achievements',
      desc: 'Project exhibitions, hackathons, workshops and awards.',
      icon: <Trophy className="w-4 h-4 text-[#00D4FF]" />,
      target: 'achievements'
    },
    {
      cmd: 'contact --me',
      title: 'Contact Me',
      desc: "Let's collaborate, discuss projects or opportunities.",
      icon: <Send className="w-4 h-4 text-[#00D4FF]" />,
      target: 'contact'
    }
  ];

  return (
    <section id="hero" className="relative pt-20 pb-12 px-4 sm:px-6 max-w-7xl mx-auto font-mono">
      {/* Full-width Kali Linux Background Image Layer */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
        style={{
          backgroundImage: "url('/images/kali-portfolio-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
      </div>

      {/* Top Main Command Cockpit Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (Terminal & Hero Titles) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Hero Terminal Card */}
          <div className="bg-[#101B2B] border border-[#182A42] hover:border-[#00D4FF44] rounded-lg shadow-2xl overflow-hidden transition-all duration-300">
            {/* Terminal Window Bar */}
            <div className="bg-[#14243A] px-4 py-2 border-b border-[#182A42] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-[#00D4FF] ml-2">venkatesh@portfolio:~$</span>
              </div>
              <span className="text-[10px] text-[#91A8BF]">BASH // TTY-1</span>
            </div>

            {/* Terminal Content */}
            <div className="p-4 space-y-2 text-xs sm:text-sm">
              <div className="text-[#00D4FF] flex items-center gap-2">
                <span className="text-[#91A8BF]">&gt;</span>
                <span className="font-semibold">sudo portfolio --about venkatesh</span>
              </div>
              <div className="space-y-1.5 pt-1 text-[#EAF5FF]">
                <div className="flex items-start gap-2">
                  <span className="text-[#00E599] font-bold">[+]</span>
                  <span className="text-[#91A8BF] w-16 shrink-0">Name</span>
                  <span className="text-[#91A8BF]">:</span>
                  <span className="text-[#EAF5FF] font-semibold">{profileData.name}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00E599] font-bold">[+]</span>
                  <span className="text-[#91A8BF] w-16 shrink-0">Role</span>
                  <span className="text-[#91A8BF]">:</span>
                  <span className="text-[#00D4FF]">{profileData.role}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00E599] font-bold">[+]</span>
                  <span className="text-[#91A8BF] w-16 shrink-0">Focus</span>
                  <span className="text-[#91A8BF]">:</span>
                  <span className="text-[#EAF5FF]">{(profileData.focus || []).join(' | ')}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00E599] font-bold">[+]</span>
                  <span className="text-[#91A8BF] w-16 shrink-0">Status</span>
                  <span className="text-[#91A8BF]">:</span>
                  <span className="text-[#00E599] flex items-center gap-1">
                    {profileData.status}
                    <span className="w-2 h-3.5 bg-[#00D4FF] inline-block cmd-cursor" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Big Title & Actions */}
          <div className="space-y-4 pt-2">
            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-[#EAF5FF] tracking-tight flex items-baseline">
                {profileData.name}
                <span className="text-[#00D4FF] cmd-cursor">_</span>
              </h1>
              <h2 className="text-lg sm:text-2xl font-bold text-[#00D4FF] mt-1 glow-text-cyan">
                {profileData.role}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#91A8BF] leading-relaxed max-w-xl">
              {profileData.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="px-5 py-2.5 bg-[#00D4FF] hover:bg-white text-black font-bold text-xs rounded transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)] flex items-center gap-2 group"
              >
                <span>&gt; View Projects</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href={profileData.resumeUrl}
                download="Venkatesh_CL_RESUME.pdf"
                className="px-5 py-2.5 bg-[#14243A] hover:bg-[#182A42] text-[#EAF5FF] border border-[#182A42] hover:border-[#00D4FF] font-semibold text-xs rounded transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#00D4FF]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-3 text-[#91A8BF]">
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#101B2B] hover:bg-[#14243A] hover:text-[#00D4FF] border border-[#182A42] rounded transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#101B2B] hover:bg-[#14243A] hover:text-[#00D4FF] border border-[#182A42] rounded transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 bg-[#101B2B] hover:bg-[#14243A] hover:text-[#00D4FF] border border-[#182A42] rounded transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${profileData.phone}`}
                className="p-2 bg-[#101B2B] hover:bg-[#14243A] hover:text-[#00D4FF] border border-[#182A42] rounded transition-all"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: "Sections Overview" Panel */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#101B2B] border border-[#182A42] rounded-lg p-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#182A42] mb-3">
              <h3 className="text-xs font-bold text-[#EAF5FF] tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                SECTIONS OVERVIEW
              </h3>
              <span className="text-[10px] text-[#91A8BF]">CLICK TO NAVIGATE</span>
            </div>

            <div className="space-y-2">
              {overviewCards.map((card, idx) => (
                <div
                  key={idx}
                  onClick={() => onNavigate(card.target)}
                  className="p-2.5 bg-[#0B0F1A] hover:bg-[#14243A] border border-[#182A42] hover:border-[#00D4FF] rounded transition-all cursor-pointer group flex items-start justify-between gap-3"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-[#00D4FF] font-semibold">&gt; {card.cmd}</span>
                      <span className="text-xs font-bold text-[#EAF5FF] group-hover:text-[#00D4FF] transition-colors">
                        {card.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#91A8BF] line-clamp-1">
                      {card.desc}
                    </p>
                  </div>
                  <div className="p-1.5 bg-[#101B2B] rounded border border-[#182A42] group-hover:border-[#00D4FF] shrink-0">
                    {card.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Middle Cockpit Banner: Engineer Silhouette + Interactive Voice Radial */}
      <div className="mt-8 bg-[#101B2B]/60 border border-[#182A42] rounded-xl p-6 relative overflow-hidden backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Kali Linux Center Graphic */}
          <div className="md:col-span-8 flex justify-center">
            <EngineerConsoleGraphic />
          </div>

          {/* Interactive Hero Voice Assistant Widget */}
          <div className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-[#0B0F1A]/80 border border-[#182A42] rounded-lg text-center space-y-3">
            <div className="relative">
              {/* Speech bubble indicator */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#14243A] border border-[#00D4FF44] px-2.5 py-0.5 rounded-full text-[10px] text-[#00D4FF] whitespace-nowrap shadow-md">
                Ask me about Venkatesh...
              </div>

              {/* Pulsing Circular Radar Waveform */}
              <CircularWaveform
                isListening={isListening}
                isSpeaking={isSpeaking}
                onClick={onToggleMic}
                size="md"
              />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-[#EAF5FF] block">
                INTERACTIVE VOICE ASSISTANT
              </span>
              <span className="text-[11px] text-[#91A8BF]">
                Click circle or mic to speak • Text fallback available
              </span>
            </div>

            {/* Quick Hero Voice Prompts */}
            <div className="flex flex-col gap-1.5 w-full pt-1">
              <button
                onClick={() => onAskQuestion('Tell me about Venkatesh')}
                className="text-left text-[11px] bg-[#101B2B] hover:bg-[#14243A] text-[#00D4FF] hover:text-white px-2.5 py-1.5 rounded border border-[#182A42] hover:border-[#00D4FF] transition-all flex items-center justify-between"
              >
                <span>&gt; "Tell me about Venkatesh"</span>
                <ChevronRight className="w-3 h-3 text-[#91A8BF]" />
              </button>
              <button
                onClick={() => onAskQuestion('Show me his projects')}
                className="text-left text-[11px] bg-[#101B2B] hover:bg-[#14243A] text-[#00D4FF] hover:text-white px-2.5 py-1.5 rounded border border-[#182A42] hover:border-[#00D4FF] transition-all flex items-center justify-between"
              >
                <span>&gt; "Show me his projects"</span>
                <ChevronRight className="w-3 h-3 text-[#91A8BF]" />
              </button>
              <button
                onClick={() => onAskQuestion('Explain his work experience')}
                className="text-left text-[11px] bg-[#101B2B] hover:bg-[#14243A] text-[#00D4FF] hover:text-white px-2.5 py-1.5 rounded border border-[#182A42] hover:border-[#00D4FF] transition-all flex items-center justify-between"
              >
                <span>&gt; "Explain his work experience"</span>
                <ChevronRight className="w-3 h-3 text-[#91A8BF]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
