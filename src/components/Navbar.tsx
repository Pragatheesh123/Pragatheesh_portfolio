import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      // Progress calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Active section calculation
      const sectionIds = ['about', 'experience', 'projects', 'beyond', 'contact'];
      const currentPos = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (currentPos >= top && currentPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', id: 'about', href: '#about' },
    { label: 'Experience', id: 'experience', href: '#experience' },
    { label: 'Work', id: 'projects', href: '#projects' },
    { label: 'Beyond', id: 'beyond', href: '#beyond' },
    { label: 'Contact', id: 'contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top scroll progress line */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-[#CFCFCF]/50 pointer-events-none">
        <div
          className="h-full bg-[#111111] transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#E2E2E2]/85 backdrop-blur-md border-b border-[#CFCFCF]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Left Brand: P. */}
          <a
            href="#"
            className="group flex items-center gap-2 font-mono text-xl sm:text-2xl font-bold tracking-tighter text-[#111111] hover:opacity-75 transition-opacity"
            aria-label="Pragatheesh Senthil Portfolio Home"
          >
            <span>P.</span>
            <span className="hidden sm:inline-block text-[11px] font-mono tracking-widest text-[#666666] uppercase font-normal ml-2">
              Data Analyst
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full border border-[#CFCFCF] bg-[#E8E8E6]/80 backdrop-blur-md shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1 text-xs font-mono tracking-wider uppercase transition-all rounded-full ${
                    isActive
                      ? 'bg-[#111111] text-[#E2E2E2] font-semibold shadow-xs'
                      : 'text-[#666666] hover:text-[#111111]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume & Contact */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase text-[#111111] border border-[#CFCFCF] bg-white/70 hover:bg-[#111111] hover:text-[#E2E2E2] rounded transition-all cursor-pointer shadow-xs"
              title="View Pragatheesh's Resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-mono tracking-wider uppercase text-[#E2E2E2] bg-[#111111] hover:bg-[#27272a] rounded transition-all cursor-pointer shadow-xs"
            >
              <span>Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 text-[#111111] border border-[#CFCFCF] bg-white/80 rounded"
              title="Resume"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111111] border border-[#CFCFCF] bg-white/80 rounded"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Full-Width Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#CFCFCF] bg-[#E2E2E2]/98 backdrop-blur-xl px-6 py-6 mt-2 transition-all">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-base font-mono uppercase tracking-wider text-[#111111] border-b border-[#CFCFCF]/50"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#666666]" />
                </a>
              ))}

              <div className="pt-4 flex gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex-1 py-2.5 text-xs font-mono uppercase tracking-wider text-[#111111] border border-[#CFCFCF] bg-white rounded text-center"
                >
                  View Resume (PDF)
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-2.5 text-xs font-mono uppercase tracking-wider text-[#E2E2E2] bg-[#111111] rounded text-center"
                >
                  Get In Touch
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
