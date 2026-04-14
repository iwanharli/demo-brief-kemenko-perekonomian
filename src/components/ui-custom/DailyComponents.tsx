import { TrendingUp, TrendingDown, AlertCircle, CheckCircle, Clock, Calendar } from 'lucide-react';
import type { AgendaItem } from '@/data/briefingData';

interface FlashChipProps {
  label: string;
  value: string;
  delta: string;
  deltaType: 'up' | 'down' | 'warn' | 'neutral';
}

const deltaConfig = {
  up: {
    icon: TrendingUp,
    class: 'text-forest',
  },
  down: {
    icon: TrendingDown,
    class: 'text-crimson',
  },
  warn: {
    icon: AlertCircle,
    class: 'text-amber',
  },
  neutral: {
    icon: CheckCircle,
    class: 'text-navy',
  },
};

export function FlashChip({ label, value, delta, deltaType }: FlashChipProps) {
  const config = deltaConfig[deltaType];
  const Icon = config.icon;

  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg border border-border/60 shadow-sm hover:shadow-soft transition-shadow">
      <div>
        <div className="text-xs font-mono text-warmgray uppercase tracking-wider">
          {label}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold text-ink">{value}</span>
          <span className={`flex items-center gap-1 text-xs font-medium ${config.class}`}>
            <Icon className="h-3 w-3" />
            {delta}
          </span>
        </div>
      </div>
    </div>
  );
}

interface FlashTickerProps {
  chips: FlashChipProps[];
}

export function FlashTicker({ chips }: FlashTickerProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {chips.map((chip, index) => (
        <FlashChip key={index} {...chip} />
      ))}
    </div>
  );
}

interface MoscowBoxProps {
  tags: string[];
  points: Array<{ title: string; desc: string }>;
  warning: string;
}

export function MoscowBox({ tags, points, warning }: MoscowBoxProps) {
  return (
    <div className="rounded-xl bg-gradient-to-br from-[#0d1b2a] to-[#1a2f47] p-5 sm:p-6 text-[#e8e0cc] border border-[#6eb5ff]/20">
      <div className="flex items-center gap-2 mb-4 text-gold">
        <span className="text-lg">🇷🇺</span>
        <span className="text-sm font-mono font-semibold uppercase tracking-wider">
          Briefing Hasil Kunjungan Presiden ke Rusia — 13 April 2026
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-mono bg-[#6eb5ff]/15 border border-[#6eb5ff]/30 rounded text-[#6eb5ff]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Points */}
      <div className="space-y-3 mb-5">
        {points.map((point, index) => (
          <div key={index} className="flex gap-3">
            <span className="text-gold flex-shrink-0 font-mono">{index + 1}</span>
            <div>
              <span className="font-semibold text-[#ffd56b]">{point.title}</span>
              <span className="text-[#e8e0cc]/90"> — {point.desc}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Warning */}
      <div className="pt-4 border-t border-white/10 text-sm text-[#e8e0cc]/60">
        ⚠ {warning}
      </div>
    </div>
  );
}

interface IMFBoxProps {
  globalGrowth: string;
  indonesiaADB: string;
  indonesiaWB: string;
  note: string;
}

export function IMFBox({ globalGrowth, indonesiaADB, indonesiaWB, note }: IMFBoxProps) {
  return (
    <div className="rounded-xl bg-[#1a1a2e] p-5 sm:p-6 text-[#e8e0cc] overflow-hidden">
      <div className="flex items-center gap-2 mb-5 text-[#6eb5ff]">
        <span className="text-sm font-mono font-semibold uppercase tracking-wider">
          📊 IMF World Economic Outlook — April 2026
        </span>
      </div>

      <div className="overflow-hidden rounded-lg border border-white/10 mb-5">
        <table className="w-full" style={{ tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: '33.33%' }} />
            <col style={{ width: '33.33%' }} />
            <col style={{ width: '33.34%' }} />
          </colgroup>
          <thead>
            <tr className="bg-white/5">
              <th className="px-4 py-3 text-center text-xs text-[#e8e0cc]/55 uppercase tracking-wider border-r border-white/10">
                Global Growth 2026
              </th>
              <th className="px-4 py-3 text-center text-xs text-[#e8e0cc]/55 uppercase tracking-wider border-r border-white/10">
                Indonesia (ADB)
              </th>
              <th className="px-4 py-3 text-center text-xs text-[#e8e0cc]/55 uppercase tracking-wider">
                Indonesia (WB)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white/5">
              <td className="px-4 py-4 text-center border-r border-white/10">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#ffd56b]">{globalGrowth}</div>
                <div className="text-xs text-[#e8e0cc]/55 mt-1">Konfirmasi WEO Jan'26</div>
              </td>
              <td className="px-4 py-4 text-center border-r border-white/10">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#ffd56b]">{indonesiaADB}</div>
                <div className="text-xs text-[#e8e0cc]/55 mt-1">ADO April 2026</div>
              </td>
              <td className="px-4 py-4 text-center">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#ffd56b]">{indonesiaWB}</div>
                <div className="text-xs text-[#e8e0cc]/55 mt-1">↓ dari 4,8%</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm leading-relaxed text-[#e8e0cc]/70">
        {note}
      </p>
    </div>
  );
}

interface AgendaBoxProps {
  items: AgendaItem[];
}

const urgencyConfig = {
  kritis: {
    label: 'KRITIS',
    class: 'bg-crimson text-white',
  },
  penting: {
    label: 'PENTING',
    class: 'bg-amber text-white',
  },
  pantau: {
    label: 'PANTAU',
    class: 'bg-navy text-white',
  },
};

export function AgendaBox({ items }: AgendaBoxProps) {
  return (
    <div className="rounded-xl bg-ink p-5 sm:p-6 text-paper">
      <div className="flex items-center gap-2 mb-5 text-gold">
        <Calendar className="h-5 w-5" />
        <span className="text-sm font-mono font-semibold uppercase tracking-wider">
          Agenda & Watchlist — 15 April 2026
        </span>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => {
          const urgency = urgencyConfig[item.urgency];
          return (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10"
            >
              <div className="flex items-center gap-3 sm:w-32 flex-shrink-0">
                <Clock className="h-4 w-4 text-paper/50" />
                <span className="text-sm font-mono text-paper/70">{item.time}</span>
              </div>
              <div className="flex-1 text-sm leading-relaxed">
                {item.description}
              </div>
              <span className={`px-2 py-1 rounded text-xs font-semibold self-start ${urgency.class}`}>
                {urgency.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface DailyMetaStripProps {
  items: Array<{ label: string; value: string; highlight?: boolean }>;
}

export function DailyMetaStrip({ items }: DailyMetaStripProps) {
  return (
    <div className="flex flex-wrap gap-4 p-4 sm:p-5 bg-ink rounded-xl">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col px-4 py-2 border-r border-white/10 last:border-r-0 ${
            item.highlight ? 'text-gold' : 'text-paper'
          }`}
        >
          <span className="text-xs font-mono text-paper/50 uppercase tracking-wider">
            {item.label}
          </span>
          <span className={`text-sm sm:text-base font-semibold ${item.highlight ? 'text-amber' : ''}`}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}
