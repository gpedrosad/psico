import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-300 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-gray-800">{question}</h3>
        <svg
          className={`w-5 h-5 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
    const faqs = [
        {
          question: 'Who is this for?',
          answer:
            'Any Healthcare Provider Looking to Grow: If you’re looking to increase your patients as a healthcare professional or a Clinic, this service is for you.',
        },
        {
      question: 'What kind of results can I expect?',
      answer:
        'Our goal is to increase your number of patients and boost your practice’s growth',
    },
    {
      question: 'What if I don’t have time to be involved?',
      answer:
        'I handle everything for you, with minimal input needed on your part. I just need to check in with you for approval at key points.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Simply contact me to schedule an initial free consultation. We’ll discuss your needs, goals, and how i can help you grow your practice through a customized landing page and marketing strategies.',
    },
    {
      question: '¿Tienen descuentos por volumen?',
      answer:
        'Sí, ofrecemos descuentos por compras al por mayor. Por favor, contacta con nuestro equipo de ventas para más detalles.',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Preguntas Frecuentes</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;