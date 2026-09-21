import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, Download, Eye, Mail, Phone, Terminal, Database, FileSpreadsheet, BarChart2, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'sql' | 'metrics' | 'pipeline'>('sql');
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-[94vh] flex flex-col justify-center pt-28 pb-16 px-6 sm:px-8 border-b border-white/10 bg-[#09090b] bg-grid-pattern overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-zinc-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Metadata Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-950/90 text-zinc-300 text-xs font-mono mb-7 w-fit shadow-lg backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white">Data Analyst Intern @ SRM Technology</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">SRMIST Big Data</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">Madurai, IN</span>
            </div>

            {/* Primary Opening Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold tracking-editorial text-white mb-4 leading-none">
              Pragatheesh <br className="hidden sm:inline" />
              builds<span className="text-zinc-600">.</span>
            </h1>

            {/* Core Identity Punchline */}
            <div className="text-xl sm:text-2xl font-semibold text-zinc-200 tracking-tight mb-4 border-l-2 border-white pl-4 py-0.5">
              <p>Data is the profession.</p>
              <p className="text-zinc-400 font-normal">Curiosity is the personality.</p>
            </div>

            {/* Casual, Unpretentious Supporting Copy */}
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed mb-9 font-normal">
              Final-year Computer Science student specializing in Big Data Analytics, building practical analytical solutions with SQL, Excel, Power BI, and Python. Turning messy, fragmented data into useful, straightforward decisions.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-zinc-200 transition-all cursor-pointer shadow-lg hover:shadow-white/10"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded border border-zinc-700 bg-zinc-900/80 text-zinc-200 text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 hover:text-white transition-all cursor-pointer shadow-sm"
              >
                <Eye className="w-3.5 h-3.5 text-zinc-400" />
                <span>View Resume</span>
              </button>

              <a
                href="/resume.pdf"
                download="Pragatheesh_Senthil_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded border border-zinc-800 bg-zinc-950 text-zinc-400 text-xs font-mono uppercase tracking-wider hover:border-zinc-600 hover:text-white transition-all shadow-sm"
                title="Download verified resume PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF</span>
              </a>
            </div>

            {/* Quick Contact Row */}
            <div className="flex flex-wrap items-center gap-5 pt-6 border-t border-zinc-900 text-xs font-mono text-zinc-400">
              <span className="text-zinc-600 uppercase tracking-widest text-[10px] font-bold">Connect</span>
              
              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                title="Direct Phone Call"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-zinc-200">{personal.phone}</span>
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{personal.email}</span>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-2.5 h-2.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Analytical Workbench (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-zinc-800 bg-[#0c0d10] p-1 shadow-2xl overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-zinc-800/80 bg-zinc-950/70 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="ml-1.5 text-zinc-300 font-semibold">pragatheesh.analytics_env</span>
                </div>
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                  SQL · EXCEL · POWER BI
                </span>
              </div>

              {/* Workbench Tab Switcher */}
              <div className="flex border-b border-zinc-800/60 bg-zinc-950/40 text-[11px] font-mono">
                <button
                  onClick={() => setActiveTab('sql')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 transition-colors border-r border-zinc-800/60 cursor-pointer ${
                    activeTab === 'sql'
                      ? 'bg-[#111215] text-white border-b-2 border-b-white font-medium'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <Terminal className="w-3 h-3 text-zinc-400" />
                  <span>top_paying_query.sql</span>
                </button>
                <button
                  onClick={() => setActiveTab('metrics')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 transition-colors border-r border-zinc-800/60 cursor-pointer ${
                    activeTab === 'metrics'
                      ? 'bg-[#111215] text-white border-b-2 border-b-white font-medium'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <BarChart2 className="w-3 h-3 text-zinc-400" />
                  <span>benchmark_kpis.xlsx</span>
                </button>
                <button
                  onClick={() => setActiveTab('pipeline')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 transition-colors cursor-pointer ${
                    activeTab === 'pipeline'
                      ? 'bg-[#111215] text-white border-b-2 border-b-white font-medium'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <Database className="w-3 h-3 text-zinc-400" />
                  <span>pipeline.flow</span>
                </button>
              </div>

              {/* Workbench Body Content */}
              <div className="p-4 text-xs font-mono min-h-[300px] bg-[#0c0d10] flex flex-col justify-between">
                {activeTab === 'sql' && (
                  <div className="space-y-2">
                    <div className="text-zinc-500">// Real query from PostgreSQL Job Market Analysis</div>
                    <div className="text-zinc-300">
                      <span className="text-purple-400">WITH</span> top_skills <span className="text-purple-400">AS</span> (
                    </div>
                    <div className="pl-4 text-zinc-300">
                      <span className="text-purple-400">SELECT</span> s.skills, <span className="text-yellow-400">COUNT</span>(*) <span className="text-purple-400">AS</span> demand_count,
                    </div>
                    <div className="pl-8 text-zinc-300">
                      <span className="text-yellow-400">ROUND</span>(<span className="text-yellow-400">AVG</span>(j.salary_year_avg), 0) <span className="text-purple-400">AS</span> avg_salary
                    </div>
                    <div className="pl-4 text-zinc-300">
                      <span className="text-purple-400">FROM</span> job_postings_fact j
                    </div>
                    <div className="pl-4 text-zinc-300">
                      <span className="text-purple-400">INNER JOIN</span> skills_job_dim sj <span className="text-purple-400">ON</span> j.job_id = sj.job_id
                    </div>
                    <div className="pl-4 text-zinc-300">
                      <span className="text-purple-400">INNER JOIN</span> skills_dim s <span className="text-purple-400">ON</span> sj.skill_id = s.skill_id
                    </div>
                    <div className="pl-4 text-zinc-300">
                      <span className="text-purple-400">WHERE</span> j.job_title_short = <span className="text-emerald-400">'Data Analyst'</span>
                    </div>
                    <div className="pl-4 text-zinc-300">
                      <span className="text-purple-400">GROUP BY</span> s.skills
                    </div>
                    <div className="text-zinc-300">)</div>
                    <div className="text-zinc-300">
                      <span className="text-purple-400">SELECT</span> * <span className="text-purple-400">FROM</span> top_skills <span className="text-purple-400">ORDER BY</span> demand_count <span className="text-purple-400">DESC LIMIT</span> 3;
                    </div>

                    <div className="mt-3 pt-3 border-t border-zinc-800 text-[11px] text-zinc-400 flex items-center justify-between">
                      <span className="text-emerald-400">✓ Query executed in 14ms (PostgreSQL)</span>
                      <span className="text-zinc-500">Output: 3 rows returned</span>
                    </div>
                  </div>
                )}

                {activeTab === 'metrics' && (
                  <div className="space-y-3">
                    <div className="text-zinc-400 text-[11px] uppercase tracking-wider mb-1 flex items-center justify-between">
                      <span>Salary Benchmark Summary</span>
                      <span className="text-zinc-500 text-[10px]">1,000+ Records Analyzed</span>
                    </div>
                    
                    {/* KPI Cards Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded border border-zinc-800 bg-zinc-950">
                        <div className="text-[10px] text-zinc-500 uppercase">Median Salary</div>
                        <div className="text-lg font-bold text-white mt-0.5">$92,500<span className="text-xs text-zinc-500">/yr</span></div>
                        <div className="text-[10px] text-emerald-400 mt-0.5">↑ Remote premium +14%</div>
                      </div>

                      <div className="p-2.5 rounded border border-zinc-800 bg-zinc-950">
                        <div className="text-[10px] text-zinc-500 uppercase">Top In-Demand Skill</div>
                        <div className="text-lg font-bold text-white mt-0.5">SQL</div>
                        <div className="text-[10px] text-zinc-400 mt-0.5">Present in 68% of posts</div>
                      </div>

                      <div className="p-2.5 rounded border border-zinc-800 bg-zinc-950">
                        <div className="text-[10px] text-zinc-500 uppercase">Analysis Speedup</div>
                        <div className="text-lg font-bold text-white mt-0.5">~30%</div>
                        <div className="text-[10px] text-zinc-400 mt-0.5">Dynamic Excel Slicers</div>
                      </div>

                      <div className="p-2.5 rounded border border-zinc-800 bg-zinc-950">
                        <div className="text-[10px] text-zinc-500 uppercase">Accuracy Gain</div>
                        <div className="text-lg font-bold text-white mt-0.5">~20%</div>
                        <div className="text-[10px] text-zinc-400 mt-0.5">Cleaning & deduplication</div>
                      </div>
                    </div>

                    <div className="pt-2 text-[10px] text-zinc-400 border-t border-zinc-800 flex items-center gap-1.5">
                      <FileSpreadsheet className="w-3 h-3 text-zinc-400" />
                      <span>Derived from excel-salary-dashboard & SQL projects</span>
                    </div>
                  </div>
                )}

                {activeTab === 'pipeline' && (
                  <div className="space-y-2 py-1">
                    <div className="text-zinc-400 text-[11px] uppercase tracking-wider mb-2">
                      End-to-End Analytical Workflow
                    </div>

                    <div className="space-y-1.5 text-[11px]">
                      <div className="flex items-center gap-2 p-1.5 rounded bg-zinc-950 border border-zinc-800">
                        <span className="text-zinc-500 font-bold">01.</span>
                        <span className="text-white font-medium">Raw Data Ingestion</span>
                        <span className="text-zinc-400 ml-auto font-mono">CSV / DB Dump</span>
                      </div>

                      <div className="flex items-center gap-2 p-1.5 rounded bg-zinc-950 border border-zinc-800">
                        <span className="text-zinc-500 font-bold">02.</span>
                        <span className="text-white font-medium">Data Cleaning & Deduplication</span>
                        <span className="text-zinc-400 ml-auto font-mono">Handling Nulls</span>
                      </div>

                      <div className="flex items-center gap-2 p-1.5 rounded bg-zinc-950 border border-zinc-800">
                        <span className="text-zinc-500 font-bold">03.</span>
                        <span className="text-white font-medium">Relational SQL Modeling</span>
                        <span className="text-zinc-400 ml-auto font-mono">CTEs · Windows</span>
                      </div>

                      <div className="flex items-center gap-2 p-1.5 rounded bg-zinc-950 border border-zinc-800">
                        <span className="text-zinc-500 font-bold">04.</span>
                        <span className="text-white font-medium">Dashboard & Visual Delivery</span>
                        <span className="text-zinc-400 ml-auto font-mono">Excel · Power BI</span>
                      </div>
                    </div>

                    <div className="pt-2 text-[10px] text-emerald-400 flex items-center gap-1">
                      <span>✓ Standard operating procedure for every project</span>
                    </div>
                  </div>
                )}

                {/* Bottom Workbench Tag */}
                <div className="mt-auto pt-3 border-t border-zinc-800 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                  <span>Pragatheesh Senthil · Portfolio 2026</span>
                  <span className="text-zinc-400">Verified GitHub Projects</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
