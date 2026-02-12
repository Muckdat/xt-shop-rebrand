import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Package, Settings } from 'lucide-react';

const Story = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={containerRef} className="relative py-32 bg-slate-900 overflow-hidden text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-accent font-bold tracking-[0.2em] uppercase mb-4 border border-accent/30 px-4 py-2 rounded-full bg-accent/5 backdrop-blur-sm"
          >
            <CheckCircle2 size={16} /> Ihr Partner im Arbeitsschutz
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
          >
            SCHUTZ IST UNSERE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-600">DNA</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-xl leading-relaxed"
          >
            XT-TRADE ist Ihr verlässlicher Partner für PSA, Schutz- und Arbeitsbekleidung.
            Wir vereinen Sicherheit, Funktionalität und professionelles Design – gern auch zugeschnitten auf Sie. Von der Bedarfsanalyse über Veredelung bis zur
            Logistik: Alles aus einer Hand.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Images with Parallax */}
          <div className="relative h-[600px] w-full hidden lg:block">
            {/* Back Image */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <div className="absolute inset-0 bg-accent/20 mix-blend-multiply z-10" />
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
                alt="Industrial Work" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Front Image */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-slate-800"
            >
              <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop" 
                alt="Precision Quality" 
                className="w-full h-full object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-6 right-6 bg-white text-slate-900 p-4 rounded-lg shadow-lg max-w-[150px]">
                <div className="text-3xl font-extrabold text-accent">360°</div>
                <div className="text-xs font-bold uppercase leading-tight">Arbeitsschutz Komplett-Service</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="space-y-12">
             {/* Mobile Image (visible only on small screens) */}
             <div className="lg:hidden rounded-2xl overflow-hidden shadow-xl mb-8 border border-white/10">
               <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" 
                alt="Industrial Work" 
                className="w-full h-full object-cover"
               />
             </div>

             <div className="space-y-8">
               {[
                 {
                   title: "Individuelle Lösungen & Flexibilität",
                   text: "Durch etablierte Produktionspartnerschaften und kurze Entscheidungswege realisieren wir passgenaue Arbeitsschutzlösungen – von Sondergrößen bis kundenspezifischen Ausstattungen, wirtschaftlich und normgerecht.",
                   icon: Settings
                 },
                 {
                   title: "Komplettservice: Veredelung & Logistik",
                   text: "Wir übernehmen die komplette Veredelung Ihrer Arbeitskleidung mit Transfer oder Siebdruck. Dezentrale Lieferkonzepte direkt an Ihre Standorte reduzieren Aufwände und sichern kurze Lieferzeiten.",
                   icon: Package
                 },
                 {
                   title: "Wirtschaftlichkeit trifft Qualität",
                   text: "Transparente Beratung, lösungsorientiertes Handeln und optimales Kosten-Nutzen-Verhältnis: Wir kombinieren hochwertigen Arbeitsschutz mit wirtschaftlicher Beschaffung für langfristige Partnerschaften.",
                   icon: CheckCircle2
                 }
               ].map((item, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.2 }}
                   className="flex gap-6 group"
                 >
                   <div className="shrink-0 w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-inner">
                     <item.icon size={32} />
                   </div>
                   <div>
                     <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-accent transition-colors">{item.title}</h3>
                     <p className="text-slate-400 leading-relaxed">{item.text}</p>
                   </div>
                 </motion.div>
               ))}
             </div>

             <motion.a
               href="https://www.xt-trade.com/Ueber-uns"
               target="_blank"
               rel="noopener noreferrer"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.8 }}
               className="mt-8 px-8 py-4 bg-white text-slate-900 font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 rounded-sm inline-block"
             >
               Mehr über uns
             </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
