import Cards from '@/components/home/Cards'
import Divider from '@/components/home/Divider'
import GridSection from '@/components/home/GridSection'
import HeaderCarousel from '@/components/home/Hero'
import HomeContent from '@/components/home/homeContent'
import HomeService from '@/components/home/HomeService'
import Info from '@/components/home/Info'
import Service from '@/components/home/Service'
import Symbol from '@/components/home/Symbol'
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
    <HomeService/>
    <Symbol/>
    {/* <HomeContent/> */}
    {/* <Service/> */}
    {/* <Info/> */}
    {/* <Cards/> */}
    <Divider/>
    <Footer/>
    </>
  )
}

export default Home
