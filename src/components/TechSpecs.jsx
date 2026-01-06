import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Flame, Zap, Droplets, ArrowRight, MousePointerClick } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "ISO ZERTIFIZIERT",
    desc: "Erfüllt strengste EU-Sicherheitsnormen (EN ISO 20345:2011) für maximalen Schutz am Arbeitsplatz.",
    stat: "100%"
  },
  {
    id: 2,
    icon: Flame,
    title: "HITZEBESTÄNDIG",
    desc: "Spezialmaterialien bieten Hitzeschutz bis 300°C (HRO) für Schweißer und Gießereiarbeiten.",
    stat: "300°C"
  },
  {
    id: 3,
    icon: Zap,
    title: "ANTISTATISCH",
    desc: "Integriertes ESD-System leitet elektrostatische Aufladungen sicher in den Boden ab.",
    stat: "ESD"
  },
  {
    id: 4,
    icon: Droplets,
    title: "WASSERABWEISEND",
    desc: "Advanced Gore-Tex Membranen: 100% wasserdicht und dabei extrem atmungsaktiv.",
    stat: "H₂O"
  }
];

const FlipCard = ({ feature, index }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleInteraction = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="group h-[320px] w-full perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={handleInteraction}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full duration-500"
      >
        {/* FRONT SIDE */}
        <div 
          className="absolute inset-0 backface-hidden bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 text-center hover:border-accent/50 transition-colors"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-slate-900 group-hover:scale-110 transition-transform duration-300 shadow-inner">
            <feature.icon size={40} strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 uppercase tracking-tight">
            {feature.title}
          </h3>
          <div className="mt-6 flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest opacity-60">
            <MousePointerClick size={14} />
            Click to Flip
          </div>
          
          {/* Decorative Corner */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* BACK SIDE */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-accent to-[#d67e00] rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center text-white overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden', 
            transform: 'rotateY(180deg)' 
          }}
        >
          {/* Background Decor */}
          <feature.icon className="absolute -bottom-10 -right-10 w-48 h-48 text-white/10 rotate-12" />
          
          <div className="relative z-10">
            <span className="text-4xl font-black mb-2 block text-white/20">{feature.stat}</span>
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-white/90 font-medium leading-relaxed">
              {feature.desc}
            </p>
          </div>
          
          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
            <div className="w-12 h-1 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const TechSpecs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-gray-50">
      
      {/* Dynamic Background Lines */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent delay-75" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent delay-150" />
      </div>

      <div className="absolute inset-0 z-0 h-[120%] -top-[10%] opacity-5 pointer-events-none">
        <motion.div style={{ y: yBg }} className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-accent"></span>
              <span className="text-accent font-bold tracking-widest uppercase">XT-Trade Technology</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-tight">
              ENGINEERED FOR <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-600">IMPACT</span>
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl border-l-4 border-gray-200 pl-6">
              Unsere Ausrüstung definiert den Standard neu. Wir kombinieren High-Tech Materialien 
              mit ergonomischem Design, damit du dich auf das konzentrieren kannst, was zählt: 
              Deine Arbeit.
            </p>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="lg:w-1/2 flex justify-end"
          >
             <button className="group relative px-8 py-4 bg-slate-900 text-white font-bold rounded-full overflow-hidden shadow-2xl hover:shadow-accent/50 transition-all duration-300">
               <span className="relative z-10 flex items-center gap-3">
                 DIREKT ZUR SCHUTZBEKLEIDUNG <ArrowRight className="group-hover:translate-x-1 transition-transform"/>
               </span>
               <div className="absolute inset-0 bg-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
             </button>
          </motion.div>
        </div>

        {/* 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-2000">
          {features.map((feature, index) => (
            <FlipCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Styles for 3D Flip Effect */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .perspective-2000 { perspective: 2000px; }
      `}</style>
    </section>
  );
};

export default TechSpecs;
