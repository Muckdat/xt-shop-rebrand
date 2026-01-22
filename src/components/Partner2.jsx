import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: "INDUTEC", logo: "https://assets.watara.services/xt/assets/indutec.svg" },
  { name: "PETERHOFF", logo: "https://assets.watara.services/xt/assets/peterhoff.svg" },
  { name: "MAAßEN", logo: "https://assets.watara.services/xt/assets/maassen.svg" },
  { name: "IWAGO", logo: "https://assets.watara.services/xt/assets/iwago.svg" },
  { name: "PAP", logo: "https://assets.watara.services/xt/assets/pap.svg" },
  { name: "LOBBE", logo: "https://assets.watara.services/xt/assets/lobbe.svg" },
  { name: "MATRIX", logo: "https://assets.watara.services/xt/assets/matrix.svg" },
  { name: "STADT BERGHEIM", logo: "https://assets.watara.services/xt/assets/bergheim.svg" },
  { name: "AZZA BAU", logo: "https://assets.watara.services/xt/assets/azza.svg" },
  { name: "ATC", logo: "https://assets.watara.services/xt/assets/atc.svg" }
];

const BrandsLogos = () => {
  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Divider with Label */}
        <div className="pt-16 border-t border-gray-100 relative mb-8">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-2">
            <span className="text-[10px] font-bold tracking-[0.4em] text-gray-300 uppercase whitespace-nowrap">
              UNSERE KUNDEN
            </span>
          </div>
        </div>
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
