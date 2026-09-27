import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Activity, BarChart2 } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel p-6 sm:p-8 bg-[#0b0f19] border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span 
              className="w-2.5 h-2.5 rounded-full" 
              style={{ backgroundColor: project.color || '#38bdf8' }} 
            />
            <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
              {project.category}
            </span>
          </div>
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mb-2">
            {project.title}
          </h3>
          <p className="text-sky-400 font-medium text-sm">
            {project.tagline}
          </p>
        </div>

        {/* Long Description */}
        <div className="mb-8 text-slate-300 leading-relaxed text-sm sm:text-base border-t border-b border-white/10 py-4">
          <p>{project.longDescription || project.description}</p>
        </div>

        {/* Key Metrics */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-3 mb-8">
            {project.metrics.map((m) => (
              <div key={m.label} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <span className="font-heading font-black text-lg sm:text-xl text-white block">
                  {m.value}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Architectural Highlights */}
        {project.highlights && (
          <div className="mb-8">
            <h4 className="font-heading font-bold text-base text-white mb-3 flex items-center gap-2">
              <Layers size={16} className="text-sky-400" />
              <span>Key Architectural Capabilities</span>
            </h4>
            <div className="space-y-2.5">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Badge Cluster */}
        <div className="mb-8">
          <h4 className="font-heading font-bold text-sm text-slate-400 uppercase tracking-wider mb-3">
            Engineered With
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs tracking-wider uppercase transition-all"
            >
              <Github size={16} />
              <span>View Source on GitHub</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold text-xs tracking-wider uppercase shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 transition-all"
            >
              <ExternalLink size={16} />
              <span>Live Deployment</span>
            </a>
          )}
          <button
            onClick={onClose}
            className="ml-auto text-xs text-slate-400 hover:text-white transition-colors"
          >
            Close Dialog
          </button>
        </div>
      </div>
    </div>
  );
}
