import React from 'react';

const brands = [
  { name: "U-POWER", logo: "https://xt-trade.com/mediafiles/landing-assets/images/supplier/u-power.svg" },
  { name: "ASATEX", logo: "https://xt-trade.com/mediafiles/landing-assets/images/supplier/asatex.svg" },
  { name: "ISM EUROPE", logo: "https://xt-trade.com/mediafiles/landing-assets/images/supplier/ism.svg" },
  { name: "AS Arbeitsschutz", logo: "https://xt-trade.com/mediafiles/landing-assets/images/supplier/nitras-safety.svg" },
  { name: "TRIUSO", logo: "https://xt-trade.com/mediafiles/landing-assets/images/supplier/triuso.svg" },
  { name: "BP", logo: "https://xt-trade.com/mediafiles/landing-assets/images/supplier/bp.svg" },
  { name: "PROMODORO", logo: "https://xt-trade.com/mediafiles/landing-assets/images/supplier/promodoro.svg" },
  { name: "COTTON CLASSICS", logo: "https://xt-trade.com/mediafiles/landing-assets/images/supplier/cc.svg" }
];

const BrandList = () => (
  <div className="flex items-center shrink-0">
    {brands.map((brand, idx) => (
      <div
        key={idx}
        className="group flex-shrink-0 mr-12 px-6 py-4 bg-white rounded-lg border border-gray-200 hover:border-accent hover:shadow-md transition-all duration-300 cursor-pointer"
      >
        <img
          src={brand.logo}
          alt={brand.name}
          className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
        />
      </div>
    ))}
  </div>
);

const BrandsLogos = () => {
  return (
    <div className="py-16 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">
          Unsere Partner
        </span>
      </div>

      {/* Infinite Scroll Wrapper */}
      <div className="relative">
        <div
          className="flex w-max"
          style={{ animation: 'infinite-scroll 50s linear infinite' }}
        >
          <BrandList />
          <BrandList />
        </div>

        {/* Gradient Overlays for smooth fade out at edges */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default BrandsLogos;
