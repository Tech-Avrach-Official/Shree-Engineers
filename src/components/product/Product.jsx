import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Shield } from 'lucide-react';
import { productsData } from './productData';

const ProductPage = () => {
  // State to track active product
  const [activeProductId, setActiveProductId] = useState(1);

  // Product categories - these would typically come from an API or data file
  const bioSolubleProducts = [
    { id: 1, name: 'BIO SOLUBLE BULK WOOL' },
    { id: 2, name: 'BIO SOLUBLE BLANKETS' },
    { id: 3, name: 'BIO SOLUBLE MODULE' },
    { id: 4, name: 'BIO SOLUBLE BOARD & SHAPES' },
    { id: 5, name: 'BIO SOLUBLE PAPER' },
    { id: 6, name: 'BIO SOLUBLE ROPES' }
  ];

  const ceramicFiberProducts = [
    { id: 7, name: 'CERAMIC FIBER WOOL' },
    { id: 8, name: 'CERAMIC FIBER BLANKETS' },
    { id: 9, name: 'CERAMIC FIBER MODULE' },
    { id: 10, name: 'CERAMIC FIBER BOARD & SHAPES' },
    { id: 11, name: 'CERAMIC FIBER PAPER' },
    { id: 12, name: 'CERAMIC FIBER ROPES' }
  ];

  // Animation variants
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

  // Find active product data based on ID
  const getActiveProduct = () => {
    // In a real application, you would fetch this data based on the active ID
    // For this example, we're just finding it in the array
    const product = productsData.find(product => product.id === activeProductId);
    return product || productsData[0]; // Fallback to first product if not found
  };

  const activeProduct = getActiveProduct();

  return (
    <div className="bg-gray-50 w-full h-full px-5 md:px-20 lg:px-40 py-8">
      <div className="">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/3 bg-white rounded-lg scrollbar-hide shadow-sm md:sticky md:top-4 md:h-screen md:overflow-y-auto p-5">
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
                      onClick={() => setActiveProductId(product.id)}
                      className={`w-full flex items-center p-3 rounded text-left ${
                        activeProductId === product.id
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
                      onClick={() => setActiveProductId(product.id)}
                      className={`w-full flex items-center p-3 rounded text-left ${
                        activeProductId === product.id
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
            key={activeProductId} // Re-render motion div when product changes
          >
            {/* Product Header */}
            <div className="flex flex-col md:flex-col gap-6 items-center mb-8">
              <motion.div className="md:w-full w-full" variants={itemVariants}>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={activeProduct.image} 
                    alt={activeProduct.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.h1 
                className="text-2xl font-semibold text-center md:text-center text-gray-800 w-full md:w-3/5"
                variants={itemVariants}
              >
                {activeProduct.title}
              </motion.h1>
            </div>

            {/* Product Description */}
            <motion.div 
              className="mb-8 text-gray-600 leading-relaxed space-y-4"
              variants={itemVariants}
            >
              {activeProduct.description.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </motion.div>

            {/* Product Specifications */}
            <motion.div variants={itemVariants}>
              {activeProduct.table}
            </motion.div>

            {/* Applications and Features */}
            {(activeProduct.applications || activeProduct.features) && (
              <motion.div 
                className="mt-8 grid md:grid-cols-2 gap-8"
                variants={itemVariants}
              >
                {/* Applications - Only render if they exist */}
                {activeProduct.applications && (
                  <div>
                    <h3 className="flex items-center text-xl font-semibold pb-2 border-b-2 border-amber-400 mb-4">
                      <Shield className="w-5 h-5 mr-2 text-amber-500" />
                      Applications
                    </h3>
                    <ul className="space-y-3">
                      {activeProduct.applications.map((application, index) => (
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
                )}

                {/* Features - Only render if they exist */}
                {activeProduct.features && (
                  <div>
                    <h3 className="flex items-center text-xl font-semibold pb-2 border-b-2 border-amber-400 mb-4">
                      <Shield className="w-5 h-5 mr-2 text-amber-500" />
                      Features
                    </h3>
                    <ul className="space-y-3">
                      {activeProduct.features.map((feature, index) => (
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
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;