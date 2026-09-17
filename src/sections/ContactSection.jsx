import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation, MessageSquare, ShieldCheck } from 'lucide-react';
import { businessData } from '../data/businessData';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/ui/Button';

export function ContactSection() {
  const shouldReduceMotion = useReducedMotion();

  const googleMapsUrl = businessData.mapsUrl;

  const cardVariants = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 } };

  return (
    <section id="contact" className="section-padding bg-white border-t border-cyan-100/70">
      <div className="container-custom">
        
        <SectionHeader
          badge="Visit or Contact Us"
          title="Store Location & Contact Information"
          subtitle="Reach out to proprietor Uttam Sarkar or visit our optical store in Krishnapur for all your eyewear and vision care needs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start text-left">
          
          {/* Left Column: Contact Details, CTAs & Address */}
          <motion.div 
            {...cardVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="badge-base badge-cyan mb-2">Get In Touch</span>
              <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#0b1736] via-[#11224d] to-[#0284c7] bg-clip-text text-transparent tracking-tight pb-1 inline-block">
                Visit Jaya Eye Care
              </h3>
              <p className="text-base text-slate-600 leading-relaxed mt-2">
                Have questions about spectacle frames, prescription lenses, or doctor consultation slots? Walk into our shop at Mission Bazar or contact proprietor <strong className="text-blue-950 font-black">{businessData.owner}</strong> directly.
              </p>
            </div>

            {/* Address Block */}
            <div className="card-base p-6 space-y-3 hover:border-cyan-300 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-950 to-cyan-900 text-white flex items-center justify-center flex-shrink-0 border border-cyan-400/30 shadow-2xs">
                  <MapPin className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Store Address</h4>
                  <p className="text-sm text-slate-700 font-medium mt-1 leading-snug">
                    {businessData.address.building}, {businessData.address.area}, ({businessData.address.landmark}), {businessData.address.city}, {businessData.address.state} - {businessData.address.pincode}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="card-base p-6 space-y-4 hover:border-cyan-300 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 border border-emerald-200">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Phone Contact</h4>
                  <p className="text-sm text-slate-600 mt-0.5">
                    Direct Store Line: <a href={`tel:${businessData.phone}`} className="font-black text-blue-950 hover:text-cyan-600 transition-colors">{businessData.phoneFormatted}</a>
                  </p>
                </div>
              </div>

              {/* Clickable Phone & WhatsApp CTAs */}
              <div className="flex flex-wrap gap-3 pt-1">
                <Button
                  href={`tel:${businessData.phone}`}
                  variant="primary"
                  size="md"
                  className="gap-2"
                  aria-label={`Call Jaya Eye Care at ${businessData.phone}`}
                >
                  <Phone className="w-4 h-4 text-emerald-300" />
                  <span>Call {businessData.phone}</span>
                </Button>

                <Button
                  href={`https://wa.me/${businessData.whatsappNumber}`}
                  variant="whatsapp"
                  size="md"
                  className="gap-2 font-black"
                  aria-label="Send WhatsApp message to Jaya Eye Care"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </Button>
              </div>
            </div>

            {/* Email Card */}
            <div className="card-base p-6 hover:border-cyan-300 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-950 flex items-center justify-center flex-shrink-0 border border-cyan-200">
                  <Mail className="w-5 h-5 text-cyan-700" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Email Address</h4>
                  <a
                    href={`mailto:${businessData.email}`}
                    className="text-sm font-bold text-blue-950 hover:text-cyan-600 transition-colors"
                    aria-label={`Send email to ${businessData.email}`}
                  >
                    {businessData.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Published Working Hours Card */}
            <div className="bg-gradient-to-r from-amber-50/90 to-amber-100/60 p-5 rounded-2xl border border-amber-300/80 flex items-start gap-3.5 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 flex items-center justify-center flex-shrink-0 shadow-2xs">
                <Clock className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-amber-950 uppercase tracking-wider">Published Working Hours</h4>
                <p className="text-sm font-black text-slate-900 mt-0.5">
                  {businessData.openingHours.morning} & {businessData.openingHours.evening}
                </p>
                <p className="text-xs text-emerald-800 font-extrabold flex items-center gap-1 mt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{businessData.openingHours.days}</span>
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Directions & Location Card */}
          <motion.div 
            {...cardVariants}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="card-base p-6 sm:p-8 space-y-6 hover:border-cyan-300 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-extrabold text-cyan-600 uppercase tracking-wider">Map & Directions</span>
                  <h4 className="text-xl font-extrabold bg-gradient-to-r from-[#0b1736] via-[#11224d] to-[#0284c7] bg-clip-text text-transparent pb-0.5 inline-block">Find Our Optical Shop</h4>
                </div>
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-700 border border-cyan-200">
                  <Navigation className="w-5 h-5 text-cyan-700" />
                </div>
              </div>

              {/* Store Location Card Visual Preview */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 aspect-[16/10] bg-slate-900 group">
                <img
                  src="/images/store-front-entrance-glass-door.jpg"
                  alt="Jaya Eye Care store entrance location at Mission Bazar Krishnapur Kolkata"
                  loading="lazy"
                  className="w-full h-full object-cover opacity-85 group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-5 flex flex-col justify-end text-white">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-bold mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>Opposite Soni Mondir</span>
                  </div>
                  <p className="text-base font-black text-white leading-tight">
                    {businessData.name}
                  </p>
                  <p className="text-xs text-slate-300 mt-1">
                    {businessData.address.building}, Mission Bazar, Krishnapur, Kolkata-102
                  </p>
                </div>
              </div>

              {/* Business Details Key Summary */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs space-y-2 text-slate-700">
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="text-slate-500 font-medium">Business Owner:</span>
                  <span className="font-bold text-slate-900">{businessData.owner}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="text-slate-500 font-medium">Landmark:</span>
                  <span className="font-bold text-slate-900">{businessData.address.landmark}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Pincode:</span>
                  <span className="font-bold text-slate-900">{businessData.address.pincode}</span>
                </div>
              </div>

              {/* Get Directions Button */}
              <Button
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="w-full justify-center gap-2.5 font-black"
                aria-label="Get directions to Jaya Eye Care on Google Maps"
              >
                <Navigation className="w-5 h-5 text-amber-300" />
                <span>Get Directions (Google Maps)</span>
              </Button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

