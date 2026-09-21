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
    <section id="contact" className="py-24 px-6 sm:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-zinc-400">08 //</span>
          <span className="text-xs font-mono tracking-loose-caps uppercase text-zinc-400">
            Contact
          </span>
          <div className="h-[1px] flex-1 bg-white/[0.08]" />
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono tracking-loose-caps uppercase text-zinc-400 mb-3">
            Got something interesting? Let's talk.
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Let's build something useful.
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
            Open to analytics opportunities, interesting projects, and conversations around data modeling and business intelligence. Reach out directly via phone or email.
          </p>
        </div>

        {/* Action Channels Grid - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* 1. Phone Card */}
          <div className="p-6 rounded-xl border border-white/10 bg-zinc-900/30 flex flex-col justify-between space-y-6 hover:border-white/25 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Phone className="w-4 h-4 text-white" />
                <span>PHONE / CALL</span>
              </div>
              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title="Copy phone number"
              >
                {phoneCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="font-mono text-base sm:text-lg font-semibold text-white tracking-tight">
              {personal.phone}
            </div>

            <a
              href={`tel:${personal.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-between w-full pt-4 border-t border-white/[0.08] text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
            >
              <span>Call Direct</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 2. Email Card */}
          <div className="p-6 rounded-xl border border-white/10 bg-zinc-900/30 flex flex-col justify-between space-y-6 hover:border-white/25 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Mail className="w-4 h-4 text-white" />
                <span>DIRECT INBOX</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title="Copy email address"
              >
                {emailCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="font-mono text-base sm:text-lg font-semibold text-white break-all">
              {personal.email}
            </div>

            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center justify-between w-full pt-4 border-t border-white/[0.08] text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
            >
              <span>Compose Email</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 3. LinkedIn Card */}
          <div className="p-6 rounded-xl border border-white/10 bg-zinc-900/30 flex flex-col justify-between space-y-6 hover:border-white/25 transition-colors">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <LinkedinIcon className="w-4 h-4 text-white" />
              <span>LINKEDIN PROFILE</span>
            </div>

            <div className="font-mono text-base font-semibold text-white">
              in/pragatheesh-s-
            </div>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full pt-4 border-t border-white/[0.08] text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 4. GitHub Card */}
          <div className="p-6 rounded-xl border border-white/10 bg-zinc-900/30 flex flex-col justify-between space-y-6 hover:border-white/25 transition-colors">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <GithubIcon className="w-4 h-4 text-white" />
              <span>GITHUB REPOSITORIES</span>
            </div>

            <div className="font-mono text-base font-semibold text-white">
              @Pragatheesh123
            </div>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full pt-4 border-t border-white/[0.08] text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
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
