import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  "U-POWER", "PUMA SAFETY", "ELTEN", "ALBATROS", "HELLY HANSEN", "ENGELBERT STRAUSS", "CARHARTT", "3M", "UVEX"
];

const Brands = () => {
  return (
    <div className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">
          Unsere Top-Partner & Marken
        </span>
      </div>
      
      {/* Infinite Scroll Wrapper */}
      <div className="flex relative">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex flex-nowrap gap-16 items-center whitespace-nowrap"
        >
          {/* We double the list to create a seamless loop */}
          {[...brands, ...brands].map((brand, idx) => (
            <div 
              key={idx} 
              className="text-2xl md:text-3xl font-black text-slate-400 hover:text-accent transition-colors cursor-default select-none tracking-tighter"
            >
              {brand}
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Overlays for smooth fade out at edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default Brands;
