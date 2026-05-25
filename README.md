# RealDom — Nigeria's Verified Rental Marketplace

> A modern proptech landing page built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open in your browser
# http://localhost:3000
```

---

## 🔧 Formspree Setup (Waitlist Form)

To activate the waitlist form:

1. Go to [https://formspree.io](https://formspree.io) and create a free account
2. Create a new form — name it "RealDom Waitlist"
3. Copy your form endpoint URL (looks like: `https://formspree.io/f/xyzabcde`)
4. Open `components/sections/WaitlistSection.tsx`
5. Find this line near the top:

```ts
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID_HERE";
```

6. Replace `YOUR_FORM_ID_HERE` with your actual Formspree form ID

The form will then be fully functional and submissions will appear in your Formspree dashboard.

---

## 📁 Project Structure

```
realdom/
├── app/
│   ├── layout.tsx          # Root layout with metadata and fonts
│   └── page.tsx            # Main page — assembles all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky glassmorphism navbar
│   │   └── Footer.tsx      # Dark elegant footer
│   ├── sections/
│   │   ├── HeroSection.tsx         # Hero with search UI & floating cards
│   │   ├── ProblemSection.tsx      # Nigerian rental pain points
│   │   ├── SolutionSection.tsx     # How RealDom works (3 steps)
│   │   ├── TrustSection.tsx        # Trust & verification features
│   │   ├── FeaturesSection.tsx     # Tenant & landlord features (tabbed)
│   │   ├── PropertyShowcase.tsx    # Sample property listings
│   │   ├── LandlordSection.tsx     # Landlord value proposition
│   │   ├── WaitlistSection.tsx     # Formspree signup form
│   │   └── FAQSection.tsx          # Accordion FAQ
│   └── ui/
│       ├── SectionWrapper.tsx      # Scroll-reveal animation wrapper
│       ├── SectionHeading.tsx      # Reusable heading component
│       └── VerificationBadge.tsx   # Verified badge UI
├── lib/
│   └── utils.ts            # cn() utility (clsx + tailwind-merge)
├── styles/
│   └── globals.css         # Global styles, Tailwind, custom utilities
├── public/                 # Static assets (add your images here)
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary Green | `#166534` |
| Secondary Green | `#22C55E` |
| Accent Sand | `#F5F5DC` |
| Charcoal | `#1a1a2e` |
| Display Font | Playfair Display |
| Body Font | DM Sans |

---

## 🏗️ Tech Stack

- **Next.js 14** — App Router
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations & transitions
- **Lucide React** — Icons
- **Formspree** — Form backend (waitlist)

---

## 📦 Build for Production

```bash
npm run build
npm run start
```

---

## 🌍 Deployment

Deploy instantly to [Vercel](https://vercel.com):

```bash
npx vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

---

## 📝 Customisation Notes

- **Logo**: Replace the `Home` icon in `Navbar.tsx` and `Footer.tsx` with your actual logo SVG
- **Images**: Add real property images to `/public/properties/` and update `PropertyShowcase.tsx`
- **Analytics**: Add Vercel Analytics or Google Analytics in `app/layout.tsx`
- **Colors**: All brand colors are in `tailwind.config.ts`
- **Copy**: All text content lives inside each section component for easy editing

---

*Built for RealDom Technologies Ltd. © 2025*
