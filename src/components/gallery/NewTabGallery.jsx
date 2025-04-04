import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Images, Video, Award } from 'lucide-react';
import dummy from '../../assets/dummy.mp4';

const NewTabGallery = () => {
  const [activeTab, setActiveTab] = useState('images');

  // Sample gallery content (replace with your actual content)
 
 const images = [
      'https://res.cloudinary.com/dhf8eyjee/image/upload/v1742803326/Image-Shree/Home-page/kxvmqymmjhrf6hb0rp5h.jpg',
      'https://res.cloudinary.com/dhf8eyjee/image/upload/v1742801375/Image-Shree/Home-page/zt4zwfpaxzjdlvz8zo63.jpg',
      'https://res.cloudinary.com/dhf8eyjee/image/upload/v1742559349/Image-Shree/Home-page/unazyxjvrime8mprtrln.jpg',
      'https://res.cloudinary.com/dhf8eyjee/image/upload/v1742559349/Image-Shree/Home-page/y1yyynimdbnzp12rcd89.jpg',
      'https://res.cloudinary.com/dhf8eyjee/image/upload/v1742559349/Image-Shree/Home-page/x2ijl7xboeu5dttetfpy.jpg',
      'https://res.cloudinary.com/dhf8eyjee/image/upload/v1742559349/Image-Shree/Home-page/nfz1ye4d4eyhqtoksztb.jpg',
      'https://res.cloudinary.com/dhf8eyjee/image/upload/v1742559348/Image-Shree/Home-page/juh5jsyr3iq70zq4nr2d.jpg',
      'https://res.cloudinary.com/dhf8eyjee/image/upload/v1742559347/Image-Shree/Home-page/x1tocw6df1i40ebwvxnw.jpg',
      'https://res.cloudinary.com/dhf8eyjee/image/upload/v1742559347/Image-Shree/Home-page/bimkdtgcquz0tn3pe5vc.jpg',
      'https://res.cloudinary.com/dhf8eyjee/image/upload/v1742559347/Image-Shree/Home-page/vxox8sinilvoxxwtck1r.jpg',
      'https://res.cloudinary.com/dhf8eyjee/image/upload/v1742559347/Image-Shree/Home-page/payefxd3mwoqszdgujga.jpg',
      'https://res.cloudinary.com/dhf8eyjee/image/upload/v1742559346/Image-Shree/Home-page/qb0ilogkzbmsfuew3g7l.jpg',
      'https://res.cloudinary.com/dhf8eyjee/image/upload/v1742559346/Image-Shree/Home-page/qyqwtsa6p6nqcsktlrif.jpg',
      'https://res.cloudinary.com/dhf8eyjee/image/upload/v1742559346/Image-Shree/Home-page/iik3s5jvfuhiu9ttdoly.jpg',
      'https://res.cloudinary.com/dhf8eyjee/image/upload/v1742559346/Image-Shree/Home-page/ewyc3gfjhrgto11ukx8o.jpg',
    ];

  // Tabs configuration
//   const tabs = [
//     { 
//       key: 'images', 
//       label: 'Images', 
//       icon: <Images className="mr-2" /> 
//     },
//     // { 
//     //   key: 'videos', 
//     //   label: 'Videos', 
//     //   icon: <Video className="mr-2" /> 
//     // },
//     { 
//       key: 'certificates', 
//       label: 'Certificates', 
//       icon: <Award className="mr-2" /> 
//     }
//   ];

  return (
    <div className="py-20 px-5 md:px-20 xl:px-40">
      {/* Tab Navigation */}
      {/* <div className="flex justify-center mb-6 bg-[#ececec] rounded-md p-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`
              flex items-center px-4 py-2 mx-1 rounded-md transition-all duration-300
              ${activeTab === tab.key 
                ? 'bg-[#283B59] text-white' 
                : 'text-gray-600 hover:bg-gray-200'}
            `}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div> */}

      {/* Gallery Content with Framer Motion Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-20 gap-4"
        >
          {images.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <img 
                src={item} 
                alt={`item ${index + 1}`}
                className="w-full h-56 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default NewTabGallery;