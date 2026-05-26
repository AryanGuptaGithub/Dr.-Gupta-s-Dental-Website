'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    q: 'How much do braces cost in Mumbai?',
    a: 'The cost depends on the type of braces (metal, ceramic, lingual) or aligners, and the complexity of your case. We provide a detailed, all-inclusive estimate at your free consultation. EMI plans start at very affordable monthly payments.',
  },
  {
    q: 'Which is better — braces or clear aligners?',
    a: 'It depends on your case. Braces are better for complex corrections and severe misalignment. Aligners excel for mild to moderate cases and offer superior aesthetics. Dr. Gupta will recommend the best option after evaluating your teeth.',
  },
  {
    q: 'Do braces hurt?',
    a: 'You may feel some pressure for a few days after each adjustment as teeth begin moving. This is normal and manageable with mild pain relief. Most patients adapt quickly and feel fine within a week.',
  },
  {
    q: 'How long does orthodontic treatment take?',
    a: 'Treatment typically ranges from 6-24 months depending on complexity. Clear aligner cases average 12-18 months. We\'ll give you a precise timeline during your consultation.',
  },
  {
    q: 'Can adults get braces?',
    a: 'Absolutely! 40% of our orthodontic patients are adults. With ceramic braces and clear aligners, treatment is discreet. It\'s never too late to get the smile you deserve.',
  },
]

export const BracesFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-section max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">FAQs</p>
        <h2 className="font-serif text-h2 text-teal">Braces & Aligners Questions</h2>
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