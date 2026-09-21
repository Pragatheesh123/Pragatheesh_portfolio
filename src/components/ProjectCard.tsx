import React from 'react';
import { ArrowUpRight, Database } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const isFeatured = project.featured;

  return (
    <div
      onClick={() => onSelect(project)}
      className={`group cursor-pointer rounded-xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-white/25 transition-all duration-300 flex flex-col justify-between overflow-hidden relative ${
        isFeatured ? 'lg:col-span-12' : 'lg:col-span-6'
      }`}
    >
      {/* Top Meta Bar */}
      <div className="p-6 sm:p-8 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-white bg-zinc-800 border border-white/10 px-2.5 py-1 rounded">
              {project.number}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.slice(0, 3).map((tool, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]"
                >
                  {tool}
                </span>
              ))}
              {project.tools.length > 3 && (
                <span className="text-[11px] font-mono text-zinc-500 py-0.5">
                  +{project.tools.length - 3} more
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
            <span>Explore analysis</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-zinc-100 transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
            {project.subtitle}
          </p>
        </div>

        {/* Featured Project Highlights (for Project 01) */}
        {isFeatured && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {project.findings.map((f, i) => (
              <div key={i} className="p-3 rounded-lg bg-zinc-950/60 border border-white/[0.06]">
                <div className="text-lg font-mono font-bold text-white mb-0.5">
                  {f.value}
                </div>
                <div className="text-[11px] font-mono text-zinc-400 line-clamp-1">
                  {f.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Visual Preview / Code Snapshot */}
      <div className="px-6 pb-6 sm:px-8 sm:pb-8">
        <div className="w-full rounded-lg border border-white/[0.08] bg-zinc-950 overflow-hidden relative">
          {project.previewImages.length > 0 ? (
            <div className="relative aspect-[16/8] sm:aspect-[21/9] overflow-hidden bg-zinc-900">
              <img
                src={project.previewImages[0].url}
                alt={project.title}
                className="w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 text-[11px] font-mono text-zinc-400 bg-black/80 px-2.5 py-1 rounded border border-white/10 backdrop-blur-sm">
                {project.previewImages[0].caption}
              </div>
            </div>
          ) : project.sampleQuery ? (
            <div className="p-4 font-mono text-xs text-zinc-400 overflow-x-auto max-h-48 bg-zinc-950">
              <div className="text-[10px] text-zinc-600 uppercase mb-2">// SQL Query Extraction</div>
              <pre className="text-zinc-300 leading-relaxed font-mono">
                {project.sampleQuery.split('\n').slice(0, 7).join('\n')}
                {'\n...'}
              </pre>
            </div>
          ) : (
            <div className="p-6 flex flex-col items-center justify-center text-center gap-2 min-h-[140px] bg-zinc-950/80">
              <Database className="w-8 h-8 text-zinc-600 mb-1" />
              <span className="text-xs font-mono text-zinc-400">
                End-to-end Data Architecture & Pipeline
              </span>
              <span className="text-[11px] text-zinc-400">
                Click to examine dataset, schema models, and findings
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
