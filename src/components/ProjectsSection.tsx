import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';
import { ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-28 px-6 sm:px-8 border-b border-[#CFCFCF] bg-[#E2E2E2] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-xs text-[#111111] font-bold">03 //</span>
          <span className="text-xs font-mono tracking-loose-caps uppercase text-[#666666]">
            WHAT I BUILT
          </span>
          <div className="h-[1px] flex-1 bg-[#CFCFCF]" />
        </div>

        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-mono tracking-[0.2em] uppercase text-[#666666] mb-2">
              Selected Works & Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-editorial text-[#111111] mb-3">
              A few things I've built<span className="text-[#666666]">.</span>
            </h2>
            <p className="text-[#555555] text-sm sm:text-base max-w-2xl leading-relaxed font-normal">
              Real-world exploratory data analysis, relational PostgreSQL schemas, and dynamic spreadsheet modeling. Click any project to inspect the pipeline and findings.
            </p>
          </div>

          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#111111] hover:text-[#555555] border-b border-[#111111] pb-1 transition-colors self-start md:self-auto"
          >
            <span>View all repos on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {portfolioData.projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Deep Dive Case Study Modal */}
        <ProjectCaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
