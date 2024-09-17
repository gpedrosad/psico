import React, { useState } from 'react';

const Review = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre:', name);
    console.log('Ciudad:', city);
    console.log('Comentario:', comment);
    // Aquí podrías manejar el envío de la reseña (e.g., API, base de datos, etc.)
  };

  return (
    <div className="flex flex-col items-center py-10 bg-gray-50">
      {/* Imagen de perfil */}
      <div className="mb-6">
        <img
          src="images/yoo.jpg"
          alt="Foto de perfil"
          className="rounded-full w-48 h-48 object-cover shadow-lg"
        />
      </div>

      {/* Texto guía para dejar un buen comentario */}
      <div className="max-w-4xl text-center mb-8 m-10">
        <h2 className="text-3xl font-bold mb-4">Tu opinión importa 🗣️</h2>
        <p className="text-lg text-gray-700 mb-4">
          Me encantaría saber cómo ha sido tu experiencia. Algunas preguntas que pueden guiarte:
        </p>
        <ul className="list-disc list-inside text-left mb-6 text-lg text-gray-700">
          <li>¿Cómo te sentiste en las sesiones?</li>
          <li>¿Qué impacto tuvo en tu bienestar emocional?</li>
          <li>¿Recomendarías este servicio a alguien más? ¿Por qué?</li>
        </ul>
      </div>

      {/* Formulario de reseñas */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mb-32">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-left"> {/* Alineación a la izquierda */}
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="mb-4 text-left"> {/* Alineación a la izquierda */}
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="city">
              Ciudad
            </label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu ciudad"
              required
            />
          </div>

          <div className="mb-4 text-left"> {/* Alineación a la izquierda */}
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="comment">
              Comentario
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escribe aquí tu comentario"
              rows="5"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Enviar Reseña
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;