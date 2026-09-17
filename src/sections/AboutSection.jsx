import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Clock, User, Glasses, Stethoscope, Phone, ShieldCheck } from 'lucide-react';
import { businessData } from '../data/businessData';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/ui/Button';

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInViewVariant = shouldReduceMotion 
    ? { initial: { opacity: 1 }, whileInView: { opacity: 1 } }
    : { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 } };

  return (
    <section id="about" className="section-padding bg-white border-t border-cyan-100/70">
      <div className="container-custom">
        
        <SectionHeader
          badge="About Store"
          title="Your Local Optical Store & Eye Care Destination"
          subtitle="Providing quality optical eyewear, computerized vision testing, and specialist consultation services in Krishnapur, Kolkata."
        />

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Official Business Card & Store Interior Image */}
          <motion.div 
            {...fadeInViewVariant}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Visiting Card Showcase with Logo Gradient Glow */}
            <div className="bg-gradient-to-b from-cyan-50/60 via-slate-50 to-cyan-50/40 p-4 rounded-3xl border border-cyan-200/90 shadow-md">
              <div className="overflow-hidden rounded-2xl border border-cyan-100 bg-white group aspect-[16/10] flex items-center justify-center p-2 shadow-2xs">
                <img
                  src="/images/jaya-eye-care-visiting-card.png"
                  alt="Jaya Eye Care Official Store Business Card showing Proprietor Uttam Sarkar and Services"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="mt-3 p-3.5 bg-gradient-to-r from-[#0b1736] via-[#11224d] to-[#0284c7] text-white rounded-xl text-center shadow-xs border border-cyan-400/30">
                <p className="text-[10px] text-amber-300 font-extrabold uppercase tracking-wider">Business Proprietor</p>
                <p className="text-base font-black text-white">{businessData.owner}</p>
                <p className="text-xs text-cyan-300 font-semibold">{businessData.tagline}</p>
              </div>
            </div>

            {/* Store Interior Secondary Thumbnail */}
            <div className="hidden sm:block overflow-hidden rounded-2xl border border-cyan-200/80 shadow-2xs aspect-[16/9] bg-slate-100 group">
              <img
                src="/images/store-frames-wall-display.jpg"
                alt="Jaya Eye Care Spectacle Frame Collection Wall Display"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Right Column: Business Profile & At-a-Glance */}
          <motion.div 
            {...fadeInViewVariant}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div>
              <span className="badge-base badge-cyan mb-2">Local Vision Care</span>
              <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#0b1736] via-[#11224d] to-[#0284c7] bg-clip-text text-transparent tracking-tight leading-snug pb-1 inline-block">
                Dedicated Eyewear & Consultation Services for Krishnapur
              </h3>
            </div>

            {/* Story */}
            <div className="prose prose-slate max-w-none text-slate-700 text-base leading-relaxed space-y-3">
              <p>
                <strong className="text-blue-950 font-black">{businessData.name}</strong> — &quot;{businessData.tagline}&quot; — is managed by proprietor <strong className="text-blue-950 font-black">{businessData.owner}</strong>. Located at Mission Bazar, Krishnapur (Opposite Soni Mondir), Kolkata 700102, our store serves the community with reliable optical eyewear and consultation services.
              </p>
              <p>
                We offer a wide selection of prescription spectacles, frames, sunglasses, and contact lenses, along with computerized vision checkups and doctor and optometrist consultation services under one roof.
              </p>
            </div>

            {/* Location Info Box */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-cyan-100/90 space-y-2 hover:border-cyan-300 transition-colors">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Exact Store Address</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                    {businessData.address.building}, {businessData.address.area}, (Opposite Soni Mondir), Kolkata, West Bengal - 700102
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-gradient-to-r from-cyan-50/80 via-blue-50/50 to-emerald-50/50 p-4 rounded-2xl border border-cyan-200/90 flex items-center gap-3.5 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-950 to-cyan-900 text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                <Clock className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider">Store Operating Hours</h4>
                <p className="text-sm font-extrabold text-blue-950">
                  {businessData.openingHours.morning} & {businessData.openingHours.evening}
                </p>
                <p className="text-xs text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{businessData.openingHours.days}</span>
                </p>
              </div>
            </div>

            {/* At a Glance Information Area */}
            <div className="pt-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">At A Glance</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-bold text-slate-800">
                <div className="p-2.5 rounded-xl bg-white border border-cyan-100 flex items-center gap-2 shadow-2xs hover:border-cyan-300 transition-colors">
                  <Glasses className="w-4 h-4 text-cyan-600" />
                  <span>Optical Eyewear</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-cyan-100 flex items-center gap-2 shadow-2xs hover:border-emerald-300 transition-colors">
                  <Stethoscope className="w-4 h-4 text-emerald-600" />
                  <span>Doctor Visit</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-cyan-100 flex items-center gap-2 shadow-2xs hover:border-amber-300 transition-colors">
                  <User className="w-4 h-4 text-amber-500" />
                  <span>Optometrist Test</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <Button href={`tel:${businessData.phone}`} variant="primary" size="md" className="gap-2">
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>Call Store ({businessData.phone})</span>
              </Button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

