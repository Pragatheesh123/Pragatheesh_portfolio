import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';
import { ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 sm:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-zinc-400">03 //</span>
          <span className="text-xs font-mono tracking-loose-caps uppercase text-zinc-400">
            Selected Works
          </span>
          <div className="h-[1px] flex-1 bg-white/[0.08]" />
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
              A few things I've built.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
              Real-world exploratory data analysis, relational SQL querying, and interactive reporting. Click any project to inspect the full case study investigation.
            </p>
          </div>

          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <span>View all repos on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {portfolioData.projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Case Study Modal */}
        <ProjectCaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
