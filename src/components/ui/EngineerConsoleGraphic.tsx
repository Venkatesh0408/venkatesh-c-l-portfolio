import React from 'react';
import { KaliDragon } from './KaliDragon';

export const EngineerConsoleGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center justify-center select-none">
      {/* Background Glowing Dragon */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[120%] opacity-70 pointer-events-none filter drop-shadow-[0_0_20px_rgba(0,212,255,0.4)]">
        <KaliDragon />
      </div>

      {/* Silhouette & Console Cockpit SVG */}
      <svg
        viewBox="0 0 500 320"
        className="w-full h-auto z-10 filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Glow Gradients */}
        <defs>
          <linearGradient id="screenGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#007BFF" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="neonCyan" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#007BFF" />
          </linearGradient>
        </defs>

        {/* Ambient Desk Light Bar */}
        <line x1="60" y1="270" x2="440" y2="270" stroke="#182A42" strokeWidth="4" />
        <line x1="120" y1="270" x2="380" y2="270" stroke="#00D4FF" strokeWidth="2" strokeOpacity="0.7" />

        {/* Left Monitor (Robotic Arm Simulation) */}
        <g>
          <rect x="70" y="110" width="105" height="75" rx="4" fill="#0B0F1A" stroke="#00D4FF" strokeWidth="1.5" />
          <rect x="73" y="113" width="99" height="69" fill="url(#screenGlow)" />
          {/* Wireframe Robotic Arm */}
          <path d="M 85 168 L 110 145 L 135 152 L 155 130" stroke="#00D4FF" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="85" cy="168" r="3" fill="#007BFF" />
          <circle cx="110" cy="145" r="3" fill="#00D4FF" />
          <circle cx="135" cy="152" r="3" fill="#007BFF" />
          <circle cx="155" cy="130" r="3" fill="#00D4FF" />
          {/* Monitor Stand */}
          <path d="M 122 185 L 122 205 M 105 205 L 140 205" stroke="#182A42" strokeWidth="2" />
        </g>

        {/* Center Monitor (Submersible Robot Telemetry) */}
        <g>
          <rect x="185" y="90" width="130" height="90" rx="4" fill="#0B0F1A" stroke="#00D4FF" strokeWidth="2" />
          <rect x="188" y="93" width="124" height="84" fill="url(#screenGlow)" />
          {/* Submersible Micro Robot Wireframe Outline */}
          <ellipse cx="250" cy="135" rx="36" ry="18" stroke="#00D4FF" strokeWidth="1.8" strokeDasharray="3 2" />
          <circle cx="270" cy="135" r="8" stroke="#00E599" strokeWidth="1.5" />
          <line x1="214" y1="135" x2="200" y2="125" stroke="#00D4FF" strokeWidth="2" />
          <line x1="214" y1="135" x2="200" y2="145" stroke="#00D4FF" strokeWidth="2" />
          {/* Telemetry text */}
          <text x="195" y="108" fill="#00D4FF" fontSize="7" fontFamily="monospace">TURBIDITY: 98% OK</text>
          <text x="195" y="168" fill="#91A8BF" fontSize="6" fontFamily="monospace">CAM: LIVE 24FPS</text>
          {/* Stand */}
          <path d="M 250 180 L 250 205 M 230 205 L 270 205" stroke="#182A42" strokeWidth="2" />
        </g>

        {/* Right Monitor (PLC Conveyor & Code Matrix) */}
        <g>
          <rect x="325" y="110" width="105" height="75" rx="4" fill="#0B0F1A" stroke="#00D4FF" strokeWidth="1.5" />
          <rect x="328" y="113" width="99" height="69" fill="url(#screenGlow)" />
          {/* Code lines */}
          <line x1="335" y1="125" x2="385" y2="125" stroke="#00D4FF" strokeWidth="1.5" />
          <line x1="335" y1="133" x2="415" y2="133" stroke="#91A8BF" strokeWidth="1.5" />
          <line x1="335" y1="141" x2="370" y2="141" stroke="#007BFF" strokeWidth="1.5" />
          <line x1="335" y1="149" x2="400" y2="149" stroke="#00E599" strokeWidth="1.5" />
          <line x1="335" y1="157" x2="365" y2="157" stroke="#00D4FF" strokeWidth="1.5" />
          {/* Stand */}
          <path d="M 378 185 L 378 205 M 360 205 L 395 205" stroke="#182A42" strokeWidth="2" />
        </g>

        {/* Seated Engineer Silhouette with Over-Ear Headphones */}
        <g>
          {/* Head & Hood/Hair */}
          <path
            d="M 228 148 C 228 132, 272 132, 272 148 C 272 165, 266 175, 250 178 C 234 175, 228 165, 228 148 Z"
            fill="#080C14"
            stroke="#101B2B"
            strokeWidth="1.5"
          />

          {/* Over-Ear Headphones */}
          <path d="M 226 138 C 226 122, 274 122, 274 138" stroke="#00D4FF" strokeWidth="2.5" fill="none" />
          <rect x="222" y="138" width="6" height="14" rx="2" fill="#00D4FF" />
          <rect x="272" y="138" width="6" height="14" rx="2" fill="#00D4FF" />

          {/* Torso & Shoulders Silhouette */}
          <path
            d="M 185 270 L 205 188 C 215 182, 235 178, 250 178 C 265 178, 285 182, 295 188 L 315 270 Z"
            fill="#080C14"
            stroke="#14243A"
            strokeWidth="2"
          />

          {/* Tactical Command Badge on Back */}
          <rect x="215" y="215" width="70" height="20" rx="3" fill="#0B0F1A" stroke="#00D4FF" strokeWidth="1.2" />
          <text x="220" y="229" fill="#00D4FF" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
            &gt; Engineer_Mode: ON
          </text>
        </g>
      </svg>
    </div>
  );
};
