import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Database, Compass, Terminal, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-28 px-6 sm:px-8 border-b border-white/10 bg-[#09090b] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-xs text-white font-bold">01 //</span>
          <span className="text-xs font-mono tracking-loose-caps uppercase text-zinc-400">
            WHO I AM
          </span>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Story Column: 2 Casual Cool Paragraphs (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-editorial text-white leading-[1.02]">
                Not just a résumé<span className="text-zinc-600">.</span>
              </h2>
              <p className="text-lg sm:text-xl font-medium text-zinc-400 tracking-tight">
                {personal.aboutSubtitle}
              </p>
            </div>

            {/* Exactly 2 casual, cool, polymath paragraphs */}
            <div className="space-y-5 text-zinc-300 font-normal leading-relaxed text-base sm:text-lg">
              {personal.aboutParagraphs.map((para, idx) => (
                <p key={idx} className="text-zinc-300">
                  {para}
                </p>
              ))}
            </div>

            {/* Micro Dual-Perspective Cards */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-white/10 bg-zinc-900/40">
                <div className="flex items-center gap-2 mb-2 text-white font-mono font-bold text-xs uppercase tracking-wider">
                  <Terminal className="w-3.5 h-3.5 text-zinc-300" />
                  <span>Professionally //</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                  PostgreSQL, SQL queries, Excel data modeling, Power BI dashboards, Python data cleaning.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-white/10 bg-zinc-900/40">
                <div className="flex items-center gap-2 mb-2 text-white font-mono font-bold text-xs uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5 text-zinc-300" />
                  <span>Personally //</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                  Football, chess tactics, competitive gaming (Valorant, FC 26), and cooking experimentation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Technical Spec Sheet (No Photo) (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 sm:p-7 space-y-5 backdrop-blur-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs text-white font-semibold uppercase tracking-wider">
                  <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                  <span>At a glance //</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">
                  Profile Metadata
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-start justify-between pb-2.5 border-b border-white/[0.06]">
                  <span className="text-zinc-500">Education</span>
                  <span className="text-white font-medium text-right">SRMIST Trichy (2023–2027)</span>
                </div>
                <div className="flex items-start justify-between pb-2.5 border-b border-white/[0.06]">
                  <span className="text-zinc-500">Specialization</span>
                  <span className="text-white font-medium">Big Data Analytics</span>
                </div>
                <div className="flex items-start justify-between pb-2.5 border-b border-white/[0.06]">
                  <span className="text-zinc-500">Current Role</span>
                  <span className="text-emerald-400 font-medium text-right">Data Analyst Intern @ SRM Tech</span>
                </div>
                <div className="flex items-start justify-between pb-2.5 border-b border-white/[0.06]">
                  <span className="text-zinc-500">Academic Standing</span>
                  <span className="text-white font-medium">CGPA: 8.00 / 10.00</span>
                </div>
                <div className="flex items-start justify-between pb-2.5 border-b border-white/[0.06]">
                  <span className="text-zinc-500">Location</span>
                  <span className="text-white font-medium">Madurai, Tamil Nadu</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-zinc-500">Languages</span>
                  <span className="text-white font-medium">Tamil, English, Hindi</span>
                </div>
              </div>
            </div>

            {/* Quick Analytical Approach Callout */}
            <div className="rounded-xl border border-white/10 bg-zinc-950 p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                <Database className="w-3.5 h-3.5 text-zinc-300" />
                <span>Standard Operating Philosophy</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                "Spend 70% of time verifying nulls, edge cases, and grain mismatches before touching dashboard calculations. Clean data beats fancy charts every single time."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
