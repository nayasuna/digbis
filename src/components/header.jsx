import React, { useState } from 'react';
import Logo from '../../public/logo1.png'; // Sesuaikan dengan struktur proyek Anda
import HamburgerButton from '../components/HamburgerButton'; // Sesuaikan path ini sesuai dengan struktur proyek Anda

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full py-4 text-white px-4 flex justify-between items-center z-50" style={{ background: 'linear-gradient(90deg, #201616 0%, #CD934D 100%)' }}>
        {/* Logo */}
        <div className="flex items-center ml-4 md:ml-16">
          <img src={Logo} alt="TransactEase Logo" className="w-24 md:w-28 h-auto" /> {/* Ukuran logo responsif */}
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:items-center md:ml-4 ml-0"> {/* Menyesuaikan margin kiri di desktop */}
          <ul className="flex items-center space-x-8 lg:space-x-20"> {/* Menyesuaikan space-x untuk item menu */}
            <li><a href="#home" className="text-white hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="text-white hover:text-yellow-400">About Us</a></li>
            <li><a href="#blog" className="text-white hover:text-yellow-400">Blog</a></li>
            <li><a href="#features" className="text-white hover:text-yellow-400">Features</a></li>
            <li><a href="#contact" className="text-white hover:text-yellow-400">Contact</a></li>
            <li><button className="bg-transparent rounded-3xl border border-white text-white px-4 py-2">Login</button></li>
            <li><button className="bg-transparent rounded-3xl border border-white text-white px-4 py-2">Daftar</button></li>
          </ul>
        </nav>


        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <HamburgerButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav 
          className="fixed top-16 left-0 w-full bg-opacity-75 md:hidden z-50" 
          style={{ background: 'linear-gradient(90deg, #201616 0%, #CD934D 100%)' }}
        > 
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#home" className="text-white hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="text-white hover:text-yellow-400">About Us</a></li>
            <li><a href="#blog" className="text-white hover:text-yellow-400">Blog</a></li>
            <li><a href="#features" className="text-white hover:text-yellow-400">Features</a></li>
            <li><a href="#contact" className="text-white hover:text-yellow-400">Contact</a></li>
          </ul>
        </nav>
      )}
      {/* Spacer untuk mencegah konten tumpang tindih dengan header yang difiksasi */}
      <div className="h-16 md:h-24"></div>
    </>
  );
};

export default Header;
