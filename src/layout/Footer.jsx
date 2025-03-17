import React from 'react';
// import { Facebook, Twitter, Instagram, Linkedin, Whatsapp } from 'lucide-react';
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'
// import twitter from '../assets/twitter.svg'
import whatsapp from '../assets/whatsapp.svg'

const Footer = () => {
  const whatsappNumber = "918718812605"
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=I+am+interested+in+your+products.+Please+share+the+details`
  return (
    <footer className="bg-[#283B59] text-gray-300 py-20 px-5 md:px-20 lg:px-40">
      <div className="">
          {/* Logo and Description */}
          <div className='flex flex-col gap-10 lg:flex-row  justify-between'>

          <div className="w-full md:w-1/4">
            <h2 className="text-white text-3xl font-bold mb-4">MCED Footer</h2>
            <p className="text-gray-200 text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            </p>
          </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
          {/* Navigation */}
          <div className="col-span-1">
            <h3 className="text-white text-xl mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Services</a></li>
              <li><a href="#" className="hover:text-white transition">Features</a></li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-span-1">
            <h3 className="text-white text-xl mb-4">Information</h3>
            <ul className="space-y-2">
              <li>+123456789</li>
              <li>mudassar@gmail.com</li>
              <li>890, Green Lane, Pakistan</li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="col-span-1">
            <h3 className="text-white text-xl mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li>Mon - Thu: 9:00 - 21:00</li>
              <li>Fri 8:00 - 21:00</li>
              <li>Sat 9:30 - 15: 00</li>
              <li>Sun off</li>
            </ul>
          </div>
        </div>
          </div>

        {/* Copyright and Social Icons */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          {/* <p className="text-sm mb-4 md:mb-0">
            Copyright ©2020 All rights reserved | Block is made with by 
            <a href="#" className="text-blue-400 hover:text-blue-300 ml-1">Mudassar Chaudhry</a>
          </p> */}
          
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61566026194334" target='_blank' className="text-white hover:text-orange-400 transition">
              <img src={facebook} alt="Facebook" className="w-10" />
            </a>
            <a href={whatsappLink} target='_blank' className="text-white hover:text-orange-400 transition">
              <img src={whatsapp} alt="Whatsapp" className="w-10" />
            </a>
            <a href="https://www.linkedin.com/company/shree-insulation/about/?viewAsMember=true" target='_blank' className="text-white hover:text-orange-400 transition">
              <img src={linkedin} alt="Linkedin" className="w-10" />
            </a>
            <a href="https://www.instagram.com/shree.insul/" target='_blank' className="text-white hover:text-orange-400 transition">
              <img src={instagram} alt="Instagram" className="w-10" />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
