import React from 'react';
import { ArrowUpRight, Database, ExternalLink, Code2 } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const isFeatured = project.featured;

  return (
    <div
      className={`group rounded-2xl border border-[#CFCFCF] bg-white/85 hover:bg-white hover:border-[#111111]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden relative shadow-2xs hover:shadow-md ${
        isFeatured ? 'lg:col-span-12' : 'lg:col-span-6'
      }`}
    >
      {/* Top Meta Bar */}
      <div className="p-6 sm:p-8 flex flex-col gap-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-xs sm:text-sm font-bold text-[#111111] border-b-2 border-[#111111] pb-0.5">
              {project.number} // CASE STUDY
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111] mt-3 group-hover:translate-x-1 transition-transform duration-200">
              {project.title}
            </h3>
          </div>

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono text-[#111111] bg-[#E8E8E6] hover:bg-[#111111] hover:text-[#E2E2E2] border border-[#CFCFCF] transition-all whitespace-nowrap shadow-2xs"
            title="Open GitHub Repository"
          >
            <span>Open repo</span>
            <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Tools Badges */}
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono uppercase tracking-wider text-[#444444] bg-[#E8E8E6]/80 px-2.5 py-1 rounded border border-[#CFCFCF]"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Short Description */}
        <p className="text-sm text-[#444444] leading-relaxed font-normal">
          {project.subtitle}
        </p>

        {/* Key Findings Preview */}
        {project.findings && project.findings.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {project.findings.slice(0, 3).map((f, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-[#E8E8E6]/70 border border-[#CFCFCF]">
                <div className="text-base sm:text-lg font-mono font-bold text-[#111111]">
                  {f.value}
                </div>
                <div className="text-[11px] font-mono text-[#666666] line-clamp-1 mt-0.5">
                  {f.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Visual Preview / Abstract Data Visualization Container */}
      <div className="px-6 pb-6 sm:px-8 sm:pb-8">
        <div className="w-full rounded-xl border border-[#CFCFCF] bg-[#E2E2E2] overflow-hidden relative group-hover:border-[#111111]/30 transition-colors">
          {project.previewImages && project.previewImages.length > 0 ? (
            <div className="relative aspect-[16/8] sm:aspect-[21/9] overflow-hidden bg-[#DCDCD9]">
              <img
                src={project.previewImages[0].url}
                alt={project.title}
                className="w-full h-full object-cover grayscale contrast-125 opacity-85 group-hover:scale-[1.02] group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 text-[11px] font-mono text-white bg-black/80 px-2.5 py-1 rounded border border-white/20 backdrop-blur-xs">
                {project.previewImages[0].caption}
              </div>
            </div>
          ) : project.sampleQuery ? (
            <div className="p-4 font-mono text-xs text-[#333333] bg-[#E8E8E6] overflow-x-auto">
              <div className="flex items-center justify-between text-[11px] text-[#666666] pb-2 mb-2 border-b border-[#CFCFCF]">
                <span>// Verified SQL Logic</span>
                <span>PostgreSQL</span>
              </div>
              <pre className="text-[#111111] leading-relaxed font-mono text-[11px]">
                {project.sampleQuery.split('\n').slice(0, 5).join('\n')}
                {'\n-- ...'}
              </pre>
            </div>
          ) : (
            /* Elegant Abstract Data Visualization Placeholder (No fake dashboard screenshots) */
            <div className="p-6 flex flex-col justify-between min-h-[160px] bg-[#E8E8E6]/60">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#666666]">
                <span>RELATIONAL SCHEMA & PIPELINE</span>
                <span>55+ MODULAR FEATURES</span>
              </div>

              <div className="py-4 flex items-center justify-around">
                <div className="h-14 w-1 bg-[#111111] rounded-full" />
                <div className="h-20 w-1 bg-[#555555] rounded-full" />
                <div className="h-10 w-1 bg-[#888888] rounded-full" />
                <div className="h-24 w-1 bg-[#111111] rounded-full" />
                <div className="h-16 w-1 bg-[#666666] rounded-full" />
                <div className="h-28 w-1 bg-[#111111] rounded-full" />
                <div className="h-12 w-1 bg-[#777777] rounded-full" />
              </div>

              <div className="text-[11px] font-mono text-[#555555] text-center border-t border-[#CFCFCF] pt-2">
                Abstract metric distribution · Click to inspect full architecture
              </div>
            </div>
          )}
        </div>

        {/* Bottom Interactive Modal Trigger Bar */}
        <div className="mt-4 pt-3 border-t border-[#CFCFCF]/60 flex items-center justify-between">
          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#111111] hover:text-[#444444] transition-colors cursor-pointer"
          >
            <span>Read full case study</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#666666] hover:text-[#111111] transition-colors"
          >
            Open repository →
          </a>
        </div>
      </div>
    </div>
  );
};
