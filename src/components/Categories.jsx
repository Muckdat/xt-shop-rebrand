import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: "Einwegprodukte",
    subtitle: "Maximaler Einwegschutz",
    size: "large",
    image: "https://xt-trade.com/mediafiles/landing-assets/images/coverchem200.jpg",
    link: "https://www.xt-trade.com/Arbeitsschutz-Einweg-Bekleidung",
    products: [
      {
        id: 1,
        name: "Overall Type 5/6 Weiß",
        image: "https://xt-trade.com/mediafiles/landing-assets/images/cp500.jpg",
        price: "Mehr erfahren",
        link: "https://www.xt-trade.com/Overalls"
      },
      {
        id: 2,
        name: "Nitrilhandschuhe Blau",
        image: "https://xt-trade.com/mediafiles/landing-assets/images/nitrilhandschuhe.jpg",
        price: "Mehr erfahren",
        link: "https://www.xt-trade.com/Handschuhe_2"
      },
      {
        id: 3,
        name: "Chemikalienschutz XL",
        image: "https://xt-trade.com/mediafiles/landing-assets/images/schutzanzug.jpg",
        price: "Mehr erfahren",
        link: "https://www.xt-trade.com/Overalls"
      }
    ]
  },
  {
    id: 2,
    title: "Workwear",
    subtitle: "Robust & Komfortabel",
    size: "small",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
    link: "https://www.xt-trade.com/Berufsbekleidung",
    products: [
      {
        id: 1,
        name: "Arbeitshose Stretch",
        image: "https://xt-trade.com/mediafiles/landing-assets/images/hose-stretch.jpg",
        price: "Mehr erfahren ",
        link: "https://www.xt-trade.com/Bundhosen"
      },
      {
        id: 2,
        name: "Moderne Bundjacke",
        image: "https://xt-trade.com/mediafiles/landing-assets/images/jacke-stretch.jpg",
        price: "Mehr erfahren",
        link: "https://www.xt-trade.com/Bundjacken"
      },
      {
        id: 3,
        name: "Warnschutz Weste",
        image: "https://xt-trade.com/mediafiles/landing-assets/images/warnschutzweste.jpg",
        price: "Mehr erfahren",
        link: "https://www.xt-trade.com/warnschutz-weste-neongelbhtml"
      }
    ]
  },
  {
    id: 3,
    title: "PSA / Sicherheitsschuhe",
    subtitle: "Safety First",
    size: "small",
    image: "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80&w=2070&auto=format&fit=crop",
    link: "https://www.xt-trade.com/Sicherheitsschuhe",
    products: [
      {
        id: 1,
        name: "S3 Sicherheitsschuh Pro",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop",
        price: "Mehr erfahren",
        link: "https://www.xt-trade.com/S3"
      },
      {
        id: 2,
        name: "Schutzhelm Modern",
        image: "https://xt-trade.com/mediafiles/landing-assets/images/schutzhelm.jpg",
        price: "Mehr erfahren",
        link: "https://www.xt-trade.com/PE-Schutzhelm-6-Punkt-Textilbaenderung-EN397"
      },
      {
        id: 3,
        name: "Schnittschutz Handschuhe",
        image: "https://xt-trade.com/mediafiles/landing-assets/images/handschuhe.jpg",
        price: "Mehr erfahren",
        link: "https://www.xt-trade.com/Schnittschutzhandschuh-Stufe-5PU-Beschichtung-grau-eco"
      }
    ]
  }
];

const ProductPopup = ({ products, categoryTitle, categoryLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute inset-0 bg-slate-900/85 backdrop-blur-sm rounded-xl z-50 flex flex-col items-center justify-center p-4 md:p-6"
    >
      {/* Header */}
      <div className="mb-6 text-center">
        <h4 className="text-2xl font-extrabold text-white uppercase tracking-tight mb-1">{categoryTitle}</h4>
        <p className="text-sm text-gray-300"> </p>
      </div>

      {/* Product Grid - Horizontal */}
      <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6 w-full max-w-2xl">
        {products.slice(0, 3).map((product) => (
          <a
            key={product.id}
            href={product.link}
            className="group/item bg-white rounded-lg border-2 border-gray-200 hover:border-accent transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg"
          >
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-3">
              <h5 className="text-sm font-bold text-slate-900 mb-2 line-clamp-2 group-hover/item:text-accent transition-colors">
                {product.name}
              </h5>
              <p className="text-sm font-extrabold text-accent">{product.price}</p>
            </div>
          </a>
        ))}
      </div>

      {/* View All Link */}
      <a
        href={categoryLink}
        className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-slate-900 font-bold text-sm rounded-lg hover:bg-accent hover:text-white transition-colors duration-300 shadow-lg"
      >
        Alle Produkte ansehen
        <ArrowRight size={16} />
      </a>
    </motion.div>
  );
};

const CategoryCard = ({ category, index, isHovered, onHoverChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => onHoverChange(category.id)}
      onMouseLeave={() => onHoverChange(null)}
      onClick={() => onHoverChange(isHovered === category.id ? null : category.id)}
      className={`relative group overflow-hidden rounded-xl shadow-lg cursor-pointer ${
        category.size === 'large' ? 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto' : 'col-span-1'
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-slate-200 rounded-xl overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Overlay Gradient - Stronger for better readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300 rounded-xl" />

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

      {/* Centered Product Popup Overlay */}
      <AnimatePresence>
        {isHovered === category.id && category.products && (
          <ProductPopup
            products={category.products}
            categoryTitle={category.title}
            categoryLink={category.link}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Categories = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4">
              IHRE ANFORDERUNGEN - UNSERE <span className="text-accent">LÖSUNGEN</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Professionelle Ausrüstung für extreme Bedingungen.
            </p>
          </motion.div>

          <motion.a
             href="#beratung"
             onClick={(e) => {
               e.preventDefault();
               document.getElementById('beratung')?.scrollIntoView({ behavior: 'smooth' });
             }}
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="hidden md:flex items-center gap-2 text-slate-800 font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors cursor-pointer"
          >
            Gemeinsam lösen <ArrowUpRight size={18} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {categories.map((cat, idx) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              index={idx}
              isHovered={hoveredCategory}
              onHoverChange={setHoveredCategory}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;