import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full md:px-40 z-10 ">
      <div className="bg-[#ffffff] shadow-md rounded-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            {/* <img
              className="h-8 w-auto"
              src="/api/placeholder/120/40"
              alt="Logo"
            /> */}
            <h1 className="text-black text-2xl font-bold">Logo</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              <Link to="/" className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/about" className="text-gray-500 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/services" className="text-gray-500 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link to="/gallery" className="text-gray-500 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Gallery</Link>
              <Link to="/contact" className="text-gray-500 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>

          {/* Right Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
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
              <Link to="/" className="block text-gray-900 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <Link to="/about" className="block text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">About</Link>
              <a href="#" className="block text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Services</a>
              <a href="#" className="block text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Contact</a>
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