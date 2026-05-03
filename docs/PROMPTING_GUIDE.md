# Codost — Section Build Prompting Guide
> Stack: Next.js 15 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide React
> Aesthetic: Luxury Minimal · Light mode · Satoshi (headings) + Inter (body)
> Tagline: "We Turn Local Reputation Into Online Revenue."

---

## Always Attach These Files

```
@[docs/DESIGN_SYSTEM.md]   — tokens, shadows, colors, components
@[docs/WEBSITE_SPEC.md]    — copy, layout rules, section content
```

## Build Order

```
1. Nav → 2. Hero → 3. Services → 4. Work → 5. Why Codost
→ 6. Process → 7. Pricing → 8. Testimonials → 9. About → 10. CTA → 11. Footer
```

---

## Standard Prompt Header (paste at top of every section prompt)

```
Use the frontend-design skill.
@[docs/DESIGN_SYSTEM.md] @[docs/WEBSITE_SPEC.md]

Agency: Codost | Tagline: "We Turn Local Reputation Into Online Revenue."
Audience: Telugu-speaking local business owners — non-technical, trust-driven.
Aesthetic: Luxury Minimal. Light mode. Generous whitespace. Zero generic AI-UI.
Stack: Next.js 15 App Router · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide React
Fonts: Satoshi (headings, from Fontshare) · Inter (body, Google Fonts)
Tokens: Use CSS variables from DESIGN_SYSTEM.md exactly — --color-primary: #0891b2, --color-dark-surface: #0f172a, etc.

Output: Full production-ready TSX. 'use client' only where Framer Motion or state is needed.
Mobile-first responsive. No placeholder copy — use the exact text below.
```

---

## Section 1 — Navigation Bar

**Emotional goal:** *"This agency is professional. I can trust them."*

```
[PASTE STANDARD HEADER ABOVE]

Build the global <Navbar /> component.

LAYOUT:
- Floating pill shape, max-width 720px, centered horizontally
- Left: "Codost." wordmark (Satoshi Bold, teal dot on the period)
- Center: nav links — Services · Work · About
- Right: "Book a Call ↗" primary pill button (--color-primary teal)

BEHAVIOUR:
- On mount: sticky at top, transparent background
- After scrolling 80px: background → white + backdrop-blur(12px) + shadow-md
- Framer Motion: nav enters with y: -20 → 0, opacity: 0 → 1 on load

MOBILE (< 768px):
- Hide center links, show hamburger icon (Lucide Menu)
- Tap hamburger → full-screen slide-down overlay with stacked links
- Overlay: white bg, each link fades in with 60ms stagger

TOKENS: border: 1px solid rgba(0,0,0,0.06) · border-radius: 9999px · height: 64px
```

---

## Section 2 — Hero

**Emotional goal:** *"They understand MY exact problem. This is made for me."*

```
[PASTE STANDARD HEADER ABOVE]

Build the <HeroSection /> component.

CONTENT (use exactly):
- Badge: green pulsing dot + "Accepting new projects" (badge-success style, pill)
- H1 (Satoshi Bold, 56px desktop / 36px mobile, letter-spacing: -2.5px):
  "Great Reviews on Google Maps? Now Let's Build You a Website That Matches."
- Subheadline (Inter 18px, --color-text-secondary):
  "We help local businesses in Andhra Pradesh go from word-of-mouth to online
   presence. Beautiful websites, fair prices, zero headaches."
- Primary CTA: "Book a Free Call ↗" (--color-primary pill button)
- Secondary CTA: "See Our Work ↓" (ghost button, scrolls to #work)
- Social proof row: "★★★★★  5 projects delivered · Trusted by businesses across AP"
  with 3 stacked circular avatar placeholders (32px, teal ring border)

LAYOUT: Centered, max-width: 720px, min-height: 100vh, padding-top: 140px

BACKGROUND: Radial gradient — very faint teal (rgba(8,145,178,0.06)) at center,
transparent at edges. Subtle animated pulse (scale 1→1.05, 4s ease infinite).

FRAMER MOTION stagger sequence:
- Badge: opacity 0→1, delay 0ms, duration 400ms
- H1: y 20→0 + opacity, delay 120ms, duration 500ms
- Subheadline: y 20→0 + opacity, delay 240ms, duration 500ms
- CTAs: y 20→0 + opacity, delay 360ms, duration 500ms
- Social proof: y 10→0 + opacity, delay 480ms, duration 400ms

The pulsing badge dot: CSS keyframe animation, scale 1→1.4→1, opacity 1→0, 2s loop.
```

