# Next.js Template

> **Last Updated:** March 31, 2026

A production-ready Next.js starter with App Router, TypeScript, Tailwind CSS v4, and shadcn/ui. Clone it and start building your feature in under 2 minutes.

---

## ⚡ Prerequisites

Install pnpm globally (one-time setup):

```bash
npm install -g pnpm
```

## ✨ What's Included

| Category | Details |
| --- | --- |
| **Framework** | Next.js 15 (App Router only, Turbopack dev) |
| **Language** | TypeScript 5.8 (strict mode) |
| **Styling** | Tailwind CSS v4 (CSS-first config via PostCSS) |
| **Components** | shadcn/ui (New York style, RSC-enabled) |
| **Linting** | ESLint 9 (flat config) + Prettier 3.5 |
| **Package Manager** | pnpm (global store, hard-linked node_modules) |
| **Path Aliases** | `@/` → `src/` |
| **Dark Mode** | CSS variable-based, ready to toggle |
| **Error Handling** | Custom 404, error boundary, loading UI |

## 📁 File Tree

```
nextjs-template/
├── public/                        # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css            # Tailwind + design tokens
│   │   ├── layout.tsx             # Root layout with metadata
│   │   ├── page.tsx               # Home page (Server Component)
│   │   ├── not-found.tsx          # Custom 404 page
│   │   ├── error.tsx              # Global error boundary
│   │   └── loading.tsx            # Global loading UI
│   ├── components/
│   │   └── Counter.tsx            # Sample client component
│   ├── hooks/
│   │   └── useLocalStorage.ts     # Example custom hook
│   ├── lib/
│   │   └── utils.ts               # cn() class merger
│   ├── types/
│   │   └── index.ts               # Shared TypeScript interfaces
│   └── utils/
│       └── helpers.ts             # Common helper functions
├── .env.example
├── .gitignore
├── .npmrc                         # pnpm configuration
├── .prettierrc
├── components.json                # shadcn/ui config
├── create-project.sh              # Project scaffolding script
├── eslint.config.js               # ESLint flat config
├── next.config.ts                 # Next.js configuration
├── package.json
├── postcss.config.cjs             # PostCSS + Tailwind v4
├── tsconfig.json
└── README.md
```

## 🚀 Quick Start

### Option A: Using the script (recommended)

```bash
# Clone the template
git clone https://github.com/YOUR_USERNAME/nextjs-template.git

# Create a new project
cd nextjs-template
chmod +x create-project.sh
./create-project.sh my-app-name

# Start developing
cd ../my-app-name
pnpm dev
```

### Option B: GitHub "Use this template"

1. Click **"Use this template"** on the GitHub repo page
2. Name your new repo and create it
3. Clone your new repo locally
4. Run `pnpm install`
5. Run `pnpm dev`

## 📦 Available Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start Turbopack dev server on port 3000 |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint checks |
| `pnpm lint:fix` | Auto-fix ESLint issues |
| `pnpm format` | Format code with Prettier |
| `pnpm format:check` | Check formatting without writing |
| `pnpm typecheck` | Run TypeScript type checking |

## 🧩 Adding shadcn/ui Components

```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add input
pnpm dlx shadcn@latest add dialog
```

Components will be added to `src/components/ui/`.

## 🏗️ App Router Conventions

| File | Purpose |
| --- | --- |
| `layout.tsx` | Shared UI wrapper (persists across navigation) |
| `page.tsx` | Route page content (Server Component by default) |
| `loading.tsx` | Loading UI (Suspense boundary) |
| `error.tsx` | Error boundary (`'use client'` required) |
| `not-found.tsx` | Custom 404 page |

Add `'use client'` at the top of a file only when it uses hooks, event handlers, or browser APIs.

## 🎨 Customizing the Theme

Edit the `@theme` block in `src/app/globals.css` to change colors, fonts, and radii. The design tokens use HSL values and are compatible with shadcn/ui's CSS variable system.

## 📦 Why pnpm?

pnpm uses a **content-addressable global store** (`~/.pnpm-store`) instead of duplicating packages in every project's `node_modules/`.

| Scenario | npm | pnpm |
| --- | --- | --- |
| First project install | ~45s | ~45s |
| Second project (same deps) | ~45s | **~3-5s** |
| Disk per project | Full copy | Hard links |

When two projects share the same package version (e.g., `react@19.1.0`), pnpm stores it **once** globally and hard-links it into each project. This means:

- **Repeated installs are near-instant** — packages are linked, not re-downloaded
- **Disk usage drops dramatically** — no duplicate `node_modules` bloat
- **Strict by default** — prevents phantom dependencies (accessing packages you didn't declare)

## 🔄 Keeping This Template Fresh

Run this monthly to check for outdated packages:

```bash
pnpm outdated
```

Then bump versions in `package.json` and commit:

```bash
git add -A
git commit -m "chore: bump deps [Month Year]"
```

## 📝 Conventions

- **Components:** Functional components with TypeScript props interfaces
- **Server Components:** Default for pages — add `'use client'` only when needed
- **Imports:** Use `@/` path alias (e.g., `import { cn } from '@/lib/utils'`)
- **Formatting:** Single quotes, semicolons, trailing commas (es5)
- **Naming:** PascalCase for components, camelCase for hooks and utils

---

Built with ❤️ for fast project bootstrapping.
