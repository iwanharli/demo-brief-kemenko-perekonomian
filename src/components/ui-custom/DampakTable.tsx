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
    <div className="w-full">
      {/* Mobile Layout (Cards) - Shown on screens < lg */}
      <div className="grid grid-cols-1 gap-4 lg:hidden">
        {data.map((row, index) => {
          const arah = arahConfig[row.arah] || arahConfig.stabil;
          const Icon = arah.icon;

          return (
            <div 
              key={index} 
              className="bg-white rounded-xl border border-border/60 shadow-sm overflow-hidden flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Card Header: Kanal & Status */}
              <div className="px-5 py-3.5 bg-paper border-b border-border/40 flex justify-between items-center gap-4">
                <h3 className="font-serif font-bold text-ink text-lg leading-tight">
                  {row.kanal}
                </h3>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold border uppercase tracking-tight shadow-sm ${arah.class}`}>
                  <Icon className="h-3.5 w-3.5 flex-shrink-0" />
                  {arah.label}
                </span>
              </div>

              {/* Card Body: Kondisi */}
              <div className="p-5 space-y-4 flex-grow">
                <div className="relative">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-warmgray block mb-2 opacity-80">
                    Kondisi Saat Ini
                  </label>
                  <p className="text-[15px] text-warmgray/90 leading-relaxed font-medium">
                    {row.kondisi}
                  </p>
                </div>

                {row.footnote && (
                  <div className="text-[12px] text-amber bg-amber/5 border border-amber/20 rounded-lg px-4 py-3 leading-relaxed shadow-inner">
                    <span className="font-bold underline decoration-amber/30">Catatan:</span> {row.footnote}
                  </div>
                )}
              </div>

              {/* Card Footer: Implikasi */}
              <div className="px-5 py-5 bg-cream/10 border-t border-border/40 mt-auto">
                <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-crimson block mb-2">
                  Implikasi Singkat
                </label>
                <div className="relative pl-3 border-l-2 border-crimson/30">
                  <p className="text-[16px] font-bold text-ink leading-normal">
                    {row.implikasi}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop Layout (Table) - Shown on screens >= lg */}
      <div className="hidden lg:block w-full overflow-hidden rounded-xl border border-border/60 shadow-card">
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
                <th className="px-6 py-4 text-left font-mono text-xs font-semibold uppercase tracking-wider border-b border-white/10">
                  Kanal
                </th>
                <th className="px-6 py-4 text-left font-mono text-xs font-semibold uppercase tracking-wider border-b border-white/10">
                  Kondisi Saat Ini
                </th>
                <th className="px-6 py-4 text-left font-mono text-xs font-semibold uppercase tracking-wider border-b border-white/10">
                  Arah Risiko
                </th>
                <th className="px-6 py-4 text-left font-mono text-xs font-semibold uppercase tracking-wider border-b border-white/10">
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
                    <td className="px-6 py-5 align-top">
                      <span className="font-serif font-bold text-ink text-base leading-snug">
                        {row.kanal}
                      </span>
                    </td>
                    
                    {/* Kondisi */}
                    <td className="px-6 py-5 align-top">
                      <p className="text-[15px] text-warmgray leading-relaxed">
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
                    <td className="px-6 py-5 align-top">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold border whitespace-nowrap uppercase tracking-tight ${arah.class}`}>
                        <Icon className="h-3.5 w-3.5 flex-shrink-0" />
                        {arah.label}
                      </span>
                    </td>
                    
                    {/* Implikasi */}
                    <td className="px-6 py-5 align-top">
                      <div className="border-l-2 border-crimson/10 pl-3">
                        <p className="text-[15px] font-bold text-ink leading-relaxed">
                          {row.implikasi}
                        </p>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
