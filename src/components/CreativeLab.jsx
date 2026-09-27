import React, { useState, useEffect, useRef } from 'react';
import { 
  Disc3, Volume2, VolumeX, Play, Pause, 
  Radio, Sliders, Music, Sparkles, Activity, Layers
} from 'lucide-react';

export default function CreativeLab() {
  const canvasRef = useRef(null);
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [waveformType, setWaveformType] = useState('sine'); // 'sine' | 'sawtooth' | 'triangle'
  const [frequency, setFrequency] = useState(432); // Default to 432Hz
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);
  const gainNodeRef = useRef(null);

  // Audio Canvas visualizer loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let phase = 0;

    const render = () => {
      ctx.fillStyle = 'rgba(9, 13, 22, 0.25)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = waveformType === 'sawtooth' 
        ? '#f43f5e' 
        : waveformType === 'triangle' 
          ? '#a855f7' 
          : '#38bdf8';

      const sliceWidth = canvas.width / 120;
      const centerY = canvas.height / 2;
      phase += isPlayingSound ? 0.08 : 0.03;

      for (let i = 0; i < 120; i++) {
        const x = i * sliceWidth;
        const normalizedFreq = (frequency / 432) * 0.05;
        let y = centerY;

        if (waveformType === 'sine') {
          y += Math.sin(i * normalizedFreq + phase) * (isPlayingSound ? 45 : 25);
        } else if (waveformType === 'sawtooth') {
          y += (((i * 0.1 + phase) % 2) - 1) * (isPlayingSound ? 40 : 20);
        } else {
          y += (Math.abs(((i * 0.1 + phase) % 2) - 1) * 2 - 1) * (isPlayingSound ? 42 : 22);
        }

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.stroke();

      // Equalizer frequency bars at bottom
      const barCount = 28;
      const barWidth = canvas.width / barCount;
      for (let b = 0; b < barCount; b++) {
        const h = Math.abs(Math.sin(b * 0.3 + phase * 1.5)) * (isPlayingSound ? 38 : 14);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.15)';
        ctx.fillRect(b * barWidth + 2, canvas.height - h - 4, barWidth - 4, h);
      }

      animationId = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(animationId);
  }, [isPlayingSound, waveformType, frequency]);

  // Web Audio API pure tone oscillator toggle
  const toggleSound = () => {
    if (isPlayingSound) {
      if (oscillatorRef.current) {
        try {
          oscillatorRef.current.stop();
          oscillatorRef.current.disconnect();
        } catch (e) {}
      }
      setIsPlayingSound(false);
    } else {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioCtx();
        audioContextRef.current = ctx;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = waveformType;
        osc.frequency.setValueAtTime(frequency, ctx.currentTime);

        // Gentle volume envelope
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        oscillatorRef.current = osc;
        gainNodeRef.current = gain;
        setIsPlayingSound(true);
      } catch (err) {
        console.warn('Audio Context failed to start:', err);
        setIsPlayingSound(false);
      }
    }
  };

  // Adjust frequency in real-time
  const handleFreqChange = (newFreq) => {
    setFrequency(newFreq);
    if (oscillatorRef.current && audioContextRef.current) {
      oscillatorRef.current.frequency.setValueAtTime(newFreq, audioContextRef.current.currentTime);
    }
  };

  const changeWaveform = (type) => {
    setWaveformType(type);
    if (oscillatorRef.current) {
      oscillatorRef.current.type = type;
    }
  };

  return (
    <section id="creativelab" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-2">
            // SONIC & CREATIVE DIMENSION
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white">
            The Creative Lab <span className="text-slate-500 font-light">&</span> Harmonic Resonance
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-400 via-sky-400 to-indigo-600 rounded-full mt-4" />
          <p className="mt-4 text-slate-400 max-w-xl text-sm sm:text-base">
            Where digital signal processing, instrumentation, and acoustic frequencies converge with software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Oscilloscope Synthesizer */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 bg-[#090d16] border-purple-500/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Radio size={16} className="text-purple-400 animate-pulse" />
                <span className="font-mono text-xs text-slate-300">
                  REAL-TIME OSCILLOSCOPE // DSP ENGINE
                </span>
              </div>
              <span className="font-mono text-xs text-sky-400">
                {frequency} Hz ({waveformType.toUpperCase()})
              </span>
            </div>

            {/* Visualizer Canvas */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 mb-6 bg-[#07090e]">
              <canvas
                ref={canvasRef}
                width={600}
                height={200}
                className="w-full h-[180px] sm:h-[220px] block"
              />
              <div className="absolute bottom-3 left-4 font-mono text-[10px] text-slate-500">
                CH 01 : 432 Hz Harmonics
              </div>
            </div>

            {/* Synthesizer Controls */}
            <div className="space-y-5">
              {/* Waveform Selector */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <span className="text-xs font-mono text-slate-400">Waveform Shape:</span>
                <div className="flex items-center gap-2">
                  {['sine', 'sawtooth', 'triangle'].map((type) => (
                    <button
                      key={type}
                      onClick={() => changeWaveform(type)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase transition-all ${
                        waveformType === type
                          ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                          : 'bg-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Frequency Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span>Frequency Modulation</span>
                  <span className="text-sky-400 font-bold">{frequency} Hz</span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="880"
                  step="1"
                  value={frequency}
                  onChange={(e) => handleFreqChange(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
              </div>

              {/* Tone Generator Toggle Button */}
              <button
                onClick={toggleSound}
                className={`w-full py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  isPlayingSound
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/25'
                    : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40'
                }`}
              >
                {isPlayingSound ? (
                  <>
                    <VolumeX size={16} />
                    <span>Mute 432Hz Synthesizer</span>
                  </>
                ) : (
                  <>
                    <Volume2 size={16} />
                    <span>Audition Pure Frequency Tone</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Sonic Craft & Duality Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-6 border-white/10">
              <h4 className="font-heading font-bold text-lg text-white mb-2 flex items-center gap-2">
                <Music size={18} className="text-purple-400" />
                <span>Multi-Instrumentation & Scoring</span>
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Live instrumental performance and melodic composition. Exploring tension and resolution, dynamic arrangement, and harmonic textures across acoustic and electric instruments.
              </p>
            </div>

            <div className="glass-panel p-6 border-white/10">
              <h4 className="font-heading font-bold text-lg text-white mb-2 flex items-center gap-2">
                <Sliders size={18} className="text-sky-400" />
                <span>Audio Engineering & Sound Design</span>
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Synthesis, acoustic frequencies, and spatial mastering in digital audio environments. Sculpting sub-frequencies, equalization curves, and rhythmic dynamics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900/20 via-indigo-900/20 to-sky-900/20 border border-purple-500/20">
              <p className="font-mono text-xs text-purple-300 italic leading-relaxed">
                "Writing clean code and composing melodies demand the exact same discipline: stripping away noise until only pure resonance remains."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
