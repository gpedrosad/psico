import React, { useEffect, useRef, useState } from 'react';

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${index * 0.3}s`;
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={itemRef}
      className="border-b border-gray-300 py-4 opacity-0 transform translate-y-10 transition-opacity transition-transform duration-500 ease-in-out"
    >
      <div
        className="flex justify-between items-center cursor-pointer p-5"
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
      {isOpen && <p className="mt-2 text-gray-600 p-4">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: 'Para quién es esto?',
      answer:
        'Cualquier proveedor de servicios de salud que busque crecer: Si estás buscando aumentar tu número de pacientes como profesional de la salud o como clínica, este servicio es para ti.',
    },
    {
      question: 'Qué resultados puedo esperar?',
      answer:
        'Nuestro objetivo es aumentar tu número de pacientes y potenciar el crecimiento de tu práctica.',
    },
    {
      question: 'Qué pasa si no tengo el tiempo para hacerlo?',
      answer:
        'Yo me encargo de todo por ti, con mínima participación de tu parte. Solo necesito consultarte para tu aprobación en puntos clave.',
    },
    {
      question: 'Cómo puedo empezar?',
      answer:
        'Simplemente contáctame para agendar una consulta inicial gratuita. Hablaremos sobre tus necesidades, objetivos y cómo puedo ayudarte a hacer crecer tu práctica a través de una página de aterrizaje personalizada y estrategias de marketing.',
    },
    {
      question: 'Es necesaria una página para conseguir pacientes?',
      answer:
        'Una página web profesional es clave para tu presencia online y generar confianza en potenciales pacientes. Es tu tarjeta de presentación digital y un lugar donde los pacientes pueden conocerte, entender tus servicios y agendar fácilmente.',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Preguntas Frecuentes</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
      ))}
    </div>
  );
};

export default FAQ;