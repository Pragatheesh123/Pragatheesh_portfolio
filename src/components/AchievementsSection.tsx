import React from 'react';
import { Trophy, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  const { achievement } = portfolioData;

  return (
    <section className="py-28 px-6 sm:px-8 border-b border-zinc-800 bg-[#111111] text-[#E2E2E2] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-xs text-white font-bold">04 //</span>
          <span className="text-xs font-mono tracking-loose-caps uppercase text-zinc-400">
            WHAT I'VE WON
          </span>
          <div className="h-[1px] flex-1 bg-zinc-800" />
        </div>

        {/* Large Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Big Typographic Left (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-black font-mono text-xs font-bold uppercase tracking-wider">
              <Trophy className="w-3.5 h-3.5" />
              <span>First Place Winner</span>
            </div>

            <div>
              <div className="text-sm font-mono tracking-[0.25em] uppercase text-zinc-400 mb-2">
                Intercollegiate Med-Tech Hackathon
              </div>
              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-editorial text-white leading-none uppercase">
                Mediathon<span className="text-zinc-500">.</span>
              </h2>
              <p className="text-lg sm:text-xl font-light text-zinc-300 mt-3">
                Hospital Operating ERP & Clinical Diagnostic System
              </p>
            </div>

            <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed font-normal">
              {achievement.description}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
              {achievement.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-zinc-300 leading-relaxed font-mono">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bold Award & Prize Card Right (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-md rounded-2xl border border-zinc-700 bg-zinc-900/90 p-8 sm:p-10 text-center flex flex-col items-center justify-between shadow-2xl relative overflow-hidden backdrop-blur-md">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.04] rounded-full blur-2xl pointer-events-none" />

              <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                Cash Prize Awarded //
              </div>

              {/* Massive Prize Typography */}
              <div className="text-5xl sm:text-6xl lg:text-7xl font-mono font-bold text-white tracking-tight my-4">
                {achievement.prize}
              </div>

              <div className="text-xs font-mono text-zinc-400 border-t border-zinc-800 pt-4 w-full mt-2">
                Awarded across competing university engineering teams for healthcare data structuring & clinical operations design.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
