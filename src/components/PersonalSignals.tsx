import React from 'react';
import { MapPin, GraduationCap, LineChart, Trophy, Target, Gamepad2, Utensils } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const PersonalSignals: React.FC = () => {
  const signalIcons: Record<string, React.ReactNode> = {
    'Based in Madurai': <MapPin className="w-3.5 h-3.5 text-zinc-400" />,
    'Studying Big Data Analytics': <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />,
    'Builds with Data': <LineChart className="w-3.5 h-3.5 text-zinc-400" />,
    'Plays Football': <Trophy className="w-3.5 h-3.5 text-zinc-400" />,
    'Chess Player': <Target className="w-3.5 h-3.5 text-zinc-400" />,
    'Valorant': <Gamepad2 className="w-3.5 h-3.5 text-zinc-400" />,
    'Cooks': <Utensils className="w-3.5 h-3.5 text-zinc-400" />,
  };

  return (
    <div className="w-full border-y border-white/[0.08] bg-zinc-950/60 overflow-x-auto scrollbar-none py-3.5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-start sm:justify-center gap-2 sm:gap-3 min-w-max">
        <span className="text-[11px] font-mono uppercase tracking-loose-caps text-zinc-400 mr-2">
          Signals //
        </span>
        {portfolioData.signals.map((signal, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs font-mono text-zinc-300 hover:text-white hover:border-white/20 transition-colors"
          >
            {signalIcons[signal] || <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />}
            <span>{signal}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
