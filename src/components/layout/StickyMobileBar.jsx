import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { businessData } from '../../data/businessData';

export function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-cyan-200/90 p-2 md:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${businessData.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-[#0b1736] via-[#11224d] to-[#0284c7] text-white font-extrabold text-[11px] min-h-[48px] active:scale-[0.97] transition-transform shadow-xs"
          aria-label={`Call Jaya Eye Care at ${businessData.phone}`}
        >
          <Phone className="w-4 h-4 mb-0.5 text-emerald-300" />
          <span>Call Store</span>
        </a>
        <a
          href={`https://wa.me/${businessData.whatsappNumber}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold text-[11px] min-h-[48px] active:scale-[0.97] transition-transform shadow-xs"
          aria-label="Send WhatsApp message to Jaya Eye Care"
        >
          <MessageSquare className="w-4 h-4 mb-0.5 text-white" />
          <span>WhatsApp</span>
        </a>
        <a
          href={businessData.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400 text-slate-950 font-black text-[11px] min-h-[48px] active:scale-[0.97] transition-transform shadow-xs"
          aria-label="Get directions to Jaya Eye Care on Google Maps"
        >
          <MapPin className="w-4 h-4 mb-0.5 text-slate-950" />
          <span>Directions</span>
        </a>
      </div>
    </div>
  );
}

