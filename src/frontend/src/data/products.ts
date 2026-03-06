export interface Review {
  author: string;
  text: string;
  rating: number;
}

export type ProductCategory = "musculoskeletal" | "gastro" | "derma";

export interface Product {
  id: string;
  name: string;
  brandName: string;
  category: ProductCategory;
  categoryLabel: string;
  image: string;
  formula: string;
  slogan: string;
  indications: string[];
  benefits: string[];
  dosage: string;
  packaging: string;
  compliance?: string[];
  reviews: Review[];
}

export const products: Product[] = [
  {
    id: "inflamora-s",
    name: "Inflamora S",
    brandName: "Rx Inflamora™ S",
    category: "musculoskeletal",
    categoryLabel: "Musculoskeletal",
    image: "/assets/uploads/afb48733-e728-476e-a1ca-4a447058daa3-1.png",
    formula:
      "Aceclofenac 100 mg + Paracetamol 325 mg + Serratiopeptidase 15 mg",
    slogan: "Triple power against pain and inflammation",
    indications: [
      "Ankylosing spondylitis",
      "Rheumatoid arthritis",
      "Osteoarthritis",
      "Low back pain",
      "Surgical pain",
      "Dental pain",
    ],
    benefits: [
      "Inhibits inflammatory cytokines",
      "Reduces prostaglandin production",
      "Improves microcirculation",
      "Reduces swelling and inflammation",
      "Enhances antibiotic penetration",
    ],
    dosage: "BID after food or as directed",
    packaging: "10 × 10 tablets",
    reviews: [
      {
        author: "Dr. R. Sharma",
        text: "Excellent triple-action formula for post-surgical pain management.",
        rating: 5,
      },
      {
        author: "Dr. A. Patel",
        text: "My patients report significantly faster recovery with this combination.",
        rating: 5,
      },
      {
        author: "Dr. M. Verma",
        text: "Serratiopeptidase addition makes a real difference in reducing swelling.",
        rating: 4,
      },
    ],
  },
  {
    id: "inflamora",
    name: "Inflamora",
    brandName: "Rx Inflamora™",
    category: "musculoskeletal",
    categoryLabel: "Musculoskeletal",
    image: "/assets/uploads/bf6b2530-6be2-4973-bb9b-a3a799c2a666-2.png",
    formula: "Aceclofenac 100 mg + Paracetamol 325 mg",
    slogan: "Reliable dual-action pain and inflammation relief",
    indications: [
      "Rheumatoid arthritis",
      "Osteoarthritis",
      "Low back pain",
      "Ankylosing spondylitis",
    ],
    benefits: [
      "Potent anti-inflammatory action",
      "Trusted analgesic and antipyretic",
      "Synergistic pain relief formula",
      "Well-tolerated for long-term use",
    ],
    dosage: "BID after food",
    packaging: "10 × 10 tablets",
    reviews: [
      {
        author: "Dr. S. Iyer",
        text: "Consistent relief for my arthritis patients.",
        rating: 5,
      },
      {
        author: "Dr. P. Gupta",
        text: "Go-to combination for musculoskeletal conditions.",
        rating: 4,
      },
    ],
  },
  {
    id: "voltacure",
    name: "Voltacure",
    brandName: "Rx Voltacure™",
    category: "musculoskeletal",
    categoryLabel: "Musculoskeletal",
    image: "/assets/uploads/21e41145-906a-48da-a278-271609159934-6.png",
    formula: "Paracetamol 325 mg + Diclofenac Potassium 50 mg",
    slogan: "Trusted relief for acute pain",
    indications: [
      "Lumbago",
      "Sciatica / Myalgia",
      "Arthritic pain",
      "Tendonitis",
      "Sprains and strains",
    ],
    benefits: [
      "Central analgesic and antipyretic",
      "Fast-acting NSAID",
      "Inhibits COX enzyme pathway",
      "Reduces prostaglandin synthesis",
    ],
    dosage: "BID after food",
    packaging: "10 × 10 tablets",
    reviews: [
      {
        author: "Dr. N. Singh",
        text: "Potent anti-inflammatory and analgesic combination.",
        rating: 5,
      },
      {
        author: "Dr. R. Mehta",
        text: "Fast onset of action, patients appreciate the relief.",
        rating: 4,
      },
    ],
  },
  {
    id: "voltacure-s",
    name: "Voltacure-S",
    brandName: "Rx Voltacure™-S",
    category: "musculoskeletal",
    categoryLabel: "Musculoskeletal",
    image: "/assets/uploads/dc6cc1b5-d17c-4e5a-80ee-3516fad08197-7.png",
    formula:
      "Diclofenac Potassium 50 mg + Paracetamol 325 mg + Serratiopeptidase 10 mg",
    slogan: "When pain demands quick and faster relief",
    indications: [
      "Acute musculoskeletal pain",
      "Post-operative pain",
      "Orthopedic pain",
      "Sports injuries",
      "Backache and sprains",
      "Dental pain",
    ],
    benefits: [
      "Fast-acting NSAID with persistent synovial concentration",
      "Enhances analgesic effect and reduces fever",
      "Reduces inflammation and swelling",
      "Supports tissue healing",
    ],
    dosage: "Two times daily after food",
    packaging: "10 × 10 tablets",
    reviews: [
      {
        author: "Dr. K. Bose",
        text: "Excellent for post-operative pain — fast and effective.",
        rating: 5,
      },
      {
        author: "Dr. T. Pillai",
        text: "Sports injury patients recover faster with this triple combination.",
        rating: 5,
      },
    ],
  },
  {
    id: "pantaprix",
    name: "Pantaprix",
    brandName: "Rx Pantaprix™",
    category: "gastro",
    categoryLabel: "Gastroenterology",
    image: "/assets/uploads/706e726f-c2f3-4074-9eeb-5bedba163be6-3.png",
    formula: "Pantoprazole Gastro-Resistant Tablets IP 40 mg",
    slogan: "Reliable acid control for lasting gastric comfort",
    indications: [
      "GERD",
      "Peptic ulcer",
      "Acid reflux",
      "Zollinger-Ellison syndrome",
    ],
    benefits: [
      "Proton pump inhibitor",
      "Effective gastric acid reduction",
      "Gastro-resistant formulation",
      "Once-daily convenience",
    ],
    dosage: "Once daily before food",
    packaging: "10 × 10 tablets",
    reviews: [
      {
        author: "Dr. A. Naidu",
        text: "Reliable PPI for our GERD patients, consistent results.",
        rating: 5,
      },
      {
        author: "Dr. S. Reddy",
        text: "Gastro-resistant coating ensures proper drug release.",
        rating: 4,
      },
    ],
  },
  {
    id: "dompancid",
    name: "Dompancid",
    brandName: "Rx Dompancid™",
    category: "gastro",
    categoryLabel: "Gastroenterology",
    image: "/assets/uploads/f3f2ae28-835d-4706-970d-91d95c70a72a-8.png",
    formula:
      "Pantoprazole Gastro-Resistant + Domperidone Prolonged-Release Capsules IP",
    slogan: "Dual action for complete gastric relief",
    indications: [
      "GERD with nausea",
      "Gastroparesis",
      "Functional dyspepsia",
      "Bloating",
    ],
    benefits: [
      "Dual action acid control",
      "Anti-nausea and pro-motility effect",
      "Prolonged-release domperidone",
      "Comprehensive gastric management",
    ],
    dosage: "Once daily before food",
    packaging: "10 × 10 capsules",
    reviews: [
      {
        author: "Dr. V. Krishnan",
        text: "Dual-action capsule significantly improves patient compliance.",
        rating: 5,
      },
      {
        author: "Dr. M. Choudhary",
        text: "Best combination for GERD patients with nausea complaints.",
        rating: 5,
      },
    ],
  },
  {
    id: "benza-clean",
    name: "Benza Clean Face Wash",
    brandName: "Rx Benza Clean",
    category: "derma",
    categoryLabel: "Dermatology",
    image: "/assets/uploads/9aeb521f-8dda-46c6-a5ea-016dee4cf613-5.png",
    formula: "Microsphere Benzoyl Peroxide 4%",
    slogan: "Stops popping and clears skin at root",
    indications: [
      "Mild to moderate acne",
      "Oily and acne-prone skin",
      "Whiteheads and blackheads",
      "Maintenance therapy for acne",
    ],
    benefits: [
      "Kills acne-causing bacteria",
      "Reduces redness and inflammation",
      "Unclogs pores effectively",
      "Controls excess oil",
      "Prevents new breakouts",
    ],
    dosage: "For all skin types",
    packaging: "Net Weight: 70 g",
    reviews: [
      {
        author: "Dr. P. Menon",
        text: "Microsphere technology ensures controlled release for better tolerability.",
        rating: 5,
      },
      {
        author: "Dr. R. Kaur",
        text: "Patients love the results — visible improvement in 2 weeks.",
        rating: 5,
      },
    ],
  },
  {
    id: "dermaviska-cream",
    name: "Dermaviska Cream",
    brandName: "Dermaviska™ Cream",
    category: "derma",
    categoryLabel: "Dermatology",
    image: "/assets/uploads/aa3f881f-88f2-42fb-95ff-d7cdc6533647-9.png",
    formula: "Glycolic Acid + Lactic Acid + Lavender Oil + Urea + Tea Tree Oil",
    slogan: "Goodbye Rough and Dry Skin",
    indications: [
      "Rough skin",
      "Keratosis pilaris",
      "Body acne",
      "Acne marks",
      "Dull skin",
      "Dry skin",
    ],
    benefits: [
      "Deep exfoliation",
      "Intense hydration",
      "Acne control",
      "Soothing action",
      "Skin tone improvement",
    ],
    dosage: "Apply as directed",
    packaging: "Net Weight: 50 g",
    reviews: [
      {
        author: "Dr. S. Sharma",
        text: "Multi-ingredient formula delivers comprehensive skin renewal.",
        rating: 5,
      },
      {
        author: "Dr. N. Joshi",
        text: "Keratosis pilaris patients see remarkable improvement.",
        rating: 4,
      },
    ],
  },
  {
    id: "dermaviska-spray",
    name: "Dermaviska Spray",
    brandName: "Dermaviska™ Spray",
    category: "derma",
    categoryLabel: "Dermatology",
    image: "/assets/uploads/75e1d5fc-133d-4dac-aab4-e3c0d4f1218e-4.png",
    formula: "Benzoyl Peroxide + Salicylic Acid + Provitamin B5 + Zinc PCA",
    slogan: "Target and clear acne with 360° spray action",
    indications: [
      "Acne vulgaris",
      "Back acne",
      "Body acne",
      "Inflammatory acne",
    ],
    benefits: [
      "Triple acne control",
      "Deep pore cleansing",
      "Oil control",
      "Skin barrier support",
    ],
    dosage: "Apply on affected area",
    packaging: "Net Content: 60 ml",
    compliance: ["Paraben free", "Non comedogenic", "Non irritating"],
    reviews: [
      {
        author: "Dr. A. Roy",
        text: "360° spray delivery is perfect for truncal acne — highly effective.",
        rating: 5,
      },
      {
        author: "Dr. L. Kapoor",
        text: "Combination of BPO + Salicylic acid clears body acne rapidly.",
        rating: 5,
      },
    ],
  },
];

