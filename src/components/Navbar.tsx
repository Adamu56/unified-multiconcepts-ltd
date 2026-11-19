import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { WebsitePage } from '../App';

interface NavbarProps {
  activePage: WebsitePage;
  onNavigate: (page: WebsitePage) => void;
}

const NAV_ITEMS: { page: WebsitePage; href: string; label: string }[] = [
  { page: 'home', href: '#/', label: 'Overview' },
  { page: 'solutions', href: '#/solutions', label: 'Solutions' },
  { page: 'developers', href: '#/developers', label: 'API Sandbox' },
  { page: 'compliance', href: '#/compliance', label: 'Compliance' },
  { page: 'contact', href: '#/contact', label: 'Contact' },
];

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, page: WebsitePage) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#080D18]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#/"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="whitespace-nowrap shrink-0 rounded-md text-sm font-bold tracking-tight text-white sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          UNIFIED MULTICONCEPTS <span className="text-emerald-400">LTD</span>
        </a>

        {/* Zone 2: Concise Single-line Page Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.page;
            return (
              <a
                key={item.page}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => handleLinkClick(e, item.page)}
                className={`whitespace-nowrap shrink-0 rounded py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  isActive
                    ? 'text-emerald-400 underline underline-offset-4 decoration-emerald-400'
                    : 'text-slate-300 hover:text-white hover:underline underline-offset-4 decoration-slate-500'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#/developers"
            onClick={(e) => handleLinkClick(e, 'developers')}
            className="hidden sm:inline-flex items-center justify-center whitespace-nowrap shrink-0 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            API Sandbox
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-[#0E1525] text-slate-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="lg:hidden space-y-1 border-t border-slate-800/80 bg-[#0A101E] px-4 py-3"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.page;
            return (
              <a
                key={item.page}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.page)}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : 'text-slate-200 hover:bg-slate-800/70 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="#/developers"
            onClick={(e) => handleLinkClick(e, 'developers')}
            className="mt-2 block rounded-xl bg-emerald-500 px-4 py-2.5 text-center text-sm font-semibold text-slate-950 hover:bg-emerald-400"
          >
            API Sandbox
          </a>
        </nav>
      )}
    </header>
  );
}
