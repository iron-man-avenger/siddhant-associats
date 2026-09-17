import React from 'react';
import { prayagrajZones, tehsilNetworkZone } from '../../data/prayagrajZones';
import { MapPin, Truck, Clock, Phone, ArrowRight, ShieldCheck, Building2 } from 'lucide-react';

export const DistributionReach: React.FC = () => {
  const getZoneBadgeClass = (type: string) => {
    switch (type) {
      case 'Wholesale Mandi & HQ':
        return 'bg-natraj-600 text-white font-extrabold shadow-xs';
      case 'University & Coaching Belt':
        return 'bg-blue-100 text-blue-800 border border-blue-200';
      case 'Institutional & Corporate':
        return 'bg-emerald-100 text-emerald-800 border border-emerald-200';
      case 'Industrial & Technical Hub':
        return 'bg-indigo-100 text-indigo-800 border border-indigo-200';
      case 'Residential & School Belt':
        return 'bg-cyan-100 text-cyan-800 border border-cyan-200';
      case 'Trans-Ganga Gateway':
        return 'bg-amber-100 text-amber-800 border border-amber-200';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  return (
    <section id="network" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-natraj-600 bg-natraj-50 px-2.5 py-1 rounded-md mb-2.5 border border-natraj-200">
            <MapPin className="w-3.5 h-3.5 text-natraj-500" />
            Prayagraj District Distribution Footprint
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-apsara-900 tracking-tight">
            Seamless Wholesale Supply Across Every Major Trade Hub
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
            With our centralized warehouse at Chowk and dedicated delivery fleet in Prayagraj, we guarantee consistent stock replenishment for school bookshops, coaching chains, and retail stationers.
          </p>
        </div>

        {/* 6 Core City Hubs - Perfectly Symmetrical 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {prayagrajZones.map((zone, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between ${
                zone.isHQ
                  ? 'bg-gradient-to-b from-natraj-50/50 via-white to-ivory-100 border-2 border-natraj-400 shadow-md relative'
                  : 'bg-ivory-100/90 hover:bg-white rounded-2xl border border-gray-200/90 hover:border-natraj-400 hover:shadow-floating'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5 gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${getZoneBadgeClass(zone.zoneType)}`}>
                    {zone.zoneType}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded shrink-0 border border-emerald-200/60">
                    <Clock className="w-3 h-3" />
                    <span>{zone.dispatchSpeed.split(' ')[0]}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-1.5">
                  <h3 className="text-base font-extrabold text-apsara-900">
                    {zone.name}
                  </h3>
                  {zone.isHQ && (
                    <span className="text-[9.5px] font-extrabold bg-natraj-500 text-white px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0 shadow-xs">
                      Central HQ
                    </span>
                  )}
                </div>

                <p className="text-[11.5px] text-gray-600 mb-3 leading-relaxed">
                  {zone.description}
                </p>

                {/* Key Localities */}
                <div className="mb-3">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                    Covered Localities:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {zone.keyAreas.map((area, aIdx) => (
                      <span
                        key={aIdx}
                        className={`text-[10.5px] font-medium px-2 py-0.5 rounded border text-gray-700 ${
                          zone.isHQ && aIdx === 0
                            ? 'bg-natraj-50 border-natraj-300 font-bold text-natraj-800'
                            : 'bg-white border-gray-200'
                        }`}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2.5 border-t border-gray-200/80 flex items-center justify-between text-[11px] font-semibold text-gray-500">
                <span className="flex items-center gap-1 text-emerald-700">
                  <Truck className="w-3 h-3" />
                  {zone.dispatchSpeed}
                </span>
                {zone.isHQ && (
                  <span className="text-[10px] font-bold text-natraj-600 flex items-center gap-0.5">
                    <Building2 className="w-3 h-3" />
                    Warehouse Direct
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Outer Tehsil Network - Full Width Panoramic Feature Card */}
        <div className="bg-gradient-to-r from-amber-50/70 via-white to-amber-50/40 rounded-2xl p-5 sm:p-6 border border-amber-300/80 hover:border-amber-400 shadow-sm mb-6 transition-all">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10.5px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                  {tehsilNetworkZone.zoneType}
                </span>
                <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-200">
                  <Clock className="w-3 h-3 text-emerald-600" />
                  Bi-Weekly Scheduled Routes
                </span>
                <span className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-gray-600 bg-white px-2 py-0.5 rounded border border-gray-200">
                  <ShieldCheck className="w-3 h-3 text-apsara-600" />
                  Factory Rate Guarantee
                </span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-apsara-900">
                  {tehsilNetworkZone.name}
                </h3>
                <p className="text-xs text-gray-600 max-w-3xl mt-1 leading-relaxed">
                  {tehsilNetworkZone.description}
                </p>
              </div>

              <div className="pt-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
                  Scheduled Tehsil Transport Drop Points:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {tehsilNetworkZone.keyAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-semibold bg-white px-2.5 py-1 rounded-md border border-amber-200 text-gray-800 shadow-xs"
                    >
                      📍 {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-2.5 items-start lg:items-end border-t lg:border-t-0 lg:border-l border-amber-200/70 pt-3 lg:pt-0 lg:pl-6">
              <div className="text-left lg:text-right">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Route Frequency</span>
                <span className="text-xs font-extrabold text-apsara-900 flex items-center gap-1 mt-0.5">
                  <Truck className="w-3.5 h-3.5 text-natraj-500" />
                  Tuesday & Friday Dispatches
                </span>
              </div>
              <a
                href="https://wa.me/916386041502?text=Hello%20Siddhant%20Associates%2C%20I%20want%20to%20inquire%20about%20sub-district%20tehsil%20bulk%20stationery%20delivery%20schedule."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-xs transition-colors whitespace-nowrap"
              >
                <span>Tehsil Route Schedule</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Local Logistics Callout */}
        <div className="bg-apsara-50 rounded-2xl p-5 border border-apsara-200/80 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-apsara-700 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-extrabold text-apsara-900">
                Looking to add your school or bookstore to our daily Prayagraj delivery route?
              </h4>
              <p className="text-xs text-gray-600 mt-0.5">
                We provide scheduled weekly replenishment rounds with verified zero-shortage delivery receipts.
              </p>
            </div>
          </div>

          <a
            href="tel:+916386041502"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-natraj-500 hover:bg-natraj-600 text-white font-bold text-xs shadow-sm transition-all whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Connect with Route Manager</span>
          </a>
        </div>

      </div>
    </section>
  );
};

