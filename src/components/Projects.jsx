import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/portfolioData';
import { getGitHubRepositories, mergeProjectsWithGitHub } from '../services/githubService';
import ProjectModal from './ProjectModal';
import { 
  Code2, ExternalLink, ArrowUpRight, 
  Layers, Sparkles, Filter, Info, Terminal, Activity,
  GitBranch, RefreshCw, Camera, Eye, Cpu
} from 'lucide-react';
import { Github } from './Icons';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState(projectsData);
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function syncRepositories() {
      setIsSyncing(true);
      try {
        const liveRepos = await getGitHubRepositories();
        if (isMounted && Array.isArray(liveRepos) && liveRepos.length > 0) {
          const merged = mergeProjectsWithGitHub(projectsData, liveRepos);
          setProjects(merged);
        }
      } catch (err) {
        console.warn('GitHub synchronization error:', err);
      } finally {
        if (isMounted) setIsSyncing(false);
      }
    }

    syncRepositories();
    return () => {
      isMounted = false;
    };
  }, []);

  const categories = [
    { id: 'all', label: 'All Systems' },
    { id: 'fullstack', label: 'Full-Stack & APIs' },
    { id: 'desktop', label: 'Python & Desktop ERP' },
    { id: 'web', label: 'Web Applications & SaaS' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative z-10 bg-gradient-to-b from-transparent via-[#090d16]/50 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Showcase & Live Telemetry &bull; {projects.length} Engineering Works</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white">
            Featured Systems <span className="text-slate-500 font-light">&</span> Architecture
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-600 rounded-full mt-4" />
          <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base">
            Production-grade systems, desktop suites, aerology platforms, and web APIs engineered with performance, precision, and clean architecture.
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

        {/* Projects Grid — Uniform Constant Height Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel group flex flex-col justify-between overflow-hidden relative border-white/[0.08] hover:border-sky-500/40 hover:-translate-y-1.5 transition-all duration-300 h-full rounded-2xl"
            >
              {/* Constant Height Preview Banner (208px = h-52) */}
              <div 
                onClick={() => setSelectedProject(project)}
                className="relative h-52 w-full overflow-hidden bg-[#070b14] cursor-pointer border-b border-white/5 select-none shrink-0"
              >
                {project.coverImage ? (
                  <>
                    <img 
                      src={project.coverImage} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        if (e.target.src.startsWith('/')) {
                          e.target.src = '.' + e.target.src;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80" />
                  </>
                ) : (
                  /* Stylized Technical Blueprint Banner for Projects without raw screenshot */
                  <div className="w-full h-full relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-[#0a0f1d] to-black">
                    <div 
                      className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" 
                    />
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 shadow-xl mb-3 relative z-10"
                      style={{ backgroundColor: `${project.color || '#38bdf8'}15` }}
                    >
                      <Cpu size={28} style={{ color: project.color || '#38bdf8' }} />
                    </div>
                    <span className="font-mono text-xs text-slate-300 font-semibold tracking-wider relative z-10 uppercase">
                      Architecture Blueprint
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 relative z-10 mt-0.5">
                      3D Perspective & FSM Core
                    </span>
                  </div>
                )}
                
                {/* Subtle Ambient Color Glow Accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-500"
                  style={{ 
                    background: `linear-gradient(90deg, ${project.color || '#38bdf8'}, transparent)` 
                  }} 
                />

                {project.screenshots && project.screenshots.length > 0 && (
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-200 flex items-center gap-1.5 shadow-md">
                    <Camera size={12} className="text-sky-400" />
                    <span>{project.screenshots.length} Screens</span>
                  </div>
                )}

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/35 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/15 border border-white/25 text-white text-xs font-semibold backdrop-blur-md shadow-xl scale-95 group-hover:scale-100 transition-transform">
                    <Eye size={14} className="text-sky-400" />
                    <span>Explore Showcase</span>
                  </span>
                </div>
              </div>

              {/* Constant Sized Card Content Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Meta Badge Bar */}
                  <div className="flex items-center justify-between gap-2 h-6 mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/5">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {project.isAutoSynced && (
                        <span className="flex items-center gap-1 font-mono text-[10px] text-cyan-400 font-semibold px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/20">
                          <GitBranch size={10} />
                          <span>Live Sync</span>
                        </span>
                      )}
                      {project.featured && (
                        <span className="flex items-center gap-1 font-mono text-[10px] text-amber-400 font-semibold px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20">
                          <Sparkles size={10} />
                          <span>Featured</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title — Constant Height 1 Line */}
                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="font-heading font-black text-lg text-white group-hover:text-sky-400 transition-colors mb-2 cursor-pointer truncate"
                    title={project.title}
                  >
                    {project.title}
                  </h3>

                  {/* Description — Fixed Height 3 Lines */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 h-[60px] line-clamp-3 overflow-hidden">
                    {project.description}
                  </p>

                  {/* Key Metrics Chips — Normalized Constant 2-Column Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-4 h-[58px]">
                    {project.metrics && project.metrics.length > 0 ? (
                      project.metrics.slice(0, 2).map((m) => (
                        <div key={m.label} className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-left flex flex-col justify-center">
                          <span className="font-heading font-bold text-xs text-slate-200 block truncate">
                            {m.value}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 block truncate">
                            {m.label}
                          </span>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-left flex flex-col justify-center">
                          <span className="font-heading font-bold text-xs text-slate-200 block truncate">Production</span>
                          <span className="text-[10px] font-mono text-slate-400 block truncate">Status</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-left flex flex-col justify-center">
                          <span className="font-heading font-bold text-xs text-slate-200 block truncate">100% Free</span>
                          <span className="text-[10px] font-mono text-slate-400 block truncate">Open Source</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Technologies Badges — Constant Height Single Row */}
                  <div className="flex flex-wrap gap-1.5 mb-4 h-6 overflow-hidden">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-300 border border-white/5 truncate max-w-[120px]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Links — Always Aligned at Bottom */}
                <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <Info size={14} />
                    <span>Deep Dive & Gallery</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 hover:text-sky-300 transition-colors"
                        title="View Live App"
                      >
                        <ExternalLink size={15} />
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
