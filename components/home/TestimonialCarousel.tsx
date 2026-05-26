'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'
import { Button } from '@/components/ui/Button'

const testimonials = [
  {
    id: 1,
    text: "I was terrified of dentists until I met Dr. Gupta. The implant procedure was completely painless and the result is incredible. I can smile confidently again!",
    name: "Priya S.",
    rating: 5,
  },
  {
    id: 2,
    text: "My daughter had her braces here. The team is so patient with children. Truly a family dental clinic with world‑class care.",
    name: "Rajesh K.",
    rating: 5,
  },
  {
    id: 3,
    text: "Got a smile makeover and it's changed my life. The digital design preview gave me complete confidence before starting. Highly recommended.",
    name: "Ananya M.",
    rating: 5,
  },
]

export const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[current]

  return (
    <section className="py-section bg-mint-fresh/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-h2 text-teal mb-16">What Our Patients Say</h2>
        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-10 shadow-card"
            >
              <div className="flex justify-center mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-gold" />
                ))}
              </div>
              <p className="text-lg text-charcoal italic leading-relaxed mb-6">“{t.text}”</p>
              <p className="text-teal font-semibold">— {t.name}</p>
              <p className="text-warm-grey text-sm mt-1">Verified Google Review</p>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-gold' : 'bg-warm-grey/30'}`}
            />
          ))}
        </div>
        <div className="mt-8">
          <Button variant="text-link" href="/patient-reviews">Read All Reviews →</Button>
        </div>
      </div>
    </section>
  )
}