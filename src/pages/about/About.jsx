import AboutInfo from '@/components/about/AboutInfo'
import Cards from '@/components/about/Cards'
import WhyInfo from '@/components/about/WhyInfo'
import Divider from '@/components/home/Divider'
import Service from '@/components/home/Service'
import Footer from '@/layout/Footer'
import Navbar from '@/layout/Navbar'
import PageTitle from '@/layout/PageTitle'
import React from 'react'

const About = () => {
  return (
    <div>
      <Navbar/>
      <PageTitle backgroundImage={'https://res.cloudinary.com/dhf8eyjee/image/upload/v1742559345/Image-Shree/Home-page/ufeirsigtmccormiceom.jpg'} title={'What We Are'}/>
      <AboutInfo/>
      <Service/>
      <WhyInfo/>

      {/* <Cards/> */}
      <Divider/>
      <Footer/>
    </div>
  )
}

export default About