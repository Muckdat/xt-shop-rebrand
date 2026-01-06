import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ShoppingCart, Star, Heart } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  {
    id: 1,
    name: "ULTRA GRIP PRO",
    category: "Sicherheitsschuhe S3",
    price: "129,95 €",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
    tag: "BESTSELLER"
  },
  {
    id: 2,
    name: "STORM SHELL JACKET",
    category: "Wetterschutz",
    price: "89,90 €",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
    rating: 4,
    tag: "NEW"
  },
  {
    id: 3,
    name: "IMPACT GLOVES X",
    category: "Handschutz",
    price: "24,50 €",
    image: "https://images.unsplash.com/photo-1590779033100-9f60705a2f3b?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
    tag: null
  },
  {
    id: 4,
    name: "VISION PRO TEC",
    category: "Augenschutz",
    price: "19,95 €",
    image: "https://images.unsplash.com/photo-1598252976008-76a145d33c2e?q=80&w=2070&auto=format&fit=crop",
    rating: 4,
    tag: "SALE"
  },
  {
    id: 5,
    name: "HEAVY DUTY BOOT",
    category: "Sicherheitsschuhe S3",
    price: "149,00 €",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop",
    rating: 5,
    tag: null
  }
];

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden h-[450px] transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-xl border border-gray-100">
      {/* Badge */}
      {product.tag && (
        <div className="absolute top-4 left-4 z-20 bg-accent text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm shadow-md">
          {product.tag}
        </div>
      )}

      {/* Wishlist Button */}
      <button className="absolute top-4 right-4 z-20 p-2 bg-white text-gray-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-accent hover:text-white translate-y-4 group-hover:translate-y-0 shadow-md">
        <Heart size={18} />
      </button>

      {/* Image Container */}
      <div className="h-3/5 overflow-hidden relative bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-multiply" 
        />
        {/* Slightly darken on hover to make text pop if needed, but keeping it clean for light mode */}
      </div>

      {/* Info Container */}
      <div className="p-6 h-2/5 flex flex-col justify-between relative bg-white">
        <div>
          <span className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">{product.category}</span>
          <h3 className="text-slate-900 font-bold text-xl mb-2 group-hover:text-accent transition-colors">{product.name}</h3>
          
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={i < product.rating ? "text-accent fill-accent" : "text-gray-300"} 
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-slate-900 font-extrabold text-lg">{product.price}</span>
        </div>

        {/* Add to Cart - Slide Up on Hover */}
        <div className="absolute inset-x-0 bottom-0 p-6 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-gray-100">
          <button className="w-full bg-slate-900 text-white font-bold py-3 uppercase tracking-wide hover:bg-accent hover:text-white transition-colors flex items-center justify-center gap-2 rounded-lg shadow-lg">
            <ShoppingCart size={18} />
            In den Warenkorb
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
           <div>
              <span className="text-accent font-bold tracking-widest uppercase mb-2 block">Ausgewählte Favoriten</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">TRENDING <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">GEAR</span></h2>
           </div>
           
           <div className="hidden md:flex gap-2">
             {/* Swiper handles navigation */}
           </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="pb-16 !overflow-visible"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: #EF9112;
          background: white;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: all 0.3s;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          background: #EF9112;
          color: white;
        }
        .swiper-button-next::after, .swiper-button-prev::after {
          font-size: 18px;
          font-weight: bold;
        }
        .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #EF9112;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProducts;