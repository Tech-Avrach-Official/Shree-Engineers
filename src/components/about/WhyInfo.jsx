import React from 'react';
import { 
  PenTool, 
  Layout, 
  BarChart2, 
  Download, 
  AwardIcon,
  Users,
  Phone,
  Smartphone
} from 'lucide-react';

const WhyInfo = () => {
  const services = [
    // {
    //   icon: AwardIcon,
    //   title: '20+ YEARS EXPERIENCE',
    //   description: 'Over 20 years of expertise in delivering quality insulation solutions.'
    // },
    // {
    //   icon: Users,
    //   title: '500 + TASKFORCE',
    //   description: 'We have a team of skilled workers with dedication.'
    // },
    {
      icon: Phone,
      title: 'Telephone: 0731-4266310',
      description: 'Being industry expert we provide quick response.'
    },
    {
      icon: Smartphone,
      title: 'Mobile: 87188-12605',
      description: 'Deliver quality service using most modern technologies.'
    }
  ];

  return (
    <div className="px-5 md:px-20 lg:px-40 py-12">
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center gap-10 '>
     <div className='py-10'>
      <div>
        <h1 className='text-center text-2xl font-bold'>Shree Engineers & Contractors Limited</h1>
        <p className="text-base mt-5 text-justify text-gray-600 mb-4">Shree Engineers & Contractors Limited, an ISO 9001:2015 and 45001:2018 certified Company, is a leading service provider of hot, cold, and acoustic insulation solutions. With more than 20 years of experience serving diverse industrial segments, our company is renowned for its expertise and commitment to excellence. Our team of highly qualified and experienced engineers is dedicated to continuous innovation and the pursuit of exceptional opportunities.</p>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 mt-5 lg:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-2 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
          >
            <div className="bg-orange-400 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <service.icon size={20} />
            </div>
            <h3 className="text-lg font-bold mb-3">{service.title}</h3>
            {/* <p className="text-gray-600 text-sm">{service.description}</p> */}
          </div>
        ))}
      </div>
     </div>

      <div className="h-full w-full">
        {/* <h2 className="text-3xl font-bold mb-4">We Can Help You Solve Your Problem Through Our Service.</h2>
        <p className="text-gray-600 mb-6">Some studies indicate that collaborative frameworks to generate predictive solutions to maintain competitive advantage.</p>
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
          Explore Services
        </button> */}
        <img src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1742559347/Image-Shree/Home-page/vxox8sinilvoxxwtck1r.jpg" className="w-full min-h-[250px] h-full object-cover rounded-lg" alt="" />
      </div>
     </div>
    </div>
  );
};

export default WhyInfo;