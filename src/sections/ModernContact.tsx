import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Globe, Bot } from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';

interface ModernContactProps {
  onOpenAssistant: () => void;
}

export const ModernContact: React.FC<ModernContactProps> = ({ onOpenAssistant }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship Opportunity / Engineering Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 relative bg-space-950 border-t border-cyan-500/15">
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>07 // Contact & Professional Links</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Venkatesh C L
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            All direct communication channels and links from the top of the resume.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links from Resume */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="hud-panel hud-corner rounded-3xl p-7 space-y-4">
              <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider pb-2 border-b border-cyan-500/20">
                VERIFIED RESUME CONTACTS
              </h3>

              <div className="space-y-3">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-space-900 hover:bg-space-850 border border-space-800 hover:border-cyan-400/50 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] text-slate-400 font-mono font-bold uppercase">Email Address</div>
                    <div className="text-xs sm:text-sm font-semibold truncate group-hover:text-cyan-400 transition-colors">
                      {profileData.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-space-900 hover:bg-space-850 border border-space-800 hover:border-cyan-400/50 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono font-bold uppercase">Phone Number</div>
                    <div className="text-xs sm:text-sm font-semibold group-hover:text-cyan-400 transition-colors font-mono">
                      {profileData.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-space-900 border border-space-800 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono font-bold uppercase">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {profileData.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Links from Resume */}
              <div className="pt-3 border-t border-space-800 space-y-2">
                <div className="text-[10px] text-slate-400 font-mono font-bold uppercase">Professional Links:</div>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-space-900 hover:bg-space-850 border border-space-800 hover:border-cyan-400/50 text-slate-300 hover:text-white flex items-center gap-2 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-space-900 hover:bg-space-850 border border-space-800 hover:border-cyan-400/50 text-slate-300 hover:text-white flex items-center gap-2 transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={profileData.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-space-900 hover:bg-space-850 border border-space-800 hover:border-cyan-400/50 text-slate-300 hover:text-white flex items-center gap-2 transition-all col-span-2"
                  >
                    <Globe className="w-4 h-4 text-cyan-400" />
                    <span>Portfolio (vercel.app)</span>
                  </a>
                  <a
                    href={profileData.projectDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-space-900 hover:bg-space-850 border border-space-800 hover:border-cyan-400/50 text-slate-300 hover:text-white flex items-center gap-2 transition-all col-span-2"
                  >
                    <Globe className="w-4 h-4 text-cyan-400" />
                    <span>Project Demo (onrender.com)</span>
                  </a>
                </div>
              </div>

            </div>

            {/* AI Assistant Callout */}
            <div className="hud-panel hud-corner rounded-3xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-cyan-400" />
                <span className="text-xs text-slate-300 font-medium font-mono">Ask VENKY AI</span>
              </div>
              <button
                onClick={onOpenAssistant}
                className="px-3.5 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500 text-cyan-400 hover:text-black text-xs font-mono font-bold border border-cyan-400/40 transition-all cursor-pointer"
              >
                Open Assistant
              </button>
            </div>
          </div>

          {/* Right Column: Direct Mail Form */}
          <div className="lg:col-span-7 hud-panel hud-corner rounded-3xl p-7 sm:p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">
              Send Email Message
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              Send an inquiry or opportunity directly to <strong className="text-white">{profileData.email}</strong>.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5">
                    Your Name / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full bg-space-950 border border-cyan-500/25 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@email.com"
                    className="w-full bg-space-950 border border-cyan-500/25 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Subject"
                  className="w-full bg-space-950 border border-cyan-500/25 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message or internship description..."
                  className="w-full bg-space-950 border border-cyan-500/25 focus:border-cyan-400 rounded-xl p-3.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors resize-none font-mono"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-sm font-mono font-bold text-white bg-gradient-to-r from-electric-500 to-cyan-500 hover:opacity-95 shadow-[0_0_20px_rgba(8,123,255,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Email</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
