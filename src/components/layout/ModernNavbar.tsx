import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Bot, Radio, Compass } from 'lucide-react';
import { profileData } from '../../data/profile';

interface ModernNavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onToggleAssistant: () => void;
}

export const ModernNavbar: React.FC<ModernNavbarProps> = ({
  activeSection,
  onNavigate,
  onToggleAssistant,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', code: '00' },
    { id: 'about', label: 'About', code: '01' },
    { id: 'education', label: 'Education', code: '02' },
    { id: 'experience', label: 'Experience', code: '03' },
    { id: 'projects', label: 'Projects', code: '04' },
    { id: 'skills', label: 'Skills', code: '05' },
    { id: 'achievements', label: 'Achievements', code: '06' },
    { id: 'contact', label: 'Contact', code: '07' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-space-950/90 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-space-950/60 backdrop-blur-sm border-b border-cyan-500/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 text-left group transition-all shrink-0"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-electric-500 p-[1px] shadow-[0_0_15px_rgba(0,212,255,0.3)]">
            <div className="w-full h-full bg-space-900 rounded-[7px] flex items-center justify-center group-hover:bg-space-850 transition-colors">
              <span className="text-white font-black text-sm tracking-tighter">V</span>
              <span className="text-cyan-400 font-bold text-xs">C</span>
            </div>
          </div>
          <div className="shrink-0">
            <div className="text-white font-extrabold text-sm tracking-tight group-hover:text-cyan-400 transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <span>{profileData.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>
            <div className="text-[10px] text-slate-400 font-medium tracking-wide uppercase whitespace-nowrap">
              Robotics & Automation Engineer
            </div>
          </div>
        </button>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all relative ${
                  isActive
                    ? 'text-white bg-cyan-500/15 border border-cyan-400/50 shadow-[0_0_14px_rgba(0,212,255,0.25)]'
                    : 'text-slate-300 hover:text-white hover:bg-space-850/60'
                }`}
              >
                <span className="opacity-40 text-[9px] mr-1">{item.code}</span>
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-cyan-400 shadow-[0_0_8px_#00F0FF]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Telemetry Status Pill */}
          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-space-900/80 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>SYS_ONLINE</span>
          </div>

          {/* AI Voice Assistant Trigger */}
          <button
            onClick={onToggleAssistant}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-400/40 hover:border-cyan-400 shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all"
            title="Open VENKY AI Assistant"
          >
            <Bot className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">VENKY AI</span>
          </button>

          {/* Resume Download CTA */}
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-electric-500 to-cyan-500 hover:opacity-95 shadow-[0_0_18px_rgba(8,123,255,0.4)] transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-space-900 border border-space-700 hover:border-cyan-400/40 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-space-950/95 backdrop-blur-2xl border-b border-cyan-500/20 px-4 py-4 space-y-1.5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-all ${
                  isActive
                    ? 'text-white bg-cyan-500/20 border border-cyan-400/50 shadow-[0_0_10px_rgba(0,212,255,0.2)]'
                    : 'text-slate-300 hover:text-white hover:bg-space-850'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-cyan-400 font-mono">{item.code}</span>
                  <span>{item.label}</span>
                </div>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#00F0FF]" />}
              </button>
            );
          })}
          <div className="pt-3 border-t border-space-800 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onToggleAssistant();
              }}
              className="flex-1 py-2 rounded-lg text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-400/30 flex items-center justify-center gap-1.5"
            >
              <Bot className="w-3.5 h-3.5" />
              <span>VENKY AI</span>
            </button>
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 rounded-lg text-xs font-bold text-center text-white bg-gradient-to-r from-electric-500 to-cyan-500 shadow-md"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