---

## Section 3 — Services

**Emotional goal:** *"They do everything I need. One stop shop."*

```
[PASTE STANDARD HEADER ABOVE]

Build the <ServicesSection /> component.

HEADER CONTENT:
- Section badge: "What We Do" (teal pill, caption size)
- H2: "Everything Your Business Needs Online"
- Subheadline: "From a simple 5-page website to a full e-commerce store
  with payments — we've got you covered."

4 SERVICE CARDS (grid: 4-col desktop, 2-col tablet, 1-col mobile, gap: 32px):

Card 1 — Icon: Globe (Lucide, 48px teal)
  Title: "Website Design & Development"
  Body: "Professional, mobile-first websites that showcase your business and bring enquiries."

Card 2 — Icon: ShoppingCart
  Title: "E-Commerce Stores"
  Body: "Sell online with Razorpay, UPI & COD. Product catalogues, order management, GST invoices."

Card 3 — Icon: Smartphone
  Title: "Google Business & Social"
  Body: "Google Business profile setup, social media integration, WhatsApp click-to-chat."

Card 4 — Icon: TrendingUp
  Title: "SEO & Digital Growth"
  Body: "Get found on Google. Meta tags, local SEO, Google Ads setup, monthly performance reports."

CARD STYLE (from DESIGN_SYSTEM.md service card):
- bg: white · border: 1px solid --color-border · border-radius: 16px · padding: 32px
- Hover: translateY(-4px) + premium multi-layer shadow (see DESIGN_SYSTEM.md section 6)
- Transition: 300ms cubic-bezier(0.4, 0, 0.2, 1)

ANIMATION: Cards reveal on scroll (IntersectionObserver or Framer Motion whileInView),
stagger 100ms between cards, y: 24→0 + opacity.
```

---

## Section 4 — Portfolio / Work

**Emotional goal:** *"They've shipped real products. These are serious builders."*

```
[PASTE STANDARD HEADER ABOVE]

Build the <WorkSection /> component.

HEADER:
- Badge: "Our Work" (teal pill)
- H2: "Projects We've Built"
- Subheadline: "Full-stack applications crafted with modern tools.
  From AI to agriculture — we build it all."

5 PROJECT CARDS in a 2-column grid (1-col on mobile). 5th card spans full width.

PROJECT DATA:
1. Architect | Tag: "AI / SaaS"
   Desc: "AI-powered tool that generates bulletproof technical blueprints — PRDs,
   specs, database schemas — before you write a single line of code."
   Stack: Next.js · TypeScript · Framer Motion
   Link: https://the-architect-demo.vercel.app

2. Sudori | Tag: "E-Commerce / Marketplace"
   Desc: "Handicrafts marketplace where artisans register, list, and sell products.
   Built for India's local craft economy."
   Stack: React · TypeScript · Tailwind CSS
   Link: https://github.com/vinodkrishna221/sudori

3. KhetiDheko | Tag: "AgriTech / Platform"
   Desc: "Farmers' marketplace for listing and selling produce with real-time
   product tracking. Addressing India's agricultural supply chain gap."
   Stack: Next.js · Full-Stack
   Link: https://github.com/vinodkrishna221/khetdheko

4. Praxis | Tag: "EdTech / AI"
   Desc: "AI mock interview platform with an intelligent interviewer that asks
   questions, reviews responses, and scores performance in real time."
   Stack: React · TypeScript · Tailwind CSS
   Link: https://github.com/vinodkrishna221/praxis

5. TestCraft | Tag: "EdTech / B2B" (label: "Client Project")
   Desc: "Question paper generation platform for NEET & JEE coaching centers.
   Multi-role admin system. Papers generated and downloaded in under 5 seconds."
   Stack: Next.js · PostgreSQL · Full-Stack
   Link: (no link — client project)

CARD ANATOMY:
- Top: 16:10 ratio image area — gradient placeholder (linear teal→sky, low opacity)
  with project name as large watermark text centered inside
- Below: tag badge · H4 project name · body description · tech stack chips
  (small rounded pills, --color-border bg, --color-text-secondary text) · arrow link

HOVER EFFECT: 3D perspective tilt — use Framer Motion useMotionValue for
mouse x/y → rotateX/rotateY (max ±8deg). Shadow elevates on hover.
REVEAL: whileInView, stagger 120ms, y: 30→0 + opacity.
```

