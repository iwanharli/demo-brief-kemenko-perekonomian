import { Calendar, Users, TrendingUp, AlertOctagon } from 'lucide-react';
import type { PresidenItem } from '@/data/briefingData';

interface PresidenTimelineProps {
  items: PresidenItem[];
}

export function PresidenTimeline({ items }: PresidenTimelineProps) {
  return (
    <div className="rounded-xl border-2 border-navy/20 bg-navy/5 p-5 sm:p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-navy rounded-lg">
          <Calendar className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-ink">
          Update Kegiatan Presiden — Relevansi Kemenko Perekonomian
        </h3>
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex gap-4 p-4 rounded-lg transition-all duration-200 ${
              item.highlight
                ? 'bg-gold/10 border border-gold/30'
                : 'bg-white border border-border/60 hover:border-gold/30'
            }`}
          >
            <div className="flex-shrink-0 w-16 sm:w-20">
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
  );
}

interface PulseCardProps {
  label: string;
  text: string;
  variant?: 'elite' | 'business' | 'public' | 'friction';
}

const pulseConfig = {
  elite: {
    icon: Users,
    class: 'bg-navy/5 border-navy/20',
    labelClass: 'text-navy',
  },
  business: {
    icon: TrendingUp,
    class: 'bg-forest/5 border-forest/20',
    labelClass: 'text-forest',
  },
  public: {
    icon: Users,
    class: 'bg-amber/5 border-amber/20',
    labelClass: 'text-amber',
  },
  friction: {
    icon: AlertOctagon,
    class: 'bg-crimson/5 border-crimson/20',
    labelClass: 'text-crimson',
  },
};

export function PulseCard({ label, text, variant = 'elite' }: PulseCardProps) {
  const config = pulseConfig[variant];
  const Icon = config.icon;

  return (
    <div className={`rounded-xl border p-5 transition-all duration-300 hover:shadow-soft ${config.class}`}>
      <div className={`flex items-center gap-2 mb-3 ${config.labelClass}`}>
        <Icon className="h-4 w-4" />
        <span className="text-xs font-mono font-semibold uppercase tracking-wider">
          {label}
        </span>
      </div>
      <p className="text-sm sm:text-base text-ink leading-relaxed">
        {text}
      </p>
    </div>
  );
}

interface PulseGridProps {
  cards: Array<{
    label: string;
    text: string;
    variant?: 'elite' | 'business' | 'public' | 'friction';
  }>;
}

export function PulseGrid({ cards }: PulseGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {cards.map((card, index) => (
        <PulseCard
          key={index}
          label={card.label}
          text={card.text}
          variant={card.variant}
        />
      ))}
    </div>
  );
}

interface FriksiBoxProps {
  items: string[];
}

export function FriksiBox({ items }: FriksiBoxProps) {
  return (
    <div className="rounded-xl bg-ink p-5 sm:p-6 text-paper">
      <div className="flex items-center gap-2 mb-4 text-gold">
        <AlertOctagon className="h-5 w-5" />
        <span className="text-sm font-mono font-semibold uppercase tracking-wider">
          Catatan Risiko Tata Kelola & Implementasi
        </span>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex gap-3 text-sm sm:text-base leading-relaxed">
            <span className="text-gold flex-shrink-0">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
