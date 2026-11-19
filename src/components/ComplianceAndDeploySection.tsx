import { useState } from 'react';
import { Check, Copy, ShieldCheck } from 'lucide-react';
import {
  BANK_ACCOUNTS,
  CORPORATE_PROFILE,
  GITHUB_DEPLOY_STEPS,
} from '../data/corporateData';
import { copyToClipboard } from '../utils/clipboard';

export default function ComplianceAndDeploySection() {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const handleCopyAccount = async (accountNumber: string) => {
    const ok = await copyToClipboard(accountNumber);
    if (ok) {
      setCopiedAccount(accountNumber);
      window.setTimeout(() => setCopiedAccount(null), 1800);
    }
  };

  return (
    <section
      id="compliance"
      className="border-b border-slate-800/80 bg-[#0A101E] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="mb-2 text-xs font-mono font-semibold text-emerald-400">
            Institutional Due Diligence &amp; Banking Verification
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
            Regulatory &amp; KYB Compliance Transparency Center
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            Published for banking partners, payment processors (Flutterwave / Mono), procurement
            boards, and institutional auditors verifying{' '}
            <strong className="text-white">{CORPORATE_PROFILE.legalName}</strong>.
          </p>
        </div>

        {/* Row 1: CAC Entity Profile + Explicit Operational Boundary */}
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="rounded-2xl border border-slate-800 bg-[#0E1525] p-6 sm:p-8 lg:col-span-7">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 shrink-0 text-emerald-400" />
                <div>
                  <h3 className="text-lg font-bold text-white">Verified Corporate Entity Profile</h3>
                  <p className="text-xs text-slate-400">
                    Corporate Affairs Commission (CAC) Federal Republic of Nigeria
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs font-semibold text-emerald-400">
                Active · Good Standing
              </span>
            </div>

            <dl className="grid gap-4 text-sm sm:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-[#080D18] p-3.5">
                <dt className="font-mono text-[11px] text-slate-400">Registered Legal Name</dt>
                <dd className="mt-1 font-bold text-white">{CORPORATE_PROFILE.legalName}</dd>
              </div>

              <div className="rounded-xl border border-slate-800 bg-[#080D18] p-3.5">
                <dt className="font-mono text-[11px] text-slate-400">CAC Registration Number</dt>
                <dd className="mt-1 font-mono font-bold text-emerald-400">
                  {CORPORATE_PROFILE.rcNumber}
                </dd>
              </div>

              <div className="rounded-xl border border-slate-800 bg-[#080D18] p-3.5">
                <dt className="font-mono text-[11px] text-slate-400">Date of Incorporation</dt>
                <dd className="mt-1 font-semibold text-white">
                  {CORPORATE_PROFILE.incorporatedDate}
                </dd>
              </div>

              <div className="rounded-xl border border-slate-800 bg-[#080D18] p-3.5">
                <dt className="font-mono text-[11px] text-slate-400">Settlement Banking Partner</dt>
                <dd className="mt-1 font-semibold text-white">
                  {CORPORATE_PROFILE.settlementBank}
                </dd>
              </div>

              <div className="rounded-xl border border-slate-800 bg-[#080D18] p-3.5 sm:col-span-2">
                <dt className="font-mono text-[11px] text-slate-400">
                  Registered Corporate Head Office
                </dt>
                <dd className="mt-1 font-semibold text-white">{CORPORATE_PROFILE.abujaHq}</dd>
              </div>

              <div className="rounded-xl border border-slate-800 bg-[#080D18] p-3.5 sm:col-span-2">
                <dt className="font-mono text-[11px] text-slate-400">
                  Regional Field Operations Hub
                </dt>
                <dd className="mt-1 font-semibold text-slate-200">
                  {CORPORATE_PROFILE.potiskumHub}
                </dd>
              </div>

              <div className="rounded-xl border border-slate-800 bg-[#080D18] p-3.5 sm:col-span-2">
                <dt className="font-mono text-[11px] text-slate-400">
                  Primary Business Classification
                </dt>
                <dd className="mt-1 font-semibold text-blue-400">
                  {CORPORATE_PROFILE.classification}
                </dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:col-span-5">
            <div className="space-y-4 rounded-2xl border border-slate-800 bg-[#0E1525] p-6 sm:p-7">
              <div className="font-mono text-xs font-semibold text-blue-400">
                Regulatory Scope &amp; Non-Custodial Model
              </div>
              <h3 className="text-lg font-bold text-white">
                Explicit Operational Boundary Statement
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                <strong className="text-white">
                  {CORPORATE_PROFILE.legalName} ({CORPORATE_PROFILE.rcNumber})
                </strong>{' '}
                operates strictly as an enterprise software engineering, cloud orchestration, and
                digital infrastructure provider.
              </p>

              <ul className="space-y-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>
                    <strong className="text-white">No Deposit-Taking:</strong> We do not accept
                    retail deposits, maintain customer stored-value wallets, or operate as a
                    commercial or microfinance bank.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>
                    <strong className="text-white">No Balance-Sheet Lending:</strong> We do not
                    issue unlicensed consumer loans. Telemetry and cash-flow scoring are surfaced
                    solely via API to licensed institutions.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>
                    <strong className="text-white">CBN-Licensed Execution Rails:</strong> Virtual
                    accounts, payment gateway collection, split settlements, and open-banking consent
                    execute exclusively via <strong className="text-emerald-400">Flutterwave</strong>{' '}
                    and <strong className="text-emerald-400">Mono</strong>.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#0E1525] p-6">
              <div className="mb-1 font-mono text-xs text-slate-400">Compliance &amp; KYB Desk</div>
              <div className="mb-3 text-sm font-semibold text-white">
                Direct Verification Channel for Banking &amp; PSP Reviewers
              </div>
              <div className="space-y-1.5 font-mono text-xs text-slate-300">
                <div>
                  Email:{' '}
                  <a
                    href={`mailto:${CORPORATE_PROFILE.primaryEmail}`}
                    className="text-emerald-400 hover:underline"
                  >
                    {CORPORATE_PROFILE.primaryEmail}
                  </a>{' '}
                  ·{' '}
                  <span className="text-blue-400">{CORPORATE_PROFILE.operationsEmail}</span>
                </div>
                <div>
                  Phone:{' '}
                  <a href="tel:+2347025692917" className="text-blue-400 hover:underline">
                    {CORPORATE_PROFILE.primaryPhone}
                  </a>{' '}
                  · <span>{CORPORATE_PROFILE.secondaryPhone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Corporate Settlement & Virtual Accounts Ledger */}
        <div id="accounts" className="rounded-2xl border border-slate-800 bg-[#0E1525] p-6 sm:p-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white">
                Corporate Settlement &amp; Virtual Accounts Schedule
              </h3>
              <p className="mt-0.5 text-xs text-slate-400">
                Verified NGN accounts for institutional invoice settlement and split disbursements
              </p>
            </div>
            <span className="font-mono text-xs text-slate-400">NGN Corporate Accounts</span>
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

        {/* Row 3: Zero-Domain GitHub Pages Deployment Guide */}
        <div
          id="github-deploy"
          className="rounded-2xl border border-slate-800 bg-[#0E1525] p-6 sm:p-8"
        >
          <div className="mb-6 max-w-3xl">
            <div className="mb-1.5 font-mono text-xs font-semibold text-blue-400">
              Zero-Cost Hosting Steps
            </div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Deploy This Portal &amp; Mail Console on GitHub Pages (No Domain Needed)
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              GitHub Pages provides a free HTTPS URL (
              <span className="font-mono text-emerald-400">
                https://your-github-username.github.io/unified-multi-concept/
              </span>
              ) with zero domain registration fees.
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
  );
}
