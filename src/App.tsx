import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SolutionsSection from './components/SolutionsSection';
import ApiSandboxSection from './components/ApiSandboxSection';
import ComplianceAndDeploySection from './components/ComplianceAndDeploySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import { LEGAL_DOCUMENTS, type LegalDocument } from './data/corporateData';

export default function App() {
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocument['id'] | null>(null);

  return (
    <div className="min-h-screen bg-[#080D18] text-slate-100">
      <Navbar />

      <main>
        <HeroSection />
        <SolutionsSection />
        <ApiSandboxSection />
        <ComplianceAndDeploySection />
        <ContactSection />
      </main>

      <Footer onOpenLegal={(id) => setActiveLegalDoc(id)} />

      <LegalModal
        document={activeLegalDoc ? LEGAL_DOCUMENTS[activeLegalDoc] : null}
        onClose={() => setActiveLegalDoc(null)}
      />
    </div>
  );
}
