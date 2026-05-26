'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { BanknotesIcon, DocumentTextIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'

export const BracesCost = () => {
  return (
    <section className="py-section max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-card p-10 md:p-14 border border-mint-fresh/30"
      >
        <div className="text-center mb-10">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Investment</p>
          <h2 className="font-serif text-h2 text-teal">Affordable Payment Plans</h2>
          <p className="text-warm-grey mt-4 max-w-xl mx-auto">
            Quality orthodontic care doesn't have to break the bank. We offer flexible payment 
            options to make your dream smile accessible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-14 h-14 mx-auto bg-mint-fresh/50 rounded-2xl flex items-center justify-center mb-4">
              <DocumentTextIcon className="w-7 h-7 text-teal" />
            </div>
            <h3 className="font-medium text-charcoal mb-2">Free Consultation</h3>
            <p className="text-warm-grey text-sm">Your smile assessment and 3D scan are completely free — no strings attached.</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 mx-auto bg-mint-fresh/50 rounded-2xl flex items-center justify-center mb-4">
              <BanknotesIcon className="w-7 h-7 text-teal" />
            </div>
            <h3 className="font-medium text-charcoal mb-2">Easy EMI Plans</h3>
            <p className="text-warm-grey text-sm">Spread the cost over 12-24 months. Affordable monthly payments that fit your budget.</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 mx-auto bg-mint-fresh/50 rounded-2xl flex items-center justify-center mb-4">
              <CalendarDaysIcon className="w-7 h-7 text-teal" />
            </div>
            <h3 className="font-medium text-charcoal mb-2">All-Inclusive Quote</h3>
            <p className="text-warm-grey text-sm">Covers everything — scans, fittings, adjustments, retainers. No surprise charges.</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button variant="primary-gold" href="/book-appointment">
            Get Your Personalized Treatment Plan
          </Button>
        </div>
      </motion.div>
    </section>
  )
}