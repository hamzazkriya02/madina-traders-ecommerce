# Madina Traders — Complete Frontend

This package is an updated, complete Next.js storefront based on the public Madina Traders repository structure.

## Added / completed
- Responsive homepage with hero, categories, featured products
- Why choose us section, trust stats, testimonials and CTA
- Full footer
- Shop page with search, category filters and sorting
- Product detail pages
- Functional cart using localStorage
- Checkout request screen
- Login/register demo and account screen using localStorage
- About and Contact pages
- Responsive mobile navigation
- WhatsApp support buttons
- Product cards and category-based product visuals

## Important production notes
The login, account, contact form and checkout are frontend demos. Before going live with real orders:
1. Connect authentication to a secure backend/database.
2. Connect checkout/order submission to your order database or email/WhatsApp workflow.
3. Replace the placeholder phone/email in Footer, Contact and WhatsAppButton.
4. Confirm customer-facing prices and product availability.

## Run
```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Latest visual fixes
- Restored the original `public/hero-bg.jpg` field image from the old Madina Traders project.
- Changed the hero headline and supporting text to a cleaner sans-serif font.
- Aligned every product card so Add to Cart buttons sit on the same baseline in each row.
- Added more breathing room above the Why Madina Traders “Our Story” button.
- Added more breathing room above the Account “Sign In / Register” button.
