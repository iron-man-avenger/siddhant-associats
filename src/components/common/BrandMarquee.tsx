import React from 'react';
import { Sparkles, ShieldCheck, Factory, Truck, Award } from 'lucide-react';

export const BrandMarquee: React.FC = () => {
  const items = [
    { text: 'GeM Registered Vendor', icon: <ShieldCheck className="w-3.5 h-3.5 text-amber-300" /> },
    { text: 'MSME Certified Enterprise', icon: <Award className="w-3.5 h-3.5 text-white" /> },
    { text: 'Official Natraj & Apsara Key Dealer', icon: <Sparkles className="w-3.5 h-3.5 text-amber-300" /> },
    { text: 'Direct Factory Pricing (No Resellers)', icon: <Factory className="w-3.5 h-3.5 text-white" /> },
    { text: 'Prayagraj District Priority Route', icon: <Truck className="w-3.5 h-3.5 text-amber-300" /> },
    { text: '70-80 GSM Supervised Notebook Mills', icon: <Factory className="w-3.5 h-3.5 text-white" /> },
    { text: '100% GST ITC Invoicing Compliant', icon: <ShieldCheck className="w-3.5 h-3.5 text-amber-300" /> },
    { text: 'Same-Day / 24-Hr Doorstep Dispatch', icon: <Truck className="w-3.5 h-3.5 text-white" /> },
  ];

  return (
    <div className="bg-gradient-to-r from-[#941A15] via-[#A8201A] to-[#801611] text-white py-2 overflow-hidden border-y border-natraj-800 shadow-xs select-none relative z-20">
      <div className="animate-marquee flex items-center gap-8 text-[11px] font-bold tracking-wider">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 shrink-0 text-white/95">
            {item.icon}
            <span>{item.text}</span>
            <span className="text-amber-300/80 font-bold">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};
