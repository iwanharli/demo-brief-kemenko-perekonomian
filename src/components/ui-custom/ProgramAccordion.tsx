import { Target, Activity, TrendingUp, BarChart3, AlertTriangle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { Program } from '@/data/briefingData';

interface ProgramAccordionProps {
  programs: Program[];
}

const atensiConfig = {
  tinggi: {
    label: 'Atensi: TINGGI',
    class: 'bg-crimson/10 text-crimson border-crimson/20',
  },
  sedang: {
    label: 'Atensi: SEDANG',
    class: 'bg-amber/10 text-amber border-amber/20',
  },
  rendah: {
    label: 'Atensi: RENDAH',
    class: 'bg-forest/10 text-forest border-forest/20',
  },
};

export function ProgramAccordion({ programs }: ProgramAccordionProps) {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {programs.map((program, index) => {
        const atensi = atensiConfig[program.atensi];

        return (
          <AccordionItem
            key={program.id}
            value={program.id}
            className="border border-border/60 rounded-xl bg-white shadow-card overflow-hidden transition-all duration-300 hover:shadow-soft data-[state=open]:shadow-soft"
          >
            <AccordionTrigger className="px-4 sm:px-6 py-4 hover:no-underline hover:bg-cream/30 transition-colors [&[data-state=open]>svg]:rotate-180">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 w-full pr-4">
                <span className="text-left text-base sm:text-lg font-semibold text-ink">
                  {index + 1}. {program.title}
                </span>
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border self-start sm:self-auto ${atensi.class}`}>
                  {atensi.label}
                </span>
              </div>
            </AccordionTrigger>
            
            <AccordionContent className="px-4 sm:px-6 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Tujuan Strategis */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-navy">
                    <Target className="h-4 w-4" />
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                      Tujuan Strategis
                    </span>
                  </div>
                  <p className="text-sm text-ink leading-relaxed">
                    {program.tujuan}
                  </p>
                </div>

                {/* Status Mingguan */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-navy">
                    <Activity className="h-4 w-4" />
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                      Status Mingguan
                    </span>
                  </div>
                  <p className="text-sm text-ink leading-relaxed">
                    {program.status}
                  </p>
                </div>

                {/* Perkembangan Baru */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-navy">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                      Perkembangan Baru
                    </span>
                  </div>
                  <p className="text-sm text-ink leading-relaxed">
                    {program.perkembangan}
                  </p>
                </div>

                {/* Indikator */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-navy">
                    <BarChart3 className="h-4 w-4" />
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                      Indikator Kunci
                    </span>
                  </div>
                  <p className="text-sm text-ink leading-relaxed">
                    {program.indikator}
                  </p>
                </div>
              </div>

              {/* Hambatan */}
              <div className="mt-6 rounded-lg bg-crimson/5 border border-crimson/10 p-4">
                <div className="flex items-center gap-2 text-crimson mb-2">
                  <AlertTriangle className="h-4 w-4" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                    Hambatan / Risiko
                  </span>
                </div>
                <p className="text-sm text-ink leading-relaxed">
                  {program.hambatan}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
