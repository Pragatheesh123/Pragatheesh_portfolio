import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const { personal } = portfolioData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 sm:px-8 border-b border-[#CFCFCF] bg-[#E2E2E2] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-xs text-[#111111] font-bold">07 //</span>
          <span className="text-xs font-mono tracking-loose-caps uppercase text-[#666666]">
            LET'S TALK
          </span>
          <div className="h-[1px] flex-1 bg-[#CFCFCF]" />
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono tracking-[0.2em] uppercase text-[#666666] mb-3">
            Got something interesting? Let's connect.
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-editorial text-[#111111] mb-6 leading-[0.98]">
            Let's make <br />
            something useful<span className="text-[#666666]">.</span>
          </h2>
          <p className="text-[#444444] text-base sm:text-lg leading-relaxed font-normal">
            Open to analytics opportunities, interesting projects, and conversations around data. Reach out directly via call, email, or connect professionally.
          </p>
        </div>

        {/* Action Channels Grid - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* 1. Phone Card */}
          <div className="p-6 rounded-2xl border border-[#CFCFCF] bg-white/80 flex flex-col justify-between space-y-6 hover:border-[#111111]/50 transition-colors shadow-2xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-[#666666]">
                <Phone className="w-4 h-4 text-[#111111]" />
                <span>PHONE / CALL</span>
              </div>
              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1 text-[11px] font-mono text-[#666666] hover:text-[#111111] transition-colors cursor-pointer"
                title="Copy phone number"
              >
                {phoneCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="font-mono text-base sm:text-lg font-bold text-[#111111] tracking-tight">
              {personal.phone}
            </div>

            <a
              href={`tel:${personal.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-between w-full pt-4 border-t border-[#CFCFCF] text-xs font-mono uppercase tracking-wider text-[#666666] hover:text-[#111111] transition-colors"
            >
              <span>Call Direct</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 2. Email Card */}
          <div className="p-6 rounded-2xl border border-[#CFCFCF] bg-white/80 flex flex-col justify-between space-y-6 hover:border-[#111111]/50 transition-colors shadow-2xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-[#666666]">
                <Mail className="w-4 h-4 text-[#111111]" />
                <span>DIRECT INBOX</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 text-[11px] font-mono text-[#666666] hover:text-[#111111] transition-colors cursor-pointer"
                title="Copy email address"
              >
                {emailCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="font-mono text-base font-bold text-[#111111] break-all">
              {personal.email}
            </div>

            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center justify-between w-full pt-4 border-t border-[#CFCFCF] text-xs font-mono uppercase tracking-wider text-[#666666] hover:text-[#111111] transition-colors"
            >
              <span>Compose Email</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 3. LinkedIn Card */}
          <div className="p-6 rounded-2xl border border-[#CFCFCF] bg-white/80 flex flex-col justify-between space-y-6 hover:border-[#111111]/50 transition-colors shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-mono text-[#666666]">
              <LinkedinIcon className="w-4 h-4 text-[#111111]" />
              <span>LINKEDIN PROFILE</span>
            </div>

            <div className="font-mono text-base font-bold text-[#111111]">
              in/pragatheesh-s-
            </div>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full pt-4 border-t border-[#CFCFCF] text-xs font-mono uppercase tracking-wider text-[#666666] hover:text-[#111111] transition-colors"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 4. GitHub Card */}
          <div className="p-6 rounded-2xl border border-[#CFCFCF] bg-white/80 flex flex-col justify-between space-y-6 hover:border-[#111111]/50 transition-colors shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-mono text-[#666666]">
              <GithubIcon className="w-4 h-4 text-[#111111]" />
              <span>GITHUB REPOSITORIES</span>
            </div>

            <div className="font-mono text-base font-bold text-[#111111]">
              @Pragatheesh123
            </div>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full pt-4 border-t border-[#CFCFCF] text-xs font-mono uppercase tracking-wider text-[#666666] hover:text-[#111111] transition-colors"
            >
              <span>Inspect Code</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
