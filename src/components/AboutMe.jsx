import React, { useEffect, useRef } from 'react';

const AboutMe = () => {
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
          <h2 ref={titleRef} className="text-3xl font-extrabold text-gray-800 mb-6 opacity-0">
            pero primero... Quién soy? 🧐
          </h2>
          <div ref={imgRef} className="mb-6 opacity-0">
            <img
              src="https://via.placeholder.com/300"
              alt="Foto de perfil"
              className="rounded-full shadow-lg w-48 h-48 object-cover"
            />
          </div>
          <div ref={textRef} className="md:w-3/4 opacity-0">
            <p className="text-lg text-gray-700 mb-4">Hi, I am Gonzalo!</p>
            <p className="text-lg text-gray-700 mb-4 text-left">
              Licensed Psychologist, Software Development Student and a Marketing Enthusiast from Chile living in Buenos Aires, Argentina. 
            </p>
            <p className="text-lg text-gray-700 mb-4 text-left">
              I run my own online psychology practice, BUT more important... 
              <br></br>I help others establish and grow their practices!
            </p>
            <p className="text-lg text-gray-700 mb-4 text-left">
              Mi enfoque se basa en [método, filosofía o enfoque], y siempre estoy en busca de nuevas formas de innovar y ofrecer soluciones que realmente marquen la diferencia. Creo firmemente en [alguna creencia o valor fundamental relacionado con tu trabajo].
            </p>
            <p className="text-lg text-gray-700 text-left">
              En mi tiempo libre, disfruto de [hobbies o intereses personales], lo que me ayuda a mantener un equilibrio saludable entre el trabajo y la vida personal. Estoy emocionado de conectar contigo y explorar cómo puedo ayudarte a alcanzar tus metas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;