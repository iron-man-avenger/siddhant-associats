import type { Product } from '../types/stationery';

export const productsData: Product[] = [
  // --- NATRAJ PRODUCTS ---
  {
    id: 'natraj-621',
    name: 'Natraj 621 Classic Graphite Pencil',
    brand: 'Natraj',
    category: 'school-essentials',
    subCategory: 'Writing Instruments',
    description: 'India’s most trusted red-and-black pencil. Bonded lead technology prevents breakage while sharpening and writing.',
    specifications: [
      'Grade: HB Graphite',
      'Bonded Lead Construction',
      'High-grade soft treated wood',
      'Smooth, dark handwriting performance'
    ],
    packaging: {
      unitPackaging: 'Pack of 10 Pencils + 1 Eraser + 1 Sharpener',
      masterCarton: '50 Boxes (500 Pencils) per Master Carton',
      moq: '5 Master Cartons'
    },
    features: ['Break-Resistant', 'Soft Wood for Easy Sharpening', 'Child-Safe Non-Toxic'],
    badge: 'Iconic Bestseller',
    popularFor: 'Primary & Middle School Students, Daily Writing',
    iconName: 'Pencil'
  },
  {
    id: 'natraj-bold',
    name: 'Natraj Bold Extra Dark Pencil',
    brand: 'Natraj',
    category: 'school-essentials',
    subCategory: 'Writing Instruments',
    description: 'Specially formulated dark lead pencil engineered for effortless pressure-free writing and neat handwriting development.',
    specifications: [
      'Extra Dark 2B Lead Core',
      'Hexagonal grip profile',
      'Super-bonded lead prevents lead tip snapping'
    ],
    packaging: {
      unitPackaging: 'Pack of 10 Pencils',
      masterCarton: '50 Boxes per Master Carton',
      moq: '5 Master Cartons'
    },
    features: ['Dark Impression', 'Ergonomic Grip', 'Smooth Flow'],
    badge: 'High Demand',
    popularFor: 'Board Exam Preparation & Speed Writing',
    iconName: 'Pencil'
  },
  {
    id: 'natraj-dust-free-eraser',
    name: 'Natraj Dust-Free Clean Eraser',
    brand: 'Natraj',
    category: 'school-essentials',
    subCategory: 'Erasers & Accessories',
    description: 'Dust rolls together into neat strands rather than messy dust particles, keeping notebooks and exam sheets clean.',
    specifications: [
      'Phthalate-free formulation',
      'Minimal paper tear design',
      'High absorption of graphite particles'
    ],
    packaging: {
      unitPackaging: 'Display Box of 20 / 30 Pcs',
      masterCarton: '60 Display Boxes per Carton',
      moq: '3 Master Cartons'
    },
    features: ['Rolls Together Cleanly', 'Smudge-Free Erasing', 'Safe for Children'],
    badge: 'School Essential',
    popularFor: 'Classrooms, Art Classes, Neat Bookwork',
    iconName: 'Eraser'
  },
  {
    id: 'natraj-sharpener',
    name: 'Natraj 621 Long Point Sharpener',
    brand: 'Natraj',
    category: 'school-essentials',
    subCategory: 'Sharpeners & Accessories',
    description: 'Precision angled rust-resistant steel blade produces a needle-sharp long writing point without lead breakage.',
    specifications: [
      'High-tempered steel blade',
      'Anti-lead snapping curvature',
      'Contoured finger grip'
    ],
    packaging: {
      unitPackaging: 'Jar of 50 Pcs / Box of 20 Pcs',
      masterCarton: '40 Jars per Master Carton',
      moq: '2 Master Cartons'
    },
    features: ['Rust-Resistant Blade', 'Precision Angle', 'Durable Acrylic Body'],
    popularFor: 'Everyday School & Office Pencil Maintenance',
    iconName: 'Scissors'
  },
  {
    id: 'natraj-scale',
    name: 'Natraj Crystal Clear 15cm & 30cm Rulers',
    brand: 'Natraj',
    category: 'school-essentials',
    subCategory: 'Measurement Instruments',
    description: 'Transparent high-impact virgin plastic scale with bold millimeter and inch calibrations that do not rub off.',
    specifications: [
      'Virgin transparent acrylic',
      'Rounded safety edges',
      'Scratch-resistant printed markings'
    ],
    packaging: {
      unitPackaging: 'Pack of 10 / 20 Rulers',
      masterCarton: '50 Packs per Master Carton',
      moq: '4 Master Cartons'
    },
    features: ['Zero-Slip Edge', 'Crystal Transparent', 'Rounded Safety Corners'],
    popularFor: 'Geometry, Technical Drawing, General Schoolwork',
    iconName: 'Ruler'
  },

  // --- APSARA PRODUCTS ---
  {
    id: 'apsara-platinum',
    name: 'Apsara Platinum Extra Dark Pencil',
    brand: 'Apsara',
    category: 'school-essentials',
    subCategory: 'Writing Instruments',
    description: 'The definitive benchmark in dark pencils. Needs no pressure while writing, creating distinct handwriting that stands out.',
    specifications: [
      'Signature Silver & Black aesthetic',
      'Ultra-dense micro-carbon graphite core',
      'Treated wood for velvet-smooth sharpening'
    ],
    packaging: {
      unitPackaging: 'Pack of 10 Pencils + Premium Eraser & Point Protector Sharpener',
      masterCarton: '50 Boxes per Master Carton',
      moq: '5 Master Cartons'
    },
    features: ['Requires Less Pressure', 'Dark Clear Handwriting', 'Includes Point Protector'],
    badge: 'Premium Bestseller',
    popularFor: 'Board Examinations, Handwriting Improvement',
    iconName: 'Pencil'
  },
  {
    id: 'apsara-absolute',
    name: 'Apsara Absolute Extra Strong Lead Pencil',
    brand: 'Apsara',
    category: 'school-essentials',
    subCategory: 'Writing Instruments',
    description: 'Engineered with extraordinary lead tensile strength. Withstands heavy writing pressure without tip fracturing.',
    specifications: [
      'High-compression bonded carbon lead',
      'Dark impression with break-defying core',
      'Ideal for heavy-handed writers'
    ],
    packaging: {
      unitPackaging: 'Pack of 10 Pencils + Long Point Sharpener',
      masterCarton: '50 Boxes per Master Carton',
      moq: '5 Master Cartons'
    },
    features: ['Break-Defying Core', 'Dense Black Output', 'Superior Wood Casing'],
    badge: 'Extra Strong',
    popularFor: 'Heavy Writing Pressure, Students, Architects',
    iconName: 'Pencil'
  },
  {
    id: 'apsara-non-dust-eraser',
    name: 'Apsara Non-Dust Jumbo Eraser',
    brand: 'Apsara',
    category: 'school-essentials',
    subCategory: 'Erasers & Accessories',
    description: 'Soft white eraser specially formulated for extra dark pencil graphite. Erases without tearing delicate exam paper.',
    specifications: [
      'Soft vinyl compound',
      'Non-abrasive paper-safe formula',
      'Lint-free collection'
    ],
    packaging: {
      unitPackaging: 'Box of 20 / 30 Pcs',
      masterCarton: '60 Boxes per Master Carton',
      moq: '3 Master Cartons'
    },
    features: ['Paper-Safe Formulation', 'Leaves No Colored Residue', 'Gentle on Thin Pages'],
    popularFor: 'School & College Examination Answer Sheets',
    iconName: 'Eraser'
  },
  {
    id: 'apsara-wax-crayons',
    name: 'Apsara Wax Crayons & Oil Pastels',
    brand: 'Apsara',
    category: 'art-creative',
    subCategory: 'Art & Coloring',
    description: 'Rich, vibrant pigmentation with smooth stroke laydown. Free from harmful chemicals, perfect for junior and art classes.',
    specifications: [
      '12 & 16 Vibrant Color Assortments',
      'High opacity pigment formula',
      'EN-71 / BIS Child Safety Certified'
    ],
    packaging: {
      unitPackaging: 'Pack of 12 / 16 / 24 Shades',
      masterCarton: '40 Outer Cartons per Master',
      moq: '3 Master Cartons'
    },
    features: ['Non-Toxic Colors', 'Smooth Blending', 'Break-Resistant Sticks'],
    badge: 'Art Series',
    popularFor: 'Pre-Primary, Primary Schools & Art Academies',
    iconName: 'Palette'
  },
  {
    id: 'apsara-geometry-box',
    name: 'Apsara Mathematical Geometry Instruments Set',
    brand: 'Apsara',
    category: 'school-essentials',
    subCategory: 'Mathematical Instruments',
    description: 'Self-centering compass and divider mechanism ensuring zero wobble during precision circle and angle drafting.',
    specifications: [
      'Die-cast zinc alloy compass & divider',
      'Clear acrylic protractor and set squares',
      'Durable embossed tin storage box'
    ],
    packaging: {
      unitPackaging: 'Individual Metal Tin Box',
      masterCarton: '60 Metal Boxes per Master Carton',
      moq: '2 Master Cartons'
    },
    features: ['Self-Centering Compass', 'High Precision Calibrations', 'Sturdy Rust-Free Tin'],
    badge: 'Precision Line',
    popularFor: 'Middle & Senior High School Geometry & CBSE/ICSE Board Labs',
    iconName: 'Compass'
  },

  // --- SIDDHANT IN-HOUSE MANUFACTURED PRODUCTS ---
  {
    id: 'siddhant-school-notebooks',
    name: 'Siddhant Super-Grade School Notebooks',
    brand: 'Siddhant Manufactured',
    category: 'in-house-paper',
    subCategory: 'Manufactured Paper Stationery',
    description: 'Manufactured in-house under strict supervisor checks. Premium 70 GSM high-opacity brightness paper with smudge-proof ink absorption.',
    specifications: [
      'Paper Quality: 70 GSM High-Bulk Maplitho',
      'Variants: Four-Line, Square-Grid, Single-Line, Interleaf',
      'Cover: 250 GSM Gloss Laminated Art Card',
      'Binding: Machine Center-Stitched with Rounded Safety Corners'
    ],
    packaging: {
      unitPackaging: 'Shrink-wrapped Bundle of 12 Books',
      masterCarton: '120 Books (10 Bundles) per Master Carton',
      moq: '10 Master Cartons'
    },
    features: [
      'Custom School Name & Crest Printing Available',
      'No Ink Bleed (Gel/Fountain Pen Friendly)',
      'Precision Ruling Machinery'
    ],
    badge: 'In-House Production',
    popularFor: 'Annual School Session Supply, Bookstores, Coaching Bundles',
    iconName: 'BookOpen'
  },
  {
    id: 'siddhant-accounting-registers',
    name: 'Siddhant Hardbound Long Accounting Registers',
    brand: 'Siddhant Manufactured',
    category: 'in-house-paper',
    subCategory: 'Manufactured Paper Stationery',
    description: 'Heavy-duty commercial registers built for administrative and legal ledger keeping. Strong spine section-sewn binding.',
    specifications: [
      'Page Counts: 140 / 240 / 360 / 480 Pages',
      'Paper: 75 GSM Pure White Ledger Paper',
      'Binding: Section-sewn canvas spine with hard grey board',
      'Ruling: Standard Account / Single Ruling / Index Column'
    ],
    packaging: {
      unitPackaging: 'Bundle of 6 / 10 Registers',
      masterCarton: '60 Registers per Master Carton',
      moq: '5 Master Cartons'
    },
    features: [
      'Spine-Reinforced for Decade-Long Archival',
      'Lay-Flat Open Design',
      'High-Density Grey Board Cover'
    ],
    badge: 'Supervised Quality',
    popularFor: 'School Admin, Corporate Accounts, Wholesalers, Legal Offices',
    iconName: 'FileText'
  },
  {
    id: 'siddhant-exam-pads',
    name: 'Siddhant Examination Answer Sheets & Legal Pads',
    brand: 'Siddhant Manufactured',
    category: 'in-house-paper',
    subCategory: 'Examination & Institutional Papers',
    description: 'Standardized examination papers produced to institutional specifications with barcode/roll number headers.',
    specifications: [
      'Pre-punched thread holes for easy tag binding',
      'Paper: 65 - 70 GSM Opaque Examination Stock',
      'Perforated tear-off margin'
    ],
    packaging: {
      unitPackaging: 'Shrink pack of 100 / 200 Loose Sheets',
      masterCarton: '2,000 Sheets per Master Carton',
      moq: '10 Master Cartons'
    },
    features: ['Institutional Header Customization', 'Thread Tag Ready', 'High Tear Resistance'],
    popularFor: 'Schools, College Terminals & Prayagraj Coaching Test Series',
    iconName: 'FileCheck'
  },
  {
    id: 'siddhant-lever-arch-files',
    name: 'Siddhant Institutional Box Files & Cobra Spring Files',
    brand: 'Siddhant Manufactured',
    category: 'office-institutional',
    subCategory: 'Filing & Office Organization',
    description: 'Rigid board box files with imported nickel-plated lever arch clip and finger pull ring for heavy archival use.',
    specifications: [
      'Board: 2.5 mm High-Density Import Strawboard',
      'Mechanism: High-tension nickel-plated clamp',
      'Reinforced metal edge protector shoe'
    ],
    packaging: {
      unitPackaging: 'Shrink bundle of 10 Files',
      masterCarton: '50 Files per Master Carton',
      moq: '4 Master Cartons'
    },
    features: ['Rust-Proof Clip Mechanism', 'Spine Label Pocket', 'Metal Base Protection'],
    badge: 'Durable Archival',
    popularFor: 'Offices, High Court Legal Chambers, School Record Rooms',
    iconName: 'FolderArchive'
  },
  {
    id: 'b2b-admin-pens',
    name: 'Institutional Smooth Ball & Whiteboard Marker Assortment',
    brand: 'Institutional B2B',
    category: 'office-institutional',
    subCategory: 'Administrative Writing',
    description: 'Bulk supply of high-mileage ball pens, evaluation red/blue checking pens, and dry-wipe whiteboard markers.',
    specifications: [
      'Low-viscosity oil-based ink for 1,500m writing run',
      'Checking Pens: Red, Green, Blue, Black',
      'Whiteboard Markers: High-density non-toxic alcohol ink'
    ],
    packaging: {
      unitPackaging: 'Box of 20 / 50 Pens',
      masterCarton: '100 Boxes per Master Carton',
      moq: '5 Master Cartons'
    },
    features: ['Leak-Proof Air Vented Caps', 'Fade-Resistant Ink', 'Tender-Grade Supply'],
    popularFor: 'Teachers Evaluation, Coaching Classrooms, Offices',
    iconName: 'PenTool'
  }
];
