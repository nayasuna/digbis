import React, { useState } from 'react';

function Faq() {
  const faqs = [
    {
      question: 'How do I get a virtual card?',
      answer:
        'After sign in to the platform, click on cards from the navigation bar below and then proceed to create a virtual card. You can either create a Dollar card or a Naira card',
    },
    {
      question: 'How much do I get Charged for online transactions?',
      answer:
        'After sign in to the platform, click on cards from the navigation bar below and then proceed to create a virtual card. You can either create a Dollar card or a Naira card',
    },
    {
      question: 'How much is the maintenance fee for your dollar cards?',
      answer:
        'After sign in to the platform, click on cards from the navigation bar below and then proceed to create a virtual card. You can either create a Dollar card or a Naira card',
    },
    {
      question: 'Do I get charged for withdrawals?',
      answer:
        'After sign in to the platform, click on cards from the navigation bar below and then proceed to create a virtual card. You can either create a Dollar card or a Naira card',
    },
    {
      question: 'Whats the maximum amount I can transfer to other banks?',
      answer:
        'After sign in to the platform, click on cards from the navigation bar below and then proceed to create a virtual card. You can either create a Dollar card or a Naira card',
    },
    {
      question: "What happens if I don't redeem my QR Code reward?",
      answer:
        'After sign in to the platform, click on cards from the navigation bar below and then proceed to create a virtual card. You can either create a Dollar card or a Naira card',
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
