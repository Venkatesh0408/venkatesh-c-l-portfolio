import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, CheckCircle2 } from 'lucide-react';
import { profileData } from '../../data/profile';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

interface ModernFooterProps {
  onNavigate: (sectionId: string) => void;
}

export const ModernFooter: React.FC<ModernFooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-navy-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Identity & summary */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-white font-extrabold text-base tracking-tight">
                {profileData.name}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30">
                Robotics & Automation
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              B.E. in Robotics and Automation from Rajarajeswari College of Engineering, Bengaluru.
              Focused on embedded hardware, industrial automation, sensor systems, and electro-pneumatic integration.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium pt-1">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>Verified academic & internship records (1st Prize Innovex 2026)</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Portfolio Index
            </h4>
            <ul className="space-y-2">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'education', label: 'Education' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'achievements', label: 'Achievements' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-accent-cyan transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact channels */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Direct Contact
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                <a href={`mailto:${profileData.email}`} className="hover:text-white transition-colors truncate">
                  {profileData.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                <a href={`tel:${profileData.phone}`} className="hover:text-white transition-colors">
                  {profileData.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                <span>{profileData.location}</span>
              </li>
            </ul>

            <div className="flex items-center gap-2.5 mt-4">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-900 border border-navy-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-accent-cyan/50 hover:bg-navy-800 transition-all"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-900 border border-navy-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-accent-cyan/50 hover:bg-navy-800 transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-navy-900 border border-navy-700 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-navy-800 transition-all"
                title="WhatsApp Chat"
              >
                <span className="text-xs font-bold">WA</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[11px] text-center sm:text-left">
            © {new Date().getFullYear()} {profileData.name} • Engineering Portfolio. Designed for ISRO, Robotics, and Industrial Automation applications.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-navy-900 hover:bg-navy-800 border border-navy-700 text-slate-300 hover:text-white text-[11px] font-medium transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent-cyan" />
          </button>
        </div>
      </div>
    </footer>
  );
};
