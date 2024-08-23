import React from 'react';
import { FaCheckCircle, FaLightbulb, FaLock } from 'react-icons/fa';
import Benefit from './Benefit';

const BenefitsSection = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">5 Razones de por qué trabajan conmigo</h2>
      
      {/* Contenedor de Beneficios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Benefit
          icon={<FaCheckCircle />}
          title="Investigo tu nicho"
          description="Nuestros servicios garantizan una alta disponibilidad y fiabilidad para asegurar tu tranquilidad."
        />
        <Benefit
          icon={<FaLightbulb />}
          title="Defino tu estrategia publicitaria"
          description="Estamos siempre a la vanguardia, ofreciendo soluciones innovadoras para mejorar tu experiencia."
        />
        <Benefit
          icon={<FaLock />}
          title="Ejecutamos y conseguimos pacientes"
          description="Protegemos tus datos con las mejores prácticas de seguridad para mantenerlos seguros."
        />
        <Benefit
          icon={<FaLock />}
          title="Lo hice yo"
          description="Protegemos tus datos con las mejores prácticas de seguridad para mantenerlos seguros."
        />
      </div>
    </div>
  );
};

export default BenefitsSection;