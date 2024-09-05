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

// Página principal vacía
function Home() {
  return (
    <>
    <MarqueeText />
    <CounterEffect/>
    <BulletTerapia/>
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

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Home />} />
        
        {/* Ruta /servicio con todos los componentes */}
        <Route path="/servicio" element={<Servicio />} />
      </Routes>
    </Router>
  )
}

export default App