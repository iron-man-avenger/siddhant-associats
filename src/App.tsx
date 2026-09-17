import { useState } from 'react';
import { TopComplianceBar } from './components/layout/TopComplianceBar';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { BrandTrustStrip } from './components/sections/BrandTrustStrip';
import { ProductCatalog } from './components/sections/ProductCatalog';
import { OrderEstimator } from './components/sections/OrderEstimator';
import { ManufacturingUnit } from './components/sections/ManufacturingUnit';
import { DistributionReach } from './components/sections/DistributionReach';
import { InstitutionalDesk } from './components/sections/InstitutionalDesk';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { BrandMarquee } from './components/common/BrandMarquee';
import { GstVerificationModal } from './components/sections/GstVerificationModal';
import { QuickInquiryModal } from './components/sections/QuickInquiryModal';
import type { Product, EstimatorResult } from './types/stationery';

export function App() {
  const [isGstModalOpen, setIsGstModalOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [inquiryMode, setInquiryMode] = useState<'quote' | 'catalog'>('quote');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [estimateData, setEstimateData] = useState<EstimatorResult | null>(null);

  // Handlers
  const handleOpenQuoteModal = () => {
    setSelectedProduct(null);
    setEstimateData(null);
    setInquiryMode('quote');
    setIsInquiryModalOpen(true);
  };

  const handleOpenCatalogModal = () => {
    setSelectedProduct(null);
    setEstimateData(null);
    setInquiryMode('catalog');
    setIsInquiryModalOpen(true);
  };

  const handleSelectProductForQuote = (product: Product) => {
    setSelectedProduct(product);
    setEstimateData(null);
    setInquiryMode('quote');
    setIsInquiryModalOpen(true);
  };

  const handleOpenQuoteWithEstimate = (estimate: EstimatorResult) => {
    setSelectedProduct(null);
    setEstimateData(estimate);
    setInquiryMode('quote');
    setIsInquiryModalOpen(true);
  };

  const handleScrollToEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-ivory-100 flex flex-col selection:bg-natraj-500 selection:text-white">
      {/* 1. Top Compliance & Fast Contact Ribbon */}
      <TopComplianceBar 
        onOpenGstModal={() => setIsGstModalOpen(true)}
        onOpenCatalogModal={handleOpenCatalogModal}
      />

      {/* 2. Sticky Glassmorphic Navbar */}
      <Navbar 
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenGstModal={() => setIsGstModalOpen(true)}
      />

      {/* Commercial Marquee Ticker directly below Navbar (KK Stationery Style) */}
      <BrandMarquee />

      {/* 3. Main Content Landmark */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection 
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenCatalogModal={handleOpenCatalogModal}
          onOpenGstModal={() => setIsGstModalOpen(true)}
        />

        {/* Brand Authenticity & Trust Badges Strip */}
        <BrandTrustStrip 
          onOpenGstModal={() => setIsGstModalOpen(true)}
        />

        {/* Product Matrices & Master Carton Specifications */}
        <ProductCatalog 
          onSelectProductForQuote={handleSelectProductForQuote}
          onOpenEstimator={handleScrollToEstimator}
        />

        {/* Interactive B2B Carton Estimator */}
        <OrderEstimator 
          onOpenQuoteWithEstimate={handleOpenQuoteWithEstimate}
        />

        {/* In-House Manufacturing & Supervisor Infrastructure */}
        <ManufacturingUnit 
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Prayagraj District Distribution Network */}
        <DistributionReach />

        {/* Institutional Procurement Desk for Schools & Coaching */}
        <InstitutionalDesk 
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      </main>

      {/* 4. Corporate Footer */}
      <Footer 
        onOpenGstModal={() => setIsGstModalOpen(true)}
        onOpenCatalogModal={handleOpenCatalogModal}
      />

      {/* 5. Sticky Floating Mobile Order Desk */}
      <FloatingWhatsApp />

      {/* 6. Modals */}
      <GstVerificationModal 
        isOpen={isGstModalOpen}
        onClose={() => setIsGstModalOpen(false)}
      />

      <QuickInquiryModal 
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        selectedProduct={selectedProduct}
        estimateData={estimateData}
        mode={inquiryMode}
      />
    </div>
  );
}

export default App;
