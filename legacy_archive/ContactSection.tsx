import React, { useState } from 'react';
import { Send, Phone, Mail, MessageSquare, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open default mail client cleanly without background side-effects
    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto font-mono scroll-mt-14">
      {/* Section Header */}
      <div className="flex items-center gap-2 pb-3 border-b border-[#182A42] mb-8">
        <span className="text-[#00D4FF]">&gt;</span>
        <h2 className="text-xl sm:text-2xl font-black text-[#EAF5FF] tracking-wider flex items-center gap-2">
          <Send className="w-5 h-5 text-[#00D4FF]" />
          COMMUNICATIONS_HUB // CONTACT_ME
        </h2>
        <span className="text-[10px] text-[#00D4FF] ml-auto border border-[#00D4FF44] px-2 py-0.5 rounded">
          [DIRECT ENCRYPTION READY]
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Links & Coordinates */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#101B2B] border border-[#182A42] rounded-lg p-5 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-[#EAF5FF] tracking-wider border-b border-[#182A42] pb-2">
              VERIFIED CHANNELS
            </h3>

            <div className="space-y-2.5 text-xs">
              {/* Phone */}
              <a
                href={`tel:${profileData.phone}`}
                className="p-3 bg-[#0B0F1A] hover:bg-[#14243A] border border-[#182A42] hover:border-[#00D4FF] rounded flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#101B2B] rounded text-[#00D4FF]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#91A8BF] block">Direct Telephone</span>
                    <span className="text-[#EAF5FF] font-semibold">{profileData.phone}</span>
                  </div>
                </div>
                <span className="text-[11px] text-[#00D4FF] group-hover:translate-x-1 transition-transform">»</span>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/918147134789`}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#0B0F1A] hover:bg-[#14243A] border border-[#182A42] hover:border-[#00D4FF] rounded flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#101B2B] rounded text-[#00E599]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#91A8BF] block">WhatsApp Chat</span>
                    <span className="text-[#EAF5FF] font-semibold">+91 8147134789</span>
                  </div>
                </div>
                <span className="text-[11px] text-[#00E599] group-hover:translate-x-1 transition-transform">»</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${profileData.email}`}
                className="p-3 bg-[#0B0F1A] hover:bg-[#14243A] border border-[#182A42] hover:border-[#00D4FF] rounded flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#101B2B] rounded text-[#007BFF]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#91A8BF] block">Electronic Mail</span>
                    <span className="text-[#EAF5FF] font-semibold">{profileData.email}</span>
                  </div>
                </div>
                <span className="text-[11px] text-[#007BFF] group-hover:translate-x-1 transition-transform">»</span>
              </a>

              {/* LinkedIn */}
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#0B0F1A] hover:bg-[#14243A] border border-[#182A42] hover:border-[#00D4FF] rounded flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#101B2B] rounded text-[#00D4FF]">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#91A8BF] block">LinkedIn Profile</span>
                    <span className="text-[#EAF5FF] font-semibold">venkatesh-venky</span>
                  </div>
                </div>
                <span className="text-[11px] text-[#00D4FF] group-hover:translate-x-1 transition-transform">»</span>
              </a>

              {/* GitHub */}
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#0B0F1A] hover:bg-[#14243A] border border-[#182A42] hover:border-[#00D4FF] rounded flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#101B2B] rounded text-[#EAF5FF]">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#91A8BF] block">GitHub Repositories</span>
                    <span className="text-[#EAF5FF] font-semibold">Venkatesh0408</span>
                  </div>
                </div>
                <span className="text-[11px] text-[#EAF5FF] group-hover:translate-x-1 transition-transform">»</span>
              </a>
            </div>
          </div>

          <div className="p-4 bg-[#101B2B] border border-[#182A42] rounded-lg text-xs text-[#91A8BF] space-y-1">
            <span className="text-[#00D4FF] font-semibold block flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> GEOGRAPHIC RADAR:
            </span>
            <p>{profileData.location}</p>
            <p className="text-[11px] text-[#91A8BF]/70">{profileData.gpsCoordinates}</p>
          </div>
        </div>

        {/* Right Column: Direct Dispatch Form */}
        <div className="lg:col-span-7 bg-[#101B2B] border border-[#182A42] rounded-lg p-6 shadow-xl space-y-4">
          <div className="pb-3 border-b border-[#182A42]">
            <h3 className="text-sm font-bold text-[#EAF5FF] tracking-wider">
              TRANSMIT DISPATCH MESSAGE
            </h3>
            <p className="text-xs text-[#91A8BF] mt-1">
              Composes an inquiry directly in your client application. No background unverified transmissions.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-[#0B0F1A] border border-[#00E599] rounded-lg text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-[#00E599] mx-auto" />
              <h4 className="text-sm font-bold text-[#EAF5FF]">DISPATCH READY IN MAIL CLIENT</h4>
              <p className="text-xs text-[#91A8BF]">
                Your email application has opened with the inquiry draft pre-populated. Thank you!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-3 px-4 py-1.5 bg-[#14243A] text-[#00D4FF] hover:bg-[#00D4FF] hover:text-black rounded text-xs transition-all"
              >
                Draft Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[#91A8BF] mb-1">Your Name / Organization</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Recruit / Collab Team"
                    className="w-full bg-[#0B0F1A] border border-[#182A42] focus:border-[#00D4FF] rounded p-2.5 text-[#EAF5FF] font-mono outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#91A8BF] mb-1">Your Contact Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full bg-[#0B0F1A] border border-[#182A42] focus:border-[#00D4FF] rounded p-2.5 text-[#EAF5FF] font-mono outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#91A8BF] mb-1">Subject / Project Intent</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Robotics Engineering Role / Collaboration"
                  className="w-full bg-[#0B0F1A] border border-[#182A42] focus:border-[#00D4FF] rounded p-2.5 text-[#EAF5FF] font-mono outline-none"
                />
              </div>

              <div>
                <label className="block text-[#91A8BF] mb-1">Message Body</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your inquiry, project scope, or opportunity..."
                  className="w-full bg-[#0B0F1A] border border-[#182A42] focus:border-[#00D4FF] rounded p-2.5 text-[#EAF5FF] font-mono outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[10px] text-[#91A8BF]">
                  * Launches standard mail client safely via mailto.
                </span>

                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#00D4FF] hover:bg-white text-black font-bold text-xs rounded transition-all shadow-[0_0_15px_rgba(0,212,255,0.3)] flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
