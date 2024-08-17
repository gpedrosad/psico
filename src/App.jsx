import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bullet from './components/Bullet.jsx'
import FAQ from './components/FAQ'
import AboutMe from './components/AboutMe'
import HeroBanner from './components/HeroBanner'
import BenefitsSection from './components/BenefitsSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <HeroBanner/>
    <Bullet/>
    <FAQ/>
    <AboutMe/>
    <BenefitsSection/>
    
    
        
    </>
  )
}

export default App
