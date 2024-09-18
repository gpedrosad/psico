import React, { useState } from 'react';

const reviews = [
  {
    nombre: 'Paulina Rodriguez',
    ciudad: 'Santiago',
    comentario:
      'Me han servido mucho las sesiones...\nLa verdad me he sentido mucho mejor... A través de estas entendí que no es normal sentirse mal y de a poco he ido recuperando confianza y las ganas de retomar actividades que había dejado.\nCreo que hay que normalizar el sentirnos bien y para eso es necesario tomar sesiones.\nMe gusta la atención, ha sido muy profesional y también personalizada, pero sobre todo muy efectiva. El cambio desde que tomo las sesiones ha sido notorio para mí y mi entorno... ¡Así que las recomiendo!',
  },
  {
    nombre: 'Nicolás Gresve P.',
    ciudad: 'Santiago',
    comentario:
      'Siempre sentí una genuina preocupación por parte de Gonzalo en cuanto a mi estado y avances. Fue un guía y un adecuado apoyo. ¡Totalmente recomendado!',
  },
  {
    nombre: 'Giovanna',
    ciudad: 'Santiago',
    comentario:
      'Gonzalo es súper profesional, abierto con los pensamientos y sentimientos de uno. No juzga (como me pasó con otros profesionales). Me ayuda a descubrir mi rumbo cuando he estado desorientada y a seguir mis instintos pero marcando límites, porque eso me faltaba. Desde que inicié las sesiones me siento más tranquila y he vuelto a sentirme feliz, como no me había sentido hace mucho tiempo.\nGonzalo da tareas, no sólo escucha, ayuda a construir la propia sanación y eso es más significativo, ya que me ha dado herramientas para enfrentarme a mi realidad.\nRecomendado al 1000% 😊',
  },
  {
    nombre: 'Irene Muñoz Weber',
    ciudad: 'Concepción',
    comentario:
      'En honor a la verdad, fue una experiencia excelente. Me sentí muy respetada y acompañada; me sentí que estaba con un amigo sin serlo. El trabajo realizado fue muy profesional y puntual. Solo puedo agradecer.',
  },
  {
    nombre: 'Barbara Quijada',
    ciudad: 'Temuco',
    comentario:
      'Estuve en terapia con Gonzalo, me sentí muy cómoda desde la primera sesión. Tenía muchos temas que necesitaba sanar y no encontraba salida a mis pensamientos. Gonzalo me ayudó mucho a aclarar mi mente, entender las cosas desde otro punto de vista, a mirar de manera distinta el pasado, el presente y el futuro. Me ayudó también con sentimientos de culpa; con su lógica y conversación logró muchos cambios en mi forma de pensar. Tuve muchas sesiones con él y cada una valió la pena; en cada una vaciaba más mi mochila emocional. Es una persona lógica y amable, ¡lo recomiendo al 100%! Además es muy preocupado y atento.',
  },
  // Puedes mantener las reseñas anteriores o añadir más aquí
];

const ReviewsTerapia = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-11/12 md:w-1/2 mx-auto bg-white shadow-xl rounded-lg overflow-hidden mt-10 mb-14">
      {/* Título con emoji */}

      <div className="relative">
        <div className="p-20 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {reviews[currentIndex].nombre}
          </h2>
          <p className="text-gray-500 italic">{reviews[currentIndex].ciudad}</p>
          <p className="mt-6 text-gray-700 leading-relaxed whitespace-pre-line">
            &ldquo;{reviews[currentIndex].comentario}&rdquo;
          </p>
        </div>

        {/* Flecha izquierda */}
        <button
          onClick={prevReview}
          aria-label="Anterior"
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 text-gray-600 hover:text-gray-800"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Flecha derecha */}
        <button
          onClick={nextReview}
          aria-label="Siguiente"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 text-gray-600 hover:text-gray-800"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ReviewsTerapia;