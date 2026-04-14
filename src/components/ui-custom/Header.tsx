import { useState, useEffect } from 'react';
import { Menu, X, Eye, EyeOff, Type, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: 'snapshot', label: 'Exec Snapshot', icon: '◆' },
  { id: 'geopolitik', label: 'Radar Geopolitik', icon: '◈' },
  { id: 'dampak', label: 'Dampak Indonesia', icon: '◉' },
  { id: 'program', label: 'Monitor Program', icon: '▣' },
  { id: 'political', label: 'Political Economy', icon: '◊' },
  { id: 'daily15', label: 'Daily 15 Apr', icon: '●', isNew: true },
];

export function Header({ activeSection, onSectionChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', highContrast);
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const getStatusBadge = () => {
    if (activeSection === 'daily15') {
      return { text: '⚡ Waspada Aktif', class: 'bg-amber text-ink' };
    }
    return { text: '⚠ Waspada', class: 'bg-crimson text-white' };
  };

  const status = getStatusBadge();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-ink/95 backdrop-blur-md shadow-elevated" : "bg-ink"
      )}
    >
      {/* Top bar with title and accessibility controls */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Title Block */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col">
                <p className="text-[10px] sm:text-xs font-mono text-gold tracking-[0.2em] uppercase mb-1">
                  Briefing Strategis Kemenko Perekonomian
                </p>
                <h1 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-paper leading-none tracking-tight">
                  Laporan Mingguan & Daily Briefing
                </h1>
                <p className="text-xs sm:text-sm text-paper/40 mt-1.5 hidden sm:block font-medium">
                  Dipersiapkan untuk Menteri Koordinator Bidang Perekonomian
                </p>
              </div>
            </div>

            {/* Desktop Meta Info */}
            <div className="hidden lg:flex items-center gap-6 ml-8">
              <div className="flex flex-col items-end border-r border-white/10 pr-6">
                <div className="text-right text-[11px] text-paper/50 font-mono leading-relaxed">
                  <div>Edisi: 14–15 April 2026</div>
                  <div>Pekan ke-15 / 2026</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className={cn(
                  "px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase border flex items-center gap-1.5 shadow-sm",
                  status.class.includes('amber') 
                    ? "bg-amber text-ink border-amber/40" 
                    : "bg-crimson text-white border-crimson/20"
                )}>
                  {status.text}
                </span>

                {/* Vertical Divider */}
                <div className="h-8 w-px bg-white/10" />

                {/* Toolbar Group */}
                <div className="flex items-center gap-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 text-paper/60 hover:text-paper hover:bg-white/10 transition-colors"
                        aria-label="Ubah ukuran teks"
                      >
                        <Type className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                      <DropdownMenuItem onClick={() => setFontSize(90)}>Kecil (90%)</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFontSize(100)}>Normal (100%)</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFontSize(115)}>Besar (115%)</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFontSize(130)}>Sangat Besar (130%)</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-paper/60 hover:text-paper hover:bg-white/10 hidden sm:flex transition-colors"
                    onClick={() => setHighContrast(!highContrast)}
                    aria-label={highContrast ? 'Matikan kontras tinggi' : 'Aktifkan kontras tinggi'}
                  >
                    {highContrast ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-paper/60 hover:text-paper hover:bg-white/10 hidden sm:flex transition-colors"
                    onClick={() => setDarkMode(!darkMode)}
                    aria-label={darkMode ? 'Matikan mode gelap' : 'Aktifkan mode gelap'}
                  >
                    {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-paper/70 hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation - Desktop */}
      <nav className="hidden lg:block border-b border-white/[0.03] bg-ink/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-1.5">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={cn(
                  "group relative flex items-center px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full",
                  activeSection === section.id
                    ? "text-gold bg-gold/10 shadow-[0_0_15px_rgba(212,175,55,0.05)]"
                    : "text-paper/40 hover:text-paper/80 hover:bg-white/5"
                )}
              >
                <span className={cn(
                  "mr-2.5 transition-transform duration-300 group-hover:scale-110",
                  activeSection === section.id ? "text-gold" : "opacity-40"
                )}>
                  {section.icon}
                </span>
                <span className="relative">
                  {section.label}
                  {activeSection === section.id && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold/50" />
                  )}
                </span>
                
                {section.isNew && (
                  <span className="ml-2.5 flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-100"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold"></span>
                    </span>
                    <span className="text-[10px] font-black tracking-widest uppercase text-gold leading-none">
                      BARU
                    </span>
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-ink/98 border-t border-white/10 animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  onSectionChange(section.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  activeSection === section.id
                    ? 'bg-white/10 text-paper'
                    : 'text-paper/70 hover:bg-white/5 hover:text-paper'
                }`}
              >
                <span className="mr-3 opacity-70">{section.icon}</span>
                {section.label}
                {section.isNew && (
                  <span className="ml-auto px-2 py-0.5 text-xs font-bold bg-gold text-ink rounded-full">
                    BARU
                  </span>
                )}
              </button>
            ))}
          </div>
          
          {/* Mobile meta info */}
          <div className="px-4 py-3 border-t border-white/10">
            <div className="text-sm text-paper/70 font-mono mb-2">
              <div>Edisi: 14–15 April 2026</div>
              <div>Pekan ke-15 / 2026</div>
            </div>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${status.class}`}>
              {status.text}
            </span>
          </div>
        </nav>
      )}
    </header>
  );
}
