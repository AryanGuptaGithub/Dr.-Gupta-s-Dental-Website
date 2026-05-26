'use client'
import { motion } from 'framer-motion'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'

const symptoms = [
  'Sharp, throbbing tooth pain that won\'t go away',
  'Sensitivity to hot or cold that lingers',
  'Swollen, tender gums near the tooth',
  'Darkening or discoloration of the tooth',
  'A small pimple-like bump on the gum (abscess)',
  'Pain when chewing or biting down',
]

export const SymptomsRCT = () => {
  return (
    <section className="py-section bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Warning Signs</p>
            <h2 className="font-serif text-h2 text-teal mb-6">
              Do You Need a Root Canal?
            </h2>
            <p className="text-warm-grey mb-8">
              If you're experiencing any of these symptoms, don't wait. Early treatment 
              saves your tooth and prevents serious complications.
            </p>
            <Button variant="primary-gold" href="/book-appointment">
              Get It Checked Today
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-ivory rounded-3xl p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <ExclamationTriangleIcon className="w-6 h-6 text-gold" />
              <h3 className="font-serif text-xl text-teal">Check These Signs</h3>
            </div>
            <ul className="space-y-3">
              {symptoms.map((symptom, i) => (
                <li key={i} className="flex items-start gap-3 text-warm-grey text-sm">
                  <span className="w-5 h-5 rounded-full bg-mint-fresh/50 flex items-center justify-center text-teal text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {symptom}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}