import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, User, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const navData = {
  'Sicherheitsschuhe': {
    columns: [
      {
        title: "Nach Schutzklasse",
        items: ["S1 Sicherheitsschuhe", "S1P Sicherheitsschuhe", "S3 Sicherheitsschuhe", "ESD Schuhe", "Sicherheitsstiefel"]
      },
      {
        title: "Nach Einsatzgebiet",
        items: ["Bau & Handwerk", "Logistik & Transport", "Labor & Medizin", "Outdoor & Forst", "Gastronomie"]
      },
      {
        title: "Beliebte Marken",
        items: ["Puma Safety", "Albatros", "Elten", "U-Power", "Solid Gear"]
      }
    ],
    featured: {
      title: "ULTRALIGHT SERIES",
      subtitle: "Leichter war Sicherheit noch nie.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop"
    }
  },
  'Berufsbekleidung': {
    columns: [
      {
        title: "Kategorien",
        items: ["Arbeitshosen", "Arbeitsjacken", "Warnschutz", "Regenbekleidung", "Thermokleidung"]
      },
      {
        title: "Zubehör",
        items: ["Gürtel & Taschen", "Kniepolster", "Mützen & Caps", "Socken", "Funktionsunterwäsche"]
      },
      {
        title: "Kollektionen",
        items: ["Stretch X", "Neon", "Craftsman Pro", "Eco Line", "Winter Expert"]
      }
    ],
    featured: {
      title: "WINTER GEAR",
      subtitle: "Bereit für die Kälte?",
      image: "https://images.unsplash.com/photo-1517438984742-1262db08379e?q=80&w=1968&auto=format&fit=crop"
    }
  },
  'PSA': {
    columns: [
      {
        title: "Kopfschutz",
        items: ["Schutzhelme", "Anstoßkappen", "Forsthelme", "Zubehör"]
      },
      {
        title: "Augen & Gehör",
        items: ["Schutzbrillen", "Kapselgehörschutz", "Ohrstöpsel", "Visiere"]
      },
      {
        title: "Handschutz",
        items: ["Schnittschutz", "Montagehandschuhe", "Chemikalienschutz", "Winterhandschuhe"]
      }
    ],
    featured: {
      title: "SAFETY KITS",
      subtitle: "Komplettschutz Pakete",
      image: "https://images.unsplash.com/photo-1582142737525-24d14c24388e?q=80&w=2070&auto=format&fit=crop"
    }
  }
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const { scrollY } = useScroll();
  
  // Background transformation: Transparent -> White
  const headerBg = useTransform(
    scrollY, 
    [0, 50], 
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.98)']
  );
  
  const headerShadow = useTransform(
    scrollY,
    [0, 50],
    ['none', '0 4px 6px -1px rgba(0, 0, 0, 0.1)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColorClass = isScrolled || activeMenu ? 'text-slate-900' : 'text-white';

  return (
    <motion.header
      style={{ backgroundColor: activeMenu ? 'rgba(255, 255, 255, 1)' : headerBg, boxShadow: headerShadow }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm group/header`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className={`container mx-auto px-6 flex items-center justify-between transition-all duration-300 ${isScrolled || activeMenu ? 'py-4' : 'py-6'}`}>
        {/* Logo */}
        <div className="flex items-center gap-2 relative z-50">
          <div className="w-10 h-8 bg-accent rounded-sm flex items-center justify-center shadow-sm px-1">
             <span className="font-bold text-white text-lg">XT</span>
          </div>
          <span className={`text-2xl font-bold tracking-tighter transition-colors duration-300 ${textColorClass}`}>XT-TRADE</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 h-full relative z-50">
          {['Neuheiten', 'Sicherheitsschuhe', 'Berufsbekleidung', 'PSA', 'Sale'].map((item) => (
            <div 
              key={item}
              onMouseEnter={() => navData[item] ? setActiveMenu(item) : setActiveMenu(null)}
              className="relative h-full flex items-center"
            >
              <a 
                href="#" 
                className={`flex items-center gap-1 text-sm font-bold transition-colors uppercase tracking-wide py-4
                  ${activeMenu === item ? 'text-accent' : textColorClass}
                  hover:text-accent
                `}
              >
                {item}
                {navData[item] && (
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-300 ${activeMenu === item ? 'rotate-180' : ''}`}
                  />
                )}
              </a>
            </div>
          ))}
        </nav>

        {/* Icons */}
        <div className={`flex items-center gap-6 transition-colors duration-300 relative z-50 ${textColorClass}`}>
          <button className="hover:text-accent transition-colors"><Search size={20} /></button>
          <button className="hover:text-accent transition-colors hidden md:block"><User size={20} /></button>
          <button className="relative hover:text-accent transition-colors">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-accent text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-sm">2</span>
          </button>
          <button className="md:hidden hover:text-accent transition-colors"><Menu size={24} /></button>
        </div>
      </div>

      {/* Mega Menu Overlay */}
      <AnimatePresence>
        {activeMenu && navData[activeMenu] && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl z-40"
          >
            <div className="container mx-auto px-6 py-12">
              <div className="flex gap-12">
                {/* Links Columns */}
                <div className="flex-1 grid grid-cols-3 gap-8">
                  {navData[activeMenu].columns.map((col, idx) => (
                    <div key={idx}>
                      <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-6 border-b border-gray-100 pb-2">
                        {col.title}
                      </h4>
                      <ul className="space-y-3">
                        {col.items.map((link, lIdx) => (
                          <li key={lIdx}>
                            <a href="#" className="text-slate-500 hover:text-accent hover:translate-x-1 transition-all inline-block">
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Featured Card */}
                <div className="w-1/3">
                  <div className="relative h-full min-h-[250px] rounded-xl overflow-hidden group cursor-pointer">
                    <img 
                      src={navData[activeMenu].featured.image} 
                      alt="Featured" 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                      <span className="bg-accent text-white text-xs font-bold px-2 py-1 rounded-sm mb-3 inline-block">HIGHLIGHT</span>
                      <h3 className="text-2xl font-bold text-white mb-2">{navData[activeMenu].featured.title}</h3>
                      <p className="text-gray-300 mb-4 text-sm">{navData[activeMenu].featured.subtitle}</p>
                      <button className="flex items-center gap-2 text-white font-bold text-sm group-hover:gap-4 transition-all">
                        Jetzt entdecken <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;