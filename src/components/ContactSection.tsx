import { useState, type FormEvent } from 'react';
import { ArrowRight, Building2, CheckCircle2, Mail, MapPin } from 'lucide-react';
import { CORPORATE_PROFILE } from '../data/corporateData';

interface ConfirmationState {
  ticketId: string;
  email: string;
  organization: string;
}

export default function ContactSection() {
  const [fullName, setFullName] = useState('');
  const [orgName, setOrgName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [trackSelect, setTrackSelect] = useState('774-LGA Digital School & Enterprise OS');
  const [stateLga, setStateLga] = useState('');
  const [projectScope, setProjectScope] = useState('');
  const [confirmation, setConfirmation] = useState<ConfirmationState | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedEmail = workEmail.trim();
    const trimmedOrg = orgName.trim();
    if (!fullName.trim() || !trimmedOrg || !trimmedEmail || !phoneNum.trim() || !projectScope.trim()) {
      return;
    }

    const ticketId = 'UMC-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmation({
      ticketId,
      email: trimmedEmail,
      organization: trimmedOrg,
    });

    setFullName('');
    setOrgName('');
    setWorkEmail('');
    setPhoneNum('');
    setStateLga('');
    setProjectScope('');
  };

  return (
    <section id="contact" className="border-b border-slate-800/80 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          {/* Left Office & Contact Column */}
          <div className="space-y-6 lg:col-span-5">
            <div>
              <div className="mb-2 font-mono text-xs font-semibold text-emerald-400">
                Enterprise Onboarding
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
                Deploy Infrastructure or Request API Credentials
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Connect with our software engineering and institutional deployment teams in Abuja
                and Potiskum for 774-LGA rollouts, metered AI compute nodes, or API sandbox access.
              </p>
            </div>

            <div className="space-y-3.5">
              <div className="flex items-start gap-3.5 rounded-2xl border border-slate-800 bg-[#0E1525] p-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <div>
                  <div className="text-sm font-bold text-white">
                    Corporate Registered Office (Abuja HQ)
                  </div>
                  <div className="mt-1 text-xs text-slate-300">{CORPORATE_PROFILE.abujaHq}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl border border-slate-800 bg-[#0E1525] p-4">
                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                <div>
                  <div className="text-sm font-bold text-white">Regional Operations Hub</div>
                  <div className="mt-1 text-xs text-slate-300">{CORPORATE_PROFILE.potiskumHub}</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl border border-slate-800 bg-[#0E1525] p-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <div>
                  <div className="text-sm font-bold text-white">
                    Direct Engineering &amp; Executive Desk
                  </div>
                  <div className="mt-1 font-mono text-xs text-slate-300">
                    <a
                      href={`mailto:${CORPORATE_PROFILE.primaryEmail}`}
                      className="text-emerald-400 hover:underline"
                    >
                      {CORPORATE_PROFILE.primaryEmail}
                    </a>{' '}
                    ·{' '}
                    <a href="tel:+2347025692917" className="text-blue-400 hover:underline">
                      {CORPORATE_PROFILE.primaryPhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="rounded-2xl border border-slate-800 bg-[#0E1525] p-6 sm:p-8 lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-1.5 block text-xs font-semibold text-slate-300"
                  >
                    Full Name / Authorized Representative *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g., Engr. Ibrahim Musa"
                    className="w-full rounded-xl border border-slate-700 bg-[#080D18] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="orgName"
                    className="mb-1.5 block text-xs font-semibold text-slate-300"
                  >
                    Institution / Enterprise / Agency Name *
                  </label>
                  <input
                    id="orgName"
                    type="text"
                    required
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    placeholder="e.g., North-East Tech Academy"
                    className="w-full rounded-xl border border-slate-700 bg-[#080D18] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="workEmail"
                    className="mb-1.5 block text-xs font-semibold text-slate-300"
                  >
                    Official Email Address *
                  </label>
                  <input
                    id="workEmail"
                    type="email"
                    required
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    placeholder="name@institution.ng"
                    className="w-full rounded-xl border border-slate-700 bg-[#080D18] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNum"
                    className="mb-1.5 block text-xs font-semibold text-slate-300"
                  >
                    Phone Number (WhatsApp / Voice) *
                  </label>
                  <input
                    id="phoneNum"
                    type="tel"
                    required
                    value={phoneNum}
                    onChange={(e) => setPhoneNum(e.target.value)}
                    placeholder="+234 800 000 0000"
                    className="w-full rounded-xl border border-slate-700 bg-[#080D18] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="trackSelect"
                    className="mb-1.5 block text-xs font-semibold text-slate-300"
                  >
                    Deployment / Integration Track *
                  </label>
                  <select
                    id="trackSelect"
                    value={trackSelect}
                    onChange={(e) => setTrackSelect(e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-[#080D18] px-4 py-3 text-sm text-white focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="774-LGA Digital School & Enterprise OS">
                      774-LGA Digital School &amp; Enterprise OS
                    </option>
                    <option value="Software-Defined AI Compute Virtualization">
                      Software-Defined AI Compute Virtualization
                    </option>
                    <option value="Flutterwave & Mono API Orchestration">
                      Flutterwave &amp; Mono API Orchestration
                    </option>
                    <option value="Clean Energy & Micro-Grid PAYG Telemetry">
                      Clean Energy &amp; Micro-Grid PAYG Telemetry
                    </option>
                    <option value="Banking / PSP KYB & Compliance Verification">
                      Banking / PSP KYB &amp; Compliance Verification
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="stateLga"
                    className="mb-1.5 block text-xs font-semibold text-slate-300"
                  >
                    Target State / LGA Cluster
                  </label>
                  <input
                    id="stateLga"
                    type="text"
                    value={stateLga}
                    onChange={(e) => setStateLga(e.target.value)}
                    placeholder="e.g., FCT Abuja / Potiskum, Yobe"
                    className="w-full rounded-xl border border-slate-700 bg-[#080D18] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="projectScope"
                  className="mb-1.5 block text-xs font-semibold text-slate-300"
                >
                  Technical Scope or Integration Requirements *
                </label>
                <textarea
                  id="projectScope"
                  rows={4}
                  required
                  value={projectScope}
                  onChange={(e) => setProjectScope(e.target.value)}
                  placeholder="Describe your institution size, API integration timeline, or infrastructure deployment requirements..."
                  className="w-full rounded-xl border border-slate-700 bg-[#080D18] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col justify-between gap-4 pt-1 sm:flex-row sm:items-center">
                <span className="text-xs text-slate-400">
                  Response within 1 business day from Abuja &amp; Potiskum engineering desks
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 hover:bg-emerald-400 transition-colors"
                >
                  <span>Submit Enterprise Inquiry</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {confirmation && (
                <div
                  role="status"
                  className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-100"
                >
                  <div className="flex flex-wrap items-center gap-2 font-bold text-emerald-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Inquiry Logged for {confirmation.organization}</span>
                    <span className="font-mono text-xs text-emerald-400">
                      ({confirmation.ticketId})
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-200">
                    Thank you. Our Abuja &amp; Potiskum engineering desk has recorded your request
                    and will respond via{' '}
                    <span className="font-mono underline">{confirmation.email}</span>. For urgent
                    compliance reviews, email{' '}
                    <span className="font-mono text-emerald-300">
                      {CORPORATE_PROFILE.primaryEmail}
                    </span>{' '}
                    directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
