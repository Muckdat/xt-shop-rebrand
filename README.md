# XT-Trade Shop

A modern, high-performance landing page for XT-Trade, an e-commerce platform specializing in professional workwear, safety equipment, and personal protective equipment (PPE).

## Features

- **Full-Screen Hero Carousel** - Dynamic hero section with image and video slides, smooth fade transitions
- **Mega Menu Navigation** - Animated dropdown menus with featured product showcases
- **Product Showcase** - Interactive product cards with hover effects and carousel navigation
- **Category Grid** - Responsive masonry-style category layout with dynamic sizing
- **Smooth Animations** - Scroll-triggered animations and micro-interactions using Framer Motion
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop viewports
- **Performance Optimized** - Built with Vite for lightning-fast development and production builds

## Tech Stack

- **React** 18.2 - Modern UI component library
- **Vite** - Next-generation frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **Swiper** - Modern mobile-friendly slider
- **Lucide React** - Beautiful, consistent icon set

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd xt-shop-rebrand
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation with mega-menu
│   ├── Hero.jsx            # Full-screen carousel
│   ├── Brands.jsx          # Brand showcase
│   ├── Categories.jsx      # Category grid
│   ├── FeaturedProducts.jsx # Product carousel
│   ├── Story.jsx           # Brand story
│   ├── TechSpecs.jsx       # Technical specifications
│   ├── Testimonials.jsx    # Customer reviews
│   └── Footer.jsx          # Site footer
├── App.jsx                 # Main app component
├── main.jsx               # Application entry point
└── index.css              # Global styles (Tailwind)
```

## Customization

### Brand Colors

The primary accent color is defined in `tailwind.config.js`:

```javascript
colors: {
  accent: '#EF9112', // Orange brand color
}
```

### Fonts

The project uses **Inter** font family, loaded from Google Fonts in `index.html`.

### Content

Component data (products, categories, navigation) is defined inline within each component. To update content:

- **Products**: Edit the `products` array in `src/components/FeaturedProducts.jsx`
- **Categories**: Edit the `categories` array in `src/components/Categories.jsx`
- **Navigation**: Edit the `navData` object in `src/components/Header.jsx`

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory, ready for deployment to any static hosting service.

## License

Private - All rights reserved
