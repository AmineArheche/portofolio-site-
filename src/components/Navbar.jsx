import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Terminal, Code2, Layers, Cpu, Music, Mail, 
  Menu, X, ExternalLink, ArrowUpRight
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Creative Lab', href: '#creativelab' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-[#07090e]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-3 group text-white decoration-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-sky-500 to-purple-600 p-[1.5px] transition-transform group-hover:scale-105 duration-300">
            <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center font-mono font-bold text-sky-400 text-lg">
              A
            </div>
          </div>
          <div>
            <span className="font-heading font-extrabold text-lg tracking-wide text-white group-hover:text-sky-400 transition-colors">
              Amine Arheche
            </span>
            <span className="block text-[11px] font-mono text-slate-400 tracking-wider">
              432 Hz • 0x7FFF
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors rounded-full hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all hover:scale-105"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-sky-400 transition-all hover:scale-105"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 hover:scale-105 transition-all"
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090d16]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-slide-up">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 hover:text-sky-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2.5 rounded-xl bg-sky-500 text-white text-sm font-semibold"
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
