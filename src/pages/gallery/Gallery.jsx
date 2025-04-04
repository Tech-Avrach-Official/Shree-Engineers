import NewTabGallery from '@/components/gallery/NewTabGallery'
import TabGallery from '@/components/gallery/TabGallery'
import Footer from '@/layout/Footer'
import Navbar from '@/layout/Navbar'
import PageTitle from '@/layout/PageTitle'
import React from 'react'

const Gallery = () => {
  return (
    <div>
        <Navbar/>
        <PageTitle backgroundImage={'https://res.cloudinary.com/dhf8eyjee/image/upload/v1742558596/Image-Shree/Home-page/zmbm7bt6caz0s3dapf5f.jpg'} title={'Gallery'}/>
        {/* <TabGallery/> */}
        <NewTabGallery/>
        <Footer/>
    </div>
  )
}

export default Gallery