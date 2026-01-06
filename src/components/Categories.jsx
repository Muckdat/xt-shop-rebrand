import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: "Einwegoveralls",
    subtitle: "Maximaler Einwegschutz",
    size: "large",
    image: "https://images.unsplash.com/photo-1584467735815-f778f274e296?q=80&w=1974&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 2,
    title: "Workwear",
    subtitle: "Robust & Komfortabel",
    size: "small",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "PSA / Sicherheitsschuhe",
    subtitle: "Safety First",
    size: "small",
    image: "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  }
];

const CategoryCard = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative group overflow-hidden rounded-xl shadow-lg cursor-pointer ${
        category.size === 'large' ? 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto' : 'col-span-1'
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-slate-200">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Overlay Gradient - Stronger for better readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end items-start">
        <div className="relative z-10 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
          <span className="text-accent font-bold tracking-widest uppercase text-[10px] md:text-xs mb-1 md:mb-2 block">
            {category.subtitle}
          </span>
          <h3 className={`font-extrabold text-white uppercase leading-tight drop-shadow-lg ${
            category.size === 'large' ? 'text-3xl md:text-5xl' : 'text-xl md:text-2xl'
          }`}>
            {category.title}
          </h3>
        </div>

        {/* Action Button */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-lg border border-white/20">
          <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transform group-hover:rotate-45 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
};

const Categories = () => {
  return (
    <section className="py-24 bg-white relative">
       {/* Background Elements - Subtle Grey */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4">
              CHOOSE YOUR <span className="text-accent">NEED</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Professionelle Ausrüstung für extreme Bedingungen. Wähle deine Kategorie.
            </p>
          </motion.div>
          
          <motion.button 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="hidden md:flex items-center gap-2 text-slate-800 font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors"
          >
            Alle Kategorien ansehen <ArrowUpRight size={18} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {categories.map((cat, idx) => (
            <CategoryCard key={cat.id} category={cat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;