---

## Section 5 — Why Choose Codost

**Emotional goal:** *"No jargon. No stress. They handle everything."*

```
[PASTE STANDARD HEADER ABOVE]

Build the <WhyCodestSection /> component.

HEADER:
- Badge: "Why Codost?" (teal pill)
- H2: "Why Businesses Choose Us"

6 DIFFERENTIATOR CARDS (3-col desktop, 2-col tablet, 1-col mobile):

1. Icon: IndianRupee | "Fair, Transparent Pricing"
   "No hidden costs. Fixed packages starting at ₹8,000. You know exactly what you pay."

2. Icon: Zap | "Fast Delivery"
   "Your website goes live in 7–35 days. No months of waiting around."

3. Icon: Smartphone | "Mobile-First Design"
   "80% of customers browse on phones. Every site we build looks perfect on mobile."

4. Icon: MessageCircle | "WhatsApp Support"
   "We're just a WhatsApp message away. Real answers, in Telugu or English."

5. Icon: Wrench | "We Handle Everything"
   "Domain, hosting, design, dev, SEO — you focus on business, we handle the tech."

6. Icon: Handshake | "Long-Term Partnership"
   "We don't disappear after delivery. Monthly support plans keep your site growing."

CARD STYLE: No border. Just icon + title + body. Generous padding (40px).
Icon: 48px, --color-primary teal. Title: H4 Satoshi. Body: Inter 15px muted.
On hover: very subtle background tint (--color-primary-light: #ecfeff).
ANIMATION: Icon bounces in (scale 0→1, spring) when card enters viewport.
```

---

## Section 6 — Process (How We Work)

**Emotional goal:** *"3 steps. That's it. I can do this right now."*

```
[PASTE STANDARD HEADER ABOVE]

Build the <ProcessSection /> component.

HEADER:
- Badge: "Our Process" (teal pill)
- H2: "3 Simple Steps to Your Website"
- Subheadline: "Getting started is easy. No tech knowledge needed."

DARK CONTAINER: background --color-dark-surface (#0f172a), border-radius: 24px,
padding: 64px. All text white / slate-300.

3 STEPS (horizontal row desktop, vertical stack mobile):

Step 1 | Icon: Phone | Number circle: "1" (teal)
Title: "Share Your Vision"
Body: "Book a free 30-minute call. Tell us about your business, your customers,
and what you need."

Step 2 | Icon: PenTool | Number circle: "2"
Title: "We Design & Build"
Body: "We create your website, send you previews, and refine until you love it."

Step 3 | Icon: Rocket | Number circle: "3"
Title: "Go Live & Grow"
Body: "Your website launches! We handle hosting, and you start getting enquiries."

CONNECTOR: Dashed horizontal line between steps on desktop (border-top: 2px dashed
rgba(8,145,178,0.4)). Hidden on mobile.

FRAMER MOTION: Line draws left→right using pathLength 0→1 (SVG line with
strokeDashoffset animation) triggered by whileInView. Steps stagger in after line.
```

---

## Section 7 — Pricing

**Emotional goal:** *"Fair prices. I know exactly what I'm getting."*

