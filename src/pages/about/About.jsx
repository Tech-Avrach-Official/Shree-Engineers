import AboutInfo from '@/components/about/AboutInfo'
import Cards from '@/components/about/Cards'
import WhyInfo from '@/components/about/WhyInfo'
import Divider from '@/components/home/Divider'
import Footer from '@/layout/Footer'
import Navbar from '@/layout/Navbar'
import PageTitle from '@/layout/PageTitle'
import React from 'react'

const About = () => {
  return (
    <div>
      <Navbar/>
      <PageTitle backgroundImage={'https://img.freepik.com/free-vector/future-digital-world-virtual-metropolis-vector_1441-3386.jpg?t=st=1740733468~exp=1740737068~hmac=bb70a78c6acaae49cdc8b808e6abe5e31336109af5fe2425f317bd16fd59c795&w=1380'} title={'FAQ'}/>
      <AboutInfo/>
      <WhyInfo/>
      <Cards/>
      <Divider/>
      <Footer/>
    </div>
  )
}

export default About