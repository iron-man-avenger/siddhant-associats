import type { PrayagrajZone } from '../types/stationery';

export const prayagrajZones: PrayagrajZone[] = [
  {
    name: 'Chowk & Zero Road Belt',
    zoneType: 'Wholesale Mandi & HQ',
    isHQ: true,
    keyAreas: ['113 Meerganj Depot', 'Chowk Mandi', 'Loknath', 'Zero Road Market', 'Johnstonganj', 'Bahadurganj'],
    dispatchSpeed: 'Priority Same-Day (Morning & Evening)',
    description: 'Primary wholesale trading district and Central Dispatch Depot. Direct factory-rate bulk replenishment with instant GST Input Tax Credit (ITC).'
  },
  {
    name: 'Katra & University Zone',
    zoneType: 'University & Coaching Belt',
    keyAreas: ['Katra Market', 'Allahabad University', 'Netram Chauraha', 'Colonelganj', 'Mumfordganj'],
    dispatchSpeed: 'Same-Day Dispatch (Within 4-6 Hours)',
    description: 'The academic heart of Prayagraj, supporting university students, major coaching chains, and over 150+ student stationery counters.'
  },
  {
    name: 'Civil Lines & High Court Hub',
    zoneType: 'Institutional & Corporate',
    keyAreas: ['MG Marg', 'Subhash Chauraha', 'High Court Complex', 'Tashkent Marg', 'Sardar Patel Marg'],
    dispatchSpeed: 'Scheduled Daily Morning Drops',
    description: 'Corporate institutions, law chambers, banks, premium book emporiums, and renowned private convent schools.'
  },
  {
    name: 'Naini & Industrial Corridor',
    zoneType: 'Industrial & Technical Hub',
    keyAreas: ['Naini Bazaar', 'ADA Colony', 'TSI Industrial Estate', 'SHUATS Campus Belt', 'Dandi'],
    dispatchSpeed: 'Next-Day Guaranteed (24 Hours)',
    description: 'Catering to large residential colonies, technical universities, industrial complexes, and secondary school networks across the Yamuna.'
  },
  {
    name: 'Phaphamau & Shantipuram Hub',
    zoneType: 'Residential & School Belt',
    keyAreas: ['Phaphamau Market', 'Shantipuram Sector A/B', 'Malak Harhar', 'Soraon Road Border'],
    dispatchSpeed: 'Next-Day Guaranteed (24 Hours)',
    description: 'Rapidly growing education corridor home to major CBSE/ICSE boarding schools, engineering institutions, and township retail counters.'
  },
  {
    name: 'Jhunsi & Trans-Ganga Corridor',
    zoneType: 'Trans-Ganga Gateway',
    keyAreas: ['Awas Vikas Jhunsi', 'Andawa Chauraha', 'Habusa Belt', 'GT Road East Corridor'],
    dispatchSpeed: 'Next-Day Guaranteed (24 Hours)',
    description: 'Serving key residential townships, colleges, and regional schools connected towards Varanasi and Gorakhpur highways.'
  }
];

export const tehsilNetworkZone: PrayagrajZone = {
  name: 'Sub-District Tehsils (Soraon, Koraon, Handia, Meja, Shankargarh)',
  zoneType: 'Extended Tehsil Logistics',
  keyAreas: ['Soraon Tehsil Hub', 'Handia Market', 'Koraon Block', 'Meja Road', 'Shankargarh Mandi'],
  dispatchSpeed: 'Bi-Weekly Route Delivery / Dedicated Transport',
  description: 'Dedicated transport vehicle routes ensuring rural and semi-urban stationery retailers, coaching centers, and block schools receive direct factory-rate supply.'
};

