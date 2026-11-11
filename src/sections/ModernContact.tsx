import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, ExternalLink, Bot } from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';

interface ModernContactProps {
  onOpenAssistant: () => void;
}

export const ModernContact: React.FC<ModernContactProps> = ({ onOpenAssistant }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Engineering Opportunity / Internship Inquiry',
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
    <section id="contact" className="py-20 relative bg-navy-950/40 border-t border-navy-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-blue/10 border border-accent-blue/30 text-accent-cyan text-xs font-bold uppercase tracking-wider mb-3">
            <span>07 // Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Interested in discussing robotics prototypes, embedded systems, industrial automation roles, or ISRO internship opportunities? Reach out through any verified channel below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Availability Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-accent-blue/15 to-accent-cyan/10 border border-accent-cyan/30 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">
                  Available for Immediate Engineering Opportunities
                </div>
                <div className="text-[11px] text-slate-300">
                  Targeting ISRO, Robotics R&D Labs, and Industrial Automation Internships
                </div>
              </div>
            </div>

            {/* Direct Cards */}
            <div className="rounded-2xl bg-navy-900/60 border border-navy-800 p-6 space-y-4 backdrop-blur-sm">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider pb-2 border-b border-navy-800">
                Verified Contact Details
              </h3>

              <div className="space-y-3.5">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-navy-950/80 hover:bg-navy-800 border border-navy-800/80 hover:border-accent-cyan/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent-blue/15 flex items-center justify-center text-accent-cyan shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Email Address</div>
                    <div className="text-xs sm:text-sm font-semibold truncate group-hover:text-accent-cyan transition-colors">
                      {profileData.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-navy-950/80 hover:bg-navy-800 border border-navy-800/80 hover:border-accent-cyan/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-accent-blue/15 flex items-center justify-center text-accent-cyan shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Direct Phone</div>
                    <div className="text-xs sm:text-sm font-semibold group-hover:text-accent-cyan transition-colors">
                      {profileData.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={profileData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-navy-950/80 hover:bg-navy-800 border border-navy-800/80 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-400 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0 font-bold text-xs">
                    WA
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">WhatsApp Direct</div>
                    <div className="text-xs sm:text-sm font-semibold group-hover:text-emerald-400 transition-colors">
                      Chat on WhatsApp ({profileData.phone})
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-navy-950/80 border border-navy-800/80 text-slate-300">
                  <div className="w-9 h-9 rounded-lg bg-accent-blue/15 flex items-center justify-center text-accent-cyan shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {profileData.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-navy-800 flex items-center gap-3">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-lg bg-navy-950 hover:bg-navy-800 border border-navy-800 hover:border-accent-cyan/40 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-lg bg-navy-950 hover:bg-navy-800 border border-navy-800 hover:border-accent-cyan/40 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* AI Assistant Callout */}
            <div className="p-4 rounded-2xl bg-navy-900/40 border border-navy-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Bot className="w-5 h-5 text-accent-cyan" />
                <span className="text-xs text-slate-300 font-medium">Need immediate answers?</span>
              </div>
              <button
                onClick={onOpenAssistant}
                className="px-3 py-1.5 rounded-lg bg-accent-cyan/15 hover:bg-accent-cyan text-accent-cyan hover:text-navy-950 text-xs font-bold border border-accent-cyan/40 transition-all"
              >
                Launch VENKY AI
              </button>
            </div>
          </div>

          {/* Right Column: Inquiry Mail Form */}
          <div className="lg:col-span-7 rounded-2xl bg-navy-900/60 border border-navy-700/80 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">
              Send Direct Message
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              Complete the form below to open your preferred email client with pre-filled technical inquiry details directly to Venkatesh.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. K. Sharma (ISRO) or HR Team"
                    className="w-full bg-navy-950 border border-navy-700 focus:border-accent-cyan rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full bg-navy-950 border border-navy-700 focus:border-accent-cyan rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Subject line"
                  className="w-full bg-navy-950 border border-navy-700 focus:border-accent-cyan rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Message / Project Scope *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your inquiry, internship project scope, or opportunity..."
                  className="w-full bg-navy-950 border border-navy-700 focus:border-accent-cyan rounded-xl p-3.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-accent-blue to-accent-cyan hover:opacity-95 shadow-[0_0_20px_rgba(8,123,255,0.35)] transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Email Inquiry</span>
              </button>

              <div className="text-[11px] text-slate-400 text-center pt-2">
                Transmits directly to <span className="text-white font-medium">{profileData.email}</span>. No third-party spam brokers.
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
