'use client'
import { motion } from 'framer-motion'
import {
  ShieldCheckIcon,
  ClockIcon,
  BanknotesIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'

const features = [
  { icon: HeartIcon, title: 'Pain‑Free Dentistry', desc: 'Gentle techniques that eliminate anxiety and discomfort.' },
  { icon: ShieldCheckIcon, title: 'ISO Sterilization', desc: 'Hospital‑grade safety protocols for your peace of mind.' },
  { icon: ClockIcon, title: 'Same‑Day Appointments', desc: 'We value your time — get treated without long waits.' },
  { icon: BanknotesIcon, title: 'Flexible EMI Options', desc: 'Premium care shouldn’t be out of reach. Easy payment plans.' },
]

export const WhyChooseUs = () => (
  <section className="py-section max-w-7xl mx-auto px-6">
    <h2 className="font-serif text-h2 text-teal text-center mb-16">Why Smiles Forever</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      {features.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="text-center"
        >
          <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-6">
            <f.icon className="w-8 h-8 text-gold" />
          </div>
          <h3 className="font-serif text-xl text-teal mb-3">{f.title}</h3>
          <p className="text-warm-grey text-sm leading-relaxed">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
)