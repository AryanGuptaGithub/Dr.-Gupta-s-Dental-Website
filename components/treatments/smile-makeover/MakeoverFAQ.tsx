'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    q: 'How long does a smile makeover take?',
    a: 'It depends on the procedures involved. Simple cases (whitening + bonding) can be done in 1-2 visits. Full makeovers with veneers may take 2-3 weeks. We\'ll give you a clear timeline at your consultation.',
  },
  {
    q: 'Will my smile look natural?',
    a: 'Absolutely. Natural aesthetics is our priority. Using Digital Smile Design, we ensure your new smile complements your facial features. No one will know you\'ve had work done — they\'ll just notice you look great.',
  },
  {
    q: 'Is the procedure painful?',
    a: 'Most smile makeover procedures are minimally invasive and cause little to no discomfort. We use gentle techniques and offer sedation for longer appointments.',
  },
  {
    q: 'How much does a smile makeover cost in Mumbai?',
    a: 'Cost varies widely based on what you need — from simple bonding to full-mouth veneers. We provide a transparent estimate after your free smile design consultation. EMI options are available.',
  },
  {
    q: 'Can I see what my smile will look like before committing?',
    a: 'Yes! That\'s exactly what Digital Smile Design does. You see a digital preview of your new smile before any treatment begins. Approve the design first, then we proceed.',
  },
]

export const MakeoverFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-section max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">FAQs</p>
        <h2 className="font-serif text-h2 text-teal">Smile Makeover Questions</h2>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-card overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center p-6 text-left font-medium text-charcoal hover:text-teal transition-colors"
            >
              <span>{faq.q}</span>
              <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDownIcon className="w-5 h-5 text-gold shrink-0 ml-4" />
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
                  <p className="px-6 pb-6 text-warm-grey leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}