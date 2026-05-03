# Design System — Codost
> Version: 1.0
> Created: 2026-04-25
> Aesthetic: Clean, Minimal, Trustworthy
> Mode: Light (primary) · Dark mode planned for future

---

## 1. Brand Identity

### Agency Name
**Codost** — a fusion of "Code" + "Dost" (friend in Telugu/Hindi), signaling a friendly, approachable tech partner.

### Tagline
**"We Turn Local Reputation Into Online Revenue."**

### Logo Direction
- **Style:** Wordmark-first (text logo), clean geometric sans-serif
- **Mark:** A subtle code bracket `{ }` integrated into the "o" of Codost, or a minimal handshake/friendship icon
- **Colors:** Primary teal on white, inverted on dark surfaces
- **Variants needed:** Full wordmark, icon-only mark, favicon (16px/32px)

---

## 2. Color Palette

### Philosophy
Monochromatic neutral base with a **single strong accent** — inspired by Codedale's restraint, but using a warmer teal-blue instead of pure electric blue. This feels more approachable and less corporate, matching Codost's "friendly partner" positioning.

### Primary
| Role | Name | Value | Usage |
|------|------|-------|-------|
| Brand / CTA | Codost Teal | `#0891b2` | Primary buttons, links, logo, accents |
| Hover | Teal 700 | `#0e7490` | Button hover, active states |
| Light tint | Teal 50 | `#ecfeff` | Badges, light backgrounds, highlights |

### Neutrals
| Role | Name | Value | Usage |
|------|------|-------|-------|
| Page background | Gray 50 | `#fafafa` | Main page background |
| Surface / Card | White | `#ffffff` | Cards, modals, nav |
| Border | Gray 200 | `#e5e7eb` | Card borders, dividers |
| Text primary | Gray 900 | `#111827` | Headlines, body text |
| Text secondary | Gray 600 | `#4b5563` | Supporting text, captions |
| Text muted | Gray 400 | `#9ca3af` | Placeholders, disabled |

### Semantic
| Role | Value | Usage |
|------|-------|-------|
| Success | `#10b981` | Checkmarks, positive indicators |
| Warning | `#f59e0b` | Caution, attention badges |
| Error | `#ef4444` | Form errors, destructive actions |
| Info | `#3b82f6` | Informational badges, tooltips |

### Dark Accent Surface
| Role | Value | Usage |
|------|-------|-------|
| Dark card BG | `#0f172a` | Feature highlight section, CTA blocks |
| Dark card text | `#f1f5f9` | Text on dark surfaces |

---

## 3. Typography

