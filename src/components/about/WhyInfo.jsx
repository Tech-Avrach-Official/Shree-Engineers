import React from 'react';
import { 
  PenTool, 
  Layout, 
  BarChart2, 
  Download 
} from 'lucide-react';

const WhyInfo = () => {
  const services = [
    {
      icon: PenTool,
      title: 'Product Design',
      description: 'Some studies indicate that collaborative frameworks to generate predictive solutions for businesses.'
    },
    {
      icon: Layout,
      title: 'UI/UX Design',
      description: 'Some studies indicate that collaborative frameworks to generate predictive solutions for businesses.'
    },
    {
      icon: Download,
      title: 'Viral Design',
      description: 'Some studies indicate that collaborative frameworks to generate predictive solutions for businesses.'
    },
    {
      icon: BarChart2,
      title: 'Business Analytics',
      description: 'Some studies indicate that collaborative frameworks to generate predictive solutions for businesses.'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-40 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
          >
            <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <service.icon size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="h-full w-full">
        {/* <h2 className="text-3xl font-bold mb-4">We Can Help You Solve Your Problem Through Our Service.</h2>
        <p className="text-gray-600 mb-6">Some studies indicate that collaborative frameworks to generate predictive solutions to maintain competitive advantage.</p>
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
          Explore Services
        </button> */}
        <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" className="w-full h-full object-cover rounded-lg" alt="" />
      </div>
    </div>
  );
};

export default WhyInfo;