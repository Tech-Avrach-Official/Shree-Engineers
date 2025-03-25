import ContactPage from '@/components/contact/ContactPage'
import Footer from '@/layout/Footer'
import Navbar from '@/layout/Navbar'
import PageTitle from '@/layout/PageTitle'
import React from 'react'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <PageTitle backgroundImage={'https://res.cloudinary.com/dhf8eyjee/image/upload/v1742559347/Image-Shree/Home-page/payefxd3mwoqszdgujga.jpg'} title={'Contact'}/>
        <ContactPage/>
        <Footer/>
    </div>
  )
}

export default Contact