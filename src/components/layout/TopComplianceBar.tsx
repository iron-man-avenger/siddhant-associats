import React from 'react';
import { ShieldCheck, MapPin, Phone, Clock, FileText } from 'lucide-react';

interface TopComplianceBarProps {
  onOpenGstModal: () => void;
  onOpenCatalogModal: () => void;
}

export const TopComplianceBar: React.FC<TopComplianceBarProps> = ({
  onOpenGstModal,
  onOpenCatalogModal
}) => {
  return (
    <aside aria-label="Compliance and Fast Contact" className="bg-apsara-900 text-ivory-100 text-[11px] py-1.5 px-4 border-b border-apsara-800 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Trust Badges Left */}
        <div className="flex items-center gap-2.5 sm:gap-4 overflow-x-auto no-scrollbar">
          <button 
            onClick={onOpenGstModal}
            className="inline-flex items-center gap-1.5 font-medium text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer shrink-0"
            title="Click to view GST compliance & verification"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="hidden sm:inline">GST Registered & Compliant Entity</span>
            <span className="sm:hidden">GST Compliant</span>
            <span className="bg-emerald-950/80 text-emerald-300 text-[9.5px] px-1.5 py-0.5 rounded border border-emerald-700/50">Verified</span>
          </button>

          <span className="hidden md:inline-block text-apsara-500">•</span>

          <a
            href="https://maps.app.goo.gl/ZhcS29WbZ1qu7LTN9?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-ivory-300 hover:text-white transition-colors cursor-pointer group shrink-0"
            title="Click to view Chowk, Loknath location on Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 text-natraj-500 group-hover:scale-110 transition-transform" />
            <span>Authorized Channel: <strong>Chowk, Prayagraj</strong></span>
          </a>

          <span className="hidden xl:inline-block text-apsara-500">•</span>

          <div className="hidden xl:inline-flex items-center gap-1.5 text-ivory-300">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Same-Day / 24-Hr District Dispatch</span>
          </div>
        </div>

        {/* Quick Actions Right */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <button
            onClick={onOpenCatalogModal}
            className="hidden sm:inline-flex items-center gap-1 text-ivory-200 hover:text-white transition-colors"
          >
            <FileText className="w-3 h-3 text-amber-400" />
            <span>B2B Catalog 2026</span>
          </button>
          <span className="hidden sm:inline text-apsara-700">|</span>
          <a
            href="tel:+916386041502"
            className="inline-flex items-center gap-1 text-ivory-200 hover:text-emerald-400 transition-colors"
          >
            <Phone className="w-3 h-3 text-emerald-400" />
            <span className="font-semibold tracking-wide">
              <span className="hidden sm:inline">Wholesale Desk: </span>+91 63860 41502
            </span>
          </a>
        </div>
      </div>
    </aside>
  );
};
