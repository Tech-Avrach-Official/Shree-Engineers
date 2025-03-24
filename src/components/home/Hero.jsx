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
      title: 'Welcome to Our Platform',
      description: 'Discover amazing features and services tailored just for you',
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
    // {
    //   id: 3,
    //   image: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
    //   title: 'Join Our Community',
    //   description: 'Connect with thousands of users and grow your network',
    //   buttonText: 'Sign Up Now',
    //   buttonLink: '#signup',
    // },
  ];

  return (
    <div className="relative w-full h-screen max-h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        speed={1000}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Image background with overlay */}
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content overlay - centered text and button with animations */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white max-w-3xl"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {slides[activeIndex].title}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {slides[activeIndex].description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link 
                to={slides[activeIndex].buttonLink} 
                className="bg-orange-400 text-white  font-medium py-3 px-8 rounded-lg "
              >
                {slides[activeIndex].buttonText}
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Optional: Slide indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <div 
              key={index} 
              className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-white bg-opacity-50'} transition-all duration-300`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderCarousel;