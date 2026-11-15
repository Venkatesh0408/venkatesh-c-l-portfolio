import React from 'react';
import { Cpu, Wrench, ShieldCheck, Target, Layers, Radio, CheckCircle, Crosshair } from 'lucide-react';
import { profileData } from '../data/profile';

export const ModernAbout: React.FC = () => {
  const coreCompetencies = [
    {
      icon: Cpu,
      title: "Embedded Robotics Architecture",
      code: "ROB-01",
      desc: "Specialized in dual-MCU architectures (ESP8266 + ESP32-CAM), differential motor propulsion mixing, and low-latency wireless telemetry streaming for autonomous and tethered vehicles."
    },
    {
      icon: Wrench,
      title: "Electrical & Industrial Panels",
      code: "IND-02",
      desc: "8 months of verified industrial internship experience covering 415V/230V/24V electrical control cabinet wiring, DIN-rail mounting, ferrule marking, and relay ladder logic."
    },
    {
      icon: Radio,
      title: "Sensors & Signal Calibration",
      code: "SEN-03",
      desc: "Practical bench calibration of optical turbidity sensors, inductive ferrous proximity sensors, diffuse photoelectric barriers, and ADC voltage sampling algorithms."
    },
    {
      icon: Layers,
      title: "CAD & Watertight Prototyping",
      code: "MEC-04",
      desc: "Parametric mechanical modeling in Solid Edge, watertight radial O-ring gland engineering, cylindrical acrylic hulls, and structural rapid 3D printing."
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-space-950 border-t border-cyan-500/15">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Crosshair className="w-3.5 h-3.5 text-cyan-400" />
            <span>01 // Engineering Background & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hardware-First Robotics Engineering
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Designing, building, and automating test-validated systems at the intersection of robotics, embedded firmware, and industrial electrical automation.
          </p>
        </div>

        {/* Two-Column Technical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Engineering Mindset Card */}
          <div className="lg:col-span-7 hud-panel hud-corner rounded-2xl p-7 sm:p-9 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20 font-mono text-xs">
              <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                PRACTICAL HARDWARE DISCIPLINE
              </span>
              <span className="text-slate-500">PHILOSOPHY_MATRIX</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Physical System Validation Over Theoretical Speculation
            </h3>
            
            <p className="text-slate-300 text-sm leading-relaxed">
              My engineering trajectory combines a solid foundational <strong className="text-white">Diploma in Electrical and Electronics Engineering</strong> from MEI Polytechnic (75.40%, CGPA 8.29) with advanced coursework in <strong className="text-white">B.E. Robotics and Automation</strong> at Rajarajeswari College of Engineering (CGPA 7.8).
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Rather than confining engineering to theoretical simulations, I build functional hardware: sealed acrylic underwater robot hulls, calibrated optical turbidity sensors on test benches, industrial control cabinet wiring, and synchronized electro-pneumatic cylinders with PLC logic.
            </p>
            
            <div className="pt-4 border-t border-space-800 flex flex-wrap gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero fabricated metrics</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>8 Months verified industrial training</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Physical bench test telemetry</span>
              </div>
            </div>
          </div>

          {/* Career Objectives & Target Roles */}
          <div className="lg:col-span-5 hud-panel hud-corner rounded-2xl p-7 sm:p-9 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20 font-mono text-xs">
              <div className="flex items-center gap-2 text-cyan-400 font-bold tracking-wider">
                <Target className="w-4 h-4 text-cyan-400" />
                <span>CAREER ASPIRATIONS</span>
              </div>
              <span className="text-emerald-400">STATUS: OPEN</span>
            </div>

            <h3 className="text-lg font-bold text-white">
              Prepared for Rigorous Engineering Environments
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Actively targeting high-integrity engineering organizations and demanding R&D environments:
            </p>
            
            <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
              <li className="p-2.5 rounded-xl bg-space-900/90 border border-space-800 flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold font-mono">›</span>
                <div>
                  <strong className="text-white">ISRO & Aerospace Centers:</strong>
                  <div className="text-slate-400 text-xs mt-0.5">Embedded hardware integration, sensor telemetry, and mechanical testing rigs.</div>
                </div>
              </li>
              <li className="p-2.5 rounded-xl bg-space-900/90 border border-space-800 flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold font-mono">›</span>
                <div>
                  <strong className="text-white">Robotics R&D Laboratories:</strong>
                  <div className="text-slate-400 text-xs mt-0.5">Autonomous surface/underwater vehicle development, firmware, and prototype fabrication.</div>
                </div>
              </li>
              <li className="p-2.5 rounded-xl bg-space-900/90 border border-space-800 flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold font-mono">›</span>
                <div>
                  <strong className="text-white">Industrial Automation Plants:</strong>
                  <div className="text-slate-400 text-xs mt-0.5">Control panel design, PLC ladder sequencing, and factory automation lines.</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Core Competency Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreCompetencies.map((comp, idx) => {
            const Icon = comp.icon;
            return (
              <div
                key={idx}
                className="hud-panel hud-corner rounded-xl p-5 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-500/20 transition-all">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400/70">{comp.code}</span>
                </div>
                <h4 className="text-white font-bold text-sm mb-1.5 group-hover:text-cyan-400 transition-colors">
                  {comp.title}
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {comp.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
