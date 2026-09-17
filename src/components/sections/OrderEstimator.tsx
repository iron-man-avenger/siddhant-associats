import React, { useState, useMemo } from 'react';
import type { InstitutionType, EstimatorResult } from '../../types/stationery';
import { 
  Calculator, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Users, 
  PackageCheck, 
  AlertCircle,
  Check
} from 'lucide-react';

interface OrderEstimatorProps {
  onOpenQuoteWithEstimate: (estimate: EstimatorResult) => void;
}

export const OrderEstimator: React.FC<OrderEstimatorProps> = ({
  onOpenQuoteWithEstimate
}) => {
  const [studentCount, setStudentCount] = useState<number>(600);
  const [institutionType, setInstitutionType] = useState<InstitutionType>('primary-school');
  const [includeCustomNotebooks, setIncludeCustomNotebooks] = useState<boolean>(true);
  const [includeExamPads, setIncludeExamPads] = useState<boolean>(true);

  // Preset student count buttons
  const studentPresets = [250, 500, 800, 1200, 2500];

  // Dynamic calculation algorithm
  const result: EstimatorResult = useMemo(() => {
    let pencilBoxesPerStudent = 2; // boxes per student per session (20 pencils)
    let erasersPerStudent = 3;
    let sharpenersPerStudent = 2;
    let notebooksPerStudent = 6; // subject notebooks
    let registersPerStudent = 2;
    let examPadsPerStudent = 4; // sheets sets

    if (institutionType === 'secondary-senior') {
      pencilBoxesPerStudent = 1;
      notebooksPerStudent = 4;
      registersPerStudent = 6;
      examPadsPerStudent = 8;
    } else if (institutionType === 'coaching-institute') {
      pencilBoxesPerStudent = 1;
      notebooksPerStudent = 0;
      registersPerStudent = 4;
      examPadsPerStudent = 12; // heavy test series demand
    } else if (institutionType === 'retail-stationery') {
      pencilBoxesPerStudent = 3;
      notebooksPerStudent = 10;
      registersPerStudent = 5;
      examPadsPerStudent = 5;
    }

    // Boxes & Cartons conversions
    // Natraj/Apsara Master Carton = 50 Boxes (500 pencils)
    const pencilsBoxes = Math.round(studentCount * pencilBoxesPerStudent);
    const pencilsCartons = Math.ceil(pencilsBoxes / 50);

    // Erasers: 60 display boxes / carton (each display box 20 erasers)
    const totalErasers = Math.round(studentCount * erasersPerStudent);
    const erasersBoxes = Math.ceil(totalErasers / 20);
    const erasersCartons = Math.ceil(erasersBoxes / 60);

    // Sharpeners: 40 jars / carton (50 sharpeners per jar)
    const totalSharpeners = Math.round(studentCount * sharpenersPerStudent);
    const sharpenersBoxes = Math.ceil(totalSharpeners / 50);
    const sharpenersCartons = Math.ceil(sharpenersBoxes / 40);

    // Notebooks: 120 books per master carton (10 shrink bundles of 12)
    const totalNotebooks = includeCustomNotebooks ? Math.round(studentCount * notebooksPerStudent) : 0;
    const notebooksBundles = Math.ceil(totalNotebooks / 12);
    const notebooksCartons = Math.ceil(totalNotebooks / 120);

    // Registers: 60 registers per master carton
    const totalRegisters = Math.round(studentCount * registersPerStudent);
    const registersBundles = Math.ceil(totalRegisters / 10);
    const registersCartons = Math.ceil(totalRegisters / 60);

    // Exam Pads: 2,000 sheets per master carton
    const totalExamSheets = includeExamPads ? Math.round(studentCount * examPadsPerStudent * 20) : 0;
    const examPadsCartons = Math.ceil(totalExamSheets / 2000);

    const totalCartonsApprox = 
      pencilsCartons + 
      erasersCartons + 
      sharpenersCartons + 
      notebooksCartons + 
      registersCartons + 
      examPadsCartons;

    return {
      studentCount,
      institutionType,
      pencilsBoxes,
      pencilsCartons,
      erasersBoxes,
      erasersCartons,
      sharpenersBoxes,
      sharpenersCartons,
      notebooksBundles,
      registersBundles,
      examPadsCartons,
      totalCartonsApprox,
      recommendedBrands: ['Natraj 621', 'Apsara Platinum', 'Siddhant Super-Grade 70 GSM']
    };
  }, [studentCount, institutionType, includeCustomNotebooks, includeExamPads]);

  // WhatsApp Order Fast-Track URL Generator
  const generateWhatsAppLink = () => {
    const text = `*B2B ESTIMATE INQUIRY - SIDDHANT ASSOCIATES*
---------------------------------------
*Organization Type:* ${institutionType.replace('-', ' ').toUpperCase()}
*Student Strength / Volume:* ${studentCount} Students
*Approx Master Cartons Required:* ${result.totalCartonsApprox} Cartons

*Itemized Breakdown:*
- Pencils: ${result.pencilsCartons} Master Cartons (${result.pencilsBoxes} Boxes)
- Erasers: ${result.erasersCartons} Master Cartons
- Sharpeners: ${result.sharpenersCartons} Master Cartons
- Siddhant Notebooks: ${result.notebooksBundles} Bundles
- Accounting Registers: ${result.registersBundles} Bundles
- Exam Papers: ${result.examPadsCartons} Master Cartons

Please send your official B2B wholesale rate matrix and GST proforma invoice for Prayagraj District.`;

    const encoded = encodeURIComponent(text);
    return `https://wa.me/916386041502?text=${encoded}`;
  };

  return (
    <section id="estimator" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative Brand Accent Background */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-natraj-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-apsara-50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-natraj-500 bg-natraj-50 px-2.5 py-1 rounded-md mb-2.5 border border-natraj-200">
            <Calculator className="w-3.5 h-3.5" />
            Institutional Carton & Order Size Estimator
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-apsara-900 tracking-tight">
            Calculate Your Session's Master Carton Requirements
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
            Designed for school principals, academy administrators, and wholesale stationers across Prayagraj. Input your student strength to calculate required master carton allocations in real-time.
          </p>
        </div>

        {/* Calculator Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          
          {/* Controls Panel (5 Cols) */}
          <div className="lg:col-span-5 bg-ivory-100 rounded-3xl p-5 sm:p-7 border border-gray-200/90 shadow-sm">
            <h3 className="text-sm sm:text-base font-extrabold text-apsara-900 mb-5 flex items-center gap-2">
              <Users className="w-4 h-4 text-natraj-500" />
              <span>Step 1: Input Operational Parameters</span>
            </h3>

            {/* Target Buyer Group / Institution Type */}
            <div className="mb-5">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                Institution / Business Profile
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: 'primary-school', label: 'Primary School (K-5)' },
                  { id: 'secondary-senior', label: 'High School (6-12)' },
                  { id: 'coaching-institute', label: 'Coaching Academy' },
                  { id: 'retail-stationery', label: 'Retail Stationer' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setInstitutionType(type.id as InstitutionType)}
                    className={`p-2.5 rounded-xl text-left text-[11.5px] font-bold transition-all border cursor-pointer ${
                      institutionType === type.id
                        ? 'bg-apsara-700 text-white border-apsara-700 shadow-sm'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Student Count / Volume Slider & Input */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                  Total Student Strength / Volume
                </label>
                <span className="text-base font-extrabold text-natraj-500 bg-white px-2.5 py-0.5 rounded-lg border border-gray-200 shadow-2xs">
                  {studentCount.toLocaleString()} Students
                </span>
              </div>

              <input
                type="range"
                min="100"
                max="5000"
                step="50"
                value={studentCount}
                onChange={(e) => setStudentCount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-natraj-500"
                aria-label="Student strength slider"
              />

              {/* Quick Presets */}
              <div className="flex items-center justify-between mt-2.5 gap-1.5">
                {studentPresets.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setStudentCount(preset)}
                    className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-colors ${
                      studentCount === preset
                        ? 'bg-natraj-500 text-white'
                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Themed Inclusions Toggles */}
            <div className="space-y-2 pt-3.5 border-t border-gray-200">
              <div
                role="checkbox"
                aria-checked={includeCustomNotebooks}
                tabIndex={0}
                onClick={() => setIncludeCustomNotebooks(!includeCustomNotebooks)}
                onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') setIncludeCustomNotebooks(!includeCustomNotebooks); }}
                className={`flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer select-none ${
                  includeCustomNotebooks 
                    ? 'bg-natraj-50/80 border-natraj-300 text-apsara-900 shadow-2xs' 
                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                <span className="text-[11.5px] font-semibold">Include Siddhant 70 GSM School Notebook Bundles</span>
                <div className={`w-4 h-4 rounded-md flex items-center justify-center transition-colors shrink-0 ml-2 ${
                  includeCustomNotebooks ? 'bg-natraj-500 text-white' : 'border border-gray-300 bg-white'
                }`}>
                  {includeCustomNotebooks && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
              </div>

              <div
                role="checkbox"
                aria-checked={includeExamPads}
                tabIndex={0}
                onClick={() => setIncludeExamPads(!includeExamPads)}
                onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') setIncludeExamPads(!includeExamPads); }}
                className={`flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer select-none ${
                  includeExamPads 
                    ? 'bg-natraj-50/80 border-natraj-300 text-apsara-900 shadow-2xs' 
                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                <span className="text-[11.5px] font-semibold">Include Institutional Answer Pads & Practical Files</span>
                <div className={`w-4 h-4 rounded-md flex items-center justify-center transition-colors shrink-0 ml-2 ${
                  includeExamPads ? 'bg-natraj-500 text-white' : 'border border-gray-300 bg-white'
                }`}>
                  {includeExamPads && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mt-5 flex items-start gap-2 p-2.5 bg-white rounded-xl border border-gray-200 text-[11px] text-gray-500">
              <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
              <span>Estimates reflect standard 1-session institutional consumption across CBSE/ICSE schools in Prayagraj.</span>
            </div>

          </div>

          {/* Output Results Panel (7 Cols) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-apsara-900 to-apsara-800 text-white rounded-3xl p-5 sm:p-7 shadow-floating-lg">
            
            {/* Output Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-apsara-700/80 gap-3">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">
                  Step 2: Recommended Allocation
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white mt-0.5">
                  Master Packaging Matrix
                </h3>
              </div>
              <div className="text-left sm:text-right bg-white/10 px-3.5 py-1.5 rounded-xl backdrop-blur-xs border border-white/10">
                <span className="text-[11px] text-ivory-200 block font-medium">Estimated Master Shipment</span>
                <span className="text-xl font-black text-amber-400">
                  ~{result.totalCartonsApprox} Cartons
                </span>
              </div>
            </div>

            {/* Computed Item Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-5">
              
              {/* Pencils Card */}
              <div className="bg-white/5 rounded-2xl p-3.5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11.5px] font-bold text-amber-300">Natraj 621 / Apsara Platinum</span>
                  <PackageCheck className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-xl font-extrabold text-white">
                  {result.pencilsCartons} <span className="text-xs font-normal text-ivory-300">Master Cartons</span>
                </div>
                <p className="text-[10.5px] text-ivory-300 mt-1">
                  Equals {result.pencilsBoxes.toLocaleString()} boxes of 10 ({((result.pencilsBoxes * 10)).toLocaleString()} pencils)
                </p>
              </div>

              {/* Erasers & Sharpeners */}
              <div className="bg-white/5 rounded-2xl p-3.5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11.5px] font-bold text-amber-300">Dust-Free Erasers & Sharpeners</span>
                  <PackageCheck className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-xl font-extrabold text-white">
                  {result.erasersCartons + result.sharpenersCartons} <span className="text-xs font-normal text-ivory-300">Master Cartons</span>
                </div>
                <p className="text-[10.5px] text-ivory-300 mt-1">
                  {result.erasersBoxes} display boxes erasers + {result.sharpenersBoxes} jars sharpeners
                </p>
              </div>

              {/* Notebooks (In-house) */}
              <div className="bg-white/5 rounded-2xl p-3.5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11.5px] font-bold text-amber-300">Siddhant 70 GSM Notebooks</span>
                  <PackageCheck className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-xl font-extrabold text-white">
                  {result.notebooksBundles} <span className="text-xs font-normal text-ivory-300">Bundles</span>
                </div>
                <p className="text-[10.5px] text-ivory-300 mt-1">
                  {(result.notebooksBundles * 12).toLocaleString()} Books (Custom school crest option)
                </p>
              </div>

              {/* Registers & Exam Pads */}
              <div className="bg-white/5 rounded-2xl p-3.5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11.5px] font-bold text-amber-300">Registers & Exam Pads</span>
                  <PackageCheck className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-xl font-extrabold text-white">
                  {result.registersBundles + result.examPadsCartons} <span className="text-xs font-normal text-ivory-300">Units/Cartons</span>
                </div>
                <p className="text-[10.5px] text-ivory-300 mt-1">
                  Section-sewn accounting ledgers + terminal exam sheets
                </p>
              </div>

            </div>

            {/* Trust Statement */}
            <div className="flex items-center gap-2 text-[11px] text-ivory-200 mb-5 bg-white/5 p-2.5 rounded-xl border border-white/5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>
                GST input tax credit (ITC) available. Doorstep delivery arranged across Prayagraj via dedicated company vehicles.
              </span>
            </div>

            {/* Action Buttons: WhatsApp Fast-Track & Quote */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              
              {/* WhatsApp Fast-Track Button */}
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 text-center cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Send Estimate to WhatsApp</span>
              </a>

              {/* Formal Proforma Quote Button */}
              <button
                type="button"
                onClick={() => onOpenQuoteWithEstimate(result)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-natraj-500 hover:bg-natraj-600 text-white font-bold text-xs sm:text-sm shadow-crimson-glow transition-all active:scale-95 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Request GST Proforma Quote</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
