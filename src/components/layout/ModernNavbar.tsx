import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, Bot } from 'lucide-react';
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
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/85 backdrop-blur-md border-b border-navy-700/60 shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
          : 'bg-navy-950/60 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 text-left group transition-all"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue p-[1px] shadow-[0_0_15px_rgba(0,212,255,0.3)]">
            <div className="w-full h-full bg-navy-900 rounded-[7px] flex items-center justify-center group-hover:bg-navy-800 transition-colors">
              <span className="text-white font-extrabold text-sm tracking-tight">V</span>
              <span className="text-accent-cyan font-bold text-xs">C</span>
            </div>
          </div>
          <div>
            <div className="text-white font-bold text-sm tracking-tight group-hover:text-accent-cyan transition-colors flex items-center gap-1.5">
              <span>{profileData.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            </div>
            <div className="text-[11px] text-slate-400 font-medium">
              Robotics & Automation Engineer
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'text-white bg-accent-blue/15 border border-accent-cyan/40 shadow-[0_0_12px_rgba(0,212,255,0.2)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* AI Voice Assistant Pill */}
          <button
            onClick={onToggleAssistant}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-accent-cyan/10 hover:bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30 hover:border-accent-cyan shadow-[0_0_12px_rgba(0,212,255,0.15)] transition-all"
            title="Ask VENKY AI Voice Assistant"
          >
            <Bot className="w-3.5 h-3.5 text-accent-cyan" />
            <span>AI Assistant</span>
          </button>

          {/* Resume Download CTA */}
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-accent-blue to-accent-cyan hover:opacity-95 shadow-[0_0_16px_rgba(8,123,255,0.35)] transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-navy-900 border border-navy-700 hover:border-accent-cyan/40 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950/95 backdrop-blur-xl border-b border-navy-700/80 px-4 py-4 space-y-1 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-all ${
                  isActive
                    ? 'text-white bg-accent-blue/20 border border-accent-cyan/40'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_6px_#00d4ff]" />}
              </button>
            );
          })}
          <div className="pt-2 border-t border-navy-800 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onToggleAssistant();
              }}
              className="flex-1 py-2 rounded-lg text-xs font-semibold bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30 flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Voice Assistant</span>
            </button>
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 rounded-lg text-xs font-bold text-center text-white bg-accent-blue hover:bg-accent-blue/90"
            >
              View Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
