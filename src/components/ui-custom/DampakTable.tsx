import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface DampakRow {
  kanal: string;
  kondisi: string;
  arah: 'naik' | 'turun' | 'stabil' | string;
  implikasi: string;
  footnote?: string;
}

interface DampakTableProps {
  data: DampakRow[];
}

const arahConfig: Record<string, { icon: typeof TrendingUp; label: string; class: string }> = {
  naik: {
    icon: TrendingUp,
    label: 'Meningkat',
    class: 'text-crimson bg-crimson/10 border-crimson/20',
  },
  turun: {
    icon: TrendingDown,
    label: 'Melemah',
    class: 'text-forest bg-forest/10 border-forest/20',
  },
  stabil: {
    icon: Minus,
    label: 'Stabil/Mixed',
    class: 'text-amber bg-amber/10 border-amber/20',
  },
};

export function DampakTable({ data }: DampakTableProps) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-border/60 shadow-card">
      <div className="overflow-x-auto">
        <table 
          className="w-full text-sm border-collapse"
          style={{ tableLayout: 'fixed' }}
        >
          <colgroup>
            <col style={{ width: '14%' }} />
            <col style={{ width: '38%' }} />
            <col style={{ width: '14%' }} />
            <col style={{ width: '34%' }} />
          </colgroup>
          <thead>
            <tr className="bg-navy text-white">
              <th className="px-4 py-4 text-left font-mono text-xs font-semibold uppercase tracking-wider border-b border-white/10">
                Kanal
              </th>
              <th className="px-4 py-4 text-left font-mono text-xs font-semibold uppercase tracking-wider border-b border-white/10">
                Kondisi Saat Ini
              </th>
              <th className="px-4 py-4 text-left font-mono text-xs font-semibold uppercase tracking-wider border-b border-white/10">
                Arah Risiko
              </th>
              <th className="px-4 py-4 text-left font-mono text-xs font-semibold uppercase tracking-wider border-b border-white/10">
                Implikasi Singkat
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((row, index) => {
              const arah = arahConfig[row.arah] || arahConfig.stabil;
              const Icon = arah.icon;
              const isLast = index === data.length - 1;

              return (
                <tr
                  key={index}
                  className={`transition-colors ${
                    isLast ? '' : 'border-b border-border/40'
                  } hover:bg-cream/20`}
                >
                  {/* Kanal */}
                  <td className="px-4 py-4 align-top">
                    <span className="font-semibold text-ink text-sm leading-snug">
                      {row.kanal}
                    </span>
                  </td>
                  
                  {/* Kondisi */}
                  <td className="px-4 py-4 align-top">
                    <p className="text-sm text-warmgray leading-relaxed">
                      {row.kondisi}
                    </p>
                    {row.footnote && (
                      <div className="mt-3">
                        <div className="text-xs text-amber bg-amber/5 border border-amber/20 rounded-md px-3 py-2">
                          <span className="font-semibold">Catatan:</span> {row.footnote}
                        </div>
                      </div>
                    )}
                  </td>
                  
                  {/* Arah Risiko */}
                  <td className="px-4 py-4 align-top">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border whitespace-nowrap ${arah.class}`}>
                      <Icon className="h-3.5 w-3.5 flex-shrink-0" />
                      {arah.label}
                    </span>
                  </td>
                  
                  {/* Implikasi */}
                  <td className="px-4 py-4 align-top">
                    <p className="text-sm text-ink leading-relaxed">
                      {row.implikasi}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
