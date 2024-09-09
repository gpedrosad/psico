import React, { useEffect, useRef } from 'react';

const BulletTerapia = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${index * 0.3}s`;
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });

    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const therapySignals = [
    'Sentir ganas de llorar repentinamente, sin grandes motivos.',
    'Sentir que las emociones te controlan y no sentirse capaz de gestionarlas efectivamente.',
    'Pensar muy negativamente de uno mismo o de los demás.',
    'Caer en hábitos poco saludables, dejar de ejercitarse, evitar juntas, mal dormir, entre otros.',
    'No tener ánimo ni esperanza en el futuro.',
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
          Señales Frecuentes para Ir a Terapia
        </h2>
        <ul className="space-y-6 text-left">
          {therapySignals.map((text, index) => (
            <li
              key={index}
              ref={(el) => (elementsRef.current[index] = el)}
              className="flex items-start opacity-0 transform translate-y-10"
            >
              <svg
                className="h-6 w-6 text-green-500 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-lg text-gray-700">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BulletTerapia;