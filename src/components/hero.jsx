import React from 'react';
import apk from "../../public/apk.png";

const WaveBackground = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute bottom-0 left-0 mb-[-50px]'>
    <path fill="#FFFFFF" fillOpacity="1" d="M0,160L120,176C240,192,480,224,720,213.3C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
  </svg>
);

function HomeSection() {
  return (
    <section
      id="home"
      className="text-white py-20 px-4 relative"
      style={{
        background: 'linear-gradient(90deg, #201616 0%, #CD934D 100%)',
        minHeight: '90vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <WaveBackground />
      
      <div className="container mx-auto relative flex-1">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4 text-center md:text-left">Solusi Canggih Fintech untuk <br />Transaksi Internasional<br /> Tanpa Ribet </h1>
            <p className="text-lg mb-8 text-center md:text-left">Dengan TransactEase hidup kamu akan menjadi lebih mudah</p>
            
            <button className="bg-orange-400 rounded px-6 py-3 text-black hover:bg-yellow-500 block mx-auto md:mx-0">Download Now!</button>

            <div className="statistics-grid mt-10 flex justify-center md:justify-start gap-12">
              <div className="stat-item flex flex-col items-center">
                <span className="stat-number block text-white text-2xl font-bold mb-2">
                  4 Years
                </span>
                <p className="stat-description text-white opacity-60 text-sm">
                  In Business
                </p>
              </div>

              <div className="stat-item flex flex-col items-center">
                <span className="stat-number block text-white text-2xl font-bold mb-2">
                  100+
                </span>
                <p className="stat-description text-white opacity-60 text-sm">
                  Products
                </p>
              </div>

              <div className="stat-item flex flex-col items-center">
                <span className="stat-number block text-white text-2xl font-bold mb-2">
                  30+
                </span>
                <p className="stat-description text-white opacity-60 text-sm">
                  Branches
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <img src={apk} alt="Large Image" className="w-full h-auto md:max-w-full md:h-auto" />
            {/* Menggunakan max-width untuk mengontrol ukuran gambar di layar desktop */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
