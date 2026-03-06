# RiyaMeds Pharma

## Current State
Project exists with a previous failed build attempt. No stable frontend code. Product images are uploaded to /assets/uploads/.

## Requested Changes (Diff)

### Add
- Full professional pharmaceutical company website for Riyameds Pharma Private Limited
- Animated logo entrance (fade in + slide down) on page load using uploaded logo images
- Hero section with headline, subtext, tagline, and two CTA buttons
- About Us section with company description
- Vision & Mission section
- Core Values section (Quality, Innovation, Integrity, Patient Focus)
- Therapeutic Areas section (Musculoskeletal Pain Management, Dermatology)
- Product Portfolio section with 9 products using real uploaded product images:
  1. Inflamora S - Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg
  2. Inflamora - Aceclofenac + Paracetamol Tablets
  3. Voltacure - Paracetamol 325mg + Diclofenac Potassium 50mg
  4. Voltacure-S - Diclofenac Potassium 50mg + Paracetamol 325mg + Serratiopeptidase 10mg
  5. Pantaprix - Pantoprazole Gastro-Resistant Tablets IP 40mg
  6. Dompancid - Pantoprazole Gastro-Resistant and Domperidone Prolonged-Release Capsules IP
  7. Benza Clean Face Wash - Benzoyl Peroxide 4%
  8. Dermaviska Cream - Glycolic Acid, Lactic Acid, Lavender Oil, Urea, Tea Tree Oil
  9. Dermaviska Spray - Benzoyl Peroxide + Salicylic Acid + Provitamin B5 + Zinc PCA
- Each product card shows product image, name, formula, indications, and key benefits
- Why Choose Us section with 6 bullet points
- Quality & Research section
- Contact section with inquiry form (Name, Email, Phone, Message fields)
- Backend contact form submission storage
- Sticky navigation with links to all sections: Home, About Us, Therapeutic Areas, Product Portfolio, Why Choose Us, Quality & Research, Vision & Mission, Contact
- Professional medical UI with white + medical blue + teal color palette, soft gradients, clean typography

### Modify
- Nothing (fresh build)

### Remove
- Nothing (fresh build)

## Implementation Plan
1. Motoko backend: store contact inquiries with name, email, phone, message fields; query all inquiries
2. Frontend: single-page app with smooth scroll navigation
3. Navbar: sticky, logo with animated entrance, nav links
4. Hero: full-width with gradient background, animated headline, two CTA buttons
5. About: company description text
6. Therapeutic Areas: two cards (Musculoskeletal, Dermatology)
7. Products: grid of 9 cards with real product images, expandable details
8. Why Choose Us: icon list
9. Quality & Research: informational section
10. Vision & Mission: split layout
11. Core Values: 4-card grid
12. Contact: form wired to backend submitInquiry
13. All sections smooth-scrollable via navbar
