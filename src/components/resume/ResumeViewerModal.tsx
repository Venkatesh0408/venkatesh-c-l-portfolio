import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { profileData } from '../../data/profile';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
      <div className="relative w-full max-w-5xl h-[92vh] bg-neutral-950 border border-neutral-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-sans">
        
        {/* Modal Header */}
        <div className="bg-neutral-900 px-4 sm:px-6 py-3.5 border-b border-neutral-800 flex items-center justify-between gap-3 shrink-0 select-none">
          <div className="flex items-center gap-2.5 font-mono">
            <FileText className="w-4 h-4 text-white" />
            <div>
              <span className="text-xs sm:text-sm text-white font-bold tracking-tight block">
                {profileData.name} — Resume
              </span>
              <span className="text-[10px] text-neutral-400 font-mono hidden sm:inline">
                Robotics & Automation Engineer • PDF Preview
              </span>
            </div>
          </div>

          {/* Action buttons in header */}
          <div className="flex items-center gap-2 font-mono">
            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white border border-neutral-700 text-xs flex items-center gap-1.5 transition-colors"
              title="Open PDF in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">New Tab</span>
            </a>

            <a
              href={profileData.resumeUrl}
              download="Venkatesh_CL_RESUME.pdf"
              className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-neutral-200 text-black font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer ml-1"
              title="Close viewer (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal PDF Viewer Body */}
        <div className="flex-1 bg-neutral-900 p-2 sm:p-3 overflow-hidden relative flex flex-col">
          <iframe
            src={`${profileData.resumeUrl}#toolbar=1&navpanes=0`}
            className="w-full h-full rounded-xl bg-neutral-950 border border-neutral-800"
            title="Venkatesh C L Resume Viewer"
          />

          {/* Mobile Fallback bar if PDF iframe cannot render */}
          <div className="sm:hidden mt-2 p-2 bg-neutral-950 border border-neutral-800 rounded-lg flex items-center justify-between text-xs font-mono text-neutral-300">
            <span>View or save PDF on mobile:</span>
            <a
              href={profileData.resumeUrl}
              download="Venkatesh_CL_RESUME.pdf"
              className="px-2.5 py-1 bg-white text-black font-bold rounded text-[11px]"
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* Modal Footer with download button */}
        <div className="bg-neutral-900 px-4 sm:px-6 py-3 border-t border-neutral-800 flex items-center justify-between font-mono text-xs shrink-0">
          <span className="text-[11px] text-neutral-400">
            Official Resume • Verified Academic & Engineering Credentials
          </span>

          <div className="flex items-center gap-2">
            <a
              href={profileData.resumeUrl}
              download="Venkatesh_CL_RESUME.pdf"
              className="px-4 py-1.5 rounded-lg bg-white text-black font-bold text-xs hover:bg-neutral-200 transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume PDF</span>
            </a>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 text-xs transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
