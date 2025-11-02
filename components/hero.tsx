import { Button } from "@/components/ui/button"
import { Sparkles, Zap, MessageSquare } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Banana decorations */}
      <div className="absolute left-10 top-20 text-6xl opacity-20 rotate-12">🍌</div>
      <div className="absolute right-10 top-20 text-6xl opacity-20 -rotate-12">🍌</div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
            <Sparkles className="h-4 w-4" />
            <span>The AI model that outperforms Flux Kontext</span>
          </div>

          <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight text-balance">
            <span className="text-primary">Nano Banana</span>
          </h1>

          <p className="mb-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Transform any image with simple text prompts. Nano-banana's advanced model delivers consistent character
            editing and scene preservation that surpasses Flux Kontext. Experience the future of AI image editing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Start Editing
              <Sparkles className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Examples
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">One-shot editing</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Multi-image support</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Natural language</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
