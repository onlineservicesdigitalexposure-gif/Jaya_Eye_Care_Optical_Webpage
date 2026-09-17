import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Phone, MapPin, Clock, Glasses, Stethoscope, UserCheck, CheckCircle2, Compass, Sparkles, CreditCard, Store } from 'lucide-react';
import { businessData } from '../data/businessData';
import { Button } from '../components/ui/Button';

const heroImages = [
  {
    src: "/images/store-front-entrance-glass-door.jpg",
    alt: "Actual Jaya Eye Care Storefront Entrance at Mission Bazar Krishnapur Kolkata",
    badge: "Actual Store Front",
    label: "Store Front",
    icon: Store,
    objectFit: "object-cover object-[center_35%]"
  },
  {
    src: "/images/VisitingCard.png",
    alt: "Official Jaya Eye Care Store Visiting Card",
    badge: "Official Visiting Card",
    label: "Visiting Card",
    icon: CreditCard,
    objectFit: "object-contain bg-gradient-to-br from-slate-950 via-[#0b1736] to-[#11224d] p-3"
  }
];

function HeroImageShowcase({ isMobile = false }) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev === 0 ? 1 : 0));
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const currentImg = heroImages[activeIdx];
  const IconComp = currentImg.icon;

  return (
    <div className={`relative mx-auto max-w-lg ${isMobile ? '' : 'lg:max-w-none'} rounded-3xl bg-gradient-to-b from-white via-cyan-50/30 to-white p-3 sm:p-4 shadow-xl border border-cyan-200/80 group`}>
      
      {/* Photograph Container with 2.5s Toggle */}
      <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-950 shadow-inner">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImg.src}
            src={currentImg.src}
            alt={currentImg.alt}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className={`w-full h-full ${currentImg.objectFit}`}
          />
        </AnimatePresence>

        {/* Dynamic Badge Reflecting Active Image */}
        <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-950 to-slate-900 text-amber-300 text-xs font-black px-3 py-1.5 rounded-full border border-amber-400/40 shadow-md uppercase tracking-wider flex items-center gap-1.5 z-10">
          <IconComp className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>{currentImg.badge}</span>
        </div>

        {/* 2.5s Auto-Reflect Control Pills */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-400/30 shadow-lg z-10">
          {heroImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`flex items-center gap-1.5 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full transition-all duration-300 ${
                activeIdx === idx 
                  ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-emerald-500 text-white shadow-xs' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activeIdx === idx ? 'bg-white animate-ping' : 'bg-slate-500'}`} />
              <span>{img.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Store Details Card Below Photo with Logo Dark Gradient */}
      <div className="p-4 bg-gradient-to-br from-slate-950 via-[#0b1736] to-[#11224d] text-white rounded-2xl mt-3 text-left shadow-md border border-cyan-900/50">
        <div className="flex items-center justify-between">
          <span className="text-xs text-amber-400 font-extrabold uppercase tracking-wider">Store Proprietor</span>
          <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{businessData.owner}</span>
          </span>
        </div>
        <p className="text-sm font-semibold text-slate-100 mt-1 leading-snug">
          {businessData.address.building}, {businessData.address.area} (Opp. Soni Mondir), Kolkata-102
        </p>
        <div className="mt-3 flex items-center justify-between text-xs border-t border-slate-800 pt-2.5 text-slate-300">
          <span>Phone: <strong className="text-cyan-300">{businessData.phoneFormatted}</strong></span>
          <a href={businessData.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 font-extrabold underline hover:text-amber-300 transition-colors">
            Get Directions →
          </a>
        </div>
      </div>

    </div>
  );
}

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const trustItems = [
    { icon: Clock, title: "7 Days Open", desc: `${businessData.openingHours.morning} | ${businessData.openingHours.evening}`, accent: "border-l-4 border-l-cyan-600 bg-cyan-50/30" },
    { icon: Glasses, title: "Optical Store", desc: "Prescription Frames, Lenses & Sunglasses", accent: "border-l-4 border-l-blue-950 bg-blue-50/30" },
    { icon: Stethoscope, title: "Doctor Consultation", desc: "Weekly Specialist Visit (Dr. Arindam Roy)", accent: "border-l-4 border-l-amber-500 bg-amber-50/30" },
    { icon: UserCheck, title: "Optometrist Test", desc: "Daily Vision Checkup & Refraction", accent: "border-l-4 border-l-emerald-600 bg-emerald-50/30" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } } };

  return (
    <section id="home" className="relative pt-6 pb-16 lg:pt-6 lg:pb-24 bg-gradient-to-b from-cyan-50/40 via-white to-slate-50 overflow-hidden border-b border-cyan-100/60">
      
      {/* Dynamic Floating Optical Lens Gradient Circles matching Logo Colors */}
      <motion.div 
        animate={shouldReduceMotion ? {} : { scale: [1, 1.12, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-900/15 to-transparent blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={shouldReduceMotion ? {} : { scale: [1, 1.15, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-gradient-to-tr from-emerald-500/15 via-amber-400/15 to-transparent blur-3xl pointer-events-none" 
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero Copy & Calls to Action */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Small Brand Eyebrow with Cyan/Emerald Logo Accents */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-950/90 to-cyan-900/90 text-white border border-cyan-400/40 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] sm:text-xs font-black tracking-wider uppercase">{businessData.name} · Krishnapur, Kolkata</span>
              </div>
            </motion.div>

            {/* Headline centered & larger on mobile */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900 text-center lg:text-left">
              Clear Vision.{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-950 via-cyan-600 to-blue-900 bg-clip-text text-transparent">
                  Better Living.
                </span>
                <span className="absolute bottom-1.5 left-0 w-full h-3 bg-gradient-to-r from-amber-300 to-amber-400 -z-10 rounded-sm opacity-80" />
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed max-w-xl font-normal text-center lg:text-left mx-auto lg:mx-0">
              Jaya Eye Care is a complete optical store in Krishnapur, Kolkata, offering eyewear along with doctor and optometrist consultation services.
            </motion.p>

            {/* Mobile-Only Storefront Showcase Image (Renders directly below paragraph text on mobile) */}
            <motion.div variants={itemVariants} className="block lg:hidden my-4 relative w-full">
              <HeroImageShowcase isMobile={true} />
            </motion.div>

            {/* Location & Opening Information */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1 text-xs sm:text-sm font-semibold text-slate-700">
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-white px-3 sm:px-3.5 py-2.5 rounded-xl border border-cyan-100 shadow-2xs hover:border-cyan-300 transition-colors">
                <MapPin className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                <span>Mission Bazar, Krishnapur, Kolkata-102</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 bg-white px-3 sm:px-3.5 py-2.5 rounded-xl border border-cyan-100 shadow-2xs hover:border-cyan-300 transition-colors">
                <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Open 7 Days: {businessData.openingHours.morning} & {businessData.openingHours.evening}</span>
              </div>
            </motion.div>

            {/* Primary & Secondary CTAs - 1 Parallel Row on Mobile */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 pt-2 w-full">
              <Button 
                href={`tel:${businessData.phone}`} 
                variant="primary" 
                size="md" 
                className="w-full sm:w-auto gap-1.5 sm:gap-2.5 px-2.5 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-base font-extrabold shadow-md justify-center"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300 flex-shrink-0" />
                <span className="sm:hidden">Call Store</span>
                <span className="hidden sm:inline">Call Jaya Eye Care</span>
              </Button>

              <Button 
                href="#contact" 
                variant="outline" 
                size="md" 
                className="w-full sm:w-auto gap-1.5 sm:gap-2 px-2.5 sm:px-5 py-2.5 sm:py-3 border-2 border-blue-950 text-blue-950 hover:bg-cyan-50 text-xs sm:text-base font-extrabold justify-center"
              >
                <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 flex-shrink-0" />
                <span className="sm:hidden">Visit Store</span>
                <span className="hidden sm:inline">Visit Our Store</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Physical Storefront Image Showcase for Desktop (hidden on mobile) */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="hidden lg:block lg:col-span-6 relative w-full"
          >
            <HeroImageShowcase isMobile={false} />
          </motion.div>

        </div>

        {/* Trust & Information Strip Below Hero */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-14 pt-8 border-t border-cyan-100/80"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {trustItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div 
                  key={idx} 
                  whileHover={shouldReduceMotion ? {} : { y: -3 }}
                  className={`bg-white p-4.5 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center gap-3.5 hover:border-cyan-300 transition-all hover:shadow-xs ${item.accent}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-950 to-cyan-900 text-white flex items-center justify-center flex-shrink-0 border border-cyan-400/30 shadow-2xs">
                    <IconComp className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 leading-snug">{item.title}</h3>
                    <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
