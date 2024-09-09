import React from 'react';
import { FaHeart, FaLeaf, FaSmile, FaHandsHelping, FaBalanceScale } from 'react-icons/fa';
import Benefit from './Benefit';

const BeneficiosTerapia = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Beneficios de Ir a Terapia</h2>
      
      {/* Contenedor de Beneficios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        
        {/* Beneficio 1: Bienestar emocional */}
        <Benefit
          icon={<FaHeart />}
          title="Bienestar emocional"
          description="Experimenta una mejoría en tu salud mental y emocional al recibir apoyo profesional y aprender herramientas para manejar el estrés, la ansiedad y otros desafíos."
        />

        {/* Beneficio 2: Autoconocimiento */}
        <Benefit
          icon={<FaLeaf />}
          title="Autoconocimiento"
          description="Explora tus pensamientos, emociones y comportamientos en un ambiente seguro, lo que te permitirá desarrollar un mayor entendimiento de ti mismo y de tus patrones de pensamiento."
        />

        {/* Beneficio 3: Mejora tu autoestima */}
        <Benefit
          icon={<FaSmile />}
          title="Mejora tu autoestima"
          description="Desarrolla una imagen más positiva y saludable de ti mismo al abordar y superar creencias negativas y autocríticas."
        />

        {/* Beneficio 4: Autocuidado */}
        <Benefit
          icon={<FaHandsHelping />}
          title="Autocuidado"
          description="Aprende a priorizar tu propio bienestar y a establecer límites saludables, lo que te permitirá mantener un equilibrio entre tus responsabilidades y tu salud mental."
        />

      </div>
    </div>
  );
};

export default BeneficiosTerapia;