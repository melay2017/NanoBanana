# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application called "Nano Banana - AI Image Editor" built with React 19, TypeScript, and Tailwind CSS. It's a marketing landing page for an AI-powered image editing service that allows users to transform images using text prompts.

## Development Commands

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Package management
# This project uses pnpm as the package manager
pnpm install      # Install dependencies
```

## Architecture & Tech Stack

- **Framework**: Next.js 16 with App Router
- **UI**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4.1.9 with PostCSS
- **Components**: Shadcn/ui component library (New York style)
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Themes**: next-themes for dark/light mode
- **Analytics**: Vercel Analytics
- **Fonts**: Geist font family

## Project Structure

```
├── app/                    # Next.js app router directory
│   ├── layout.tsx         # Root layout with metadata and analytics
│   ├── page.tsx           # Home page with all sections
│   └── globals.css        # Global styles and Tailwind imports
├── components/            # React components
│   ├── ui/               # Shadcn/ui components (50+ components)
│   ├── editor.tsx        # AI editor interface component
│   ├── examples.tsx      # Examples showcase section
│   ├── faq.tsx          # FAQ section
│   ├── features.tsx     # Features section
│   ├── footer.tsx       # Footer component
│   ├── header.tsx       # Navigation header
│   ├── hero.tsx         # Hero section
│   ├── testimonials.tsx # Testimonials section
│   └── theme-provider.tsx # Theme context provider
├── hooks/                # Custom React hooks
│   ├── use-mobile.ts    # Mobile detection hook
│   └── use-toast.ts     # Toast notification hook
├── lib/                 # Utility libraries
│   └── utils.ts         # Utility functions (cn, etc.)
├── styles/              # Additional styles
│   └── globals.css      # Duplicate global styles
└── public/             # Static assets
```

## Component Architecture

The application follows a section-based landing page architecture:

- **Header**: Navigation with mobile menu support
- **Hero**: Main value proposition with CTA
- **Features**: Feature highlights with grid layout
- **Editor**: Interactive AI editor demo with image upload and prompt input
- **Examples**: Visual examples of AI editing capabilities
- **Testimonials**: Customer testimonials carousel
- **FAQ**: Accordion-style FAQ section
- **Footer**: Standard footer with links

## Key Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Theme Support**: Dark/light mode toggle
- **Component Library**: Extensive use of Shadcn/ui components
- **Image Upload**: Client-side image upload with FileReader API
- **Form Handling**: React Hook Form with validation
- **Accessibility**: Radix UI primitives for accessibility

## Configuration Notes

- **TypeScript**: Build errors are ignored (`ignoreBuildErrors: true`)
- **Images**: Unoptimized images enabled (`unoptimized: true`)
- **Path Aliases**: `@/*` maps to project root
- **Component Style**: New York style with neutral base color and CSS variables

## Development Notes

- Uses pnpm for package management
- All components are client-side ("use client" directive)
- No API routes - frontend-only marketing site
- No external CMS or database integration
- Image editing functionality is UI-only (no actual AI processing)

## Component Conventions

- Components use TypeScript with proper typing
- Consistent use of Tailwind CSS classes
- Accessibility considerations with Radix UI
- Responsive design with mobile-first approach
- Theme-aware components supporting dark/light modes