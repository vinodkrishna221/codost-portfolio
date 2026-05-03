# Design System — CodeDale
> Analyzed from: https://www.codedale.tech/
> Analyzed on: 2026-04-25T11:00:00Z
> Viewports captured: Desktop 1440px, Tablet 768px, Mobile 375px

---

## 1. Color Palette

### Primary
| Role | Color | Hex / OKLCH | Source |
|---|---|---|---|
| Brand / CTA | Codedale Blue | #0067f4 | exact |
| Hover state | Blue 600 | oklch(54.6% 0.245 262.881) | exact |

### Neutrals
| Role | Color | Hex / OKLCH | Source |
|---|---|---|---|
| Background | Light Gray | rgb(245, 245, 245) | exact |
| Surface / Card | White | rgb(255, 255, 255) | exact |
| Border | Border | oklch(92.2% 0 0) | exact |
| Text primary | Gray 900 | oklch(21% 0.034 264.665) | exact |
| Text secondary | Gray 700 | oklch(37.3% 0.034 259.733) | exact |
| Text muted | Muted | oklch(55.6% 0 0) | exact |

### Semantic
| Role | Color | Hex / OKLCH |
|---|---|---|
| Success | Green 500 | oklch(72.3% 0.219 149.579) |
| Warning | Amber 50 | oklch(98.7% 0.022 95.277) |
| Error / Destructive| Red 500 | oklch(63.7% 0.237 25.331) |
| Info / Highlight | Sky 50 | oklch(97.7% 0.013 236.62) |

---

## 2. Typography

### Fonts
- **Heading font:** Satoshi — sans-serif — custom
- **Body font:** Inter — sans-serif — Google Fonts
- **Google Fonts import:** `https://www.codedale.tech/_next/static/css/76978181eb2829e4.css`

### Type Scale
| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|
| Display / H1 | 50px | 700 | 70px | -2.5px | Hero headline |
| H2 | 36px | 600 | 43.2px | -0.9px | Section titles |
| H3 | 20px | 500 | 28px | normal | Card titles |
| Body | 16px | 400 | 24px | normal | Paragraphs |

### Type Traits
- Text transform: Sentence case headings.
- Max prose width: Controlled by Tailwind's container classes.

---

## 3. Spacing & Layout

### Container
- Max content width: ~1280px (Tailwind max-w-7xl)

### Grid
- System: Flexbox and CSS Grid
- Gap: ~24px to 32px

---

## 4. Components

### Buttons
- **Primary:** Background `#0067f4`, text `white`, border-radius `9999px` (pill), padding standard
- **Shape:** Pill
- **Hover effect:** Background darken (Blue 600)

### Cards
- Background: `rgb(255, 255, 255)`
- Border: None
- Border-radius: ~16px
- Shadow: Complex, soft large shadow (`rgba(15, 25, 62, 0.08) 0px 2px 6px -4px...`)
- Padding: ~20px

---

## 5. Shape & Elevation

### Border Radius Scale
| Token | Value | Usage |
|---|---|---|
| sm | 4px | Inputs, chips, tags |
| md | 6px | Controls |
| lg | 8px | Standard |
| xl | 16px | Cards |
| full | 9999px | Pills, buttons |

### Shadow / Elevation Scale
| Level | Value | Usage |
|---|---|---|
| lg | Complex soft shadow | Cards |

---

## 6. Animation & Motion

### Transitions
| Property | Duration | Easing | Context |
|---|---|---|---|
| all | 150ms | cubic-bezier(.4,0,.2,1) | Default |

### Scroll Animations
- Subtle entrance animations managed by Tailwind and likely Framer Motion or AOS.

---

## 7. Visual Style & Media

- **Aesthetic mood:** Clean, modern, trustworthy SaaS/agency style. Focus on typography and soft, elevated cards over a light gray background.
- **Effects:** High-quality, complex drop shadows to give a tactile feel to cards.

---

## 8. Quick CSS Variables Export

```css
:root {
  /* Colors */
  --color-primary: #0067f4;
  --color-bg: #f5f5f5;
  --color-surface: #ffffff;
  --color-border: oklch(92.2% 0 0);
  --color-text: oklch(21% 0.034 264.665);
  --color-text-secondary: oklch(37.3% 0.034 259.733);
  --color-success: oklch(72.3% 0.219 149.579);
  --color-error: oklch(63.7% 0.237 25.331);

  /* Typography */
  --font-heading: 'Satoshi', sans-serif;
  --font-body: 'Inter', sans-serif;

  /* Radius */
  --radius-xl: 16px;
  --radius-full: 9999px;
}
```
