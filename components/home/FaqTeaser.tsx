'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'

const faqs = [
  { q: 'Is dental implant surgery painful?', a: 'With our advanced anesthesia and gentle technique, most patients report little to no discomfort. We also offer sedation for anxious patients.' },
  { q: 'How much does a root canal cost in Mumbai?', a: 'Cost depends on tooth complexity. We promise no hidden charges and provide a clear estimate before treatment.' },
  { q: 'Do you offer same‑day appointments?', a: 'Yes! We understand busy schedules. Call or WhatsApp us and we’ll fit you in, often the same day.' },
]

export const FaqTeaser = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-section max-w-4xl mx-auto px-6">
      <h2 className="font-serif text-h2 text-teal text-center mb-16">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-card overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center p-6 text-left font-medium text-charcoal hover:text-teal transition-colors"
            >
              {faq.q}
              <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDownIcon className="w-5 h-5 text-gold" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-warm-grey">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button variant="outline-teal" href="/faqs">View All FAQs</Button>
      </div>
    </section>
  )
}