import React, { useState, useMemo } from 'react';
import { productsData } from '../../data/productsData';
import type { ProductCategory, BrandType, Product } from '../../types/stationery';
import { 
  Check, 
  Search, 
  Send, 
  BookOpen, 
  Layers, 
  Sparkles, 
  ArrowUpRight, 
  Filter,
  MessageCircle
} from 'lucide-react';
import { CustomDropdown } from '../common/CustomDropdown';

interface ProductCatalogProps {
  onSelectProductForQuote: (product: Product) => void;
  onOpenEstimator: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProductForQuote,
  onOpenEstimator
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'school-essentials', label: 'School Essentials' },
    { id: 'art-creative', label: 'Art & Creative' },
    { id: 'in-house-paper', label: 'In-House Paper' },
    { id: 'office-institutional', label: 'Office & Structural' },
  ];

  const brands = ['all', 'Natraj', 'Apsara', 'Siddhant Manufactured', 'Institutional B2B'];

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.popularFor.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesBrand && matchesSearch;
    });
  }, [selectedCategory, selectedBrand, searchQuery]);

  const getProductVisualHeader = (brand: BrandType) => {
    switch (brand) {
      case 'Natraj':
        return {
          bg: 'bg-gradient-to-r from-[#A8201A] via-[#8E1B15] to-[#450A07]',
          tag: 'Natraj Classic Lead',
          border: 'border-natraj-500',
        };
      case 'Apsara':
        return {
          bg: 'bg-gradient-to-r from-[#143642] via-[#1E4D5E] to-[#0A1A20]',
          tag: 'Apsara Extra Dark',
          border: 'border-apsara-700',
        };
      case 'Siddhant Manufactured':
        return {
          bg: 'bg-gradient-to-r from-[#065F46] via-[#047857] to-[#064E3B]',
          tag: 'Supervised 70-80 GSM',
          border: 'border-emerald-600',
        };
      default:
        return {
          bg: 'bg-gradient-to-r from-[#1E293B] via-[#334155] to-[#0F172A]',
          tag: 'Institutional Grade',
          border: 'border-slate-700',
        };
    }
  };

  return (
    <section id="products" className="py-16 lg:py-24 bg-ivory-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-natraj-500 bg-natraj-50 px-2.5 py-1 rounded mb-2 border border-natraj-200">
              <Layers className="w-3.5 h-3.5" />
              Direct Master Packaging & Carton Specifications
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-apsara-900 tracking-tight">
              Factory & Authorized Product Lines
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1.5 max-w-2xl">
              Certified wholesale cartons for bookshops, schools, and offices across Prayagraj. Order factory-direct with input tax credit (ITC).
            </p>
          </div>

          <button
            onClick={onOpenEstimator}
            className="self-start md:self-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-apsara-700 hover:bg-apsara-800 text-white text-xs font-bold shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <span>Estimate Cartons for Your School</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-3 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
            
            {/* Category Tabs (Scrollbar hidden, centered) */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full lg:w-auto py-0.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as ProductCategory)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-natraj-500 text-white shadow-crimson-glow'
                      : 'text-gray-600 hover:bg-ivory-200 hover:text-apsara-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search and Brand Dropdown */}
            <div className="flex items-center gap-2.5 w-full lg:w-auto shrink-0">
              <div className="relative flex-1 sm:w-56">
                <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search products, SKUs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-natraj-500 bg-ivory-50 text-gray-800"
                />
              </div>

              <CustomDropdown
                options={brands}
                value={selectedBrand}
                onChange={setSelectedBrand}
                placeholder="All Brands"
                icon={<Filter className="w-3.5 h-3.5 text-natraj-500" />}
                theme="crimson"
                className="w-44 sm:w-48"
              />
            </div>

          </div>
        </div>

        {/* Product Cards Grid with Commercial Visual Renders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const visual = getProductVisualHeader(product.brand);
            const waText = encodeURIComponent(
              `Hello Siddhant Associates! I would like to enquire about wholesale pricing and availability for:\n*Product:* ${product.name}\n*Brand:* ${product.brand}\n*Master Packing:* ${product.packaging.masterCarton}\n*MOQ:* ${product.packaging.moq}\n\nPlease share delivery timelines in Prayagraj.`
            );

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-floating card-spatial flex flex-col justify-between group"
              >
                {/* Visual Header Banner */}
                <div>
                  <div className={`p-3.5 text-white relative overflow-hidden ${visual.bg}`}>
                    <div className="flex items-center justify-between relative z-10">
                      <span className="text-[10px] font-black uppercase tracking-widest bg-black/30 backdrop-blur-xs px-2 py-0.5 rounded border border-white/20">
                        {product.brand}
                      </span>
                      {product.badge && (
                        <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-amber-400 text-black flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" />
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[11px] text-white/80">
                      <span className="font-semibold text-white/90">{visual.tag}</span>
                      <span className="text-[9.5px] bg-white/15 px-2 py-0.5 rounded font-mono">
                        Direct Stock
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-4 pb-3">
                    <h3 className="text-base font-extrabold text-apsara-900 leading-snug mb-1.5 group-hover:text-natraj-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[11.5px] text-gray-600 line-clamp-2 mb-3 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Specifications List */}
                    <div className="space-y-1 mb-3 bg-ivory-100/70 p-2.5 rounded-xl border border-gray-100">
                      {product.specifications.slice(0, 3).map((spec, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[11px] text-gray-700">
                          <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Target Segment */}
                    <div className="text-[10.5px] text-gray-500">
                      <strong className="text-apsara-900">Application:</strong> {product.popularFor}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Packaging & Dual Action CTAs (WhatsApp + Quote) */}
                <div className="bg-ivory-100/80 p-3.5 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-2 text-[10.5px] mb-3 text-gray-600">
                    <div>
                      <span className="text-gray-400 block font-medium">Master Packing:</span>
                      <span className="font-bold text-gray-800">{product.packaging.masterCarton}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block font-medium">Minimum Order (MOQ):</span>
                      <span className="font-bold text-natraj-600">{product.packaging.moq}</span>
                    </div>
                  </div>

                  {/* Direct WhatsApp + RFQ Buttons */}
                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/916386041502?text=${waText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs transition-all active:scale-95 text-center"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    <button
                      onClick={() => onSelectProductForQuote(product)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-natraj-500 hover:bg-natraj-600 text-white font-bold text-xs shadow-xs transition-all duration-200 cursor-pointer active:scale-95"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Bulk Quote</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-gray-700 mb-1">No products match your filter</h3>
            <p className="text-xs text-gray-500 mb-4">Try clearing your search query or selecting "All Products".</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedBrand('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-natraj-500 text-white text-xs font-bold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
