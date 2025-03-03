import React from 'react'
import { Link } from 'react-router-dom'
// import dummyImage from '@/assets/dummyimg.jpg'

const PageTitle = ({backgroundImage, title}) => {
  return (
    <div className='w-full h-80'
    style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}

    >
      <div className='bg-black/60 flex flex-col items-center justify-center w-full h-full bg-opacity-50 text-white p-4'>
      <h1 className='text-4xl text-white font-bold'>{title}</h1>
      {/* <Link to='/internship' className='text-white hover:text-gray-300'>/ {title}</Link> */}
      </div>

    </div>
  )
}

export default PageTitle