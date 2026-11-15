import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
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
    <footer className="bg-black border-t border-neutral-800 text-neutral-400 text-xs py-14 relative">
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Identity & summary */}
          <div className="md:col-span-2 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <span className="text-white font-black text-lg tracking-tight">
                {profileData.name}
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-neutral-900 text-white border border-neutral-700">
                ROBOTICS & AUTOMATION
              </span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-md">
              B.E. in Robotics and Automation from Rajarajeswari College of Engineering, Bengaluru.
              Focused on autonomous underwater vehicles, embedded firmware, industrial electrical cabinets, and sensor calibration.
            </p>
            <div className="flex items-center gap-2 text-neutral-300 text-xs font-mono font-medium pt-1">
              <ShieldCheck className="w-4 h-4 shrink-0 text-white" />
              <span>Verified academic & industrial records (1st Prize Innovex 2026)</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-mono font-bold text-xs uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              PORTFOLIO_INDEX
            </h4>
            <ul className="space-y-2 font-mono text-xs">
              {[
                { id: 'hero', label: '00 // Home' },
                { id: 'about', label: '01 // About' },
                { id: 'education', label: '02 // Education' },
                { id: 'experience', label: '03 // Experience' },
                { id: 'projects', label: '04 // Projects' },
                { id: 'skills', label: '05 // Skills' },
                { id: 'achievements', label: '06 // Achievements' },
                { id: 'languages', label: '07 // Languages' },
                { id: 'contact', label: '08 // Contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct channels */}
          <div>
            <h4 className="text-white font-mono font-bold text-xs uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              DIRECT_UPLINK
            </h4>
            <ul className="space-y-2.5 font-mono text-xs">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-white shrink-0" />
                <a href={`mailto:${profileData.email}`} className="hover:text-white transition-colors truncate">
                  {profileData.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-white shrink-0" />
                <a href={`tel:${profileData.phone}`} className="hover:text-white transition-colors">
                  {profileData.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
                <span>{profileData.location}</span>
              </li>
            </ul>

            <div className="flex items-center gap-2.5 mt-4">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:border-white transition-all"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:border-white transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              {profileData.whatsapp && (
                <a
                  href={profileData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:border-white transition-all"
                  title="WhatsApp Chat"
                >
                  <span className="text-[10px] font-bold font-mono">WA</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <p className="text-neutral-500 text-center sm:text-left">
            © {new Date().getFullYear()} {profileData.name} • Robotics & Automation Engineer Portfolio.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
