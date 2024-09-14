import React from 'react';

const steps = [
  {
    title: '1. Agendar',
    description: 'Se programa una fecha y horario conveniente para ambos. Recibirás un enlace para conectarte a la sesión el día programado.'
  },
  {
    title: '2. Inicio',
    description: 'Te conectarás a través de una plataforma de videollamada. Al inicio, se establecerán los objetivos de la sesión, donde podrás compartir tus preocupaciones.'
  },
  {
    title: '3. Desarrollo',
    description: 'Usaremos el enfoque cognitivo-conductual para identificar patrones de pensamiento y comportamiento que contribuyen a tus dificultades.'
  },
  {
    title: '4. Cierre',
    description: 'Al finalizar, se hará un resumen de los temas discutidos y se brindarán recomendaciones para el periodo entre sesiones.'
  }
];

const ServicioTerapia = () => (
  <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
    <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-6">
        Cómo es ir a terapia?
    </h1>
    <p className="text-base md:text-lg text-gray-700 mb-6 text-center">
      Ofrezco un espacio seguro y confidencial para mejorar tu bienestar emocional. Así es una sesión típica de 50 minutos:
    </p>

    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold text-blue-500 mb-2">{step.title}</h2>
          <p className="text-gray-700">{step.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ServicioTerapia;