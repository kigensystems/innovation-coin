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
- **UI**: React 19.1.0
- **Styling**: Tailwind CSS v4 with PostCSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Strict mode enabled

### Project Structure
- `/app` - Next.js App Router pages and layouts
  - `page.tsx` - Main landing page that composes all sections
  - `layout.tsx` - Root layout wrapper
  - `globals.css` - Global styles using Tailwind CSS imports
- `/components` - React components for each section
  - `Navigation.tsx` - Header navigation
  - `Hero.tsx` - Landing hero section
  - `Mission.tsx` - Mission statement section
  - `Innovators.tsx` - Innovators showcase
  - `Tokenomics.tsx` - Token economics display
  - `Impact.tsx` - Impact metrics section
  - `Roadmap.tsx` - Project roadmap
  - `Footer.tsx` - Footer component
- `/public` - Static assets (SVGs, images)

### Path Aliases
- `@/*` maps to the project root directory (configured in tsconfig.json)

### Styling Approach
- Uses Tailwind CSS v4 with @import syntax
- Custom CSS properties defined in :root for theming
- Monospace font stack: 'Space Mono', 'Courier New', monospace
- Responsive container with breakpoints at 768px and 1024px
- Custom utility classes for card shadows and hover effects