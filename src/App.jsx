import React, { useState } from 'react';
import HarmonicIntro from './components/HarmonicIntro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import CreativeLab from './components/CreativeLab';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200 ambient-grid relative">
      {/* 7-Second Harmonic Calibration Intro */}
      {showIntro && (
        <HarmonicIntro onComplete={() => setShowIntro(false)} />
      )}

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <CreativeLab />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
