import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 sm:px-8 bg-[#E8E8E6] border-t border-[#CFCFCF] text-[#666666] font-mono text-xs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        {/* Left Side: Brand Identity */}
        <div className="space-y-1.5">
          <div className="text-base font-bold text-[#111111] tracking-tight font-sans">
            PRAGATHEESH.
          </div>
          <div className="text-[#555555]">
            DATA ANALYST · BIG DATA ANALYTICS
          </div>
          <div className="text-[#777777] text-[11px]">
            MADURAI, INDIA
          </div>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap items-center gap-6 text-[#555555]">
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#111111] transition-colors"
          >
            GitHub
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#111111] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="hover:text-[#111111] transition-colors"
          >
            Email
          </a>
          <a
            href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`}
            className="hover:text-[#111111] transition-colors"
          >
            {PORTFOLIO_DATA.personal.phone}
          </a>
          <a
            href="/resume.pdf"
            download="Pragatheesh_Senthil_Resume.pdf"
            className="hover:text-[#111111] transition-colors"
          >
            Resume (PDF)
          </a>
        </div>

        {/* Right Side: Copyright & Scroll to Top */}
        <div className="flex items-center gap-6">
          <span className="text-[#777777]">
            © 2026 PRAGATHEESH
          </span>

          <button
            onClick={scrollToTop}
            className="p-2 rounded border border-[#CFCFCF] bg-white hover:bg-[#111111] hover:text-[#E2E2E2] text-[#111111] transition-colors cursor-pointer shadow-2xs"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
