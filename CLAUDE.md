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

**XT-Trade Shop** is a modern B2B landing page for workwear and safety equipment (PPE), built with React, Vite, and Tailwind CSS. The site features a German-language interface targeting professional customers in construction, industry, and trade sectors.

**Important**: XT-TRADE is a distributor/retailer of safety equipment and workwear from leading manufacturers, NOT a manufacturer themselves. Content should reflect this positioning - they offer consultation, product selection, customization (embroidery/printing), and logistics services. They fulfill highest safety standards but do not "define" or "engineer" new standards.

## Tech Stack

- **Build Tool**: Vite (React + Vite dev server)
- **Frontend Framework**: React 18.2
- **Styling**: Tailwind CSS 3.4 with custom accent color (#EF9112)
- **Animations**: Framer Motion for scroll animations and transitions
- **Carousel/Slider**: Swiper.js for Hero and Product carousels
- **Icons**: Lucide React

## Architecture & Code Organization

### Entry Point Flow
- `index.html` → `src/main.jsx` → `src/App.jsx`
- Main stylesheet: `src/index.css` (Tailwind directives only)

### Component Structure

The app uses a single-page layout with components rendered sequentially in `App.jsx`:

1. **Header** - Sticky navigation with animated mega-menu dropdowns (uses image logo from assets.watara.services)
2. **Hero** - Full-screen Swiper carousel with image/video slides
3. **Brands** - Text-based brand showcase with infinite scroll
4. **BrandsLogos** - Logo-based brand showcase with grayscale hover effect
5. **Categories** - Grid layout with hover-activated product popups (see Categories Pattern below)
6. **Story** - Brand story section with XT-TRADE "Über uns" content, links to www.xt-trade.com/Ueber-uns
7. **TechSpecs** - Feature flip cards showcasing product standards, links to www.xt-trade.com/Schutzkleidung
8. **Testimonials** - B2B client references with company names, stats, and project details
9. **Footer** - Site footer

### Key Architecture Patterns

**Component-Level Data**: Components define their own data inline (e.g., `products` array in `FeaturedProducts.jsx`, `navData` object in `Header.jsx`, `categories` array in `Categories.jsx`). There is no centralized data layer or separate data files.

**Inline Styles**: Several components include `<style>` tags for Swiper customization and third-party library overrides (e.g., pagination bullets, navigation arrows). This is intentional for scoped third-party styling.

**Animation Strategy**:
- Framer Motion's `whileInView` for scroll-triggered animations
- `viewport={{ once: true }}` to animate only on first view
- Staggered delays using `index * 0.2` pattern for sequential reveals
- `useScroll` and `useTransform` for scroll-based header transformations

**Responsive Design**:
- Mobile-first Tailwind breakpoints (`md:`, `lg:`)
- Swiper breakpoints for responsive slide counts
- Conditional rendering for mobile menu icons

### Styling Conventions

**Color Palette**:
- Primary accent: `#EF9112` (orange, available as `accent` in Tailwind)
- Dark text: `slate-900`, `slate-800`
- Light backgrounds: `gray-50`, `white`
- Font family: Inter (loaded from Google Fonts)

**Common Patterns**:
- Group hover effects: `group` class with `group-hover:` modifiers
- Transform on hover: `hover:-translate-y-2`, `group-hover:scale-110`
- Gradient overlays: `bg-gradient-to-t from-black/80 to-transparent`
- Uppercase bold text: `uppercase tracking-wide font-bold`

### Assets

External assets are hosted at `https://assets.watara.services/xt/assets/` and placeholder images from Unsplash. When adding new assets, follow the existing pattern of using external URLs.

**Logo**: `https://assets.watara.services/xt/assets/XT-Logo_v2_277x49.png` (277x49px, used in Header)

### External Links

The site links to the main XT-TRADE website:
- Story section "Mehr über uns" button: `https://www.xt-trade.com/Ueber-uns`
- TechSpecs "Direkt zur Schutzbekleidung" button: `https://www.xt-trade.com/Schutzkleidung`

All external links use `target="_blank"` and `rel="noopener noreferrer"` for security.

## Important Implementation Notes

**Header Behavior**: The header uses `useScroll` to transform from transparent (on Hero) to white background on scroll. Logo is an image (`https://assets.watara.services/xt/assets/XT-Logo_v2_277x49.png`) with responsive sizing (h-8 on mobile, h-10 on desktop). The mega-menu is triggered by `onMouseEnter` on nav items and dismissed with `onMouseLeave` on the header. Text color adapts based on scroll state and active menu.

**Categories Pattern**: Each category card has a hover-activated popup that appears as a centered overlay. The popup shows 3 product preview cards in a horizontal grid with images, names, and prices. Popup uses `bg-slate-900/85` (85% opacity, 15% transparent) with backdrop-blur for modern glassmorphism effect. Products are defined inline within each category object. State managed with `useState` for `hoveredCategory`.

**Testimonials (B2B Style)**: Testimonials are designed for B2B with company names prominent, project statistics (Users icon, Calendar icon, Building2 icon), no star ratings, professional tone with concrete results/numbers. Each testimonial includes `company`, `role`, `stats` array, and longer descriptive text.

**Swiper Configuration**: Hero uses `effect: 'fade'` with custom pagination bullets. FeaturedProducts uses standard slides with navigation arrows. Both have custom styling in `<style>` tags.

**Framer Motion**: Animations are declarative using `initial`, `animate`, `whileInView`, and `transition` props. Use `AnimatePresence` for exit animations (e.g., mega-menu, category popups).

## Git Workflow

- Main branch: `main`
- Current branch: `2nd`
- Standard commit workflow with git hooks (if configured)
