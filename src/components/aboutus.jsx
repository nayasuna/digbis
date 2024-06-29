import React from 'react';
import Logo2 from "../../public/logo2.png";

function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 px-4 mt-[-30px] md:mt-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center justify-center md:justify-start">
            <img src={Logo2} alt="TransactEase Logo" className="w-60 h-60 md:w-72 md:h-72 ml-16 md:ml-24" />
          </div>
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-lg mb-8">
              TransactEase merupakan sebuah platform atau layanan yang dikembangkan untuk memudahkan proses transaksi keuangan atau bisnis dari satu negara ke negara lain dengan cepat, mudah, dan tanpa batasan geografis yang signifikan.
            </p>
            <button className="bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-orange-500">Read More →</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
