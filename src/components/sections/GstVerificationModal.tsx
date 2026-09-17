import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, FileCheck, CheckCircle2, Send, Lock, Briefcase, MapPin, ExternalLink } from 'lucide-react';
import { CustomDropdown } from '../common/CustomDropdown';

interface GstVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GstVerificationModal: React.FC<GstVerificationModalProps> = ({
  isOpen,
  onClose
}) => {
  const [firmName, setFirmName] = useState('');
  const [traderGstin, setTraderGstin] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [businessType, setBusinessType] = useState('Retail Bookstore');
  const [submitted, setSubmitted] = useState(false);

  // Reset state whenever modal opens or closes
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-apsara-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
        
        {/* Header - Fixed at top */}
        <div className="p-6 bg-gradient-to-r from-apsara-900 to-apsara-800 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                GST Compliance & Trader Verification
              </h3>
              <p className="text-xs text-ivory-200">
                Official Certification â€¢ Prayagraj District Jurisdiction
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-ivory-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content - Scrollable with Custom Themed Scrollbar */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-modal-scrollbar flex-1">
          
          {/* Official Registry Card */}
          <div className="bg-ivory-100 rounded-2xl p-5 border border-gray-200">
            <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <img
                  src="/assets/logo-dark.png"
                  alt="Siddhant Associates"
                  className="h-6 w-auto object-contain"
                />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Corporate Entity
                </span>
              </div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Active & Verified
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-gray-400 block font-medium">Trade Name:</span>
                <span className="text-sm font-extrabold text-apsara-900">SIDDHANT ASSOCIATES</span>
              </div>
              <div>
                <span className="text-gray-400 block font-medium">Principal Business:</span>
                <span className="font-semibold text-gray-800">
                  Supervisor & Manufacturer of Stationery Items
                </span>
              </div>
              <div>
                <span className="text-gray-400 block font-medium">Key Authorized Dealership:</span>
                <span className="font-semibold text-natraj-600">
                  Apsara & Natraj (Hindustan Pencils Pvt. Ltd.)
                </span>
              </div>
              <div>
                <span className="text-gray-400 block font-medium">Registered Office:</span>
                <a
                  href="https://maps.app.goo.gl/ZhcS29WbZ1qu7LTN9?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-gray-800 hover:text-natraj-600 inline-flex items-center gap-1.5 transition-colors group cursor-pointer"
                  title="Click to view on Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5 text-natraj-500 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>113, Chowk, Loknath, Meerganj, Prayagraj - 211003, UP</span>
                  <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-natraj-600 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Tax Credit Benefit Notice */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
            <FileCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">100% Input Tax Credit (ITC) Pass-Through</span>
              All wholesale stationery despatches and school invoices include computer-generated GST tax invoices and valid E-Way bills for transparent accounting.
            </div>
          </div>

          {/* Downstream Trader Onboarding Form */}
          <div className="pt-2">
            <h4 className="text-sm font-extrabold text-apsara-900 mb-1 flex items-center gap-2">
              <Lock className="w-4 h-4 text-natraj-500" />
              <span>Downstream Trader GST Verification Module</span>
            </h4>
            <p className="text-xs text-gray-500 mb-4">
              Submit your shop/school GSTIN to access tax-exempt institutional billing and confidential wholesale rate contracts.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center text-emerald-800">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <h5 className="font-bold text-sm">Credentials Submitted Successfully!</h5>
                <p className="text-xs mt-1 text-emerald-700">
                  Our compliance officer will verify your GSTIN and activate your wholesale account within 2-4 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs font-bold text-emerald-700 underline"
                >
                  Submit another credential
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Firm / Establishment Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Saraswati Book Depot"
                      value={firmName}
                      onChange={(e) => setFirmName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-natraj-500 bg-ivory-50"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      GSTIN Number (15 Digits) *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={15}
                      placeholder="09XXXXX0000X0ZX"
                      value={traderGstin}
                      onChange={(e) => setTraderGstin(e.target.value.toUpperCase())}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-natraj-500 bg-ivory-50 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Trade Category *
                    </label>
                    <CustomDropdown
                      options={[
                        'Retail Bookstore / Stationer',
                        'Private / Boarding School',
                        'Coaching Institution Chain',
                        'Semi-Wholesale Reseller',
                        'Government Supply Contractor'
                      ]}
                      value={businessType}
                      onChange={setBusinessType}
                      placeholder="Select Category"
                      icon={<Briefcase className="w-3.5 h-3.5 text-natraj-500" />}
                      theme="crimson"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">
                      Primary WhatsApp / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 63860 XXXXX"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-natraj-500 bg-ivory-50"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 rounded-xl bg-apsara-700 hover:bg-apsara-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Verify Credentials & Authorize Wholesale Portal</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};



