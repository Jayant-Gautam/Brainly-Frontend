import React, { useState } from 'react';
import Header from './components/LandingPage/Header';
import Hero from './components/LandingPage/Hero';
import Features from './components/LandingPage/Features';
import Testimonials from './components/LandingPage/Testimonials';
import CTA from './components/LandingPage/CTA';
import Footer from './components/LandingPage/Footer';

function Welcome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default Welcome;