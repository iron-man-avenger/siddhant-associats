import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  onOpenGstModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Carton Estimator', href: '#estimator', hasBadge: true },
    { name: 'Manufacturing', href: '#manufacturing' },
    { name: 'Prayagraj Network', href: '#network' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      aria-label="Main Navigation"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/90 py-2 sm:py-2.5' 
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100 py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Minimalist Brand Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
            <img
              src="/assets/logo-dark.png"
              alt="Siddhant Associates Logo"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
            />

            <div className="flex flex-col">
              <span className="text-sm sm:text-base md:text-lg font-black text-apsara-900 tracking-tight leading-tight group-hover:text-natraj-500 transition-colors whitespace-nowrap">
                SIDDHANT <span className="text-natraj-500">ASSOCIATES</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-gray-500 tracking-wide hidden min-[400px]:block">
                Apsara & Natraj Dealer • Prayagraj
              </span>
            </div>
          </a>

          {/* Minimalist Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[13px] font-semibold text-gray-700 hover:text-natraj-500 transition-colors py-1 group"
              >
                <span>{link.name}</span>
                {link.hasBadge && (
                  <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-natraj-500 animate-pulse align-middle" />
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-natraj-500 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Minimalist Desktop Actions */}
          <div className="hidden md:flex items-center gap-3.5">
            <a
              href="tel:+916386041502"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-natraj-500 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>+91 63860 41502</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-natraj-500 hover:bg-natraj-600 text-white font-bold text-xs shadow-crimson-glow hover:shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 rounded-lg bg-natraj-500 hover:bg-natraj-600 text-white text-xs font-bold shadow-sm active:scale-95 transition-all"
            >
              Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-natraj-500 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          {/* Mobile Brand Header */}
          <div className="flex items-center justify-between pb-3 mb-2.5 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <img
                src="/assets/logo-dark.png"
                alt="Siddhant Associates"
                className="h-7 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xs font-black text-apsara-900 tracking-tight">
                  SIDDHANT <span className="text-natraj-500">ASSOCIATES</span>
                </span>
                <span className="text-[9.5px] font-semibold text-gray-500">
                  Authorized Prayagraj Dealer
                </span>
              </div>
            </div>

            <a
              href="tel:+916386041502"
              className="inline-flex items-center gap-1 text-[10.5px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/80"
            >
              <Phone className="w-3 h-3 text-emerald-600" />
              <span>Call Now</span>
            </a>
          </div>

          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-gray-700 hover:bg-ivory-200 hover:text-natraj-500 transition-colors"
              >
                <span>{link.name}</span>
                {link.hasBadge && (
                  <span className="text-[10px] bg-natraj-50 text-natraj-600 px-2 py-0.5 rounded-full font-bold">
                    Tool
                  </span>
                )}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-gray-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-bold text-white bg-natraj-500 hover:bg-natraj-600 rounded-xl shadow-sm active:scale-95 transition-all"
              >
                <span>Submit Wholesale RFQ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
