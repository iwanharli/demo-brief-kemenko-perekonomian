import { AlertTriangle, AlertCircle, Eye } from 'lucide-react';
import type { Issue } from '@/data/briefingData';

interface IssueListProps {
  issues: Issue[];
  variant?: 'default' | 'daily';
}

const priorityConfig = {
  flash: {
    icon: AlertTriangle,
    label: 'Flash',
    class: 'bg-crimson/10 text-crimson border-crimson/20',
  },
  kritis: {
    icon: AlertCircle,
    label: 'Kritis',
    class: 'bg-amber/10 text-amber border-amber/20',
  },
  pantau: {
    icon: Eye,
    label: 'Pantau',
    class: 'bg-navy/10 text-navy border-navy/20',
  },
};

export function IssueList({ issues, variant = 'default' }: IssueListProps) {
  const isDaily = variant === 'daily';

  return (
    <div className="space-y-4 sm:space-y-6">
      {issues.map((issue, index) => (
        <article
          key={index}
          className={`group flex gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl border border-border/60 bg-white shadow-card transition-all duration-300 hover:shadow-soft hover:border-gold/30 ${
            isDaily ? 'animate-fade-in' : ''
          }`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Number */}
          <div className="flex-shrink-0">
            <span className="font-serif text-4xl sm:text-5xl font-bold text-cream group-hover:text-gold transition-colors duration-300">
              {issue.number}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Priority Badge */}
            {issue.priority && (
              <div className="mb-2">
                {(() => {
                  const config = priorityConfig[issue.priority];
                  const Icon = config.icon;
                  return (
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${config.class}`}>
                      <Icon className="h-3 w-3" />
                      {config.label}
                    </span>
                  );
                })()}
              </div>
            )}

            {/* Title */}
            <h3 className="text-base sm:text-lg font-semibold text-ink leading-snug mb-2 group-hover:text-navy transition-colors">
              {issue.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-warmgray leading-relaxed">
              {issue.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
