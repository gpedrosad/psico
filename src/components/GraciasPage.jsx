import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GraciasPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirigir después de 15 segundos
    const timer = setTimeout(() => {
      navigate('/servicio'); // Redirige a la página de servicio en 15 segundos
    }, 15000);

    return () => clearTimeout(timer); // Limpiar el timeout si el componente se desmonta
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-4">¡Gracias por agendar con nosotros!</h1>
      <p className="text-lg text-gray-700 mb-4">
        Te has registrado con éxito. Serás redirigido en 15 segundos a la página de servicios.
      </p>
      <p className="text-sm text-gray-500">
        Si no te redirige automáticamente, haz clic <a href="/servicio" className="text-blue-600 underline">aquí</a>.
      </p>
    </div>
  );
};

export default GraciasPage;