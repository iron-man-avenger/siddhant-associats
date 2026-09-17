import React from 'react';
import { 
  Building2, 
  ArrowRight, 
  Package, 
  Star,
  CheckCircle2
} from 'lucide-react';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
  onOpenCatalogModal: () => void;
  onOpenGstModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuoteModal,
  onOpenGstModal
}) => {
  return (
    <section className="bg-ivory-100 py-6 sm:py-8 lg:py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid Layout matching KK Stationery reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* 1. Main Big Bento Card (Left - 8 Columns) */}
          <div className="lg:col-span-8 bg-[#0c1f26] rounded-[2rem] p-7 sm:p-10 lg:p-12 text-white relative overflow-hidden shadow-floating flex flex-col justify-between border border-slate-800">
            
            {/* Subtle Blueprint Geometric Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none" />
            
            {/* Subtle Brand Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-natraj-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              
              {/* Eyebrow / Subtitle */}
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-natraj-400 mb-4">
                <span className="w-4 h-[2px] bg-natraj-500" />
                <span>EST. REGISTERED • DIRECT MANUFACTURER & DEALER</span>
              </div>

              {/* Bold Multi-Line Headline with Outlined Stroke Text */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-black text-white tracking-tight leading-[1.18] mb-4">
                Siddhant Associates <br />
                Prayagraj <br />
                <span className="stroke-text-crimson font-black">Stationery</span> <br />
                Manufacturer
              </h1>

              {/* Description Paragraph */}
              <p className="text-xs sm:text-[13px] text-slate-300 font-normal leading-relaxed max-w-lg mb-6">
                We don't just resell. We supervise and manufacture. Factory-direct quality from Prayagraj — official key dealer for <strong className="text-natraj-400 font-bold">Natraj</strong> and <strong className="text-apsara-100 font-bold">Apsara</strong>, serving schools, colleges, and retail bookshops across Uttar Pradesh.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-natraj-500 hover:bg-natraj-600 text-white font-extrabold text-xs sm:text-sm shadow-crimson-glow transition-all active:scale-95"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm backdrop-blur-sm border border-white/15 transition-all cursor-pointer"
                >
                  <span>Get a Quote</span>
                </button>
              </div>

            </div>

            {/* Bottom Mini Floating Badge (Inside Main Card) */}
            <div className="relative z-10 self-start sm:self-end mt-6 sm:mt-3 bg-white/95 text-apsara-900 rounded-xl px-3.5 py-2 shadow-md flex items-center gap-2.5 border border-white">
              <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              </div>
              <div className="text-left">
                <span className="text-[9.5px] text-gray-500 block font-bold uppercase tracking-wider leading-tight">
                  District Authorized Partner
                </span>
                <span className="text-[11px] font-black text-apsara-900 leading-none">
                  Since Registered • Prayagraj
                </span>
              </div>
            </div>

          </div>

          {/* 2. Right Stacked Bento Cards (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-5 justify-between">
            
            {/* Card 2A: Vibrant Terracotta / Crimson Orange (Top Right) */}
            <div className="relative bg-gradient-to-br from-[#D9531E] via-[#C2410C] to-[#9A3412] rounded-[2rem] p-6 sm:p-7 text-white shadow-floating flex-1 flex flex-col justify-between overflow-hidden group">
              
              {/* Watermark Icon */}
              <Package className="w-36 h-36 text-white/10 absolute -right-6 -bottom-6 pointer-events-none group-hover:scale-105 transition-transform" />

              <div className="relative z-10">
                <span className="text-[10.5px] font-black tracking-widest uppercase text-amber-200 block mb-1.5">
                  FACTORY DIRECT
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug mb-1.5">
                  Bulk Orders Welcome
                </h3>
                <p className="text-xs text-amber-100/90 leading-relaxed mb-4 max-w-xs">
                  Direct master carton allocations of Natraj 621, Apsara Platinum, and custom school notebooks.
                </p>
              </div>

              <div className="relative z-10">
                <button
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-[#C2410C] hover:bg-ivory-100 font-extrabold text-xs shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Card 2B: Deep Midnight Navy / Teal (Bottom Right) */}
            <div className="relative bg-gradient-to-br from-[#0c1f26] via-[#102A33] to-[#08151A] rounded-[2rem] p-6 sm:p-7 text-white shadow-floating flex-1 flex flex-col justify-between overflow-hidden border border-slate-800 group">
              
              {/* Watermark Icon */}
              <Building2 className="w-36 h-36 text-white/5 absolute -right-6 -bottom-6 pointer-events-none group-hover:scale-105 transition-transform" />

              <div className="relative z-10">
                <span className="text-[10.5px] font-black tracking-widest uppercase text-emerald-400 block mb-1.5">
                  GOVERNMENT READY
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug mb-1.5">
                  GeM Registered Vendor
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4 max-w-xs">
                  100% Input Tax Credit (ITC) compliant. Pre-approved for UP education tenders & courts.
                </p>
              </div>

              <div className="relative z-10">
                <button
                  onClick={onOpenGstModal}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/15 backdrop-blur-sm transition-all active:scale-95 cursor-pointer"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Learn More</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
