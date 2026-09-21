import React from 'react';
import { BookOpen, Code2, Gamepad2, Lightbulb } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const CurrentlySection: React.FC = () => {
  const { currently } = portfolioData;

  const items = [
    {
      label: 'Learning',
      value: currently.learning,
      icon: <BookOpen className="w-4 h-4 text-zinc-400" />
    },
    {
      label: 'Building',
      value: currently.building,
      icon: <Code2 className="w-4 h-4 text-zinc-400" />
    },
    {
      label: 'Playing',
      value: currently.playing,
      icon: <Gamepad2 className="w-4 h-4 text-zinc-400" />
    },
    {
      label: 'Thinking About',
      value: currently.thinking,
      icon: <Lightbulb className="w-4 h-4 text-zinc-400" />
    }
  ];

  return (
    <section className="py-16 px-6 sm:px-8 border-b border-white/[0.08] bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-zinc-900/20 backdrop-blur-sm">
          {/* Header */}
          <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono tracking-loose-caps uppercase text-zinc-300 font-semibold">
                Currently // Live Radar
              </span>
            </div>

            <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
              Continuously iterating
            </span>
          </div>

          {/* Grid of Current Focus Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-white/[0.06] bg-black/40 flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                <p className="text-sm font-medium text-white leading-snug">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
