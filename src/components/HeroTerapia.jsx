import React from 'react';

const HeroTerapia = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl">
        
        {/* Primera Columna (Texto) */}
        <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Recupera tu bienestar emocional</h1>          
          <p className="text-lg text-gray-700 mb-4">
          Terapia profesional para superar la depresión y la ansiedad
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Agenda tu consulta ahora
          </button>
        </div>

        {/* Segunda Columna (Imagen) */}
        <div className="flex-1 p-8">
        <div className="relative w-full h-auto">
          <img 
            src="public/images/yo.png" 
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

export default HeroTerapia;