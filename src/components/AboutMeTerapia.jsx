import React, { useEffect, useRef } from 'react';

const AboutMeTerapia = () => {
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('blur-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white py-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h2 ref={titleRef} className="text-2xl font-extrabold text-gray-800 mb-6 opacity-0">
            Pero primero... ¿Quién soy? 🧐
          </h2>
          <div ref={imgRef} className="mb-6 opacity-0">
            <img
              src="images/yoo.jpg"
              alt="Foto de perfil"
              className="rounded-full shadow-lg w-48 h-48 object-cover"
            />
          </div>
          <div ref={textRef} className="md:w-3/4 opacity-0">
            <p className="text-xl text-gray-700 mb-4">Hola, soy Gonzalo.</p>
            <p className="text-lg text-gray-700 mb-4 text-left">
              Soy <strong>Psicólogo Clínico</strong> con más de 7 años de experiencia dedicado a <strong>Terapia Cognitivo Conductual</strong>. Ayudo a personas a superar la <strong>ansiedad</strong> y la <strong>depresión</strong>, y a reconectar con su bienestar emocional.
            </p>
            <p className="text-lg text-gray-700 mb-4 text-left">
              Mi enfoque se centra en acompañarte y que puedas recuperar el control de tu vida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeTerapia;