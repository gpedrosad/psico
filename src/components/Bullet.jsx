import React, { useEffect, useRef } from 'react';

const Bullet = () => {
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

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">Beneficios de Nuestro Servicio</h2>
        <ul className="space-y-6 text-left">
          {[
            'No más dudas sobre tu futuro! Asegura tu estabilidad economica con más pacientes',
            'Dejar de depender de conocidos para conseguir pacientes',
            'Libertad para manejar tus consultas, donde y cuando quieras',
            'Elimina el agotamiento; consigue pacientes sin esfuerzo',
            'Transforma la pasión de tu carrera en una práctica independiente y exitosa',
            'Olvídate de las preocupaciones; consigue pacientes de manera constante y segura',
            'Un plan personalizado, diseñado exclusivamente para tu éxito como profesional independiente',

          ].map((text, index) => (
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

export default Bullet;