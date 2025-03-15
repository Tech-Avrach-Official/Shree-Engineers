import React from 'react'

const AboutInfo = () => {
  return (
    <div className='py-8  sm:py-12 lg:pt-20 px-4 sm:px-8 lg:px-40'>
       <div className='bg-gray-100 p-5 md:p-10 rounded-2xl'>
       <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center'>About</h1>
       <p className='text-justify mt-5 text-gray-600'><span className='font-bold text-[#283B59]'>Shree Engineers & Contractors Limited</span>, A One Stop Solution for Thermal Insulations service, takes much pride for being one of the pioneers in the thermal insulation industry. an ISO 9001:2015 and 45001:2018 certified Company, our expertise encompasses a wide range of insulation services, including thermal insulation for both hot and cold applications, as well as acoustic insulation for noise reduction. We are committed to delivering tailored solutions that meet the unique needs of each project, ensuring optimal performance and long-lasting results
        <br />
        <br />
        The company is managed by a team of qualified, energetic and dynamic Engineers who always are in search of better avenues. Quality work and timely deliverance are our key strengths which all our customers appreciate and recognize. Our mission is customer satisfaction. By providing personalized attention to individual customers to meet their expectations and to ensure their full satisfaction is our mission.
        <br />
        <br />
        Our team is competent enough to handle the most typical task and at challenging environment which give us an edge over competition. We are striving for excellence and it is our sincere endeavour to make our presence felt in all segments. To achieve this goal your patronage is solicited - We welcome your valuable feedback and suggestions.
        <br />
        <p className='font-semibold text-gray-600 mt-2'>Warm Regards :- <span className='font-bold text-black'>Mr. Amit Tiwari</span></p>
       </p>
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10'>
          <img src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg' className='w-full h-full object-cover rounded-lg' alt=''/>
          <img src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg' className='w-full h-full object-cover rounded-lg' alt=''/>
          {/* <img src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg' className='w-full h-full object-cover rounded-lg' alt=''/> */}
       </div>
       </div>
    </div>
  )
}

export default AboutInfo