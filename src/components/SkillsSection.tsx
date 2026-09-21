import React from 'react';
import { Database, LineChart, Wrench, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const categories = [
    {
      title: 'Analysis',
      subtitle: 'Core Querying & Computation',
      icon: <Database className="w-4 h-4 text-zinc-300" />,
      items: [
        { name: 'SQL', note: 'Advanced queries, CTEs, Window Functions, Subqueries' },
        { name: 'PostgreSQL', note: 'Relational data modeling, indexing, query optimization' },
        { name: 'Microsoft Excel', note: 'Advanced formulas, multi-criteria modeling, data cleansing' },
        { name: 'Python', note: 'Data preprocessing, scripting, GenAI workflow integration' },
      ]
    },
    {
      title: 'Visualization',
      subtitle: 'Dashboards & Communication',
      icon: <LineChart className="w-4 h-4 text-zinc-300" />,
      items: [
        { name: 'Power BI', note: 'Interactive reporting, DAX calculations, relationship models' },
        { name: 'Excel Dashboards', note: 'Dynamic slicers, timeline filters, automated Pivot Tables' },
        { name: 'Data Storytelling', note: 'Translating dense tabular metrics into visual hierarchies' },
        { name: 'Executive Reporting', note: 'KPI scorecards, scenario summaries, and outlier detection' },
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
        { name: 'Dashboard Design', note: 'User-centric layout, metric clarity, action thresholds' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 sm:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-zinc-400">04 //</span>
          <span className="text-xs font-mono tracking-loose-caps uppercase text-zinc-400">
            Skills & Capabilities
          </span>
          <div className="h-[1px] flex-1 bg-white/[0.08]" />
        </div>

        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            The toolkit.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Tools I actually use. No artificial percentage bars—just reliable software and analytical competencies applied across production projects.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/10 bg-zinc-900/30 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    {cat.icon}
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">
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
                        <span className="text-sm font-semibold text-white group-hover:text-zinc-200 transition-colors">
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

              <div className="mt-8 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-zinc-400">
                Applied in verified GitHub case studies
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
