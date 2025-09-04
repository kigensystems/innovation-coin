# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server with Turbopack at http://localhost:3000
- `npm run build` - Build production application with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code linting

## Architecture

This is a Next.js 15 application with React 19, using the App Router pattern.

### Key Technologies
- **Framework**: Next.js 15.5.2 with Turbopack
- **UI**: React 19.1.0 with React DOM 19.1.0
- **Styling**: Tailwind CSS v3 with PostCSS (migrated from v4)
- **Animation**: Framer Motion 12.23.12
- **Icons**: Lucide React 0.542.0
- **TypeScript**: Version 5 with strict mode enabled
- **Font**: Roboto Mono from Google Fonts (weights: 400, 500, 600, 700)

### Project Structure
- `/app` - Next.js App Router pages and layouts
  - `page.tsx` - Main landing page that composes all sections
  - `layout.tsx` - Root layout with metadata and font configuration
  - `globals.css` - Global styles using Tailwind CSS v3 @tailwind directives
- `/components` - React components for each section (all TSX)
  - `Navigation.tsx` - Header navigation bar
  - `Hero.tsx` - Landing hero section with stats
  - `Mission.tsx` - Mission statement section
  - `Impact.tsx` - Impact metrics section
  - `Roadmap.tsx` - Project roadmap timeline
  - `Footer.tsx` - Footer component with links
  - **Removed Components:**
    - `Innovators.tsx` - Archived as `.bak` file
    - `Tokenomics.tsx` - Archived as `.bak` file
- `/public` - Static assets
  - `coin-logo.png` - Main logo image
  - Various SVG icons (file.svg, globe.svg, next.svg, vercel.svg, window.svg)

### Configuration Files
- `tsconfig.json` - TypeScript configuration with ES2017 target and bundler module resolution
- `next.config.ts` - Next.js configuration (currently minimal)
- `tailwind.config.js` - Tailwind CSS v3 configuration with custom theme extensions
- `postcss.config.mjs` - PostCSS with Tailwind CSS plugin
- `eslint.config.mjs` - ESLint using Next.js core-web-vitals and TypeScript configs

### Path Aliases
- `@/*` maps to the project root directory (configured in tsconfig.json)

### Styling Approach
- Uses Tailwind CSS v3 with @tailwind directives
- Custom CSS properties defined in :root for theming:
  - `--background`: #f5f5f5
  - `--foreground`: #000000
  - `--card-bg`: #ffffff
  - `--gray-light`: #e8e8e8
  - `--gray-medium`: #999999
  - `--accent`: #000000
- Typography system with semantic classes:
  - `.display-1`: Responsive 48px-104px
  - `.heading-1`: Responsive 32px-56px
  - `.heading-2`: Responsive 24px-40px
  - `.heading-3`: Responsive 20px-28px
  - `.body-text`: 16px (18px on md+)
  - `.label-text`: 12px uppercase with tracking
- Monospace font stack: 'Roboto Mono', 'Courier New', monospace
- Responsive container with breakpoints:
  - Base: 20px padding
  - md (768px+): 40px padding
  - lg (1024px+): 60px padding
  - Max width: 1280px
- Custom utility classes:
  - `.card-shadow`: Basic shadow for cards
  - `.card-shadow-hover`: Interactive shadow with transform on hover
- Smooth scrolling enabled globally

### Page Structure
The main page (`app/page.tsx`) renders sections in this order:
1. Navigation (fixed header)
2. Main content with spacing (16/20/24 units by breakpoint):
   - Hero section
   - Mission section
   - Impact section
   - Roadmap section
3. Footer

### Development Notes
- Git repository initialized with current active changes
- Main branch is the default
- Project uses npm for package management
- No custom webpack or build optimizations beyond Turbopack defaults
- Migrated from Tailwind CSS v4 to v3 for better compatibility
- Font changed from Space Mono to Roboto Mono for better readability