### Font Pairing
| Usage | Font | Fallback | Source |
|-------|------|----------|--------|
| **Headings** | Satoshi | system-ui, sans-serif | [Fontshare](https://www.fontshare.com/fonts/satoshi) — Free |
| **Body** | Inter | system-ui, sans-serif | [Google Fonts](https://fonts.google.com/specimen/Inter) |

> **Rationale:** Satoshi brings geometric personality to headlines. Inter is optimized for screen readability. Same pairing as Codedale — it's industry-proven.

### Type Scale
| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| `display` | 56px | 700 (Bold) | 1.1 | **-2.5px** | Hero headline (desktop) |
| `h1` | 44px | 700 (Bold) | 1.15 | **-1.5px** | Page titles |
| `h2` | 36px | 600 (Semi) | 1.2 | **-0.9px** | Section titles |
| `h3` | 24px | 600 (Semi) | 1.3 | -0.4px | Subsection titles |
| `h4` | 20px | 500 (Medium) | 1.4 | normal | Card titles |
| `body-lg` | 18px | 400 (Regular) | 1.6 | normal | Hero subtext, lead paragraphs |
| `body` | 16px | 400 (Regular) | 1.5 | normal | Default body text |
| `body-sm` | 14px | 400 (Regular) | 1.5 | normal | Captions, meta info |
| `caption` | 12px | 500 (Medium) | 1.4 | 0.5px | Badges, labels, overlines |

### Type Rules
- All headings use **Satoshi**, sentence case
- Body text uses **Inter**
- Hero headline uses aggressive **-2.5px** letter-spacing (premium editorial technique)
- Maximum paragraph width: **680px** (optimal for readability)
- No underline on links — use color + hover animation instead

---

## 4. Spacing & Layout

### Spacing Scale (8px grid)
| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight gaps, inline padding |
| `space-2` | 8px | Icon gaps, compact padding |
| `space-3` | 12px | Card internal margins |
| `space-4` | 16px | Standard component padding |
| `space-5` | 20px | Card padding |
| `space-6` | 24px | Grid gaps |
| `space-8` | 32px | Section inner spacing |
| `space-10` | 40px | Component group spacing |
| `space-12` | 48px | Section padding (mobile) |
| `space-16` | 64px | Section padding (tablet) |
| `space-20` | 80px | Section padding (desktop) |
| `space-24` | 96px | Large section gaps |

### Container
| Breakpoint | Max Width | Padding |
|------------|-----------|---------|
| Mobile | 100% | 20px |
| Tablet | 768px | 32px |
| Desktop | 1200px | 40px |
| Wide | 1400px | 40px |

### Grid System
- **System:** CSS Grid + Flexbox
- **Columns:** 12-column grid (desktop), 4-column (mobile)
- **Gap:** 24px (default), 32px (cards grid)

---

## 5. Border Radius & Shape

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 6px | Inputs, small chips |
| `radius-md` | 8px | Tags, badges |
| `radius-lg` | 12px | Buttons, medium cards |
| `radius-xl` | 16px | Main cards, sections |
| `radius-2xl` | 24px | Feature cards, hero elements |
| `radius-full` | 9999px | Pill buttons, avatars |

---

## 6. Elevation & Shadows

### Shadow Scale
| Level | Value | Usage |
|-------|-------|-------|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift for inputs |
| `shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05)` | Cards at rest |
| `shadow-lg` | Multi-layer stack (see below) | Cards on hover, featured elements |
| `shadow-xl` | `0 20px 40px -12px rgba(0,0,0,0.12)` | Modals, dropdowns |

### Premium Multi-Layer Card Shadow (Inspired by Codedale)
```css
.card-shadow-premium {
  box-shadow:
    rgba(15, 25, 62, 0.06) 0px 2px 6px -4px,
    rgba(0, 0, 0, 0.02) 0px 1px 1px 0px,
    rgba(0, 0, 0, 0.02) 0px 3px 2px -1px,
    rgba(0, 0, 0, 0.02) 0px 6px 3px -2px,
    rgba(0, 0, 0, 0.01) 0px 12px 6px -3px,
    rgba(0, 0, 0, 0.01) 0px 24px 12px -4px;
}
```

---

## 7. Components

### 7.1 Navigation Bar
| Property | Value |
|----------|-------|
| Type | Floating pill, sticky on scroll |
| Background | `#ffffff` with `backdrop-filter: blur(12px)` |
| Border | `1px solid rgba(0,0,0,0.06)` |
| Border radius | `9999px` |
| Height | ~64px |
| Shadow | `shadow-md` |
| Position | Centered, max-width: 720px |

**Nav items:** Logo · Services · Work · About · [Book a Call ↗] (CTA pill)

### 7.2 Buttons

#### Primary Button
| Property | Value |
|----------|-------|
| Background | `#0891b2` (Codost Teal) |
| Text color | `#ffffff` |
| Font | Satoshi, 15px, weight 500 |
| Padding | 12px 28px |
| Border radius | `9999px` (pill) |
| Hover | Background → `#0e7490`, subtle scale(1.02) |
| Transition | 200ms ease-out |
| Icon | Arrow-up-right (↗) via Lucide |

#### Secondary Button
| Property | Value |
|----------|-------|
| Background | transparent |
| Border | 1px solid `#e5e7eb` |
| Text color | `#111827` |
| Hover | Background → `#fafafa` |
| Border radius | `9999px` |

#### Ghost Button
| Property | Value |
|----------|-------|
| Background | transparent |
| Text color | `#0891b2` |
| Hover | Background → `#ecfeff` |
| Border radius | `radius-lg` |

### 7.3 Cards

#### Project Card
| Property | Value |
|----------|-------|
| Background | `#ffffff` |
| Border | none |
| Border radius | `radius-xl` (16px) |
| Shadow | `shadow-md` → `shadow-lg` on hover |
| Padding | 0 (image bleeds to edge) |
| Image | Full-width top, 16:10 aspect ratio |
| Content padding | 24px |
| Hover | translateY(-4px), shadow elevation increase |
| Transition | 300ms cubic-bezier(0.4, 0, 0.2, 1) |

#### Service Card
| Property | Value |
|----------|-------|
| Background | `#ffffff` |
| Border | 1px solid `#e5e7eb` |
| Border radius | `radius-xl` |
| Shadow | none → `shadow-md` on hover |
| Padding | 32px |
| Icon | 48px, Codost Teal, top-left |

#### Pricing Card
| Property | Value |
|----------|-------|
| Background | `#ffffff` (default), `#0f172a` (featured) |
| Border | 1px solid `#e5e7eb` (default), 2px solid `#0891b2` (featured) |
| Border radius | `radius-xl` |
| Badge | `caption` size, pill shape, semantic color |

### 7.4 Section Dividers
| Property | Value |
|----------|-------|
| Style | Dashed horizontal line (blueprint aesthetic) |
| Color | `#e5e7eb` |
| Dash pattern | `border-top: 1px dashed` |
| Vertical margin | `space-16` (64px) |

### 7.5 Badges / Tags
| Property | Value |
|----------|-------|
| Font | `caption` (12px, 500 weight) |
| Padding | 4px 12px |
| Border radius | `radius-full` |
| Variants | Teal (brand), Green (success), Amber (warning), Gray (neutral) |

### 7.6 Forms & Inputs
| Property | Value |
|----------|-------|
| Background | `#ffffff` |
| Border | 1px solid `#e5e7eb` |
| Border radius | `radius-sm` (6px) |
| Height | 44px |
| Font | Inter, 16px |
| Focus | Border → `#0891b2`, ring: `0 0 0 3px rgba(8,145,178,0.15)` |
| Error | Border → `#ef4444` |

---

## 8. Animation & Motion

### Transition Defaults
| Property | Duration | Easing | Context |
|----------|----------|--------|---------|
| Color, background | 150ms | `ease-out` | Buttons, links |
| Transform | 200ms | `cubic-bezier(0.4, 0, 0.2, 1)` | Hovers, card lifts |
| Opacity | 300ms | `ease-out` | Fade-ins, reveals |
| Layout | 300ms | `cubic-bezier(0.4, 0, 0.2, 1)` | Accordion, expand |

### Scroll-Triggered Reveals
- **Method:** IntersectionObserver (no heavy libraries)
- **Default animation:** Fade-up (translateY 20px → 0, opacity 0 → 1)
- **Duration:** 500ms
- **Stagger:** 100ms between sibling elements
- **Trigger threshold:** 0.15 (element 15% visible)

### Micro-Interactions
| Element | Interaction | Effect |
|---------|------------|--------|
| Primary CTA | Hover | Scale 1.02 + shadow increase |
| Card | Hover | translateY(-4px) + shadow elevation |
| Nav links | Hover | Teal underline slides in from left |
| Arrow icon (↗) | Hover on parent | Translate 2px up-right |
| Service icon | Section visible | Subtle bounce-in |

### Motion Philosophy
> **Fast and purposeful.** No slow, floaty animations. Every motion should feel snappy (150-300ms range) and serve a functional purpose — guiding attention, confirming interaction, or creating spatial relationships.

---

## 9. Iconography

| Property | Value |
|----------|-------|
| Library | [Lucide Icons](https://lucide.dev/) |
| Default size | 20px |
| Stroke width | 1.5px |
| Color | Inherits text color (currentColor) |
| Active / Accent | Codost Teal `#0891b2` |

---

## 10. Responsive Breakpoints

| Name | Min-width | Grid columns | Container max-width |
|------|-----------|-------------|---------------------|
| Mobile | 0px | 1 | 100% |
| Tablet | 768px | 2 | 768px |
| Desktop | 1024px | 3 | 1200px |
| Wide | 1400px | 4 | 1400px |

---

## 11. CSS Variables Export

```css
:root {
  /* ── Colors ── */
  --color-primary: #0891b2;
  --color-primary-hover: #0e7490;
  --color-primary-light: #ecfeff;
  
  --color-bg: #fafafa;
  --color-surface: #ffffff;
  --color-border: #e5e7eb;
  
  --color-text: #111827;
  --color-text-secondary: #4b5563;
  --color-text-muted: #9ca3af;
  
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #3b82f6;
  
  --color-dark-surface: #0f172a;
  --color-dark-text: #f1f5f9;

  /* ── Typography ── */
  --font-heading: 'Satoshi', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;

  /* ── Border Radius ── */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;

  /* ── Shadows ── */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05);
  --shadow-xl: 0 20px 40px -12px rgba(0,0,0,0.12);

  /* ── Spacing ── */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  /* ── Transitions ── */
  --transition-fast: 150ms ease-out;
  --transition-default: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

> **Next step:** See `WEBSITE_SPEC.md` for the section-by-section page content specification.
