import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Beyond', href: '#beyond' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-white/5 pointer-events-none">
        <div
          className="h-full bg-white transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090b]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="group flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <div className="w-8 h-8 rounded-full border border-white/20 bg-zinc-900 flex items-center justify-center font-mono text-xs font-semibold text-white tracking-wider">
              PS
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-zinc-200">
                {portfolioData.personal.name}
              </span>
              <span className="text-[11px] font-mono text-zinc-400">
                Data Analyst
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1 text-xs font-medium text-zinc-400 hover:text-white rounded-full transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-md transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-medium text-black bg-white hover:bg-zinc-200 rounded-md transition-colors"
            >
              Let's Talk
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 text-zinc-300 hover:text-white bg-white/[0.05] border border-white/10 rounded-md"
              title="Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white bg-white/[0.05] border border-white/10 rounded-md"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/10 bg-[#09090b]/95 backdrop-blur-xl px-6 py-5 mt-2 transition-all">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-zinc-300 hover:text-white py-1.5 border-b border-white/[0.04]"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 flex gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex-1 py-2 text-xs font-mono text-zinc-200 bg-zinc-800 border border-white/10 rounded-md text-center"
                >
                  View Resume
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-2 text-xs font-medium text-black bg-white rounded-md text-center"
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
