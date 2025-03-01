import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Navbar from './layout/Navbar'
import HeaderCarousel from './components/home/Hero'
import GridSection from './components/home/GridSection'
import Info from './components/home/Info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeaderCarousel/>
    <GridSection/>
    <Info/>
      {/* <div className='bg-green-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis omnis consectetur dicta voluptatum ut culpa dolorum, a eaque nihil, quas quidem reprehenderit ad ipsum nemo, illum tenetur. Sit inventore voluptatem dolores aspernatur totam dignissimos tenetur? Quisquam optio, quaerat ullam modi illo provident ipsum vero ex?</div>

      <Button>CLick me</Button> */}
    </>
  )
}

export default App
