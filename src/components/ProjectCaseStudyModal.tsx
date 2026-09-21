import React, { useEffect, useState } from 'react';
import { X, ExternalLink, CheckCircle2, Copy, Check, Info } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs">
      <div
        className="relative w-full max-w-4xl bg-[#E8E8E6] border border-[#CFCFCF] rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#E8E8E6]/95 backdrop-blur-md border-b border-[#CFCFCF]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#E2E2E2] bg-[#111111] px-2.5 py-0.5 rounded">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-[#666666] hidden sm:inline">
              Case Study Investigation
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#111111] bg-white border border-[#CFCFCF] hover:bg-[#111111] hover:text-[#E2E2E2] rounded transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Repository</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-[#666666] hover:text-[#111111] bg-white border border-[#CFCFCF] rounded transition-colors cursor-pointer"
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-[#555555] text-sm sm:text-base leading-relaxed">
              {project.subtitle}
            </p>

            {/* Tools list */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-white border border-[#CFCFCF] text-[#444444]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Transparency / Collaboration Note (if any) */}
          {project.transparencyNote && (
            <div className="p-4 rounded-xl bg-white border border-[#CFCFCF] flex items-start gap-3">
              <Info className="w-4 h-4 text-[#111111] mt-0.5 flex-shrink-0" />
              <div className="text-xs text-[#444444] leading-relaxed font-mono">
                <span className="text-[#111111] font-semibold block mb-0.5">Project Context & Collaboration</span>
                {project.transparencyNote}
              </div>
            </div>
          )}

          {/* Section 1: The Question & The Dataset */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-white border border-[#CFCFCF]">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-2">
                01 // The Question
              </div>
              <p className="text-sm text-[#111111] font-medium leading-relaxed">
                "{project.question}"
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#CFCFCF]">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#666666] mb-2">
                02 // The Dataset
              </div>
              <p className="text-sm text-[#444444] leading-relaxed">
                {project.dataset}
              </p>
            </div>
          </div>

          {/* Section 2: The Analytical Process */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#666666]">
                03 // The Analytical Process Pipeline
              </div>
              <span className="text-xs font-mono text-[#666666]">
                Step {activeStep + 1} of {project.workflowSteps.length}
              </span>
            </div>

            {/* Process Pipeline Navigation Badges */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {stepNames.slice(0, project.workflowSteps.length).map((name, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`px-2.5 py-2 rounded-lg text-xs font-mono transition-all text-center border cursor-pointer ${
                    activeStep === idx
                      ? 'bg-[#111111] text-[#E2E2E2] border-[#111111] font-semibold'
                      : 'bg-white text-[#666666] border-[#CFCFCF] hover:text-[#111111]'
                  }`}
                >
                  <span className="block text-[10px] opacity-70">0{idx + 1}</span>
                  {name}
                </button>
              ))}
            </div>

            {/* Active Step Content Card */}
            <div className="p-5 rounded-xl border border-[#CFCFCF] bg-white">
              <div className="flex items-center gap-2 text-xs font-mono text-[#111111] mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold">Stage 0{activeStep + 1}: {stepNames[activeStep] || 'Execution'}</span>
              </div>
              <p className="text-sm text-[#333333] leading-relaxed font-normal">
                {project.workflowSteps[activeStep]}
              </p>
            </div>
          </div>

          {/* Section 3: Verified Key Findings */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#666666]">
              04 // Key Verified Findings
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.findings.map((finding, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-[#CFCFCF] bg-white"
                >
                  <div className="text-xs font-mono text-[#666666] mb-1">
                    {finding.label}
                  </div>
                  <div className="text-xl font-bold font-mono text-[#111111] mb-1">
                    {finding.value}
                  </div>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {finding.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Sample Code / SQL Query */}
          {project.sampleQuery && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#666666]">
                  05 // Representative SQL Query
                </div>
                <button
                  onClick={handleCopyQuery}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#111111] hover:text-[#555555] cursor-pointer"
                >
                  {copiedQuery ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">Copied SQL</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy query</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[#111111] text-[#E2E2E2] font-mono text-xs overflow-x-auto border border-zinc-800">
                <pre className="leading-relaxed">
                  {project.sampleQuery}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
