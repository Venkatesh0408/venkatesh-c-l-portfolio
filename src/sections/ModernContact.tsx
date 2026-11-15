import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Crosshair, Bot } from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';

interface ModernContactProps {
  onOpenAssistant: () => void;
}

export const ModernContact: React.FC<ModernContactProps> = ({ onOpenAssistant }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Engineering Opportunity / Robotics Internship Inquiry',
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
    <section id="contact" className="py-24 relative bg-space-950 border-t border-cyan-500/15">
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Crosshair className="w-3.5 h-3.5 text-cyan-400" />
            <span>07 // Direct Communication Channel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Initiate Contact
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Interested in discussing robotics prototypes, embedded systems, industrial automation roles, or ISRO internship opportunities? Reach out through any verified channel below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Availability Banner */}
            <div className="hud-panel hud-corner rounded-2xl p-5 border-cyan-500/30 flex items-center gap-3.5">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10B981] shrink-0" />
              <div>
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Available for Immediate Engineering Roles
                </div>
                <div className="text-[11px] text-slate-300 mt-0.5">
                  Targeting ISRO, Robotics R&D Labs, and Industrial Automation Internships.
                </div>
              </div>
            </div>

            {/* Direct Cards Container */}
            <div className="hud-panel hud-corner rounded-2xl p-6 sm:p-7 space-y-4">
              <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider pb-2 border-b border-cyan-500/20">
                VERIFIED_COMM_CHANNELS
              </h3>

              <div className="space-y-3">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-space-900 hover:bg-space-850 border border-space-800 hover:border-cyan-400/50 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">Email Address</div>
                    <div className="text-xs sm:text-sm font-semibold truncate group-hover:text-cyan-400 transition-colors">
                      {profileData.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-space-900 hover:bg-space-850 border border-space-800 hover:border-cyan-400/50 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">Direct Voice / Mobile</div>
                    <div className="text-xs sm:text-sm font-semibold group-hover:text-cyan-400 transition-colors font-mono">
                      {profileData.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={profileData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-space-900 hover:bg-space-850 border border-space-800 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0 font-bold text-xs font-mono">
                    WA
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">WhatsApp Direct</div>
                    <div className="text-xs sm:text-sm font-semibold group-hover:text-emerald-400 transition-colors font-mono">
                      Chat on WhatsApp ({profileData.phone})
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-space-900 border border-space-800 text-slate-300">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">Location Base</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {profileData.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-space-800 flex items-center gap-3">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-lg bg-space-900 hover:bg-space-850 border border-space-800 hover:border-cyan-400/50 text-slate-300 hover:text-white text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-lg bg-space-900 hover:bg-space-850 border border-space-800 hover:border-cyan-400/50 text-slate-300 hover:text-white text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* AI Assistant Callout */}
            <div className="hud-panel hud-corner rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Bot className="w-5 h-5 text-cyan-400" />
                <span className="text-xs text-slate-300 font-medium">Need immediate project answers?</span>
              </div>
              <button
                onClick={onOpenAssistant}
                className="px-3.5 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500 text-cyan-400 hover:text-black text-xs font-mono font-bold border border-cyan-400/40 transition-all cursor-pointer"
              >
                Launch VENKY AI
              </button>
            </div>
          </div>

          {/* Right Column: Inquiry Message Form */}
          <div className="lg:col-span-7 hud-panel hud-corner rounded-2xl p-7 sm:p-9 shadow-xl">
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">
              Transmit Engineering Inquiry
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              Complete the fields below to prepare a structured inquiry directly to Venkatesh.
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
                    placeholder="e.g. Dr. Sharma (ISRO) or HR Team"
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
                    placeholder="name@organization.com"
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
                  placeholder="Subject line"
                  className="w-full bg-space-950 border border-cyan-500/25 focus:border-cyan-400 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5">
                  Project Scope / Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your inquiry, internship project scope, or engineering requirements..."
                  className="w-full bg-space-950 border border-cyan-500/25 focus:border-cyan-400 rounded-xl p-3.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors resize-none font-mono"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-sm font-mono font-bold text-white bg-gradient-to-r from-electric-500 to-cyan-500 hover:opacity-95 shadow-[0_0_25px_rgba(8,123,255,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>TRANSMIT_EMAIL_INQUIRY</span>
              </button>

              <div className="text-[11px] text-slate-400 text-center pt-2 font-mono">
                Transmits directly to <span className="text-white font-semibold">{profileData.email}</span>. No third-party brokers.
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
