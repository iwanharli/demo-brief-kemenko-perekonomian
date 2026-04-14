import { ProgramAccordion } from '@/components/ui-custom/ProgramAccordion';
import { programs } from '@/data/briefingData';

export function Program() {
  return (
    <section className="space-y-6 sm:space-y-8 animate-fade-in">
      {/* Section Header */}
      <div className="border-b-2 border-ink pb-4">
        <p className="text-sm font-mono text-crimson uppercase tracking-wider mb-1">
          Bagian IV
        </p>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink">
          Monitor Program Kemenko Perekonomian
        </h2>
      </div>

      {/* Program Accordion */}
      <ProgramAccordion programs={programs} />
    </section>
  );
}
