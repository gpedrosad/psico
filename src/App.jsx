import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bullet from './components/Bullet.jsx'
import FAQ from './components/FAQ'
import AboutMe from './components/AboutMe'
import HeroBanner from './components/HeroBanner'
import BenefitsSection from './components/BenefitsSection'
import Testimonials from './components/Testimonials'
import ForYouSection from './components/ForYouSection'
import MarqueeText from './components/MarqueeText'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <HeroBanner/>
    <Bullet/>
    <FAQ/>
    <AboutMe/>
    <BenefitsSection/>
    <Testimonials/>
    <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
  ¡Regístrate Ahora!
</button>
<ForYouSection/>
<MarqueeText/>
    
    
        
    </>
  )
}

export default App
