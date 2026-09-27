import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Terminal, User, Compass, Cpu, Music, Sparkles, 
  CheckCircle2, ArrowRight, Shield, Activity
} from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('philosophy'); // 'philosophy' | 'duality' | 'environment'

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-2">
            // CORE PROFILE
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white">
            Engineering Rigor <span className="text-slate-500 font-light">&</span> Creative Resonance
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-600 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="font-heading font-bold text-2xl text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <User size={18} />
                </span>
                <span>The Person Behind the Systems</span>
              </h3>

              <p className="text-slate-300 leading-relaxed text-base mb-4">
                Based in Morocco, I am a software engineer dedicated to building resilient, elegant digital solutions. 
                My development journey spans high-velocity web services, distributed database architectures, 
                and standalone desktop systems.
              </p>

              <p className="text-slate-400 leading-relaxed text-sm mb-6">
                Beyond syntax and compilation, I view software engineering and musical artistry as two manifestations of the 
                exact same impulse: <strong className="text-slate-200">ordering chaos into meaningful structure</strong>. 
                Code provides structural precision and defense-in-depth, while music breathes life, emotional tension, and harmony into reality.
              </p>

              {/* Core Principles */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-sky-400 shrink-0" />
                  <span><strong>Defensive Architecture:</strong> Anti-SSRF, SQL escaping, resilient offline-first states.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-indigo-400 shrink-0" />
                  <span><strong>Performance-First:</strong> Low-latency ASGI routing, optimized queries, and fast bundle execution.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-purple-400 shrink-0" />
                  <span><strong>Artistic Sensitivity:</strong> Thoughtful user experience, refined dark aesthetics, and rhythmic timing.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Struct */}
          <div className="lg:col-span-6 space-y-4">
            <div className="glass-panel overflow-hidden border-sky-500/20 shadow-2xl">
              {/* Terminal Window Header */}
              <div className="bg-[#0b0f19] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 font-mono text-xs text-slate-400">resonance_node.c</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                  <span className="font-mono text-[11px] text-sky-400">0x7FFF / IN_PHASE</span>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 bg-[#07090e]/90 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed">
                <div className="text-slate-500 mb-2">
                  <span>// System identity structure</span>
                </div>
                <p><span className="text-purple-400">#include</span> <span className="text-emerald-300">&lt;stdint.h&gt;</span></p>
                <p><span className="text-purple-400">#include</span> <span className="text-emerald-300">&lt;stdbool.h&gt;</span></p>
                <br />
                <p><span className="text-sky-400">typedef struct</span> &#123;</p>
                <p className="pl-4 text-slate-300">
                  <span className="text-sky-300">const char</span> *identity;    <span className="text-slate-500">/* "Amine Arheche" */</span>
                </p>
                <p className="pl-4 text-slate-300">
                  <span className="text-sky-300">const char</span> *origin;      <span className="text-slate-500">/* "Morocco 🇲🇦" */</span>
                </p>
                <p className="pl-4 text-slate-300">
                  <span className="text-sky-300">const char</span> *core[4];     <span className="text-slate-500">/* Python, React, MySQL, C */</span>
                </p>
                <p className="pl-4 text-slate-300">
                  <span className="text-sky-300">const char</span> *canvas;      <span className="text-slate-500">/* Logic & Harmonics */</span>
                </p>
                <p className="pl-4 text-slate-300">
                  <span className="text-amber-400">uint32_t</span>    sample_rate; <span className="text-slate-500">/* 96000 Hz */</span>
                </p>
                <p className="pl-4 text-slate-300">
                  <span className="text-amber-400">double</span>      frequency;   <span className="text-slate-500">/* 432.0 */</span>
                </p>
                <p className="pl-4 text-slate-300">
                  <span className="text-rose-400">bool</span>        in_phase;    <span className="text-slate-500">/* true */</span>
                </p>
                <p>&#125; <span className="text-yellow-400">SystemNode</span>;</p>
                <br />
                <div className="text-slate-500 mb-1">// Active instance</div>
                <p><span className="text-yellow-400">SystemNode</span> amine = &#123;</p>
                <p className="pl-4 text-slate-300">.identity    = <span className="text-emerald-300">"Amine Arheche"</span>,</p>
                <p className="pl-4 text-slate-300">.origin      = <span className="text-emerald-300">"Morocco"</span>,</p>
                <p className="pl-4 text-slate-300">.core        = &#123; <span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"MySQL"</span>, <span className="text-emerald-300">"C"</span> &#125;,</p>
                <p className="pl-4 text-slate-300">.canvas      = <span className="text-emerald-300">"Architecture in 0s, 1s & Harmonics"</span>,</p>
                <p className="pl-4 text-slate-300">.sample_rate = <span className="text-sky-400">96000</span>,</p>
                <p className="pl-4 text-slate-300">.frequency   = <span className="text-sky-400">432.0</span>,</p>
                <p className="pl-4 text-slate-300">.in_phase    = <span className="text-rose-400">true</span></p>
                <p>&#125;;</p>
              </div>

              {/* Bottom Console Status */}
              <div className="px-4 py-2.5 bg-[#090d16] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Compiled with -O3 -Wall</span>
                <span className="text-emerald-400">0 errors, 0 warnings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
