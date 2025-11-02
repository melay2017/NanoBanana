import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes Nano Banana different from other AI image editors?",
    answer:
      "Nano Banana uses an advanced AI model that excels at character consistency and scene preservation. Unlike other tools, our one-shot editing delivers professional results without multiple iterations, and our natural language processing understands complex editing instructions.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "We support all major image formats including JPG, PNG, WebP, and HEIC. You can upload images up to 50MB in size, and our AI will process them while maintaining the highest quality.",
  },
  {
    question: "Can I use Nano Banana for commercial projects?",
    answer:
      "Yes! All images generated with Nano Banana can be used for commercial purposes. You retain full rights to your creations, whether for personal or business use.",
  },
  {
    question: "How does batch processing work?",
    answer:
      "Our batch processing feature allows you to upload multiple images and apply the same prompt to all of them simultaneously. This is perfect for maintaining consistency across a series of images or processing large volumes efficiently.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! New users get free credits to try Nano Banana and experience the power of our AI editing. No credit card required to start.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know about Nano Banana</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
