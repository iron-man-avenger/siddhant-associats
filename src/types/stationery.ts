export type ProductCategory = 
  | 'all' 
  | 'school-essentials' 
  | 'art-creative' 
  | 'in-house-paper' 
  | 'office-institutional';

export type BrandType = 'Apsara' | 'Natraj' | 'Siddhant Manufactured' | 'Institutional B2B';

export interface Product {
  id: string;
  name: string;
  brand: BrandType;
  category: ProductCategory;
  subCategory: string;
  description: string;
  specifications: string[];
  packaging: {
    unitPackaging: string; // e.g. "Box of 10 Pencils"
    masterCarton: string;  // e.g. "50 Boxes / 500 Pencils"
    moq: string;           // e.g. "5 Master Cartons"
  };
  features: string[];
  badge?: string;
  popularFor: string;
  iconName: string;
}

export type InstitutionType = 
  | 'primary-school' 
  | 'secondary-senior' 
  | 'coaching-institute' 
  | 'retail-stationery' 
  | 'wholesale-trader';

export interface EstimatorResult {
  studentCount: number;
  institutionType: InstitutionType;
  pencilsBoxes: number;
  pencilsCartons: number;
  erasersBoxes: number;
  erasersCartons: number;
  sharpenersBoxes: number;
  sharpenersCartons: number;
  notebooksBundles: number;
  registersBundles: number;
  examPadsCartons: number;
  totalCartonsApprox: number;
  recommendedBrands: string[];
}

export interface PrayagrajZone {
  name: string;
  zoneType: string;
  keyAreas: string[];
  dispatchSpeed: string;
  description: string;
  isHQ?: boolean;
}

export interface B2BInquiry {
  firmName: string;
  contactPerson: string;
  phone: string;
  email?: string;
  businessType: string;
  prayagrajArea: string;
  gstin?: string;
  selectedProducts: string[];
  estimatedCartons?: number;
  notes?: string;
}
