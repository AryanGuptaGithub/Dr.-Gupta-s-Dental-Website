'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { DocumentTextIcon, BanknotesIcon, SparklesIcon } from '@heroicons/react/24/outline'

export const MakeoverCost = () => {
  return (
    <section className="py-section bg-mint-fresh/20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-card p-10 md:p-14"
        >
          <div className="text-center mb-10">
            <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Investment</p>
            <h2 className="font-serif text-h2 text-teal">Your Smile, Your Plan</h2>
            <p className="text-warm-grey mt-4 max-w-xl mx-auto">
              Every smile makeover is unique — and so is the cost. We create a plan that 
              fits your goals and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-mint-fresh/50 rounded-2xl flex items-center justify-center mb-4">
                <DocumentTextIcon className="w-7 h-7 text-teal" />
              </div>
              <h3 className="font-medium text-charcoal mb-2">Free Smile Design</h3>
              <p className="text-warm-grey text-sm">Your digital smile preview is complimentary — no commitment required.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-mint-fresh/50 rounded-2xl flex items-center justify-center mb-4">
                <BanknotesIcon className="w-7 h-7 text-teal" />
              </div>
              <h3 className="font-medium text-charcoal mb-2">Flexible EMI Plans</h3>
              <p className="text-warm-grey text-sm">Spread the cost over comfortable monthly payments. Premium care, affordable access.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-mint-fresh/50 rounded-2xl flex items-center justify-center mb-4">
                <SparklesIcon className="w-7 h-7 text-teal" />
              </div>
              <h3 className="font-medium text-charcoal mb-2">Custom Treatment Plan</h3>
              <p className="text-warm-grey text-sm">We design a package that addresses exactly what you want — no unnecessary procedures.</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button variant="primary-gold" href="/book-appointment">
              Get Your Personalized Smile Plan
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}