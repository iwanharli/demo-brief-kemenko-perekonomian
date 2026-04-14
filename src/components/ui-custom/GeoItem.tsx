import { AlertTriangle, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { InfoBox } from './SummaryBox';

interface GeoItemProps {
  title: string;
  risk: 'tinggi' | 'sedang' | 'rendah';
  body: string;
  implikasi: string;
  footnote?: string;
}

const riskConfig = {
  tinggi: {
    label: 'TINGGI',
    class: 'bg-crimson/10 text-crimson border-crimson/20',
    icon: AlertTriangle,
  },
  sedang: {
    label: 'SEDANG',
    class: 'bg-amber/10 text-amber border-amber/20',
    icon: AlertCircle,
  },
  rendah: {
    label: 'RENDAH',
    class: 'bg-forest/10 text-forest border-forest/20',
    icon: CheckCircle,
  },
};

export function GeoItem({ title, risk, body, implikasi, footnote }: GeoItemProps) {
  const config = riskConfig[risk];
  const Icon = config.icon;

  return (
    <article className="group py-6 sm:py-8 border-b border-border/60 last:border-b-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-ink leading-snug group-hover:text-navy transition-colors">
          {title}
        </h3>
        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border flex-shrink-0 self-start ${config.class}`}>
          <Icon className="h-3.5 w-3.5" />
          {config.label}
        </span>
      </div>

      {/* Body */}
      <p className="text-sm sm:text-base text-warmgray leading-relaxed mb-4">
        {body}
      </p>

      {/* Footnote */}
      {footnote && (
        <div className="mb-4">
          <InfoBox title="Koreksi/Klarifikasi">
            {footnote}
          </InfoBox>
        </div>
      )}

      {/* Implikasi */}
      <div className="rounded-lg bg-navy/5 border border-navy/10 p-4">
        <div className="flex items-center gap-2 mb-2 text-navy">
          <ArrowRight className="h-4 w-4" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider">
            Implikasi bagi Indonesia
          </span>
        </div>
        <p className="text-sm sm:text-base text-ink leading-relaxed">
          {implikasi}
        </p>
      </div>
    </article>
  );
}
