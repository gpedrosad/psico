import React from 'react';
import { FaCheckCircle, FaLightbulb, FaLock } from 'react-icons/fa';
import Benefit from './Benefit';

const BenefitsSection = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Nuestros Beneficios</h2>
      
      {/* Contenedor de Beneficios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Benefit
          icon={<FaCheckCircle />}
          title="Alta Confiabilidad"
          description="Nuestros servicios garantizan una alta disponibilidad y fiabilidad para asegurar tu tranquilidad."
        />
        <Benefit
          icon={<FaLightbulb />}
          title="Innovación Constante"
          description="Estamos siempre a la vanguardia, ofreciendo soluciones innovadoras para mejorar tu experiencia."
        />
        <Benefit
          icon={<FaLock />}
          title="Seguridad"
          description="Protegemos tus datos con las mejores prácticas de seguridad para mantenerlos seguros."
        />
      </div>
    </div>
  );
};

export default BenefitsSection;