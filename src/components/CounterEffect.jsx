import { useState, useEffect } from 'react';

const CounterEffect = () => {
  const [hoursScheduled, setHoursScheduled] = useState(0);
  const [peopleStarted, setPeopleStarted] = useState(0);

  const hoursTarget = 2746;
  const peopleTarget = 572;
  const incrementSpeed = 20; // Incrementa más rápido

  // Efecto para incrementar horas agendadas
  useEffect(() => {
    const incrementHours = setInterval(() => {
      setHoursScheduled((prev) => {
        if (prev < hoursTarget) {
          return prev + 30; // Incrementa más rápido
        } else {
          clearInterval(incrementHours);
          return hoursTarget;
        }
      });
    }, incrementSpeed);

    return () => clearInterval(incrementHours);
  }, []);

  // Efecto para incrementar personas que han iniciado terapia
  useEffect(() => {
    const incrementPeople = setInterval(() => {
      setPeopleStarted((prev) => {
        if (prev < peopleTarget) {
          return prev + 10; // Incrementa más rápido
        } else {
          clearInterval(incrementPeople);
          return peopleTarget;
        }
      });
    }, incrementSpeed);

    return () => clearInterval(incrementPeople);
  }, []);

  return (
    <div className="bg-gray-50 py-6 md:py-10">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8">
        Sesiones realizadas
      </h2>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-12">
        {/* Contenedor de horas agendadas */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
          <div className="text-4xl md:text-6xl font-extrabold mb-2">
            {hoursScheduled}
          </div>
          <div className="text-md md:text-lg font-semibold flex items-center justify-center space-x-2">
            <span>⏰</span> {/* Emoji de reloj para las horas agendadas */}
            <span>Horas agendadas</span>
          </div>
        </div>

        {/* Contenedor de personas */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
          <div className="text-4xl md:text-6xl font-extrabold mb-2">
            {peopleStarted}
          </div>
          <div className="text-md md:text-lg font-semibold flex items-center justify-center space-x-2">
            <span>👥</span> {/* Emoji de personas para los usuarios */}
            <span>Personas que han iniciado terapia</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterEffect;