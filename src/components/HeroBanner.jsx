import React from 'react';

const HeroBanner = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl">
        
        {/* Primera Columna (Texto) */}
        <div className="flex-1 p-8">
          <h1 className="text-4xl font-bold mb-4">Llena tu consulta de pacientes</h1>
          <p className="text-lg text-gray-700 mb-4">
              Creamos tu estrategia y página web para darla a conocer con publicidad en redes sociales
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Agenda tu consulta gratuita ahora
          </button>
        </div>

        {/* Segunda Columna (Imagen) */}
        <div className="flex-1 p-8">
        <div className="relative w-full h-auto">
  <img 
    src="public/images/yo.webp" 
    alt="Hero Image" 
    className="w-full h-auto object-cover rounded-2xl"
  />
  <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-100 to-transparent"></div>
</div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;