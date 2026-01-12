"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What interior design services does Interiara offer in Dubai?",
    answer:
      "Interiara provides comprehensive interior design services across Dubai and UAE including: Villa interior design, apartment & penthouse design, Arabic style interiors, luxury modern design, office fit-outs, restaurant & cafe interiors, retail shop design, hotel interiors, kitchen & bathroom remodeling, custom furniture design, 3D visualization, space planning, and complete project management. We offer end-to-end solutions from concept to execution.",
  },
  {
    question: "Which areas in Dubai does Interiara serve?",
    answer:
      "Interiara serves all areas across Dubai and UAE including Downtown Dubai, Dubai Marina, Palm Jumeirah, Business Bay, JBR, Arabian Ranches, Jumeirah, DIFC, Emirates Hills, Al Barsha, Mirdif, JLT, Dubai Hills, Creek Harbour, and all other communities. We also provide services in Abu Dhabi, Sharjah, Ajman, and other Emirates.",
  },
  {
    question: "Do you provide 3D visualization before starting the project?",
    answer:
      "Yes! Interiara provides advanced 3D visualization and virtual walk-through for all projects. This allows you to see exactly how your space will look before any construction begins. Our photorealistic 3D renders help you make informed decisions about colors, materials, furniture, and layouts, ensuring complete satisfaction with the final design.",
  },
  {
    question: "What is the typical timeline for an interior design project in Dubai?",
    answer:
      "Project timelines vary based on scope and complexity. A single room makeover typically takes 2-3 weeks, full apartment design takes 6-8 weeks, villa interior projects range from 10-16 weeks, and commercial fit-outs have customized timelines. We provide detailed project schedules during consultation and ensure timely delivery without compromising quality.",
  },
  {
    question: "Does Interiara handle complete project execution and installation?",
    answer:
      "Absolutely! Interiara provides turnkey interior design solutions including design consultation, 3D visualization, material procurement, furniture sourcing, contractor coordination, on-site supervision, and final installation. Our dedicated project managers ensure seamless execution from concept to completion, so you can simply relax while we transform your space.",
  },
  {
    question: "Can Interiara design both Arabic traditional and modern contemporary interiors?",
    answer:
      "Yes, our talented designers specialize in multiple styles including traditional Arabic/Majlis design, modern contemporary, luxury classic, minimalist, industrial, Scandinavian, Mediterranean, and fusion styles. We customize every design to match your preferences, cultural requirements, and lifestyle. Many clients choose a blend of Arabic heritage elements with modern functionality.",
  },
  {
    question: "What makes Interiara different from other interior designers in Dubai?",
    answer:
      "Interiara stands out with 500+ successful projects, a team of 25+ expert designers, transparent pricing with no hidden costs, free initial consultation, advanced 3D visualization technology, dedicated project managers, quality materials from trusted suppliers, timely delivery guarantees, and exceptional after-project support. Our client satisfaction rate exceeds 98%.",
  },
  {
    question: "How do I get started with Interiara for my interior design project?",
    answer:
      "Getting started is easy! Simply contact us via WhatsApp, phone (+91 635 358 3148), or fill out our online enquiry form. We'll schedule a free consultation to understand your vision, assess your space, discuss your requirements and budget, then provide a customized design proposal. There's no obligation – let's start transforming your space today!",
  },
]

export function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-mono uppercase tracking-wider mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Frequently Asked Questions About Interior Design in Dubai
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            Everything you need to know about our interior design services, process, and how Interiara can transform your space in Dubai & UAE
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-colors"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-background">
                  <p className="text-muted-foreground leading-relaxed font-mono">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Schema.org FAQ Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  )
}
