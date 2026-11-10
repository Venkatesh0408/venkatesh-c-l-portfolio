import React from 'react';

interface KaliSnakeDragonProps {
  className?: string;
  glow?: boolean;
}

export const KaliSnakeDragon: React.FC<KaliSnakeDragonProps> = ({ 
  className = "w-full h-auto",
  glow = true 
}) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-[0_0_25px_rgba(0,123,255,0.6)]"
      >
        <defs>
          {/* Kali Blue Linear Gradients */}
          <linearGradient id="kaliBlueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="50%" stopColor="#087BFF" />
            <stop offset="100%" stopColor="#0056b3" />
          </linearGradient>

          <linearGradient id="kaliElectric" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#007BFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="1" />
          </linearGradient>

          <filter id="kaliNeonBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur1" />
            <feGaussianBlur stdDeviation="15" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Pulsing Aura */}
        <ellipse cx="400" cy="300" rx="260" ry="200" fill="rgba(0, 123, 255, 0.04)" />

        <g filter={glow ? "url(#kaliNeonBlur)" : undefined}>
          {/* Main Snake-like Serpentine Spine & Tail Coil (Kali Linux Style) */}
          <path
            d="M 180 480 
               C 220 530, 320 560, 420 520 
               C 520 480, 580 400, 560 310 
               C 540 230, 450 180, 360 190 
               C 280 200, 240 270, 260 340 
               C 280 400, 350 430, 420 400 
               C 480 370, 510 300, 490 240 
               C 475 200, 430 170, 390 180 
               C 360 190, 345 220, 355 245 
               C 365 270, 395 280, 415 265"
            stroke="url(#kaliBlueGlow)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Dragon Back Spikes / Ridge Fins */}
          <path
            d="M 430 170 L 415 140 L 440 165 L 445 130 L 465 160 L 485 125 L 495 160 L 525 130 L 525 170 L 555 145 L 545 190 L 575 175 L 560 220"
            stroke="#00D4FF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(0, 212, 255, 0.15)"
          />

          {/* Majestic Wing 1 (Main Upper Blade) */}
          <path
            d="M 370 200 
               L 260 90 
               Q 310 130, 350 170 
               L 210 100 
               Q 280 155, 330 190 
               L 160 135 
               Q 250 190, 310 220 
               L 130 190 
               Q 230 230, 300 250"
            stroke="url(#kaliElectric)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(0, 123, 255, 0.08)"
          />

          {/* Wing Membrane Veins */}
          <path
            d="M 260 90 Q 290 140, 330 190 M 210 100 Q 250 160, 300 220 M 160 135 Q 220 195, 290 240"
            stroke="#00D4FF"
            strokeWidth="1.8"
            strokeDasharray="4 3"
            opacity="0.8"
          />

          {/* Horned Dragon Head & Snout */}
          <path
            d="M 490 240 
               L 540 220 
               L 590 215 
               L 640 230 
               L 620 250 
               L 570 245 
               L 600 265 
               L 560 265 
               L 535 285 
               L 510 260 Z"
            stroke="#00D4FF"
            strokeWidth="3.5"
            strokeLinejoin="round"
            fill="rgba(0, 212, 255, 0.2)"
          />

          {/* Dragon Glowing Eye */}
          <circle cx="585" cy="232" r="3.5" fill="#FFFFFF" />
          <circle cx="585" cy="232" r="6" stroke="#00D4FF" strokeWidth="1.5" />

          {/* Front & Back Claws */}
          <path
            d="M 280 410 L 250 460 M 270 415 L 235 480 M 310 420 L 285 485"
            stroke="#00D4FF"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M 490 440 L 520 500 M 505 435 L 545 490 M 520 425 L 565 470"
            stroke="#007BFF"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Snake Tail Barb / Spearhead Tip */}
          <path
            d="M 180 480 L 120 515 L 145 485 L 115 460 L 165 470 Z"
            fill="url(#kaliBlueGlow)"
            stroke="#00D4FF"
            strokeWidth="2.5"
          />

          {/* Floating Energy Particles / Cyber Sparks */}
          <circle cx="620" cy="210" r="2" fill="#00D4FF" />
          <circle cx="480" cy="110" r="1.5" fill="#007BFF" />
          <circle cx="140" cy="170" r="2" fill="#00D4FF" />
          <circle cx="200" cy="80" r="1.5" fill="#00D4FF" />
          <circle cx="580" cy="360" r="2" fill="#007BFF" />
          <circle cx="100" cy="450" r="2" fill="#00D4FF" />
        </g>
      </svg>
    </div>
  );
};
