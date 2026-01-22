import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Calendar } from 'lucide-react';

const reviews = [
  {
    id: 1,
    sector: "Industriereinigung",
    company: "Indutec International Holding",
    text: "Im Rahmen der Zusammenarbeit mit Indutec International Holding konnten arbeitsschutzrelevante Herausforderungen im industriellen Reinigungsumfeld gezielt bewältigt werden. Mitarbeitende sind dort regelmäßig chemischen Risiken ausgesetzt, insbesondere durch alkalische und saure Reinigungsmittel, Lösungsmittel, Öle, Fette sowie potenziell gesundheitsgefährdende Dämpfe und Aerosole. Durch XT-TRADE wurden geeignete persönliche Schutzausrüstungen bereitgestellt, darunter chemikalienbeständige Schutzkleidung, Handschuhe und Atemschutzlösungen. Ergänzend wurde eine fachgerechte Beratung zur normkonformen Auswahl und zum korrekten Einsatz der PSA durchgeführt, wodurch die Sicherheit erhöht und gesetzliche Arbeitsschutzanforderungen zuverlässig erfüllt wurden.",
    logo: "https://assets.watara.services/xt/assets/indutec.svg",
    stats: [
      { icon: Users, label: "4000 Mitarbeiter" },
      { icon: Calendar, label: "Partner seit 2019" },
      { icon: Building2, label: "" }
    ]
  },
  {
    id: 2,
    sector: "Hoch- und Tiefbau",
    company: "Maaßen Erdbewegungen-Transporte",
    text: "Im Zuge der Zusammenarbeit mit der Maaßen Erdbewegungen-Transporte GmbH konnten arbeitsschutzrelevante Herausforderungen im Bau- und Transportumfeld erfolgreich bewältigt werden. Mitarbeitende sind dort baulichen Risiken ausgesetzt, insbesondere durch Erd- und Abbrucharbeiten, den Einsatz schwerer Baumaschinen, Absturz- und Quetschgefahren, Staub- und Lärmbelastung sowie den Umgang mit scharfkantigen Materialien. Durch XT-TRADE wurde normgerechte persönliche Schutzausrüstung bereitgestellt, darunter Schutzhelme, Warnschutzkleidung, Sicherheitsschuhe und Atemschutz. Ergänzend erfolgte eine fachliche Beratung zur sachgerechten Anwendung, wodurch Sicherheitsstandards erhöht und gesetzliche Vorgaben zuverlässig eingehalten wurden.",
    logo: "https://assets.watara.services/xt/assets/maassen.svg",
    stats: [
      { icon: Users, label: "50+ Mitarbeiter" },
      { icon: Calendar, label: "Seit 2021" },
      { icon: Building2, label: "" }
    ]
  },
  {
    id: 3,
    sector: "Facility und Gebäudemanagement",
    company: "Peterhoff Unternehmensgruppe",
    text: "Im Rahmen der Unterstützung der Peterhoff Unternehmensgruppe konnten arbeitsschutzrelevante Herausforderungen im Gebäudemanagement erfolgreich gemeistert werden. Mitarbeitende sind dort baulichen und betrieblichen Risiken ausgesetzt, insbesondere durch Arbeiten auf Leitern und Gerüsten, nasse und rutschige Untergründe, den Umgang mit Reinigungschemikalien sowie Verkehrsflächen und schwere Reinigungstechnik. Durch XT-TRADE wurden geeignete persönliche Schutzausrüstungen bereitgestellt, darunter Schutzhelme, rutschfeste Sicherheitsschuhe, Handschuhe und Auffanggurte, und eine fachkundige Beratung zur sachgemäßen Anwendung durchgeführt, wodurch Sicherheitsstandards erhöht und gesetzliche Vorgaben zuverlässig eingehalten wurden.",
    logo: "https://assets.watara.services/xt/assets/peterhoff.svg",
    stats: [
      { icon: Users, label: "3500+ Spezialisten" },
      { icon: Calendar, label: "Partner seit 2023" },
      { icon: Building2, label: "" }
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
            Führende Unternehmen aus Bau, Industrie und Facilitymanagement setzen auf XT-Trade.
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

              {/* Company Logo & Sector */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-12 flex items-center justify-center bg-gray-50 rounded border border-gray-200 p-2">
                  <img
                    src={review.logo}
                    alt={review.company}
                    className="w-full h-full object-contain grayscale opacity-60"
                  />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Branche</p>
                  <h4 className="font-bold text-slate-900 text-sm">{review.sector}</h4>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
