// components/Testimonials.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

// Import gambar testimonial
import user1 from '../../public/ppl1.png';
import user2 from '../../public/ppl2.png';
import user3 from '../../public/ppl3.png';

// Import Swiper CSS dan modul Navigation
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "TransactEase merupakan aplikasi yang sangat membantu pengguna dalam melakukan transaksi internasional.",
      name: "Andreas Antonsen",
      title: "CEO Google",
      img: user1
    },
    {
      quote: "Pembuatan akun TransactEase sangat bagus dan menarik, karena pengguna mendapatkan cashback berupa poin atau saldo.",
      name: "James Willy",
      title: "CEO Facebook",
      img: user2
    },
    {
      quote: "TransactEase menyediakan fitur tambahan yang bagus untuk laporan keuangan.",
      name: "Alice Quesen",
      title: "CEO YouTube",
      img: user3
    },
    {
      quote: "TransactEase menyediakan fitur tambahan yang bagus untuk laporan keuangan.",
      name: "Alice Quesen",
      title: "CEO YouTube",
      img: user3
    },
    {
      quote: "TransactEase menyediakan fitur tambahan yang bagus untuk laporan keuangan.",
      name: "Alice Quesen",
      title: "CEO YouTube",
      img: user3
    },
    {
      quote: "TransactEase menyediakan fitur tambahan yang bagus untuk laporan keuangan.",
      name: "Alice Quesen",
      title: "CEO YouTube",
      img: user3
    },
    {
      quote: "TransactEase menyediakan fitur tambahan yang bagus untuk laporan keuangan.",
      name: "Alice Quesen",
      title: "CEO YouTube",
      img: user3
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Users Said</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          modules={[Navigation]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
                <img
                  src={testimonial.img}
                  alt={`${testimonial.name} profile`}
                  className="w-24 h-24 mb-4 rounded-full object-cover"
                />
                <p className="mb-4 text-gray-700 italic">“{testimonial.quote}”</p>
                <h4 className="text-xl font-bold">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
