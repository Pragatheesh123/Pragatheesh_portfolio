import React, { useState } from 'react';
import { Trophy, Target, Gamepad2, Flame, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const BeyondDataSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'trophy':
        return <Trophy className="w-5 h-5 text-zinc-300" />;
      case 'target':
        return <Target className="w-5 h-5 text-zinc-300" />;
      case 'gamepad':
        return <Gamepad2 className="w-5 h-5 text-zinc-300" />;
      case 'flame':
        return <Flame className="w-5 h-5 text-zinc-300" />;
      default:
        return null;
    }
  };

  return (
    <section id="beyond" className="py-24 px-6 sm:px-8 border-b border-white/[0.08] relative bg-zinc-950/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-zinc-400">07 //</span>
          <span className="text-xs font-mono tracking-loose-caps uppercase text-zinc-400">
            Beyond The Dashboard
          </span>
          <div className="h-[1px] flex-1 bg-white/[0.08]" />
        </div>

        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            The things I do when I'm not staring at a dataset.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Analytical professionally. Curious personally. Because there is far more to life than spreadsheets and query outputs.
          </p>
        </div>

        {/* 4-Card Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.beyond.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
              className="group cursor-pointer rounded-xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-white/20 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-zinc-100 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-medium text-zinc-300 italic mb-4">
                  "{item.tagline}"
                </p>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-zinc-300 transition-colors">
                <span>Personal Mindset</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
