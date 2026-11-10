import React from 'react';
import { Send, Phone, Mail, MessageSquare, ArrowLeft, RotateCcw, MapPin } from 'lucide-react';
import { profileData } from '../../data/profile';
import { TelemetryPoint } from '../../components/ui/TelemetryPoint';
import { KaliSnakeDragon } from '../../components/ui/KaliSnakeDragon';
import { GithubIcon, LinkedinIcon } from '../../components/ui/Icons';

interface Step7ContactProps {
  onPrevStep: () => void;
  onRestartTour: () => void;
}

export const Step7Contact: React.FC<Step7ContactProps> = ({ onPrevStep, onRestartTour }) => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between py-8 px-4 font-mono select-none">
      {/* Background Kali Snake Dragon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none overflow-hidden z-0">
        <div className="w-[110%] max-w-4xl">
          <KaliSnakeDragon />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full my-auto space-y-6">
        {/* Step Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#14243A]">
          <div>
            <span className="text-[10px] text-[#007BFF] font-bold block">&gt; PIPELINE STAGE // 07 (FINAL)</span>
            <h2 className="text-xl sm:text-3xl font-black text-white tracking-wide flex items-center gap-2">
              <Send className="w-6 h-6 text-[#00D4FF]" />
              COMMUNICATIONS HUB
            </h2>
          </div>
          <span className="text-[10px] text-[#00E599] border border-[#00E59944] px-2.5 py-1 rounded">
            [READY FOR COLLABORATION]
          </span>
        </div>

        <p className="text-xs text-[#91A8BF]">
          Hover or tap on any transmission coordinate point to reveal direct contact channels and dispatch actions.
        </p>

        {/* 5 Communications Points */}
        <div className="space-y-4 pt-2">
          {/* Point 1: Phone */}
          <TelemetryPoint
            id="phone"
            index={1}
            label="Direct Telephone Line"
            tag="VOICE"
            isOpenDefault={true}
            onInspect={() => window.location.href = `tel:${profileData.phone}`}
            inspectLabel="Place Call"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-[#EAF5FF]">{profileData.phone}</span>
              <span className="text-[10px] text-[#91A8BF]">IST (UTC+05:30)</span>
            </div>
            <p className="text-[11px] text-[#91A8BF]">
              Open for discussions regarding robotics engineering, embedded systems internships, and automation roles.
            </p>
          </TelemetryPoint>

          {/* Point 2: WhatsApp */}
          <TelemetryPoint
            id="whatsapp"
            index={2}
            label="WhatsApp Instant Messaging"
            tag="CHAT"
            onInspect={() => window.open(`https://wa.me/918147134789`, '_blank')}
            inspectLabel="Launch WhatsApp Chat"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-[#00E599]">+91 8147134789</span>
              <span className="text-[10px] text-[#91A8BF]">Encrypted</span>
            </div>
            <p className="text-[11px] text-[#91A8BF]">
              Quickest channel for rapid inquiries, scheduling interviews, and sharing project materials.
            </p>
          </TelemetryPoint>

          {/* Point 3: Email */}
          <TelemetryPoint
            id="email"
            index={3}
            label="Electronic Mail Dispatch"
            tag="MAIL"
            onInspect={() => window.location.href = `mailto:${profileData.email}?subject=Engineering%20Inquiry`}
            inspectLabel="Compose Email"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-[#007BFF]">{profileData.email}</span>
              <span className="text-[10px] text-[#91A8BF]">Verified Primary</span>
            </div>
            <p className="text-[11px] text-[#91A8BF]">
              Send formal job descriptions, collaboration proposals, or documentation requests.
            </p>
          </TelemetryPoint>

          {/* Point 4: LinkedIn */}
          <TelemetryPoint
            id="linkedin"
            index={4}
            label="Professional LinkedIn Profile"
            tag="NETWORK"
            onInspect={() => window.open(profileData.linkedin, '_blank')}
            inspectLabel="Visit LinkedIn"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-[#00D4FF]">venkatesh-venky</span>
              <span className="text-[10px] text-[#91A8BF]">Professional Network</span>
            </div>
            <p className="text-[11px] text-[#91A8BF]">
              Connect with Venkatesh, view endorsements, and follow engineering updates.
            </p>
          </TelemetryPoint>

          {/* Point 5: GitHub */}
          <TelemetryPoint
            id="github"
            index={5}
            label="GitHub Engineering Repositories"
            tag="CODE"
            onInspect={() => window.open(profileData.github, '_blank')}
            inspectLabel="Open GitHub"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-[#EAF5FF]">Venkatesh0408</span>
              <span className="text-[10px] text-[#91A8BF]">Source Control</span>
            </div>
            <p className="text-[11px] text-[#91A8BF]">
              Explore source code for embedded firmware, microcontroller drivers, and automation projects.
            </p>
          </TelemetryPoint>
        </div>

        {/* Navigation Step Actions */}
        <div className="pt-6 flex items-center justify-between">
          <button
            onClick={onPrevStep}
            className="px-4 py-2 bg-[#0A1220] hover:bg-[#14243A] text-[#00D4FF] border border-[#14243A] hover:border-[#00D4FF] rounded text-xs flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Prev: Honors</span>
          </button>

          <button
            onClick={onRestartTour}
            className="px-5 py-2 bg-[#00D4FF] hover:bg-white text-black font-bold rounded text-xs flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(0,212,255,0.3)] cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Restart Tour (Step 1)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
