'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { BanknotesIcon, ShieldCheckIcon, DocumentTextIcon, ClockIcon } from '@heroicons/react/24/outline'

const points = [
  {
    icon: DocumentTextIcon,
    title: 'Transparent Estimate',
    desc: 'Detailed cost breakdown provided before treatment. No surprises on your bill.',
  },
  {
    icon: BanknotesIcon,
    title: 'EMI Options',
    desc: 'Pay in easy monthly installments. Quality root canal treatment at affordable rates.',
  },
  {
    icon: ClockIcon,
    title: 'Single Sitting RCT',
    desc: 'Most cases completed in one visit — saves you time and multiple appointment costs.',
  },
  {
    icon: ShieldCheckIcon,
    title: '5-Year Warranty',
    desc: 'Our root canals come with a treatment warranty for your peace of mind.',
  },
]

export const RCTCost = () => {
  return (
    <section className="py-section max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-card p-10 md:p-14 border border-mint-fresh/30"
      >
        <div className="text-center mb-10">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Cost</p>
          <h2 className="font-serif text-h2 text-teal">Affordable RCT — No Hidden Fees</h2>
          <p className="text-warm-grey mt-4 max-w-xl mx-auto">
            We believe quality root canal treatment should be accessible. Here's our commitment to you.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {points.map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 mx-auto bg-mint-fresh/50 rounded-2xl flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-teal" />
              </div>
              <h3 className="font-medium text-charcoal text-sm mb-2">{item.title}</h3>
              <p className="text-warm-grey text-xs">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="primary-gold" href="/book-appointment">
            Get Your Cost Estimate — Free Consultation
          </Button>
        </div>
      </motion.div>
    </section>
  )
}