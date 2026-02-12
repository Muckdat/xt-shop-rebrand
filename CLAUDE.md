# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Overview

**XT-Trade Shop** is a modern B2B landing page for workwear and safety equipment (PPE), built with React, Vite, and Tailwind CSS. The site features a German-language interface targeting professional customers in construction, industry, and trade sectors. This landing page serves as a design reference for implementation into a JTL Shop 5 NOVA Child Template.

**Important**: XT-TRADE is a distributor/retailer of safety equipment and workwear from leading manufacturers, NOT a manufacturer themselves. Content should reflect this positioning - they offer consultation, product selection, customization (embroidery/printing), and logistics services. They fulfill highest safety standards but do not "define" or "engineer" new standards.

## Tech Stack

- **Build Tool**: Vite (React + Vite dev server)
- **Frontend Framework**: React 18.2
- **Styling**: Tailwind CSS 3.4 with custom accent color (#EF9112)
- **Animations**: Framer Motion for scroll animations and transitions; CSS `@keyframes` for infinite scroll carousels
- **Carousel/Slider**: Swiper.js for Hero carousel
- **Icons**: Lucide React

## Architecture & Code Organization

### Entry Point Flow
- `index.html` → `src/main.jsx` → `src/App.jsx`
- Main stylesheet: `src/index.css` (Tailwind directives + `infinite-scroll` keyframe)

### Component Structure

The app uses a single-page layout with components rendered sequentially in `App.jsx`:

1. **Header** - Sticky navigation with animated mega-menu dropdowns + mobile hamburger menu
2. **Hero** - Full-screen Swiper carousel with image/video slides, linked CTA buttons
3. **Partner1** - Partner logos infinite scroll carousel (CSS animation)
4. **BrandsLogos** - Brand logo showcase with grayscale hover effect and infinite scroll (CSS animation)
5. **Categories** - Grid layout with hover/tap-activated product popups, per-category links
6. **Story** - Brand story section with XT-TRADE "Über uns" content, links to www.xt-trade.com/Ueber-uns
7. **TechSpecs** - Feature flip cards showcasing product standards, links to www.xt-trade.com/Schutzkleidung
8. **Testimonials** - B2B client references with company names, stats, and project details
9. **Partner2** - Customer company logos infinite scroll carousel (CSS animation)
10. **Consultation** - CTA section for booking consultation (phone + email), with 3 consultation options
11. **Footer** - Site footer with links, contact info, and office hours

**Note**: `FeaturedProducts.jsx` exists as a Swiper product carousel component but is not currently rendered in `App.jsx`.

### Key Architecture Patterns

**Component-Level Data**: Components define their own data inline (e.g., `navData` object in `Header.jsx`, `categories` array in `Categories.jsx`, `brands` arrays in logo carousel components). There is no centralized data layer or separate data files.

**Inline Styles**: Several components include `<style>` tags for Swiper customization (e.g., pagination bullets). This is intentional for scoped third-party styling.

**Infinite Scroll Pattern**: BrandsLogos, Partner1, and Partner2 use a pure CSS animation approach:
- A `<BrandList />` sub-component renders one set of logos
- Two identical `<BrandList />` instances are placed side-by-side in a flex container
- CSS `@keyframes infinite-scroll` translates by `-50%`, which exactly equals one `<BrandList />` width
- Each logo item uses `mr-12` (not `gap`) to ensure uniform item footprints for seamless looping
- The `infinite-scroll` keyframe is defined globally in `src/index.css`

**Animation Strategy**:
- Framer Motion's `whileInView` for scroll-triggered animations
- `viewport={{ once: true }}` to animate only on first view
- Staggered delays using `index * 0.2` pattern for sequential reveals
- `useScroll` and `useTransform` for scroll-based header transformations
- CSS `@keyframes` for infinite scroll carousels (not Framer Motion)

**Responsive Design**:
- Mobile-first Tailwind breakpoints (`sm:`, `md:`, `lg:`)
- Swiper breakpoints for responsive slide counts
- Mobile hamburger menu with animated drawer in Header
- Categories popups accessible via tap on mobile (onClick toggle)
- Gradient overlays responsive (`w-16 md:w-32`) on scroll carousels

### Styling Conventions

**Color Palette**:
- Primary accent: `#EF9112` (orange, available as `accent` in Tailwind)
- Dark text: `slate-900`, `slate-800`
- Light backgrounds: `gray-50`, `white`
- Dark sections: `slate-900` (Story, Consultation)
- Font family: Inter (loaded from Google Fonts)

**Common Patterns**:
- Group hover effects: `group` class with `group-hover:` modifiers
- Transform on hover: `hover:-translate-y-2`, `group-hover:scale-110`
- Gradient overlays: `bg-gradient-to-t from-black/80 to-transparent`
- Gradient text: `text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-600`
- Uppercase bold text: `uppercase tracking-wide font-bold`
- Accent badges: `border border-accent/30 px-4 py-2 rounded-full bg-accent/5`

### Assets

External assets are hosted at `https://assets.watara.services/xt/assets/` and placeholder images from Unsplash. When adding new assets, follow the existing pattern of using external URLs.

**Logo**: `https://assets.watara.services/xt/assets/XT-Logo_v2_277x49.png` (277x49px, used in Header)

### External Links

The site links to the main XT-TRADE website:
- Hero slide 1 "Jetzt Einkaufen": `https://www.xt-trade.com/Schutzkleidung`
- Hero slide 2 "Produkte entdecken": `https://www.xt-trade.com/Sicherheitsschuhe`
- Categories "Gemeinsam lösen": anchor link to `#beratung` (smooth scroll)
- Categories popups: per-category links to xt-trade.com subcategories
- Story section "Mehr über uns": `https://www.xt-trade.com/Ueber-uns`
- TechSpecs "Direkt zur Schutzbekleidung": `https://www.xt-trade.com/Schutzkleidung`
- Consultation phone: `tel:+4922734068100`
- Consultation email: `https://www.xt-trade.com/Beratung-Kontakt`

## Important Implementation Notes

**Header Behavior**: The header uses `useScroll` to transform from transparent (on Hero) to white background on scroll. Logo is an image with responsive sizing (h-8 on mobile, h-10 on desktop). The mega-menu is triggered by `onMouseEnter` on nav items and dismissed with `onMouseLeave` on the header. On mobile, a hamburger menu opens an animated drawer with nav links. Text color adapts based on scroll state and active menu.

**Categories Pattern**: Each category card has a hover-activated (desktop) and tap-activated (mobile) popup overlay. The popup shows 3 product preview cards in a horizontal grid with images, names, and prices. Each popup's "Alle Produkte ansehen" button links to the category's own `link` field. Popup uses `bg-slate-900/85` with backdrop-blur for glassmorphism effect.

**Consultation Section**: Dark section (`bg-slate-900`) with two-column layout. Left column has headline, subtext, and two CTAs (phone button + email link). Right column shows 3 consultation options (vor Ort, beim Kunden, telefonisch) as cards. Section has `id="beratung"` for anchor linking.

**Testimonials (B2B Style)**: Testimonials are designed for B2B with company names prominent, project statistics (Users icon, Calendar icon), no star ratings, professional tone with concrete results/numbers. Customer approvals are pending - content will be updated when received.

**Swiper Configuration**: Hero uses `effect: 'fade'` with custom pagination bullets and custom styling in a `<style>` tag. FeaturedProducts (not currently rendered) uses standard slides with navigation arrows.

**Framer Motion**: Animations are declarative using `initial`, `animate`, `whileInView`, and `transition` props. Use `AnimatePresence` for exit animations (e.g., mega-menu, category popups, mobile menu).

## JTL Shop Integration

This React landing page serves as a **design reference** for a JTL Shop 5 NOVA Child Template. The planned implementation:
- Child template directory: `templates/XTChild/`
- Each React component maps to a Smarty `.tpl` snippet in `snippets/`
- Startpage override via `page/index.tpl` using Smarty `{block}` and `{include}`
- CSS: Tailwind with `tw-` prefix alongside Bootstrap 4 (preflight disabled)
- Animations: CSS `@keyframes` + Intersection Observer (replacing Framer Motion)
- Swiper.js: vanilla JS version (framework-agnostic)
- Testimonials section will be excluded from initial JTL implementation until customer approvals are received

## Git Workflow

- Main branch: `main`
- Standard commit workflow with git hooks (if configured)
- No ESLint or Prettier configured; no linting or formatting scripts available
