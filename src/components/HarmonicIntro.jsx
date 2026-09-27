import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, FastForward, Activity } from 'lucide-react';

export default function HarmonicIntro({ onComplete }) {
  const [elapsed, setElapsed] = useState(0);
  const [phase, setPhase] = useState(0); // 0 to 4 progression phases
  const [frequency, setFrequency] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const canvasRef = useRef(null);
  const audioCtxRef = useRef(null);
  const oscRef = useRef(null);
  const gainRef = useRef(null);
  const animationFrameRef = useRef(null);

  const TOTAL_DURATION_SEC = 7.0;

  // Initialize Web Audio tone (pure 432 Hz harmonic)
  const toggleAudio = () => {
    try {
      if (isMuted) {
        if (!audioCtxRef.current) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          audioCtxRef.current = new AudioContext();
          
          const osc = audioCtxRef.current.createOscillator();
          const gain = audioCtxRef.current.createGain();
          
          osc.type = 'sine';
          osc.frequency.setValueAtTime(432, audioCtxRef.current.currentTime);
          
          // Smooth acoustic ramp
          gain.gain.setValueAtTime(0.001, audioCtxRef.current.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.08, audioCtxRef.current.currentTime + 1);
          
          osc.connect(gain);
          gain.connect(audioCtxRef.current.destination);
          osc.start();

          oscRef.current = osc;
          gainRef.current = gain;
        } else if (audioCtxRef.current.state === 'suspended') {
          audioCtxRef.current.resume();
        }
        setIsMuted(false);
      } else {
        if (gainRef.current && audioCtxRef.current) {
          gainRef.current.gain.linearRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.2);
        }
        setIsMuted(true);
      }
    } catch (e) {
      console.warn('Audio policy or unsupported context:', e);
    }
  };

  // Skip or finish transition
  const handleExit = () => {
    setIsFadingOut(true);
    if (gainRef.current && audioCtxRef.current) {
      try {
        gainRef.current.gain.linearRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.4);
      } catch (e) {}
    }
    setTimeout(() => {
      if (oscRef.current) {
        try {
          oscRef.current.stop();
          oscRef.current.disconnect();
        } catch (e) {}
      }
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (e) {}
      }
      onComplete();
    }, 600);
  };

  // Keyboard shortcut ESC to skip
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleExit();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Main 7-second clock timer
  useEffect(() => {
    const startTime = performance.now();
    const interval = setInterval(() => {
      const currentElapsed = (performance.now() - startTime) / 1000;
      setElapsed(currentElapsed);

      // Frequency ramp up from 0 to 432 Hz
      if (currentElapsed < 1.8) {
        setPhase(0);
        setFrequency(Math.floor((currentElapsed / 1.8) * 120));
      } else if (currentElapsed < 3.8) {
        setPhase(1);
        const progress = (currentElapsed - 1.8) / 2.0;
        setFrequency(Math.floor(120 + progress * (432 - 120)));
      } else if (currentElapsed < 5.8) {
        setPhase(2);
        setFrequency(432.0);
      } else if (currentElapsed < TOTAL_DURATION_SEC) {
        setPhase(3);
        setFrequency(432.0);
      } else {
        clearInterval(interval);
        handleExit();
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  // Canvas Oscilloscope & Lissajous Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let t = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      // Dynamic phase parameters
      const progress = Math.min(elapsed / TOTAL_DURATION_SEC, 1);
      const amplitude = Math.sin(progress * Math.PI) * 55 + 15;
      const numLines = 3;

      // Draw Lissajous & Sine harmonics
      for (let j = 0; j < numLines; j++) {
        ctx.beginPath();
        ctx.lineWidth = j === 0 ? 2 : 1;
        ctx.strokeStyle = j === 0 
          ? `rgba(56, 189, 248, ${0.7 + Math.sin(t * 2) * 0.2})` 
          : j === 1 
            ? 'rgba(192, 132, 252, 0.4)' 
            : 'rgba(16, 185, 129, 0.35)';

        for (let x = 0; x < width; x += 2) {
          const harmonicFactor = (j + 1) * 1.5;
          const wave1 = Math.sin((x * 0.015 * harmonicFactor) + (t * 2.5) + (j * 0.8));
          const wave2 = Math.cos((x * 0.008) - (t * 1.8));
          const y = centerY + (wave1 * amplitude * 0.8) + (wave2 * amplitude * 0.3);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      t += 0.035;
      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [elapsed]);

  const progressPercent = Math.min((elapsed / TOTAL_DURATION_SEC) * 100, 100);
  const remainingTime = Math.max(TOTAL_DURATION_SEC - elapsed, 0).toFixed(1);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-between p-6 sm:p-12 bg-[#05070a] select-none transition-all duration-700 ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Reticle & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08)_0%,transparent_70%)]" />
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Top Bar: Telemetry & Skip Controls */}
      <div className="w-full max-w-5xl flex items-center justify-between relative z-10 font-mono text-xs">
        <div className="flex items-center gap-3 text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="tracking-widest uppercase text-sky-400 font-semibold">
            CALIBRATING FREQUENCY
          </span>
          <span className="hidden sm:inline text-slate-600">//</span>
          <span className="hidden sm:inline text-slate-400">96.0 kHz &bull; 24-BIT</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleAudio}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/5 transition-all text-[11px]"
            title={isMuted ? "Enable 432 Hz Pure Harmonic Tone" : "Mute Sound"}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} className="text-emerald-400" />}
            <span className="hidden sm:inline">{isMuted ? "Sound: Off" : "Sound: 432Hz"}</span>
          </button>

          <button
            onClick={handleExit}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 hover:text-white border border-sky-500/20 transition-all text-[11px]"
          >
            <FastForward size={14} />
            <span>Skip ({remainingTime}s)</span>
          </button>
        </div>
      </div>

      {/* Centerpiece: Harmonic Oscilloscope & Resonator */}
      <div className="flex flex-col items-center justify-center my-auto relative z-10 w-full max-w-3xl text-center">
        {/* Monogram Badge */}
        <div className="relative mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-sky-500/20 via-purple-500/10 to-emerald-500/20 border border-white/10 flex items-center justify-center backdrop-blur-md relative overflow-hidden shadow-2xl shadow-sky-500/10">
            <span className="font-heading font-black text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-br from-white via-sky-200 to-sky-400">
              AA
            </span>
            {/* Circular Orbiting Pulse */}
            <div 
              className="absolute inset-0 border border-sky-400/40 rounded-2xl animate-spin"
              style={{ animationDuration: '8s' }}
            />
          </div>
          <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-[#05070a] border border-emerald-400/40 font-mono text-[9px] text-emerald-400 font-bold">
            0x7FFF
          </div>
        </div>

        {/* Name and Dual Identity */}
        <h1 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-2">
          Amine Arheche
        </h1>
        <p className="font-mono text-xs sm:text-sm text-slate-400 tracking-wider uppercase mb-6">
          Software Systems &bull; Harmonic Frequency Lab
        </p>

        {/* Live Sine Wave Oscilloscope Canvas */}
        <div className="w-full max-w-lg h-28 relative my-2 overflow-hidden rounded-xl bg-white/[0.02] border border-white/5 shadow-inner">
          <canvas
            ref={canvasRef}
            width={512}
            height={112}
            className="w-full h-full object-cover"
          />
          {/* Frequency Overlay Label */}
          <div className="absolute top-2 left-3 font-mono text-[10px] text-sky-400/80 flex items-center gap-1.5">
            <Activity size={12} className="animate-pulse" />
            <span>OSCILLOSCOPE &bull; CH-1</span>
          </div>
          <div className="absolute bottom-2 right-3 font-mono text-[11px] text-emerald-400 font-bold tracking-wider">
            {frequency.toFixed(1)} Hz {frequency === 432 ? '✓ LOCKED' : ''}
          </div>
        </div>

        {/* Philosophy Monologue / Status Feed */}
        <div className="h-10 flex items-center justify-center mt-3">
          <p className="font-mono text-xs text-slate-300 italic tracking-wide transition-opacity duration-300">
            {phase === 0 && '>> Initializing system kernel and digital signal processors...'}
            {phase === 1 && '>> Sweeping acoustic harmonic frequencies across 0s & 1s...'}
            {phase === 2 && '"Structure carries the logic. Frequencies carry the rest."'}
            {phase === 3 && '>> Frequency in phase: 432 Hz. System operational.'}
          </p>
        </div>
      </div>

      {/* Bottom Status & Calibration Progress Bar */}
      <div className="w-full max-w-xl relative z-10 flex flex-col gap-3 font-mono text-xs">
        <div className="flex items-center justify-between text-slate-400 text-[11px]">
          <span className="text-slate-400">
            {phase < 3 ? 'CALIBRATING ACOUSTIC RESONANCE...' : 'READY // ENTERING PORTFOLIO'}
          </span>
          <span className="text-sky-400 font-bold">{Math.floor(progressPercent)}%</span>
        </div>

        {/* Glowing Progress Bar */}
        <div className="w-full h-1.5 rounded-full bg-white/[0.05] overflow-hidden p-[1px] border border-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-400 transition-all duration-75 shadow-lg shadow-sky-500/50"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Technical Footer Ticker */}
        <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
          <span>CASABLANCA, MOROCCO</span>
          <span className="hidden sm:inline">SAMPLE RATE: 96,000 Hz</span>
          <span>RESONANCE: IN-PHASE</span>
        </div>
      </div>
    </div>
  );
}
