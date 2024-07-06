import React from 'react';
import featureImage from '../../public/ftr1.png'; // Sesuaikan path sesuai struktur proyek Anda

const FeatureSection = () => {
  return (
    <section className="bg-white py-12" id='features'>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
        {/* Konten di Sisi Kiri */}
        <div className="md:w-1/2 flex flex-col justify-start mt-0 md:mt-0">
          <h3 className="text-base sm:text-lg font-semibold text-gray-600 mb-2">Our Feature</h3>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
            Providing International Transaction
          </h1>
          <p className="text-sm sm:text-base text-gray-700 mb-6" style={{ textJustify: 'justify' }}>
            Transaksi Internasional adalah fitur utama dari aplikasi Transactease. Transfer uang antar negara untuk pembayaran barang, jasa, atau investasi. Ini dapat dilakukan melalui aplikasi Transactease dengan berbagai metode pembayaran internasional, seperti transfer bank, kartu kredit, qris, dll. Pada Transactease terdapat fitur "Transaksi Internasional Berkelanjutan", Transactease akan secara otomatis menyesuaikan nilai tukar mata uang secara real-time saat melakukan transaksi. Ini akan mengurangi biaya konversi dan risiko fluktuasi nilai tukar yang tidak terduga.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-gray-600 mb-4">
            <button className="bg-orange-400 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-white hover:bg-orange-500 transition">
              Download Now
            </button>
            <div className="flex items-center gap-2 sm:gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
              </svg>
              <span className='text-gray-500'>123 456 789</span>
            </div>
          </div>
        </div>
        
        {/* Gambar di Sisi Kanan dengan Background Bulat Lebar */}
        <div className="md:w-1/2 mt-10 md:mt-0 px-4 flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm sm:max-w-md mx-auto md:max-w-none">
            <div
              className="absolute bg-yellow-950 rounded-[30px]"
              style={{
                width: '100%',
                height: '90%',
                top: '10px',
              }}
            ></div>
            <img
              src={featureImage}
              alt="Feature"
              className="relative z-10 rounded-md mx-auto md:ml-auto"
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '550px',
                marginRight: '67px',
                top: '-18px',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
