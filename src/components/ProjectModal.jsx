import React, { useState } from 'react';
import { 
  X, ExternalLink, CheckCircle2, Layers, Cpu, Activity, 
  BarChart2, ChevronLeft, ChevronRight, Camera, Maximize2 
} from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!project) return null;

  const hasScreenshots = project.screenshots && project.screenshots.length > 0;
  const currentScreenshot = hasScreenshots ? project.screenshots[activeImageIndex] : null;

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (!hasScreenshots) return;
    setActiveImageIndex((prev) => (prev === 0 ? project.screenshots.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (!hasScreenshots) return;
    setActiveImageIndex((prev) => (prev === project.screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Main Modal Backdrop */}
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      >
        <div 
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-panel p-5 sm:p-8 bg-[#0b0f19] border border-white/20 shadow-2xl rounded-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-20"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Modal Header */}
          <div className="mb-6 pr-10">
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
            <p className="text-sky-400 font-medium text-sm sm:text-base">
              {project.tagline}
            </p>
          </div>

          {/* Interactive Screenshot Showcase Gallery */}
          {hasScreenshots && (
            <div className="mb-8 rounded-xl overflow-hidden border border-white/10 bg-black/50 p-3 sm:p-4">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <Camera size={14} className="text-sky-400" />
                  <span className="font-semibold text-white">System Interface & Telemetry Screens</span>
                  <span className="text-slate-500">({activeImageIndex + 1}/{project.screenshots.length})</span>
                </div>
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-sky-400 transition-colors"
                  title="Expand Fullscreen"
                >
                  <Maximize2 size={13} />
                  <span>Enlarge</span>
                </button>
              </div>

              {/* Main Featured Screenshot Display */}
              <div className="relative group rounded-lg overflow-hidden bg-black/80 aspect-video flex items-center justify-center border border-white/5">
                <img 
                  src={currentScreenshot.url} 
                  alt={currentScreenshot.caption || project.title} 
                  className="w-full h-full object-contain cursor-pointer transition-transform duration-300"
                  onClick={() => setIsFullscreen(true)}
                />

                {/* Left Navigation Arrow */}
                {project.screenshots.length > 1 && (
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/15 opacity-80 group-hover:opacity-100 transition-all shadow-lg"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}

                {/* Right Navigation Arrow */}
                {project.screenshots.length > 1 && (
                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/15 opacity-80 group-hover:opacity-100 transition-all shadow-lg"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>

              {/* Caption & Description */}
              <div className="mt-3 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/5 pt-2.5">
                <div>
                  <h5 className="font-heading font-bold text-sm text-white">
                    {currentScreenshot.caption}
                  </h5>
                  {currentScreenshot.description && (
                    <p className="text-xs text-slate-400 mt-0.5">
                      {currentScreenshot.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Thumbnail Selector Ribbon */}
              {project.screenshots.length > 1 && (
                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/5 overflow-x-auto pb-1 scrollbar-thin">
                  {project.screenshots.map((screen, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border transition-all ${
                        activeImageIndex === idx 
                          ? 'border-sky-400 ring-2 ring-sky-400/40 scale-105 opacity-100' 
                          : 'border-white/10 opacity-50 hover:opacity-80'
                      }`}
                    >
                      <img 
                        src={screen.url} 
                        alt={screen.caption || `Thumbnail ${idx + 1}`} 
                        className="w-full h-full object-cover" 
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Long Description */}
          <div className="mb-8 text-slate-300 leading-relaxed text-sm sm:text-base border-t border-b border-white/10 py-4">
            <p>{project.longDescription || project.description}</p>
          </div>

          {/* Key Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
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

      {/* Lightbox / Fullscreen Viewer */}
      {isFullscreen && currentScreenshot && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fade-in"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Close fullscreen"
          >
            <X size={24} />
          </button>

          <div 
            className="relative max-w-6xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={currentScreenshot.url} 
              alt={currentScreenshot.caption} 
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10" 
            />
            <div className="mt-4 text-center">
              <h4 className="text-white font-bold text-lg">{currentScreenshot.caption}</h4>
              {currentScreenshot.description && (
                <p className="text-slate-400 text-sm mt-1">{currentScreenshot.description}</p>
              )}
            </div>

            {project.screenshots.length > 1 && (
              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={handlePrevImage}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronLeft size={22} />
                </button>
                <span className="text-xs font-mono text-slate-400">
                  {activeImageIndex + 1} / {project.screenshots.length}
                </span>
                <button
                  onClick={handleNextImage}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronRight size={22} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
