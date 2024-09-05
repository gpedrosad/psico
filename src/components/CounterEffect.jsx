import { useState, useEffect } from 'react';

const CounterEffect = () => {
  const [hoursScheduled, setHoursScheduled] = useState(0);
  const [peopleStarted, setPeopleStarted] = useState(0);

  // Configuración para los incrementos
  const hoursTarget = 2746;
  const peopleTarget = 572;
  const incrementSpeed = 0.1; // Velocidad de incremento en milisegundos

  // Efecto para las horas agendadas
  useEffect(() => {
    const incrementHours = setInterval(() => {
      setHoursScheduled((prev) => {
        if (prev < hoursTarget) {
          return prev + 10;
        } else {
          clearInterval(incrementHours);
          return hoursTarget;
        }
      });
    }, incrementSpeed);

    return () => clearInterval(incrementHours);
  }, []);

  // Efecto para las personas que han iniciado terapia
  useEffect(() => {
    const incrementPeople = setInterval(() => {
      setPeopleStarted((prev) => {
        if (prev < peopleTarget) {
          return prev + 5;
        } else {
          clearInterval(incrementPeople);
          return peopleTarget;
        }
      });
    }, incrementSpeed);

    return () => clearInterval(incrementPeople);
  }, []);

  return (
    <div className="text-center py-10">
      <div className="text-3xl font-bold mb-4">
        <span className="text-blue-600">{hoursScheduled}</span> horas agendadas
      </div>
      <div className="text-3xl font-bold">
        <span className="text-green-600">{peopleStarted}</span> personas que han iniciado terapia
      </div>
    </div>
  );
};

export default CounterEffect;