import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen-lg mx-auto px-4 mt-8 flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
      <div className="lg:ml-2">
        <div className="text-black text-5xl font-semibold font-Poppins leading-10">
          Solusi Canggih Fintech untuk Transaksi Internasional Tanpa Ribet
        </div>
        <div className="mt-4 text-black text-2xl font-medium font-Poppins leading-9 opacity-60">
          Dengan TransactEase hidup kamu akan menjadi lebih mudah
        </div>
        <div className="mt-4 flex items-center">
          <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-lg font-medium font-Poppins rounded-md transition duration-300">
            Download Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