```
[PASTE STANDARD HEADER ABOVE]

Build the <PricingSection /> component.

HEADER:
- Badge: "Pricing" (teal pill)
- H2: "Simple Pricing. No Surprises."
- Subheadline: "Packages designed for Andhra Pradesh's creative businesses —
  interior designers, handicraft sellers, textile businesses, and more."

4 PRICING CARDS (4-col desktop, 2-col tablet, horizontal scroll mobile):

Card 1: Digital Presence | Badge: "Starter" (green)
Price: "₹8,000 – ₹12,000" | Delivery: "7–10 days"
Features: 5-page website · Mobile-friendly · WhatsApp button · Google Maps · Contact form
CTA: "Get Started" (secondary button)

Card 2: Showcase Pro ⭐ | Badge: "Most Popular" (teal) ← FEATURED CARD
Price: "₹18,000 – ₹28,000" | Delivery: "14–18 days"
Features: 8-10 pages · Portfolio gallery · SEO setup · Social integration
FREE: Domain + Google Business + Telugu content
CTA: "Get Showcase Pro" (primary teal button)
Style: border: 2px solid --color-primary · shadow-premium · "Most Popular" badge
floats above the card top center

Card 3: Sell Online | Badge: "Business" (amber)
Price: "₹35,000 – ₹55,000" | Delivery: "25–35 days"
Features: Full e-commerce · Razorpay/UPI/COD · 100 products · Order dashboard · GST invoices
FREE: Logo + WhatsApp support
CTA: "Go Online" (secondary button)

Card 4: Brand & Grow | Badge: "Premium" (slate/dark)
Price: "₹70,000 – ₹1,10,000" | Delivery: "45–60 days"
Features: Everything + Unlimited products · Blog · Email marketing · Google/Meta Ads
FREE: Brand identity kit + 3 months support
CTA: "Let's Talk" (secondary button)

Feature list items: Lucide CheckCircle2 icon (teal) + text.
BELOW CARDS: payment terms note in muted text:
"50% advance · 50% on delivery | Hosting: ₹2,500–₹4,000/year"

ANIMATION: Cards fade up on scroll, featured card gets a subtle glow pulse on idle.
```

---

## Section 8 — Testimonials (Placeholder)

**Emotional goal:** *"Real clients. Real results."*

```
[PASTE STANDARD HEADER ABOVE]

Build a <TestimonialsSection /> placeholder component.

HEADER:
- Badge: "What Clients Say" (teal pill)
- H2: "Don't Take Our Word For It"

Show 3 skeleton/shimmer card placeholders in a row.
Each skeleton: circular avatar shimmer · 2 lines of text shimmer · star shimmer
Shimmer animation: CSS gradient sweep left→right, 1.5s loop.

Below the skeletons, centered muted text:
"✦ Client testimonials coming soon"

NOTE: This section will be replaced with real testimonials later.
Keep the layout identical to what real cards will look like so swap-in is easy.
```

---

## Section 9 — About / Team

**Emotional goal:** *"Real people from my own state. I can call them."*

```
[PASTE STANDARD HEADER ABOVE]

Build the <AboutSection /> component.

HEADER:
- Badge: "About Us" (teal pill)
- H2: "The Faces Behind Your Website"
- Subheadline: "We're two engineering students from Andhra Pradesh who believe
  every local business deserves a world-class digital presence."

2 TEAM CARDS side-by-side (stack on mobile):

Card 1:
- Avatar: 96px circle, gradient fill (teal), ring: 3px solid --color-primary
- Name: "Vinod Krishna" (H4 Satoshi)
- Role: "Founder & Lead Developer" (body-sm, muted)
- Location tag: "📍 Yemmiganur, Kurnool" (badge-neutral)
- Bio: "Full-stack developer specializing in Next.js, React, and AI-powered
  applications. Built 5 production apps before graduation."
- Icons: GitHub + LinkedIn (Lucide, teal on hover)

Card 2:
- Avatar: 96px circle, gradient fill (slightly different teal shade)
- Name: "Venu Gopal" (H4)
- Role: "Co-Founder & Developer" (body-sm, muted)
- Location tag: "📍 Kodumur, Kurnool" (badge-neutral)
- Bio: "Frontend specialist with expertise in modern web technologies,
  responsive design, and building delightful user experiences."
- Icons: GitHub + LinkedIn

BELOW CARDS — Full-width quote block (--color-primary-light bg, teal left border, 24px):
"Built from a tier-3 college, powered by real-world projects. We've shipped
5 full-stack applications before graduation — from AI platforms to B2B SaaS.
We bring that same engineering rigor to every local business website we build."

ANIMATION: Cards slide in from opposite sides (left card: x -40→0, right card: x 40→0).
Avatar rings glow (box-shadow pulse) on card hover.
```

