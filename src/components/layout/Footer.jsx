import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { businessData } from '../../data/businessData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Doctors", href: "#doctors" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-[#0b1736] to-slate-950 text-slate-300 pt-14 pb-12 sm:pb-14 border-t-4 border-t-cyan-500 text-left relative overflow-hidden">
      
      {/* Background Refraction Light Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-600/10 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-cyan-900/40">
          
          {/* Column 1: Store Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/images/jaya-eye-care-banner.png" 
                alt="Jaya Eye Care Banner Logo" 
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto object-contain rounded-lg bg-white p-1 border border-cyan-300/40 shadow-xs"
              />
              <div>
                <h3 className="text-xl font-black text-white tracking-wide">{businessData.name}</h3>
                <p className="text-xs text-amber-400 uppercase tracking-wider font-extrabold">{businessData.tagline}</p>
              </div>
            </div>
            
            <p className="text-xs text-slate-300 leading-relaxed">
              Optical store and vision care services in Krishnapur, Kolkata. Managed by proprietor <strong className="text-cyan-300 font-bold">{businessData.owner}</strong>.
            </p>

            <div className="flex items-start gap-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>Mission Bazar, Krishnapur, Kolkata - 700102</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-b border-cyan-900/50 pb-2 flex items-center justify-between">
              <span>Navigation</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-slate-300 hover:text-cyan-300 transition-colors inline-block py-0.5 focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-b border-cyan-900/50 pb-2 flex items-center justify-between">
              <span>Direct Contact</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>
                  Phone:{' '}
                  <a href={`tel:${businessData.phone}`} className="text-white font-black hover:text-cyan-300 transition-colors">
                    {businessData.phoneFormatted}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>
                  Email:{' '}
                  <a href={`mailto:${businessData.email}`} className="text-white font-bold hover:text-cyan-300 transition-colors">
                    {businessData.email}
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Published Working Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-b border-cyan-900/50 pb-2 flex items-center justify-between">
              <span>Working Hours</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-slate-100 font-bold">{businessData.openingHours.morning}</p>
                <p className="text-slate-100 font-bold">{businessData.openingHours.evening}</p>
                <p className="text-amber-400 font-black text-[11px] uppercase pt-0.5">
                  ✓ {businessData.openingHours.days}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© {currentYear} {businessData.name}. 
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-300 ml-1"
            >
              Digital Exposure Online Service
            </a>.
          </p>
          <p className="text-slate-400">Mission Bazar, Krishnapur, Kolkata - 700102</p>
        </div>
      </div>
    </footer>
  );
}

