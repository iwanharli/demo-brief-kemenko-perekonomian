import { GeoItem } from '@/components/ui-custom/GeoItem';
import { geoItems } from '@/data/briefingData';

export function Geopolitik() {
  return (
    <section className="space-y-6 sm:space-y-8 animate-fade-in">
      {/* Section Header */}
      <div className="border-b-2 border-ink pb-4">
        <p className="text-sm font-mono text-crimson uppercase tracking-wider mb-1">
          Bagian II
        </p>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink">
          Radar Geopolitik & Geoekonomi Global
        </h2>
      </div>

      {/* Geo Items */}
      <div className="bg-white rounded-xl border border-border/60 shadow-card overflow-hidden">
        <div className="px-4 sm:px-6">
          {geoItems.map((item, index) => (
            <GeoItem
              key={index}
              title={item.title}
              risk={item.risk}
              body={item.body}
              implikasi={item.implikasi}
              footnote={item.footnote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
