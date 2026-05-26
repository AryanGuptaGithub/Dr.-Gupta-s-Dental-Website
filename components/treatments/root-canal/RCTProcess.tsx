'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Diagnosis & Anesthesia',
    desc: 'We take a digital X-ray to assess the infection. Local anesthesia is administered painlessly — you won\'t feel a thing.',
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Cleaning & Shaping',
    desc: 'Using the microscope and rotary instruments, we gently remove infected tissue and shape the canals with precision.',
    icon: '🧹',
  },
  {
    number: '03',
    title: 'Filling & Sealing',
    desc: 'The cleaned canals are filled with biocompatible material and sealed to prevent reinfection.',
    icon: '🔒',
  },
  {
    number: '04',
    title: 'Crown Protection',
    desc: 'A custom crown is placed over the tooth to restore strength, function, and natural appearance.',
    icon: '👑',
  },
]

export const RCTProcess = () => {
  return (
    <section className="py-section max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">The Procedure</p>
        <h2 className="font-serif text-h2 text-teal">Your Root Canal Journey — Step by Step</h2>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center relative"
          >
            <div className="w-20 h-20 mx-auto bg-white border-2 border-mint-fresh rounded-full flex items-center justify-center mb-6 shadow-card">
              <span className="text-3xl">{step.icon}</span>
            </div>
            <span className="block font-serif text-2xl text-gold/30 mb-2">{step.number}</span>
            <h3 className="font-serif text-lg text-teal mb-3">{step.title}</h3>
            <p className="text-warm-grey text-sm leading-relaxed">{step.desc}</p>

            {/* Arrow between steps */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 -right-4 text-gold/30 text-2xl">→</div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}