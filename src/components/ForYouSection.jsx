import React from 'react';

const ForYouSection = () => {
    const items = [
        "Te hiciste un Instagram profesional pero no llegaron pacientes",
        "Te preocupa la inestabilidad económica y quieres asegurar un flujo constante de pacientes",
        "Buscar pacientes te agota y prefieres centrarte en lo que realmente amas: ayudar a otros",
        "Necesitas una estrategia que se ajuste a tu estilo y te garantice obtener pacientes.",
    ];

  return (
    <div className="bg-white text-black p-8 flex flex-col justify-center items-center mt-10 mb-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        ESTO ES <span className="text-blue-600">PARA TÍ</span> SÍ...
      </h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-start space-x-4 text-center">
            <span role="img" aria-label="check" className="text-blue-600 text-xl mt-1">✅</span>
            <p className="text-lg leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForYouSection;