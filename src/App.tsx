import { useState, useEffect } from 'react';
import { Header } from '@/components/ui-custom/Header';
import { ExecSnapshot } from '@/components/sections/ExecSnapshot';
import { Geopolitik } from '@/components/sections/Geopolitik';
import { Dampak } from '@/components/sections/Dampak';
import { Program } from '@/components/sections/Program';
import { Political } from '@/components/sections/Political';
import { Daily15 } from '@/components/sections/Daily15';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

const sections: Record<string, React.ComponentType> = {
  snapshot: ExecSnapshot,
  geopolitik: Geopolitik,
  dampak: Dampak,
  program: Program,
  political: Political,
  daily15: Daily15,
};

function App() {
  const [activeSection, setActiveSection] = useState('snapshot');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  // Handle scroll to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Announce section changes for screen readers
  useEffect(() => {
    const sectionNames: Record<string, string> = {
      snapshot: 'Executive Snapshot',
      geopolitik: 'Radar Geopolitik',
      dampak: 'Dampak ke Indonesia',
      program: 'Monitor Program',
      political: 'Political Economy Notes',
      daily15: 'Daily Briefing 15 April',
    };
    setAnnouncement(`Berpindah ke bagian ${sectionNames[activeSection]}`);
  }, [activeSection]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ActiveComponent = sections[activeSection];

  return (
    <div className="min-h-screen bg-paper">
      {/* Screen reader announcement */}
      <div 
        role="status" 
        aria-live="polite" 
        aria-atomic="true"
        className="sr-only"
      >
        {announcement}
      </div>

      {/* Header */}
      <Header 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />

      {/* Main Content */}
      <main 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10"
        role="main"
        aria-label="Konten Briefing"
      >
        {/* Active Section */}
        <ActiveComponent />
      </main>

      {/* Scroll to Top Button */}
      <Button
        variant="default"
        size="icon"
        className={`fixed bottom-6 right-6 z-50 rounded-full shadow-elevated transition-all duration-300 ${
          showScrollTop 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        onClick={scrollToTop}
        aria-label="Kembali ke atas"
      >
        <ChevronUp className="h-5 w-5" />
      </Button>

      {/* Footer */}
      <footer className="bg-ink text-paper/60 py-6 sm:py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold text-paper">
                Kementerian Koordinator Bidang Perekonomian
              </p>
              <p className="text-xs mt-1">
                Republik Indonesia
              </p>
            </div>
            <div className="text-center sm:text-right text-xs">
              <p>Dokumen Internal — Klasifikasi: Terbatas</p>
              <p className="mt-1">Edisi: 14–15 April 2026</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
