# Biobuilt Sciences — Next.js E-Commerce Frontend

Modern, production-ready e-commerce storefront for **Biobuilt Sciences**, built with Next.js (App Router), Material UI, and TypeScript.

## Architecture

```
┌─────────────────┐     ┌──────────────────────┐
│  Google Sheets  │◄───►│  Vercel (Hosting +   │
│  (Orders /      │     │   Serverless Fns)    │
│   Inventory)    │     └──────────┬───────────┘
└─────────────────┘                │
                                   │
                          ┌────────▼────────┐
                          │     GitHub      │
                          └─────────────────┘

Frontend: Next.js + MUI
Product catalog: src/data/products.json
Orders API: /api/orders (Vercel Function)
Payment: Mock (ready for Stripe / BTCPay / etc.)
Fulfillment: Mock 3PL (ready for real integration)
```

## Features

- Home page with hero + featured products
- Shop / catalog with category filtering
- Product detail pages (benefits, ingredients)
- Persistent shopping cart (localStorage)
- Cart drawer sidebar
- Checkout with shipping form + mock payment
- Order confirmation page
- Fully responsive Material UI design
- TypeScript throughout

## Getting Started

### 1. Install dependencies

```bash
cd biobuilt-sciences
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in the [Vercel dashboard](https://vercel.com).
3. Vercel will auto-detect Next.js and deploy.
4. Add environment variables (when ready) for Google Sheets / 3PL / payment.

## Connection Points (to complete later)

### Google Sheets (Orders / Inventory)

See comments in `src/app/api/orders/route.ts`.

Suggested env vars:
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_PRIVATE_KEY`
- `GOOGLE_SHEET_ID`

### 3PL Fulfillment

After an order is saved, call your 3PL provider (ShipBob, ShipStation, etc.) from the same API route.

Suggested env vars:
- `THREE_PL_API_KEY`
- `THREE_PL_API_URL`

### Payment

The checkout currently uses a mock flow. Replace with Stripe, BTCPay Server, or another provider. The payment step lives in the Checkout page and should be verified before calling `/api/orders`.

## Project Structure

```
src/
├── app/
│   ├── api/orders/route.ts   # Serverless order handler
│   ├── checkout/
│   ├── order-confirmation/
│   ├── product/[id]/
│   ├── shop/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CartDrawer.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ProductCard.tsx
│   └── Providers.tsx
├── context/
│   └── CartContext.tsx
├── data/
│   └── products.json         # Product catalog
├── lib/
│   └── theme.ts              # MUI theme (Biobuilt branding)
└── types/
    └── index.ts
```

## Branding

Colors and typography are tuned to match the Biobuilt Sciences logo (teal / green DNA + leaf motif). Update `src/lib/theme.ts` to refine further.

---

Built for the architecture shown in the original diagram (Google Sheets ↔ Vercel ↔ GitHub, with mock payment & 3PL).
