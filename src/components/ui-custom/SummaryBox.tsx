import { FileText, Info } from 'lucide-react';

interface SummaryBoxProps {
  label?: string;
  children: React.ReactNode;
  variant?: 'default' | 'daily';
}

export function SummaryBox({ label = 'Ringkasan Situasi', children, variant = 'default' }: SummaryBoxProps) {
  const isDaily = variant === 'daily';
  
  return (
    <div className={`rounded-xl border p-5 sm:p-6 ${
      isDaily 
        ? 'bg-navy/5 border-navy/20' 
        : 'bg-amber/5 border-amber/20'
    }`}>
      <div className={`flex items-center gap-2 mb-4 ${
        isDaily ? 'text-navy' : 'text-amber'
      }`}>
        <FileText className="h-5 w-5" />
        <span className="text-sm font-mono font-semibold uppercase tracking-wider">
          {label}
        </span>
      </div>
      <div className="text-sm sm:text-base text-ink leading-relaxed whitespace-pre-line">
        {children}
      </div>
    </div>
  );
}

interface InfoBoxProps {
  children: React.ReactNode;
  title?: string;
}

export function InfoBox({ children, title }: InfoBoxProps) {
  return (
    <div className="rounded-lg bg-cream/50 border border-border/60 p-4">
      {title && (
        <div className="flex items-center gap-2 mb-2 text-navy">
          <Info className="h-4 w-4" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider">
            {title}
          </span>
        </div>
      )}
      <div className="text-sm text-warmgray">
        {children}
      </div>
    </div>
  );
}
