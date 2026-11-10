import React from 'react';

interface KaliDragonProps {
  className?: string;
}

export const KaliDragon: React.FC<KaliDragonProps> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      viewBox="0 0 500 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="kaliGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="50%" stopColor="#007BFF" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
        <filter id="neonBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Stylized Kali Cyber Dragon Contour */}
      <g filter="url(#neonBlur)">
        {/* Main Dragon Spine & Tail Curve */}
        <path
          d="M 120 280 C 180 320, 260 300, 310 260 C 370 210, 390 140, 330 90 C 270 40, 190 70, 160 120 C 130 170, 150 230, 200 250 C 250 270, 300 240, 320 200 C 330 180, 325 150, 305 140 C 285 130, 260 145, 255 165 C 250 185, 270 205, 290 200"
          stroke="url(#kaliGlow)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.9"
        />

        {/* Dragon Wings Spikes */}
        <path
          d="M 230 75 L 140 25 L 195 90 L 110 55 L 175 115 L 85 95 L 160 145"
          stroke="#00D4FF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.95"
        />

        {/* Dragon Head & Horn */}
        <path
          d="M 330 90 L 375 70 L 410 75 L 440 95 L 430 105 L 395 100 L 415 115 L 385 115 L 370 125 L 350 110 Z"
          stroke="#00D4FF"
          strokeWidth="2.5"
          fill="rgba(0, 212, 255, 0.08)"
          strokeLinejoin="round"
        />

        {/* Wing Membranes */}
        <path
          d="M 140 25 Q 170 65, 195 90 Q 150 75, 110 55 Q 145 90, 175 115 Q 125 110, 85 95 Q 125 125, 160 145"
          stroke="url(#kaliGlow)"
          strokeWidth="1.8"
          fill="rgba(0, 123, 255, 0.05)"
        />

        {/* Tail Barb */}
        <path
          d="M 120 280 L 80 310 L 95 285 L 75 270 L 110 275 Z"
          fill="#00D4FF"
          opacity="0.85"
        />

        {/* Claws & Chest Plates */}
        <path
          d="M 200 250 L 180 290 M 190 255 L 170 300 M 230 265 L 225 305"
          stroke="#00D4FF"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
