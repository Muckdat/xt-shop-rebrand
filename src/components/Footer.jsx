import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-white text-slate-600 pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-6">
        
        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10 mb-20">
          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-slate-900">Shop</h4>
            <ul className="space-y-4">
              {['Neuheiten', 'Sicherheitsschuhe', 'Berufsbekleidung', 'Sale'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-accent transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-slate-900">Support</h4>
            <ul className="space-y-4">
              {['Kontakt', 'Versand & Rückgabe', 'Größentabellen', 'FAQ'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-accent transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-slate-900">Rechtliches</h4>
            <ul className="space-y-4">
              {['AGB', 'Datenschutz', 'Impressum', 'Widerrufsrecht'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-accent transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
           
           {/* Contact Info */}
          <div>
             <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-slate-900">Kontakt</h4>
             <p className="text-sm mb-4">
               XT-Trade<br/>
               Daimlerstr. 28<br/>
               50170 Kerpen
             </p>
             <a href="tel:+4922734068100" className="inline-block text-lg text-accent font-bold hover:text-slate-900 transition-colors mb-2">
               +49 2273 4068100
             </a>
             <p className="text-sm text-slate-600">
               Mo – Do: 08:00 – 16:30 · Fr: 08:00 – 14:00
             </p>
          </div>
        </div>

        {/* Bottom Section: Copyright & Payment */}
        <div className="pt-8 border-t border-gray-200 text-sm">
          <p>© 2026 XT-Trade. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;