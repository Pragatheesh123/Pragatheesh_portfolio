import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Database, Compass, Award, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-28 px-6 sm:px-8 border-b border-[#CFCFCF] bg-[#E2E2E2] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-xs text-[#111111] font-bold">01 //</span>
          <span className="text-xs font-mono tracking-loose-caps uppercase text-[#666666]">
            WHO I AM
          </span>
          <div className="h-[1px] flex-1 bg-[#CFCFCF]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-editorial text-[#111111] leading-[1.02]">
                Not just a résumé<span className="text-[#666666]">.</span>
              </h2>
              <p className="text-lg sm:text-xl font-medium text-[#444444] tracking-tight">
                I'm interested in more than one kind of problem.
              </p>
            </div>

            <div className="space-y-4 text-[#333333] font-normal leading-relaxed text-base sm:text-lg">
              <p>
                I believe most real-world data problems aren't about lacking charts—they're about asking the right questions before touching the software. As a final-year B.Tech Computer Science Engineering student specializing in Big Data Analytics at SRMIST, my work centers on transforming messy, fragmented tables into transparent insights that someone can actually take action on.
              </p>
              <p>
                Professionally, my day-to-day stack centers around <strong className="text-[#111111] font-semibold">SQL, PostgreSQL, Microsoft Excel, Power BI, and Python</strong>. Whether writing multi-table CTEs to isolate compensation patterns across thousands of job listings, analyzing enterprise data as a Data Analyst Intern at SRM Technology, or building automated Excel dashboards with dynamic slicers, I take pride in data hygiene, rigorous validation, and clean presentation.
              </p>
              <p>
                Personally, I'm driven by competitive strategy and high-tempo teamwork—whether orchestrating plays on the football pitch, calculating candidate moves over a chessboard, or communicating in clutch rounds on Valorant. Analytics is just the professional extension of how I already think.
              </p>
            </div>

            {/* Editorial Dual-Perspective Cards: Professional vs Personal */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-[#CFCFCF] bg-white/70 shadow-2xs">
                <div className="flex items-center gap-2 mb-2 text-[#111111] font-mono font-bold text-xs uppercase tracking-wider">
                  <Database className="w-3.5 h-3.5 text-[#111111]" />
                  <span>Professionally //</span>
                </div>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Data Analytics, SQL, Excel, Power BI, Python, Data Cleaning, EDA, and Executive Visualization.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-[#CFCFCF] bg-white/70 shadow-2xs">
                <div className="flex items-center gap-2 mb-2 text-[#111111] font-mono font-bold text-xs uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5 text-[#111111]" />
                  <span>Personally //</span>
                </div>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Sports (Football), strategic board play (Chess), tactical coordination (Valorant, FC 26), and cooking experimentation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Monochrome Portrait & Spec Sheet (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Visual Portrait Card */}
            <div className="rounded-2xl overflow-hidden border border-[#CFCFCF] bg-white/80 p-2 shadow-2xs group">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#DCDCD9]">
                <img
                  src="/images/photot.png"
                  alt="Pragatheesh Senthil portrait"
                  className="w-full h-full object-cover grayscale contrast-105 brightness-95 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    <span>Madurai, TN</span>
                  </span>
                  <span className="text-zinc-300">9.9252° N, 78.1198° E</span>
                </div>
              </div>
            </div>

            {/* Quick Editorial Metadata Sheet */}
            <div className="rounded-xl border border-[#CFCFCF] bg-[#E8E8E6]/80 p-5 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2.5 border-b border-[#CFCFCF]/70">
                <span className="text-[#666666]">Education</span>
                <span className="text-[#111111] font-semibold text-right">SRMIST Trichy (2023–2027)</span>
              </div>
              <div className="flex items-center justify-between pb-2.5 border-b border-[#CFCFCF]/70">
                <span className="text-[#666666]">Specialization</span>
                <span className="text-[#111111] font-semibold">Big Data Analytics</span>
              </div>
              <div className="flex items-center justify-between pb-2.5 border-b border-[#CFCFCF]/70">
                <span className="text-[#666666]">Current Role</span>
                <span className="text-[#111111] font-semibold">Data Analyst Intern @ SRM Tech</span>
              </div>
              <div className="flex items-center justify-between pb-2.5 border-b border-[#CFCFCF]/70">
                <span className="text-[#666666]">CGPA</span>
                <span className="text-[#111111] font-semibold">8.00 / 10.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#666666]">Languages</span>
                <span className="text-[#111111] font-semibold">Tamil, English, Hindi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
