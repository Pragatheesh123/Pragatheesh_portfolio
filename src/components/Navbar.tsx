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
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-white/10 pointer-events-none">
        <div
          className="h-full bg-white transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#09090b]/85 backdrop-blur-md border-b border-white/10'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Left Brand: P. */}
          <a
            href="#"
            className="group flex items-center gap-2 font-mono text-xl sm:text-2xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity"
            aria-label="Pragatheesh Senthil Portfolio Home"
          >
            <span>P.</span>
            <span className="hidden sm:inline-block text-[11px] font-mono tracking-widest text-zinc-400 uppercase font-normal ml-2">
              Data Analyst
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 px-3.5 py-1.5 rounded-full border border-white/10 bg-zinc-900/80 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1 text-xs font-mono tracking-wider uppercase transition-all rounded-full ${
                    isActive
                      ? 'bg-white text-black font-semibold shadow-xs'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume & Talk */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase text-zinc-200 border border-white/15 bg-zinc-900 hover:bg-zinc-800 hover:text-white rounded transition-all cursor-pointer shadow-xs"
              title="View Pragatheesh's Resume"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-mono tracking-wider uppercase text-black bg-white hover:bg-zinc-200 rounded transition-all cursor-pointer font-semibold shadow-xs"
            >
              <span>Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 text-zinc-300 border border-white/15 bg-zinc-900 rounded"
              title="Resume"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 border border-white/15 bg-zinc-900 rounded"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Full-Width Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/10 bg-[#09090b]/98 backdrop-blur-xl px-6 py-6 mt-2 transition-all">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-base font-mono uppercase tracking-wider text-zinc-200 hover:text-white border-b border-white/[0.06]"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                </a>
              ))}

              <div className="pt-4 flex gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex-1 py-2.5 text-xs font-mono uppercase tracking-wider text-zinc-200 border border-white/15 bg-zinc-900 rounded text-center"
                >
                  View Resume (PDF)
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-2.5 text-xs font-mono uppercase tracking-wider text-black bg-white font-semibold rounded text-center"
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
