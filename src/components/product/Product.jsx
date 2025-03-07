import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Info, PenTool, Shield, Thermometer, Users } from 'lucide-react';
import {productsData} from './productData';

// Import the product data from your data file
// import { productsData } from './productData';

const BioSolubleProductPage = () => {
  // State to track active product
  const [activeProduct, setActiveProduct] = useState('blankets');

  // Product categories
  const bioSolubleProducts = [
    { id: 'bulk-wool', name: 'BIO SOLUBLE BULK WOOL' },
    { id: 'blankets', name: 'BIO SOLUBLE BLANKETS' },
    { id: 'module', name: 'BIO SOLUBLE MODULE' },
    { id: 'board', name: 'BIO SOLUBLE BOARD & SHAPES' },
    { id: 'paper', name: 'BIO SOLUBLE PAPER' },
    { id: 'ropes', name: 'BIO SOLUBLE ROPES' }
  ];

  const ceramicFiberProducts = [
    { id: 'ceramic-wool', name: 'CERAMIC FIBER WOOL' },
    { id: 'ceramic-blankets', name: 'CERAMIC FIBER BLANKETS' },
    { id: 'ceramic-module', name: 'CERAMIC FIBER MODULE' },
    { id: 'ceramic-board', name: 'CERAMIC FIBER BOARD & SHAPES' },
    { id: 'ceramic-paper', name: 'CERAMIC FIBER PAPER' },
    { id: 'ceramic-ropes', name: 'CERAMIC FIBER ROPES' }
  ];

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const handleProductClick = (productId) => {
    setActiveProduct(productId);
  };

  // Get the active product data
  // In a real app, you would find the product data based on activeProduct ID
  // For this example, I'm using the first product from the array
  const activeProductData = productsData[0]; // Replace with actual lookup logic

  // Render product table - handles different table structures
  const renderTable = (specTable) => (
    <div className="w-full mt-6">
      <h3 className="bg-gray-100 p-3 font-semibold rounded text-gray-800 mb-3">{specTable.title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {specTable.data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="p-3 border border-gray-200 font-medium">{row.property}</td>
                {row.values.map((value, colIndex) => (
                  <td key={colIndex} className={`p-3 border border-gray-200 text-center ${!value && 'bg-gray-50'}`}>
                    {value || ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <motion.div 
              className="mb-8"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg font-semibold pb-2 border-b-2 border-amber-400 mb-4 uppercase">
                Bio Soluble Products
              </h2>
              <ul className="space-y-1">
                {bioSolubleProducts.map((product) => (
                  <motion.li key={product.id} whileHover={{ x: 5 }}>
                    <button
                      onClick={() => handleProductClick(product.id)}
                      className={`w-full flex items-center p-3 rounded text-left ${
                        activeProduct === product.id
                          ? 'bg-amber-400 text-gray-800 font-medium'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      } transition-colors duration-200`}
                    >
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {product.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-lg font-semibold pb-2 border-b-2 border-amber-400 mb-4 uppercase">
                Ceramic Fibers Products
              </h2>
              <ul className="space-y-1">
                {ceramicFiberProducts.map((product) => (
                  <motion.li key={product.id} whileHover={{ x: 5 }}>
                    <button
                      onClick={() => handleProductClick(product.id)}
                      className={`w-full flex items-center p-3 rounded text-left ${
                        activeProduct === product.id
                          ? 'bg-amber-400 text-gray-800 font-medium'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      } transition-colors duration-200`}
                    >
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {product.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Main Content */}
          <motion.div 
            className="md:w-3/4 bg-white p-6 rounded-lg shadow-sm"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Product Header */}
            <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
              <motion.div className="md:w-2/5 w-full" variants={itemVariants}>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={activeProductData.image} 
                    alt={activeProductData.title} 
                    className="w-full  object-cover"
                  />
                </div>
              </motion.div>
              <motion.h1 
                className="text-2xl font-semibold text-center md:text-left text-gray-800 w-full md:w-3/5"
                variants={itemVariants}
              >
                {activeProductData.title}
              </motion.h1>
            </div>

            {/* Product Description */}
            <motion.div 
              className="mb-8 text-gray-600 leading-relaxed space-y-4"
              variants={itemVariants}
            >
              {activeProductData.description.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </motion.div>

            {/* Product Specifications */}
            <motion.div variants={itemVariants}>
              {/* {activeProductData.specifications.map((specTable, index) => (
                <React.Fragment key={index}>
                  {renderTable(specTable)}
                </React.Fragment>
              ))} */}
              {activeProductData.specifications.map((specTable, index) => (
                
              ))}
            </motion.div>

            {/* Applications and Features */}
            <motion.div 
              className="mt-8 grid md:grid-cols-2 gap-8"
              variants={itemVariants}
            >
              {/* Applications */}
              <div>
                
                <h3 className="flex items-center text-xl font-semibold pb-2 border-b-2 border-amber-400 mb-4">
                <Shield className="w-5 h-5 mr-2 text-amber-500" />
                  Applications
                </h3>
                <ul className="space-y-3">
                  {activeProductData.applications.map((application, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-baseline"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <span className="text-amber-400 mr-2">■</span>
                      <span>{application}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div>
                <h3 className="flex items-center text-xl font-semibold pb-2 border-b-2 border-amber-400 mb-4">
                  <Shield className="w-5 h-5 mr-2 text-amber-500" />
                  Features
                </h3>
                <ul className="space-y-3">
                  {activeProductData.features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-baseline"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <span className="text-amber-400 mr-2">■</span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BioSolubleProductPage;