import React, { useEffect, useState } from 'react';
import { X, ExternalLink, ArrowRight, CheckCircle2, Copy, Check, Info } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './BrandIcons';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [copiedQuery, setCopiedQuery] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const stepNames = ['Raw Data', 'Cleaning', 'Transformation', 'Analysis', 'Visualization', 'Insight'];

  const handleCopyQuery = () => {
    if (project.sampleQuery) {
      navigator.clipboard.writeText(project.sampleQuery);
      setCopiedQuery(true);
      setTimeout(() => setCopiedQuery(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-4xl bg-zinc-950 border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-zinc-950/90 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-white bg-zinc-800 border border-white/10 px-2 py-0.5 rounded">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
              Case Study Investigation
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 rounded-md transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Repository</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.1] rounded-md transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[82vh] overflow-y-auto">
          {/* Header Title */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {project.subtitle}
            </p>

            {/* Tools list */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-900 border border-white/10 text-zinc-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Transparency / Collaboration Note (if any) */}
          {project.transparencyNote && (
            <div className="p-4 rounded-lg bg-zinc-900/60 border border-white/15 flex items-start gap-3">
              <Info className="w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-zinc-300 leading-relaxed font-mono">
                <span className="text-white font-semibold block mb-0.5">Project Context & Collaboration</span>
                {project.transparencyNote}
              </div>
            </div>
          )}

          {/* Section 1: The Question & The Dataset */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/[0.08]">
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                01 // The Question
              </div>
              <p className="text-sm text-zinc-200 font-medium leading-relaxed">
                "{project.question}"
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/[0.08]">
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2">
                02 // The Dataset
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.dataset}
              </p>
            </div>
          </div>

          {/* Section 2: The 6-Step Analytical Process */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                03 // The Analytical Process Pipeline
              </div>
              <span className="text-xs font-mono text-zinc-400">
                Step {activeStep + 1} of {project.workflowSteps.length}
              </span>
            </div>

            {/* Process Pipeline Navigation Badges */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {stepNames.slice(0, project.workflowSteps.length).map((name, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`px-2.5 py-2 rounded-lg text-xs font-mono transition-all text-center border ${
                    activeStep === idx
                      ? 'bg-white text-black border-white font-semibold'
                      : 'bg-zinc-900/60 text-zinc-400 border-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <span className="block text-[10px] opacity-70">0{idx + 1}</span>
                  {name}
                </button>
              ))}
            </div>

            {/* Active Step Content Card */}
            <div className="p-5 rounded-xl border border-white/10 bg-zinc-900/70 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-white mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Stage 0{activeStep + 1}: {stepNames[activeStep] || 'Execution'}</span>
              </div>
              <p className="text-sm text-zinc-200 leading-relaxed font-normal">
                {project.workflowSteps[activeStep]}
              </p>
            </div>
          </div>

          {/* Section 3: Verified Key Findings */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
              04 // Key Verified Findings
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.findings.map((finding, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-white/[0.08] bg-zinc-900/40"
                >
                  <div className="text-xs font-mono text-zinc-400 mb-1">
                    {finding.label}
                  </div>
                  <div className="text-2xl font-bold font-mono text-white mb-1.5">
                    {finding.value}
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {finding.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Sample Query (if available) */}
          {project.sampleQuery && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  05 // Analytical Query Snippet
                </div>
                <button
                  onClick={handleCopyQuery}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono text-zinc-300 bg-zinc-900 border border-white/10 hover:text-white"
                >
                  {copiedQuery ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy SQL</span>
                    </>
                  )}
                </button>
              </div>

              <div className="rounded-xl border border-white/10 bg-zinc-950 p-4 font-mono text-xs text-zinc-300 overflow-x-auto">
                <pre>{project.sampleQuery}</pre>
              </div>
            </div>
          )}

          {/* Section 5: Actual Dashboard / Chart Screenshots */}
          {project.previewImages.length > 0 && (
            <div className="space-y-4">
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                06 // Project Artifacts & Visualizations
              </div>
              <div className="space-y-4">
                {project.previewImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl overflow-hidden border border-white/10 bg-zinc-900"
                  >
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="p-3 bg-zinc-950 border-t border-white/[0.08] text-xs font-mono text-zinc-400 flex items-center justify-between">
                      <span>Figure {idx + 1}: {img.caption}</span>
                      <a
                        href={img.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-zinc-300 inline-flex items-center gap-1 text-[11px]"
                      >
                        View Full Size <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Callout */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-zinc-400">
              Source: GitHub / {project.id}
            </span>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-black bg-white hover:bg-zinc-200 rounded-lg transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Inspect Repository on GitHub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
