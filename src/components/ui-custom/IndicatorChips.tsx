import { TrendingUp, TrendingDown, Minus, AlertCircle } from 'lucide-react';
import type { Indicator } from '@/data/briefingData';

interface IndicatorChipsProps {
  indicators: Indicator[];
}

const statusConfig = {
  positive: {
    icon: TrendingUp,
    class: 'bg-forest/10 text-forest border-forest/20',
    iconClass: 'text-forest',
  },
  negative: {
    icon: TrendingDown,
    class: 'bg-crimson/10 text-crimson border-crimson/20',
    iconClass: 'text-crimson',
  },
  neutral: {
    icon: Minus,
    class: 'bg-navy/10 text-navy border-navy/20',
    iconClass: 'text-navy',
  },
  caution: {
    icon: AlertCircle,
    class: 'bg-amber/10 text-amber border-amber/20',
    iconClass: 'text-amber',
  },
};

export function IndicatorChips({ indicators }: IndicatorChipsProps) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {indicators.map((indicator, index) => {
        const config = statusConfig[indicator.status];
        const Icon = config.icon;
        
        return (
          <div
            key={index}
            className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border text-sm font-medium transition-all duration-200 hover:shadow-soft ${config.class}`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <Icon className={`h-4 w-4 flex-shrink-0 ${config.iconClass}`} />
            <span className="font-mono text-xs sm:text-sm opacity-80">{indicator.label}</span>
            <span className="font-semibold whitespace-nowrap">{indicator.value}</span>
          </div>
        );
      })}
    </div>
  );
}
