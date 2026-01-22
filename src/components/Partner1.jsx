import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: "U-POWER", logo: "https://assets.watara.services/xt/assets/u-power.svg" },
  { name: "ASATEX", logo: "https://assets.watara.services/xt/assets/asatex.svg" },
  { name: "ISM EUROPE", logo: "https://assets.watara.services/xt/assets/ism.svg" },
  { name: "AS Arbeitsschutz", logo: "https://assets.watara.services/xt/assets/nitras-safety.svg" },
  { name: "TRIUSO", logo: "https://assets.watara.services/xt/assets/triuso.svg" },
  { name: "BP", logo: "https://assets.watara.services/xt/assets/bp.svg" },
  { name: "PROMODORO", logo: "https://assets.watara.services/xt/assets/promodoro.svg" },
  { name: "COTTON CLASSICS", logo: "https://assets.watara.services/xt/assets/cc.svg" }
];

const BrandsLogos = () => {
  return (
    <div className="py-16 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">
          Unsere Partner
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
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default BrandsLogos;
