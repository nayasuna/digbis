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
                TransactEase menyediakan berbagai metode pembayaran internasional, seperti transfer bank, kartu kredit, dan QRIS, dengan fitur unggulan "Transaksi Internasional Berkelanjutan" yang secara otomatis menyesuaikan nilai tukar mata uang secara real-time. Hal ini tidak hanya mengurangi biaya konversi, tetapi juga mengurangi risiko fluktuasi nilai tukar yang tidak terduga. TransactEase bertujuan untuk menyediakan solusi transaksi yang efisien dan aman bagi pengguna di seluruh dunia.
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
