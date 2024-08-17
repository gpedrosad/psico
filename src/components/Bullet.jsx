import React from 'react';

const Bullet = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">Beneficios de Nuestro Servicio</h2>
        <ul className="space-y-6">
          <li className="flex items-start">
            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-lg text-gray-700">fuller schedule, leading to a more stable   , reducing financial stress.</p>
          </li>
          <li className="flex items-start">
            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-lg text-gray-700">Stop worrying solely on referrals from friends, family, or existing patients to grow your practice. </p>
          </li>
          <li className="flex items-start">
            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-lg text-gray-700">No more wondering where and how to get new patients</p>
          </li>
          <li className="flex items-start">
            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-lg text-gray-700">Freedom to manage your practice from anywhere, at any time.</p>
          </li>
          <li className="flex items-start">
            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-lg text-gray-700">No more Anxiety about overspending on ineffective marketing efforts that don’t deliver results.</p>
          </li>
          <li className="flex items-start">
            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-lg text-gray-700">Plan de Acción Personalizado Según tus Necesidades.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Bullet;