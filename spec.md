# RiyaMeds Pharma

## Current State
The website is a full-stack pharmaceutical company site with a React frontend and Motoko backend. It includes:
- Hero, About, Therapeutic, Products, Why Choose, Quality, Vision/Mission, Doctors, Contact sections
- Customer inquiry form that stores submissions in the backend via `submitInquiry`
- Backend exposes `getAllInquiries`, `getInquiryCount`, `submitInquiry`
- WhatsApp floating button for direct customer contact
- Animated RiyaMeds SVG logo in the navbar
- Real contact details, doctor profiles, and partner hospitals

Currently missing: an admin panel where the company owner can log in and view all customer inquiries submitted through the contact form.

## Requested Changes (Diff)

### Add
- Admin login page at `/admin` route (using Internet Identity / authorization component)
- Admin dashboard showing all submitted inquiries in a clean table/card list
- Each inquiry shows: name, phone, email, message, and timestamp
- "Admin" link visible only when logged in (or a hidden route at `/admin`)
- Inquiry count badge/stat at the top of the admin panel
- Logout button in the admin panel

### Modify
- `App.tsx` to support routing between the main website (`/`) and the admin panel (`/admin`)
- Backend `getAllInquiries` to be restricted so only the canister controller/admin can access it (use authorization component)

### Remove
- Nothing

## Implementation Plan
1. Select `authorization` Caffeine component for Internet Identity login
2. Regenerate backend with authorization so `getAllInquiries` is access-controlled
3. Add React Router to the frontend for `/` and `/admin` routes
4. Create `AdminPage.tsx` with:
   - Login state check (redirect to login if not authenticated)
   - Internet Identity login button
   - Inquiry list with name, phone, email, message, date
   - Logout button
   - Stats header (total inquiry count)
5. Update `App.tsx` to route between main site and admin panel
6. Add a small "Admin" footer link or hidden `/admin` URL access
