import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const isFeatured = project.featured;

  return (
    <div
      className={`group rounded-2xl border border-white/10 bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-white/25 transition-all duration-300 flex flex-col justify-between overflow-hidden relative shadow-lg ${
        isFeatured ? 'lg:col-span-12' : 'lg:col-span-6'
      }`}
    >
      {/* Top Meta Bar */}
      <div className="p-6 sm:p-8 flex flex-col gap-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="font-mono text-xs sm:text-sm font-bold text-white border-b-2 border-white pb-0.5">
              {project.number} // CASE STUDY
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-3 group-hover:translate-x-1 transition-transform duration-200">
              {project.title}
            </h3>
          </div>

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono text-zinc-300 bg-zinc-800 hover:bg-white hover:text-black border border-white/10 transition-all whitespace-nowrap shadow-xs"
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
              className="text-[11px] font-mono uppercase tracking-wider text-zinc-300 bg-zinc-950 px-2.5 py-1 rounded border border-white/10"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Short Description */}
        <p className="text-sm text-zinc-300 leading-relaxed font-normal">
          {project.subtitle}
        </p>

        {/* Key Findings Preview */}
        {project.findings && project.findings.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {project.findings.slice(0, 3).map((f, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-zinc-950/70 border border-white/10">
                <div className="text-base sm:text-lg font-mono font-bold text-white">
                  {f.value}
                </div>
                <div className="text-[11px] font-mono text-zinc-400 line-clamp-1 mt-0.5">
                  {f.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Visual Preview / SQL Query / Abstract Graph */}
      <div className="px-6 pb-6 sm:px-8 sm:pb-8">
        <div className="w-full rounded-xl border border-white/10 bg-zinc-950 overflow-hidden relative group-hover:border-white/20 transition-colors">
          {project.previewImages && project.previewImages.length > 0 ? (
            <div className="relative aspect-[16/8] sm:aspect-[21/9] overflow-hidden bg-zinc-900">
              <img
                src={project.previewImages[0].url}
                alt={project.title}
                className="w-full h-full object-cover grayscale contrast-125 opacity-75 group-hover:scale-[1.02] group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 text-[11px] font-mono text-white bg-black/80 px-2.5 py-1 rounded border border-white/20 backdrop-blur-xs">
                {project.previewImages[0].caption}
              </div>
            </div>
          ) : project.sampleQuery ? (
            <div className="p-4 font-mono text-xs text-zinc-300 bg-zinc-950 overflow-x-auto">
              <div className="flex items-center justify-between text-[11px] text-zinc-500 pb-2 mb-2 border-b border-white/10">
                <span>// Verified SQL Logic</span>
                <span>PostgreSQL</span>
              </div>
              <pre className="text-zinc-200 leading-relaxed font-mono text-[11px]">
                {project.sampleQuery.split('\n').slice(0, 5).join('\n')}
                {'\n-- ...'}
              </pre>
            </div>
          ) : (
            <div className="p-6 flex flex-col justify-between min-h-[160px] bg-zinc-950/60">
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>RELATIONAL SCHEMA & PIPELINE</span>
                <span>55+ MODULAR FEATURES</span>
              </div>

              <div className="py-4 flex items-center justify-around">
                <div className="h-14 w-1 bg-white rounded-full" />
                <div className="h-20 w-1 bg-zinc-400 rounded-full" />
                <div className="h-10 w-1 bg-zinc-600 rounded-full" />
                <div className="h-24 w-1 bg-white rounded-full" />
                <div className="h-16 w-1 bg-zinc-500 rounded-full" />
                <div className="h-28 w-1 bg-white rounded-full" />
                <div className="h-12 w-1 bg-zinc-600 rounded-full" />
              </div>

              <div className="text-[11px] font-mono text-zinc-400 text-center border-t border-white/10 pt-2">
                Abstract metric distribution · Click to inspect full architecture
              </div>
            </div>
          )}
        </div>

        {/* Bottom Interactive Modal Trigger */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-white hover:text-zinc-300 transition-colors cursor-pointer"
          >
            <span>Read full case study</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            Open repository →
          </a>
        </div>
      </div>
    </div>
  );
};
