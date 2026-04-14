import { AlertTriangle, TrendingUp, Eye, Target } from 'lucide-react';

interface SnapshotCardProps {
  variant: 'risk' | 'opportunity' | 'watchlist' | 'action';
  label: string;
  value: string;
}

const variantConfig = {
  risk: {
    icon: AlertTriangle,
    class: 'bg-gradient-to-br from-crimson/5 to-crimson/10 border-crimson/20',
    iconClass: 'text-crimson',
    labelClass: 'text-crimson',
    barClass: 'bg-crimson',
  },
  opportunity: {
    icon: TrendingUp,
    class: 'bg-gradient-to-br from-forest/5 to-forest/10 border-forest/20',
    iconClass: 'text-forest',
    labelClass: 'text-forest',
    barClass: 'bg-forest',
  },
  watchlist: {
    icon: Eye,
    class: 'bg-gradient-to-br from-amber/5 to-amber/10 border-amber/20',
    iconClass: 'text-amber',
    labelClass: 'text-amber',
    barClass: 'bg-amber',
  },
  action: {
    icon: Target,
    class: 'bg-gradient-to-br from-navy/5 to-navy/10 border-navy/20',
    iconClass: 'text-navy',
    labelClass: 'text-navy',
    barClass: 'bg-navy',
  },
};

export function SnapshotCard({ variant, label, value }: SnapshotCardProps) {
  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <div className={`relative overflow-hidden rounded-xl border p-5 sm:p-6 transition-all duration-300 hover:shadow-soft ${config.class}`}>
      {/* Side accent bar */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${config.barClass}`} />
      
      {/* Label */}
      <div className="flex items-center gap-2 mb-3">
        <Icon className={`h-4 w-4 ${config.iconClass}`} />
        <span className={`text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider ${config.labelClass}`}>
          {label}
        </span>
      </div>

      {/* Value */}
      <p className="text-sm sm:text-base text-ink leading-relaxed">
        {value}
      </p>
    </div>
  );
}

interface SnapshotCardsProps {
  cards: Array<{
    variant: 'risk' | 'opportunity' | 'watchlist' | 'action';
    label: string;
    value: string;
  }>;
}

export function SnapshotCards({ cards }: SnapshotCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {cards.map((card, index) => (
        <SnapshotCard
          key={index}
          variant={card.variant}
          label={card.label}
          value={card.value}
        />
      ))}
    </div>
  );
}
