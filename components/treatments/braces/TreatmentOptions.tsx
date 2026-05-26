'use client'
import { motion } from 'framer-motion'

export const TreatmentOptions = () => {
  return (
    <section className="py-section bg-mint-fresh/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Your Options</p>
          <h2 className="font-serif text-h2 text-teal">Braces or Aligners? We Help You Decide</h2>
          <p className="text-warm-grey mt-4 max-w-2xl mx-auto">
            Every smile is unique. We'll recommend the best option for your case, 
            lifestyle, and budget — with zero pressure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Braces Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-card border-2 border-mint-fresh/30 hover:border-teal/30 transition-colors"
          >
            <div className="text-center">
              <span className="text-5xl mb-4 block">🦷</span>
              <h3 className="font-serif text-2xl text-teal mb-2">Braces</h3>
              <p className="text-warm-grey text-sm mb-8">Fixed brackets & wires for precise control</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-charcoal">
                <span className="text-teal font-bold mt-0.5">✓</span>
                Best for complex cases & severe misalignment
              </li>
              <li className="flex items-start gap-3 text-sm text-charcoal">
                <span className="text-teal font-bold mt-0.5">✓</span>
                Metal, ceramic, or hidden lingual options
              </li>
              <li className="flex items-start gap-3 text-sm text-charcoal">
                <span className="text-teal font-bold mt-0.5">✓</span>
                No need to remember to wear them
              </li>
              <li className="flex items-start gap-3 text-sm text-warm-grey">
                <span className="text-gold mt-0.5">→</span>
                Treatment: 12-24 months
              </li>
            </ul>
            <p className="text-center text-xs text-warm-grey">Starts at affordable EMI</p>
          </motion.div>

          {/* Aligners Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-card border-2 border-gold/20 hover:border-gold/40 transition-colors"
          >
            <div className="text-center">
              <span className="text-5xl mb-4 block">✨</span>
              <h3 className="font-serif text-2xl text-teal mb-2">Clear Aligners</h3>
              <p className="text-warm-grey text-sm mb-8">Invisible, removable trays for discreet treatment</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-charcoal">
                <span className="text-teal font-bold mt-0.5">✓</span>
                Nearly invisible — no one notices
              </li>
              <li className="flex items-start gap-3 text-sm text-charcoal">
                <span className="text-teal font-bold mt-0.5">✓</span>
                Removable for eating & brushing
              </li>
              <li className="flex items-start gap-3 text-sm text-charcoal">
                <span className="text-teal font-bold mt-0.5">✓</span>
                More comfortable, fewer clinic visits
              </li>
              <li className="flex items-start gap-3 text-sm text-warm-grey">
                <span className="text-gold mt-0.5">→</span>
                Treatment: 6-18 months
              </li>
            </ul>
            <p className="text-center text-xs text-warm-grey">Best for mild to moderate cases</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}