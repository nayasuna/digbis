import React, { useState } from 'react';
import Logo2 from "../../public/logo2.png";

function AboutSection() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id="about" className="bg-white py-20 px-4 mt-[-30px] md:mt-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center justify-center md:justify-start mb-8 md:mb-0">
            <img src={Logo2} alt="TransactEase Logo" className="w-60 h-60 md:w-72 md:h-72 ml-4 md:ml-24" />
          </div>
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-center md:text-left">About Us</h3>
            <p className={`text-lg mb-8 text-center md:text-left ${showMore ? '' : 'line-clamp-3'}`} style={{ textJustify: 'justify' }}>
              TransactEase merupakan sebuah platform atau layanan yang dikembangkan untuk memudahkan proses transaksi keuangan atau bisnis dari satu negara ke negara lain dengan cepat, mudah, dan tanpa batasan geografis yang signifikan. 
            </p>
            {!showMore && (
              <button onClick={toggleShowMore} className="bg-orange-400 rounded-full px-6 py-3 text-white hover:bg-orange-500 transition">
                Read More
              </button>
            )}
            {showMore && (
              <>
                <p className="text-lg mb-8 text-center md:text-left">
                Dibangun dengan fokus pada keamanan dan keandalan, TransactEase menawarkan pengalaman transaksi yang aman dan efisien di 
                seluruh dunia. Dengan akses mudah melalui platform digital, pengguna dapat mengelola transaksi mereka dengan lebih baik,
                 meningkatkan efisiensi operasional, dan memperluas jangkauan bisnis global mereka tanpa terkendala oleh batasan geografis. 
                 TransactEase tidak hanya menjadi mitra terpercaya dalam transaksi lintas batas, tetapi juga menjadi pilihan utama bagi individu, 
                 bisnis kecil, hingga perusahaan besar yang mengutamakan kemudahan dan keamanan dalam setiap transaksi internasional yang mereka 
                 lakukan.
                </p>
                <button onClick={toggleShowMore} className="bg-orange-400 rounded-full px-6 py-3 text-white hover:bg-orange-500 transition">
                  Read Less
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
