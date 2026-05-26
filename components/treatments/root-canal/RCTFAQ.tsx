'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    q: 'Is root canal treatment really painless?',
    a: 'Yes — with modern anesthesia techniques and our advanced equipment, most patients feel zero pain during the procedure. The pain you feel before treatment (from the infection) is far worse than anything during RCT. In fact, RCT relieves your pain.',
  },
  {
    q: 'How long does a root canal take?',
    a: 'Most root canals are completed in a single visit of 45-90 minutes, depending on the tooth. Complex cases may require two visits. We use rotary endodontics which is significantly faster than traditional methods.',
  },
  {
    q: 'What is the cost of root canal treatment in Mumbai?',
    a: 'The cost varies based on the tooth (front vs. molar) and complexity. We provide a transparent estimate at your consultation. EMI options are available starting at very affordable monthly payments.',
  },
  {
    q: 'Is it better to extract the tooth instead of RCT?',
    a: 'Saving your natural tooth is always the best option when possible. Extraction creates gaps that can cause shifting of other teeth, bone loss, and the need for costlier replacements like implants or bridges. RCT preserves your natural smile.',
  },
  {
    q: 'How long will the treated tooth last?',
    a: 'With proper care, good oral hygiene, and regular checkups, a root canal treated tooth can last a lifetime. The crown placed after RCT protects the tooth and restores full function.',
  },
]

export const RCTFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-section max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Common Questions</p>
        <h2 className="font-serif text-h2 text-teal">Root Canal FAQs</h2>
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