---

## Section 10 — Final CTA

**Emotional goal:** *"Book the call. Right now. No more thinking."*

```
[PASTE STANDARD HEADER ABOVE]

Build the <FinalCTASection /> component.

FULL-WIDTH dark section. Background: --color-dark-surface (#0f172a).
No border-radius (bleeds edge to edge). Padding: 120px vertical.

CONTENT (centered, max-width 640px):
- H2 (Satoshi Bold, white, 44px, letter-spacing -1.5px):
  "Ready to Take Your Business Online?"
- Subheadline (Inter 18px, color: #cbd5e1):
  "Book a free 30-minute call. We'll discuss your business, understand your
   needs, and give you a clear plan — no obligations."
- Primary CTA (large, white bg, --color-dark-surface text, pill, 52px height):
  "Book a Free Call ↗"
- Below button (muted text, 14px):
  "or WhatsApp us at +91 XXXXXXXXXX" with MessageCircle icon

CTA BUTTON idle animation: very subtle scale pulse (1.0→1.02→1.0, 3s ease infinite).
CTA BUTTON hover: background → --color-primary (teal), text → white, scale(1.02).

FRAMER MOTION: entire section content group animates from scale 0.97→1.0 +
opacity 0→1 when it enters viewport. Duration 700ms, ease [0.19,1,0.22,1].
```

---

## Section 11 — Footer

**Emotional goal:** *"They're a real business. All the information is here."*

```
[PASTE STANDARD HEADER ABOVE]

Build the <Footer /> component.

Background: --color-dark-surface (#0f172a). Padding: 80px top, 40px bottom.
All text: --color-dark-text (#f1f5f9). Links: #94a3b8 → white on hover.

4-COLUMN GRID (desktop) → 2-col (tablet) → 1-col (mobile):

Col 1 — Brand:
- "Codost." wordmark (Satoshi Bold, 24px, white, teal dot)
- Tagline: "We Turn Local Reputation Into Online Revenue."
- Location: "📍 Kurnool, Andhra Pradesh"
- "Serving businesses across Telugu states"

Col 2 — Quick Links:
Heading: "Quick Links" (caption, teal, uppercase)
Links: Services · Our Work · About Us · Why Get a Website · Contact

Col 3 — Contact:
Heading: "Get In Touch" (caption, teal, uppercase)
- WhatsApp: +91 XXXXXXXXXX (MessageCircle icon)
- Email: hello@codost.in (Mail icon)
- Hours: Mon–Sat, 9 AM – 7 PM IST

Col 4 — Social:
Heading: "Follow Us" (caption, teal, uppercase)
Links: GitHub · LinkedIn · Instagram (with Lucide icons)

DIVIDER: 1px solid rgba(255,255,255,0.08) above bottom bar.
BOTTOM BAR: "© 2026 Codost. Built with ❤️ in Andhra Pradesh."
Left-aligned text + right-aligned "Privacy Policy · Terms" links.

No animations needed — keep footer clean and static.
```

---

## Quick Reference — Tokens to Always Use

```css
--color-primary: #0891b2        /* teal CTA, icons, accents */
--color-primary-hover: #0e7490  /* button hover */
--color-primary-light: #ecfeff  /* badge bg, subtle tints */
--color-bg: #fafafa             /* page background */
--color-surface: #ffffff        /* cards, nav */
--color-border: #e5e7eb         /* card borders, dividers */
--color-text: #111827           /* headings, body */
--color-text-secondary: #4b5563 /* subheadlines, captions */
--color-text-muted: #9ca3af     /* placeholders, small labels */
--color-dark-surface: #0f172a   /* Process bg, CTA bg, Footer */
--color-dark-text: #f1f5f9      /* text on dark surfaces */
--shadow-premium: rgba(15,25,62,0.06) 0px 2px 6px -4px, ... /* see DESIGN_SYSTEM.md */
```
