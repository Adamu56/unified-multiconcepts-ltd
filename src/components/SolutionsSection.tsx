import { Check } from 'lucide-react';
import { CORPORATE_PROFILE, LGA_ZONES, SOLUTION_PILLARS } from '../data/corporateData';

export default function SolutionsSection() {
  return (
    <section id="solutions" className="border-b border-slate-800/80 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="text-xs font-mono text-emerald-400 font-semibold mb-2">
            Enterprise Software Stack
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
            Core Solutions &amp; 774-LGA Infrastructure Architecture
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            Modular platforms engineered to connect physical institutional operations—schools,
            solar micro-grids, and campus telecom nodes—with automated Naira split settlements.
          </p>
        </div>

        {/* 3 Core Solution Pillars with Editorial Numbering */}
        <div className="grid gap-6 md:grid-cols-3">
          {SOLUTION_PILLARS.map((pillar) => (
            <article
              key={pillar.index}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#0E1525] p-6 sm:p-7"
            >
              <div>
                <div className="mb-3 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="font-semibold text-emerald-400">{pillar.index}</span>
                  <span aria-hidden="true">·</span>
                  <span>{pillar.category}</span>
                </div>
                <h3 className="text-lg font-bold leading-snug text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {pillar.description}
                </p>
              </div>

              <ul className="mt-6 space-y-2 border-t border-slate-800 pt-4 text-xs text-slate-300">
                {pillar.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* 774-LGA Dual-Hub National Coverage Ledger */}
        <div
          id="lga-infrastructure"
          className="mt-10 rounded-2xl border border-slate-800 bg-[#0E1525] p-6 sm:p-8"
        >
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl space-y-2">
              <div className="text-xs font-mono font-semibold text-emerald-400">
                National Coverage Architecture
              </div>
              <h3 className="text-xl font-bold text-white">
                Dual-Hub Engineering &amp; Field Deployment Model
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                Headquartered at <strong className="text-white">{CORPORATE_PROFILE.abujaHq}</strong>{' '}
                for federal compliance and cloud orchestration, alongside our regional operations base
                at <strong className="text-white">{CORPORATE_PROFILE.potiskumHub}</strong> driving
                onboarding across Northern and Central LGAs.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:shrink-0">
              {LGA_ZONES.map((zone) => (
                <div
                  key={zone.region}
                  className="rounded-xl border border-slate-800 bg-[#080D18] px-4 py-3.5"
                >
                  <div className="text-[11px] font-mono text-slate-400">{zone.region}</div>
                  <div className="mt-1 font-mono text-lg font-bold tabular-nums text-white">
                    {zone.count} LGAs
                  </div>
                  <div className="mt-0.5 text-[11px] text-slate-500">{zone.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
