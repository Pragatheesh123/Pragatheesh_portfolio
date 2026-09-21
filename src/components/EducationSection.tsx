import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 px-6 sm:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-zinc-400">06 //</span>
          <span className="text-xs font-mono tracking-loose-caps uppercase text-zinc-400">
            Education
          </span>
          <div className="h-[1px] flex-1 bg-white/[0.08]" />
        </div>

        {/* Compact Editorial Layout */}
        <div className="rounded-xl border border-white/10 bg-zinc-900/30 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 backdrop-blur-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>{education.duration} (Expected)</span>
              <span>·</span>
              <MapPin className="w-3.5 h-3.5" />
              <span>{education.location}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {education.institution}
            </h3>

            <p className="text-sm sm:text-base text-zinc-300">
              {education.degree} — <span className="text-white font-medium">{education.specialization}</span>
            </p>

            <p className="text-xs font-mono text-zinc-400 pt-1">
              Core Coursework: Relational Database Systems, Big Data Engineering, Statistical Methods, Data Structures & Algorithms
            </p>
          </div>

          {/* CGPA Callout Badge */}
          <div className="flex-shrink-0 p-5 rounded-xl border border-white/15 bg-black/60 text-center min-w-[160px]">
            <div className="text-[10px] font-mono uppercase text-zinc-400 mb-0.5">
              Cumulative CGPA
            </div>
            <div className="text-3xl font-mono font-bold text-white tracking-tight">
              8.00<span className="text-xs text-zinc-500 font-normal"> / 10</span>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 mt-1 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>Verified Standing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
