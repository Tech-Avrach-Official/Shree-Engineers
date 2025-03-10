import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // This hook gives you the current location
  
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="w-full px-5 md:px-40 z-10 ">
      <div className="">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-third text-2xl font-bold">Logo</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              <Link 
                to="/" 
                className={`${isActive('/') ? 'text-third font-semibold bg-primary' : 'text-third'} hover:text-third hover:font-semibold hover:bg-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`${isActive('/about') ? 'text-third font-semibold bg-primary' : 'text-third'} hover:text-third hover:font-semibold hover:bg-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`${isActive('/services') ? 'text-third font-semibold bg-primary' : 'text-third'} hover:text-third hover:font-semibold hover:bg-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                Services
              </Link>
              <Link 
                to="/gallery" 
                className={`${isActive('/gallery') ? 'text-third font-semibold bg-primary' : 'text-third'} hover:text-third hover:font-semibold hover:bg-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                Gallery
              </Link>
              <Link 
                to="/projects" 
                className={`${isActive('/projects') ? 'text-third font-semibold bg-primary' : 'text-third'} hover:text-third hover:font-semibold hover:bg-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                Clientele
              </Link>
              <Link 
                to="/products" 
                className={`${isActive('/products') ? 'text-third font-semibold bg-primary' : 'text-third'} hover:text-third hover:font-semibold hover:bg-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                Products
              </Link>
              <Link 
                to="/contact" 
                className={`${isActive('/contact') ? 'text-third font-semibold bg-primary' : 'text-third'} hover:text-third hover:font-semibold hover:bg-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Right Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-primary cursor-pointer text-thirdary px-4 py-2 rounded-md text-sm font-medium">
              Get Started
            </button>
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-inner bg-gray-50">
              <Link 
                to="/" 
                className={`block ${isActive('/') ? 'text-indigo-600 bg-indigo-50 font-semibold' : 'text-gray-500'} hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`block ${isActive('/about') ? 'text-indigo-600 bg-indigo-50 font-semibold' : 'text-gray-500'} hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`block ${isActive('/services') ? 'text-indigo-600 bg-indigo-50 font-semibold' : 'text-gray-500'} hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Services
              </Link>
              <Link 
                to="/gallery" 
                className={`block ${isActive('/gallery') ? 'text-indigo-600 bg-indigo-50 font-semibold' : 'text-gray-500'} hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Gallery
              </Link>
              <Link 
                to="/projects" 
                className={`block ${isActive('/projects') ? 'text-indigo-600 bg-indigo-50 font-semibold' : 'text-gray-500'} hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Clientele
              </Link>
              <Link 
                to="/products" 
                className={`block ${isActive('/products') ? 'text-indigo-600 bg-indigo-50 font-semibold' : 'text-gray-500'} hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Products
              </Link>
              <Link 
                to="/contact" 
                className={`block ${isActive('/contact') ? 'text-indigo-600 bg-indigo-50 font-semibold' : 'text-gray-500'} hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                Contact
              </Link>
              <div className="pt-2">
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;