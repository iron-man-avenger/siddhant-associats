import React from 'react';
import { School, GraduationCap, FileSpreadsheet, PackageCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface InstitutionalDeskProps {
  onOpenQuoteModal: () => void;
}

export const InstitutionalDesk: React.FC<InstitutionalDeskProps> = ({ onOpenQuoteModal }) => {
  const offerings = [
    {
      icon: <School className="w-6 h-6 text-natraj-500" />,
      title: 'Annual Academic Session Contracts',
      desc: 'Complete seasonal supply planning for CBSE, ICSE, and UP Board affiliated schools. Pre-booked stock with guaranteed delivery before session opening.'
    },
    {
      icon: <PackageCheck className="w-6 h-6 text-apsara-700" />,
      title: 'Pre-Assembled Student Stationery Kits',
      desc: 'Custom packaged student starter kits: Apsara Platinum pencils, non-dust erasers, geometry boxes, and customized school notebooks in branded pouches.'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-amber-600" />,
      title: 'Coaching & Examination Consumables',
      desc: 'Bulk terminal examination answer sheets, OMR evaluation stationery, red/blue checking pens, and registers tailored for Prayagraj test series centers.'
    }
  ];

  return (
    <section id="institutional" className="py-16 lg:py-24 bg-ivory-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-floating">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-gray-100">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-natraj-500 bg-natraj-50 px-2.5 py-1 rounded mb-2 border border-natraj-200">
                <FileSpreadsheet className="w-3.5 h-3.5" />
                Institutional Procurement Portal
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-apsara-900 tracking-tight">
                Direct Supply for Schools, Colleges & Coaching Academies
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1.5 max-w-2xl">
                Partner with Siddhant Associates for direct manufacturer pricing, zero intermediate markups, and scheduled doorstep delivery.
              </p>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-natraj-500 hover:bg-natraj-600 text-white font-bold text-xs sm:text-sm shadow-crimson-glow transition-all active:scale-95 cursor-pointer shrink-0"
            >
              <span>Request School Tender Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8">
            {offerings.map((item, idx) => (
              <div key={idx} className="bg-ivory-50 rounded-2xl p-5 border border-gray-100 hover:border-gray-300 transition-all">
                <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="text-sm font-extrabold text-apsara-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[11.5px] text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Institutional Benefits Checklist */}
          <div className="mt-7 pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-[11px] font-semibold text-gray-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Complimentary Physical Sample Kits</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Credit Cycles for Registered Schools</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>GST ITC Invoices for Bookstores</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>100% Genuine Hindustan Pencils</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
