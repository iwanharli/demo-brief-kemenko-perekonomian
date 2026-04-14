import { IssueList } from '@/components/ui-custom/IssueList';
import { SnapshotCards } from '@/components/ui-custom/SnapshotCards';
import { SummaryBox } from '@/components/ui-custom/SummaryBox';
import { GeoItem } from '@/components/ui-custom/GeoItem';
import { 
  FlashTicker, 
  MoscowBox, 
  IMFBox, 
  AgendaBox,
  DailyMetaStrip,
} from '@/components/ui-custom/DailyComponents';
import { 
  dailyFlashData,
  flashChips,
  dailyTopIssues,
  moscowData,
  imfData,
  dailyGeoItems,
  dailyPresidenItems,
  agendaItems,
  dailySnapshot,
  dailySummary,
} from '@/data/briefingData';

export function Daily15() {
  const snapshotCards = [
    {
      variant: 'risk' as const,
      label: 'Risiko Utama Hari Ini',
      value: dailySnapshot.risiko,
    },
    {
      variant: 'opportunity' as const,
      label: 'Peluang Utama Hari Ini',
      value: dailySnapshot.peluang,
    },
    {
      variant: 'watchlist' as const,
      label: 'Watchlist Teknis',
      value: dailySnapshot.watchlist,
    },
    {
      variant: 'action' as const,
      label: 'Aksi Prioritas Kemenko',
      value: dailySnapshot.aksi,
    },
  ];

  const metaItems = [
    { label: 'Kurs Rupiah', value: dailyFlashData.kurs },
    { label: 'IHSG (Tutup 14/4)', value: dailyFlashData.ihsg },
    { label: 'Minyak WTI', value: dailyFlashData.wti },
    { label: 'BI Rate', value: dailyFlashData.biRate },
    { label: 'Status Hari Ini', value: dailyFlashData.status, highlight: true },
  ];

  return (
    <section className="space-y-6 sm:space-y-8 animate-fade-in">
      {/* Section Header */}
      <div className="border-b-2 border-navy pb-4">
        <p className="text-sm font-mono text-navy uppercase tracking-wider mb-1">
          Daily Morning Briefing
        </p>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink">
          Situasi Pagi — Rabu, 15 April 2026
        </h2>
        <span className="inline-block mt-2 px-3 py-1 bg-navy text-white text-xs font-mono uppercase tracking-wider rounded">
          🔵 Edisi Harian · 15 April 2026 · Disiapkan 05.00 WIB
        </span>
      </div>

      {/* Meta Strip */}
      <DailyMetaStrip items={metaItems} />

      {/* Flash Ticker */}
      <FlashTicker chips={flashChips} />

      {/* Top Issues */}
      <div>
        <div className="border-b-2 border-navy pb-3 mb-4">
          <p className="text-sm font-mono text-navy uppercase tracking-wider mb-1">
            Top Isu
          </p>
          <h3 className="text-xl font-serif font-bold text-ink">
            3 Isu Strategis Hari Ini
          </h3>
        </div>
        <IssueList issues={dailyTopIssues} variant="daily" />
      </div>

      {/* Moscow Box */}
      <MoscowBox 
        tags={moscowData.tags} 
        points={moscowData.points} 
        warning={moscowData.warning} 
      />

      {/* IMF Box */}
      <IMFBox 
        globalGrowth={imfData.globalGrowth}
        indonesiaADB={imfData.indonesiaADB}
        indonesiaWB={imfData.indonesiaWB}
        note={imfData.note}
      />

      {/* Geo Items */}
      <div>
        <div className="border-b-2 border-navy pb-3 mb-4">
          <p className="text-sm font-mono text-navy uppercase tracking-wider mb-1">
            Geoekonomi & Geopolitik
          </p>
          <h3 className="text-xl font-serif font-bold text-ink">
            Update Global — 15 April 2026
          </h3>
        </div>
        <div className="bg-white rounded-xl border border-border/60 shadow-card overflow-hidden">
          <div className="px-4 sm:px-6">
            {dailyGeoItems.map((item, index) => (
              <GeoItem
                key={index}
                title={item.title}
                risk={item.risk}
                body={item.body}
                implikasi={item.implikasi}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Presiden Update */}
      <div className="rounded-xl border-2 border-navy/20 bg-navy/5 p-5 sm:p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 bg-navy rounded-lg">
            <span className="text-white text-lg">📅</span>
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-ink">
            Update Kegiatan Presiden — Hari Ini & Agenda Terdekat
          </h3>
        </div>

        <div className="space-y-3">
          {dailyPresidenItems.map((item, index) => (
            <div
              key={index}
              className={`flex gap-4 p-4 rounded-lg ${
                item.highlight
                  ? 'bg-gold/10 border border-gold/30'
                  : 'bg-white border border-border/60'
              }`}
            >
              <div className="flex-shrink-0 w-20">
                <span className={`text-sm font-mono font-semibold ${
                  item.highlight ? 'text-gold' : 'text-navy'
                }`}>
                  {item.date}
                </span>
              </div>
              <div className="flex-1 text-sm sm:text-base text-ink leading-relaxed">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Agenda Box */}
      <AgendaBox items={agendaItems} />

      {/* Snapshot Cards */}
      <div>
        <div className="border-b-2 border-navy pb-3 mb-4">
          <p className="text-sm font-mono text-navy uppercase tracking-wider mb-1">
            Asesmen Pagi
          </p>
          <h3 className="text-xl font-serif font-bold text-ink">
            Matriks Risiko & Peluang — 15 April
          </h3>
        </div>
        <SnapshotCards cards={snapshotCards} />
      </div>

      {/* Summary */}
      <SummaryBox label="Ringkasan Situasi Pagi — 15 April 2026" variant="daily">
        {dailySummary}
      </SummaryBox>

      {/* Footer Note */}
      <div className="flex flex-col sm:flex-row justify-between gap-2 text-sm text-warmgray border-t border-border/60 pt-4">
        <span>Daily Briefing Internal · Kemenko Perekonomian RI · 15 April 2026 · 05.00 WIB</span>
        <span>Disusun berdasarkan data pasar, sumber berita terverifikasi, dan analisis Unit Strategis</span>
      </div>
    </section>
  );
}
