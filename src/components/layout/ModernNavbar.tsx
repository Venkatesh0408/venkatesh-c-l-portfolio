import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Bot, Eye } from 'lucide-react';
import { profileData } from '../../data/profile';

interface ModernNavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onToggleAssistant: () => void;
  onViewResume: () => void;
}

export const ModernNavbar: React.FC<ModernNavbarProps> = ({
  activeSection,
  onNavigate,
  onToggleAssistant,
  onViewResume,
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
    { id: 'languages', label: 'Languages', code: '07' },
    { id: 'contact', label: 'Contact', code: '08' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-neutral-800 shadow-[0_4px_30px_rgba(0,0,0,0.9)]'
          : 'bg-black/60 backdrop-blur-sm border-b border-neutral-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 text-left group transition-all shrink-0 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-white p-[1px]">
            <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
              <span className="text-white font-black text-sm tracking-tighter">V</span>
              <span className="text-neutral-400 font-bold text-xs">C</span>
            </div>
          </div>
          <div className="shrink-0">
            <div className="text-white font-extrabold text-sm tracking-tight group-hover:text-neutral-300 transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <span>{profileData.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </div>
            <div className="text-[10px] text-neutral-400 font-medium tracking-wide uppercase whitespace-nowrap font-mono">
              Robotics & Automation Engineer
            </div>
          </div>
        </button>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 font-mono">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all relative cursor-pointer ${
                  isActive
                    ? 'text-white bg-neutral-900 border border-neutral-700'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900/60'
                }`}
              >
                <span className="opacity-40 text-[9px] mr-1">{item.code}</span>
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-white shadow-[0_0_6px_#ffffff]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 font-mono">
          {/* Status Pill */}
          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>ONLINE</span>
          </div>

          {/* AI Assistant Trigger */}
          <button
            onClick={onToggleAssistant}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 hover:border-neutral-500 transition-all cursor-pointer"
            title="Open VENKY AI Assistant"
          >
            <Bot className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">VENKY AI</span>
          </button>

          {/* View Resume CTA (Opens Viewer Modal with Download inside) */}
          <button
            onClick={onViewResume}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-black bg-white hover:bg-neutral-200 transition-all shadow-sm cursor-pointer"
            title="View Resume and Download"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Resume</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-neutral-800 px-4 py-4 space-y-1.5 shadow-2xl font-mono">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                  isActive
                    ? 'text-white bg-neutral-900 border border-neutral-700'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900/60'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-neutral-400">{item.code}</span>
                  <span>{item.label}</span>
                </div>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />}
              </button>
            );
          })}
          <div className="pt-3 border-t border-neutral-800 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onToggleAssistant();
              }}
              className="flex-1 py-2 rounded-lg text-xs font-bold bg-neutral-900 text-white border border-neutral-700 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Bot className="w-3.5 h-3.5" />
              <span>VENKY AI</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onViewResume();
              }}
              className="flex-1 py-2 rounded-lg text-xs font-bold text-center text-black bg-white hover:bg-neutral-200 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
