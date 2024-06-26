import React from 'react';
import { Link } from 'react-router-dom'; // Pastikan Anda telah mengimpor Link dari react-router-dom

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-orange-600">TransactEase</div>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-600">Home</Link>
          <Link to="/about" className="text-gray-600">About Us</Link>
          <Link to="/features" className="text-gray-600">Features</Link>
        </nav>
        <button className="bg-orange-600 text-white py-2 px-4 rounded">Download Now</button>
      </div>
    </header>
  );
};

export default Header;
