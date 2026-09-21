import React from 'react';
import { Database, LineChart, Wrench, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const categories = [
    {
      title: 'Analysis',
      subtitle: 'Core Querying & Computation',
      icon: <Database className="w-4 h-4 text-zinc-300" />,
      items: [
        { name: 'SQL & PostgreSQL', note: 'Relational data modeling, CTEs, Window Functions, Subqueries' },
        { name: 'Microsoft Excel', note: 'Multi-criteria modeling, advanced formulas, data cleansing' },
        { name: 'Python', note: 'Data preprocessing, scripting, exploratory analysis' },
      ]
    },
    {
      title: 'Visualization',
      subtitle: 'Dashboards & Communication',
      icon: <LineChart className="w-4 h-4 text-zinc-300" />,
      items: [
        { name: 'Power BI', note: 'Interactive reporting, DAX calculations, relationship models' },
        { name: 'Excel Dashboards', note: 'Dynamic slicers, timeline filters, automated Pivot Tables' },
        { name: 'Executive Reporting', note: 'Translating dense tabular metrics into visual hierarchies' },
      ]
    },
    {
      title: 'Analytics',
      subtitle: 'Data Hygiene & Methodology',
      icon: <Wrench className="w-4 h-4 text-zinc-300" />,
      items: [
        { name: 'Data Cleaning', note: 'Handling nulls, duplicates, grain mismatches, type casting' },
        { name: 'EDA', note: 'Exploratory distribution profiling, skewness, correlation' },
        { name: 'Statistical Analysis', note: 'Summary statistics, percentile ranking, trend variance' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 sm:px-8 border-b border-white/10 bg-zinc-950/60 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono tracking-[0.2em] uppercase text-zinc-400 mb-2">
              Technical Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-editorial text-white">
              Tools I actually use<span className="text-zinc-600">.</span>
            </h2>
          </div>

          <p className="hidden md:block text-xs font-mono text-zinc-400 max-w-xs text-right">
            No artificial percentage bars—just software and methodologies applied across production case studies.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 flex flex-col justify-between shadow-sm hover:border-white/20 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    {cat.icon}
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-xs text-zinc-400 mb-6 font-mono">
                  {cat.subtitle}
                </p>

                <div className="space-y-4">
                  {cat.items.map((item, i) => (
                    <div key={i} className="group">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-white">
                          {item.name}
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                      </div>
                      <p className="text-xs text-zinc-400 leading-snug">
                        {item.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-[11px] font-mono text-zinc-500">
                Applied in verified GitHub case studies
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
