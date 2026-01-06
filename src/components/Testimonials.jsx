import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Markus Schmidt",
    role: "Bauleiter bei HochTief AG",
    text: "Die Sicherheitsschuhe von XT-Trade sind die ersten, die nicht nur sicher sind, sondern auch nach 12 Stunden auf der Baustelle nicht drücken. Absolute Kaufempfehlung.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Sarah Weber",
    role: "Sicherheitsbeauftragte",
    text: "Wir haben unsere gesamte Flotte mit der neuen Workwear-Kollektion ausgestattet. Die Langlebigkeit der Materialien spart uns langfristig enorme Kosten.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Thomas Meyer",
    role: "Industriekletterer",
    text: "In meinem Job ist Vertrauen in das Equipment alles. Die PSA von XT-Trade hat mich noch nie im Stich gelassen, egal bei welchem Wetter.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Stimmen aus der Praxis
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            VERTRAUEN DURCH <span className="text-accent">QUALITÄT</span>
          </motion.h2>
          <p className="text-slate-500 text-lg">
            Über 10.000 Profis weltweit verlassen sich täglich auf XT-Trade. Hier ist, was einige von ihnen sagen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-gray-50 p-8 rounded-2xl relative group hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100"
            >
              <Quote className="absolute top-8 right-8 text-gray-200 group-hover:text-accent/20 transition-colors" size={40} />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-accent fill-accent" />
                ))}
              </div>

              <p className="text-slate-600 italic mb-8 relative z-10">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-14 h-14 rounded-full object-cover transition-all duration-500 border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-[#0F172A] group-hover:text-accent transition-colors duration-300">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Brand Logos Carousel */}
        <div className="mt-32 pt-16 border-t border-gray-100 overflow-hidden relative">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white px-6 py-2">
              <span className="text-[10px] font-bold tracking-[0.4em] text-gray-300 uppercase whitespace-nowrap">
                PROJEKTPARTNER & KUNDEN
              </span>
           </div>

           <div className="flex relative mt-4">
              <motion.div 
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                  duration: 25, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="flex flex-nowrap gap-24 items-center whitespace-nowrap"
              >
                {["HOCHTIEF", "STRABAG", "VINCI", "BAM GROUP", "EIFFAGE", "ZÜBLIN", "GOLDBECK", "PORR"].concat(["HOCHTIEF", "STRABAG", "VINCI", "BAM GROUP", "EIFFAGE", "ZÜBLIN", "GOLDBECK", "PORR"]).map((brand, idx) => (
                  <span 
                    key={idx} 
                    className="text-3xl font-black tracking-tighter text-slate-700 opacity-70 hover:text-accent hover:opacity-100 transition-all duration-300 cursor-default"
                  >
                    {brand}
                  </span>
                ))}
              </motion.div>
              
              {/* Fade Overlays */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
