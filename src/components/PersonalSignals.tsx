import React from 'react';
import { MapPin, GraduationCap, LineChart, Trophy, Target, Gamepad2, Utensils, Sparkles, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const PersonalSignals: React.FC = () => {
  const signalIcons: Record<string, React.ReactNode> = {
    'Data Analyst Intern @ SRM Technology': <Briefcase className="w-3.5 h-3.5 text-emerald-700" />,
    'Based in Madurai': <MapPin className="w-3.5 h-3.5 text-[#555555]" />,
    'Studying Big Data Analytics': <GraduationCap className="w-3.5 h-3.5 text-[#555555]" />,
    'Builds with Data': <LineChart className="w-3.5 h-3.5 text-[#555555]" />,
    'Plays Football': <Trophy className="w-3.5 h-3.5 text-[#555555]" />,
    'Chess Player': <Target className="w-3.5 h-3.5 text-[#555555]" />,
    'Valorant': <Gamepad2 className="w-3.5 h-3.5 text-[#555555]" />,
    'FC 26': <Sparkles className="w-3.5 h-3.5 text-[#555555]" />,
    'Cooks': <Utensils className="w-3.5 h-3.5 text-[#555555]" />,
  };

  return (
    <div className="w-full border-b border-[#CFCFCF] bg-[#E8E8E6] overflow-x-auto scrollbar-none py-3.5">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-start sm:justify-center gap-2 sm:gap-3 min-w-max">
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#666666] mr-2">
          Signals //
        </span>
        {portfolioData.signals.map((signal, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#CFCFCF] bg-white/80 text-xs font-mono text-[#333333] hover:text-[#111111] hover:border-[#111111]/40 transition-colors shadow-2xs"
          >
            {signalIcons[signal] || <span className="w-1.5 h-1.5 rounded-full bg-[#888888]" />}
            <span>{signal}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
