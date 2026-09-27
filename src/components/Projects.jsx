import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { 
  Code2, ExternalLink, ArrowUpRight, 
  Layers, Sparkles, Filter, Info, Terminal, Activity
} from 'lucide-react';
import { Github } from './Icons';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack & APIs' },
    { id: 'desktop', label: 'Python & Desktop Systems' },
    { id: 'web', label: 'Web Applications' },
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative z-10 bg-gradient-to-b from-transparent via-[#090d16]/50 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-2">
            // ENGINEERING SHOWCASE
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white">
            Featured Systems <span className="text-slate-500 font-light">&</span> Architecture
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-600 rounded-full mt-4" />
          <p className="mt-4 text-slate-400 max-w-xl text-sm sm:text-base">
            Production-grade systems, tools, and platforms engineered with performance, security, and clean architecture in mind.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 scale-105'
                  : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-slate-200 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel group flex flex-col justify-between overflow-hidden relative border-white/[0.08] hover:border-sky-500/40 hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Subtle Ambient Color Glow Header */}
              <div 
                className="h-2 w-full transition-all duration-500"
                style={{ 
                  background: `linear-gradient(90deg, ${project.color || '#38bdf8'}, transparent)` 
                }} 
              />

              <div className="p-7 flex-1 flex flex-col">
                {/* Meta Badge Bar */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 font-mono text-[10px] text-amber-400 font-semibold px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20">
                      <Sparkles size={10} />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-heading font-black text-xl text-white group-hover:text-sky-400 transition-colors mb-2.5">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                  {project.description}
                </p>

                {/* Key Metrics Chips */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-left">
                        <span className="font-heading font-bold text-sm text-slate-200 block">
                          {m.value}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 block truncate">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-mono text-slate-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Action Links */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <Info size={14} />
                    <span>Deep Dive</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 hover:text-sky-300 transition-colors"
                        title="View Live App"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
