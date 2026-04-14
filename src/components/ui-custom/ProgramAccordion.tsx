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
    label: 'Atensi Tinggi',
    class: 'text-crimson bg-crimson/5 border-crimson/20',
    bar: 'bg-crimson',
    highlight: 'bg-crimson/5',
  },
  sedang: {
    label: 'Atensi Sedang',
    class: 'text-amber bg-amber/5 border-amber/20',
    bar: 'bg-amber',
    highlight: 'bg-amber/5',
  },
  rendah: {
    label: 'Atensi Rendah',
    class: 'text-forest bg-forest/5 border-forest/20',
    bar: 'bg-forest',
    highlight: 'bg-forest/5',
  },
};

export function ProgramAccordion({ programs }: ProgramAccordionProps) {
  return (
    <Accordion type="single" collapsible className="space-y-6">
      {programs.map((program, index) => {
        const atensi = atensiConfig[program.atensi] || atensiConfig.sedang;

        return (
          <AccordionItem
            key={program.id}
            value={program.id}
            className="border-none rounded-2xl bg-white shadow-card overflow-hidden transition-all duration-500 hover:shadow-elevated data-[state=open]:shadow-elevated group"
          >
            <AccordionTrigger className="relative px-0 py-0 items-center pr-8 hover:no-underline transition-all duration-300 [&[data-state=open]>div>.bar-indicator]:w-2.5 [&[data-state=open]>div>.content-wrapper]:bg-paper/40 [&>svg]:p-1.5 [&>svg]:rounded-full [&>svg]:bg-navy/5 [&>svg]:text-navy/60 [&>svg]:w-7 [&>svg]:h-7 transition-all">
              <div className="flex w-full min-h-[84px] sm:min-h-[76px]">
                {/* Vertical Bar Indicator */}
                <div className={`bar-indicator w-1.5 transition-all duration-500 ${atensi.bar}`} />
                
                {/* Trigger Content */}
                <div className="content-wrapper flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 w-full pl-6 pr-12 py-5 sm:py-4 transition-colors duration-300">
                  {/* Program Number & Title */}
                  <div className="flex items-center gap-4 flex-grow">
                    <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-navy/5 text-navy font-mono text-sm font-bold border border-navy/10 shadow-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-left font-serif font-bold text-lg sm:text-xl text-ink leading-tight group-hover:text-navy transition-colors">
                      {program.title}
                    </h3>
                  </div>

                  {/* Atensi Badge */}
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-[10px] font-bold border uppercase tracking-[0.15em] whitespace-nowrap self-start sm:self-auto shadow-sm ${atensi.class}`}>
                    {atensi.label}
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            
            <AccordionContent className="p-0">
              <div className="px-5 sm:px-8 pb-8 pt-3 bg-paper/20">
                {/* Layout Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-4">
                  
                  {/* Tujuan Strategis Module */}
                  <div className="bg-white rounded-xl border border-border/40 p-5 shadow-sm hover:border-navy/20 transition-all animate-fade-in [animation-delay:100ms]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5 text-navy">
                        <div className="p-2 rounded-lg bg-navy/5">
                          <Target className="h-4 w-4" />
                        </div>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider">
                          Tujuan Strategis
                        </span>
                      </div>
                      <span className="text-[9px] font-bold text-navy/40 px-2 py-0.5 rounded bg-navy/5 border border-navy/10 uppercase tracking-tighter">Strategis</span>
                    </div>
                    <p className="text-[15px] sm:text-[16px] text-ink/90 leading-relaxed font-medium">
                      {program.tujuan}
                    </p>
                  </div>

                  {/* Status Mingguan Module */}
                  <div className="bg-white rounded-xl border border-border/40 p-5 shadow-sm hover:border-slate/20 transition-all animate-fade-in [animation-delay:200ms]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5 text-slate">
                        <div className="p-2 rounded-lg bg-slate/5">
                          <Activity className="h-4 w-4" />
                        </div>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider">
                          Status Mingguan
                        </span>
                      </div>
                      <span className="text-[9px] font-bold text-slate/40 px-2 py-0.5 rounded bg-slate/5 border border-slate/10 uppercase tracking-tighter">Weekly Update</span>
                    </div>
                    <p className="text-[15px] text-warmgray leading-relaxed">
                      {program.status}
                    </p>
                  </div>

                  {/* Perkembangan Baru Module */}
                  <div className="bg-white rounded-xl border border-border/40 p-5 shadow-sm hover:border-forest/20 transition-all animate-fade-in [animation-delay:300ms]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5 text-forest">
                        <div className="p-2 rounded-lg bg-forest/5">
                          <TrendingUp className="h-4 w-4" />
                        </div>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider">
                          Perkembangan Baru
                        </span>
                      </div>
                      <span className="text-[9px] font-bold text-forest/40 px-2 py-0.5 rounded bg-forest/5 border border-forest/10 uppercase tracking-tighter">Latest Update</span>
                    </div>
                    <div className="border-l-2 border-forest/20 pl-4 py-1 italic">
                      <p className="text-[15px] sm:text-[16px] text-ink font-bold leading-relaxed">
                        {program.perkembangan}
                      </p>
                    </div>
                  </div>

                  {/* Indikator Kunci Module */}
                  <div className="bg-white rounded-xl border border-border/40 p-5 shadow-sm hover:border-amber/20 transition-all animate-fade-in [animation-delay:400ms]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5 text-amber">
                        <div className="p-2 rounded-lg bg-amber/5">
                          <BarChart3 className="h-4 w-4" />
                        </div>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider">
                          Indikator Kunci
                        </span>
                      </div>
                      <span className="text-[9px] font-bold text-amber/40 px-2 py-0.5 rounded bg-amber/5 border border-amber/10 uppercase tracking-tighter">Performance</span>
                    </div>
                    <p className="text-[14px] sm:text-[15px] text-ink/80 leading-relaxed font-serif italic">
                      {program.indikator}
                    </p>
                  </div>
                </div>

                {/* Risk & Barriers Analysis Analysis - Ultra Premium Executive Alert */}
                <div className={`mt-8 rounded-2xl border p-6 flex flex-col sm:flex-row gap-6 transition-all duration-300 shadow-sm animate-fade-in [animation-delay:500ms] ${atensi.highlight} ${atensi.class}`}>
                  <div className="flex-shrink-0 flex sm:flex-col items-center gap-3">
                    <div className={`p-4 rounded-2xl bg-white shadow-card border border-current/10 flex items-center justify-center`}>
                      <AlertTriangle className={`h-8 w-8`} />
                    </div>
                    <div className="hidden sm:block h-12 w-0.5 bg-current/20 opacity-50" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                       <span className="text-[12px] font-mono font-black uppercase tracking-[0.2em] opacity-80">
                        Analysis: Barriers & Risk
                      </span>
                      <div className="h-px flex-grow bg-current/10" />
                    </div>
                    <p className="text-[16px] sm:text-[17px] text-ink font-bold leading-snug">
                      {program.hambatan}
                    </p>
                    <div className="flex gap-2.5 pt-1">
                      <span className="text-[9px] font-bold bg-white/50 px-2 py-0.5 rounded-full border border-current/10 uppercase">High Atention</span>
                      <span className="text-[9px] font-bold bg-white/50 px-2 py-0.5 rounded-full border border-current/10 uppercase">Strategic Risk</span>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
