import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const options = [
  {
    icon: Building2,
    title: "Vor Ort bei XT-TRADE",
    description: "Besuchen Sie uns in unserem Showroom und erleben Sie unsere Produkte hautnah."
  },
  {
    icon: MapPin,
    title: "Bei Ihnen vor Ort",
    description: "Wir kommen zu Ihnen – für eine Beratung direkt an Ihrem Arbeitsplatz."
  },
  {
    icon: Phone,
    title: "Telefonisch / Online",
    description: "Schnell und unkompliziert – wir beraten Sie gerne per Telefon oder Videocall."
  }
];

const Consultation = () => {
  return (
    <section id="beratung" className="relative py-32 bg-slate-900 overflow-hidden text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - CTA */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-accent font-bold tracking-[0.2em] uppercase mb-6 border border-accent/30 px-4 py-2 rounded-full bg-accent/5 text-sm"
            >
              Persönliche Beratung
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight"
            >
              JETZT <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-600">BERATUNGSTERMIN</span> VEREINBAREN
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg"
            >
              Wir nehmen uns Zeit für Sie – gern auch kurzfristig. Gemeinsam klären wir die optimale Lösung für Ihren Bedarf.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="tel:+4922734068100"
                className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-accent text-white font-bold rounded-full overflow-hidden shadow-2xl hover:shadow-accent/50 transition-all duration-300 inline-flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <Phone size={20} />
                +49 2273 4068100
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://www.xt-trade.com/Beratung-Kontakt"
                className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 border border-white/20 text-white font-bold rounded-full hover:border-accent hover:text-accent transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <Mail size={20} />
                Nachricht schreiben
              </a>
            </motion.div>
          </div>

          {/* Right Column - Options */}
          <div className="space-y-6">
            {options.map((option, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-accent/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <option.icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{option.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{option.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Consultation;
