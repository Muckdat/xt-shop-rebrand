import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const SlideContent = ({ title, subtitle, buttonText, isActive }) => {
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {isActive && (
          <>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl font-semibold tracking-widest text-accent uppercase"
            >
              {subtitle}
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-white tracking-tight leading-tight"
            >
              {title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8"
            >
              <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold text-lg tracking-wide hover:bg-white hover:text-black transition-all duration-300 rounded-sm overflow-hidden">
                <span className="relative z-10">{buttonText}</span>
                <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
              </button>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect={'fade'}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + ' !bg-accent"></span>';
          },
        }}
        className="h-full w-full"
      >
        {/* Slide 1: Image */}
        <SwiperSlide>
          {({ isActive }) => (
            <div className="relative h-full w-full">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 z-10"></div>

              {/* Image Background */}
              <img
                src="https://assets.watara.services/xt/assets/multinorm_cool.jpg"
                alt="Multinorm Cool"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Content */}
              <SlideContent 
                isActive={isActive}
                subtitle="Ultimate Protection"
                title="BUILT FOR EXTREMES"
                buttonText="Jetzt Einkaufen"
              />
            </div>
          )}
        </SwiperSlide>

        {/* Slide 2: Video */}
        <SwiperSlide>
          {({ isActive }) => (
            <div className="relative h-full w-full">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 z-10"></div>
              
              {/* Video Background */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="https://assets.watara.services/xt/assets/DEF%20Scarpa%20U-Power.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Content */}
              <SlideContent 
                isActive={isActive}
                subtitle="Next Level Safety"
                title="REDEFINING WORKWEAR"
                buttonText="Kollektion entdecken"
              />
            </div>
          )}
        </SwiperSlide>
      </Swiper>
      
      {/* Custom CSS for Pagination bullets override if needed */}
      <style>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #EF9112 !important;
          width: 30px;
          border-radius: 6px;
          transition: width 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Hero;
