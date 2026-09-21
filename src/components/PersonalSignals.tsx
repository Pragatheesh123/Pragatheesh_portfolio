import React from 'react';
import { MapPin, GraduationCap, LineChart, Trophy, Target, Gamepad2, Utensils, Sparkles, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const PersonalSignals: React.FC = () => {
  const signalIcons: Record<string, React.ReactNode> = {
    'Data Analyst Intern @ SRM Technology': <Briefcase className="w-3.5 h-3.5 text-emerald-400" />,
    'Based in Madurai': <MapPin className="w-3.5 h-3.5 text-zinc-400" />,
    'Studying Big Data Analytics': <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />,
    'Builds with Data': <LineChart className="w-3.5 h-3.5 text-zinc-400" />,
    'Plays Football': <Trophy className="w-3.5 h-3.5 text-zinc-400" />,
    'Chess Player': <Target className="w-3.5 h-3.5 text-zinc-400" />,
    'Valorant': <Gamepad2 className="w-3.5 h-3.5 text-zinc-400" />,
    'FC 26': <Sparkles className="w-3.5 h-3.5 text-zinc-400" />,
    'Cooks': <Utensils className="w-3.5 h-3.5 text-zinc-400" />,
  };

  return (
    <div className="w-full border-b border-white/10 bg-zinc-950/80 overflow-x-auto scrollbar-none py-3.5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-start sm:justify-center gap-2 sm:gap-3 min-w-max">
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 mr-2">
          Signals //
        </span>
        {portfolioData.signals.map((signal, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-zinc-300 hover:text-white hover:border-white/25 transition-colors shadow-xs"
          >
            {signalIcons[signal] || <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />}
            <span>{signal}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
