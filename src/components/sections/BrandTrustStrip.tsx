import React from 'react';
import { ShieldCheck, CheckCircle2, Factory, Truck, HelpCircle } from 'lucide-react';

interface BrandTrustStripProps {
  onOpenGstModal: () => void;
}

export const BrandTrustStrip: React.FC<BrandTrustStripProps> = ({ onOpenGstModal }) => {
  return (
    <section className="bg-white border-y border-gray-200 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Brand Trust Statement */}
          <div className="max-w-md text-center lg:text-left">
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-natraj-500 bg-natraj-50 px-2 py-0.5 rounded">
              Authentic Supply Chain
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-apsara-900 mt-1 mb-1.5">
              Official Distribution & Direct Supervision
            </h2>
            <p className="text-xs text-gray-600 leading-relaxed">
              Every pencil, eraser, notebook, and register supplied through Siddhant Associates is backed by rigorous quality inspection, factory-direct packaging, and GST-compliant invoicing.
            </p>
          </div>

          {/* Center & Right: Trust Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 w-full lg:w-auto">
            
            {/* Hindustan Pencils Brand Association */}
            <div className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-ivory-100 border border-gray-200 text-center hover:border-natraj-300 transition-colors">
              <div className="w-9 h-9 rounded-full bg-natraj-100 flex items-center justify-center mb-1.5">
                <span className="font-extrabold text-natraj-600 text-xs">HP</span>
              </div>
              <span className="text-[11px] font-bold text-apsara-900">Natraj & Apsara</span>
              <span className="text-[10px] text-gray-500 font-medium">Hindustan Pencils Line</span>
            </div>

            {/* Zero Counterfeit Guarantee */}
            <div className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-ivory-100 border border-gray-200 text-center hover:border-emerald-300 transition-colors">
              <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center mb-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-[11px] font-bold text-apsara-900">100% Genuine</span>
              <span className="text-[10px] text-gray-500 font-medium">Anti-Piracy Verified</span>
            </div>

            {/* In-House Production Supervision */}
            <div className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-ivory-100 border border-gray-200 text-center hover:border-amber-300 transition-colors">
              <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center mb-1.5">
                <Factory className="w-4 h-4 text-amber-600" />
              </div>
              <span className="text-[11px] font-bold text-apsara-900">In-House Mills</span>
              <span className="text-[10px] text-gray-500 font-medium">Supervised Quality</span>
            </div>

            {/* Fast Prayagraj Dispatch */}
            <div className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-ivory-100 border border-gray-200 text-center hover:border-apsara-300 transition-colors">
              <div className="w-9 h-9 rounded-full bg-apsara-100 flex items-center justify-center mb-1.5">
                <Truck className="w-4 h-4 text-apsara-700" />
              </div>
              <span className="text-[11px] font-bold text-apsara-900">Prayagraj Hub</span>
              <span className="text-[10px] text-gray-500 font-medium">24-Hr Doorstep Drop</span>
            </div>

          </div>
        </div>

        {/* GST & B2B Confidence Banner */}
        <div className="mt-7 pt-5 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-[11px] text-gray-600">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-semibold text-apsara-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Direct Factory Tariffs for Retailers & Schools
            </span>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <span>Input Tax Credit (ITC) Available on All Tax Invoices</span>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <span>Master Carton Dispatch with Tamper-Evident Seals</span>
          </div>

          <button
            onClick={onOpenGstModal}
            className="inline-flex items-center gap-1 text-natraj-500 font-bold hover:underline cursor-pointer"
          >
            <span>Inspect GST Registration & Legal Certifications</span>
            <HelpCircle className="w-3 h-3" />
          </button>
        </div>

      </div>
    </section>
  );
};
