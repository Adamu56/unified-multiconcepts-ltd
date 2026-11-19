import { useState } from 'react';
import { ArrowLeft, Check, Copy, Menu, X } from 'lucide-react';
import MailConsoleSection from './components/MailConsoleSection';
import LegalModal from './components/LegalModal';
import {
  BANK_ACCOUNTS,
  CORPORATE_PROFILE,
  GITHUB_DEPLOY_STEPS,
  LEGAL_DOCUMENTS,
  type LegalDocument,
} from './data/corporateData';
import { copyToClipboard } from './utils/clipboard';

const MAIL_NAV_LINKS = [
  { href: '#corporate-mail', label: 'Mail Composer' },
  { href: '#dispatch-desks', label: 'Dispatch Desks' },
  { href: '#accounts-reference', label: 'Accounts' },
  { href: '#github-deploy', label: 'GitHub Hosting' },
];

export default function MailApp() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocument['id'] | null>(null);

  const handleCopyAccount = async (accountNumber: string) => {
    const ok = await copyToClipboard(accountNumber);
    if (ok) {
      setCopiedAccount(accountNumber);
      window.setTimeout(() => setCopiedAccount(null), 1800);
    }
  };

  return (
    <div className="min-h-screen bg-[#080D18] text-slate-100">
      {/* Dedicated Top Bar for Email Infrastructure */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#080D18]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6 lg:px-8">
          <a
            href="./mail.html"
            className="whitespace-nowrap shrink-0 rounded-md text-sm font-bold tracking-tight text-white sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            UNIFIED MULTI CONCEPT <span className="text-emerald-400">MAIL</span>
          </a>

          <nav
            aria-label="Mail Infrastructure Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300"
          >
            {MAIL_NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 rounded py-1 hover:text-white hover:underline underline-offset-4 decoration-emerald-400/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="./"
              className="hidden sm:inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 rounded-xl border border-slate-700 bg-[#0E1525] px-4 py-2 text-xs font-semibold text-slate-100 hover:bg-slate-800 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Corporate Website</span>
            </a>

            <button
              type="button"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-[#0E1525] text-slate-200 hover:text-white"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav
            aria-label="Mobile Mail Navigation"
            className="lg:hidden space-y-1 border-t border-slate-800/80 bg-[#0A101E] px-4 py-3"
          >
            {MAIL_NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-800/70 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="./"
              className="mt-2 block rounded-xl border border-slate-700 bg-[#0E1525] px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Back to Corporate Website
            </a>
          </nav>
        )}
      </header>

      <main>
        {/* Dedicated Email Infrastructure Hero & Dispatch Desks */}
        <section
          id="dispatch-desks"
          className="bg-infrastructure-grid border-b border-slate-800/80 pt-10 pb-12 sm:pt-14 sm:pb-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-slate-400">
              <span className="font-semibold text-emerald-400">{CORPORATE_PROFILE.rcNumber}</span>
              <span aria-hidden="true">·</span>
              <span>Standalone Email Infrastructure</span>
              <span aria-hidden="true">·</span>
              <span>Zero-Domain GitHub Pages Ready</span>
            </div>

            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="space-y-4 lg:col-span-7">
                <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl [text-wrap:balance]">
                  Corporate Mail Dispatch &amp; Official Correspondence Infrastructure
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-slate-300">
                  Dedicated institutional correspondence workbench for{' '}
                  <strong className="text-white">{CORPORATE_PROFILE.legalName}</strong>. Draft
                  CAC-signed KYB disclosures, 774-LGA project proposals, and settlement notices
                  separately from the main corporate website.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-[#0E1525] p-5 space-y-3 lg:col-span-5">
                <div className="border-b border-slate-800 pb-2.5 font-mono text-xs font-semibold text-emerald-400">
                  Verified Dispatch Mailboxes &amp; Sign-Off Lines
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between gap-2 rounded-xl border border-slate-800 bg-[#080D18] px-3.5 py-2.5">
                    <span className="text-slate-400">Primary Desk</span>
                    <span className="font-mono text-emerald-400">
                      {CORPORATE_PROFILE.primaryEmail}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 rounded-xl border border-slate-800 bg-[#080D18] px-3.5 py-2.5">
                    <span className="text-slate-400">Operations Desk</span>
                    <span className="font-mono text-blue-400">
                      {CORPORATE_PROFILE.operationsEmail}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 rounded-xl border border-slate-800 bg-[#080D18] px-3.5 py-2.5">
                    <span className="text-slate-400">Direct Voice / WhatsApp</span>
                    <span className="font-mono tabular-nums text-slate-200">
                      {CORPORATE_PROFILE.primaryPhone} · {CORPORATE_PROFILE.secondaryPhone}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Email Composer Workbench */}
        <MailConsoleSection />

        {/* Settlement Account Reference for Email Dispatches */}
        <section
          id="accounts-reference"
          className="border-b border-slate-800/80 bg-[#0A101E] py-14 sm:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="rounded-2xl border border-slate-800 bg-[#0E1525] p-6 sm:p-8">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-white">
                    Verified Sign-Off Banking &amp; Virtual Account Reference
                  </h2>
                  <p className="mt-0.5 text-xs text-slate-400">
                    Copy any corporate account number to verify or include in official correspondence
                  </p>
                </div>
                <span className="font-mono text-xs text-emerald-400">
                  {CORPORATE_PROFILE.rcNumber}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 font-mono text-xs text-slate-400">
                      <th className="py-3 pr-4">Role</th>
                      <th className="py-3 pr-4">Bank</th>
                      <th className="py-3 pr-4">Account Number</th>
                      <th className="py-3 pr-4">Account Name</th>
                      <th className="py-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {BANK_ACCOUNTS.map((acct) => (
                      <tr key={acct.accountNumber} className="hover:bg-slate-800/30 transition-colors">
                        <td
                          className={`py-3.5 pr-4 font-semibold ${
                            acct.isPrimary ? 'text-emerald-400' : 'text-slate-300'
                          }`}
                        >
                          {acct.role}
                        </td>
                        <td className="py-3.5 pr-4 text-slate-200">{acct.bank}</td>
                        <td
                          className={`py-3.5 pr-4 font-mono tabular-nums font-semibold ${
                            acct.isPrimary ? 'text-white' : 'text-blue-400'
                          }`}
                        >
                          {acct.accountNumber}
                        </td>
                        <td className="py-3.5 pr-4 text-slate-300">{acct.accountName}</td>
                        <td className="py-3.5 text-right">
                          <button
                            type="button"
                            onClick={() => handleCopyAccount(acct.accountNumber)}
                            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-slate-700 bg-[#080D18] px-2.5 py-1.5 font-mono text-[11px] text-slate-200 hover:bg-slate-800 transition-colors"
                          >
                            {copiedAccount === acct.accountNumber ? (
                              <>
                                <Check className="h-3 w-3 text-emerald-400" />
                                <span className="text-emerald-400">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3 w-3" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Zero-Domain GitHub Pages Deployment Reference */}
            <div
              id="github-deploy"
              className="rounded-2xl border border-slate-800 bg-[#0E1525] p-6 sm:p-8"
            >
              <div className="mb-6 max-w-3xl">
                <div className="mb-1.5 font-mono text-xs font-semibold text-blue-400">
                  Zero-Domain Hosting
                </div>
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  GitHub Pages Static Deployment Architecture
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  This mail console builds to a standalone static entry (<span className="font-mono text-emerald-400">mail.html</span>) alongside the main corporate website (<span className="font-mono text-emerald-400">index.html</span>).
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-4">
                {GITHUB_DEPLOY_STEPS.map((item) => (
                  <div
                    key={item.step}
                    className="space-y-1.5 rounded-xl border border-slate-800 bg-[#080D18] p-4"
                  >
                    <div className="font-mono text-xs font-bold text-emerald-400">{item.step}</div>
                    <div className="text-sm font-bold text-white">{item.title}</div>
                    <p className="text-xs leading-relaxed text-slate-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#060A13] py-8 text-xs text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div>
            <strong className="text-white">{CORPORATE_PROFILE.legalName}</strong> (
            {CORPORATE_PROFILE.rcNumber}) · Corporate Mail Infrastructure
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="./" className="text-emerald-400 hover:underline">
              Corporate Website
            </a>
            <button
              type="button"
              onClick={() => setActiveLegalDoc('privacy')}
              className="hover:text-white transition-colors"
            >
              NDPR Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setActiveLegalDoc('terms')}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </footer>

      <LegalModal
        document={activeLegalDoc ? LEGAL_DOCUMENTS[activeLegalDoc] : null}
        onClose={() => setActiveLegalDoc(null)}
      />
    </div>
  );
}
