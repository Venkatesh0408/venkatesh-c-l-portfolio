import React, { useState } from 'react';
import { Terminal, Volume2, VolumeX, Menu, X, Shield, Sparkles } from 'lucide-react';
import { profileData } from '../../data/profile';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onToggleAssistant: () => void;
  voiceEnabled: boolean;
  onToggleVoice: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onToggleAssistant,
  voiceEnabled,
  onToggleVoice,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', cmd: '--home' },
    { id: 'about', label: 'About', cmd: '--me' },
    { id: 'education', label: 'Education', cmd: '--details' },
    { id: 'experience', label: 'Experience', cmd: '--internships' },
    { id: 'projects', label: 'Projects', cmd: '--list' },
    { id: 'skills', label: 'Skills', cmd: '--tech' },
    { id: 'achievements', label: 'Achievements', cmd: '--list' },
    { id: 'contact', label: 'Contact', cmd: '--me' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0B0F1A]/90 backdrop-blur-md border-b border-[#182A42] font-mono select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand Terminal Header */}
        <div
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <span className="text-[#00D4FF] font-bold text-sm tracking-wider flex items-center gap-1 group-hover:glow-text-cyan transition-all">
            <span className="text-[#007BFF]">&gt;_</span> {profileData.name}
          </span>
          <span className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-[#101B2B] text-[#91A8BF] border border-[#182A42] rounded">
            ENG_CMD_CTR
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 text-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded transition-all flex items-center gap-1 ${
                  isActive
                    ? 'bg-[#14243A] text-[#00D4FF] border border-[#00D4FF44] font-semibold shadow-[0_0_10px_rgba(0,212,255,0.2)]'
                    : 'text-[#91A8BF] hover:text-[#EAF5FF] hover:bg-[#101B2B]'
                }`}
              >
                {isActive && <span className="text-[#00D4FF]">[</span>}
                {item.label}
                {isActive && <span className="text-[#00D4FF]">]</span>}
              </button>
            );
          })}
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2">
          {/* Audio Synthesizer Toggle */}
          <button
            onClick={onToggleVoice}
            className={`p-1.5 rounded text-xs flex items-center gap-1 border transition-all ${
              voiceEnabled
                ? 'bg-[#14243A] text-[#00D4FF] border-[#00D4FF44] hover:border-[#00D4FF]'
                : 'bg-[#101B2B] text-[#91A8BF] border-[#182A42]'
            }`}
            title={voiceEnabled ? "Voice Feedback Enabled (Click to Mute)" : "Voice Muted (Click to Enable)"}
          >
            {voiceEnabled ? <Volume2 className="w-3.5 h-3.5 text-[#00D4FF]" /> : <VolumeX className="w-3.5 h-3.5 text-[#91A8BF]" />}
            <span className="text-[11px] hidden sm:inline">{voiceEnabled ? 'VOICE ON' : 'MUTED'}</span>
          </button>

          {/* Assistant Trigger Button */}
          <button
            onClick={onToggleAssistant}
            className="px-3 py-1.5 bg-[#00D4FF18] hover:bg-[#00D4FF] text-[#00D4FF] hover:text-black font-semibold text-xs border border-[#00D4FF] rounded flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(0,212,255,0.2)]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">VENKY AI</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded text-[#91A8BF] hover:text-white bg-[#101B2B] border border-[#182A42]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F1A] border-b border-[#182A42] px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2 rounded text-xs flex items-center justify-between ${
                activeSection === item.id
                  ? 'bg-[#14243A] text-[#00D4FF] border border-[#00D4FF44]'
                  : 'text-[#91A8BF] hover:bg-[#101B2B] hover:text-white'
              }`}
            >
              <span>{item.label}</span>
              <span className="text-[10px] text-[#91A8BF]/60 font-mono">&gt; {item.cmd}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
