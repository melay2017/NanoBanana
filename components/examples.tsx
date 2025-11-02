import { Card } from "@/components/ui/card"

const examples = [
  {
    title: "Portrait Enhancement",
    description: "Transform portraits with natural lighting and professional quality",
    image: "/professional-portrait-with-golden-hour-lighting.jpg",
  },
  {
    title: "Scene Transformation",
    description: "Change environments while preserving character consistency",
    image: "/character-in-futuristic-city-scene.jpg",
  },
  {
    title: "Style Transfer",
    description: "Apply artistic styles while maintaining subject integrity",
    image: "/artistic-style-transfer-painting-effect.jpg",
  },
  {
    title: "Object Editing",
    description: "Add, remove, or modify objects with precision",
    image: "/product-photography-clean.png",
  },
]

export function Examples() {
  return (
    <section id="examples" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Showcase Gallery</h2>
          <p className="text-lg text-muted-foreground">
            See what's possible with Nano Banana's advanced AI editing capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {examples.map((example, index) => (
            <Card key={index} className="overflow-hidden border-border/50 hover:shadow-xl transition-shadow group">
              <div className="aspect-square overflow-hidden">
                <img
                  src={example.image || "/placeholder.svg"}
                  alt={example.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{example.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{example.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
