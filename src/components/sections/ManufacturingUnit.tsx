import React from 'react';
import { 
  Factory, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  Award, 
  PackageCheck 
} from 'lucide-react';

interface ManufacturingUnitProps {
  onOpenQuoteModal: () => void;
}

export const ManufacturingUnit: React.FC<ManufacturingUnitProps> = ({ onOpenQuoteModal }) => {
  const steps = [
    {
      num: '01',
      title: 'Virgin Paper Reel Sourcing',
      desc: 'Selected 70 to 80 GSM high-bulk maplitho virgin reels. Rigorous lab test for brightness, opacity, and zero ink bleed.'
    },
    {
      num: '02',
      title: 'Precision Machine Ruling',
      desc: 'High-speed automated disc ruling for four-line, square-grid, and ledger formats with millimetric registration.'
    },
    {
      num: '03',
      title: 'Heavy Spine Binding & Foil Crest',
      desc: 'Section-sewn thread binding, canvas reinforced spines, and customized school crest/logo foil embossing.'
    },
    {
      num: '04',
      title: 'Supervisor Audit & Shrink Pack',
      desc: '100% manual supervisor inspection for defect-free page count followed by moisture-barrier master carton shrink-wrapping.'
    }
  ];

  return (
    <section id="manufacturing" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Punchy "We Manufacture" Tone */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-natraj-500 bg-natraj-50 px-2.5 py-1 rounded mb-2.5 border border-natraj-200">
              <Factory className="w-3.5 h-3.5" />
              Direct In-House Production Facility
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-apsara-900 tracking-tight leading-tight">
              We Manufacture.<br />
              <span className="text-natraj-500">We Don’t Just Resell.</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
              Every Siddhant school notebook, accounting register, and examination answer sheet comes directly from our production floor in Prayagraj. No middlemen, zero markup, and supervised quality control.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-natraj-500 hover:bg-natraj-600 text-white font-extrabold text-xs sm:text-sm shadow-crimson-glow transition-all active:scale-95 cursor-pointer"
            >
              <span>Order Custom School Notebooks</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
            </button>
          </div>
        </div>

        {/* 4-Step Animated Manufacturing Process Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {steps.map((step) => (
            <div 
              key={step.num}
              className="bg-ivory-100 rounded-2xl p-5 border border-gray-200 shadow-xs hover:shadow-floating hover:border-natraj-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-2xl font-black text-natraj-500/30 group-hover:text-natraj-500 transition-colors block mb-2 font-mono">
                  {step.num}
                </span>
                <h3 className="text-sm font-extrabold text-apsara-900 mb-1.5 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[11.5px] text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-gray-200/80 flex items-center justify-between text-[10.5px] font-bold text-gray-400 group-hover:text-natraj-600 transition-colors">
                <span>Phase {step.num} Quality Gate</span>
                <span>✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certified & Trusted Enterprise Card (Inspired by KK Stationery) */}
        <div className="bg-gradient-to-br from-[#0c1f26] via-[#102A33] to-[#143642] rounded-3xl p-6 sm:p-10 text-white shadow-floating-lg relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 pb-6 border-b border-white/10">
              <div>
                <span className="text-[10.5px] font-black uppercase tracking-widest text-amber-400 bg-white/10 px-2.5 py-0.5 rounded-full">
                  Institutional Verification
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1.5">
                  Trusted & Certified Enterprise
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-xl leading-relaxed">
                  Our official credentials ensure frictionless procurement for schools, colleges, and government department tenders.
                </p>
              </div>

              <a
                href="#estimator"
                className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-apsara-950 font-black text-xs transition-all whitespace-nowrap"
              >
                Estimate Carton Requirements
              </a>
            </div>

            {/* 4 Trust Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-6">
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-1.5" />
                <h4 className="text-xs sm:text-[13px] font-bold text-white">GeM Ready Vendor</h4>
                <p className="text-[11px] text-slate-300 mt-1">Direct procurement compliance for government and autonomous schools.</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
                <Award className="w-5 h-5 text-amber-400 mb-1.5" />
                <h4 className="text-xs sm:text-[13px] font-bold text-white">MSME Certified</h4>
                <p className="text-[11px] text-slate-300 mt-1">Udyam registered manufacturer promoting domestic Indian production.</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
                <Layers className="w-5 h-5 text-blue-400 mb-1.5" />
                <h4 className="text-xs sm:text-[13px] font-bold text-white">100% Tax Invoices</h4>
                <p className="text-[11px] text-slate-300 mt-1">Input tax credit (ITC) pass-through on every dispatch and master carton.</p>
              </div>

              <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
                <PackageCheck className="w-5 h-5 text-natraj-400 mb-1.5" />
                <h4 className="text-xs sm:text-[13px] font-bold text-white">Custom School Branding</h4>
                <p className="text-[11px] text-slate-300 mt-1">Custom cover artwork, motto, and roll numbers embossed for institutions.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
