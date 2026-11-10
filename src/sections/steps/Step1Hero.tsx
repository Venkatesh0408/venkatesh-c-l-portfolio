import React from 'react';
import { Terminal, Download, ArrowRight, Mail, Phone, Sparkles, User, ShieldCheck } from 'lucide-react';
import { profileData } from '../../data/profile';
import { KaliSnakeDragon } from '../../components/ui/KaliSnakeDragon';
import { TelemetryPoint } from '../../components/ui/TelemetryPoint';
import { CircularWaveform } from '../../components/assistant/CircularWaveform';
import { GithubIcon, LinkedinIcon } from '../../components/ui/Icons';

interface Step1HeroProps {
  onNextStep: () => void;
  onOpenAssistant: () => void;
  isListening: boolean;
  isSpeaking: boolean;
  onToggleMic: () => void;
}

export const Step1Hero: React.FC<Step1HeroProps> = ({
  onNextStep,
  onOpenAssistant,
  isListening,
  isSpeaking,
  onToggleMic,
}) => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between py-6 px-4 font-mono select-none">
      {/* Background Kali Linux Blue Snake Dragon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-35 pointer-events-none overflow-hidden z-0">
        <div className="w-[120%] max-w-4xl scale-110 sm:scale-100">
          <KaliSnakeDragon />
        </div>
      </div>

      {/* Main Cockpit Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full my-auto space-y-8">
        {/* Terminal Header */}
        <div className="bg-[#050B14]/90 border border-[#14243A] rounded-lg shadow-2xl overflow-hidden backdrop-blur-md">
          <div className="bg-[#0A1220] px-4 py-2 border-b border-[#14243A] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="text-xs text-[#00D4FF] ml-2">venkatesh@command-center:~$ whoami</span>
            </div>
            <span className="text-[10px] text-[#007BFF]">KALI_TERMINAL // STAGE_01</span>
          </div>

          <div className="p-4 sm:p-6 space-y-4">
            <div>
              <div className="text-[11px] text-[#00D4FF] mb-1">&gt; INITIALIZING AGENT IDENTITY...</div>
              <h1 className="text-3xl sm:text-6xl font-black text-white tracking-tight">
                {profileData.name}<span className="text-[#00D4FF] cmd-cursor">_</span>
              </h1>
              <h2 className="text-base sm:text-2xl font-bold text-[#00D4FF] mt-1 glow-text-cyan">
                {profileData.role}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#91A8BF] max-w-2xl leading-relaxed">
              {profileData.tagline}
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onNextStep}
                className="px-5 py-2.5 bg-[#00D4FF] hover:bg-white text-black font-bold text-xs rounded transition-all shadow-[0_0_20px_rgba(0,212,255,0.4)] flex items-center gap-2 cursor-pointer"
              >
                <span>&gt; Begin Guided Tour (Step 2)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={profileData.resumeUrl}
                download="Venkatesh_CL_RESUME.pdf"
                className="px-5 py-2.5 bg-[#0A1220] hover:bg-[#14243A] text-white border border-[#14243A] hover:border-[#00D4FF] font-semibold text-xs rounded transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#00D4FF]" />
                <span>Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Proximity Telemetry Points (Hover near to reveal details) */}
        <div className="space-y-3">
          <div className="text-[11px] text-[#00D4FF] font-bold flex items-center gap-1.5 px-1">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-ping" />
            TELEMETRY POINTS // HOVER OVER ANY POINT TO INSPECT DETAILS:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Point 1: Core Focus */}
            <TelemetryPoint
              id="focus"
              index={1}
              label="Engineering Focus"
              tag="DISCIPLINE"
            >
              <p className="text-xs text-[#EAF5FF] font-semibold mb-1">
                Robotics • Industrial Automation • Embedded Systems
              </p>
              <p className="text-[11px] text-[#91A8BF]">
                Bridging microcontroller firmware (ESP8266, ESP32-CAM) with mechanical prototyping, pneumatic valve actuation, and industrial control cabinets.
              </p>
            </TelemetryPoint>

            {/* Point 2: Academics */}
            <TelemetryPoint
              id="academics"
              index={2}
              label="Academic Standing"
              tag="RRCE & MEI"
            >
              <p className="text-xs text-[#EAF5FF] font-semibold mb-1">
                B.E. Robotics (CGPA 7.8) • Diploma in EEE (75.40%, CGPA 8.29)
              </p>
              <p className="text-[11px] text-[#91A8BF]">
                Rajarajeswari College of Engineering (final year) and MEI Polytechnic with practical electrical machinery and relay logic foundation.
              </p>
            </TelemetryPoint>

            {/* Point 3: Industry */}
            <TelemetryPoint
              id="experience"
              index={3}
              label="Industrial Placement"
              tag="8 MONTHS"
            >
              <p className="text-xs text-[#EAF5FF] font-semibold mb-1">
                Arrow Automation & XNG Automation
              </p>
              <p className="text-[11px] text-[#91A8BF]">
                Hands-on shop floor experience in laser engraving machinery calibration, automotive seat assembly testing lines, and DIN-rail cabinet wiring.
              </p>
            </TelemetryPoint>
          </div>
        </div>
      </div>

      {/* Bottom Floating Interactive Assistant Trigger & Social Bar */}
      <div className="relative z-10 max-w-5xl mx-auto w-full pt-4 border-t border-[#14243A] flex flex-wrap items-center justify-between gap-4 text-xs text-[#91A8BF]">
        <div className="flex items-center gap-3">
          <a href={profileData.github} target="_blank" rel="noreferrer" className="p-2 bg-[#050B14] hover:text-[#00D4FF] rounded border border-[#14243A]">
            <GithubIcon className="w-4 h-4" />
          </a>
          <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-[#050B14] hover:text-[#00D4FF] rounded border border-[#14243A]">
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a href={`mailto:${profileData.email}`} className="p-2 bg-[#050B14] hover:text-[#00D4FF] rounded border border-[#14243A]">
            <Mail className="w-4 h-4" />
          </a>
          <a href={`tel:${profileData.phone}`} className="p-2 bg-[#050B14] hover:text-[#00D4FF] rounded border border-[#14243A]">
            <Phone className="w-4 h-4" />
          </a>
        </div>

        {/* Circular Radar Mic Trigger */}
        <div className="flex items-center gap-3 bg-[#050B14] px-4 py-1.5 rounded-full border border-[#14243A]">
          <span className="text-[11px] text-[#00D4FF]">TALK TO VENKY AI:</span>
          <button
            onClick={onToggleMic}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-[#007BFF] text-white hover:bg-[#00D4FF] hover:text-black'
            }`}
          >
            {isListening ? "Listening..." : "Click to Speak"}
          </button>
        </div>
      </div>
    </div>
  );
};
