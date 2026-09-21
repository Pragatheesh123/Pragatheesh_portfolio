import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Compass } from 'lucide-react';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-24 px-6 sm:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-zinc-400">01 //</span>
          <span className="text-xs font-mono tracking-loose-caps uppercase text-zinc-400">
            About Pragatheesh
          </span>
          <div className="h-[1px] flex-1 bg-white/[0.08]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {personal.aboutHeading}
            </h2>

            <div className="space-y-4 text-zinc-300 font-normal leading-relaxed text-base sm:text-lg">
              {personal.aboutParagraphs.map((para, idx) => (
                <p key={idx} className="text-zinc-300">
                  {para}
                </p>
              ))}
            </div>

            {/* Quick Principles / Real Approach */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-white/[0.08] bg-zinc-950/40">
                <div className="flex items-center gap-2 mb-2 text-white font-medium text-sm">
                  <Terminal className="w-4 h-4 text-zinc-400" />
                  <span>Dirty Data First</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  I spend 70% of my project time auditing nulls, edge cases, and grain mismatches before writing dashboard calculations.
                </p>
              </div>

              <div className="p-4 rounded-lg border border-white/[0.08] bg-zinc-950/40">
                <div className="flex items-center gap-2 mb-2 text-white font-medium text-sm">
                  <Compass className="w-4 h-4 text-zinc-400" />
                  <span>Context Over Clutter</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  A dashboard shouldn't require an instruction manual. Every KPI needs a clear comparison point or decision threshold.
                </p>
              </div>
            </div>
          </div>

          {/* Authentic Portrait & Metadata Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Visual Portrait Card */}
            <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-zinc-900/60 p-2">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-zinc-950">
                <img
                  src="/images/photot.png"
                  alt="Pragatheesh Senthil portrait"
                  className="w-full h-full object-cover grayscale contrast-105 brightness-95 group-hover:scale-[1.02] group-hover:grayscale-0 transition-all duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Corner Coordinates Tag */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-zinc-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-white/10">
                  <span>Madurai · SRMIST</span>
                  <span className="text-zinc-400">9.9252° N, 78.1198° E</span>
                </div>
              </div>
            </div>

            {/* Quick Context Snapshot */}
            <div className="rounded-xl border border-white/[0.08] bg-zinc-900/30 p-5 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs font-mono">
                <span className="text-zinc-400">Academic Standing</span>
                <span className="text-white font-medium">SRMIST Trichy</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs font-mono">
                <span className="text-zinc-400">Specialization</span>
                <span className="text-white font-medium">Big Data Analytics</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs font-mono">
                <span className="text-zinc-400">CGPA (2023–Present)</span>
                <span className="text-white font-medium">8.00 / 10.00</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Languages</span>
                <span className="text-white font-medium">Tamil, English, Hindi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
