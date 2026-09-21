import React from 'react';
import { Trophy, Target, Gamepad2, Flame, Sparkles, UtensilsCrossed } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const BeyondDataSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'football':
        return <Trophy className="w-4 h-4 text-[#111111]" />;
      case 'chess':
        return <Target className="w-4 h-4 text-[#111111]" />;
      case 'valorant':
        return <Gamepad2 className="w-4 h-4 text-[#111111]" />;
      case 'fc26':
        return <Sparkles className="w-4 h-4 text-[#111111]" />;
      case 'cooking':
        return <UtensilsCrossed className="w-4 h-4 text-[#111111]" />;
      default:
        return <Flame className="w-4 h-4 text-[#111111]" />;
    }
  };

  return (
    <section id="beyond" className="py-28 px-6 sm:px-8 border-b border-[#CFCFCF] bg-[#E2E2E2] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-xs text-[#111111] font-bold">05 //</span>
          <span className="text-xs font-mono tracking-loose-caps uppercase text-[#666666]">
            WHAT I'M LIKE OUTSIDE WORK
          </span>
          <div className="h-[1px] flex-1 bg-[#CFCFCF]" />
        </div>

        {/* Section Title & Narrative Intro */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono tracking-[0.2em] uppercase text-[#666666] mb-2">
            Personal Pursuits & Breadth
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-editorial text-[#111111] mb-4 leading-[1.02]">
            Beyond the Dashboard<span className="text-[#666666]">.</span>
          </h2>
          <p className="text-lg sm:text-xl font-medium text-[#111111] tracking-tight mb-3">
            The things I do when I'm not staring at data.
          </p>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
            Because there is far more to life than dashboards. Strategy, high-tempo teamwork, calculated decisions, and creative craft outside the dataset.
          </p>
        </div>

        {/* Dynamic Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.beyond.map((item) => {
            const isCooking = item.id === 'cooking';
            return (
              <div
                key={item.id}
                className={`rounded-2xl border border-[#CFCFCF] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-2xs hover:shadow-md ${
                  isCooking
                    ? 'bg-[#E8E8E6] md:col-span-2 lg:col-span-2 border-[#111111]/40'
                    : 'bg-white/85 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-[#E8E8E6] border border-[#CFCFCF]">
                      {getIcon(item.id)}
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#666666] bg-white/70 px-2.5 py-1 rounded border border-[#CFCFCF]">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <div className="text-xs font-mono text-[#555555] italic mb-4 pb-2 border-b border-[#CFCFCF]/50">
                    "{item.tagline}"
                  </div>

                  <p className="text-sm text-[#333333] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {isCooking && (
                  <div className="mt-6 pt-4 border-t border-[#CFCFCF] flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#111111]">
                      Current signature: white-sauce pasta
                    </span>
                    <span className="text-[11px] font-mono text-[#666666]">
                      Tested & refined in the kitchen
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
