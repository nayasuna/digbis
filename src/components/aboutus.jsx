// components/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="mb-4">
          TransactEase merupakan sebuah platform atau layanan yang dikembangkan untuk memudahkan proses transaksi keuangan atau bisnis dari satu negara ke negara lain dengan cepat, mudah, dan tanpa batasan geografis yang signifikan.
        </p>
        <button className="bg-orange-600 text-white py-2 px-4 rounded">Read More</button>
      </div>
    </section>
  );
};

export default AboutUs;
