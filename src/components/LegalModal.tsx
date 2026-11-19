import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { LegalDocument } from '../data/corporateData';

interface LegalModalProps {
  document: LegalDocument | null;
  onClose: () => void;
}

export default function LegalModal({ document, onClose }: LegalModalProps) {
  useEffect(() => {
    if (!document) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [document, onClose]);

  if (!document) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
    >
      <div className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-700 bg-[#0E1525] p-6 shadow-2xl sm:p-7">
        <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-3.5">
          <h3 id="legal-modal-title" className="text-lg font-bold text-white">
            {document.title}
          </h3>
          <button
            type="button"
            aria-label="Close document"
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="my-5 space-y-4 text-sm leading-relaxed text-slate-300">
          {document.paragraphs.map((para, idx) => (
            <p key={idx}>
              {para.heading && <strong className="text-white">{para.heading}: </strong>}
              {para.text}
            </p>
          ))}
        </div>

        <div className="flex justify-end border-t border-slate-800 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-emerald-500 px-5 py-2 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition-colors"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
}
