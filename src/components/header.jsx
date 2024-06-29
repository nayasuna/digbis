import React from 'react';
import Logo from "../../public/logo1.png";

function Header() {
  
  return (
    <header className="py-4 text-white px-4 flex justify-between items-center" style={{ background: 'linear-gradient(90deg, #201616 0%, #CD934D 100%)' }}>
      <div className="flex items-center">
        <img src={Logo} alt="TransactEase Logo" className="w-22 h-16" />
      </div>
      <nav>
        <ul className="flex items-center space-x-32 mr-4">
          <li><a href="#home" className="text-white hover:text-yellow-400">Home</a></li>
          <li><a href="#about" className="text-white hover:text-yellow-400">About Us</a></li>
          <li><a href="#blog" className="text-white hover:text-yellow-400">Blog</a></li>
          <li><a href="#features" className="text-white hover:text-yellow-400">Features</a></li>
          <li><a href="#contact" className="text-white hover:text-yellow-400">Contact</a></li>
          <li><button className="bg-transparent rounded-3xl border border-white text-white px-4 py-2">Download Now</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