export const doctors = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    specialization: "Orthopedic Surgeon",
    qualification: "MBBS, MS Ortho — Apollo Hospitals, Mumbai",
    quote:
      "RiyaMeds musculoskeletal formulations deliver consistent results in post-operative recovery.",
    initials: "RS",
  },
  {
    id: 2,
    name: "Dr. Priya Menon",
    specialization: "Dermatologist",
    qualification: "MBBS, MD Dermatology — AIIMS, New Delhi",
    quote:
      "I recommend Benza Clean and Dermaviska to my patients — scientifically sound formulations.",
    initials: "PM",
  },
  {
    id: 3,
    name: "Dr. Anil Verma",
    specialization: "Sports Medicine Specialist",
    qualification: "MBBS, DNBSM — Fortis Healthcare, Pune",
    quote:
      "Voltacure-S is my go-to recommendation for sports injury and acute musculoskeletal pain.",
    initials: "AV",
  },
  {
    id: 4,
    name: "Dr. Sunita Patel",
    specialization: "General Physician",
    qualification: "MBBS, MD Medicine — Narayana Health, Nashik",
    quote:
      "Trusted quality formulations — I confidently prescribe RiyaMeds to my patients.",
    initials: "SP",
  },
  {
    id: 5,
    name: "Dr. Vikram Kulkarni",
    specialization: "Rheumatologist",
    qualification: "MBBS, MD, DM Rheumatology — KEM Hospital, Mumbai",
    quote:
      "Inflamora-S provides excellent triple-action relief for my rheumatoid arthritis patients.",
    initials: "VK",
  },
  {
    id: 6,
    name: "Dr. Neha Joshi",
    specialization: "Cosmetologist",
    qualification: "MBBS, DVD — Ruby Hall Clinic, Pune",
    quote:
      "Dermaviska Spray is a game-changer for body acne — patients love the 360° delivery system.",
    initials: "NJ",
  },
  {
    id: 7,
    name: "Dr. Suresh Patil",
    specialization: "Pain Management Specialist",
    qualification: "MBBS, MD Anaesthesia — Sahyadri Hospital, Nashik",
    quote:
      "RiyaMeds pain management range has become an essential part of my treatment protocols.",
    initials: "SP",
  },
  {
    id: 8,
    name: "Dr. Kavita Deshmukh",
    specialization: "Physiotherapist & Rehab",
    qualification: "BPT, MPT Orthopedics — Wockhardt Hospital, Nashik",
    quote:
      "My rehabilitation patients recover faster with Voltacure-S — highly recommended.",
    initials: "KD",
  },
];

