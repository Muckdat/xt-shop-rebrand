import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, CreditCard, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-slate-600 pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-6">
        
        {/* Top Section: Newsletter & Brand */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-20 border-b border-gray-200 pb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase text-slate-900">
              Erhalte NEWS und <span className="text-accent">UPDATES</span>
            </h2>
            <p className="text-slate-500 mb-8">
              Erhalte exklusive Angebote, Sicherheitstipps und News zu neuen Produkten direkt in dein Postfach.
            </p>
            
            <form className="flex w-full max-w-md bg-white rounded-lg overflow-hidden border border-gray-200 focus-within:border-accent focus-within:ring-1 focus-within:ring-accent transition-all shadow-sm">
              <input 
                type="email" 
                placeholder="Deine E-Mail Adresse" 
                className="bg-transparent text-slate-900 px-6 py-4 w-full focus:outline-none placeholder-gray-400"
              />
              <button className="bg-accent text-white px-8 py-4 font-bold hover:bg-slate-900 transition-colors flex items-center gap-2">
                <span>SENDEN</span>
                <Send size={18} />
              </button>
            </form>
          </div>

          <div className="flex gap-4">
             {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
               <a 
                 key={i} 
                 href="#" 
                 className="w-12 h-12 bg-white flex items-center justify-center rounded-lg border border-gray-200 text-slate-400 hover:border-accent hover:bg-accent hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
               >
                 <Icon size={20} />
               </a>
             ))}
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
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
             <p className="mb-4">
               XT-Trade<br/>
               Daimlerstr. 28<br/>
               50170 Kerpen
             </p>
             <p className="text-accent font-bold text-xl">
               +49 2273 4068100
             </p>
             <p className="text-sm mt-1">
               Mo-Do: 08:00 - 16:30
             </p>
          </div>
        </div>

        {/* Bottom Section: Copyright & Payment */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-200 text-sm">
          <p>© 2026 XT-Trade. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             <span className="flex items-center gap-2"><CreditCard size={18}/> VISA</span>
             <span className="flex items-center gap-2"><CreditCard size={18}/> PayPal</span>
             <span className="flex items-center gap-2"><CreditCard size={18}/> Klarna</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;