import React from 'react';
import Header from './pages/header';
import HomeSection from './pages/hero';
import AboutSection from './pages/aboutus';
import Testimonial from './pages/testimonials';
import FeatureSection from './pages/feature';
import ContactUsMenu from './pages/contactus';
import Footer from './pages/footer';
import Faq from './pages/faqs';



function App() {
  return (
    <>
      <Header></Header>
      <HomeSection></HomeSection>
      <AboutSection></AboutSection>
      <Testimonial></Testimonial>
      <FeatureSection></FeatureSection>
      <Faq></Faq>
      <ContactUsMenu></ContactUsMenu>
      <Footer></Footer>
    </>
  )
}

export default App
