import React, { useEffect, useRef } from 'react';

const Pricing = () => {
  const plansRef = useRef([]);

  const plans = [
    {
      title: 'Básico',
      price: '$450,000',
      features: ['Plan de marketing', 'Landing page optimizada', '2 sesiones de acompañamiento'],
      buttonText: 'Choose Basic',
    },
    {
      title: 'Estándar',
      price: '$650,000',
      features: ['Plan de marketing', 'Landing page optimizada', '1 Campaña de captación de clientes', '4 sesiones de acompañamiento'],
      buttonText: 'Choose Standard',
      highlighted: true, // Para resaltar la tarjeta
    },
    {
      title: 'Clínica Premium',
      price: '$2,600,000',
      features: ['Plan de marketing', 'Página web optimizada', 'Sistema de agendamiento', 'Campaña captación de clientes', 'Feature 5'],
      buttonText: 'Choose Premium',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${index * 0.3}s`;
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });

    plansRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
        Pricing Plans
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            ref={(el) => (plansRef.current[index] = el)}
            className={`flex flex-col p-6 rounded-lg shadow-lg opacity-0 transform translate-y-10 transition-opacity transition-transform duration-500 ease-in-out ${
              plan.highlighted ? 'bg-blue-500 text-white' : 'bg-white text-gray-900'
            } w-full md:w-1/3`}
          >
            <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
            <p className="text-4xl font-bold mb-4">{plan.price}</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <svg
                    className={`w-6 h-6 mr-2 ${
                      plan.highlighted ? 'text-white' : 'text-green-500'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-auto py-2 px-4 rounded-lg font-bold ${
                plan.highlighted
                  ? 'bg-white text-blue-500'
                  : 'bg-blue-500 text-white'
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;