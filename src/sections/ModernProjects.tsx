import React, { useState } from 'react';
import { Cpu, AlertTriangle, Layers, ChevronRight, Award, CheckCircle2, Crosshair, Wrench, Radio, ExternalLink, HardDrive } from 'lucide-react';
import { projectsData, ProjectItem } from '../data/projects';

interface ModernProjectsProps {
  onOpenProjectModal: (projectId: string) => void;
}

export const ModernProjects: React.FC<ModernProjectsProps> = ({ onOpenProjectModal }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'sensors' | 'hull' | 'specs'>('architecture');
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const flagshipProject = projectsData.find(p => p.id === 'submersible-micro-robot') || projectsData[0];
  const secondaryProjects = projectsData.filter(p => p.id !== 'submersible-micro-robot');

  return (
    <section id="projects" className="py-24 relative bg-space-950 border-t border-cyan-500/15">
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Crosshair className="w-3.5 h-3.5 text-cyan-400" />
            <span>04 // Engineered Systems & Hardware</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Real-world prototypes spanning marine robotics, embedded sensor telemetry, industrial PLC sorting, and intelligent digital assistants.
          </p>
        </div>

        {/* ============================================================== */}
        {/* FLAGSHIP SHOWCASE: SUBMERSIBLE MICRO ROBOT (LARGEST & MOST IMPRESSIVE) */}
        {/* ============================================================== */}
        <div className="mb-20">
          <div className="hud-panel hud-corner rounded-3xl p-6 sm:p-10 border-2 border-cyan-400/40 shadow-[0_0_50px_rgba(0,212,255,0.18)]">
            
            {/* Top Bar: Flagship Badge & Honors */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-cyan-500/20">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>1ST PRIZE (GOLD) // INNOVEX 2026 WINNER</span>
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  FLAGSHIP ROBOTICS SYSTEM
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-950/40 text-emerald-400 border border-emerald-500/40">
                  [{flagshipProject.status.toUpperCase()}]
                </span>
              </div>

              <button
                onClick={() => onOpenProjectModal(flagshipProject.id)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-electric-500 to-cyan-500 hover:opacity-95 shadow-[0_0_20px_rgba(8,123,255,0.4)] transition-all cursor-pointer"
              >
                <span>Inspect Technical Dossier</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Title & Overview */}
            <div className="mt-6 space-y-2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {flagshipProject.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
                {flagshipProject.shortSummary}
              </p>
            </div>

            {/* Core Flagship Layout: Media Gallery & Technical Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-start">
              
              {/* Left Column: Real Test Bench Imagery with Selector */}
              <div className="lg:col-span-6 space-y-3">
                <div className="relative h-72 sm:h-84 rounded-2xl bg-space-900 border border-cyan-500/30 overflow-hidden flex items-center justify-center">
                  <img
                    src={flagshipProject.images[activeImageIndex]?.url || flagshipProject.images[0].url}
                    alt={flagshipProject.images[activeImageIndex]?.caption || "Submersible robot test photo"}
                    className="w-full h-full object-contain p-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-transparent to-transparent opacity-60 pointer-events-none" />
                  
                  {/* Photo Caption Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-space-950/90 backdrop-blur-md border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center justify-between">
                    <span className="truncate">{flagshipProject.images[activeImageIndex]?.caption}</span>
                    <span className="text-[10px] text-slate-400 shrink-0 ml-2">
                      {activeImageIndex + 1}/{flagshipProject.images.length}
                    </span>
                  </div>
                </div>

                {/* Thumbnail Previews */}
                <div className="grid grid-cols-3 gap-3">
                  {flagshipProject.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`h-20 rounded-xl overflow-hidden bg-space-900 border transition-all cursor-pointer ${
                        activeImageIndex === idx
                          ? 'border-cyan-400 shadow-[0_0_15px_rgba(0,212,255,0.3)] ring-1 ring-cyan-400'
                          : 'border-space-800 opacity-60 hover:opacity-100 hover:border-space-700'
                      }`}
                    >
                      <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>

                {/* Verified Ground Truth Notice */}
                <div className="p-4 rounded-xl bg-amber-950/25 border border-amber-500/40 text-amber-200/90 text-xs space-y-1 font-mono">
                  <div className="flex items-center gap-2 text-amber-400 font-bold">
                    <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
                    <span>VERIFIED BENCH BOUNDARY // NO FABRICATIONS</span>
                  </div>
                  <p className="leading-relaxed text-[11px]">
                    This tested prototype configuration operates with an <strong className="text-white">analog turbidity sensor</strong> and <strong className="text-white">ESP32-CAM video stream</strong>. It contains <u>no pH sensor and no ultrasonic distance sensor</u>. Visual water clarity assessment is not chemical pH analysis.
                  </p>
                </div>
              </div>

              {/* Right Column: Interactive Deep-Dive Architecture Tabs */}
              <div className="lg:col-span-6 space-y-4">
                
                {/* Tab Selector */}
                <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-space-900/90 border border-space-800 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('architecture')}
                    className={`flex-1 py-2 px-3 rounded-lg font-bold transition-all ${
                      activeTab === 'architecture'
                        ? 'bg-cyan-500 text-black shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Architecture
                  </button>
                  <button
                    onClick={() => setActiveTab('sensors')}
                    className={`flex-1 py-2 px-3 rounded-lg font-bold transition-all ${
                      activeTab === 'sensors'
                        ? 'bg-cyan-500 text-black shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Turbidity
                  </button>
                  <button
                    onClick={() => setActiveTab('hull')}
                    className={`flex-1 py-2 px-3 rounded-lg font-bold transition-all ${
                      activeTab === 'hull'
                        ? 'bg-cyan-500 text-black shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Hull & CAD
                  </button>
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`flex-1 py-2 px-3 rounded-lg font-bold transition-all ${
                      activeTab === 'specs'
                        ? 'bg-cyan-500 text-black shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Hardware BOM
                  </button>
                </div>

                {/* Tab Content Display */}
                <div className="p-6 rounded-2xl bg-space-900/70 border border-space-800 space-y-4 min-h-[320px]">
                  
                  {activeTab === 'architecture' && (
                    <div className="space-y-3.5">
                      <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs font-mono uppercase">
                        <Cpu className="w-4 h-4 text-cyan-400" />
                        <span>Dual-Microcontroller Separation Architecture</span>
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        To eliminate video streaming latency and prevent frame drops during motor actuation, the system decouples optics from motor and telemetry processing:
                      </p>
                      <div className="space-y-2 text-xs">
                        <div className="p-3 rounded-xl bg-space-950 border border-space-800">
                          <span className="font-mono text-cyan-400 font-bold block mb-1">
                            Node 1: ESP32-CAM Optical Transmitter
                          </span>
                          <span className="text-slate-300">
                            Initializes OV2640 camera interface, serving low-latency MJPEG video streams over local Wi-Fi / tether for visual crack and sediment inspection.
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-space-950 border border-space-800">
                          <span className="font-mono text-emerald-400 font-bold block mb-1">
                            Node 2: ESP8266 Telemetry & Propulsion Controller
                          </span>
                          <span className="text-slate-300">
                            Dedicated to ADC sampling of turbidity levels, WebSocket telemetry broadcasts, and PWM motor driver logic for horizontal and dive thrusters.
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'sensors' && (
                    <div className="space-y-3.5">
                      <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs font-mono uppercase">
                        <Radio className="w-4 h-4 text-cyan-400" />
                        <span>Analog Optical Turbidity Sensor Calibration</span>
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        Measures water clarity in industrial runoff and enclosed water reservoirs via infrared transmission absorption:
                      </p>
                      <ul className="space-y-2 text-xs text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 font-bold font-mono">›</span>
                          <span><strong>Analog Voltage Mapping:</strong> Outputs 0V to 4.5V DC inversely proportional to suspended particulate matter.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 font-bold font-mono">›</span>
                          <span><strong>Noise Filtering:</strong> Firmware-level moving-average filter running on ESP8266 ADC to prevent false turbidity spikes during thruster vibration.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 font-bold font-mono">›</span>
                          <span><strong>Testing Tank Calibration:</strong> Verified against clean water baselines (4.18V) and sediment-dosed testing samples.</span>
                        </li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'hull' && (
                    <div className="space-y-3.5">
                      <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs font-mono uppercase">
                        <Layers className="w-4 h-4 text-cyan-400" />
                        <span>Watertight Enclosure & Neutral Buoyancy</span>
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        Engineered in Solid Edge to achieve hydrostatic pressure sealing and stable trim:
                      </p>
                      <ul className="space-y-2 text-xs text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 font-bold font-mono">›</span>
                          <span><strong>Cylindrical Acrylic Hull:</strong> High optical clarity for internal camera node with end-cap compression gaskets.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 font-bold font-mono">›</span>
                          <span><strong>Radial O-Ring Seals:</strong> Standardized groove tolerances to guarantee sealing under static submersion testing.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400 font-bold font-mono">›</span>
                          <span><strong>Ballast & Trim Management:</strong> Lower-tier battery placement ensuring bottom-heavy center of gravity to prevent roll instability.</span>
                        </li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'specs' && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs font-mono uppercase">
                        <HardDrive className="w-4 h-4 text-cyan-400" />
                        <span>Verified Hardware Bill of Materials (BOM)</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {flagshipProject.hardware.map((hw, idx) => (
                          <div key={idx} className="p-2 rounded-lg bg-space-950 border border-space-800 text-slate-200 flex items-start gap-2">
                            <span className="text-cyan-400 font-bold font-mono">›</span>
                            <span>{hw}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Contributions List */}
                <div className="p-4 rounded-xl bg-space-900/60 border border-space-800 space-y-2">
                  <span className="text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider block">
                    Key Practical Engineering Contributions:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {flagshipProject.keyContributions.map((contrib, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{contrib}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ============================================================== */}
        {/* SECONDARY PROJECTS: 3 HIGH-TECH MODULAR CARDS */}
        {/* ============================================================== */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              ADDITIONAL ENGINEERED SYSTEMS
            </h3>
            <span className="text-xs text-slate-400 font-mono">PROTOTYPES // 02 — 04</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryProjects.map((project: ProjectItem) => (
              <div
                key={project.id}
                className="hud-panel hud-corner rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div>
                  {/* Image banner */}
                  <div className="relative h-44 rounded-xl bg-space-900 border border-space-800 overflow-hidden mb-4 flex items-center justify-center">
                    {project.images && project.images.length > 0 ? (
                      <img
                        src={project.images[0].url}
                        alt={project.images[0].caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="text-center p-4">
                        <Layers className="w-10 h-10 text-cyan-400/40 mx-auto mb-2" />
                        <span className="text-xs text-slate-400 font-mono">SOFTWARE & INTELLIGENCE</span>
                      </div>
                    )}
                    <div className="absolute top-2 left-2 right-2 flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-space-950/80 backdrop-blur-md text-cyan-400 border border-cyan-500/30">
                        {project.category}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-space-950/80 backdrop-blur-md text-slate-300 border border-space-700">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-slate-300 text-xs mt-2 leading-relaxed line-clamp-3">
                    {project.shortSummary}
                  </p>

                  {/* Components snippet */}
                  <div className="mt-4 pt-3 border-t border-space-800">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Key Hardware / Tech:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {project.hardware.slice(0, 3).map((hw, hIdx) => (
                        <span
                          key={hIdx}
                          className="px-2 py-0.5 rounded bg-space-900 text-slate-300 border border-space-800 text-[10px] font-mono"
                        >
                          {hw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer button */}
                <div className="mt-5 pt-3 border-t border-space-800 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified Spec</span>
                  </span>
                  <button
                    onClick={() => onOpenProjectModal(project.id)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Dossier</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Guarantee Footer */}
        <div className="mt-14 p-4 rounded-xl bg-space-900/70 border border-space-800 flex items-center justify-between flex-wrap gap-3 text-xs text-slate-400 font-mono">
          <span>
            VERIFIED BENCH DATA: All project specifications reflect physical laboratory tests and actual microcontroller code benches. No fabricated pH readings, sonar distance data, or autonomous claims.
          </span>
          <span className="text-cyan-400 font-bold">RRCE ROBOTICS & AUTOMATION BENCH DATA</span>
        </div>

      </div>
    </section>
  );
};
