import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // This hook gives you the current location
  // const [primary, setPrimary] = useState('#FFD700');

  // const primary = 'white';
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`w-full px-5 md:px-40 z-10`} 
    // style={{ backgroundColor: primary }}
    >
      <div className="">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            {/* <h1 className="text-white text-2xl font-bold">Logo</h1> */}
            <img src={Logo} alt="Logo" className='w-24' />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              <Link 
                to="/" 
                className={`${isActive('/') ? 'text-white font-semibold bg-orange-400' : 'text-black'} hover:text-white hover:font-semibold hover:bg-orange-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`${isActive('/about') ? 'text-white font-semibold bg-orange-400' : 'text-black'} hover:text-white hover:font-semibold hover:bg-orange-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`${isActive('/services') ? 'text-white font-semibold bg-orange-400' : 'text-black'} hover:text-white hover:font-semibold hover:bg-orange-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Services
              </Link>
              <Link 
                to="/gallery" 
                className={`${isActive('/gallery') ? 'text-white font-semibold bg-orange-400' : 'text-black'} hover:text-white hover:font-semibold hover:bg-orange-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Gallery
              </Link>
              <Link 
                to="/projects" 
                className={`${isActive('/projects') ? 'text-white font-semibold bg-orange-400' : 'text-black'} hover:text-white hover:font-semibold hover:bg-orange-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Clientele
              </Link>
              {/* <Link 
                to="/products" 
                className={`${isActive('/products') ? 'text-white font-semibold bg-orange-400' : 'text-white'} hover:text-white hover:font-semibold hover:bg-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                Products
              </Link> */}
              {/* <Link 
                to="/contact" 
                className={`${isActive('/contact') ? 'text-white font-semibold bg-orange-400' : 'text-white'} hover:text-white hover:font-semibold hover:bg-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                Contact
              </Link> */}
            </div>
          </div>

          {/* Right Button */}
          <div className="hidden md:flex items-center">
            <Link to="/contact" className="bg-orange-400 cursor-pointer text-white px-4 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
              <Link 
                to="/" 
                className={`block ${isActive('/') ? 'text-white bg-orange-400 font-semibold' : 'text-gray-500'} hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`block ${isActive('/about') ? 'text-white bg-orange-400 font-semibold' : 'text-gray-500'} hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`block ${isActive('/services') ? 'text-white bg-orange-400 font-semibold' : 'text-gray-500'} hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Services
              </Link>
              <Link 
                to="/gallery" 
                className={`block ${isActive('/gallery') ? 'text-white bg-orange-400 font-semibold' : 'text-gray-500'} hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Gallery
              </Link>
              <Link 
                to="/projects" 
                className={`block ${isActive('/projects') ? 'text-white bg-orange-400 font-semibold' : 'text-gray-500'} hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Clientele
              </Link>
              {/* <Link 
                to="/products" 
                className={`block ${isActive('/products') ? 'text-white bg-orange-400 font-semibold' : 'text-gray-500'} hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Products
              </Link> */}
              <Link 
                to="/contact" 
                className={`block ${isActive('/contact') ? 'text-white bg-orange-400 font-semibold' : 'text-gray-500'} hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Contact
              </Link>
              {/* <div className="pt-2">
                <Link to="/contact" className="w-full text-white bg-orange-400 px-4 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;