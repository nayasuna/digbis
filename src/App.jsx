import React from 'react';
import Footer from './components/footer';
import AboutSection from './components/aboutus';
import FeaturesSection from './components/feature';
import Testimonials from './components/testimonials';
import Header from './components/header';
import HomeSection from './components/hero';
import ContactUsMenu from './components/contatus';
import Faq from './components/faqs';


function App() {
  return (
    <>
      <Header />
      <HomeSection/>
      <AboutSection/> 
      <Testimonials />
      <FeaturesSection />
      <Faq></Faq>
      <ContactUsMenu></ContactUsMenu>
      <Footer />
      
    </>
  )
}

export default App
