import { PresidenTimeline, PulseGrid, FriksiBox } from '@/components/ui-custom/PoliticalItems';
import { 
  presidenItems, 
  pulseData, 
  friksiItems 
} from '@/data/briefingData';

export function Political() {
  const pulseCards = [
    { label: 'Elite Pulse', text: pulseData[0].text, variant: 'elite' as const },
    { label: 'Business Pulse', text: pulseData[1].text, variant: 'business' as const },
    { label: 'Public Pulse', text: pulseData[2].text, variant: 'public' as const },
    { label: 'Potensi Friksi Kebijakan', text: pulseData[3].text, variant: 'friction' as const },
  ];

  return (
    <section className="space-y-6 sm:space-y-8 animate-fade-in">
      {/* Section Header */}
      <div className="border-b-2 border-ink pb-4">
        <p className="text-sm font-mono text-crimson uppercase tracking-wider mb-1">
          Bagian V
        </p>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink">
          Political Economy Notes
        </h2>
      </div>

      {/* Presiden Timeline */}
      <PresidenTimeline items={presidenItems} />

      {/* Pulse Grid */}
      <PulseGrid cards={pulseCards} />

      {/* Friksi Box */}
      <FriksiBox items={friksiItems} />

      {/* Footer Note */}
      <div className="flex flex-col sm:flex-row justify-between gap-2 text-sm text-warmgray border-t border-border/60 pt-4">
        <span>Dokumen Briefing Internal · Kemenko Perekonomian RI · 14 April 2026 (Rev. 1)</span>
        <span>Direvisi berdasarkan verifikasi faktual Unit Analisis Data · 9 temuan dikoreksi</span>
      </div>
    </section>
  );
}
