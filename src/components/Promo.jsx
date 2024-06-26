import React from 'react';

const Promo = () => {
  return (
    <section className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex justify-center items-center">
        <div className="w-full lg:w-1/2 px-4">
          <h2 className="text-4xl font-bold mb-4">CASHBACK 20%</h2>
          <p className="text-lg mb-6">
            SPECIAL PROMO NEW ACCOUNT CASHBACK 20%
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
        <div className="hidden lg:block w-1/2">
          <img src="promo-image.jpg" alt="Promo" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Promo;