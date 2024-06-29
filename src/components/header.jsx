import React, { useState } from 'react';
import Logo from '../../public/logo1.png'; // Sesuaikan path sesuai struktur proyek Anda

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="py-4 text-white px-4 flex justify-between items-center" style={{ background: 'linear-gradient(90deg, #201616 0%, #CD934D 100%)' }}>
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="TransactEase Logo" className="w-22 h-16" />
      </div>
      
      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex items-center space-x-8 lg:space-x-16">
          <li><a href="#home" className="text-white hover:text-yellow-400">Home</a></li>
          <li><a href="#about" className="text-white hover:text-yellow-400">About Us</a></li>
          <li><a href="#blog" className="text-white hover:text-yellow-400">Blog</a></li>
          <li><a href="#features" className="text-white hover:text-yellow-400">Features</a></li>
          <li><a href="#contact" className="text-white hover:text-yellow-400">Contact</a></li>
          <li><button className="bg-transparent rounded-3xl border border-white text-white px-4 py-2">Download Now</button></li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen ? (
        <nav className="absolute top-16 left-0 w-full bg-transparent md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#home" className="text-white hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="text-white hover:text-yellow-400">About Us</a></li>
            <li><a href="#blog" className="text-white hover:text-yellow-400">Blog</a></li>
            <li><a href="#features" className="text-white hover:text-yellow-400">Features</a></li>
            <li><a href="#contact" className="text-white hover:text-yellow-400">Contact</a></li>
            <li><button className="bg-transparent rounded-3xl border border-white text-white px-4 py-2">Download Now</button></li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
  
}

export default Header;
