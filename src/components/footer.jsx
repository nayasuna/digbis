// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p>TransactEase - Aplikasi Fintech Terpercaya</p>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About Us</a>
          <a href="#" className="hover:text-gray-400">Features</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
        <div className="mt-4">
          <p>© 2024 TransactEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
