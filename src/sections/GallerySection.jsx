import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ZoomIn, X, Filter } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const shouldReduceMotion = useReducedMotion();

  // Escape key handler to close lightbox modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  // Lock body scroll when lightbox is active
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const categories = ["All", "Storefront & Branding", "Eyewear Showcase", "Vision Testing", "Schedule Board"];

  const galleryItems = [
    {
      id: "storefront",
      src: "/images/store-front-entrance-glass-door.jpg",
      caption: "Jaya Eye Care Storefront Entrance",
      alt: "Jaya Eye Care storefront entrance with glass door at Mission Bazar, Krishnapur, Kolkata",
      category: "Storefront & Branding",
      isHighlight: true,
      fit: "object-cover object-[center_35%]"
    },
    {
      id: "branding",
      src: "/images/jaya-eye-care-visiting-card.png",
      caption: "Jaya Eye Care Optical Store Card",
      alt: "Jaya Eye Care official business card and optical store branding",
      category: "Storefront & Branding",
      isHighlight: false,
      fit: "object-contain bg-white p-3"
    },
    {
      id: "schedule",
      src: "/images/jaya-eye-care-banner.png",
      caption: "Doctor & Optometrist Schedule Board",
      alt: "Jaya Eye Care official doctor and optometrist consultation schedule board photograph",
      category: "Schedule Board",
      isHighlight: false,
      fit: "object-contain bg-slate-900 p-2"
    },
    {
      id: "frames-display",
      src: "/images/store-frames-wall-display.jpg",
      caption: "Illuminated Frame Wall Display",
      alt: "Spectacle frames and eyewear collection on illuminated display shelves",
      category: "Eyewear Showcase",
      isHighlight: false,
      fit: "object-cover object-center"
    },
    {
      id: "testing-chamber",
      src: "/images/eye-testing-chamber-door.jpg",
      caption: "Eye Testing Setup & Chamber",
      alt: "Computerized eye testing chamber entrance and contact lens care setup",
      category: "Vision Testing",
      isHighlight: false,
      fit: "object-cover object-center"
    },
    {
      id: "counter-mirror",
      src: "/images/optical-counter-mirror-display.jpg",
      caption: "Service Counter & Fitting Mirrors",
      alt: "Optical customer service counter with spectacle frames and fitting mirrors",
      category: "Eyewear Showcase",
      isHighlight: false,
      fit: "object-cover object-center"
    },
    {
      id: "sunglasses-lounge",
      src: "/images/sunglasses-display-seating-area.jpg",
      caption: "Sunglasses Display & Patient Lounge",
      alt: "Sunglasses showcase cabinets and comfortable patient seating sofa",
      category: "Storefront & Branding",
      isHighlight: false,
      fit: "object-cover object-center"
    },
    {
      id: "store-interior",
      src: "/images/optical-store-interior-lighting.jpg",
      caption: "Store Ambient Interior Lighting",
      alt: "Modern shop interior with warm ceiling lighting and eyewear shelves",
      category: "Storefront & Branding",
      isHighlight: false,
      fit: "object-cover object-center"
    },
    {
      id: "frames-showcase",
      src: "/images/spectacle-frames-showcase.jpg",
      caption: "Spectacle Frame Showcase",
      alt: "Curated display of prescription eyeglasses and fashion frames",
      category: "Eyewear Showcase",
      isHighlight: false,
      fit: "object-cover object-center"
    },
    {
      id: "eyewear-counter",
      src: "/images/eyewear-counter-display.jpg",
      caption: "Eyewear Counter Display",
      alt: "Counter display featuring optical frames and optical maintenance items",
      category: "Eyewear Showcase",
      isHighlight: false,
      fit: "object-cover object-center"
    }
  ];

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const cardVariants = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 } };

  return (
    <section id="gallery" className="section-padding bg-slate-50 border-t border-cyan-100/70">
      <div className="container-custom">
        
        <SectionHeader
          badge="Actual Store Imagery"
          title="Inside Jaya Eye Care"
          subtitle="Explore authentic photographs of our optical shop, storefront entrance, eyewear displays, and schedule board."
        />

        {/* Category Filter Tabs with Framer Motion Active Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <span className="text-xs font-bold text-slate-400 mr-2 hidden sm:inline-flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-cyan-600" />
            <span>Filter:</span>
          </span>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                  isActive
                    ? 'text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-cyan-50/80 hover:text-blue-950 border border-slate-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="galleryCategoryPill"
                    className="absolute inset-0 bg-gradient-to-r from-[#0b1736] via-[#11224d] to-[#0284c7] rounded-full -z-10 shadow-2xs"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Responsive Grid with Storefront Visual Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              {...cardVariants}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              className={`group relative overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-cyan-300 cursor-pointer ${
                item.isHighlight && activeCategory === "All" ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
              }`}
              onClick={() => setSelectedImage(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedImage(item);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View larger image of ${item.caption}`}
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className={`w-full h-full transition-transform duration-500 group-hover:scale-103 ${item.fit}`}
              />

              {/* Highlight Tag for Storefront */}
              {item.isHighlight && (
                <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-blue-950 to-cyan-900 text-amber-300 text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm border border-cyan-400/40">
                  ★ Store Front Highlight
                </div>
              )}

              {/* Hover Dark Overlay & Caption with Logo Cyan Accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5">
                <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest mb-0.5">
                  {item.category}
                </span>
                <div className="flex items-center justify-between text-white">
                  <h3 className="text-base sm:text-lg font-bold tracking-tight leading-snug">
                    {item.caption}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-cyan-500 group-hover:text-white transition-colors flex-shrink-0 shadow-xs">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Mobile-Friendly Keyboard-Accessible Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 sm:p-6 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Image Preview Modal"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 text-left"
            >
              {/* Modal Header Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950 border-b border-slate-800 text-white">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">{selectedImage.category}</span>
                  <h4 className="text-base font-bold text-white leading-none mt-0.5">{selectedImage.caption}</h4>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors cursor-pointer"
                  aria-label="Close image modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image View */}
              <div className="p-3 sm:p-6 bg-slate-950 flex items-center justify-center max-h-[75vh]">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
                />
              </div>

              {/* Modal Footer Description */}
              <div className="px-5 py-3 bg-slate-900 border-t border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                <span>{selectedImage.alt}</span>
                <span className="text-slate-500 font-mono hidden sm:inline">Press Esc to close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
