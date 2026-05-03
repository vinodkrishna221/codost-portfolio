# Website Specification — Codost Portfolio
> Version: 1.0
> Created: 2026-04-25
> Pages: Homepage (single-page) + "Why You Need a Website" (dedicated page)
> Design System: See `DESIGN_SYSTEM.md`

---

## 📑 Site Map

```
codost.in (or codost.tech)
├── / ........................ Homepage (single scroll page)
│   ├── #hero ............... Hero Section
│   ├── #services ........... Services Overview
│   ├── #work ............... Portfolio / Our Work
│   ├── #why-codost ......... Why Choose Us
│   ├── #process ............ How We Work
│   ├── #pricing ............ Pricing Packages
│   ├── #testimonials ....... Client Testimonials (placeholder)
│   ├── #about .............. About Us / Team
│   ├── #cta ................ Final CTA Section
│   └── footer .............. Footer
├── /why-website ............ Why Your Business Needs a Website
└── /blog ................... Blog (future, SEO)
```

---

## 📌 Global Elements

### Navigation Bar
- **Type:** Floating pill, sticky after 100px scroll
- **Items:** `Logo` · `Services` · `Work` · `About` · `[Book a Call ↗]`
- **Mobile:** Hamburger menu → slide-down overlay
- **CTA:** "Book a Call ↗" — always visible, teal pill button
- **Scroll behavior:** Links smooth-scroll to sections with `scroll-margin-top`

