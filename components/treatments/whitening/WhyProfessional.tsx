'use client'
import { motion } from 'framer-motion'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'

export const WhyProfessional = () => {
  return (
    <section className="py-section max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Professional vs. Over-the-Counter</p>
        <h2 className="font-serif text-h2 text-teal">Why Choose Professional Whitening?</h2>
        <p className="text-warm-grey mt-4 max-w-2xl mx-auto">
          Those pharmacy strips and social media trends can't match the safety, speed, 
          and results of dentist-supervised whitening.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Professional */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-10 shadow-card border-2 border-teal/20"
        >
          <h3 className="font-serif text-2xl text-teal text-center mb-8">Professional Whitening</h3>
          <ul className="space-y-4">
            {[
              'Up to 8 shades brighter in 1 session',
              'Dentist-supervised, zero risk to gums',
              'Custom-fitted trays for even coverage',
              'Strong, medical-grade whitening gel',
              'Results last 1-2 years with care',
              'Includes desensitizing treatment',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-charcoal">
                <CheckCircleIcon className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* OTC */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-ivory rounded-3xl p-10 border border-warm-grey/20"
        >
          <h3 className="font-serif text-2xl text-warm-grey text-center mb-8">Over-the-Counter Products</h3>
          <ul className="space-y-4">
            {[
              'Minimal results — 1-2 shades at best',
              'Risk of gum burns from ill-fitting strips',
              'Uneven whitening, patchy results',
              'Weak concentrations for safety reasons',
              'Results fade within weeks',
              'No professional guidance or safety check',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-warm-grey">
                <XCircleIcon className="w-5 h-5 text-warm-grey/40 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}