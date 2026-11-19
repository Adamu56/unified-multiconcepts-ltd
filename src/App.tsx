import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SolutionsSection from './components/SolutionsSection';
import ApiSandboxSection from './components/ApiSandboxSection';
import ComplianceAndDeploySection from './components/ComplianceAndDeploySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import { LEGAL_DOCUMENTS, type LegalDocument } from './data/corporateData';

export type WebsitePage = 'home' | 'solutions' | 'developers' | 'compliance' | 'contact';

const HASH_TO_PAGE: Record<string, WebsitePage> = {
  '': 'home',
  '#/': 'home',
  '#home': 'home',
  '#/solutions': 'solutions',
  '#solutions': 'solutions',
  '#lga-infrastructure': 'solutions',
  '#/developers': 'developers',
  '#software-dev': 'developers',
  '#/compliance': 'compliance',
  '#compliance': 'compliance',
  '#accounts': 'compliance',
  '#/contact': 'contact',
  '#contact': 'contact',
};

const PAGE_TO_HASH: Record<WebsitePage, string> = {
  home: '#/',
  solutions: '#/solutions',
  developers: '#/developers',
  compliance: '#/compliance',
  contact: '#/contact',
};

const DIRECTORY_PAGES: {
  page: WebsitePage;
  index: string;
  title: string;
  summary: string;
  cta: string;
}[] = [
  {
    page: 'solutions',
    index: '01.',
    title: 'Solutions & 774 LGAs',
    summary:
      'Software-Defined AI Compute, Digital School & Enterprise OS, and solar micro-grid telemetry across all 774 LGAs.',
    cta: 'View Solutions',
  },
  {
    page: 'developers',
    index: '02.',
    title: 'API & Split Sandbox',
    summary:
      'Interactive Flutterwave PSA Naira split-settlement simulator alongside live Mono KYB and AI compute API payloads.',
    cta: 'Open Sandbox',
  },
  {
    page: 'compliance',
    index: '03.',
    title: 'Compliance & Accounts',
    summary:
      'CAC RC 6881592 registration profile, non-bank operational boundary statement, and verified GTBank / Wema accounts.',
    cta: 'Verify KYB',
  },
  {
    page: 'contact',
    index: '04.',
    title: 'Enterprise Onboarding',
    summary:
      'Connect with our Abuja headquarters and Potiskum regional operations team for deployment or API credentials.',
    cta: 'Contact Team',
  },
];

function resolvePageFromHash(): WebsitePage {
  if (typeof window === 'undefined') return 'home';
  return HASH_TO_PAGE[window.location.hash] ?? 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState<WebsitePage>(resolvePageFromHash);
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocument['id'] | null>(null);

  useEffect(() => {
    const onHashChange = () => {
      setActivePage(resolvePageFromHash());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = (page: WebsitePage) => {
    setActivePage(page);
    const nextHash = PAGE_TO_HASH[page];
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#080D18] text-slate-100">
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {activePage === 'home' && (
          <>
            <HeroSection onNavigate={handleNavigate} />

            {/* Multi-Page Platform Directory */}
            <section className="border-b border-slate-800/80 py-14 sm:py-16">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 max-w-2xl">
                  <div className="mb-1.5 font-mono text-xs font-semibold text-emerald-400">
                    Corporate Portal Directory
                  </div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                    Explore Platform Architecture &amp; Verification Pages
                  </h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {DIRECTORY_PAGES.map((item) => (
                    <button
                      key={item.page}
                      type="button"
                      onClick={() => handleNavigate(item.page)}
                      className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#0E1525] p-6 text-left hover:border-emerald-500/50 transition-colors"
                    >
                      <div>
                        <div className="mb-2 font-mono text-xs font-semibold text-emerald-400">
                          {item.index}
                        </div>
                        <h3 className="text-base font-bold text-white">{item.title}</h3>
                        <p className="mt-2 text-xs leading-relaxed text-slate-400">
                          {item.summary}
                        </p>
                      </div>
                      <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
                        <span>{item.cta}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {activePage === 'solutions' && <SolutionsSection />}
        {activePage === 'developers' && <ApiSandboxSection />}
        {activePage === 'compliance' && <ComplianceAndDeploySection />}
        {activePage === 'contact' && <ContactSection />}
      </main>

      <Footer onNavigate={handleNavigate} onOpenLegal={(id) => setActiveLegalDoc(id)} />

      <LegalModal
        document={activeLegalDoc ? LEGAL_DOCUMENTS[activeLegalDoc] : null}
        onClose={() => setActiveLegalDoc(null)}
      />
    </div>
  );
}
