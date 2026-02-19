# Elliot Electrical Website - Claude Code Context

## Project Overview
Modern Next.js website rebuild for **Elliot Electrical** (est. 2001), a certified electrical contractor serving Greater Gauteng and the Garden Route, South Africa. Replaces their outdated site at elliotelectrical.co.za.

**Project Root**: `/Users/trist.mort/Desktop/Antigravity Work/MortAI SOPs/projects/elliot-electrical-website/`
**GitHub**: `git@github.com:tristmort/-elliot-elecrtical-website.git` (note: typo in repo name is intentional — user created it that way)

---

## Tech Stack
- **Next.js 14** (App Router) + TypeScript + Tailwind CSS
- **Dependencies**: `clsx`, `lucide-react` (only extras beyond Next.js defaults)
- **Fonts**: Montserrat (headings, uppercase, 700-800), Inter (body, 400-500) via `next/font/google`
- **Animations**: CSS-only via Intersection Observer (`ScrollReveal` component) — no Framer Motion/GSAP

## Design System (in `tailwind.config.ts`)
| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#0C2E66` | Dark blue — headings, navbar, footer bg |
| `primary-light` | `#1C75BC` | Gradient blue — gradient endpoints |
| `accent` | `#0FA3B1` | Teal — buttons, highlights, CTAs |
| `light-grey` | `#F4F6F8` | Section backgrounds |
| `muted-text` | `#6B7280` | Body text |

---

## File Structure

### Data Layer (`lib/`)
- `lib/types.ts` — TypeScript interfaces (Service, Testimonial, CompanyInfo, NavItem, HeroSlide, AreaRegion)
- `lib/data/services.ts` — 7 services with slugs, descriptions, bullet points, areas
- `lib/data/testimonials.ts` — 7 real testimonials from the site
- `lib/data/company.ts` — Phone: 066 489 7335, Email: info@elliotelectrical.co.za, Address: 168 Blueberry Rd, Randpark Ridge, Owner: Kevin Elliot
- `lib/data/navigation.ts` — Nav items + CTA nav item
- `lib/data/areas.ts` — Two regions: johannesburg, garden-route

### Layout Components
- `app/layout.tsx` — Root layout. `<main className="pt-40">` (large padding to clear expanded navbar)
- `app/components/layout/Navbar.tsx` — Fixed white navbar. Logo: `h-28` default → `h-16` on scroll. Nav links with `.nav-link-glow` hover (dark blue text-shadow). Mobile hamburger. Phone number. "Request Quote" accent button.
- `app/components/layout/Footer.tsx` — Dark blue bg, 4-column layout

### Animation
- `app/components/animations/ScrollReveal.tsx` — Wraps sections. Props: `direction` ("left"|"right"|"up"|"fade"), `delay` (ms). Uses IntersectionObserver with `once: true`.

### Home Page Sections (`app/components/home/`)
1. `HeroCarousel.tsx` — 4-slide auto-advancing (5s) carousel with fade transitions, arrows, dots. Content has `pt-16` offset. Trust chips below CTAs.
2. `ServicesOverview.tsx` — 4 featured service cards (equal height, `h-full`). Wave animation: `direction="up"` + staggered `delay={i * 150}`.
3. `SolarAuthority.tsx` — Centered layout with solar image, benefits grid, CTA.
4. `TrustCompliance.tsx` — 3 icon cards. Wave animation: `direction="up"` + staggered delays.
5. `ProcessSection.tsx` — 4 steps (no numbers). Wave animation: `direction="up"` + staggered delays.
6. `Testimonials.tsx` — 3-column centered grid showing 6 testimonials.
7. `CTASection.tsx` — Full-width dark blue gradient CTA.

### Pages
- `app/page.tsx` — Home: composes all 7 sections
- `app/services/page.tsx` — Services grid (7 cards with watermarked images). Hero text centered with flex.
- `app/services/[slug]/page.tsx` — Dynamic service detail. `generateStaticParams` for all 7 slugs.
- `app/areas/page.tsx` — Two 16:9 image cards (clubhouse.webp → Johannesburg, robberg.jpg → Garden Route). Hero centered.
- `app/areas/[region]/page.tsx` — Client component with booking form (Name, Number, Email, Message).
- `app/contact/page.tsx` — Two-column: form left, contact details right. Hero centered.
- `app/quote/page.tsx` — Extended quote form with Suspense for `useSearchParams`. Pre-fills service from URL param.

### Public Assets
- `public/elliot-logo.png`
- `public/images/clubhouse.webp`
- `public/images/robberg.jpg`
- `public/images/solar-panels.jpg`
- `public/images/solar-installations.jpg`

---

## Key Decisions & Fixes Applied

### Navbar & Layout
- Logo went through multiple size iterations. Final: `h-28` default, `h-16` on scroll.
- `<main className="pt-40">` — needed 160px padding to clear the tall expanded navbar so hero/section text centers properly in viewport.
- Hero content has additional `pt-16` to visually center text accounting for navbar overlap.

### Centering
- All page hero sections (Services, Areas, Contact) use `flex items-center justify-center` + `flex flex-col items-center` for proper centering under the expanded navbar.
- SolarAuthority was converted from 2-column split to centered single-column layout per user preference.
- Testimonials changed from horizontal scroll to centered 3-column grid.

### Animations
- All card sections (ServicesOverview, TrustCompliance, ProcessSection) use wave animation: `direction="up"` with staggered `delay={i * 150}` so cards fade in one-by-one left to right.
- ProcessSection step numbers (01, 02, 03, 04) were removed per user request.

### Build Fixes
- Regex `/s` flag → changed to `[\s\S]` pattern for ES5 compat
- `node_modules` corruption after project scaffold move → `rm -rf node_modules && npm install`

---

## Current State
- All pages built and functional
- Latest changes (animation updates to 3 home sections) have NOT been build-tested — run `npm run build` to verify
- GitHub repo has NOT been updated since initial push — many edits since (logo, centering, animations)
- `TODO.md` exists listing client deliverables (missing images, form backend, analytics)

## What the User Might Ask Next
- Push latest changes to GitHub
- Further visual tweaks (sizing, spacing, colors)
- Adding real service images / replacing placeholder watermarks
- Form backend integration
- Mobile responsiveness adjustments
- Additional pages or content changes
