import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Bullet from './components/Bullet.jsx'
import FAQ from './components/FAQ'
import AboutMe from './components/AboutMe'
import HeroBanner from './components/HeroBanner'
import BenefitsSection from './components/BenefitsSection'
import Testimonials from './components/Testimonials'
import ForYouSection from './components/ForYouSection'
import MarqueeText from './components/MarqueeText'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import CounterEffect from './components/CounterEffect'
import BulletTerapia from './components/BulletTerapia'
import ServicioTerapia from './components/ServicioTerapia'
import BeneficiosTerapia from './components/BeneficiosTerapia'
import FAQTerapia from './components/FAQTerapia'
import AboutMeTerapia from './components/AboutMeTerapia'
import HeroTerapia from './components/HeroTerapia'
import Review from './components/Review';  // Importa el nuevo componente
import ReviewsTerapia from './components/ReviewsTerapia'


// Página principal vacía
function Home() {
  return (
    <>
    <HeroTerapia/>
    {/*<MarqueeText />*/}
    <CounterEffect/>
    <BulletTerapia/>
    <AboutMeTerapia/>
    <button
  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 mb-10"
  onClick={() => {
    fbq('track', 'Contact'); // Evento de conversión para "Contact"
    window.location.href = 'https://walink.co/6626d8'; // Redirigir al enlace de WhatsApp
  }}
>
  Agendar
</button>
    <ServicioTerapia/>
    <BeneficiosTerapia/>
    <ReviewsTerapia/>
    <FAQTerapia/>

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
<Footer/>
    </>

  )
}

// Página de servicios (/servicio) con todos los componentes
function Servicio() {
  return (
    <>
      <HeroBanner />
      <Bullet />
      <AboutMe />
      <BenefitsSection />
      <Testimonials />
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
        ¡Regístrate Ahora!
      </button>
      <ForYouSection />
      <MarqueeText />
      <Pricing />
      <FAQ />
      
      <Footer />
    </>
  )
}

// Función principal con rutas
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicio" element={<Servicio />} />
        <Route path="/review" element={<Review />} /> {/* Nueva ruta para /review */}
      </Routes>
    </Router>
  );
}

export default App