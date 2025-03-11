import React, { useState } from 'react';
import { ChevronRight, Info, LocateIcon, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { industries, clientsData } from './Data';

const Project = () => {
  const [activeIndustry, setActiveIndustry] = useState("CEMENT INDUSTRY");

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <motion.div 
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-72 bg-white shadow-md"
      >
        <div className="py-8 px-6">
          <h1 className="text-xl font-semibold text-gray-800 pb-4 mb-6 border-b border-gray-100">
            CLIENTELE
          </h1>
          <ul className="space-y-1">
            {industries.map((industry) => (
              <motion.li 
                key={industry}
                whileHover={{ x: 5 }}
                onClick={() => setActiveIndustry(industry)}
                className={`px-4 py-3 flex items-center cursor-pointer transition-all border-l-4 ${
                  activeIndustry === industry 
                    ? "border-blue-500 bg-blue-50 text-blue-600 font-medium" 
                    : "border-transparent hover:bg-gray-50"
                }`}
              >
                <ChevronRight 
                  size={16} 
                  className={`mr-2 ${activeIndustry === industry ? "text-blue-500" : "text-gray-500"}`} 
                />
                <span>{industry}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-gray-800 relative pb-2 inline-block">
            {activeIndustry}
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-500"></span>
          </h1>
        </motion.div>
        
        <AnimatePresence mode="wait">
      <motion.div
        key={activeIndustry}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {clientsData[activeIndustry]?.map((client, index) => (
          <ClientCard key={client.id} client={client} index={index} />
        ))}
        
        {!clientsData[activeIndustry] || clientsData[activeIndustry].length === 0 ? (
          <div className="col-span-full flex justify-center items-center py-16 text-gray-500">
            No clients found for this industry.
          </div>
        ) : null}
      </motion.div>
    </AnimatePresence>
      </div>
    </div>
  );
};

export default Project;


const ClientCard = ({ client, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all cursor-pointer relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center p-6 bg-gray-50 border-b border-gray-100 relative">
        {/* Location overlay that appears on hover */}
        <AnimatePresence>
          {isHovered && client.location && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-[#00000080] backdrop-blur-sm flex items-center justify-center z-10 p-4"
            >
              <div className="text-white text-center">
                <div className="text-xl font-medium mb-1">
                Location</div>
                <div className="font-bold text-xl">{client.location}</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="w-full h-40 bg-white rounded-lg border border-gray-100 flex items-center justify-center flex-shrink-0">
          <img 
            src={client.logo || "/api/placeholder/60/60"} 
            alt={`${client.name} Logo`} 
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <h2 className="text-base mt-2 font-semibold text-gray-800">{client.name}</h2>
      </div>
      
      <div className="p-6">
        <div className="flex">
          <div className="w-32 flex-shrink-0 text-gray-500 font-medium">Project Value:</div>
          <div className="text-blue-600 font-medium">{client.projectValue || "N/A"}</div>
        </div>
      </div>
    </motion.div>
  );
};