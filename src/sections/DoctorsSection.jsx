import { motion, useReducedMotion } from 'framer-motion';
import { UserCheck, Calendar, Clock, Award, Building2, Info, Sparkles } from 'lucide-react';
import { businessData } from '../data/businessData';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/ui/Button';

export function DoctorsSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } } };

  return (
    <section id="doctors" className="section-padding bg-white border-t border-cyan-100/70">
      <div className="container-custom">
        
        <SectionHeader
          badge="Specialist & Optometrists"
          title="Doctor & Eye Test Schedule"
          subtitle="Consult experienced eye specialists and certified optometrists right here at Jaya Eye Care."
        />

        {/* Eye Specialist Doctor Highlight Card */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.97 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14 max-w-4xl mx-auto bg-gradient-to-br from-[#0b1736] via-[#11224d] to-[#0284c7] rounded-3xl p-6 sm:p-10 text-white shadow-xl border border-cyan-400/40 text-left relative overflow-hidden"
        >
          {/* Subtle Ambient Refraction Light Blob */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-xs flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-slate-950 fill-slate-950" />
                  <span>Weekly Eye Specialist</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/25 text-emerald-300 text-xs font-extrabold border border-emerald-400/40">
                  {businessData.doctors[0].highlight}
                </span>
              </div>

              <div>
                <h3 className="text-3xl font-black text-white tracking-tight">
                  {businessData.doctors[0].name}
                </h3>
                <p className="text-sm font-extrabold text-cyan-300 mt-1 uppercase tracking-wider">
                  {businessData.doctors[0].role}
                </p>
              </div>

              <div className="flex items-start gap-2.5 text-slate-200 text-xs sm:text-sm bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-cyan-300/30">
                <Award className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">{businessData.doctors[0].qualifications}</span>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-sm">
                <div className="flex items-center gap-2 text-amber-300 font-black">
                  <Calendar className="w-5 h-5 text-amber-400" />
                  <span>{businessData.doctors[0].schedule}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-cyan-800/60 lg:pl-8">
              <p className="text-xs text-cyan-100 text-center lg:text-right font-medium">
                Prior booking recommended for Friday evening doctor consultation.
              </p>
              <Button
                href={`tel:${businessData.phone}`}
                variant="secondary"
                size="lg"
                className="w-full justify-center font-black shadow-md"
              >
                Book Doctor Slot
              </Button>
            </div>

          </div>
        </motion.div>

        {/* Optometrists Schedule Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <span className="badge-base badge-cyan mb-2">Refraction & Optometry</span>
            <h3 className="text-2xl font-black bg-gradient-to-r from-[#0b1736] via-[#11224d] to-[#0284c7] bg-clip-text text-transparent pb-1 inline-block">Certified Optometrists Availability</h3>
            <p className="text-sm text-slate-600 mt-1">Daily computerized refraction testing & vision checkup specialists.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto"
          >
            {businessData.optometrists.map((opt) => (
              <motion.div
                key={opt.id}
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="card-base p-6 flex flex-col justify-between hover:border-cyan-300 transition-all border-t-4 border-t-cyan-600"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-950 border border-cyan-200">
                      {opt.role}
                    </span>
                    <UserCheck className="w-5 h-5 text-cyan-600" />
                  </div>

                  <div>
                    <h4 className="text-lg font-black text-slate-900">{opt.name}</h4>
                    <p className="text-xs font-semibold text-slate-600 flex items-center gap-1 mt-1 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <Building2 className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                      <span>{opt.affiliation}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-extrabold text-blue-950">
                  <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{opt.schedule}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Working Hours Notice */}
        <div className="mt-12 p-4 rounded-2xl bg-amber-50/90 border border-amber-200/90 max-w-2xl mx-auto flex items-center justify-center gap-3 text-amber-950 text-sm font-bold shadow-2xs">
          <Info className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span>Store Working Hours: {businessData.openingHours.fullTiming}</span>
        </div>

      </div>
    </section>
  );
}

