import Divider from '@/components/home/Divider'
import Info from '@/components/home/Info'
import Service from '@/components/home/Service'
import { Feature } from '@/components/services/Feature'
import ProcessCards from '@/components/services/ProcessCards'
import ServiceInfo from '@/components/services/ServiceInfo'
import ThermalInsulationServices from '@/components/services/Services'
import Footer from '@/layout/Footer'
import Navbar from '@/layout/Navbar'
import PageTitle from '@/layout/PageTitle'
import React from 'react'

const Services = () => {
  return (
    <div>
        <Navbar/>
        {/* <PageTitle backgroundImage={'https://img.freepik.com/free-vector/future-digital-world-virtual-metropolis-vector_1441-3386.jpg?t=st=1740733468~exp=1740737068~hmac=bb70a78c6acaae49cdc8b808e6abe5e31336109af5fe2425f317bd16fd59c795&w=1380'} title={'Services'}/> */}
        {/* <ProcessCards/>
        <Service/>
        <Feature/>
        <ServiceInfo/> */}
        <ThermalInsulationServices/>
        <Divider/>
        <Footer/>
    </div>
  )
}

export default Services