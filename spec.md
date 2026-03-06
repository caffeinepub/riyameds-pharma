# RiyaMeds Pharma

## Current State
New project. No existing pages or backend. Logo uploaded at /assets/uploads/image-1.png.

## Requested Changes (Diff)

### Add
- Full pharmaceutical company website for RiyaMeds Pharma Private Limited
- Hero section with company tagline and 3D floating medicine product visualization
- Products section: individual product pages with name, category, benefits, ingredients, usage instructions, and customer reviews
- Product categories: Muscle Recovery (pain relief gels, recovery supplements, sprays) and Dermatology (skin creams, serums, ointments)
- Company About section: mission, vision, founding story, quality standards
- Collaborating Doctors section: doctor profiles with name, specialization, photo, and association
- Partner Clinics & Hospitals section: facility names, locations, and type
- Contact section: helpline numbers, email, address, and inquiry form
- Customer inquiry form: name, email, phone, message, and product of interest
- Customer reviews/testimonials per product
- Navigation with smooth scrolling between sections
- Footer with quick links, contact details, and social placeholders

### Modify
Nothing (new project).

### Remove
Nothing (new project).

## Implementation Plan
1. Backend canister: store product listings (name, category, description, benefits, ingredients, price), customer inquiries (name, email, phone, message, product), and customer reviews (per product: reviewer name, rating, comment)
2. Frontend pages:
   - Landing/Home: hero with 3D floating medicine bottles using Three.js/React Three Fiber, featured products carousel, company highlights
   - Products: grid of all products with filter by category, click to product detail page
   - Product Detail: full info + ingredients + benefits + usage + customer reviews
   - About: company story, mission, vision, certifications
   - Doctors & Partners: doctor cards + clinic/hospital listings
   - Contact: inquiry form + helpline + address map placeholder
3. Color theme: green (#4CAF50 range) and dark navy (#1a2340 range) from logo
4. Use company logo from /assets/uploads/image-1.png throughout site
5. Sample realistic data for products, doctors, clinics, reviews pre-loaded
