'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { BanknotesIcon, ShieldCheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

export const ImplantCost = () => {
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
          <h2 className="font-serif text-h2 text-teal">Transparent Pricing & EMI Options</h2>
          <p className="text-warm-grey mt-4 max-w-xl mx-auto">
            We believe in complete transparency. Here's what you should know about implant costs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-14 h-14 mx-auto bg-mint-fresh/50 rounded-2xl flex items-center justify-center mb-4">
              <DocumentTextIcon className="w-7 h-7 text-teal" />
            </div>
            <h3 className="font-medium text-charcoal mb-2">No Hidden Costs</h3>
            <p className="text-warm-grey text-sm">Detailed estimate before treatment. Includes implant, abutment, and crown.</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 mx-auto bg-mint-fresh/50 rounded-2xl flex items-center justify-center mb-4">
              <BanknotesIcon className="w-7 h-7 text-teal" />
            </div>
            <h3 className="font-medium text-charcoal mb-2">EMI Options Available</h3>
            <p className="text-warm-grey text-sm">Pay in easy monthly installments. Quality care shouldn't be out of reach.</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 mx-auto bg-mint-fresh/50 rounded-2xl flex items-center justify-center mb-4">
              <ShieldCheckIcon className="w-7 h-7 text-teal" />
            </div>
            <h3 className="font-medium text-charcoal mb-2">Lifetime Warranty</h3>
            <p className="text-warm-grey text-sm">Our implants come with manufacturer warranty for complete peace of mind.</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button variant="primary-gold" href="/book-appointment">
            Get Your Personalized Cost Estimate
          </Button>
        </div>
      </motion.div>
    </section>
  )
}