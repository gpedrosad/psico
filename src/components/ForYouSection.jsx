import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ForYouSection = () => {
  const items = [
    "Estas aburrido de depender de tus conocidos para conseguir pacientes",
    "Te hiciste un Instagram, hiciste que tus amigos lo compartieran y apenas te llegaron pacientes",
    "Quieres libertad para organizar tus horarios de atención",
  ];

  return (
    <div className="bg-black text-white p-8">
      <h2 className="text-3xl font-bold mb-6">
        ESTO ES <span className="text-green-500">PARA TÍ</span> SÍ...
      </h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <FaCheckCircle className="text-green-500 text-xl mt-1" />
            <p className="text-lg leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForYouSection;