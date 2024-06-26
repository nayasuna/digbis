// components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "TransactEase merupakan aplikasi yang sangat membantu pengguna dalam melakukan transaksi internasional.",
      name: "Andreas Antonsen",
      title: "CEO Google",
      img: "https://via.placeholder.com/150" // Gambar placeholder, ganti dengan URL gambar yang sebenarnya
    },
    {
      quote: "Pembuatan akun TransactEase sangat bagus dan menarik, karena pengguna mendapatkan cashback berupa poin atau saldo.",
      name: "James Willy",
      title: "CEO Facebook",
      img: "https://via.placeholder.com/150" // Gambar placeholder, ganti dengan URL gambar yang sebenarnya
    },
    {
      quote: "TransactEase menyediakan fitur tambahan yang bagus untuk laporan keuangan.",
      name: "Alice Quesen",
      title: "CEO YouTube",
      img: "https://via.placeholder.com/150" // Gambar placeholder, ganti dengan URL gambar yang sebenarnya
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Users Said</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
              <img
                src={testimonial.img}
                alt={`${testimonial.name} profile`}
                className="w-24 h-24 mb-4 rounded-full object-cover"
              />
              <p className="mb-4 text-gray-700 italic">“{testimonial.quote}”</p>
              <h4 className="text-xl font-bold">{testimonial.name}</h4>
              <p className="text-gray-500">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
