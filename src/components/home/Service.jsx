import React from 'react'
import { Calendar, CalendarClock, Settings, Shield, ShieldCheck, Users } from 'lucide-react'

const Service = () => {
  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-10 md:py-10'>
        <div className='p-4 sm:p-6 md:p-10 rounded-md bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
            <div className='h-64 sm:h-80 md:h-full'>
                <img src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1742559347/Image-Shree/Home-page/x1tocw6df1i40ebwvxnw.jpg" className='w-full h-full rounded-md object-cover' alt="Service image" />
            </div>
            <div>
              {/* <p className='text-base sm:text-lg font-semibold'>Advantages</p> */}
              <h1 className='text-2xl mt-2 md:mt-3 font-bold'>Our Expertise</h1>
              <p className='text-sm sm:text-base text-justify text-gray-600 mt-2 md:mt-5'>With years of experience and a team of skilled professionals, we bring a wealth of expertise to every project. We collaborate closely with our clients to deliver apt solutions that meet specific requirements and exceed expectations.</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 mt-3 sm:mt-5'>
                <div className='p-3 sm:p-5 bg-white rounded-md'>
                  <ShieldCheck size={24} className="sm:w-8 text-[#283B59] sm:h-8" />
                  <h2 className='text-lg mt-2 font-semibold text-[#283B59]'>HOT INSULATIONS</h2>
                  {/* <p className='text-xs sm:text-sm text-gray-600 line-clamp-2 mt-1'>We Shree Engineers Committed for quality services.</p> */}
                </div>
                <div className='p-3 sm:p-5 bg-white rounded-md'>
                  <Users size={24} className="sm:w-8 text-[#283B59] sm:h-8" />
                  <h2 className='text-lg mt-2 font-semibold text-[#283B59]'>COLD INSULATION</h2>
                  {/* <p className='text-xs sm:text-sm text-gray-600 line-clamp-2 mt-1'>We have team of skilled workers with dedication.</p> */}
                </div>
                <div className='p-3 sm:p-5 bg-white rounded-md'>
                  <CalendarClock size={24} className="sm:w-8 text-[#283B59] sm:h-8" />
                  <h2 className='text-lg mt-2 font-semibold text-[#283B59]'>ACOUSTIC INSULATIONS.</h2>
                  {/* <p className='text-xs sm:text-sm text-gray-600 line-clamp-2 mt-1'>Being industry expert we provide quick response.</p> */}
                </div>
                {/* <div className='p-3 sm:p-5 bg-white rounded-md'>
                  <Settings size={24} className="sm:w-8 sm:h-8" />
                  <h2 className='text-lg mt-2 font-semibold text-black'>Technology</h2>
                  <p className='text-xs sm:text-sm text-gray-600 line-clamp-2 mt-1'>Deliver quality service using most modern technologies.</p>
                </div> */}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Service