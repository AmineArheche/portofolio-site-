import React from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Code2, Database, Layout, Server, Cpu, 
  Terminal, ShieldCheck, GitBranch, Layers
} from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-[#090d16]/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-2">
            // TECHNICAL TOOLKIT
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white">
            Languages, Systems <span className="text-slate-500 font-light">&</span> Frameworks
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-600 rounded-full mt-4" />
        </div>

        {/* Core Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillsData.languages.map((skill) => (
            <div 
              key={skill.name} 
              className="glass-panel p-6 border-white/10 hover:border-sky-500/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-heading font-bold text-lg text-white">
                  {skill.name}
                </span>
                <span className="font-mono text-xs text-sky-400 font-semibold px-2 py-0.5 rounded bg-sky-500/10">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-3">
                <div 
                  className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <p className="text-slate-400 text-xs leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Infrastructure & Creative Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Infrastructure & Architecture */}
          <div className="glass-panel p-8">
            <h3 className="font-heading font-bold text-xl text-white mb-6 flex items-center gap-2.5">
              <Server size={20} className="text-indigo-400" />
              <span>Infrastructure & Systems Engineering</span>
            </h3>
            <div className="space-y-4">
              {skillsData.infrastructure.map((item) => (
                <div key={item.name} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 shrink-0" />
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-white">{item.name}</h4>
                    <p className="text-slate-400 text-xs mt-0.5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sound Design & Harmonic Arts */}
          <div className="glass-panel p-8 border-purple-500/20">
            <h3 className="font-heading font-bold text-xl text-white mb-6 flex items-center gap-2.5">
              <Cpu size={20} className="text-purple-400" />
              <span>Acoustic & Creative Craft</span>
            </h3>
            <div className="space-y-4">
              {skillsData.creativeAndSound.map((item) => (
                <div key={item.name} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 shrink-0" />
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-white">{item.name}</h4>
                    <p className="text-slate-400 text-xs mt-0.5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
