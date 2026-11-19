import { useState } from 'react';
import { ArrowRight, Server } from 'lucide-react';
import heroComputeImg from '../assets/images/umc_compute_infrastructure_1795120229411.jpg';
import { CORPORATE_PROFILE } from '../data/corporateData';

const ARCHITECTURE_LAYERS = [
  {
    layer: '01 · AI Compute & Telemetry',
    title: 'Metered Edge & In-Transit Inference Nodes',
    detail: 'NGN / Token Quotas',
  },
  {
    layer: '02 · KYB / KYC & Open Banking',
    title: 'Mono Prove + Live CAC Status Verification',
    detail: 'Automated Verification',
  },
  {
    layer: '03 · Split Settlement Rails',
    title: 'Flutterwave Virtual Accounts & PSA Splits',
    detail: 'T+0 / T+1 Subaccounts',
  },
];

const HERO_METRICS = [
  { value: '774', label: 'Target Nigerian LGAs' },
  { value: '36 + FCT', label: 'National Coverage Scope' },
  { value: '2 Hubs', label: 'Abuja HQ & Potiskum Ops' },
  { value: '99.98%', label: 'Target API Uptime SLA' },
];

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="top"
      className="bg-infrastructure-grid border-b border-slate-800/80 pt-10 pb-14 sm:pt-14 sm:pb-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Quiet Unboxed Corporate Trust Metadata Line */}
        <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-slate-400">
          <span className="text-emerald-400 font-semibold">{CORPORATE_PROFILE.rcNumber}</span>
          <span aria-hidden="true">·</span>
          <span>Abuja HQ &amp; Potiskum Regional Ops</span>
          <span aria-hidden="true">·</span>
          <span>Non-Bank Software &amp; Infrastructure Vendor</span>
        </div>

        {/* Two-Column Hero Split */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column: Proposition & Regulatory Classification */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.1rem] lg:leading-[1.1] [text-wrap:balance]">
                Software-Defined <span className="text-emerald-400">AI Compute</span> &amp;
                Grassroots Fintech Orchestration Across Nigeria&apos;s 774 LGAs
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                <strong className="text-white">{CORPORATE_PROFILE.legalName}</strong> engineers
                modular enterprise operating systems, in-transit AI compute virtualization nodes,
                and automated payment orchestration middleware for schools, utilities, and
                institutions across all 36 states and the FCT.
              </p>

              {/* Regulatory Classification Notice (Hairline Border, No Left Stripe) */}
              <div className="rounded-xl border border-slate-800 bg-[#0E1525] p-4 sm:p-5">
                <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                  <strong className="text-white">Regulatory Classification:</strong>{' '}
                  {CORPORATE_PROFILE.legalName} operates strictly as an Information Technology, AI
                  Compute &amp; Software Orchestration Vendor—not a deposit-taking bank or
                  unlicensed lender. All settlement accounts, virtual subaccounts, and open-banking
                  consents execute through CBN-licensed partners{' '}
                  <strong className="text-white">Flutterwave</strong> and{' '}
                  <strong className="text-white">Mono</strong>.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
              <a
                href="#software-dev"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 hover:bg-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                <span>Explore Software &amp; API Stack</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#compliance"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-xl border border-slate-700 bg-[#0E1525] px-6 py-3.5 text-sm font-semibold text-slate-100 hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                Verify Corporate Credentials
              </a>
            </div>
          </div>

          {/* Right Column: Operations Center Image + Architecture Layers */}
          <div className="lg:col-span-5 flex flex-col rounded-2xl border border-slate-800 bg-[#0E1525] overflow-hidden">
            <div className="relative aspect-[16/9] w-full bg-[#0A101E] overflow-hidden border-b border-slate-800">
              {!imgError ? (
                <img
                  src={heroComputeImg}
                  alt="UNIFIED MULTI CONCEPT LTD enterprise software operations and compute center"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#0E1525] to-[#080D18] p-6 text-center">
                  <Server className="h-8 w-8 text-emerald-400" />
                  <span className="text-xs font-mono text-slate-300">
                    UMC Enterprise Operations Hub · Abuja &amp; Potiskum
                  </span>
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E1525] via-transparent to-transparent opacity-70" />
            </div>

            <div className="flex-1 divide-y divide-slate-800/80 p-5">
              {ARCHITECTURE_LAYERS.map((item) => (
                <div
                  key={item.layer}
                  className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-emerald-400">{item.layer}</div>
                    <div className="truncate text-sm font-semibold text-white mt-0.5">
                      {item.title}
                    </div>
                  </div>
                  <span className="whitespace-nowrap shrink-0 text-xs font-mono text-slate-400">
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column National Footprint Metrics Strip */}
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-slate-800 bg-[#0E1525] p-5 sm:grid-cols-4 sm:gap-6">
          {HERO_METRICS.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <div className="font-mono text-xl font-bold tabular-nums text-white sm:text-2xl">
                {metric.value}
              </div>
              <div className="text-xs text-slate-400">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
