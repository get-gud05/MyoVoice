import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import DashboardSection from '../components/DashboardSection';
import TechnologySection from '../components/TechnologySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="antialiased bg-black text-neutral-100 font-sans">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <DashboardSection />
        <TechnologySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
