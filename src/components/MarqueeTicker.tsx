import React from 'react';
import { portfolioData } from '../data/portfolioData';

interface MarqueeTickerProps {
  className?: string;
  inverted?: boolean;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({ className = '', inverted = false }) => {
  const items = portfolioData.ticker || [
    "SQL",
    "EXCEL",
    "POWER BI",
    "PYTHON",
    "FOOTBALL",
    "CHESS",
    "VALORANT",
    "FC 26",
    "COOKING"
  ];

  // Repeat items for seamless continuous looping
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`w-full overflow-hidden py-4 border-y select-none transition-colors ${
        inverted
          ? 'bg-[#111111] text-[#E2E2E2] border-zinc-800'
          : 'bg-[#E8E8E6] text-[#111111] border-[#CFCFCF]'
      } ${className}`}
      aria-hidden="true"
    >
      <div className="animate-ticker flex items-center">
        {repeated.map((item, index) => (
          <div key={index} className="flex items-center whitespace-nowrap">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] font-medium px-6 sm:px-8">
              {item}
            </span>
            <span className={`w-1.5 h-1.5 rounded-full ${inverted ? 'bg-zinc-600' : 'bg-[#999999]'}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
