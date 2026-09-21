import React from 'react';
import { Trophy, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  const { achievement } = portfolioData;

  return (
    <section className="py-24 px-6 sm:px-8 border-b border-white/[0.08] relative bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-zinc-400">05 //</span>
          <span className="text-xs font-mono tracking-loose-caps uppercase text-zinc-400">
            Honors & Awards
          </span>
          <div className="h-[1px] flex-1 bg-white/[0.08]" />
        </div>

        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Things I'm proud of.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            High-intensity team competitions where rapid problem solving, clean data structuring, and clear communication won first place.
          </p>
        </div>

        {/* Hero Achievement Card */}
        <div className="relative rounded-2xl border border-white/20 bg-gradient-to-b from-zinc-900/80 to-zinc-950 p-8 sm:p-12 overflow-hidden">
          {/* Subtle background glow & watermark */}
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-96 h-96 rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />
          <div className="absolute right-8 bottom-6 opacity-5 pointer-events-none hidden md:block">
            <Trophy className="w-64 h-64 text-white" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-8">
            {/* Badge & Label */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-black font-mono text-xs font-bold uppercase tracking-wider">
                <Trophy className="w-3.5 h-3.5" />
                Winner — 1st Place
              </div>
              <span className="text-xs font-mono text-zinc-400">
                50-Hour Med-Tech Hackathon
              </span>
            </div>

            {/* Main Typographic Display */}
            <div>
              <div className="text-xs font-mono tracking-loose-caps uppercase text-zinc-400 mb-1">
                Intercollegiate Engineering Challenge
              </div>
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-none">
                Mediathon
              </h3>
              <div className="text-xl sm:text-2xl font-light text-zinc-300 mt-2">
                Hospital Operating ERP System
              </div>
            </div>

            {/* Cash Prize Strip */}
            <div className="inline-block p-4 sm:p-6 rounded-xl border border-white/15 bg-black/60 backdrop-blur-md">
              <div className="text-[11px] font-mono uppercase text-zinc-400 mb-1">
                Cash Prize Awarded //
              </div>
              <div className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight">
                {achievement.prize}
              </div>
            </div>

            {/* Description */}
            <p className="text-base text-zinc-300 leading-relaxed font-normal">
              {achievement.description}
            </p>

            {/* Key Deliverables */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              {achievement.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-zinc-300 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-zinc-400 leading-relaxed font-mono">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
