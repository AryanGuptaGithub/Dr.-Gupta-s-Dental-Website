'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    q: 'Is dental implant surgery painful?',
    a: 'Not at all. We use advanced local anesthesia and offer sedation for anxious patients. Most patients report little to no discomfort during the procedure. Post-surgery soreness is managed with mild pain medication and typically subsides within 2-3 days.',
  },
  {
    q: 'How much does a dental implant cost in Mumbai?',
    a: 'The cost varies based on the implant system used, the number of implants needed, and whether additional procedures (like bone grafting) are required. We provide a detailed, transparent estimate at your free consultation. EMI options are available to make treatment affordable.',
  },
  {
    q: 'How long do dental implants last?',
    a: 'With proper care and regular dental checkups, implants can last 25+ years — often a lifetime. We use premium German implant systems that come with manufacturer warranties.',
  },
  {
    q: 'Can I really get teeth in 3 days?',
    a: 'Yes! With immediate loading protocols, we can place the implant and attach a temporary crown in the same week. The final permanent crown is placed after 3-4 months of healing. You never have to go without teeth.',
  },
  {
    q: 'Am I a candidate for dental implants?',
    a: 'Most healthy adults are candidates. Even if you have bone loss, we offer bone grafting. The best way to know is a free 3D CBCT scan at our clinic. Book a consultation and we will assess your suitability.',
  },
]

export const ImplantFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-section max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Common Questions</p>
        <h2 className="font-serif text-h2 text-teal">Dental Implant FAQs</h2>
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