import React from 'react';
import Benefit from './Benefit';

const BenefitsSection = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-4xl font-bold text-center mb-8">3 Razones de por qué trabajan conmigo</h2>
      
      {/* Contenedor de Beneficios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Benefit
          icon="🔍"
          title="Investigo tu nicho"
          description="Analizo a fondo tu nicho para ofrecer las mejores soluciones específicas para tu mercado."
        />
        <Benefit
          icon="💡"
          title="Defino tu estrategia publicitaria"
          description="Desarrollamos estrategias publicitarias innovadoras para maximizar tu retorno de inversión."
        />

        <Benefit
          icon="🏆"
          title="Lo hice yo"
          description="Te muestro resultados comprobados de estrategias que personalmente he implementado con éxito."
        />
      </div>
    </div>
  );
};

export default BenefitsSection;