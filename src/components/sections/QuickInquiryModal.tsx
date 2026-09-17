import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Package, Download, MapPin, Briefcase } from 'lucide-react';
import type { Product, EstimatorResult } from '../../types/stationery';
import { CustomDropdown } from '../common/CustomDropdown';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: Product | null;
  estimateData?: EstimatorResult | null;
  mode?: 'quote' | 'catalog';
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({
  isOpen,
  onClose,
  selectedProduct,
  estimateData,
  mode = 'quote'
}) => {
  const [firmName, setFirmName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [prayagrajArea, setPrayagrajArea] = useState('Katra / University Hub');
  const [inquiryType, setInquiryType] = useState('School Annual Supply');
  const [cartons, setCartons] = useState(estimateData ? estimateData.totalCartonsApprox.toString() : '15');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setNotes(`Interested in bulk pricing for: ${selectedProduct.name} (${selectedProduct.brand}) - Packaging: ${selectedProduct.packaging.masterCarton}`);
    } else if (estimateData) {
      setCartons(estimateData.totalCartonsApprox.toString());
      setNotes(`Calculated requirement for ${estimateData.studentCount} students: ${estimateData.pencilsCartons} Cartons Pencils, ${estimateData.erasersCartons} Cartons Erasers, ${estimateData.notebooksBundles} Bundles Notebooks.`);
    }
  }, [selectedProduct, estimateData]);

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
    try {
      const inquiryPayload = {
        id: Date.now(),
        firmName,
        contactName,
        phone,
        prayagrajArea,
        inquiryType,
        cartons,
        notes,
        mode,
        selectedProduct: selectedProduct ? `${selectedProduct.name} (${selectedProduct.brand})` : null,
        submittedAt: new Date().toISOString()
      };
      const existingInquiries = JSON.parse(localStorage.getItem('siddhant_inquiries') || '[]');
      existingInquiries.unshift(inquiryPayload);
      localStorage.setItem('siddhant_inquiries', JSON.stringify(existingInquiries.slice(0, 50)));
    } catch {
      // Local storage fallback
    }
    setSubmitted(true);
  };

  const prayagrajLocations = [
    'Katra / University Hub',
    'Chowk / Zero Road Wholesale Belt',
    'Civil Lines / MG Marg',
    'Naini Industrial & Academic Area',
    'Phaphamau / Shantipuram',
    'Jhunsi / Trans-Ganga Corridor',
    'Soraon / Koraon / Handia Tehsils',
    'Other Prayagraj Location'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-apsara-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[85vh] shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
        
        {/* Header - Fixed at top */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-natraj-600 to-natraj-700 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              {mode === 'catalog' ? (
                <Download className="w-5 h-5 text-amber-300" />
              ) : (
                <Send className="w-5 h-5 text-amber-300" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <img src="/assets/logo-light.png" alt="Siddhant Associates" className="h-5 w-auto object-contain" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-natraj-200">
                  Siddhant Associates
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                {mode === 'catalog' ? 'Download 2026 B2B Master Catalog' : 'Request Wholesale RFQ & Price Matrix'}
              </h3>
              <p className="text-xs text-natraj-100 mt-0.5">
                Official Prayagraj Dealership & Manufacturing Desk
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-natraj-100 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content - Smoothly Scrollable with Custom Themed Scrollbar */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-modal-scrollbar flex-1">
          
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-extrabold text-apsara-900">
                {mode === 'catalog' ? 'Catalog Access Granted!' : 'Quotation Request Dispatched!'}
              </h4>
              <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{firmName || 'Valued Partner'}</strong>. Our Prayagraj institutional supply manager will reach you at <strong>{phone}</strong> within 2 business hours with the proforma invoice and wholesale discounts.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/916386041502?text=${encodeURIComponent(
                    `*New Wholesale ${mode === 'catalog' ? 'Catalog & Quote' : 'Quotation'} Request*\n\n• *Firm / School:* ${firmName || 'Not specified'}\n• *Contact Person:* ${contactName || 'Not specified'}\n• *Phone:* ${phone || 'Not specified'}\n• *Area:* ${prayagrajArea}\n• *Inquiry Type:* ${inquiryType}\n• *Estimated Cartons:* ${cartons}\n• *Notes:* ${notes || 'Standard B2B rate list request'}\n\nPlease share your wholesale proforma invoice & catalog.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Follow Up via WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-ivory-200 hover:bg-gray-200 text-gray-700 font-bold text-xs transition-colors"
                >
                  Submit Another Quote
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Product / Estimate context banner if exists */}
              {(selectedProduct || estimateData) && (
                <div className="bg-ivory-100 p-3 rounded-xl border border-gray-200 flex items-center gap-3">
                  <Package className="w-5 h-5 text-natraj-500 shrink-0" />
                  <div className="text-[11px] text-gray-700">
                    <span className="font-bold text-apsara-900 block">
                      {selectedProduct ? `Attached SKU: ${selectedProduct.name}` : `Attached Estimate: ~${estimateData?.totalCartonsApprox} Master Cartons`}
                    </span>
                    <span className="text-gray-500">
                      {selectedProduct ? `${selectedProduct.brand} â€¢ MOQ: ${selectedProduct.packaging.moq}` : `For ${estimateData?.studentCount} Students Session`}
                    </span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Establishment / School Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. St. Joseph Convent / Katra Stationers"
                    value={firmName}
                    onChange={(e) => setFirmName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-natraj-500 bg-ivory-50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-natraj-500 bg-ivory-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 63860 XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-natraj-500 bg-ivory-50"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Prayagraj Delivery Hub / Area *
                  </label>
                  <CustomDropdown
                    options={prayagrajLocations}
                    value={prayagrajArea}
                    onChange={setPrayagrajArea}
                    placeholder="Select Area"
                    icon={<MapPin className="w-3.5 h-3.5 text-natraj-500" />}
                    theme="crimson"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Business / Supply Type
                  </label>
                  <CustomDropdown
                    options={[
                      'School Annual Session Supply',
                      'Retail Bookstore Replenishment',
                      'Coaching Center Examination Supply',
                      'Semi-Wholesale Trade Inquiry',
                      'Custom Manufactured Notebooks'
                    ]}
                    value={inquiryType}
                    onChange={setInquiryType}
                    placeholder="Select Type"
                    icon={<Briefcase className="w-3.5 h-3.5 text-natraj-500" />}
                    theme="crimson"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">
                    Estimated Master Cartons
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={cartons}
                    onChange={(e) => setCartons(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-natraj-500 bg-ivory-50 font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">
                  Specific Requirements / Products / Notes
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Mention specific items (e.g. Natraj 621 pencils, Apsara Platinum, 70 GSM ruled school notebooks, quantity, custom printing needs...)"
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-natraj-500 bg-ivory-50 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-natraj-500 hover:bg-natraj-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-crimson-glow transition-all cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>{mode === 'catalog' ? 'Download Catalog & Request Rate Sheet' : 'Submit Wholesale Quotation Request'}</span>
                </button>
              </div>

              <p className="text-[10px] text-gray-400 text-center">
                Strict Privacy â€¢ No unsolicited spam â€¢ Direct quote from Prayagraj warehouse desk.
              </p>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};


