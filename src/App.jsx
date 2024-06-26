import React from 'react';

import HeroSection from './components/hero';
import Footer from './components/footer';
import AboutUs from './components/aboutus';
import Features from './components/feature';
import Testimonials from './components/testimonials';
import Navbar from './components/Navbar';




function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Features />
      <Testimonials />
      <Footer />
      
    </>
  )
}

export default App
