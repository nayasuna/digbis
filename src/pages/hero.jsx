import React from 'react';
import apk from "../../public/apk.png";

const WaveBackground = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute bottom-0 left-0'>
    <path fill="#FFFFFF" fillOpacity="1" d="M0,160L80,186.7C160,213,320,267,480,256C640,245,800,171,960,122.7C1120,75,1280,53,1360,42.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
  </svg>
);

function HomeSection() {
  return (
    <section
      id="home"
      className="text-white py-20 px-4 relative z-10"
      style={{
        background: 'linear-gradient(90deg, #201616 0%, #CD934D 100%)',
        minHeight: '90vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '-50px', // Adjust this value to move the section upwards
      }}
    >
      <WaveBackground />

      <div className="container mx-auto relative flex-1">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-4 md:mb-0 md:ml-16 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4">Solusi Canggih Fintech untuk <br />Transaksi Internasional<br /> Tanpa Ribet</h1>
            <p className="text-lg mb-8">Dengan TransactEase hidup kamu akan menjadi lebih mudah</p>
            
            <button className="bg-orange-400 rounded-md px-6 py-3 text-white hover:bg-orange-500 transition">Daftar Sekarang</button>

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

          <div className="md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0 md:ml-4">
            <img src={apk} alt="Large Image" className="w-full h-auto md:max-w-full md:h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
