import React, { useState } from 'react';

function Faq() {
  const faqs = [
    {
      question: 'Apa TransactEase bisa digunakan seperti e-wallet pada umumnya?',
      answer:
        'Tentu saja! TransactEase menyediakan fitur yang sama seperti e-wallet seperti pada umumnya. Tetapi, TransactEase memiliki fitur tambahan lagi, yaitu bisa transfer ke luar negeri loh!',
    },
    {
      question: 'Apakah TransactEase aman digunakan?',
      answer:
        'TransactEase sudah terdaftar di OJK dan diawasi langsung oleh Bank Indonesia. Jadi, jangan ragu lagi untuk melakukan transaksi di TransactEase ya!',
    },
    {
      question: 'Bagaimana cara mendapatkan TransactEase?',
      answer:
        'Kamu bisa langsung mendapatkan TransactEase di PlayStore maupun AppleStore kamu. Kami tunggu ya!',
    },
    {
      question: 'Berapa biaya yang dibutuhkan untuk melakukan transfer luar negeri?',
      answer:
        'Kamu cukup menginputkan jumlah Rupiah nanti jumlah mata uang yang akan diterima penerima akan langsung ditampilkan. Tenang, biaya adminnya kecil!',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-16" id='faq'>
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="bg-gray-100 rounded-lg shadow-md p-8">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6">
            <button
              onClick={() => toggleAnswer(index)}
              className="flex justify-between items-center w-full p-4 bg-gray-200 rounded-lg focus:outline-none"
            >
              <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${openIndex === index ? 'transform rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={openIndex === index ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'}
                />
              </svg>
            </button>
            {openIndex === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