### Footer
- **Column 1:** Codost logo + "We Turn Local Reputation Into Online Revenue." + location (Kurnool, Andhra Pradesh)
- **Column 2:** Quick links (Services, Work, About, Why Website)
- **Column 3:** Contact (WhatsApp link, Email, Phone)
- **Column 4:** Social links (GitHub, LinkedIn, Instagram)
- **Bottom bar:** "© 2026 Codost. Built with ❤️ in Andhra Pradesh."
- **Background:** `--color-dark-surface` (#0f172a)
- **Text:** `--color-dark-text` (#f1f5f9)

---

## 🏠 Homepage — Section by Section

---

### Section 1: Hero
**Goal:** Instantly communicate what Codost does and hook the local business owner.

| Element | Content |
|---------|---------|
| **Availability badge** | 🟢 "Accepting new projects" (green dot + text, pill badge) |
| **Headline (H1, display)** | "Great Reviews on Google Maps? Now Let's Build You a Website That Matches." |
| **Subheadline (body-lg)** | "We help local businesses in Andhra Pradesh go from word-of-mouth to online presence. Beautiful websites, fair prices, zero headaches." |
| **Primary CTA** | "Book a Free Call ↗" (teal pill, links to Calendly/Cal.com) |
| **Secondary CTA** | "See Our Work ↓" (ghost button, scrolls to #work) |
| **Social proof** | "★★★★★ 5 projects delivered · Trusted by businesses across AP" with small avatar stack |

**Layout:**
- Desktop: Centered text, max-width 720px
- No hero image — text-only hero with dot grid background spawned on top of the headline(very light teal-to-transparent radial)
- The headline should have Satoshi Bold, -2.5px letter spacing

**Animation:**
- Badge fades in first (200ms)
- Headline fades up (400ms, 100ms delay)
- Subheadline fades up (400ms, 200ms delay)
- CTAs fade up (400ms, 300ms delay)

---

### Section 2: Services Overview
**Goal:** Show what Codost offers at a glance.

| Element | Content |
|---------|---------|
| **Section badge** | "What We Do" (caption, teal pill) |
| **Headline (H2)** | "Everything Your Business Needs Online" |
| **Subheadline** | "From a simple 5-page website to a full e-commerce store with payments — we've got you covered." |

**Service Cards (4-column grid on desktop, 2 on tablet, 1 on mobile):**

| # | Icon | Title | Description |
|---|------|-------|-------------|
| 1 | 🌐 `Globe` | Website Design & Development | Professional, mobile-first websites that showcase your business and bring enquiries. |
| 2 | 🛒 `ShoppingCart` | E-Commerce Stores | Sell online with Razorpay, UPI & COD. Product catalogues, order management, GST invoices. |
| 3 | 📱 `Smartphone` | Google Business & Social | Google Business profile setup, social media integration, WhatsApp click-to-chat. |
| 4 | 📈 `TrendingUp` | SEO & Digital Growth | Get found on Google. Meta tags, local SEO, Google Ads setup, monthly performance reports. |

**Card style:** Service Card component from DESIGN_SYSTEM.md
**Each card:** Lucide icon (48px, teal) + H4 title + body text

---

### Section 3: Portfolio / Our Work
**Goal:** Showcase technical capability with real projects.

| Element | Content |
|---------|---------|
| **Section badge** | "Our Work" (caption, teal pill) |
| **Headline (H2)** | "Projects We've Built" |
| **Subheadline** | "Full-stack applications crafted with modern tools. From AI to agriculture — we build it all." |

**Project Cards (2-column grid, staggered entry animations):**

| # | Project Name | Tag | Description | Tech Stack | Link |
|---|-------------|-----|-------------|-----------|------|
| 1 | **Architect** | AI / SaaS | AI-powered tool that generates bulletproof technical blueprints (PRDs, specs) before you write code. Features blackhole animations and cinematic scroll effects. | Next.js · TypeScript · Framer Motion | [Live Demo](https://the-architect-demo.vercel.app) |
| 2 | **Sudori** | E-Commerce / Marketplace | Handicrafts marketplace where artisans register and sell their products. Built for India's local craft economy. | React · TypeScript · Tailwind CSS | [GitHub](https://github.com/vinodkrishna221/sudori) |
| 3 | **KhetiDheko** | AgriTech / Platform | Farmers' marketplace for listing and selling produce with real-time product tracking. Addressing agricultural supply chain gaps. | Next.js · Full-Stack | [GitHub](https://github.com/vinodkrishna221/khetdheko) |
| 4 | **Praxis** | EdTech / AI | AI mock interview platform with an AI interviewer that asks questions, reviews responses, and provides performance scoring. | React · TypeScript · Tailwind CSS | [GitHub](https://github.com/vinodkrishna221/praxis) |
| 5 | **TestCraft** | EdTech / B2B | Question paper generation platform for NEET & JEE coaching centers. Multi-role system (admin, centers). Generate papers in seconds, download in under 5s. | Next.js · PostgreSQL · Full-Stack | Client Project (Vijay Deore) |

**Card layout:**
- Full-width image/screenshot at top (16:10 ratio) with 3D perspective tilt on hover
- Below: Tag pill + Project name (H4) + Description + Tech stack chips + link
- Cards hover: `translateY(-4px)` + shadow elevation

**Note for implementation:** Screenshots need to be captured or 3D mockups generated for each project.

---

### Section 4: Why Choose Codost
**Goal:** Build trust and differentiate from other options.

| Element | Content |
|---------|---------|
| **Section badge** | "Why Codost?" (caption, teal pill) |
| **Headline (H2)** | "Why Businesses Choose Us" |

**Differentiators (3-column grid):**

| # | Icon | Title | Description |
|---|------|-------|-------------|
| 1 | 💰 `IndianRupee` | Fair, Transparent Pricing | No hidden costs. Fixed packages starting at ₹8,000. You know exactly what you're paying for. |
| 2 | ⚡ `Zap` | Fast Delivery | Your website goes live in 7–35 days depending on the package. No months of waiting. |
| 3 | 📱 `Smartphone` | Mobile-First Design | 80% of your customers browse on phones. Every site we build looks perfect on mobile first. |
| 4 | 💬 `MessageCircle` | WhatsApp Support | We're just a WhatsApp message away. Real people, real answers, in Telugu or English. |
| 5 | 🔧 `Wrench` | We Handle Everything | Domain, hosting, design, development, SEO setup — you focus on your business, we handle the tech. |
| 6 | 🤝 `Handshake` | Long-Term Partnership | We don't disappear after delivery. Monthly support plans to keep your site fresh and growing. |

**Style:** Service card pattern with icon + title + short description

---

### Section 5: How We Work
**Goal:** Reduce perceived complexity, make the process feel easy.

| Element | Content |
|---------|---------|
| **Section badge** | "Our Process" (caption, teal pill) |
| **Headline (H2)** | "3 Simple Steps to Your Website" |
| **Subheadline** | "Getting started is easy. No tech knowledge needed." |

**Steps (horizontal on desktop, vertical on mobile):**

| Step | Icon | Title | Description |
|------|------|-------|-------------|
| 1 | 📞 `Phone` | Share Your Vision | Book a free 30-minute call. Tell us about your business, your customers, and what you need. |
| 2 | ✏️ `PenTool` | We Design & Build | We create your website, send you previews, and refine until you love it. |
| 3 | 🚀 `Rocket` | Go Live & Grow | Your website launches! We handle hosting, and you start getting enquiries online. |

**Visual style:**
- Dark accent card (`--color-dark-surface`) for the step container
- Steps connected by a dashed line (horizontal on desktop)
- Each step has a numbered circle (1, 2, 3) in teal
- White text on dark background

---

### Section 6: Pricing Packages
**Goal:** Show clear, affordable packages tailored to local businesses.

| Element | Content |
|---------|---------|
| **Section badge** | "Pricing" (caption, teal pill) |
| **Headline (H2)** | "Simple Pricing. No Surprises." |
| **Subheadline** | "Packages designed for Andhra Pradesh's creative businesses — interior designers, handicraft sellers, textile businesses, and more." |

**Pricing Cards (4-column grid on desktop, scrollable on mobile):**

| Package | Badge | Price | Delivery | Key Features |
|---------|-------|-------|----------|-------------|
| **Digital Presence** | Starter (green) | ₹8,000 – ₹12,000 | 7–10 days | 5-page website, mobile-friendly, WhatsApp button, Google Maps, contact form |
| **Showcase Pro** ⭐ | Most Popular (blue) | ₹18,000 – ₹28,000 | 14–18 days | 8-10 pages, portfolio gallery, SEO setup, social integration, **FREE: domain + Google Business + Telugu content** |
| **Sell Online** | Business (amber) | ₹35,000 – ₹55,000 | 25–35 days | Full e-commerce, Razorpay/UPI/COD, 100 products, order dashboard, GST invoices, **FREE: logo + WhatsApp support** |
| **Brand & Grow** | Premium (red) | ₹70,000 – ₹1,10,000 | 45–60 days | Everything + unlimited products, blog, email marketing, Google/Meta Ads setup, **FREE: brand identity kit + 3 months support** |

**Featured card:** "Showcase Pro" gets a highlighted border (`2px solid --color-primary`) and "⭐ Most Popular" badge

**Below cards — Addon row:**
- Monthly support add-ons: Basic Care (₹800/mo), Active Support (₹2,000/mo), Growth Partner (₹4,500/mo)
- One-time add-ons: Logo Design, Telugu Content

**Payment terms note:** "50% advance · 50% on delivery | Hosting: ₹2,500–₹4,000/year"

---

### Section 7: Testimonials
**Goal:** Social proof from real clients.

| Element | Content |
|---------|---------|
| **Section badge** | "What Clients Say" (caption, teal pill) |
| **Headline (H2)** | "Don't Take Our Word For It" |

**Status:** 🔲 **PLACEHOLDER — Content to be provided by Vinod later**

**Layout plan:**
- Horizontal carousel (paginated, 3 cards visible on desktop, 1 on mobile)
- Each card: Client quote + Name + Business name + Star rating
- Auto-rotate every 5 seconds, pause on hover

---

### Section 8: About Us / Team
**Goal:** Humanize the agency — show the people behind Codost.

| Element | Content |
|---------|---------|
| **Section badge** | "About Us" (caption, teal pill) |
| **Headline (H2)** | "The Faces Behind Your Website" |
| **Subheadline** | "We're two final-year engineering students from Andhra Pradesh who believe every local business deserves a world-class digital presence." |

**Team Cards (2 cards side by side):**

| Member | Role | Detail |
|--------|------|--------|
| **Vinod Krishna** | Founder & Lead Developer | From Yemmiganur, Kurnool district. Full-stack developer specializing in Next.js, React, and AI-powered applications. |
| **Venu Gopal** | Co-Founder & Developer | From Kodumur, Kurnool district. Frontend specialist with expertise in modern web technologies and responsive design. |

**Card style:**
- Photo placeholder (circular, 80px, with teal border ring)
- Name (H4) + Role (body-sm, muted) + Short bio + location tag
- LinkedIn/GitHub icon links

**Context statement (below cards):**
> "Built from a tier-3 college, powered by real-world projects. We've shipped 5 full-stack applications before graduation — from AI platforms to B2B SaaS tools. We bring that same engineering rigor to every local business website we build."

---

### Section 9: Final CTA
**Goal:** One last push to convert. High-contrast, full-width dark section.

| Element | Content |
|---------|---------|
| **Background** | `--color-dark-surface` (#0f172a), full-width |
| **Headline (H2, white)** | "Ready to Take Your Business Online?" |
| **Subheadline (body-lg, muted)** | "Book a free 30-minute call. We'll discuss your business, understand your needs, and give you a clear plan — no obligations." |
| **Primary CTA** | "Book a Free Call ↗" (teal pill, large) |
| **Secondary text** | "or WhatsApp us at +91 XXXXXXXXXX" (with WhatsApp icon) |

**Animation:** The entire section fades in with a slight scale-up (0.98 → 1.0) when scrolled into view.

---

## 📄 Page 2: "Why Your Business Needs a Website"

**Route:** `/why-website`
**Goal:** Educate local business owners who are on the fence about getting a website. This page acts as a soft sales tool — informational, not pushy.

### Content Outline

| Section | Headline | Content |
|---------|----------|---------|
| Hero | "Your Customers Are Searching. Are They Finding You?" | Brief stat: "97% of consumers search online before visiting a local business." |
| Problem | "Google Maps Reviews Are Great. But They're Not Enough." | Explain limitations: no product showcase, no direct enquiries, no credibility for larger orders. |
| Stats Grid | "The Numbers Don't Lie" | 4 stat cards: "97% search online first", "75% judge credibility by website", "60% won't trust a business without one", "3x more enquiries with a website" |
| Benefits | "What a Website Does For Your Business" | 6 benefit cards: 24/7 visibility, professional credibility, product showcase, WhatsApp enquiries, Google discoverability, competitive edge |
| Comparison | "With vs. Without a Website" | Two-column comparison table |
| Social proof | "Businesses Like Yours" | Show 2-3 before/after stories (placeholder for now) |
| CTA | "Let's Get Your Business Online" | Same CTA pattern as homepage final section |

**Design:** Same design system, same components. Clean article-style layout with generous whitespace.

---

## 🎯 Conversion Elements (Global)

| Element | Placement | Behavior |
|---------|-----------|----------|
| **"Book a Call" CTA** | Nav (always visible), Hero, Pricing, Final CTA, Footer | Links to Calendly/Cal.com booking page |
| **WhatsApp floating button** | Bottom-right corner, always visible | Green WhatsApp icon, opens `wa.me/91XXXXXXXXXX` |
| **Exit-intent popup** (future) | Triggered on desktop when cursor leaves viewport | "Before you go — let's chat about your website" + WhatsApp link |

---

## 📱 Responsive Behavior Summary

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Nav | Floating pill, horizontal links | Floating pill, hamburger | Floating pill, hamburger |
| Hero | Centered, 56px heading | Centered, 44px heading | Centered, 36px heading |
| Service cards | 4-column grid | 2-column grid | 1-column stack |
| Project cards | 2-column grid | 2-column grid | 1-column stack |
| Pricing cards | 4-column grid | 2-column grid | Horizontal scroll |
| Team cards | Side by side | Side by side | Stacked |
| Process steps | Horizontal with line | Horizontal with line | Vertical with line |

---

## 🧰 Tech Stack (for implementation)

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (customized with Codost design tokens) |
| Animations | Framer Motion (for scroll reveals, page transitions) |
| Icons | Lucide React |
| Fonts | Satoshi (Fontshare) + Inter (Google Fonts) |
| Deployment | Vercel |
| Analytics | Vercel Analytics or Google Analytics |
| Booking | Cal.com embed or Calendly |
| WhatsApp | Native `wa.me` link |

---

> **Status:** Design system and content specification complete. 
> Ready for implementation once testimonials are confirmed.
