import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Zap, Server, Info, X } from 'lucide-react';
import { ProjectDemoLinks } from '../../data/projects';

interface DemoOptionsContentProps {
  demoLinks: ProjectDemoLinks;
}

const DemoOptionsContent: React.FC<DemoOptionsContentProps> = ({ demoLinks }) => {
  return (
    <div className="space-y-3.5">
      {/* Two Deployment Options: Vercel (Fast UI) vs Render (Full Backend) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Option 1: Vercel */}
        <motion.a
          href={demoLinks.vercelUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="group flex flex-col justify-between p-4 rounded-xl bg-white text-black border border-white hover:bg-neutral-100 transition-colors shadow-md"
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 font-mono">
              <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-extrabold tracking-tight text-black">
                  Open on Vercel
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-600">
                  Fast Load • Frontend UI
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-600 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 mt-0.5" />
          </div>
          <div className="mt-3 pt-2.5 border-t border-neutral-200 flex items-center justify-between text-[11px] font-mono text-neutral-700">
            <span className="truncate">submersible-micro-robot.vercel.app</span>
            <span className="px-1.5 py-0.5 rounded bg-black text-white text-[9px] font-bold uppercase shrink-0 ml-2">
              Instant
            </span>
          </div>
        </motion.a>

        {/* Option 2: Render */}
        <motion.a
          href={demoLinks.renderUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: 0.11, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="group flex flex-col justify-between p-4 rounded-xl bg-neutral-900 text-white border border-neutral-700 hover:border-white hover:bg-neutral-850 transition-colors shadow-md"
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 font-mono">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 text-white flex items-center justify-center shrink-0">
                <Server className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-extrabold tracking-tight text-white">
                  Open on Render
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                  Full Stack • Backend Active
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 mt-0.5" />
          </div>
          <div className="mt-3 pt-2.5 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-400">
            <span className="truncate">submersible-micro-robot.onrender.com</span>
            <span className="px-1.5 py-0.5 rounded bg-neutral-800 border border-neutral-700 text-neutral-200 text-[9px] font-bold uppercase shrink-0 ml-2">
              Backend
            </span>
          </div>
        </motion.a>
      </div>

      {/* Backend Architecture Explanation Note */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, delay: 0.17, ease: [0.22, 1, 0.36, 1] }}
        className="p-3.5 rounded-xl bg-black/80 border border-neutral-800 flex items-start gap-2.5 text-xs font-mono text-neutral-300"
      >
        <Info className="w-4 h-4 text-white shrink-0 mt-0.5" />
        <div className="space-y-0.5 leading-relaxed">
          <span className="font-bold text-white uppercase tracking-wider text-[11px]">
            Backend Access Note:
          </span>
          <p className="text-neutral-300 text-xs leading-relaxed">
            {demoLinks.backendNote}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

interface DemoOptionsPanelProps {
  isOpen: boolean;
  demoLinks: ProjectDemoLinks;
  onClose?: () => void;
}

export const DemoOptionsPanel: React.FC<DemoOptionsPanelProps> = ({
  isOpen,
  demoLinks,
  onClose,
}) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="demo-options-panel"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: 'auto',
            opacity: 1,
            transition: {
              height: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.24, delay: 0.06 },
            },
          }}
          exit={{
            height: 0,
            opacity: 0,
            transition: {
              height: { duration: 0.26, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: 0.16 },
            },
          }}
          className="overflow-hidden"
        >
          <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-neutral-900/70 border border-neutral-700/80 space-y-3">
            <div className="flex items-center justify-between gap-2 pb-2 border-b border-neutral-800 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                  Choose Deployment Environment
                </span>
              </div>
              {onClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                  title="Hide demo options"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <DemoOptionsContent demoLinks={demoLinks} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface DemoSelectorModalProps {
  isOpen: boolean;
  projectTitle?: string;
  demoLinks: ProjectDemoLinks;
  onClose: () => void;
}

export const DemoSelectorModal: React.FC<DemoSelectorModalProps> = ({
  isOpen,
  projectTitle = 'Submersible Micro Robot – Live Demo',
  demoLinks,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="demo-selector-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
        >
          <motion.div
            key="demo-selector-card"
            initial={{ opacity: 0, scale: 0.93, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: 'spring', stiffness: 360, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl bg-neutral-950 border border-neutral-700 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Modal Header */}
            <div className="bg-neutral-900 px-5 sm:px-6 py-4 border-b border-neutral-800 flex items-center justify-between gap-3 select-none">
              <div className="flex items-center gap-2.5 font-mono">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-white block">
                    LAUNCH PROJECT DEMO
                  </span>
                  <span className="text-[11px] text-neutral-400">
                    {projectTitle}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                title="Close (ESC)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6">
              <p className="text-xs font-mono text-neutral-400 mb-4">
                Select how you would like to open the project demo:
              </p>
              <DemoOptionsContent demoLinks={demoLinks} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
