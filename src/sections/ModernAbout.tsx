import React from 'react';
import { Cpu, Wrench, ShieldCheck, Target, Layers, Radio } from 'lucide-react';
import { profileData } from '../data/profile';

export const ModernAbout: React.FC = () => {
  const coreCompetencies = [
    {
      icon: Cpu,
      title: "Embedded & Robotics Architecture",
      desc: "Specialized in dual-microcontroller architectures (ESP8266 + ESP32-CAM), differential motor propulsion mixing, and wireless telemetry streaming."
    },
    {
      icon: Wrench,
      title: "Electrical & Industrial Panels",
      desc: "Extensive hands-on internship experience in 415V/230V/24V electrical control cabinet wiring, DIN-rail mounting, ferrule marking, and relay ladder logic."
    },
    {
      icon: Radio,
      title: "Sensors & Signal Calibration",
      desc: "Practical exposure to optical turbidity sensors, inductive proximity sensors, diffuse photoelectric barriers, and ADC voltage mapping."
    },
    {
      icon: Layers,
      title: "CAD & Watertight Prototyping",
      desc: "Parametric mechanical modeling in Solid Edge, watertight O-ring gland engineering, acrylic cylinder hulls, and rapid 3D printing."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-navy-950/40 border-t border-navy-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent-blue/10 border border-accent-blue/30 text-accent-cyan text-xs font-bold uppercase tracking-wider mb-3">
            <span>01 // Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Background & Philosophy
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Developing practical, test-validated hardware solutions at the intersection of robotics, embedded firmware, and industrial electrical systems.
          </p>
        </div>

        {/* Two-column layout: Philosophy & Career Objectives */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Engineering Mindset Card */}
          <div className="lg:col-span-7 rounded-2xl bg-navy-900/60 border border-navy-700/80 p-6 sm:p-8 backdrop-blur-sm space-y-4 shadow-lg">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan" />
              <span>A Practical, Hardware-First Mindset</span>
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              My engineering trajectory combines a solid foundational <strong className="text-white">Diploma in Electrical and Electronics Engineering</strong> (MEI Polytechnic, 75.40%, CGPA 8.29) with advanced coursework in <strong className="text-white">B.E. Robotics and Automation</strong> at Rajarajeswari College of Engineering (CGPA 7.8).
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Rather than confining engineering to theoretical simulations, I focus on physical prototypes: building sealed underwater robot capsules, calibrating optical turbidity sensors on test benches, routing industrial control cabinet wiring, and synchronizing electro-pneumatic cylinders with PLC logic.
            </p>
            <div className="pt-3 border-t border-navy-800 flex flex-wrap gap-4 text-xs text-slate-400">
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
                <span>Proven project test bench data</span>
              </div>
            </div>
          </div>

          {/* Career Objectives & Readiness Card */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-navy-900/90 to-navy-950 border border-accent-cyan/30 p-6 sm:p-8 space-y-4 shadow-[0_0_30px_rgba(0,212,255,0.08)]">
            <div className="flex items-center gap-2 text-accent-cyan font-bold text-xs uppercase tracking-wider">
              <Target className="w-4 h-4 text-accent-cyan" />
              <span>Career Aspirations & Target Roles</span>
            </div>
            <h3 className="text-lg font-bold text-white">
              Prepared for Rigorous Engineering Environments
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Actively seeking challenging internship and entry-level engineering roles within:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <span className="text-accent-cyan font-bold">›</span>
                <span><strong className="text-white">ISRO & Aerospace Centers:</strong> Embedded hardware integration, sensor telemetry, and mechanical testing rigs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-cyan font-bold">›</span>
                <span><strong className="text-white">Robotics R&D Laboratories:</strong> Autonomous surface/underwater vehicle development, firmware, and prototype fabrication.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-cyan font-bold">›</span>
                <span><strong className="text-white">Industrial Automation Firms:</strong> Control panel design, PLC ladder sequencing, and factory automation lines.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Core Competency Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreCompetencies.map((comp, idx) => {
            const Icon = comp.icon;
            return (
              <div
                key={idx}
                className="rounded-xl bg-navy-900/40 border border-navy-800 hover:border-accent-cyan/40 p-5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center text-accent-cyan mb-3 group-hover:scale-105 group-hover:bg-accent-blue/20 transition-all">
                  <Icon className="w-5 h-5 text-accent-cyan" />
                </div>
                <h4 className="text-white font-bold text-sm mb-1.5">
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
