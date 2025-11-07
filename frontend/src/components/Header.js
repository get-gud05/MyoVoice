import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Header Component
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  // const handleLogin = () => {
  //   alert('Login functionality coming soon!');
  // };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tighter cursor-pointer" onClick={() => scrollToSection('hero')}>
          Myo<span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-500 bg-clip-text text-transparent">Voice</span>
        </h1>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('problem')} className="hover:text-pink-400 transition-colors">
            The Problem
          </button>
          <button onClick={() => scrollToSection('solution')} className="hover:text-pink-400 transition-colors">
            Solution
          </button>
          <button onClick={() => scrollToSection('dashboard')} className="hover:text-pink-400 transition-colors">
            Dashboard
          </button>
          <button onClick={() => scrollToSection('tech')} className="hover:text-pink-400 transition-colors">
            Technology
          </button>
        </nav>
        
        <button 
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            <button onClick={() => scrollToSection('problem')} className="hover:text-pink-400 transition-colors text-left">
              The Problem
            </button>
            <button onClick={() => scrollToSection('solution')} className="hover:text-pink-400 transition-colors text-left">
              Solution
            </button>
            <button onClick={() => scrollToSection('dashboard')} className="hover:text-pink-400 transition-colors text-left">
              Dashboard
            </button>
            <button onClick={() => scrollToSection('tech')} className="hover:text-pink-400 transition-colors text-left">
              Technology
            </button>
            {/* <button onClick={handleLogin} className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold py-2 px-5 rounded-full text-center">
              Login
            </button> */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;