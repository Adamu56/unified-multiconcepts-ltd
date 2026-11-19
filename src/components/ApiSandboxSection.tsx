import { useMemo, useState } from 'react';
import { Check, Copy, Play } from 'lucide-react';
import { API_SANDBOX_PRESETS, type ApiSandboxPreset } from '../data/corporateData';
import { copyToClipboard, formatNaira } from '../utils/clipboard';

export default function ApiSandboxSection() {
  // Split-Settlement Simulator State
  const [grossAmount, setGrossAmount] = useState(250000);
  const [instPct, setInstPct] = useState(82);
  const [vendorPct, setVendorPct] = useState(13);
  const [infraPct, setInfraPct] = useState(5);

  // API Sandbox State
  const [activeTab, setActiveTab] = useState<ApiSandboxPreset['id']>('kyb');
  const [isExecuting, setIsExecuting] = useState(false);
  const [responseMeta, setResponseMeta] = useState('HTTP 200 OK · 142ms');
  const [copiedCode, setCopiedCode] = useState(false);

  const splitResult = useMemo(() => {
    const safeInst = Math.max(0, Number.isFinite(instPct) ? instPct : 0);
    const safeVend = Math.max(0, Number.isFinite(vendorPct) ? vendorPct : 0);
    const safeInfra = Math.max(0, Number.isFinite(infraPct) ? infraPct : 0);
    const sum = safeInst + safeVend + safeInfra;
    const isNormalized = sum !== 100 && sum > 0;
    const divisor = sum > 0 ? sum : 100;

    return {
      isNormalized,
      instAmount: (grossAmount * safeInst) / divisor,
      vendorAmount: (grossAmount * safeVend) / divisor,
      infraAmount: (grossAmount * safeInfra) / divisor,
    };
  }, [grossAmount, instPct, vendorPct, infraPct]);

  const currentPreset =
    API_SANDBOX_PRESETS.find((preset) => preset.id === activeTab) ?? API_SANDBOX_PRESETS[0];

  const handleRunSandbox = () => {
    setIsExecuting(true);
    setResponseMeta('Executing sandbox request...');
    const latency = Math.floor(Math.random() * 85) + 95;
    window.setTimeout(() => {
      setIsExecuting(false);
      setResponseMeta(`HTTP 200 OK · ${latency}ms · ${new Date().toISOString()}`);
    }, 200);
  };

  const handleCopyPayload = async () => {
    const ok = await copyToClipboard(currentPreset.code);
    if (ok) {
      setCopiedCode(true);
      window.setTimeout(() => setCopiedCode(false), 1800);
    }
  };

  return (
    <section
      id="software-dev"
      className="border-b border-slate-800/80 bg-[#0A101E] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-2 text-xs font-mono font-semibold text-electric-400">
              Software Development &amp; Developer Portal
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Interactive API &amp; Split-Settlement Orchestrator
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
              Inspect how UNIFIED MULTICONCEPTS LTD orchestrates{' '}
              <strong className="text-slate-200">Mono Prove &amp; CAC KYB</strong>,{' '}
              <strong className="text-slate-200">Flutterwave Virtual Account Splits</strong>, and{' '}
              <strong className="text-slate-200">Metered AI Compute Gateways</strong>.
            </p>
          </div>

          <div className="self-start rounded-xl border border-slate-800 bg-[#0E1525] px-3.5 py-2 font-mono text-xs text-slate-400 lg:self-auto">
            Base URL:{' '}
            <span className="text-emerald-400">https://api.unifiedmulticonceptsltd.com/v1</span>
          </div>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-12">
          {/* Left Panel: Flutterwave PSA Split Simulator */}
          <div className="space-y-5 rounded-2xl border border-slate-800 bg-[#0E1525] p-6 lg:col-span-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-base font-bold text-white">Flutterwave PSA Split Simulator</h3>
                <p className="mt-0.5 text-xs text-slate-400">
                  Automated Naira disbursement calculation
                </p>
              </div>
              <span className="font-mono text-xs font-semibold text-emerald-400">NGN Live</span>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <label htmlFor="txAmountSlider" className="text-xs font-medium text-slate-300">
                  Gross Institutional Collection
                </label>
                <span className="font-mono text-base font-bold tabular-nums text-emerald-400">
                  ₦{grossAmount.toLocaleString('en-NG')}
                </span>
              </div>
              <input
                id="txAmountSlider"
                type="range"
                min={10000}
                max={5000000}
                step={10000}
                value={grossAmount}
                onChange={(e) => setGrossAmount(Number(e.target.value))}
                className="umc-slider w-full"
              />
              <div className="flex justify-between font-mono text-[11px] tabular-nums text-slate-500">
                <span>₦10,000</span>
                <span>₦2,500,000</span>
                <span>₦5,000,000</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              <div>
                <label
                  htmlFor="instPct"
                  className="mb-1 block font-mono text-[11px] text-slate-400"
                >
                  Institution %
                </label>
                <input
                  id="instPct"
                  type="number"
                  min={0}
                  max={100}
                  value={instPct}
                  onChange={(e) => setInstPct(Math.max(0, Number(e.target.value)))}
                  className="w-full rounded-xl border border-slate-700 bg-[#080D18] px-3 py-2 font-mono text-sm tabular-nums text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="vendorPct"
                  className="mb-1 block font-mono text-[11px] text-slate-400"
                >
                  LPO Vendor %
                </label>
                <input
                  id="vendorPct"
                  type="number"
                  min={0}
                  max={100}
                  value={vendorPct}
                  onChange={(e) => setVendorPct(Math.max(0, Number(e.target.value)))}
                  className="w-full rounded-xl border border-slate-700 bg-[#080D18] px-3 py-2 font-mono text-sm tabular-nums text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="infraPct"
                  className="mb-1 block font-mono text-[11px] text-slate-400"
                >
                  UMC SaaS %
                </label>
                <input
                  id="infraPct"
                  type="number"
                  min={0}
                  max={100}
                  value={infraPct}
                  onChange={(e) => setInfraPct(Math.max(0, Number(e.target.value)))}
                  className="w-full rounded-xl border border-slate-700 bg-[#080D18] px-3 py-2 font-mono text-sm tabular-nums text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            {splitResult.isNormalized && (
              <p className="font-mono text-xs text-amber-400">
                Note: Percentages normalized proportionally to 100% total split.
              </p>
            )}

            <div className="divide-y divide-slate-800 rounded-xl border border-slate-800 bg-[#080D18] px-4">
              <div className="flex items-center justify-between gap-3 py-3">
                <div className="min-w-0">
                  <div className="truncate text-xs font-semibold text-white">
                    1. School / Enterprise Settlement
                  </div>
                  <div className="font-mono text-[11px] text-slate-400">RS_UMC_INST_001</div>
                </div>
                <div className="whitespace-nowrap font-mono text-sm font-bold tabular-nums text-emerald-400">
                  {formatNaira(splitResult.instAmount)}
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 py-3">
                <div className="min-w-0">
                  <div className="truncate text-xs font-semibold text-white">
                    2. Verified LPO / Energy Partner
                  </div>
                  <div className="font-mono text-[11px] text-slate-400">RS_UMC_VEND_014</div>
                </div>
                <div className="whitespace-nowrap font-mono text-sm font-bold tabular-nums text-blue-400">
                  {formatNaira(splitResult.vendorAmount)}
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 py-3">
                <div className="min-w-0">
                  <div className="truncate text-xs font-semibold text-white">
                    3. UMC Software &amp; Compute Fee
                  </div>
                  <div className="font-mono text-[11px] text-slate-400">GTBank · SAAS_FEE</div>
                </div>
                <div className="whitespace-nowrap font-mono text-sm font-bold tabular-nums text-amber-300">
                  {formatNaira(splitResult.infraAmount)}
                </div>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              Funds settle directly from Flutterwave&apos;s CBN-licensed escrow infrastructure into
              each verified subaccount—UNIFIED MULTICONCEPTS LTD never holds customer deposits.
            </p>
          </div>

          {/* Right Panel: Interactive API Terminal & Manifest */}
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0E1525] lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 bg-[#080D18] px-4 py-3">
              <div className="flex flex-wrap items-center gap-1.5" role="tablist">
                {API_SANDBOX_PRESETS.map((preset) => {
                  const active = preset.id === activeTab;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveTab(preset.id)}
                      className={`whitespace-nowrap shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                        active
                          ? 'bg-emerald-500 text-slate-950'
                          : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      {preset.label}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleCopyPayload}
                  className="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 font-mono text-xs text-slate-200 hover:bg-slate-700 transition-colors"
                >
                  {copiedCode ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Payload</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleRunSandbox}
                  className="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-500 transition-colors"
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>Run Sandbox Test</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-slate-800/80 bg-[#0B111F] px-5 py-2.5 font-mono text-xs">
              <div className="flex items-center gap-2.5 overflow-x-auto">
                <span className="font-bold text-emerald-400">{currentPreset.method}</span>
                <span className="text-slate-300">{currentPreset.endpoint}</span>
              </div>
              <span className="hidden text-slate-500 sm:inline">{currentPreset.languageLabel}</span>
            </div>

            <div className="overflow-x-auto bg-[#060911] p-5">
              <pre className="font-mono text-xs leading-relaxed text-slate-200 sm:text-[13px]">
                {currentPreset.code}
              </pre>
            </div>

            <div className="border-t border-slate-800 bg-[#080D18] p-5">
              <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                <span className="font-semibold text-slate-300">Sandbox Execution Response</span>
                <span className="text-[11px] tabular-nums text-emerald-400">{responseMeta}</span>
              </div>
              <pre
                className={`max-h-64 overflow-x-auto rounded-xl border border-slate-800 bg-[#0B111F] p-4 font-mono text-xs leading-relaxed text-emerald-300 transition-opacity ${
                  isExecuting ? 'opacity-50' : 'opacity-100'
                }`}
              >
                {currentPreset.output}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
