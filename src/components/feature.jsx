import React from 'react';

function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Feature</h2>
        <h3 className="text-2xl font-bold mb-4">Providing International Transaction</h3>
        <p className="text-lg mb-8">
          Transaksi Internasional adalah fitur utama dari aplikasi Transactease. Transfer uang antar negara untuk pembayaran barang, jasa, atau investasi. Ini dapat dilakukan melalui aplikasi Transactease dengan berbagai metode pembayaran internasional, seperti transfer bank, kartu kredit, qris, dll. Pada Transactease terdapat fitur "Transaksi Internasional Berkelanjutan", Transactease akan secara otomatis menyesuaikan nilai tukar mata uang secara real-time saat melakukan transaksi. Ini akan mengurangi biaya konversi dan risiko fluktuasi nilai tukar yang tidak terduga.
        </p>
        <button className="bg-brown-500 text-white px-6 py-3 rounded-md hover:bg-brown-600">Download Now →</button>
        <div className="flex items-center mt-6">
          <span className="text-gray-600 font-bold">123 456 789</span>
          <img src="https://i.ibb.co/kM159h5/phone-icon.png" alt="Phone Icon" className="ml-2 w-6 h-6" />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
