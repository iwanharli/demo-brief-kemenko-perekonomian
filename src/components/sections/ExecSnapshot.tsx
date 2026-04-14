import { IndicatorChips } from '@/components/ui-custom/IndicatorChips';
import { IssueList } from '@/components/ui-custom/IssueList';
import { SnapshotCards } from '@/components/ui-custom/SnapshotCards';
import { SummaryBox } from '@/components/ui-custom/SummaryBox';
import { 
  indicators, 
  executiveIssues,
} from '@/data/briefingData';

export function ExecSnapshot() {
  const snapshotCards = [
    {
      variant: 'risk' as const,
      label: 'Risiko Utama Minggu Ini',
      value: 'Penurunan bobot atau reklasifikasi MSCI pada Mei 2026 yang dapat memicu capital outflow besar-besaran, memperparah tekanan rupiah, dan merusak kepercayaan investor asing pada pasar modal Indonesia di saat yang tidak kondusif.',
    },
    {
      variant: 'opportunity' as const,
      label: 'Peluang Utama Minggu Ini',
      value: 'Komitmen investasi Jepang (USD 23,63 miliar) dan Korea Selatan (USD 10,26 miliar) — total USD 33,89 miliar setara ~Rp 574–575 triliun — dari kunjungan Presiden Prabowo membuka jalur FDI nyata ke sektor hilirisasi, energi, dan teknologi.',
    },
  ];

  const summaryText = `Indonesia memasuki pekan kedua April 2026 dalam kondisi fundamental domestik yang relatif terjaga, namun menghadapi tekanan berlapis dari luar. Pertumbuhan Q1-2026 diproyeksikan di kisaran 5,5% dan surplus neraca perdagangan terus berlanjut hingga 70 bulan berturut-turut. IKK Maret 2026 tercatat 122,9 — turun dari 125,2 pada Februari.

Di sisi lain, triple shock eksternal berlangsung simultan: (1) tekanan kurs rupiah akibat konflik AS–Iran dan penguatan dolar, (2) ancaman reklasifikasi MSCI yang memasuki babak paling kritis, dan (3) volatilitas harga energi global.

Status minggu ini: WASPADA — fundamental bertahan, tekanan eksternal meningkat.`;

  return (
    <section className="space-y-6 sm:space-y-8 animate-fade-in">
      {/* Section Header */}
      <div className="border-b-2 border-ink pb-4">
        <p className="text-sm font-mono text-crimson uppercase tracking-wider mb-1">
          Bagian I
        </p>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink">
          Executive Snapshot
        </h2>
      </div>

      {/* Indicators */}
      <IndicatorChips indicators={indicators} />

      {/* Issues */}
      <IssueList issues={executiveIssues} />

      {/* Snapshot Cards */}
      <SnapshotCards cards={snapshotCards} />

      {/* Summary */}
      <SummaryBox label="Ringkasan Situasi Minggu Ini">
        {summaryText}
      </SummaryBox>
    </section>
  );
}
