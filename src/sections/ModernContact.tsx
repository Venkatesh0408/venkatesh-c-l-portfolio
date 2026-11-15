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
    <section id="contact" className="py-20 relative bg-black border-t border-neutral-800">
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-700 text-white text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>07 // Contact & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Venkatesh C L
          </h2>
          <p className="mt-2 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Direct communication channels and engineering inquiry form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="hud-panel hud-corner rounded-3xl p-7 space-y-4 bg-neutral-950 border border-neutral-800">
              <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider pb-2 border-b border-neutral-800">
                DIRECT CONTACT
              </h3>

              <div className="space-y-3">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 hover:border-white text-neutral-300 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-white shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] text-neutral-400 font-mono font-bold uppercase">Email Address</div>
                    <div className="text-xs sm:text-sm font-semibold truncate group-hover:text-white transition-colors">
                      {profileData.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 hover:border-white text-neutral-300 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-white shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-400 font-mono font-bold uppercase">Phone Number</div>
                    <div className="text-xs sm:text-sm font-semibold group-hover:text-white transition-colors font-mono">
                      {profileData.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-300">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-white shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-400 font-mono font-bold uppercase">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {profileData.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Links */}
              <div className="pt-3 border-t border-neutral-800 space-y-2">
                <div className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider">
                  Professional Profiles
                </div>
                <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-white text-neutral-300 hover:text-white flex items-center gap-2 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-white" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-white text-neutral-300 hover:text-white flex items-center gap-2 transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-white" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={profileData.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-white text-neutral-300 hover:text-white flex items-center gap-2 transition-all col-span-2"
                  >
                    <Globe className="w-4 h-4 text-white" />
                    <span>Portfolio (vercel.app)</span>
                  </a>
                  <a
                    href={profileData.projectDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-white text-neutral-300 hover:text-white flex items-center gap-2 transition-all col-span-2"
                  >
                    <Globe className="w-4 h-4 text-white" />
                    <span>Project Demo (onrender.com)</span>
                  </a>
                </div>
              </div>

              {/* AI Assistant Hook */}
              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-white" />
                  <span className="text-xs text-neutral-400 font-mono">Ask VENKY AI</span>
                </div>
                <button
                  onClick={onOpenAssistant}
                  className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-white text-white hover:text-black font-bold text-xs font-mono border border-neutral-700 transition-all cursor-pointer"
                >
                  Open Assistant
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Email Form */}
          <div className="lg:col-span-7">
            <div className="hud-panel hud-corner rounded-3xl p-7 sm:p-8 bg-neutral-950 border border-neutral-800">
              <div className="pb-4 border-b border-neutral-800 mb-6">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Send Email Message
                </h3>
                <p className="text-xs text-neutral-400 mt-1 font-mono">
                  Send an inquiry or opportunity directly to <span className="text-white font-bold">{profileData.email}</span>.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-neutral-300 font-semibold uppercase tracking-wider block">
                      Your Name / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Name / Company"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-neutral-300 font-semibold uppercase tracking-wider block">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="user@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-neutral-300 font-semibold uppercase tracking-wider block">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-neutral-300 font-semibold uppercase tracking-wider block">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Your message or internship description..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Email</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
