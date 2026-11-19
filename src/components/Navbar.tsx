import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#solutions', label: 'Solutions' },
  { href: '#lga-infrastructure', label: '774 LGAs' },
  { href: '#software-dev', label: 'API Sandbox' },
  { href: '#compliance', label: 'Compliance' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#080D18]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="whitespace-nowrap shrink-0 text-sm font-bold tracking-tight text-white sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-md"
        >
          UNIFIED MULTI CONCEPT <span className="text-emerald-400">LTD</span>
        </a>

        {/* Zone 2: Concise Single-line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 hover:text-white hover:underline underline-offset-4 decoration-emerald-400/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#software-dev"
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
          className="lg:hidden border-t border-slate-800/80 bg-[#0A101E] px-4 py-3 space-y-1"
        >
          {NAV_LINKS.map((link) => (
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
            href="#software-dev"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-xl bg-emerald-500 px-4 py-2.5 text-center text-sm font-semibold text-slate-950 hover:bg-emerald-400"
          >
            API Sandbox
          </a>
        </nav>
      )}
    </header>
  );
}
