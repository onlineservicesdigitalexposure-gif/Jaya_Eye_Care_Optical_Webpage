import { useActiveSection } from './hooks/useActiveSection';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingActionButtons } from './components/layout/FloatingActionButtons';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { DoctorsSection } from './sections/DoctorsSection';
import { GallerySection } from './sections/GallerySection';
import { ContactSection } from './sections/ContactSection';

const sectionIds = ['home', 'about', 'services', 'doctors', 'gallery', 'contact'];

export function App() {
  const activeSection = useActiveSection(sectionIds, 120);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-cyan-600 selection:text-white">
      {/* Sticky Header Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main SPA Content Sections */}
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DoctorsSection />
        <GallerySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Floating Action Buttons (WhatsApp & Call) */}
      <FloatingActionButtons />
    </div>
  );
}

export default App;


