import React, { useState } from 'react';
import { FileText, ArrowRight, Mail, Phone, ExternalLink, Bot, Award, Cpu, ShieldCheck, Waves, Compass, Activity, Radio } from 'lucide-react';
import { profileData } from '../data/profile';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';
import { KaliSnakeDragon } from '../components/ui/KaliSnakeDragon';

interface ModernHeroProps {
  onExploreProjects: () => void;
  onContactMe: () => void;
  onOpenAssistant: () => void;
}

export const ModernHero: React.FC<ModernHeroProps> = ({
  onExploreProjects,
  onContactMe,
  onOpenAssistant,
}) => {
  const [telemetryMode, setTelemetryMode] = useState<'submersible' | 'plc' | 'boat'>('submersible');

  return (
    <section id="hero" className="relative min-h-[680px] lg:min-h-[780px] flex items-center pt-28 pb-20 overflow-hidden bg-space-950">
      {/* 1. Subtle Animated Technical Grid */}
      <div className="absolute inset-0 tech-grid opacity-35 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-950/40 to-space-950 pointer-events-none" />

      {/* 2. Ambient Volumetric Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[650px] h-[500px] bg-electric-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* 3. Subtle Engineering Dragon Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.07] pointer-events-none text-cyan-400 select-none">
        <KaliSnakeDragon className="w-full h-full text-cyan-400" />
      </div>

      {/* 4. Technical Caliper Overlays */}
      <div className="absolute top-20 left-8 hidden xl:flex items-center gap-2 text-[10px] text-cyan-400/40 font-mono select-none">
        <Compass className="w-3.5 h-3.5 animate-spin-slow" />
        <span>LOC: {profileData.gpsCoordinates} // SYSTEM_READY</span>
      </div>
      <div className="absolute top-20 right-8 hidden xl:flex items-center gap-2 text-[10px] text-cyan-400/40 font-mono select-none">
        <span>RRCE_DEPT_ROBOTICS // BENGALURU_IN</span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Identity & Professional Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Reticle Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-space-900/80 border border-cyan-500/30 text-cyan-400 shadow-[0_0_20px_rgba(0,212,255,0.15)] text-xs font-semibold tracking-wide backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00F0FF]" />
              <span className="font-mono text-[11px] uppercase tracking-wider">
                ROBOTICS & EMBEDDED SYSTEMS LAB
              </span>
            </div>

            {/* Main Name & Identity */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                {profileData.name}
              </h1>
              <div className="text-lg sm:text-xl lg:text-2xl font-extrabold text-gradient-electric tracking-wide uppercase">
                {profileData.role}
              </div>
              <div className="text-sm sm:text-base font-semibold text-slate-300">
                {profileData.college}
              </div>
            </div>

            {/* Suggested Introduction */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              &ldquo;{profileData.introduction}&rdquo;
            </p>

            {/* Functional Call To Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* View Projects Button */}
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-electric-500 to-cyan-500 hover:opacity-95 shadow-[0_0_25px_rgba(8,123,255,0.4)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              {/* Download Resume Button */}
              <a
                href={profileData.resumeUrl}
                download="Venkatesh_CL_RESUME.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-space-900/90 hover:bg-space-850 border border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              {/* Contact Me Button */}
              <button
                onClick={onContactMe}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Direct Connect & Social Bar */}
            <div className="pt-4 border-t border-space-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="font-semibold text-slate-300 uppercase tracking-wider text-[11px] font-mono">
                Direct Channels:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-space-900 border border-space-700 hover:border-cyan-400/50 hover:text-white transition-all text-xs"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-space-900 border border-space-700 hover:border-cyan-400/50 hover:text-white transition-all text-xs"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-space-900 border border-space-700 hover:border-cyan-400/50 hover:text-white transition-all text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{profileData.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic Robotics Telemetry HUD */}
          <div className="lg:col-span-5 space-y-4">
            <div className="hud-panel hud-corner rounded-2xl p-6 relative">
              
              {/* Telemetry Header Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-cyan-500/20">
                <div className="flex items-center gap-2 font-mono">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10B981]" />
                  <span className="text-xs font-bold text-white tracking-wider">
                    TELEMETRY_HUD // ROBOTICS LAB
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                    RRCE • VTU
                  </span>
                </div>
              </div>

              {/* Award Recognition Card */}
              <div className="my-4 p-3.5 rounded-xl bg-gradient-to-r from-cyan-500/15 via-space-850 to-space-900 border border-cyan-400/30 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/40 shrink-0">
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>1st Prize Winner — Innovex 2026</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
                    Submersible Micro Robot Prototype for Confined Water Body & Turbidity Survey.
                  </p>
                </div>
              </div>

              {/* Dynamic Telemetry Display Mode */}
              <div className="p-3 rounded-xl bg-space-950/80 border border-space-800 text-xs font-mono space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-cyan-400">
                    <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                    <span>LIVE BENCH READOUT:</span>
                  </span>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setTelemetryMode('submersible')}
                      className={`px-1.5 py-0.5 rounded text-[9px] ${telemetryMode === 'submersible' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'}`}
                    >
                      ROBOT
                    </button>
                    <button
                      onClick={() => setTelemetryMode('plc')}
                      className={`px-1.5 py-0.5 rounded text-[9px] ${telemetryMode === 'plc' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'}`}
                    >
                      PLC
                    </button>
                    <button
                      onClick={() => setTelemetryMode('boat')}
                      className={`px-1.5 py-0.5 rounded text-[9px] ${telemetryMode === 'boat' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'}`}
                    >
                      BOAT
                    </button>
                  </div>
                </div>

                {telemetryMode === 'submersible' && (
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded bg-space-900 border border-space-800">
                      <div className="text-slate-500 text-[10px]">ESP32-CAM STREAM</div>
                      <div className="text-cyan-400 font-bold">MJPEG 20 FPS</div>
                    </div>
                    <div className="p-2 rounded bg-space-900 border border-space-800">
                      <div className="text-slate-500 text-[10px]">TURBIDITY SENSOR</div>
                      <div className="text-emerald-400 font-bold">4.18V [CALIBRATED]</div>
                    </div>
                    <div className="p-2 rounded bg-space-900 border border-space-800">
                      <div className="text-slate-500 text-[10px]">HULL SEAL RATING</div>
                      <div className="text-white font-bold">IP68 O-RING GLAND</div>
                    </div>
                    <div className="p-2 rounded bg-space-900 border border-space-800">
                      <div className="text-slate-500 text-[10px]">MCU PROTOCOL</div>
                      <div className="text-cyan-400 font-bold">ESP8266 WEBSOCKET</div>
                    </div>
                  </div>
                )}

                {telemetryMode === 'plc' && (
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded bg-space-900 border border-space-800">
                      <div className="text-slate-500 text-[10px]">INDUCTIVE SENSOR</div>
                      <div className="text-cyan-400 font-bold">FERROUS DETECT</div>
                    </div>
                    <div className="p-2 rounded bg-space-900 border border-space-800">
                      <div className="text-slate-500 text-[10px]">PNEUMATIC ACTUATOR</div>
                      <div className="text-emerald-400 font-bold">5/2 SOLENOID OK</div>
                    </div>
                    <div className="p-2 rounded bg-space-900 border border-space-800">
                      <div className="text-slate-500 text-[10px]">LOGIC CYCLES</div>
                      <div className="text-white font-bold">LADDER SEQUENCED</div>
                    </div>
                    <div className="p-2 rounded bg-space-900 border border-space-800">
                      <div className="text-slate-500 text-[10px]">CONTROL VOLTAGE</div>
                      <div className="text-cyan-400 font-bold">24V DC ISOLATED</div>
                    </div>
                  </div>
                )}

                {telemetryMode === 'boat' && (
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded bg-space-900 border border-space-800">
                      <div className="text-slate-500 text-[10px]">HULL DESIGN</div>
                      <div className="text-cyan-400 font-bold">CATAMARAN BUOYANT</div>
                    </div>
                    <div className="p-2 rounded bg-space-900 border border-space-800">
                      <div className="text-slate-500 text-[10px]">THRUST STEERING</div>
                      <div className="text-emerald-400 font-bold">DIFF-MIXED PWM</div>
                    </div>
                    <div className="p-2 rounded bg-space-900 border border-space-800">
                      <div className="text-slate-500 text-[10px]">NET RETRIEVAL</div>
                      <div className="text-white font-bold">SERVO LINK HOPPER</div>
                    </div>
                    <div className="p-2 rounded bg-space-900 border border-space-800">
                      <div className="text-slate-500 text-[10px]">RF LINK</div>
                      <div className="text-cyan-400 font-bold">2.4 GHz MULTI-CH</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-space-950/90 border border-space-800">
                  <div className="text-[10px] text-slate-400 font-mono uppercase">B.E. CGPA</div>
                  <div className="text-2xl font-black text-white mt-0.5 tracking-tight">
                    {profileData.stats.cgpaBe}
                  </div>
                  <div className="text-[10px] text-cyan-400 font-semibold mt-0.5">
                    Pursuing (Final Year)
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-space-950/90 border border-space-800">
                  <div className="text-[10px] text-slate-400 font-mono uppercase">Diploma in EEE</div>
                  <div className="text-2xl font-black text-white mt-0.5 tracking-tight">
                    {profileData.stats.diplomaScore}
                  </div>
                  <div className="text-[10px] text-cyan-400 font-semibold mt-0.5">
                    CGPA 8.29 • MEI Poly.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-space-950/90 border border-space-800">
                  <div className="text-[10px] text-slate-400 font-mono uppercase">Industrial Term</div>
                  <div className="text-2xl font-black text-white mt-0.5 tracking-tight">
                    {profileData.stats.internshipDuration}
                  </div>
                  <div className="text-[10px] text-slate-300 font-medium mt-0.5">
                    Arrow & XNG Automation
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-space-950/90 border border-space-800">
                  <div className="text-[10px] text-slate-400 font-mono uppercase">Hardware Systems</div>
                  <div className="text-2xl font-black text-white mt-0.5 tracking-tight">
                    4 Prototypes
                  </div>
                  <div className="text-[10px] text-slate-300 font-medium mt-0.5">
                    Tested Bench Rigs
                  </div>
                </div>
              </div>

              {/* Bottom Assistant Trigger */}
              <div className="mt-4 pt-3.5 border-t border-space-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-slate-300 font-medium">
                    Have questions about my projects?
                  </span>
                </div>
                <button
                  onClick={onOpenAssistant}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500 text-cyan-400 hover:text-black font-bold text-xs border border-cyan-400/40 transition-all cursor-pointer flex items-center gap-1"
                >
                  <span>Ask VENKY AI</span>
                </button>
              </div>
            </div>

            {/* Verification Credential Pill */}
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-space-900/60 border border-space-800 text-[11px] text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Verified credentials aligned with ISRO, robotics laboratories, and industrial automation standards.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
