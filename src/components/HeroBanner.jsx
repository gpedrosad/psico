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
            Llamada a la Acción
          </button>
        </div>

        {/* Segunda Columna (Imagen) */}
        <div className="flex-1 p-8">
          <img 
            src="https://via.placeholder.com/600" 
            alt="Hero Image" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;