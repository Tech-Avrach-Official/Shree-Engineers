import Cards from '@/components/home/Cards'
import Divider from '@/components/home/Divider'
import GridSection from '@/components/home/GridSection'
import HeaderCarousel from '@/components/home/Hero'
import Info from '@/components/home/Info'
import Service from '@/components/home/Service'
import Footer from '@/layout/Footer'
import Navbar from '@/layout/Navbar'
import { useState } from 'react'


const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeaderCarousel/>
    <GridSection/>
    <Info/>
    <Service/>
    <Cards/>
    <Divider/>
    <Footer/>
    </>
  )
}

export default Home
