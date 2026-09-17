import { motion, useReducedMotion } from 'framer-motion';
import { businessData } from '../../data/businessData';

export function FloatingActionButtons() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 flex flex-col gap-3.5 items-end pointer-events-none">
      
      {/* WhatsApp Floating Action Button with Official Logo Symbol */}
      <motion.a
        href={`https://wa.me/${businessData.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={shouldReduceMotion ? { opacity: 1 } : { scale: 0, opacity: 0 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.5 }}
        whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
        className="group relative flex items-center gap-2.5 pointer-events-auto cursor-pointer focus:outline-none"
        aria-label="Chat on WhatsApp with Jaya Eye Care"
      >
        {/* Hover Tooltip Label */}
        <span className="hidden md:inline-block px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-md border border-slate-700 whitespace-nowrap">
          Chat on WhatsApp
        </span>

        {/* Pulse Outer Glow Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none -z-10" />

        {/* Floating Circle Button */}
        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl border-2 border-white/80 transition-all duration-200">
          {/* Official WhatsApp SVG Emblem */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-7 h-7 sm:w-8 sm:h-8 drop-shadow-xs"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </div>
      </motion.a>

      {/* Direct Phone Call Floating Action Button with Official Phone Symbol */}
      <motion.a
        href={`tel:${businessData.phone}`}
        initial={shouldReduceMotion ? { opacity: 1 } : { scale: 0, opacity: 0 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.65 }}
        whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
        className="group relative flex items-center gap-2.5 pointer-events-auto cursor-pointer focus:outline-none"
        aria-label={`Call Jaya Eye Care at ${businessData.phone}`}
      >
        {/* Hover Tooltip Label */}
        <span className="hidden md:inline-block px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-md border border-slate-700 whitespace-nowrap">
          Call Jaya Eye Care ({businessData.phoneFormatted})
        </span>

        {/* Pulse Outer Glow Ring */}
        <span className="absolute inset-0 rounded-full bg-cyan-500 opacity-30 animate-ping pointer-events-none -z-10" />

        {/* Floating Circle Button with Brand Navy & Cyan Gradient */}
        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#0b1736] via-[#11224d] to-[#0284c7] text-white flex items-center justify-center shadow-xl border-2 border-white/80 transition-all duration-200">
          {/* Official Phone Handset SVG Emblem */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-300 drop-shadow-xs"
          >
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.251.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
          </svg>
        </div>
      </motion.a>

    </div>
  );
}
