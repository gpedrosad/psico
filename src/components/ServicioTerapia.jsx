import React from 'react';

const ServicioTerapia = () => {
  return (
    <div className="bg-gray-100 p-4 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-4 md:mb-6">
        Servicio de Terapia Individual en Línea
      </h1>
      <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 text-center">
        El servicio de terapia individual en línea ofrece un espacio seguro y confidencial para abordar tus preocupaciones y mejorar tu bienestar emocional. A continuación, te describimos cómo se desarrolla una sesión típica de 50 minutos:
      </p>

      <div className="space-y-4">
        {/* Paso 1 */}
        <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold text-blue-500 mb-2">1. Agendar</h2>
          <p className="text-gray-700">
            Se programa una fecha y horario conveniente para ambos. Recibirás un enlace para conectarte a la sesión el día programado.
          </p>
        </div>

        {/* Paso 2 */}
        <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold text-blue-500 mb-2">2. Inicio</h2>
          <p className="text-gray-700">
            En el momento programado, te conectarás a través de una plataforma de videollamada. Asegúrate de tener una buena conexión a internet y un entorno tranquilo y privado.
          </p>
          <p className="text-gray-700 mt-2">
            Al comienzo de la sesión, se te dará la bienvenida y se dedicarán unos minutos para establecer los objetivos de la sesión. Puedes compartir tus preocupaciones o metas que deseas trabajar.
          </p>
        </div>

        {/* Paso 3 */}
        <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold text-blue-500 mb-2">3. Desarrollo</h2>
          <p className="text-gray-700">
            Durante la sesión, utilizaremos el enfoque cognitivo-conductual para identificar patrones de pensamiento y comportamiento que puedan estar contribuyendo a tus dificultades.
          </p>
          <p className="text-gray-700 mt-2">
            Mediante preguntas y reflexiones, profundizaremos en la comprensión de tus pensamientos, emociones y reacciones.
          </p>
        </div>

        {/* Paso 4 */}
        <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm">
          <h2 className="text-lg md:text-xl font-semibold text-blue-500 mb-2">4. Cierre</h2>
          <p className="text-gray-700">
            Al final de la sesión, haremos un resumen de los temas discutidos y las recomendaciones para el período entre sesiones. También tendrás la oportunidad de hacer preguntas o aclarar cualquier inquietud.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicioTerapia;