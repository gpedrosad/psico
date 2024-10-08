import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">

        </div>
        <div className="mt-4 text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ansiosamente. Todos los derechos reservados.</p>
        </div>
        <div className="mt-2 text-gray-400">
          <p>
            Web creada por{' '}
            <a
              href="https://www.ansiosamente.cl"
              className="text-gray-200 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gonzalo Pedrosa
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;