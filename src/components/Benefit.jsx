import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Benefit = ({ icon, title, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // El porcentaje del componente visible para activar la animación
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center md:items-start p-4 transition-opacity duration-1000 ease-in-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Ícono */}
      <div className="text-blue-500 text-4xl mb-4 md:mb-0 md:mr-4">
        {icon}
      </div>

      {/* Contenido */}
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Benefit;