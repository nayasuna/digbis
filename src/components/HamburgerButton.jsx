import React from 'react';

const HamburgerButton = ({ isOpen, onClick }) => {
  return (
    <button onClick={onClick} className="focus:outline-none z-50 absolute top-4 right-4">
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
      </svg>
    </button>
  );
};

export default HamburgerButton;
