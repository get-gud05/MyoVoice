import React from 'react';
import SoundWave from './SoundWave'; // Import the SoundWave component

// Hero Section Component
const HeroSection = () => {
  const scrollToSolution = () => {
    const element = document.getElementById('solution');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden pt-20">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at top right, rgba(79, 70, 229, 0.2), transparent 40%), radial-gradient(circle at bottom left, rgba(236, 72, 153, 0.2), transparent 40%)'
      }} />
      <SoundWave />
      <div className="container mx-auto px-6 z-10">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-tight">
          Your Voice. <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-500 bg-clip-text text-transparent">Your Emotion.</span>
        </h2>
        <h3 className="mt-4 text-2xl md:text-4xl font-light text-neutral-300">Reimagined.</h3>
        <p className="mt-8 max-w-2xl mx-auto text-lg text-neutral-400">
          MyoVoice is a revolutionary wearable device that restores a personal, emotionally expressive voice for those who have lost it, using the power of AI and intuitive muscle-sensing technology.
        </p>
        <button 
          onClick={scrollToSolution}
          className="mt-12 inline-block bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Discover The Solution
        </button>
      </div>
    </section>
  );
};

export default HeroSection;