import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';

// Import all required Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // This is important for the fade effect
import { Link } from 'react-router-dom';

const HeaderCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/dhf8eyjee/image/upload/v1742801375/Image-Shree/Home-page/zt4zwfpaxzjdlvz8zo63.jpg',
      title: 'Welcome to Shree Engineers & Contractors Limited',
      // description: 'Discover amazing features and services tailored just for you',
      buttonText: 'Get Started',
      buttonLink: '#',
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/dhf8eyjee/image/upload/v1742558596/Image-Shree/Home-page/zmbm7bt6caz0s3dapf5f.jpg',
      title: 'Professional Solutions',
      description: 'We provide top-quality services for all your business needs',
      buttonText: 'Our Services',
      buttonLink: '#services',
    },
  ];

  return (
    <div className="w-full h-screen max-h-screen">
      <div className="relative w-full h-full"
      style={{ backgroundImage: `url(https://res.cloudinary.com/dhf8eyjee/image/upload/v1742801375/Image-Shree/Home-page/zt4zwfpaxzjdlvz8zo63.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
          
              <div className="flex items-center justify-center h-full w-full bg-[#000000a5]">
                <h1 className='text-3xl md:text-5xl max-w-2xl text-center text-white font-bold'>Welcome to Shree Engineers & Contractors Limited</h1>
              </div>
            </div>
    </div>
  );
};

export default HeaderCarousel;