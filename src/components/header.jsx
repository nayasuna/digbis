import React, { useState } from 'react';
import Logo from '../../public/logo1.png'; // Sesuaikan path sesuai struktur proyek Anda
import HamburgerButton from '../components/HamburgerButton'; // Path ini disesuaikan dengan struktur proyek Anda

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="py-4 text-white px-4 flex justify-between items-center" style={{ background: 'linear-gradient(90deg, #201616 0%, #CD934D 100%)' }}>
      {/* Logo */}
      <div className="flex items-center ml-4 md:ml-16">
        <img src={Logo} alt="TransactEase Logo" className="w-24 md:w-28 h-auto" /> {/* Responsive logo size */}
      </div>
      
      {/* Desktop Menu */}
      <nav className="hidden md:flex md:items-center md:ml-4">
        <ul className="flex items-center space-x-8 lg:space-x-20">
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
        <HamburgerButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-black bg-opacity-75 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#home" className="text-white hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="text-white hover:text-yellow-400">About Us</a></li>
            <li><a href="#blog" className="text-white hover:text-yellow-400">Blog</a></li>
            <li><a href="#features" className="text-white hover:text-yellow-400">Features</a></li>
            <li><a href="#contact" className="text-white hover:text-yellow-400">Contact</a></li>
            <li><button className="bg-transparent rounded-3xl border border-white text-white px-4 py-2">Download Now</button></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
