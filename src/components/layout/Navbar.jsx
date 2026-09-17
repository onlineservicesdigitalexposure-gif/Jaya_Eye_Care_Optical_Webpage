import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare, Home, Info, Glasses, Stethoscope, Image, PhoneCall } from 'lucide-react';
import { businessData } from '../../data/businessData';
import { Button } from '../ui/Button';

export function Navbar({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll position for compact sticky header transformation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape key handler to close mobile menu drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle smooth scroll navigation with offset for sticky navbar
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    // Immediately unlock body scroll so smooth scroll works reliably on mobile
    document.body.style.overflow = 'unset';
    setMobileMenuOpen(false);

    // Timeout allows DOM overflow unlock and drawer collapse before scrolling
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navbarOffset = window.innerWidth < 768 ? 70 : 85;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = Math.max(0, elementPosition - navbarOffset);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update URL hash cleanly
        if (window.history.pushState) {
          window.history.pushState(null, '', `#${targetId}`);
        } else {
          window.location.hash = `#${targetId}`;
        }
      }
    }, 60);
  };

  const navLinks = [
    { name: "Home", href: "#home", id: "home", icon: Home },
    { name: "About", href: "#about", id: "about", icon: Info },
    { name: "Services", href: "#services", id: "services", icon: Glasses },
    { name: "Doctors", href: "#doctors", id: "doctors", icon: Stethoscope },
    { name: "Gallery", href: "#gallery", id: "gallery", icon: Image },
    { name: "Contact", href: "#contact", id: "contact", icon: PhoneCall }
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-md shadow-md border-b border-cyan-100/80 py-1.5 sm:py-2' 
          : 'bg-white/95 backdrop-blur-sm border-b border-slate-200/80 py-2 lg:py-2'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between gap-2">
          
          {/* Actual Jaya Eye Care Logo Asset */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-xl p-0.5 transition-transform active:scale-[0.98] flex-shrink-0"
            aria-label={`${businessData.name} - Home`}
          >
            <img 
              src="/Logo.png" 
              alt="Jaya Eye Care Logo" 
              width="280"
              height="80"
              fetchPriority="high"
              decoding="async"
              className="h-10 sm:h-16 lg:h-20 max-h-20 w-auto object-contain transition-transform group-hover:scale-103 drop-shadow-sm"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative px-3.5 py-2 rounded-xl text-sm font-bold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                    isActive 
                      ? 'text-blue-950 font-black' 
                      : 'text-slate-700 hover:text-blue-950 hover:bg-cyan-50/60'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="flex items-center gap-1.5">
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 animate-pulse" />}
                    <span>{link.name}</span>
                  </span>
                  
                  {/* Active Link Indicator Pill */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200/90 rounded-xl -z-10 shadow-2xs"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Call CTA with Yellow/Amber Logo Accent */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              href={`tel:${businessData.phone}`} 
              variant="accent" 
              size="sm"
              className="gap-2 font-black border border-amber-300 shadow-xs hover:shadow-md"
              aria-label={`Call Jaya Eye Care at ${businessData.phone}`}
            >
              <Phone className="w-4 h-4 text-slate-950 fill-slate-950" />
              <span>Call: {businessData.phoneFormatted}</span>
            </Button>
          </div>

          {/* Mobile Actions & Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-1.5">
            <Button
              href={`tel:${businessData.phone}`}
              variant="accent"
              size="sm"
              className="px-2.5 py-2 bg-amber-400 text-slate-950 font-bold min-h-[40px]"
              aria-label={`Call ${businessData.phone}`}
            >
              <Phone className="w-4 h-4 text-slate-950 fill-slate-950" />
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-800 hover:text-slate-950 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-900 focus:outline-none transition-colors border border-slate-200"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-blue-950" /> : <Menu className="w-6 h-6 text-blue-950" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Animated Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-b border-slate-200 shadow-2xl"
          >
            <div className="container-custom py-4 space-y-3 text-left">
              <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  const LinkIcon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={`px-4 py-3 rounded-xl text-base font-bold transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-950 via-cyan-900 to-blue-900 text-white shadow-md border-l-4 border-amber-400'
                          : 'text-slate-800 hover:bg-cyan-50/80 hover:text-blue-950 border border-slate-100'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className="flex items-center gap-3">
                        <LinkIcon className={`w-5 h-5 ${isActive ? 'text-amber-400' : 'text-cyan-600'}`} />
                        <span>{link.name}</span>
                      </span>
                      {isActive ? (
                        <span className="text-xs font-black text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full border border-amber-400/30">Active</span>
                      ) : (
                        <span className="text-slate-400 text-sm">→</span>
                      )}
                    </a>
                  );
                })}
              </nav>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <Button 
                  href={`tel:${businessData.phone}`} 
                  variant="accent" 
                  size="md"
                  className="w-full justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black shadow-xs"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="w-4 h-4 text-slate-950 fill-slate-950" />
                  <span>Call Now ({businessData.phoneFormatted})</span>
                </Button>
                <Button 
                  href={`https://wa.me/${businessData.whatsappNumber}`} 
                  variant="whatsapp" 
                  size="md"
                  className="w-full justify-center gap-2 font-bold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}


