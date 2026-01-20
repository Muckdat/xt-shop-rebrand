import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Calendar } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Markus Schmidt",
    role: "Bauleiter",
    company: "HOCHTIEF AG",
    text: "Nach der Umstellung auf XT-Trade Sicherheitsschuhe S3 konnten wir die Ausfallzeiten aufgrund von Fußverletzungen um 40% reduzieren. Die Kombination aus Tragekomfort und Sicherheitsstandards überzeugt auch nach 12-Stunden-Schichten auf der Baustelle.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    stats: [
      { icon: Users, label: "200+ Mitarbeiter ausgestattet" },
      { icon: Calendar, label: "Partner seit 2020" },
      { icon: Building2, label: "5 Großbaustellen" }
    ]
  },
  {
    id: 2,
    name: "Sarah Weber",
    role: "Sicherheitsbeauftragte",
    company: "STRABAG AG",
    text: "Wir haben unsere gesamte Flotte mit der XT-Trade Workwear-Kollektion ausgestattet. Die Langlebigkeit der Materialien hat unsere Beschaffungskosten um 25% gesenkt und die Mitarbeiterzufriedenheit messbar erhöht.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    stats: [
      { icon: Users, label: "350+ Mitarbeiter" },
      { icon: Calendar, label: "Seit 2019" },
      { icon: Building2, label: "Bundesweit" }
    ]
  },
  {
    id: 3,
    name: "Thomas Meyer",
    role: "Leiter Arbeitssicherheit",
    company: "INDUSTRIAL SERVICES GMBH",
    text: "Für Industriekletterarbeiten ist Vertrauen in die PSA essentiell. Die XT-Trade Ausrüstung erfüllt nicht nur alle Sicherheitsnormen, sondern hat sich auch unter extremsten Witterungsbedingungen bewährt. Kein einziger Ausfall in 3 Jahren.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    stats: [
      { icon: Users, label: "45 Spezialisten" },
      { icon: Calendar, label: "Partner seit 2021" },
      { icon: Building2, label: "Höhenarbeiten" }
    ]
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
            Referenzen & Kundenprojekte
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            VERTRAUEN DURCH <span className="text-accent">ERGEBNISSE</span>
          </motion.h2>
          <p className="text-slate-500 text-lg">
            Führende Unternehmen aus Bau, Industrie und Handwerk setzen auf XT-Trade.
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
              className="bg-white p-8 rounded-lg relative group hover:shadow-xl transition-all duration-500 border-2 border-gray-200 hover:border-accent/30"
            >
              {/* Company Name - Prominent */}
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight uppercase mb-1">
                  {review.company}
                </h3>
                <div className="h-1 w-12 bg-accent"></div>
              </div>

              {/* Statement Text */}
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                {review.text}
              </p>

              {/* Stats Grid */}
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                {review.stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-500">
                    <stat.icon size={16} className="text-accent flex-shrink-0" />
                    <span className="text-xs font-medium">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Person Info */}
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded object-cover border-2 border-gray-200"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-slate-500">{review.role}</p>
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
