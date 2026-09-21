import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, Download, Eye, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { HeroDataSculpture } from './HeroDataSculpture';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-[96vh] flex flex-col justify-center pt-32 pb-20 px-6 sm:px-8 border-b border-[#CFCFCF] bg-grid-paper overflow-hidden">
      {/* Ambient paper depth vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#E2E2E2]/30 to-[#E2E2E2] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Metadata Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full border border-[#CFCFCF] bg-[#E8E8E6]/90 text-[#111111] text-xs font-mono mb-8 w-fit shadow-2xs backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium">Data Analyst Intern @ SRM Technology</span>
              <span className="text-[#999999]">·</span>
              <span className="text-[#666666]">SRMIST</span>
              <span className="text-[#999999]">·</span>
              <span className="text-[#666666]">Madurai, IN</span>
            </div>

            {/* Primary Opening Statement */}
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#666666] mb-3">
              Editorial Portfolio // 2026
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-editorial text-[#111111] mb-5 leading-[0.95]">
              Pragatheesh <br className="hidden sm:inline" />
              builds<span className="text-[#666666]">.</span>
            </h1>

            {/* Core Identity Punchline */}
            <div className="text-xl sm:text-2xl font-semibold text-[#111111] tracking-tight mb-4 border-l-2 border-[#111111] pl-4 py-0.5">
              <p>Data is the profession.</p>
              <p className="text-[#666666]">Curiosity is the personality.</p>
            </div>

            {/* Human Supporting Copy */}
            <p className="text-sm sm:text-base text-[#444444] max-w-xl leading-relaxed mb-10 font-normal">
              Final-year Computer Science student specializing in Big Data Analytics, building practical analytical solutions with SQL, Excel, Power BI and Python. Focused on relational modeling, data cleaning, and actionable business intelligence without corporate jargon.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#111111] text-[#E2E2E2] font-mono text-xs uppercase tracking-wider hover:bg-[#27272a] transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded border border-[#CFCFCF] bg-white text-[#111111] text-xs font-mono uppercase tracking-wider hover:bg-[#E8E8E6] transition-all cursor-pointer shadow-2xs"
              >
                <Eye className="w-3.5 h-3.5 text-[#666666]" />
                <span>View Resume</span>
              </button>

              <a
                href="/resume.pdf"
                download="Pragatheesh_Senthil_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded border border-[#CFCFCF] bg-white/70 text-[#555555] text-xs font-mono uppercase tracking-wider hover:border-[#111111] hover:text-[#111111] transition-all shadow-2xs"
                title="Download verified resume PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF</span>
              </a>
            </div>

            {/* Quick Contact Line */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#CFCFCF] text-xs font-mono text-[#555555]">
              <span className="text-[#888888] uppercase tracking-widest text-[10px] font-bold">Connect</span>
              
              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 hover:text-[#111111] transition-colors"
                title="Call Direct"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-[#111111] font-medium">{personal.phone}</span>
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-1.5 hover:text-[#111111] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{personal.email}</span>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#111111] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#111111] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Data Sculpture Interactive Frame (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full rounded-2xl border border-[#CFCFCF] bg-[#E8E8E6]/80 p-2 shadow-sm relative overflow-hidden backdrop-blur-xs group">
              {/* Sculpture Window Tag */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#CFCFCF] bg-white/60 rounded-t-xl text-[11px] font-mono text-[#555555]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
                  <span className="font-semibold text-[#111111]">data_sculpture.3d</span>
                </div>
                <span className="text-[10px] tracking-widest uppercase text-[#777777]">
                  Interactive · Three.js
                </span>
              </div>

              {/* 3D Canvas Container */}
              <div className="relative w-full h-[360px] sm:h-[440px] flex items-center justify-center bg-[#E2E2E2] rounded-b-xl overflow-hidden">
                <HeroDataSculpture className="w-full h-full" />

                {/* Subtle Interactive Overlay Hint */}
                <div className="absolute bottom-3 right-3 text-[10px] font-mono text-[#777777] bg-white/80 border border-[#CFCFCF] px-2 py-0.5 rounded shadow-2xs pointer-events-none">
                  hover / cursor reactive
                </div>
              </div>
            </div>

            {/* Micro subtitle below sculpture */}
            <div className="w-full flex items-center justify-between px-2 pt-3 text-[11px] font-mono text-[#777777]">
              <span>Relational nodes & data orbital rings</span>
              <span>PostgreSQL · Excel · Power BI</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
