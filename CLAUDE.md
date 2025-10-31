# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**CS 147 - Chatatouille:** A Stanford CS 147 (Human-Computer Interaction) course project website showcasing a BBQ restaurant concept. This is a static portfolio/marketing site that links to design documentation, prototypes, and videos from the course.

**Stack:** Next.js 16.0.1 with React 19.2.0, TypeScript, and Tailwind CSS 4.1.16

## Quick Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Run ESLint
```

## Architecture & Structure

### App Directory (`/app`)

- **`layout.tsx`** - Root layout with HTML structure, metadata, and Google Fonts imports
- **`page.tsx`** - Home page component that renders Navigation + Hero
- **`globals.css`** - Global Tailwind directives and CSS resets

### Components (`/app/components`)

- **`Navigation.tsx`** - Fixed header navigation bar (white background with logo)
- **`Hero.tsx`** - Landing section with 5 CS 147 assignment links (A1-A5)

### Configuration Files

- **`next.config.js`** - Next.js configuration (currently minimal/defaults)
- **`tailwind.config.ts`** - Tailwind setup with custom brand colors (see Design System section)
- **`postcss.config.js`** - PostCSS with Tailwind v4 plugin (@tailwindcss/postcss) and autoprefixer
- **`tsconfig.json`** - TypeScript config with `@/*` path alias, strict mode enabled, React JSX transform

### Public Assets (`/public/images`)

- `chatatouille.png` - Restaurant image/logo
- `conceptvideo_final.mp4` - Course concept video

## Key Implementation Details

### Layout & Styling

- **Page Structure:** Simple single-page layout with Navigation (fixed header) + Hero (centered content)
- **Styling Approach:** Utility-first with Tailwind CSS; no CSS-in-JS or styled components
- **Typography:** Google Fonts - "DM Serif Text" (display/headings) and "Source Sans 3" (body text)
- **Responsive:** Uses Tailwind breakpoints (md, lg, etc.) for mobile-friendly design

### Design System & Branding

**Color Palette:**
- `#F8F3ED` - Off-white/cream (backgrounds)
- `#F1E3D3` - Light tan (secondary backgrounds)
- `#E07A5F` - Terracotta/rust (accents, CTAs)
- `#690B22` - Deep burgundy/maroon (primary text, emphasis)
- `#34623F` - Forest green (secondary elements)
- `#121211` - Almost black (dark text)

**Logo:**
- `chatatouille.png` - Restaurant branding image

**Font Usage:**
- **"DM Serif Text"** - Headings (h1, h2, h3), premium look
- **"Source Sans 3"** - Body text, navigation, links (readable and modern)

### Components

- **Navigation** is a Client Component (`'use client'`) - simple branding header
- **Hero** is a Server Component - displays title and 5 course assignment links (external links to Google Drive and Stanford servers)

### TypeScript & Type Safety

- Strict mode enabled in `tsconfig.json`
- Uses `React.ReactNode` and component prop typing
- ES2017 compilation target with bundler module resolution

## Common Development Tasks

### Adding a New Page

1. Create a directory under `/app` (e.g., `/app/about`)
2. Create a `page.tsx` file inside
3. Export a default React component
4. Automatically routed to `/about`

### Adding a New Component

1. Create `.tsx` file in `/app/components/`
2. Define component (use `'use client'` only if needed for interactivity)
3. Import in `page.tsx` or other components

### Styling New Elements

Use Tailwind class names directly in JSX. Follow the brand color palette:

**Colors (use in Tailwind classes):**
- `#F8F3ED` - Off-white backgrounds
- `#F1E3D3` - Light tan
- `#E07A5F` - Terracotta (accents, call-to-action buttons)
- `#690B22` - Deep burgundy (headings, primary text)
- `#34623F` - Forest green (secondary elements)
- `#121211` - Almost black (body text)

**Typography:**
- Use `font-serif` for headings with "DM Serif Text" font
- Use `font-sans` for body text with "Source Sans 3" font
- Keep text hierarchy clear: larger serif fonts for emphasis, clean sans-serif for readability

**Example:**
```tsx
<h1 className="font-serif text-4xl" style={{ color: '#690B22' }}>Heading</h1>
<p className="font-sans text-lg" style={{ color: '#121211' }}>Body text</p>
```

Or define extended Tailwind colors in `tailwind.config.ts` for easier reuse.

### Building & Deploying

1. `npm run build` - Compiles to `.next/` directory
2. `.gitignore` includes `.vercel`, indicating **Vercel** is the deployment platform
3. Connect GitHub repo to Vercel dashboard for auto-deployment on push

## Testing

**No testing framework currently configured.** If tests are needed, consider:
- Jest + React Testing Library for unit/component tests
- Playwright or Cypress for E2E tests

## Dependencies Summary

- **Core:** next@16.0.1, react@19.2.0, react-dom@19.2.0
- **Styling:** tailwindcss@4.1.16, @tailwindcss/postcss@4.1.16, postcss@8.5.6, autoprefixer@10.4.21
- **Type Checking:** typescript@5.9.3, @types/react@19.2.2, @types/node@24.9.2
- **Linting:** eslint@9.13.0, eslint-config-next@16.0.1

## Important Notes

- No database or backend API - purely static content
- All course links are external (Google Drive documents, Stanford servers)
- Single-page application focused on HCI design documentation
- Video file (~42MB) is served as static asset from `/public`
- Development uses Turbopack bundler for faster builds (Next.js 16 default)

## File Path

Repository location: `/Users/lourdrickvalsote/Documents/Stanford/CS 147`
