import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './layout/Navbar'
import HeaderCarousel from './components/home/Hero'
import GridSection from './components/home/GridSection'
import Info from './components/home/Info'
import Service from './components/home/Service'
import EnergyCards from './components/home/Cards'
import EnergyHeroSection from './components/home/Divider'
import Footer from './layout/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeaderCarousel/>
    <GridSection/>
    <Info/>
    <Service/>
    <EnergyCards/>
    <EnergyHeroSection/>
    <Footer/>
    </>
  )
}

export default App
