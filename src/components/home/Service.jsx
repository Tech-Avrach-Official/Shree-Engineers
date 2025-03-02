import React from 'react'
import { Calendar } from 'lucide-react'

const Service = () => {
  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-10 md:py-20'>
        <div className='p-4 sm:p-6 md:p-10 rounded-md bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
            <div className='h-64 sm:h-80 md:h-full'>
                <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" className='w-full h-full rounded-md object-cover' alt="Service image" />
            </div>
            <div>
              <p className='text-base sm:text-lg font-semibold'>Advantages</p>
              <h1 className='text-2xl sm:text-3xl md:text-4xl mt-2 md:mt-3 font-bold'>Various Benefits That You Will Get</h1>
              <p className='text-sm sm:text-base text-gray-600 mt-2 md:mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero qui molestias sequi consequatur illum enim at. Quidem voluptate nisi facere nihil. Esse quasi vel autem debitis incidunt aliquid ea, sit facilis libero unde nobis sunt. Nesciunt rerum nam fugit laboriosam, nihil incidunt iste? Consectetur veniam commodi amet assumenda incidunt nobis.</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 mt-3 sm:mt-5'>
                <div className='p-3 sm:p-5 bg-white rounded-md'>
                  <Calendar size={24} className="sm:w-8 sm:h-8" />
                  <p className='text-xs sm:text-sm text-gray-600 line-clamp-2 mt-1 sm:mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, sapiente.</p>
                </div>
                <div className='p-3 sm:p-5 bg-white rounded-md'>
                  <Calendar size={24} className="sm:w-8 sm:h-8" />
                  <p className='text-xs sm:text-sm text-gray-600 line-clamp-2 mt-1 sm:mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, sapiente.</p>
                </div>
                <div className='p-3 sm:p-5 bg-white rounded-md'>
                  <Calendar size={24} className="sm:w-8 sm:h-8" />
                  <p className='text-xs sm:text-sm text-gray-600 line-clamp-2 mt-1 sm:mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, sapiente.</p>
                </div>
                <div className='p-3 sm:p-5 bg-white rounded-md'>
                  <Calendar size={24} className="sm:w-8 sm:h-8" />
                  <p className='text-xs sm:text-sm text-gray-600 line-clamp-2 mt-1 sm:mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, sapiente.</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Service