import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[88vh] bg-zinc-950 border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-zinc-900/90 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-md bg-white/10 text-white">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">
                {portfolioData.personal.name} — Resume
              </h3>
              <p className="text-[11px] font-mono text-zinc-400">
                Verified Document · PDF Format
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-zinc-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-md transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            <a
              href="/resume.pdf"
              download="Pragatheesh_Senthil_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-black bg-white hover:bg-zinc-200 rounded-md transition-colors shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.1] rounded-md transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal PDF Viewer / Frame */}
        <div className="flex-1 w-full bg-zinc-900 relative">
          <iframe
            src="/resume.pdf#toolbar=1"
            title="Pragatheesh Senthil Resume"
            className="w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  );
};
