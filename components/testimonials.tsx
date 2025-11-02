import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Digital Artist",
    content:
      "Nano Banana has completely transformed my workflow. The character consistency is unmatched, and the natural language prompts make editing feel intuitive.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Content Creator",
    content:
      "I've tried every AI image editor out there, and Nano Banana is hands down the best. The one-shot editing saves me hours every week.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Photographer",
    content:
      "The scene preservation is incredible. I can transform backgrounds while keeping my subjects perfectly intact. This is the future of photo editing.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Creators Say</h2>
          <p className="text-lg text-muted-foreground">Join thousands of satisfied creators using Nano Banana daily</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-border/50 bg-card">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
