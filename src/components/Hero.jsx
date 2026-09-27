import React, { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowDown, Code2, Sparkles, Terminal, Activity,
  ArrowUpRight, Play, Disc3, ShieldCheck
} from 'lucide-react';
import { Github } from './Icons';

export default function Hero() {
  const canvasRef = useRef(null);
  const [displayText, setDisplayText] = useState('');
  const fullText = "Full-Stack Software Engineer • Systems & Creative Technologist";

  // Typing effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  // Ambient Audio Wave / Particle Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let step = 0;

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      step += 0.02;

      // Draw multi-layered harmonic sine waves
      const waves = [
        { amplitude: 35, frequency: 0.008, speed: step * 0.8, color: 'rgba(56, 189, 248, 0.12)', lineWidth: 2 },
        { amplitude: 45, frequency: 0.012, speed: -step * 0.6, color: 'rgba(99, 102, 241, 0.15)', lineWidth: 2.5 },
        { amplitude: 25, frequency: 0.006, speed: step * 1.1, color: 'rgba(168, 85, 247, 0.1)', lineWidth: 1.5 },
      ];

      waves.forEach((w) => {
        ctx.beginPath();
        ctx.lineWidth = w.lineWidth;
        ctx.strokeStyle = w.color;
        const midY = canvas.height * 0.65;

        for (let x = 0; x < canvas.width; x += 3) {
          const y = midY + Math.sin(x * w.frequency + w.speed) * w.amplitude * Math.sin(x * 0.002);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Interactive Wave Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Radial Glow Spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-500/15 via-indigo-500/10 to-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs text-slate-300">
            <code>[ 432 Hz  //  0x7FFF  //  MOROCCO 🇲🇦 ]</code>
          </span>
        </div>

        {/* Main Name Heading */}
        <h1 className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white mb-6">
          Amine <span className="gradient-text-cyan">Arheche</span>
        </h1>

        {/* Dynamic Typing Title */}
        <div className="min-h-[40px] mb-8">
          <p className="font-mono text-base sm:text-xl text-sky-400/90 font-medium">
            {displayText}
            <span className="inline-block w-2 h-5 ml-1 bg-sky-400 animate-pulse align-middle" />
          </p>
        </div>

        {/* Atmospheric Mission Statement */}
        <p className="max-w-2xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed mb-10 font-normal">
          Architecting resilient digital systems, full-stack web applications, and embedded tools. 
          Driven by clean architecture in code and expressive resonance in acoustic soundscapes.
        </p>

        {/* Primary Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300"
          >
            <Code2 size={18} />
            <span>Explore Engineering Projects</span>
          </a>

          <a
            href="#creativelab"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-semibold text-sm backdrop-blur-md hover:scale-105 transition-all duration-300"
          >
            <Disc3 size={18} className="text-purple-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Sonic & Creative Lab</span>
          </a>
        </div>

        {/* Quick Highlights Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-white/[0.08]">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-left">
            <span className="text-2xl font-black font-heading text-white">5+</span>
            <p className="text-xs text-slate-400 font-mono mt-1">Production Systems</p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-left">
            <span className="text-2xl font-black font-heading text-sky-400">&lt; 5ms</span>
            <p className="text-xs text-slate-400 font-mono mt-1">Sub-ms Redirects</p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-left">
            <span className="text-2xl font-black font-heading text-purple-400">432 Hz</span>
            <p className="text-xs text-slate-400 font-mono mt-1">Acoustic Resonance</p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-left">
            <span className="text-2xl font-black font-heading text-emerald-400">100%</span>
            <p className="text-xs text-slate-400 font-mono mt-1">Data Ownership</p>
          </div>
        </div>
      </div>
    </section>
  );
}
