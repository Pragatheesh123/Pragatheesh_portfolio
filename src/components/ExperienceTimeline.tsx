import React from 'react';
import { Calendar, MapPin, CheckCircle2, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const experiences = portfolioData.experiences || [portfolioData.experience];

  return (
    <section id="experience" className="py-24 px-6 sm:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-zinc-400">02 //</span>
          <span className="text-xs font-mono tracking-loose-caps uppercase text-zinc-400">
            Experience Timeline
          </span>
          <div className="h-[1px] flex-1 bg-white/[0.08]" />
        </div>

        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Where I got my hands dirty.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Practical application in industry settings, bridging technical prototyping, data preprocessing, and systematic validation.
          </p>
        </div>

        {/* Timeline Item Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/15 space-y-12">
          {experiences.map((exp, expIdx) => (
            <div key={expIdx} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#09090b] border-2 border-white flex items-center justify-center">
                <div className={`w-1.5 h-1.5 rounded-full ${exp.isCurrent ? 'bg-emerald-400 animate-pulse' : 'bg-white'}`} />
              </div>

              {/* Experience Card */}
              <div className="rounded-xl border border-white/10 bg-zinc-900/30 p-6 sm:p-8 backdrop-blur-sm hover:border-white/20 transition-all">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono uppercase font-medium ${
                        exp.isCurrent 
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' 
                          : 'bg-white/10 text-white'
                      }`}>
                        {exp.isCurrent ? 'Current Internship' : 'Internship'}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        {exp.role === 'Data Analyst Intern' ? 'Data Analytics & BI' : 'Generative AI & Python'}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role} <span className="text-zinc-400 font-normal">at</span> {exp.company}
                    </h3>
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 sm:gap-1 text-xs font-mono text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      <span className={exp.isCurrent ? 'text-zinc-200 font-medium' : ''}>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-400">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed pt-5 font-normal">
                  {exp.description}
                </p>

                {/* Reported Project Metrics Grid */}
                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="py-6 border-y border-white/[0.08] my-6">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-4">
                      Reported Project Metrics //
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {exp.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-lg bg-black/40 border border-white/[0.06] flex flex-col justify-between"
                        >
                          <div>
                            <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
                              {metric.value}
                            </div>
                            <div className="text-xs font-medium text-zinc-300 mt-1">
                              {metric.label}
                            </div>
                          </div>
                          <p className="text-[11px] text-zinc-400 mt-2 font-mono leading-tight">
                            {metric.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bullet Highlights */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                      Execution & Contributions
                    </div>
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
