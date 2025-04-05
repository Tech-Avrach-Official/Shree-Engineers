import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Snowflake, Volume2 } from 'lucide-react';

const ThermalInsulationServices = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const serviceCardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: { 
      y: -10,
      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative bg-[#ebebeb6d] text-white text-center py-14 md:py-32 px-5 md:px-40 overflow-hidden">
        {/* <div className="absolute inset-0 bg-[#fdfdfd08] opacity-50"></div> */}
        <div className="flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl text-[#283B59] font-bold mb-6 relative inline-block"
          >
           SHREE ENGINEERS & CONTRACTORS LIMITED 
          </motion.h1>
          {/* <span className="bg-[#283B59] w-fit px-4 py-1 rounded-full text-sm mb-5 text-white border-opacity-20">
            ISO 9001:2008 Certified
          </span> */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className=" mx-auto text-sm md:text-lg text-gray-800 text-justify mb-8"
          >
            In simple terms, thermal insulation reduces heat flow from one surface to another. For hot (above ambient) applications, thermal insulation reduces heat loss. On cold (below ambient) applications, the insulation generally serves to minimize heat gain.
In industry, energy has to be expended to raise, lower, or maintain the temperature of objects or process fluids. If these are not insulated, these increase the energy requirements of a process, and therefore have direct impact on cost and environment.
 <br />

 SHREE ENGINEERS & CONTRACTORS LIMITED an ISO 9001:2008 Certified Organization is extending its support in energy saving process at various industries, in accordance with their specifications and requirements, for past more than twelve years. Our expertise is in Hot and Cold Insulation. Shree Engineers offer a complete service that includes: thermal insulation, sheet metal fabrication and cladding. These services cover installation, fabrication, project management and material supply contracts.

          </motion.p>
          <motion.button
            whileHover={{ y: -3, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)" }}
            className="bg-orange-400 text-white text-xs md:text-base font-semibold py-3 px-6 rounded-md uppercase tracking-wide overflow-hidden relative"
          >
            Contact
          </motion.button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#283B59] mb-10 relative inline-block">
              Our Core Services
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-16 h-1 bg-orange-400"></span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              We offer a complete range of thermal insulation services including installation, fabrication, project management and material supply contracts designed to maximize energy efficiency and deliver significant cost savings for your business.
            </p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Hot Insulation Card */}
            <motion.div
              variants={serviceCardVariant}
              whileHover="hover"
              className="bg-white rounded-lg shadow-md"
            >
              <div className="h-56 relative">
                <img src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1742559346/Image-Shree/Home-page/iik3s5jvfuhiu9ttdoly.jpg" className='w-full h-full object-cover rounded-t-lg' alt="" />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> */}
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-6 left-6 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white">
                  <Flame size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#283B59] mb-6 pb-3 relative">
                  Hot Insulation
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-400"></span>
                </h3>
                <p className="text-gray-600 mb-5">
                  Prevent in-process energy loss for industries like Cement, Chemicals and Pharmaceuticals with our specialized hot insulation services.
                </p>
                <ul className="space-y-3">
                  {["Eco-friendly materials", "Superior insulation efficiency", 
                    "High performance systems", "Significant energy conservation"].map((item, i) => (
                    <li key={i} className="text-gray-600 relative pl-7">
                      <span className="absolute left-0 text-orange-400 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Cold Insulation Card */}
            <motion.div
              variants={serviceCardVariant}
              whileHover="hover"
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-56 relative">
                <img src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1743845820/Image-Shree/Home-page/p719yrjnvudr3yeubxzy.jpg" className='w-full h-full object-cover rounded-t-lg' alt="" />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> */}
              </div>
              <div className="p-6 pt-8 relative">
                <div className="absolute -top-6 left-6 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white">
                  <Snowflake size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#283B59] mb-6 pb-3 relative">
                  Cold Insulation
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-400"></span>
                </h3>
                <p className="text-gray-600 mb-5">
                  Maintain static temperatures in processes where both energy loss and gain need to be controlled with our reliable cold insulation solutions.
                </p>
                <ul className="space-y-3">
                  {["Highly effective temperature control", "Timely execution of projects", 
                    "Exceptional reliability", "Superior bearing capacity"].map((item, i) => (
                    <li key={i} className="text-gray-600 relative pl-7">
                      <span className="absolute left-0 text-orange-500 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Acoustic Insulation Card */}
            <motion.div
              variants={serviceCardVariant}
              whileHover="hover"
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-56 relative">
                <img src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1742628128/Image-Shree/Service%20page/nsrptrpuivknng9vfpjo.jpg" className='w-full h-full object-cover rounded-t-lg' alt="" />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> */}
              </div>
              <div className="p-6 pt-8 relative">
                <div className="absolute -top-6 left-6 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white">
                  <Volume2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#283B59] mb-6 pb-3 relative">
                  Acoustic Insulation
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-400"></span>
                </h3>
                <p className="text-gray-600 mb-5">
                  Reduce noise transmission through walls and floors with our wide range of acoustic insulation products using glass mineral wool technology.
                </p>
                <ul className="space-y-3">
                  {["Reliable noise reduction", "Flexible application methods", 
                    "High tolerance materials", "Efficient sound dampening"].map((item, i) => (
                    <li key={i} className="text-gray-600 relative pl-7">
                      <span className="absolute left-0 text-orange-400 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 px-4 bg-gray-100 relative">
        <div className="absolute inset-0 opacity-5 pattern-dots-lg"></div>
        <div className="max-w-6xl mx-auto relative">
          {/* Hot Insulation Details */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="bg-white h-full w-full rounded-lg shadow-md p-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-[#283B59] mb-8 border-l-4 border-orange-400 pl-4">
              Hot Insulation Services
            </h3>
            <div className="h-full w-full flex flex-col items-center justify-center lg:flex-row gap-10">
              <div className="w-full lg:w-1/2 py-5">
                <p className="text-gray-600 text-justify mb-4">
                In certain industries, only in process energy loss to be prevented while in Chemicals and Pharmaceutical Industries energy loss and gain both are required to be prevented to ensure system performance and to achieve consistent product quality.
                </p>
                <p className="text-gray-600 text-justify mb-4">
                  With hot insulation it is imperative to prevent moisture from entering the insulation system, as this will reduce the system's performance and can contribute to corrosion of the underlying pipes, vessels, flanges, valves, etc.
                </p>
                <p className="text-gray-600 text-justify">
                SHREE ENGINEERS with the gained expertise of thermal insulation for more than 2 decades provides total protection without any seams, overlaps or joints to cause short- or long-term failures and to prevent in process energy loss.
                </p>
              </div>
              <div className="w-full lg:w-1/2 rounded-lg shadow-md">
                <img src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1743762376/Image-Shree/Home-page/fc6geubsursjrtmvumlm.jpg" className='w-full md:min-h-[350px] max-h-[400px] object-cover rounded-lg' alt="" />
              </div>
            </div>
          </motion.div>

          {/* Cold Insulation Details */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="bg-white rounded-lg shadow-md p-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-[#283B59] mb-8 border-l-4 border-orange-400 pl-4">
              Cold Insulation Services
            </h3>
            <div className="w-full h-full items-center justify-center flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-1/2 rounded-lg shadow-md">
                <img src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1743762386/Image-Shree/Home-page/que0keav1nqum0nrgg8r.jpg" className='w-full max-h-[400px] object-cover rounded-lg' alt="" />
              </div>
              <div className="w-full lg:w-1/2 py-5 order-1 lg:order-2">
                <p className="text-gray-600 text-justify mb-4">
                  In industries like Chemical and Pharmaceuticals, both in process energy loss and energy gain need to be averted. A static temperature required to be maintained in the process.
                </p>
                <p className="text-gray-600 text-justify mb-4">
                  The greater the temperature difference between ambient and process temperature, the greater the "pull" of moisture to the pipe/vessel surface, and consequently, the greater the need for an effective and durable cold insulation system.
                </p>
                <p className="text-gray-600 text-justify">
                SHREE ENGINEERS renders highly reliable Cold Insulation including cryogenic grade insulation application.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Acoustic Insulation Details */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h3 className="text-2xl font-bold text-[#283B59] mb-8 border-l-4 border-orange-400 pl-4">
              Acoustic Insulation Services
            </h3>
            <div className="flex flex-col items-center justify-center lg:flex-row gap-10">
              <div className="w-full lg:w-1/2 py-5">
                <p className="text-gray-600 text-justify mb-4">
                We offer a wide range of acoustic insulation products and with the excellent acoustic insulation properties of glass mineral wool, the Earth wool sound reducing insulation products can be used in new built separating walls, partitions, and floors, as well as for the upgrade of existing buildings.
                </p>
                <p className="text-gray-600 text-justify mb-4">
                  Offered insulation services are extensively used to reduce noise through the walls applied in various industries and sectors. Offered services are accomplished by determining the flanking transmission that refers to passage of sound through walls & floors.
                </p>
                <p className="text-gray-600 text-justify">
                  Our team of hardworking professionals make sure that correct procedure and optimum quality material is employed in management of these services.
                </p>
              </div>
              <div className="w-full lg:w-1/2 rounded-lg shadow-md">
                <img src="https://res.cloudinary.com/dhf8eyjee/image/upload/v1742628128/Image-Shree/Service%20page/nsrptrpuivknng9vfpjo.jpg" className='w-full max-h-[400px] object-cover rounded-lg' alt="" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="relative py-24 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center">
        <div className="absolute inset-0 bg-blue-900 opacity-10 pattern-dots-xl"></div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 relative inline-block">
            Ready to Optimize Your Energy Efficiency?
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 w-16 h-1 bg-orange-500"></span>
          </h2>
          <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto">
            Contact Shree Engineers today to discuss your insulation needs. Our expert team will provide a detailed assessment and customized recommendation for your specific requirements.
          </p>
          <motion.button
            whileHover={{ y: -3, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)" }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md uppercase tracking-wide"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </section> */}
    </div>
  );
};

export default ThermalInsulationServices;