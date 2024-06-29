import React from 'react';
import apk from "../../public/apk.png";

const WaveBackground = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute bottom-0 left-0'>
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
        height: '90vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '10px', // Menyesuaikan padding atas untuk mengangkat konten
      }}
    >
      <WaveBackground />
      
      <div className="container mx-auto relative z-10 flex-1">
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold mb-4">Solusi Canggih Fintech untuk <br />Transaksi Internasional<br /> Tanpa Ribet </h1>
            <p className="text-lg mb-8">Dengan TransactEase hidup kamu akan menjadi lebih mudah</p>
            
            <button className="bg-orange-400 rounded px-6 py-3 text-black hover:bg-yellow-500">Download Now!</button>

            <div className="statistics-grid mt-10 flex justify-start gap-12">
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
          
          <div className="w-1/2">
            <img src={apk} alt="Large Image" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
