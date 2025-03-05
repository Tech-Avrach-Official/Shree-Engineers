import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Images, Video, Award } from 'lucide-react';
import dummy from '../../assets/dummy.mp4';

const TabGallery = () => {
  const [activeTab, setActiveTab] = useState('images');

  // Sample gallery content (replace with your actual content)
  const galleryContent = {
    images: [
      'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
      'https://iso.500px.com/wp-content/uploads/2018/05/Blog-marketplace-getty500px-48429366-nologo-3000x2000.png',
      'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
      'https://iso.500px.com/wp-content/uploads/2018/05/Blog-marketplace-getty500px-48429366-nologo-3000x2000.png',
      'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
      'https://iso.500px.com/wp-content/uploads/2018/05/Blog-marketplace-getty500px-48429366-nologo-3000x2000.png',
      'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
      'https://iso.500px.com/wp-content/uploads/2018/05/Blog-marketplace-getty500px-48429366-nologo-3000x2000.png',
      'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
      'https://iso.500px.com/wp-content/uploads/2018/05/Blog-marketplace-getty500px-48429366-nologo-3000x2000.png',
      'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
      'https://iso.500px.com/wp-content/uploads/2018/05/Blog-marketplace-getty500px-48429366-nologo-3000x2000.png',
     
    ],
    // videos: [
    //   'dummy.mp4',
    //   'https://www.youtube.com/watch?v=D0UnqGm_miA&list=PPSV',
    //   'https://www.youtube.com/watch?v=D0UnqGm_miA&list=PPSV'
    // ],
    certificates: [
        'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
        'https://iso.500px.com/wp-content/uploads/2018/05/Blog-marketplace-getty500px-48429366-nologo-3000x2000.png',
        'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
        'https://iso.500px.com/wp-content/uploads/2018/05/Blog-marketplace-getty500px-48429366-nologo-3000x2000.png',
        'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
        'https://iso.500px.com/wp-content/uploads/2018/05/Blog-marketplace-getty500px-48429366-nologo-3000x2000.png',
        'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
        'https://iso.500px.com/wp-content/uploads/2018/05/Blog-marketplace-getty500px-48429366-nologo-3000x2000.png',
        'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
        'https://iso.500px.com/wp-content/uploads/2018/05/Blog-marketplace-getty500px-48429366-nologo-3000x2000.png',
        'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
        'https://iso.500px.com/wp-content/uploads/2018/05/Blog-marketplace-getty500px-48429366-nologo-3000x2000.png',
    ]
  };

  // Tabs configuration
  const tabs = [
    { 
      key: 'images', 
      label: 'Images', 
      icon: <Images className="mr-2" /> 
    },
    // { 
    //   key: 'videos', 
    //   label: 'Videos', 
    //   icon: <Video className="mr-2" /> 
    // },
    { 
      key: 'certificates', 
      label: 'Certificates', 
      icon: <Award className="mr-2" /> 
    }
  ];

  return (
    <div className="py-20 px-5 md:px-20 xl:px-40">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-6 bg-gray-100 rounded-md p-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`
              flex items-center px-4 py-2 mx-1 rounded-md transition-all duration-300
              ${activeTab === tab.key 
                ? 'bg-blue-500 text-white' 
                : 'text-gray-600 hover:bg-gray-200'}
            `}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Gallery Content with Framer Motion Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-20 gap-4"
        >
          {galleryContent[activeTab].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img 
                src={item} 
                alt={`${activeTab} item ${index + 1}`}
                className="w-full h-56 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabGallery;