import React from 'react';
import HeroSection from './components/HeroSection';
import AboutServices from './components/AboutServices';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsAndContact from './components/TestimonialsAndContact';

function App() {
  return (
    <div className="min-h-screen bg-[#F6EFE8] text-[#1E1B16]">
      <HeroSection />
      <AboutServices />
      <PortfolioSection />
      <TestimonialsAndContact />
    </div>
  );
}

export default App;
