import React from 'react';
import { Calendar, MapPin, CheckCircle2, BookOpen, Code2, Gamepad2, Lightbulb } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const { education, currently } = portfolioData;

  const radarItems = [
    {
      label: 'Learning',
      value: currently.learning,
      icon: <BookOpen className="w-3.5 h-3.5 text-[#111111]" />
    },
    {
      label: 'Building',
      value: currently.building,
      icon: <Code2 className="w-3.5 h-3.5 text-[#111111]" />
    },
    {
      label: 'Playing',
      value: currently.playing,
      icon: <Gamepad2 className="w-3.5 h-3.5 text-[#111111]" />
    },
    {
      label: 'Thinking About',
      value: currently.thinking,
      icon: <Lightbulb className="w-3.5 h-3.5 text-[#111111]" />
    }
  ];

  return (
    <section id="education" className="py-28 px-6 sm:px-8 border-b border-[#CFCFCF] bg-[#E8E8E6] relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#111111] font-bold">06 //</span>
          <span className="text-xs font-mono tracking-loose-caps uppercase text-[#666666]">
            WHERE I'M GOING
          </span>
          <div className="h-[1px] flex-1 bg-[#CFCFCF]" />
        </div>

        {/* Section Heading */}
        <div className="max-w-2xl">
          <div className="text-xs font-mono tracking-[0.2em] uppercase text-[#666666] mb-2">
            Academic Foundation & Live Focus
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-editorial text-[#111111]">
            Engineering the next step<span className="text-[#666666]">.</span>
          </h2>
        </div>

        {/* Compact Education Card */}
        <div className="rounded-2xl border border-[#CFCFCF] bg-white/85 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xs">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#666666]">
              <Calendar className="w-3.5 h-3.5 text-[#888888]" />
              <span>{education.duration} (Expected)</span>
              <span>·</span>
              <MapPin className="w-3.5 h-3.5 text-[#888888]" />
              <span>{education.location}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight">
              {education.institution}
            </h3>

            <p className="text-sm sm:text-base text-[#444444]">
              {education.degree} — <span className="text-[#111111] font-semibold">{education.specialization}</span>
            </p>

            <p className="text-xs font-mono text-[#666666] pt-1">
              Core Coursework: Relational Database Management Systems, Big Data Engineering, Statistical Methods, Python Programming
            </p>
          </div>

          {/* CGPA Callout Badge */}
          <div className="flex-shrink-0 p-5 rounded-xl border border-[#CFCFCF] bg-[#E8E8E6] text-center min-w-[170px]">
            <div className="text-[10px] font-mono uppercase text-[#666666] mb-0.5">
              Cumulative CGPA
            </div>
            <div className="text-3xl font-mono font-bold text-[#111111] tracking-tight">
              {education.cgpa}
            </div>
            <div className="text-[11px] font-mono text-emerald-700 mt-1 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Verified Standing</span>
            </div>
          </div>
        </div>

        {/* Live Radar Focus Grid */}
        <div className="rounded-2xl border border-[#CFCFCF] bg-white/60 p-6 sm:p-8 shadow-2xs">
          <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#CFCFCF]/70">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="text-xs font-mono tracking-loose-caps uppercase text-[#111111] font-bold">
                Currently // Live Radar
              </span>
            </div>

            <span className="text-xs font-mono text-[#777777] hidden sm:inline">
              Continuously iterating & exploring
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {radarItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-[#CFCFCF] bg-[#E8E8E6]/70 flex flex-col justify-between min-h-[120px]"
              >
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#666666] mb-2">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#111111] leading-snug">
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
