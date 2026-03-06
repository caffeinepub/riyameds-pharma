export interface Review {
  author: string;
  text: string;
  rating: number;
}

export interface Product {
  id: string;
  name: string;
  category: "muscle" | "derma";
  image: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  ingredients: string;
  usage: string;
  price: string;
  reviews: Review[];
}

export const products: Product[] = [
  {
    id: "muscle-relief-gel",
    name: "MuscleRelief Pro Gel",
    category: "muscle",
    image: "/assets/generated/product-muscle-gel.dim_400x400.jpg",
    shortDescription: "Fast-acting topical gel for muscle pain and soreness.",
    fullDescription:
      "MuscleRelief Pro Gel is a clinically formulated, fast-acting topical analgesic designed for athletes and active individuals. It penetrates deep into muscle tissue to deliver rapid pain relief within 15 minutes of application.",
    benefits: [
      "Reduces inflammation rapidly",
      "Fast pain relief within 15 minutes",
      "Non-greasy, quick-absorbing formula",
      "Suitable for professional athletes",
    ],
    ingredients:
      "Diclofenac Diethylamine 1.16%, Methyl Salicylate, Menthol, Linseed Oil",
    usage: "Apply 2–3 times daily on affected area. Massage gently.",
    price: "₹299",
    reviews: [
      {
        author: "Rahul S.",
        text: "Amazing relief after gym, works within minutes!",
        rating: 5,
      },
      {
        author: "Priya M.",
        text: "Best gel I've used for back pain.",
        rating: 4,
      },
      {
        author: "Arun K.",
        text: "Recommended by my physiotherapist.",
        rating: 5,
      },
    ],
  },
  {
    id: "recoverx-capsules",
    name: "RecoverX Capsules",
    category: "muscle",
    image: "/assets/generated/product-recovery-capsules.dim_400x400.jpg",
    shortDescription:
      "Advanced muscle recovery supplement for post-workout recovery.",
    fullDescription:
      "RecoverX Capsules combine the most effective natural ingredients to accelerate your body's post-exercise recovery. Formulated by sports medicine experts, these capsules reduce muscle soreness and improve endurance over time.",
    benefits: [
      "Speeds up muscle repair significantly",
      "Reduces DOMS (Delayed Onset Muscle Soreness)",
      "Improves endurance and stamina",
      "All-natural, scientifically backed formula",
    ],
    ingredients:
      "Ashwagandha 500mg, Magnesium 200mg, Zinc 15mg, Vitamin D3 1000IU",
    usage: "2 capsules daily after workout with a full glass of water.",
    price: "₹549",
    reviews: [
      {
        author: "Vikram T.",
        text: "My recovery has improved drastically.",
        rating: 5,
      },
      {
        author: "Sneha R.",
        text: "Good quality capsules, genuine product.",
        rating: 4,
      },
    ],
  },
  {
    id: "sprint-spray",
    name: "SprintSpray Pain Relief",
    category: "muscle",
    image: "/assets/generated/product-pain-spray.dim_400x400.jpg",
    shortDescription: "Instant cooling spray for joint and muscle pain.",
    fullDescription:
      "SprintSpray delivers targeted pain relief with an instant cooling sensation. Perfect for sports injuries, joint pain, and muscle sprains. The portable design makes it ideal for on-the-go athletes and fitness enthusiasts.",
    benefits: [
      "Instant cooling relief on application",
      "Reduces swelling and inflammation",
      "Portable and easy to use anywhere",
      "No staining on clothes or skin",
    ],
    ingredients: "Ibuprofen 5%, Menthol 3%, Eucalyptus Oil",
    usage: "Spray from 10cm distance on affected area. Repeat 3–4 times daily.",
    price: "₹349",
    reviews: [
      {
        author: "Deepak N.",
        text: "Instant relief, carry it everywhere!",
        rating: 5,
      },
      {
        author: "Meena P.",
        text: "Works great for knee pain.",
        rating: 4,
      },
    ],
  },
  {
    id: "dermaglow-cream",
    name: "DermaGlow Cream",
    category: "derma",
    image: "/assets/generated/product-derma-cream.dim_400x400.jpg",
    shortDescription:
      "Intensive moisturizing cream for dry and sensitive skin.",
    fullDescription:
      "DermaGlow Cream provides intensive 24-hour hydration for even the most sensitive skin types. Developed by dermatologists, it restores your skin's natural moisture barrier and leaves skin feeling smooth, plump, and radiant.",
    benefits: [
      "24-hour deep hydration",
      "Reduces dryness and skin flakiness",
      "Dermatologically tested and certified",
      "Suitable for all skin types including sensitive",
    ],
    ingredients: "Ceramide B3, Hyaluronic Acid, Shea Butter, Vitamin E",
    usage: "Apply morning and night after cleansing. Use on face and body.",
    price: "₹399",
    reviews: [
      {
        author: "Ananya B.",
        text: "Skin feels so smooth now.",
        rating: 5,
      },
      {
        author: "Ritu S.",
        text: "Best moisturizer I've tried.",
        rating: 5,
      },
    ],
  },
  {
    id: "reviveskin-serum",
    name: "ReviveSkin Serum",
    category: "derma",
    image: "/assets/generated/product-skin-serum.dim_400x400.jpg",
    shortDescription: "Anti-aging serum for youthful and glowing skin.",
    fullDescription:
      "ReviveSkin Serum is a high-performance anti-aging formula with a potent blend of retinol, niacinamide, and vitamin C. Clinically proven to reduce fine lines and wrinkles, it reveals noticeably firmer, brighter, more youthful skin.",
    benefits: [
      "Reduces fine lines and wrinkles visibly",
      "Brightens and evens out complexion",
      "Firms skin texture over time",
      "Powerful antioxidant protection",
    ],
    ingredients: "Retinol 0.3%, Niacinamide 5%, Vitamin C 10%, Peptide Complex",
    usage:
      "Apply 3–4 drops at night before moisturizer. Start with alternate nights.",
    price: "₹799",
    reviews: [
      {
        author: "Kavya L.",
        text: "Visible results in 2 weeks!",
        rating: 5,
      },
      {
        author: "Neha D.",
        text: "Expensive but worth every rupee.",
        rating: 4,
      },
    ],
  },
  {
    id: "clearskin-ointment",
    name: "ClearSkin Ointment",
    category: "derma",
    image: "/assets/generated/product-skin-ointment.dim_400x400.jpg",
    shortDescription: "Medicated ointment for acne and blemish-prone skin.",
    fullDescription:
      "ClearSkin Ointment is a dermatologist-approved medicated treatment that targets active acne, prevents new breakouts, and calms redness. Its gentle yet effective formula works on all skin types without causing excessive dryness.",
    benefits: [
      "Clears active acne within days",
      "Prevents future breakouts effectively",
      "Reduces redness and inflammation",
      "Unclogs pores for clearer skin",
    ],
    ingredients: "Benzoyl Peroxide 2.5%, Salicylic Acid 1%, Tea Tree Oil",
    usage: "Apply thin layer on affected areas twice daily after cleansing.",
    price: "₹249",
    reviews: [
      {
        author: "Arjun M.",
        text: "Cleared my acne in 10 days.",
        rating: 5,
      },
      {
        author: "Pooja V.",
        text: "Gentle on skin, very effective.",
        rating: 4,
      },
    ],
  },
];

