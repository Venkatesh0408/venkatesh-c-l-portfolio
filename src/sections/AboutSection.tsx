import React from 'react';
import { User, Target, Wrench, ShieldCheck, MapPin, Compass } from 'lucide-react';
import { profileData } from '../data/profile';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto font-mono scroll-mt-14">
      {/* Section Header */}
      <div className="flex items-center gap-2 pb-3 border-b border-[#182A42] mb-8">
        <span className="text-[#00D4FF]">&gt;</span>
        <h2 className="text-xl sm:text-2xl font-black text-[#EAF5FF] tracking-wider flex items-center gap-2">
          <User className="w-5 h-5 text-[#00D4FF]" />
          ABOUT_ME // PROFESSIONAL_IDENTITY
        </h2>
        <span className="text-[10px] text-[#00E599] ml-auto border border-[#00E59944] px-2 py-0.5 rounded">
          [VERIFIED DOSSIER]
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Summary & Engineering Philosophy */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-[#101B2B] border border-[#182A42] rounded-lg p-6 space-y-4 shadow-xl">
            <h3 className="text-base font-bold text-[#00D4FF] flex items-center gap-2">
              <Compass className="w-4 h-4" />
              ENGINEERING APPROACH & PROFILE
            </h3>
            <p className="text-xs sm:text-sm text-[#EAF5FF] leading-relaxed">
              I am a final-year <strong className="text-[#00D4FF]">Robotics & Automation Engineering</strong> student at Rajarajeswari College of Engineering (RRCE), Bengaluru. With a strong electrical and electronics foundation from my Polytechnic Diploma, my engineering focus bridges mechanical fabrication, embedded microcontroller firmware, and industrial automation.
            </p>
            <p className="text-xs sm:text-sm text-[#91A8BF] leading-relaxed">
              I prioritize practical, test-driven engineering over purely hypothetical simulations. Whether fabricating watertight seals for a submersible inspection vehicle or wiring DIN-rail control panels on the manufacturing floor, my goal is to design systems that are durable, maintainable, and grounded in real-world feasibility.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-[#0B0F1A] border border-[#182A42] rounded">
                <span className="text-[#00D4FF] font-semibold block mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Base Location
                </span>
                <span className="text-[#EAF5FF]">{profileData.location}</span>
              </div>
              <div className="p-3 bg-[#0B0F1A] border border-[#182A42] rounded">
                <span className="text-[#00E599] font-semibold block mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> Operational Status
                </span>
                <span className="text-[#EAF5FF]">Available for Engineering Roles</span>
              </div>
            </div>
          </div>

          {/* Core Philosophy Callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#101B2B] border border-[#182A42] rounded-lg">
              <div className="flex items-center gap-2 text-[#007BFF] font-semibold text-xs mb-2">
                <Wrench className="w-4 h-4" /> HARDWARE FIRST
              </div>
              <p className="text-xs text-[#91A8BF] leading-relaxed">
                Direct hands-on experience in soldering, wire routing, mechanical fits, sensor calibration, and physical tank submersions.
              </p>
            </div>

            <div className="p-4 bg-[#101B2B] border border-[#182A42] rounded-lg">
              <div className="flex items-center gap-2 text-[#00D4FF] font-semibold text-xs mb-2">
                <Target className="w-4 h-4" /> RIGOROUS RESTRAINT
              </div>
              <p className="text-xs text-[#91A8BF] leading-relaxed">
                Clear distinction between tested physical prototypes and conceptual CAD models. No inflated performance claims.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Key Discipline Matrix */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#101B2B] border border-[#182A42] rounded-lg p-5 shadow-xl space-y-3">
            <h4 className="text-xs font-bold text-[#EAF5FF] tracking-wider border-b border-[#182A42] pb-2">
              CORE TECHNICAL DOMAINS
            </h4>

            <div className="space-y-3">
              <div className="p-3 bg-[#0B0F1A] border border-[#182A42] rounded">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-[#00D4FF]">Embedded & Microcontrollers</span>
                  <span className="text-[10px] text-[#00E599]">[PRACTICAL]</span>
                </div>
                <p className="text-[11px] text-[#91A8BF]">
                  Dual-MCU networks (ESP8266 + ESP32-CAM), analog sensor ADC acquisition, PWM motor modulation, and Wi-Fi video streaming.
                </p>
              </div>

              <div className="p-3 bg-[#0B0F1A] border border-[#182A42] rounded">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-[#007BFF]">Industrial Automation & Wiring</span>
                  <span className="text-[10px] text-[#00E599]">[8 MOS EXP]</span>
                </div>
                <p className="text-[11px] text-[#91A8BF]">
                  Control cabinet harnessing, DIN-rail terminal layouts, relay logic, sensor sorting lines, and laser engraving machines.
                </p>
              </div>

              <div className="p-3 bg-[#0B0F1A] border border-[#182A42] rounded">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-[#B388FF]">Pneumatics & Fluid Power</span>
                  <span className="text-[10px] text-[#00E599]">[CERTIFIED]</span>
                </div>
                <p className="text-[11px] text-[#91A8BF]">
                  5/2 directional solenoid valves, single/double acting actuators, air prep units, and automated pneumatic diverter circuits.
                </p>
              </div>

              <div className="p-3 bg-[#0B0F1A] border border-[#182A42] rounded">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-[#00E599]">CAD Modeling & Prototyping</span>
                  <span className="text-[10px] text-[#00E599]">[CAD LAB]</span>
                </div>
                <p className="text-[11px] text-[#91A8BF]">
                  Solid Edge parametric design, 3D printing slicing parameters for watertight enclosures, and chassis frame drafting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
