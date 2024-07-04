import React from 'react';
import Footer from './components/footer';
import AboutSection from './components/aboutus';
import FeaturesSection from './components/feature';
import Testimonials from './components/testimonials';
import Header from './components/header';
import HomeSection from './components/hero';
import ContactUsMenu from './components/contatus';


function App() {
  return (
    <>
      <Header />
      <HomeSection/>
      <AboutSection/> 
      <Testimonials />
      <FeaturesSection />
      <ContactUsMenu></ContactUsMenu>
      <Footer />
      
    </>
  )
}

export default App