export const doctors = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    specialization: "Orthopedic Surgeon",
    qualification: "MBBS, MS Ortho",
    quote:
      "RiyaMeds products show consistent results in post-operative recovery.",
    initials: "RS",
  },
  {
    id: 2,
    name: "Dr. Priya Menon",
    specialization: "Dermatologist",
    qualification: "MBBS, MD Dermatology",
    quote:
      "I recommend DermaGlow and ReviveSkin to all my patients — exceptional formulas.",
    initials: "PM",
  },
  {
    id: 3,
    name: "Dr. Anil Verma",
    specialization: "Sports Medicine Specialist",
    qualification: "MBBS, DNBSM",
    quote:
      "SprintSpray and MuscleRelief Gel are my go-to recommendations for athletes.",
    initials: "AV",
  },
  {
    id: 4,
    name: "Dr. Sunita Patel",
    specialization: "General Physician",
    qualification: "MBBS, MD Medicine",
    quote:
      "Genuine quality, I trust RiyaMeds for my patients without hesitation.",
    initials: "SP",
  },
];

export const partnerClinics = [
  { id: 1, name: "Apollo Wellness Clinic", city: "Mumbai", icon: "🏥" },
  { id: 2, name: "Fortis Ortho & Rehab Center", city: "Delhi", icon: "🏨" },
  { id: 3, name: "Max Dermatology Institute", city: "Bangalore", icon: "🔬" },
  { id: 4, name: "Medanta Sports Clinic", city: "Gurgaon", icon: "⚕️" },
  { id: 5, name: "Narayana Health Hub", city: "Chennai", icon: "🏥" },
  { id: 6, name: "Manipal Skin & Care Center", city: "Hyderabad", icon: "💊" },
];

export const testimonials = [
  {
    id: 1,
    name: "Suresh Iyer",
    location: "Chennai",
    text: "RiyaMeds products have genuinely changed my quality of life. The muscle recovery range is outstanding — I'm back to running marathons after my injury.",
    rating: 5,
    initials: "SI",
  },
  {
    id: 2,
    name: "Divya Krishnamurthy",
    location: "Bangalore",
    text: "As someone with sensitive skin, I was skeptical. But DermaGlow Cream is the only product I've used without any reactions. Absolutely love it.",
    rating: 5,
    initials: "DK",
  },
  {
    id: 3,
    name: "Manish Agarwal",
    location: "Delhi",
    text: "My orthopedic surgeon recommended RiyaMeds post-surgery. The results were remarkable — faster healing and far less pain than expected.",
    rating: 5,
    initials: "MA",
  },
  {
    id: 4,
    name: "Lakshmi Narayan",
    location: "Hyderabad",
    text: "I've tried many derma products, but ReviveSkin Serum is extraordinary. My skin looks 5 years younger after just 3 weeks of regular use.",
    rating: 5,
    initials: "LN",
  },
];
