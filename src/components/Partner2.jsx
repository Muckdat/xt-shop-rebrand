import React from 'react';

const brands = [
  { name: "INDUTEC", logo: "https://xt-trade.com/mediafiles/landing-assets/images/customer/indutec.svg" },
  { name: "PETERHOFF", logo: "https://xt-trade.com/mediafiles/landing-assets/images/customer/peterhoff.svg" },
  { name: "GÜRKAN", logo: "https://xt-trade.com/mediafiles/landing-assets/images/customer/guerkan.svg" },
  { name: "PAP", logo: "https://xt-trade.com/mediafiles/landing-assets/images/customer/pap.svg" },
  { name: "THERME EUSKIRCHEN", logo: "https://xt-trade.com/mediafiles/landing-assets/images/customer/euskirchen.svg" },
  { name: "QUIP", logo: "https://xt-trade.com/mediafiles/landing-assets/images/customer/quip.svg" },


  
  // { name: "STADT BERGHEIM", logo: "https://xt-trade.com/mediafiles/landing-assets/images/customer/bergheim.svg" }
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
