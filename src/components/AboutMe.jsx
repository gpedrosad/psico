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
              src="images/yoo.jpg"
              alt="Foto de perfil"
              className="rounded-full shadow-lg w-48 h-48 object-cover"
            />
          </div>
          <div ref={textRef} className="md:w-3/4 opacity-0">
          <p class="text-xl text-gray-700 mb-4">Hola, soy Gonzalo.</p>

<p class="text-lg text-gray-700 mb-4 text-left">
  Soy <strong>Psicólogo Clínico</strong>, estudiante de Desarrollo de Software y entusiasta del Marketing.
</p>

<p class="text-lg text-gray-700 mb-4 text-left">
  Nací en Chile y ahora vivo en Buenos Aires atendiendo de forma online.
</p>

<p class="text-lg text-gray-700 mb-4 text-left">
  Tengo mi propia consulta online, pero lo más importante es que <strong>ayudo a otros a convertirse en profesionales independientes</strong>.
</p>

<p class="text-lg text-gray-700 mb-4 text-left">
  Cuando me titulé, no tenía idea de cómo conseguir pacientes. Además, Las ofertas laborales eran pocas y mal pagadas. 
</p>

<p class="text-lg text-gray-700 mb-4 text-left">
  Desanimado, <strong>busqué opciones en otras áreas no relacionadas a lo que estudié</strong>, vendiendo productos online.
</p>

<p class="text-lg text-gray-700 mb-4 text-left">
  Ahí tuve un problema parecido: <strong>cómo lograr ventas?</strong>
</p>

<p class="text-lg text-gray-700 mb-4 text-left">
  Comencé a estudiar marketing y publicidad para redes sociales. Ahí todo cambió...
</p>

<p class="text-lg text-gray-700 mb-4 text-left">
  <strong>Las ventas comenzaron a llegar TODOS LOS DÍAS!</strong>. Mi negocio despegó, ahí fue cuando pensé: <em>esto podría funcionar también para mi práctica profesional?</em>
</p>

<p class="text-lg text-gray-700 mb-4 text-left">
  Después de dos años sin ejercer, sentí inseguridad. <strong>Consideré estudiar más</strong>, pero me di cuenta de que incluso con miles de títulos, muchos no consiguen pacientes.
</p>

<p class="text-lg text-gray-700 mb-4 text-left">
  Entonces, creé mi página web y comencé. <strong>y desde entonces, no he parado!</strong>
</p>


            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;