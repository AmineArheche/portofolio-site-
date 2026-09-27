import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { 
  Mail, MapPin, Send, CheckCircle2, 
  ArrowUpRight, MessageSquare, Sparkles 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate response & fire celebratory confetti
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#38bdf8', '#818cf8', '#c084fc', '#10b981']
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-2">
            // INITIATE HANDSHAKE
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white">
            Let's Build Something <span className="gradient-text-cyan">Resonant</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-600 rounded-full mt-4" />
          <p className="mt-4 text-slate-400 max-w-xl text-sm sm:text-base">
            Open for full-stack engineering roles, software architecture discussions, or creative collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 space-y-6">
              <h3 className="font-heading font-bold text-xl text-white mb-4">
                Direct Coordinates
              </h3>

              {/* Email Card */}
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Direct Email</span>
                  <span className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block">Location</span>
                  <span className="text-sm font-semibold text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-xs font-mono text-slate-400 block">Connect on Networks</span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs transition-all hover:scale-105"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/20 text-sky-400 font-medium text-xs transition-all hover:scale-105"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 bg-[#090d16]">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={30} />
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-white">
                    Signal Transmitted!
                  </h4>
                  <p className="text-slate-400 text-sm max-w-sm mx-auto">
                    Thank you, {formState.name || 'friend'}. Your message has been received. I'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', message: '' }); }}
                    className="mt-4 px-6 py-2 rounded-xl text-xs font-mono text-sky-400 hover:text-sky-300 border border-sky-500/20 bg-sky-500/10"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">
                      Your Name / Organization
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Vance"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">
                      Message / Project Scope
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project, idea, or role..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-sky-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-sky-500/20 hover:shadow-sky-500/35 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Transmitting signal...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Direct Transmission</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
