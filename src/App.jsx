import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Bullet from './components/Bullet.jsx';
import FAQ from './components/FAQ';
import AboutMe from './components/AboutMe';
import HeroBanner from './components/HeroBanner';
import BenefitsSection from './components/BenefitsSection';
import Testimonials from './components/Testimonials';
import ForYouSection from './components/ForYouSection';
import MarqueeText from './components/MarqueeText';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import CounterEffect from './components/CounterEffect';
import BulletTerapia from './components/BulletTerapia';
import ServicioTerapia from './components/ServicioTerapia';
import BeneficiosTerapia from './components/BeneficiosTerapia';
import FAQTerapia from './components/FAQTerapia';
import AboutMeTerapia from './components/AboutMeTerapia';
import HeroTerapia from './components/HeroTerapia';
import Review from './components/Review';
import ReviewsTerapia from './components/ReviewsTerapia';
import { useEffect } from 'react';

// Componente para cargar Calendly con useEffect
function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/gpedrosadom/30min"
      style={{ minWidth: '320px', height: '700px' }}
    ></div>
  );
}

// Página principal vacía
function Home() {
  return (
    <>
      <HeroTerapia />
      <CounterEffect />
      <BulletTerapia />
      <AboutMeTerapia />
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 mb-10"
        onClick={() => {
          fbq('track', 'Contact'); // Evento de conversión para "Contact"
          window.location.href = 'https://walink.co/6626d8'; // Redirigir al enlace de WhatsApp
        }}
      >
        Agendar
      </button>
      <ServicioTerapia />
      <BeneficiosTerapia />
      <ReviewsTerapia />
      <FAQTerapia />

      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">¿Te sientes identificado con estos problemas?</h2>
          <p className="text-lg text-gray-700 mb-8 p-5">
            Si experimentas alguno de estos síntomas, puedo ayudarte a superar la ansiedad y la depresión:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-4 p-5">
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Tristeza constante</h3>
              <p>Sentimientos de desesperanza y pérdida de interés en las actividades que solías disfrutar.</p>
            </div>
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Ansiedad y preocupación</h3>
              <p>Dificultades para relajarte, sobrepensamiento y miedo al futuro.</p>
            </div>
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Problemas de sueño</h3>
              <p>Insomnio o dificultad para dormir a causa de pensamientos y emociones abrumadoras.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center py-12 bg-blue-100">
        <h2 className="text-4xl font-bold mb-4">No esperes más para sentirte mejor</h2>
        <p className="text-lg text-gray-700 mb-6 p-2">
          Estoy aquí para acompañarte en tu camino a sentirte mejor. Haz el primer paso hoy mismo.
        </p>
        <button
          className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-700"
          onClick={() => window.location.href = 'https://walink.co/6626d8'}
        >
          Agenda tu primera sesión
        </button>
      </section>
      <Footer />
    </>
  );
}

// Página de servicios (/servicio) con todos los componentes
function Servicio() {
  return (
    <>
      <HeroBanner />
      <Bullet />
      <AboutMe />
      <BenefitsSection />
      {/*<Testimonials />*/}
      <a
        href="https://calendly.com/gpedrosadom/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block"
      >
        Agendar asesoría gratuita
      </a>
      <ForYouSection />
      <CalendlyEmbed />
      <FAQ />
      <Footer />
    </>
  );
}

// Página de "Gracias"
function GraciasPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/servicio'); // Redirige a la página de servicios después de 15 segundos
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
}

// Función principal con rutas
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicio" element={<Servicio />} />
        <Route path="/review" element={<Review />} /> {/* Nueva ruta para /review */}
        <Route path="/gracias" element={<GraciasPage />} /> {/* Nueva página de gracias */}
      </Routes>
    </Router>
  );
}

export default App;