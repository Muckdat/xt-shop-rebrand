import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: "U-POWER", logo: "https://assets.watara.services/xt/assets/u-power.svg" },
  { name: "PUMA SAFETY", logo: "https://assets.watara.services/xt/assets/puma-safety.svg" },
  { name: "ASATEX", logo: "https://assets.watara.services/xt/assets/asatex.svg" },
  { name: "NITRAS", logo: "https://assets.watara.services/xt/assets/nitras.svg" },
  { name: "LEIBWÄCHTER", logo: "https://assets.watara.services/xt/assets/leibweachter.svg" },
  { name: "BP", logo: "https://assets.watara.services/xt/assets/bp.svg" }
];

const BrandsLogos = () => {
  return (
    <div className="py-16 bg-gray-50 border-b border-gray-200 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">
          Vertrauensvolle Partnermarken
        </span>
      </div>

      {/* Infinite Scroll Wrapper */}
      <div className="flex relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex flex-nowrap gap-12 items-center"
        >
          {/* We double the list to create a seamless loop */}
          {[...brands, ...brands].map((brand, idx) => (
            <div
              key={idx}
              className="group flex-shrink-0 px-6 py-4 bg-white rounded-lg border border-gray-200 hover:border-accent hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays for smooth fade out at edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default BrandsLogos;
