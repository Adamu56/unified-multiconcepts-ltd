import { useMemo, useState } from 'react';
import { Check, Copy, ExternalLink, Mail } from 'lucide-react';
import {
  CORPORATE_MAILBOXES,
  CORPORATE_PROFILE,
  MAIL_PRESETS,
  type MailPreset,
} from '../data/corporateData';
import { copyToClipboard } from '../utils/clipboard';

export default function MailConsoleSection() {
  const [selectedPresetId, setSelectedPresetId] = useState<MailPreset['id']>('kyb');
  const [senderMailbox, setSenderMailbox] = useState(CORPORATE_PROFILE.primaryEmail);
  const [recipientEmail, setRecipientEmail] = useState('compliance@partner-institution.ng');
  const [ccEmail, setCcEmail] = useState(CORPORATE_PROFILE.operationsEmail);
  const [senderPhone, setSenderPhone] = useState(CORPORATE_PROFILE.primaryPhone);
  const [subject, setSubject] = useState(MAIL_PRESETS[0].subject);
  const [body, setBody] = useState(MAIL_PRESETS[0].body);
  const [includeBankFooter, setIncludeBankFooter] = useState(true);
  const [copiedMail, setCopiedMail] = useState(false);

  const handleSelectPreset = (preset: MailPreset) => {
    setSelectedPresetId(preset.id);
    setSubject(preset.subject);
    setBody(preset.body);
  };

  const fullFormattedBody = useMemo(() => {
    let signature = `\n\nBest regards,\n\n${CORPORATE_PROFILE.legalName} (${CORPORATE_PROFILE.rcNumber})\nWeb: https://${CORPORATE_PROFILE.domain}\nIncorporated: ${CORPORATE_PROFILE.incorporatedDate}\nHQ: ${CORPORATE_PROFILE.abujaHq}\nRegional Hub: ${CORPORATE_PROFILE.potiskumHub}\nEmail: ${senderMailbox} | Tel: ${senderPhone}`;

    if (includeBankFooter) {
      signature += `\nSettlement Bank (GTBank): 0766139326 (${CORPORATE_PROFILE.accountHolderName})\nWema Virtual Accounts: 8548944294, 8548944295, 8548944296, 8548944297`;
    }

    return body.trimEnd() + signature;
  }, [body, senderMailbox, senderPhone, includeBankFooter]);

  const mailtoHref = useMemo(() => {
    const trimmedTo = recipientEmail.trim();
    const trimmedCc = ccEmail.trim();
    const trimmedSubj = subject.trim();
    const query = new URLSearchParams();
    if (trimmedCc) query.set('cc', trimmedCc);
    if (trimmedSubj) query.set('subject', trimmedSubj);
    query.set('body', fullFormattedBody);
    return `mailto:${encodeURIComponent(trimmedTo)}?${query.toString().replace(/\+/g, '%20')}`;
  }, [recipientEmail, ccEmail, subject, fullFormattedBody]);

  const gmailHref = useMemo(() => {
    const params = new URLSearchParams({
      view: 'cm',
      fs: '1',
      to: recipientEmail.trim(),
      cc: ccEmail.trim(),
      su: subject.trim(),
      body: fullFormattedBody,
    });
    return `https://mail.google.com/mail/?${params.toString()}`;
  }, [recipientEmail, ccEmail, subject, fullFormattedBody]);

  const handleCopyFullEmail = async () => {
    const formatted = `From: ${senderMailbox}\nTo: ${recipientEmail.trim()}\nCc: ${ccEmail.trim()}\nSubject: ${subject.trim()}\n\n${fullFormattedBody}`;
    const ok = await copyToClipboard(formatted);
    if (ok) {
      setCopiedMail(true);
      window.setTimeout(() => setCopiedMail(false), 2400);
    }
  };

  return (
    <section id="corporate-mail" className="border-b border-slate-800/80 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-2 text-xs font-mono font-semibold text-emerald-400">
              Corporate Mail Workbench · {CORPORATE_PROFILE.domain}
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              Corporate Email Composer &amp; Official Sign-Off Builder
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
              Draft institutional emails, KYB compliance notices, 774-LGA partnership proposals, or
              settlement updates with standardized{' '}
              <strong className="text-white">{CORPORATE_PROFILE.legalName}</strong> headers,{' '}
              <span className="font-mono text-emerald-400">{CORPORATE_PROFILE.rcNumber}</span>{' '}
              credentials, and verified GTBank/Wema account schedules.
            </p>
          </div>
        </div>

        {/* Business Domain Mail Routing Explanation */}
        <div className="mb-8 rounded-2xl border border-slate-800 bg-[#0E1525] p-4 sm:p-5">
          <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
            <strong className="text-white">Corporate Domain Email Architecture:</strong> All
            outgoing templates use official{' '}
            <span className="font-mono text-emerald-400">@{CORPORATE_PROFILE.domain}</span>{' '}
            desks. To receive replies directly at these addresses, point MX, SPF, DKIM, and DMARC
            DNS records on <span className="font-mono text-blue-400">{CORPORATE_PROFILE.domain}</span>{' '}
            to Google Workspace, Zoho Mail, or Microsoft 365 while this workbench launches your
            authenticated mail client (<span className="font-mono text-emerald-400">mailto:</span>)
            or Gmail Web Compose.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-12">
          {/* Left Composer Controls (7 cols) */}
          <div className="space-y-5 rounded-2xl border border-slate-800 bg-[#0E1525] p-6 sm:p-7 lg:col-span-7">
            <div>
              <div className="mb-2 font-mono text-xs text-slate-400">
                1. Select Official Correspondence Preset
              </div>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {MAIL_PRESETS.map((preset) => {
                  const active = preset.id === selectedPresetId;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleSelectPreset(preset)}
                      className={`rounded-xl border px-3.5 py-3 text-left text-xs font-semibold transition-colors ${
                        active
                          ? 'border-emerald-500 bg-emerald-500 text-slate-950'
                          : 'border-slate-800 bg-[#080D18] text-slate-200 hover:border-slate-700 hover:bg-slate-800/80'
                      }`}
                    >
                      {preset.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="senderMailbox"
                  className="mb-1.5 block text-xs font-semibold text-slate-300"
                >
                  2. Corporate Sender Desk
                </label>
                <select
                  id="senderMailbox"
                  value={senderMailbox}
                  onChange={(e) => setSenderMailbox(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-[#080D18] px-3.5 py-2.5 font-mono text-xs text-emerald-400 focus:border-emerald-500 focus:outline-none sm:text-sm"
                >
                  {CORPORATE_MAILBOXES.map((box) => (
                    <option key={box.address} value={box.address}>
                      {box.address} ({box.label})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="recipientEmail"
                  className="mb-1.5 block text-xs font-semibold text-slate-300"
                >
                  3. Recipient Email Address (To)
                </label>
                <input
                  id="recipientEmail"
                  type="email"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  placeholder="compliance@partner-institution.ng"
                  className="w-full rounded-xl border border-slate-700 bg-[#080D18] px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none sm:text-sm"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="ccEmail"
                  className="mb-1.5 block text-xs font-semibold text-slate-300"
                >
                  CC / Copy Desk (Optional)
                </label>
                <input
                  id="ccEmail"
                  type="text"
                  value={ccEmail}
                  onChange={(e) => setCcEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-[#080D18] px-3.5 py-2.5 font-mono text-xs text-slate-200 focus:border-emerald-500 focus:outline-none sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="senderPhone"
                  className="mb-1.5 block text-xs font-semibold text-slate-300"
                >
                  Sign-Off Telephone Line
                </label>
                <select
                  id="senderPhone"
                  value={senderPhone}
                  onChange={(e) => setSenderPhone(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-[#080D18] px-3.5 py-2.5 font-mono text-xs text-white focus:border-emerald-500 focus:outline-none sm:text-sm"
                >
                  <option value={CORPORATE_PROFILE.primaryPhone}>
                    {CORPORATE_PROFILE.primaryPhone}
                  </option>
                  <option value={CORPORATE_PROFILE.secondaryPhone}>
                    {CORPORATE_PROFILE.secondaryPhone}
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="mailSubject"
                className="mb-1.5 block text-xs font-semibold text-slate-300"
              >
                4. Email Subject Line
              </label>
              <input
                id="mailSubject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-[#080D18] px-3.5 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="mailBodyInput"
                className="mb-1.5 block text-xs font-semibold text-slate-300"
              >
                5. Message Body
              </label>
              <textarea
                id="mailBodyInput"
                rows={6}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-[#080D18] px-3.5 py-2.5 text-sm leading-relaxed text-white focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <label className="flex cursor-pointer items-start gap-2.5 text-xs text-slate-300">
              <input
                type="checkbox"
                checked={includeBankFooter}
                onChange={(e) => setIncludeBankFooter(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded accent-emerald-500"
              />
              <span>
                Append official CAC (<span className="font-mono text-emerald-400">RC 6881592</span>
                ), Abuja &amp; Potiskum addresses, and GTBank / Wema virtual account schedule to
                sign-off
              </span>
            </label>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={mailtoHref}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-emerald-500 px-5 py-3 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition-colors sm:text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>Open in Mail App</span>
              </a>

              <a
                href={gmailHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-blue-600 px-5 py-3 text-xs font-semibold text-white hover:bg-blue-500 transition-colors sm:text-sm"
              >
                <span>Compose in Gmail Web</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>

              <button
                type="button"
                onClick={handleCopyFullEmail}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 font-mono text-xs text-slate-200 hover:bg-slate-700 transition-colors"
              >
                {copiedMail ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Copied Dispatch</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Formatted Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Live Formatted Email Preview Card (5 cols) */}
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0E1525] lg:col-span-5">
            <div className="flex items-center justify-between border-b border-slate-800 bg-[#080D18] px-5 py-3.5">
              <span className="font-mono text-xs font-semibold text-slate-300">
                Live Corporate Dispatch Preview
              </span>
              <span className="font-mono text-[11px] font-semibold text-emerald-400">Ready</span>
            </div>

            <div className="space-y-2.5 bg-[#060911] p-5 font-mono text-xs">
              <div className="flex justify-between gap-3 border-b border-slate-800/80 pb-2">
                <span className="text-slate-500">FROM</span>
                <span className="break-all text-right text-emerald-400">{senderMailbox}</span>
              </div>
              <div className="flex justify-between gap-3 border-b border-slate-800/80 pb-2">
                <span className="text-slate-500">TO</span>
                <span className="break-all text-right text-white">
                  {recipientEmail.trim() || '(enter recipient)'}
                </span>
              </div>
              <div className="flex justify-between gap-3 border-b border-slate-800/80 pb-2">
                <span className="text-slate-500">CC</span>
                <span className="break-all text-right text-blue-400">
                  {ccEmail.trim() || '(none)'}
                </span>
              </div>
              <div className="flex justify-between gap-3 border-b border-slate-800/80 pb-2">
                <span className="text-slate-500">SUBJECT</span>
                <span className="text-right font-semibold text-amber-300">
                  {subject.trim() || '(no subject)'}
                </span>
              </div>

              <pre className="max-h-[430px] overflow-y-auto whitespace-pre-wrap rounded-xl border border-slate-800 bg-[#0B111F] p-4 font-sans text-xs leading-relaxed text-slate-200 sm:text-[13px]">
                {fullFormattedBody}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
