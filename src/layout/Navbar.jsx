import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation(); // This hook gives you the current location

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Function to handle scroll event
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/projects', label: 'Clientele' },
    // { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`w-full px-5 sticky top-0 md:px-40 z-50 transition-colors duration-300 ${
        scrollPosition > 100 ? 'bg-[#00000056] backdrop-blur-sm' : 'bg-white'
      }`}
    >
      <div className="">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img src={Logo} alt="Logo" className="w-28" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`${
                    isActive(link.to)
                      ? 'text-white font-semibold bg-orange-400'
                      : 'text-black'
                  } ${
                    scrollPosition > 100 ? 'text-white' : ''
                  } hover:text-white hover:font-semibold hover:bg-orange-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="bg-orange-400 cursor-pointer text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleNavbar}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrollPosition > 100 ? 'text-white' : ' text-gray-500'
              } hover:text-indigo-600 hover:bg-gray-100 focus:outline-none`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
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
            className="md:hidden pb-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-2 pt-2 pb-1 space-y-1 sm:px-3 ">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block ${
                    isActive(link.to)
                      ? 'text-white bg-orange-400 font-semibold'
                      : 'text-gray-500'
                  } ${
                    scrollPosition > 100 ? 'text-white' : ''
                  } hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
                  key={"/contact"}
                  to={"/contact"}
                  className={`block ${
                    isActive('/contact')
                      ? 'text-white bg-orange-400 font-semibold'
                      : 'text-gray-500'
                  } ${
                    scrollPosition > 100 ? 'text-white' : ''
                  } hover:bg-indigo-50 hover:text-indigo-600 ml-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                >
                  Contact
                </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;