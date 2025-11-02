"use client"

import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🍌</span>
          <span className="text-xl font-bold text-primary">Nano Banana</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#editor" className="text-sm font-medium hover:text-primary transition-colors">
            Image Editor
          </a>
          <a href="#examples" className="text-sm font-medium hover:text-primary transition-colors">
            Showcase
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Reviews
          </a>
          <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Launch Now
          </Button>
        </div>
      </div>
    </header>
  )
}
