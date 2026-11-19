import { CORPORATE_PROFILE, type LegalDocument } from '../data/corporateData';

interface FooterProps {
  onOpenLegal: (id: LegalDocument['id']) => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="bg-[#060A13] pt-12 pb-10 text-sm text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-slate-800/80 pb-10 md:grid-cols-12">
          <div className="space-y-2.5 md:col-span-5">
            <div className="text-base font-bold text-white">
              UNIFIED MULTI CONCEPT <span className="text-emerald-400">LTD</span>
            </div>
            <p className="font-mono text-xs text-emerald-400">
              {CORPORATE_PROFILE.rcNumber} · Incorporated {CORPORATE_PROFILE.incorporatedDate}
            </p>
            <p className="text-xs leading-relaxed text-slate-400">
              Enterprise software engineering, software-defined AI compute virtualization, and
              payment orchestration infrastructure vendor serving institutions across Nigeria&apos;s
              774 LGAs. Non-bank technology provider.
            </p>
            <p className="text-xs text-slate-400">
              <strong className="text-slate-200">HQ:</strong> {CORPORATE_PROFILE.abujaHq} ·{' '}
              <strong className="text-slate-200">Ops:</strong> {CORPORATE_PROFILE.potiskumHub}
            </p>
          </div>

          <div className="space-y-2.5 md:col-span-4">
            <div className="font-mono text-xs font-semibold text-slate-200">
              Platform &amp; Compliance
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#solutions" className="hover:text-emerald-400 transition-colors">
                  AI Compute &amp; 774-LGA Infrastructure
                </a>
              </li>
              <li>
                <a href="#software-dev" className="hover:text-emerald-400 transition-colors">
                  Developer API &amp; Split-Settlement Sandbox
                </a>
              </li>
              <li>
                <a href="#corporate-mail" className="hover:text-emerald-400 transition-colors">
                  Corporate Mail Dispatch Console
                </a>
              </li>
              <li>
                <a href="#compliance" className="hover:text-emerald-400 transition-colors">
                  CAC, KYB &amp; Settlement Accounts
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5 md:col-span-3">
            <div className="font-mono text-xs font-semibold text-slate-200">
              Governance &amp; Legal
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="text-left hover:text-emerald-400 transition-colors"
                >
                  Privacy &amp; NDPR Data Protection Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="text-left hover:text-emerald-400 transition-colors"
                >
                  Enterprise Software Terms of Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('sla')}
                  className="text-left hover:text-emerald-400 transition-colors"
                >
                  Infrastructure Uptime &amp; API SLA
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${CORPORATE_PROFILE.primaryEmail}`}
                  className="font-mono hover:text-emerald-400 transition-colors"
                >
                  {CORPORATE_PROFILE.primaryEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-slate-500 sm:flex-row">
          <div>
            &copy; 2023–2026 {CORPORATE_PROFILE.legalName} ({CORPORATE_PROFILE.rcNumber}). All
            rights reserved.
          </div>
          <div className="font-mono text-[11px]">
            Settlement Partner: GTBank Corporate · PSP Rails: Flutterwave &amp; Mono
          </div>
        </div>
      </div>
    </footer>
  );
}
