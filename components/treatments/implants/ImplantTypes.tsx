'use client'
import { motion } from 'framer-motion'

const types = [
  {
    title: 'Single Tooth Implant',
    desc: 'One implant + one crown. Ideal when you have a single missing tooth. Looks and functions exactly like the original.',
    icon: '🦷',
  },
  {
    title: 'Implant Bridge',
    desc: 'Two implants supporting a bridge of 3-4 teeth. A fixed alternative to removable partial dentures.',
    icon: '🦷🦷🦷',
  },
  {
    title: 'Full Mouth Implants',
    desc: '4-6 implants per jaw supporting a full arch of teeth. Often called "All-on-4" or "All-on-6". Life-changing for denture wearers.',
    icon: '😁',
  },
]

export const ImplantTypes = () => {
  return (
    <section className="py-section bg-mint-fresh/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Treatment Options</p>
          <h2 className="font-serif text-h2 text-teal">Implant Solutions for Every Need</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {types.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-card text-center"
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="font-serif text-xl text-teal mb-3">{item.title}</h3>
              <p className="text-warm-grey text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}   