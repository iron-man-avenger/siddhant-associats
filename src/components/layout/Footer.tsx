import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ArrowUp,
  FileText,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  onOpenGstModal: () => void;
  onOpenCatalogModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGstModal, onOpenCatalogModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prayagrajHubs = [
    'Katra', 'Chowk Mandi', 'Civil Lines', 'Naini', 
    'Phaphamau', 'Jhunsi', 'Zero Road', 'Soraon', 'Handia', 'Koraon'
  ];

  return (
    <footer id="contact" className="bg-[#0c1f26] text-slate-200 pt-16 pb-12 border-t-4 border-natraj-500 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Profile (4 Cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <img
                src="/assets/logo-light.png"
                alt="Siddhant Associates Logo"
                className="h-10 sm:h-11 w-auto object-contain shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-lg font-black text-white tracking-tight leading-none">
                  SIDDHANT <span className="text-natraj-500">ASSOCIATES</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-400 mt-1">
                  Supervisor & Manufacturer • Prayagraj
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Official key dealer for <strong>Apsara</strong> and <strong>Natraj</strong> (Hindustan Pencils Pvt. Ltd.) and manufacturer of premium school notebooks, accounting registers, and institutional stationery across Prayagraj District.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2">
              <button
                onClick={onOpenGstModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-[11px] font-bold hover:bg-emerald-900 transition-colors cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>GST Registered & Compliant Entity</span>
              </button>
            </div>
          </div>

          {/* Col 2: Services & Quick Links (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-black text-white uppercase tracking-widest mb-3.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-natraj-500" />
              <span>B2B Portals & Catalog</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#products" className="text-slate-300 hover:text-natraj-400 transition-colors flex items-center gap-1.5">
                  <span>Product Category Matrices</span>
                </a>
              </li>
              <li>
                <a href="#estimator" className="text-amber-400 font-bold hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span>Carton & Student Estimator</span>
                </a>
              </li>
              <li>
                <a href="#manufacturing" className="text-slate-300 hover:text-natraj-400 transition-colors flex items-center gap-1.5">
                  <span>Paper Manufacturing Facility</span>
                </a>
              </li>
              <li>
                <a href="#institutional" className="text-slate-300 hover:text-natraj-400 transition-colors flex items-center gap-1.5">
                  <span>School & Coaching Annual Contracts</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCatalogModal}
                  className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>Download 2026 Master Catalog</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Prayagraj Hubs (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black text-white uppercase tracking-widest mb-3.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-natraj-500" />
              <span>Prayagraj Hubs</span>
            </h4>
            <div className="flex flex-wrap gap-1">
              {prayagrajHubs.map((hub) => (
                <span 
                  key={hub} 
                  className="bg-[#143642] border border-white/10 text-slate-200 text-[10.5px] font-medium px-2 py-0.5 rounded-md hover:border-natraj-500 transition-colors"
                >
                  {hub}
                </span>
              ))}
            </div>
          </div>

          {/* Col 4: Corporate Office & Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-[11px] font-black text-white uppercase tracking-widest mb-3.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-natraj-500" />
              <span>Corporate Desk</span>
            </h4>
            
            {/* Address (Links to Google Maps) */}
            <a
              href="https://maps.app.goo.gl/ZhcS29WbZ1qu7LTN9?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-2.5 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Click to view on Google Maps"
            >
              <MapPin className="w-4 h-4 text-natraj-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div className="flex-1">
                <span className="font-bold text-white group-hover:text-natraj-400 transition-colors inline-flex items-center gap-1.5">
                  <span>Registered Office</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-natraj-400 transition-colors" />
                </span>
                <p className="text-slate-300 group-hover:text-white transition-colors mt-0.5 leading-relaxed">
                  113, Chowk, Loknath, Meerganj, Prayagraj - 211003, UP
                </p>
              </div>
            </a>

            {/* Phone (Direct Call / Wholesale Desk) */}
            <a
              href="tel:+916386041502"
              className="group flex items-start gap-2.5 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Click to call +91 63860 41502"
            >
              <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div className="flex-1">
                <span className="font-bold text-white group-hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5">
                  <span>Wholesale Desk</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                </span>
                <p className="text-emerald-400 font-bold group-hover:text-emerald-300 transition-colors mt-0.5">
                  +91 63860 41502
                </p>
              </div>
            </a>

            {/* Email (Pre-filled draft inquiry) */}
            <a
              href={`mailto:orders@siddhantassociates.com?subject=${encodeURIComponent('Wholesale Inquiry & Rate List - Siddhant Associates')}&body=${encodeURIComponent(
                `Hello Siddhant Associates,\n\nI would like to enquire about wholesale stationery supply and institutional pricing in Prayagraj.\n\n• Institution / Business Name: \n• Contact Person: \n• Contact Number: \n• Location / Area in Prayagraj: \n• Items of Interest: (e.g. Apsara Pencils, Natraj Cartons, 70 GSM Notebooks, Registers)\n• Approximate Quantity: \n\nPlease share your latest B2B master catalog and GST rate proforma.\n\nThank you!`
              )}`}
              className="group flex items-start gap-2.5 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Click to compose draft inquiry email"
            >
              <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div className="flex-1">
                <span className="font-bold text-white group-hover:text-amber-400 transition-colors inline-flex items-center gap-1.5">
                  <span>Email Inquiries</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-amber-400 transition-colors" />
                </span>
                <p className="text-slate-300 group-hover:text-amber-300 transition-colors mt-0.5 break-all">
                  orders@siddhantassociates.com
                </p>
              </div>
            </a>

            {/* Working Hours */}
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div className="flex-1">
                <span className="font-bold text-white block">
                  Operating Hours
                </span>
                <p className="text-slate-400 mt-0.5">
                  Mon - Sat: 9:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Compliance & Legal Row */}
        <div className="border-t border-white/10 mt-6 pt-4 pb-2 flex flex-col items-center text-center text-[11px] text-slate-400">
          {/* Back to Top Button - Compact & Placed Above Copyright */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
            className="w-8 h-8 rounded-full bg-[#143642] hover:bg-natraj-500 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-sm hover:scale-110 active:scale-95 group mb-2.5"
          >
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <div className="max-w-3xl">
            <p className="text-slate-300 font-medium">
              © {new Date().getFullYear()} <strong>Siddhant Associates</strong>. All rights reserved. Registered Stationery Supervisor & Manufacturer.
            </p>
            <p className="text-[10px] text-slate-500 mt-0.5 leading-relaxed">
              Disclaimer: Natraj® and Apsara® are registered trademarks of Hindustan Pencils Pvt. Ltd. Siddhant Associates operates as an authorized dealer and channel distributor for Prayagraj District.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
