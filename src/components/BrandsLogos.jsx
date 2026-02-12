import React from 'react';

const brands = [
  { name: "U-POWER", logo: "https://xt-trade.com/mediafiles/landing-assets/images/brands/u-power.svg" },
  { name: "COVERSTAR", logo: "https://xt-trade.com/mediafiles/landing-assets/images/brands/cstar.svg" },
  { name: "PUMA SAFETY", logo: "https://xt-trade.com/mediafiles/landing-assets/images/brands/puma-safety.svg" },
  { name: "COVERFLASH", logo: "https://xt-trade.com/mediafiles/landing-assets/images/brands/cflash.svg" },
  { name: "NITRAS", logo: "https://xt-trade.com/mediafiles/landing-assets/images/brands/nitras-safety.svg" },
  { name: "PREVENT TRENDLINE", logo: "https://xt-trade.com/mediafiles/landing-assets/images/brands/prevent-trendline.svg" },
  { name: "LEIBWÄCHTER", logo: "https://xt-trade.com/mediafiles/landing-assets/images/brands/leibweachter.svg" },
  { name: "ALBATROSS", logo: "https://xt-trade.com/mediafiles/landing-assets/images/brands/albatross.svg" },
  { name: "COVERCHEM200", logo: "https://xt-trade.com/mediafiles/landing-assets/images/brands/cchem200.svg" },
  { name: "BP", logo: "https://xt-trade.com/mediafiles/landing-assets/images/brands/bp.svg" },
  { name: "PROMODORO", logo: "https://xt-trade.com/mediafiles/landing-assets/images/brands/promodoro.svg" },
  { name: "COVERBASE", logo: "https://xt-trade.com/mediafiles/landing-assets/images/brands/cbase.svg" },
  { name: "JAMES NICHOLSON", logo: "https://xt-trade.com/mediafiles/landing-assets/images/brands/jamesnicholson.svg" }
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
    <div className="py-16 bg-gray-50 border-b border-gray-200 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <span className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase">
          Unsere Markenwelt
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
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
      </div>
    </div>
  );
};

export default BrandsLogos;
