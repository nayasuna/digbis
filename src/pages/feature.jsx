import React from 'react';
import img1 from '../../public/inter1.png'; 
import Card from '../components/card'
import img2 from '../../public/card2.png';

const FeatureSection = () => {
  const cards = [
    { 
      title: 'Transaksi Internasional', 
      description: 'Transaksi Internasional dapat dilakukan melalui aplikasi Transactease dengan berbagai metode pembayaran internasional, seperti transfer bank, kartu kredit, dan qris',
      imageUrl: img1
    },
    { 
      title: 'Laporan Keuangan', 
      description: 'Transcatease menyediakan laporan keuangan real-time dengan grafik dan visualisasi data untuk memudahkan analisis. Lacak pengeluaran, pendapatan, dan analisis keuangan dengan keamanan data tinggi.', 
      imageUrl: img2
    },
    { 
      title: 'Transaksi Internasional', 
      description: 'Transaksi Internasional dapat dilakukan melalui aplikasi Transactease dengan berbagai metode pembayaran internasional, seperti transfer bank, kartu kredit, dan qris',
      imageUrl: img1
    },
  ];

  return (
    <div className="mt-10" id='features'>
      <h1 className="text-3xl font-bold text-center mb-6">Fitur TransactEase</h1>
      <div className="flex justify-center space-x-4">
        {cards.map((card, index) => (
          <Card 
            key={index} 
            title={card.title} 
            description={card.description} 
            imageUrl={card.imageUrl} 
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
