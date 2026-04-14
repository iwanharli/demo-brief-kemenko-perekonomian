import { DampakTable } from '@/components/ui-custom/DampakTable';
import { dampakData } from '@/data/briefingData';

export function Dampak() {
  return (
    <section className="space-y-6 sm:space-y-8 animate-fade-in">
      {/* Section Header */}
      <div className="border-b-2 border-ink pb-4">
        <p className="text-sm font-mono text-crimson uppercase tracking-wider mb-1">
          Bagian III
        </p>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink">
          Dampak ke Indonesia
        </h2>
      </div>

      {/* Table */}
      <DampakTable data={dampakData} />
    </section>
  );
}
