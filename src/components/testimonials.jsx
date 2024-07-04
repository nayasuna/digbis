import React, { useState } from 'react';
import user1 from "../../public/ppl1.png";
import user2 from "../../public/ppl2.png";
import user3 from "../../public/ppl3.png";
import user4 from "../../public/user4.png";
import user5 from "../../public/user5.png";
import user6 from "../../public/user6.png";

function Testimonial() {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      quote: "Transactease merupakan aplikasi yang sangat membantu pengguna dalam melakukan transaksi internasional.",
      name: "Mike Torello",
      position: "CEO of Initech",
      image: user1
    },
    {
      id: 2,
      quote: "Pembuatan akun Transactease sangat bagus dan menarik, karena pengguna mendapatkan cash back berupa poin atau saldo.",
      name: "Lili Rose",
      position: "Marketing Manager of Upnow",
      image: user2
    },
    {
      id: 3,
      quote: "TransactEase menyediakan berbagai fitur tambahan yang berguna seperti laporan keuangan, dll.",
      name: "Thomas Magnum",
      position: "Barellon NSW",
      image: user3
    },
    {
      id: 4,
      quote: "Client testimonial 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula nulla vel leo condimentum.",
      name: "Angelika Brown",
      position: "COO of ABC Inc.",
      image: user4
    },
    {
      id: 5,
      quote: "Client testimonial 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula nulla vel leo condimentum.",
      name: "Maxton Will",
      position: "CTO of XYZ Corp.",
      image: user5
    },
    {
      id: 6,
      quote: "Client testimonial 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula nulla vel leo condimentum.",
      name: "Emma Johnson",
      position: "Marketing Director at PQR Ltd.",
      image: user6
    }
  ];

  return (
    <div className="container mx-auto py-16 bg-gray-50" id='blog'>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">GET TO KNOW OUR CLIENTS</h2>
        <p className="text-gray-500">What our clients have to say about us</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.slice(0, showAll ? testimonials.length : 3).map(testimonial => (
          <div key={testimonial.id} className="testimonial-card bg-white rounded-lg shadow-md p-6 hover:bg-yellow-600">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-quote text-brown-500" viewBox="0 0 16 16" style={{ marginTop: '-10px', marginLeft: '-10px' }}>
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                </svg>
              </div>
              <div className="ml-4">
                <p className="font-medium text-gray-800">{testimonial.quote}</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center mt-12">
          <button onClick={toggleShowAll} className="bg-orange-400 hover:bg-orange-500 transition text-white font-bold py-2 px-4 rounded-full">View More</button>
        </div>
      )}

      {showAll && (
        <div className="flex justify-center mt-12">
          <button onClick={toggleShowAll} className="bg-orange-400 hover:bg-orange-500 transition text-white font-bold py-2 px-4 rounded-full">View Less</button>
        </div>
      )}
    </div>
  );
}

export default Testimonial;
