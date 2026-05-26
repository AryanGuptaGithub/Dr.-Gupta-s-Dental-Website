'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    q: 'How white will my teeth get?',
    a: 'Most patients see an improvement of 5-8 shades in a single laser session. We measure your starting shade and show you the before/after difference so you can see the results yourself.',
  },
  {
    q: 'Does teeth whitening hurt?',
    a: 'No, professional whitening is painless. Some patients experience mild temporary sensitivity for 24-48 hours. We apply desensitizing agents to minimize this. Most feel nothing at all.',
  },
  {
    q: 'How long do whitening results last?',
    a: 'With good oral hygiene and avoiding heavy staining foods/drinks, results last 1-2 years. The take-home kit helps maintain your bright smile. Touch-up sessions are quick and affordable.',
  },
  {
    q: 'Is professional whitening safe for my enamel?',
    a: 'Yes, absolutely. Our whitening gel is pH-balanced and dentist-formulated. It whitens without damaging enamel. This is why professional whitening is far safer than over-the-counter products.',
  },
  {
    q: 'Can I whiten if I have sensitive teeth?',
    a: 'Yes! We use desensitizing treatments before and after whitening. Many patients with sensitive teeth whiten comfortably. We can also recommend a gentler take-home approach if needed.',
  },
]

export const WhiteningFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-section max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">FAQs</p>
        <h2 className="font-serif text-h2 text-teal">Teeth Whitening Questions</h2>
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