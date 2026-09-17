import { motion, useReducedMotion } from 'framer-motion';
import { Glasses, Eye, Sun, Sparkles, Wrench, Phone } from 'lucide-react';
import { businessData } from '../data/businessData';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/ui/Button';

export function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  const servicesList = [
    {
      id: "computerized-testing",
      title: "Computerized Eye Testing",
      description: "State-of-the-art auto-refractor & digital refraction testing for accurate sight prescription.",
      icon: Eye,
      badge: "Optometry",
      topAccent: "border-t-4 border-t-cyan-600 bg-cyan-50/20"
    },
    {
      id: "spectacles-frames",
      title: "Prescription Spectacles & Frames",
      description: "Extensive array of durable, lightweight, anti-glare, and blue-light filtering eyeglasses for all ages.",
      icon: Glasses,
      badge: "Eyewear",
      topAccent: "border-t-4 border-t-blue-950 bg-blue-50/20"
    },
    {
      id: "sunglasses-uv",
      title: "Polarized & UV Sunglasses",
      description: "Stylish prescription & non-prescription sunglasses with 100% UV protection and anti-reflective coating.",
      icon: Sun,
      badge: "UV Protect",
      topAccent: "border-t-4 border-t-amber-500 bg-amber-50/20"
    },
    {
      id: "contact-lenses",
      title: "Contact Lenses & Solutions",
      description: "Premium daily, monthly disposable soft contact lenses, color lenses, and lens cleaning solutions.",
      icon: Sparkles,
      badge: "Contact Lens",
      topAccent: "border-t-4 border-t-emerald-600 bg-emerald-50/20"
    },
    {
      id: "repair-fitting",
      title: "Lens Fitting & Maintenance",
      description: "Precision lens edging, frame alignment, nose-pad adjustments, and instant repairs by expert technicians.",
      icon: Wrench,
      badge: "In-Store Repair",
      topAccent: "border-t-4 border-t-cyan-500 bg-cyan-50/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } };

  return (
    <section id="services" className="section-padding bg-slate-50 border-t border-cyan-100/70">
      <div className="container-custom">
        
        <SectionHeader
          badge="Store Offerings"
          title="Optical Products & Vision Services"
          subtitle="Complete eyewear collection, computerized vision testing, and custom frame fitting at Jaya Eye Care."
        />

        {/* 5 Service Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-12"
        >
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {} : { y: -5 }}
                className={`card-base p-6 sm:p-7 flex flex-col justify-between hover:shadow-md hover:border-cyan-300 transition-all ${service.topAccent}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-950 via-[#11224d] to-cyan-900 text-cyan-300 flex items-center justify-center border border-cyan-400/30 shadow-2xs">
                      <IconComponent className="w-6 h-6 text-cyan-300" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-blue-950 border border-cyan-200/90 shadow-2xs">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-950">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Available In-Store</span>
                  </span>
                  <span className="text-cyan-600">Jaya Eye Care</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Call CTA Block */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto bg-gradient-to-r from-[#0b1736] via-[#11224d] to-[#0284c7] rounded-2xl p-8 text-white shadow-lg text-center space-y-4 border border-cyan-400/30"
        >
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Need Eyewear or Vision Testing Support?
          </h3>
          <p className="text-sm sm:text-base text-cyan-100 max-w-xl mx-auto">
            Get in touch with proprietor Uttam Sarkar or visit Jaya Eye Care at Mission Bazar, Krishnapur.
          </p>
          <div className="pt-2 flex justify-center">
            <Button
              href={`tel:${businessData.phone}`}
              variant="accent"
              size="lg"
              className="gap-2 font-black shadow-md"
            >
              <Phone className="w-5 h-5 text-slate-950 fill-slate-950" />
              <span>Call Jaya Eye Care ({businessData.phone})</span>
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

