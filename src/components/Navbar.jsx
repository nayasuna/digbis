// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-orange-400 to-orange-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">TransactEase</div>
        <div className="space-x-4 text-white">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About Us</a>
          <a href="#features" className="hover:text-gray-300">Features</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
          <a href="#download" className="bg-white text-orange-600 py-2 px-4 rounded">Download Now</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
