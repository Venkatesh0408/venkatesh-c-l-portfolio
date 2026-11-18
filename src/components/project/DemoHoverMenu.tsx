import React, { useState, useRef, useEffect, useId } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { ExternalLink, Zap, Server, Info, ChevronDown } from 'lucide-react';
import { ProjectDemoLinks } from '../../data/projects';

export interface DemoHoverMenuProps {
  demoLinks: ProjectDemoLinks;
  label?: string;
  variant?: 'primary' | 'pill' | 'card';
  align?: 'left' | 'right';
  direction?: 'down' | 'up';
  icon?: React.ReactNode;
  className?: string;
}

const SPRING_TRANSITION = {
  type: 'spring' as const,
  stiffness: 420,
  damping: 30,
  mass: 0.75,
};

const POPOVER_VARIANTS = {
  down: {
    initial: { opacity: 0, scale: 0.93, y: -8, filter: 'blur(6px)' },
    animate: { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, scale: 0.95, y: -6, filter: 'blur(4px)' },
  },
  up: {
    initial: { opacity: 0, scale: 0.93, y: 8, filter: 'blur(6px)' },
    animate: { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, scale: 0.95, y: 6, filter: 'blur(4px)' },
  },
};

export const DemoHoverMenu: React.FC<DemoHoverMenuProps> = ({
  demoLinks,
  label = 'Live Demo',
  variant = 'primary',
  align = 'right',
  direction = 'down',
  icon,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredOption, setHoveredOption] = useState<'vercel' | 'render' | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const uniqueId = useId();

  const clearCloseTimer = () => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    clearCloseTimer();
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    clearCloseTimer();
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setHoveredOption(null);
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleEsc);
    return () => {
      clearCloseTimer();
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const options = [
    {
      id: 'vercel' as const,
      title: 'Open on Vercel',
      domain: 'submersible-micro-robot.vercel.app',
      badge: 'FAST • UI',
      href: demoLinks.vercelUrl,
      Icon: Zap,
    },
    {
      id: 'render' as const,
      title: 'Open on Render',
      domain: 'submersible-micro-robot.onrender.com',
      badge: 'BACKEND',
      href: demoLinks.renderUrl,
      Icon: Server,
    },
  ];

  const triggerClasses =
    variant === 'primary'
      ? `inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all shadow-sm cursor-pointer ${
          isOpen
            ? 'bg-neutral-200 text-black ring-2 ring-white/40'
            : 'bg-white text-black hover:bg-neutral-200'
        }`
      : variant === 'pill'
      ? `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-950 border text-xs font-mono transition-all cursor-pointer ${
          isOpen
            ? 'border-white text-white bg-neutral-900'
            : 'border-neutral-800 text-neutral-400 hover:border-white hover:text-white'
        }`
      : `w-full p-2.5 rounded-xl bg-neutral-900 border text-xs font-mono flex items-center justify-between gap-2 transition-all cursor-pointer text-left ${
          isOpen
            ? 'border-white text-white bg-neutral-850'
            : 'border-neutral-800 text-neutral-300 hover:border-white hover:text-white'
        }`;

  const positionClasses =
    direction === 'down'
      ? `top-full pt-2.5 ${
          align === 'right'
            ? 'left-0 md:left-auto md:right-0 origin-top-left md:origin-top-right'
            : 'left-0 origin-top-left'
        }`
      : `bottom-full pb-2.5 ${
          align === 'right'
            ? 'left-0 md:left-auto md:right-0 origin-bottom-left md:origin-bottom-right'
            : 'left-0 origin-bottom-left'
        }`;

  return (
    <MotionConfig transition={SPRING_TRANSITION}>
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative inline-block ${isOpen ? 'z-40' : 'z-10'} ${className}`}
      >
        {/* Trigger Button */}
        <motion.button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          whileTap={{ scale: 0.97 }}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          className={triggerClasses}
        >
          <span className="inline-flex items-center gap-1.5">
            {icon}
            <span>{label}</span>
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </motion.span>
        </motion.button>

        {/* Animated Motion-Primitives Hover Popover */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="demo-hover-popover"
              initial={POPOVER_VARIANTS[direction].initial}
              animate={POPOVER_VARIANTS[direction].animate}
              exit={POPOVER_VARIANTS[direction].exit}
              transition={SPRING_TRANSITION}
              className={`absolute ${positionClasses} w-[310px] sm:w-[348px] max-w-[calc(100vw-2rem)]`}
            >
              <div className="rounded-2xl bg-neutral-950/95 backdrop-blur-xl border border-neutral-700 shadow-[0_20px_50px_rgba(0,0,0,0.92),0_0_0_1px_rgba(255,255,255,0.06)] p-2.5 space-y-2">
                {/* Popover Micro-Header */}
                <div className="px-2 pt-1 pb-1.5 border-b border-neutral-800/90 flex items-center justify-between font-mono">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Choose Live Demo
                  </span>
                  <span className="text-[9px] text-neutral-500 uppercase tracking-wider">
                    Vercel / Render
                  </span>
                </div>

                {/* Option List with Shared layoutId Spring Highlight Primitive */}
                <div
                  className="space-y-1.5 relative"
                  onMouseLeave={() => setHoveredOption(null)}
                >
                  {options.map((opt, idx) => {
                    const isHovered = hoveredOption === opt.id;
                    const IconComponent = opt.Icon;

                    return (
                      <motion.a
                        key={opt.id}
                        href={opt.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setHoveredOption(opt.id)}
                        onFocus={() => setHoveredOption(opt.id)}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.04 + idx * 0.05,
                          type: 'spring',
                          stiffness: 450,
                          damping: 30,
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="relative block rounded-xl p-2.5 transition-colors group outline-none"
                      >
                        {/* Shared-Layout Animated Background Primitive */}
                        {isHovered && (
                          <motion.div
                            layoutId={`demo-option-bg-${uniqueId}`}
                            transition={{
                              type: 'spring',
                              stiffness: 500,
                              damping: 35,
                            }}
                            className="absolute inset-0 rounded-xl bg-white shadow-sm"
                          />
                        )}

                        {/* Default Subtle Resting Surface */}
                        <div
                          className={`absolute inset-0 rounded-xl border transition-opacity duration-150 pointer-events-none ${
                            isHovered
                              ? 'opacity-0 border-transparent'
                              : 'opacity-100 bg-neutral-900/90 border-neutral-800'
                          }`}
                        />

                        {/* Foreground Content */}
                        <div className="relative z-10 flex items-center justify-between gap-2.5 font-mono">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-150 ${
                                isHovered
                                  ? 'bg-black text-white'
                                  : 'bg-neutral-800 text-white border border-neutral-700'
                              }`}
                            >
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span
                                  className={`text-xs font-extrabold tracking-tight transition-colors duration-150 ${
                                    isHovered ? 'text-black' : 'text-white'
                                  }`}
                                >
                                  {opt.title}
                                </span>
                                <span
                                  className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wide transition-colors duration-150 ${
                                    isHovered
                                      ? 'bg-black text-white'
                                      : 'bg-neutral-800 text-neutral-300 border border-neutral-700'
                                  }`}
                                >
                                  {opt.badge}
                                </span>
                              </div>
                              <div
                                className={`text-[10px] truncate mt-0.5 transition-colors duration-150 ${
                                  isHovered ? 'text-neutral-700' : 'text-neutral-400'
                                }`}
                              >
                                {opt.domain}
                              </div>
                            </div>
                          </div>

                          <ExternalLink
                            className={`w-3.5 h-3.5 shrink-0 transition-all duration-150 ${
                              isHovered
                                ? 'text-black translate-x-0.5 -translate-y-0.5'
                                : 'text-neutral-500'
                            }`}
                          />
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                {/* Backend Notice Directly Beneath Both Options */}
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.22 }}
                  className="p-2.5 rounded-xl bg-black border border-neutral-800 flex items-start gap-2 font-mono"
                >
                  <Info className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                  <p className="text-[10.5px] leading-relaxed text-neutral-300">
                    <span className="text-white font-bold">Backend Note:</span> This project has heavy backend works. Using{' '}
                    <span className="text-white font-semibold">Vercel</span> loads fast, but{' '}
                    <span className="text-white font-semibold">cannot access the backend</span> — use{' '}
                    <span className="text-white font-semibold">Render</span> for full backend features.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
};
