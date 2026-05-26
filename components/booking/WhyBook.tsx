'use client'
import { motion } from 'framer-motion'
import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  CreditCardIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

const reasons = [
  {
    icon: CalendarDaysIcon,
    title: 'Free Consultation',
    desc: 'Your first consultation includes a complete oral examination and treatment plan — absolutely free.',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'No-Pressure Advice',
    desc: 'We explain all your options clearly. No hard selling, no unnecessary treatments — just honest guidance.',
  },
  {
    icon: CreditCardIcon,
    title: 'Flexible Payment Options',
    desc: 'EMI plans available for all major treatments. Quality dental care that fits your budget.',
  },
  {
    icon: UserGroupIcon,
    title: 'Family-Friendly Clinic',
    desc: 'We treat patients of all ages — from toddlers to grandparents. A dental home for your entire family.',
  },
]

export const WhyBook = () => {
  return (
    <section className="py-section max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">The Smiles Forever Promise</p>
        <h2 className="font-serif text-h2 text-teal">What Makes Us Different</h2>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {reasons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-card text-center hover:shadow-card-hover transition-shadow"
          >
            <div className="w-14 h-14 mx-auto bg-mint-fresh/50 rounded-2xl flex items-center justify-center mb-5">
              <item.icon className="w-7 h-7 text-teal" />
            </div>
            <h3 className="font-serif text-lg text-teal mb-3">{item.title}</h3>
            <p className="text-warm-grey text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}