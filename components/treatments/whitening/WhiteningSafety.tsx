'use client'
import { motion } from 'framer-motion'
import {
  ShieldCheckIcon,
  HeartIcon,
  BeakerIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

const safety = [
  {
    icon: ShieldCheckIcon,
    title: 'Gum Protection',
    desc: 'A specialized barrier completely isolates your gums from the whitening gel. Zero irritation, zero burns.',
  },
  {
    icon: HeartIcon,
    title: 'Sensitivity Control',
    desc: 'We apply desensitizing agents before and after treatment. Most patients feel no sensitivity at all.',
  },
  {
    icon: BeakerIcon,
    title: 'Medical-Grade Gel',
    desc: 'Our whitening gel is pH-balanced and dentist-formulated. Far safer than unregulated products.',
  },
  {
    icon: SparklesIcon,
    title: 'Professional Supervision',
    desc: 'Every session is monitored by Dr. Gupta. If any discomfort occurs, we adjust immediately.',
  },
]

export const WhiteningSafety = () => {
  return (
    <section className="py-section bg-mint-fresh/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Your Safety</p>
          <h2 className="font-serif text-h2 text-teal">Safe, Comfortable, and Controlled</h2>
          <p className="text-warm-grey mt-4 max-w-2xl mx-auto">
            Worried about sensitivity or gum damage? Here's how we ensure your whitening 
            experience is completely safe and comfortable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {safety.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-card flex gap-6"
            >
              <div className="p-4 bg-mint-fresh/50 rounded-2xl h-fit shrink-0">
                <item.icon className="w-7 h-7 text-teal" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-teal mb-2">{item.title}</h3>
                <p className="text-warm-grey text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}