export const partnerClinics = [
  { id: 1, name: "Apollo Wellness Clinic", city: "Mumbai", type: "Hospital" },
  {
    id: 2,
    name: "Fortis Ortho & Rehab",
    city: "Delhi",
    type: "Orthopedic Centre",
  },
  {
    id: 3,
    name: "Max Dermatology Institute",
    city: "Bangalore",
    type: "Derma Clinic",
  },
  {
    id: 4,
    name: "Medanta Sports Clinic",
    city: "Gurgaon",
    type: "Sports Medicine",
  },
  { id: 5, name: "Narayana Health Hub", city: "Chennai", type: "Hospital" },
  {
    id: 6,
    name: "Manipal Skin & Care",
    city: "Hyderabad",
    type: "Derma Centre",
  },
  {
    id: 7,
    name: "Sahyadri Super Speciality",
    city: "Nashik",
    type: "Hospital",
  },
  {
    id: 8,
    name: "Wockhardt Hospital",
    city: "Nashik",
    type: "Multi-Speciality",
  },
  {
    id: 9,
    name: "Dr. Hedgewar Rugnalay",
    city: "Nashik",
    type: "Hospital",
  },
  {
    id: 10,
    name: "Cure Well Ortho Clinic",
    city: "Nashik",
    type: "Ortho Clinic",
  },
  {
    id: 11,
    name: "Ruby Hall Clinic",
    city: "Pune",
    type: "Hospital",
  },
  {
    id: 12,
    name: "Kokilaben Dhirubhai Ambani",
    city: "Mumbai",
    type: "Hospital",
  },
];
