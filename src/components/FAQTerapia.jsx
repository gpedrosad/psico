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
      className="border-b border-gray-300 py-4 px-5 opacity-0 transform translate-y-10 transition-opacity transition-transform duration-500 ease-in-out"
    >
      <div
        className="flex justify-between items-center cursor-pointer p-4 bg-white rounded-lg shadow-sm"
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
      {isOpen && <p className="mt-2 text-gray-600 p-4 rounded-lg">{answer}</p>}
    </div>
  );
};

const FAQTerapia = () => {
  const faqs = [
    {
      question: '¿Por qué debería ir a terapia si puedo manejar mis problemas solo?',
      answer:
        'A veces, aunque parezca que podemos manejar nuestros problemas, un terapeuta puede ofrecer una perspectiva profesional y herramientas efectivas que te ayudarán a abordar tus desafíos de una manera más saludable y eficiente.',
    },
    {
      question: '¿Es la terapia solo para personas con problemas graves?',
      answer:
        'No. La terapia es útil tanto para problemas graves como para dificultades cotidianas. Cualquiera que quiera mejorar su bienestar emocional, enfrentar situaciones de estrés, ansiedad o mejorar su autoconocimiento puede beneficiarse.',
    },
    {
      question: '¿Cuánto tiempo lleva ver resultados en terapia?',
      answer:
        'El tiempo que lleva ver resultados varía según la persona y los problemas que esté abordando. Algunas personas ven mejoras significativas en unas pocas sesiones, mientras que otras pueden necesitar un tiempo más largo para trabajar en temas más complejos.',
    },
    {
      question: '¿Y si no me siento cómodo en terapia?',
      answer:
        'Es normal sentirse nervioso al inicio, pero la principal intención es crear un espacio seguro y sin juicios.',
    },
    {
      question: '¿La terapia es muy cara?',
      answer:
        'El costo de la terapia puede variar, pero es una inversión en tu bienestar emocional. ',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto py-10 px-5">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Preguntas Frecuentes sobre Ir a Terapia</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
      ))}
    </div>
  );
};

export default FAQTerapia;