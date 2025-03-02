import React from "react";
import { 
  Factory, 
  Flame, 
  Wind, 
  Droplet, 
  CloudLightning, 
  FlaskConical
} from "lucide-react";

const EnergyCards = () => {
  const cards = [
    {
      title: "Petrolium Refinery",
      description: "Duis cras facilisis euismod habitasse interdum. Pretium est vehicula risus phasellus pharetra sodales. Duis cras facilisis euismod habitasse interdum. Pretium est vehicula",
      icon: <Factory className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors duration-300" />,
    },
    {
      title: "Thermal Power",
      description: "Duis cras facilisis euismod habitasse interdum. Pretium est vehicula risus phasellus pharetra sodales. Duis cras facilisis euismod habitasse interdum. Pretium est vehicula",
      icon: <Flame className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors duration-300" />
    },
    {
      title: "Gas Flaring",
      description: "Duis cras facilisis euismod habitasse interdum. Pretium est vehicula risus phasellus pharetra sodales. Duis cras facilisis euismod habitasse interdum. Pretium est vehicula",
      icon: <Wind className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors duration-300" />
    },
    {
      title: "Oil Pump",
      description: "Duis cras facilisis euismod habitasse interdum. Pretium est vehicula risus phasellus pharetra sodales. Duis cras facilisis euismod habitasse interdum. Pretium est vehicula",
      icon: <Droplet className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors duration-300" />
    },
    {
      title: "Chemical Factory",
      description: "Duis cras facilisis euismod habitasse interdum. Pretium est vehicula risus phasellus pharetra sodales. Duis cras facilisis euismod habitasse interdum. Pretium est vehicula",
      icon: <FlaskConical className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors duration-300" />
    },
    {
      title: "Methane Elimination",
      description: "Duis cras facilisis euismod habitasse interdum. Pretium est vehicula risus phasellus pharetra sodales. Duis cras facilisis euismod habitasse interdum. Pretium est vehicula",
      icon: <CloudLightning className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors duration-300" />
    }
  ];

  return (
    <div className="py-8 sm:py-12 lg:py-20 px-4 sm:px-8 lg:px-40">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Reliable energy for a brighter tomorrow</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="group relative p-6 bg-gray-100 text-gray-800 rounded-md transition-all duration-300 hover:bg-gray-600 hover:text-white shadow-sm hover:shadow-md"
          >
            <div className="mb-4 inline-flex items-center justify-center w-12 h-12 border border-gray-300 group-hover:border-gray-400 rounded-md transition-colors duration-300">
              {card.icon}
            </div>
            <h3 className="text-xl font-medium mb-2">{card.title}</h3>
            <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
              {card.description}
            </p>
            <div className="absolute top-4 right-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-sm flex items-center justify-center group-hover:bg-yellow-500 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-gray-800"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-0 rounded-md border-2 border-transparent group-hover:border-gray-600 pointer-events-none transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnergyCards;