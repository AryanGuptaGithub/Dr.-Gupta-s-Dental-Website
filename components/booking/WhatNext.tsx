'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'We Call You',
    desc: 'Within 30 minutes during working hours, a friendly team member will call to confirm your appointment and answer any questions.',
    icon: '📞',
    time: 'Within 30 min',
  },
  {
    number: '02',
    title: 'Visit the Clinic',
    desc: 'Arrive at our Andheri West clinic. Enjoy a warm welcome, minimal wait time, and a comfortable consultation with Dr. Gupta.',
    icon: '🏥',
    time: 'Your Appointment Day',
  },
  {
    number: '03',
    title: 'Begin Your Smile Journey',
    desc: 'After examination, you\'ll receive a clear treatment plan with transparent pricing. Start your journey to a healthier, more confident smile.',
    icon: '✨',
    time: 'Same Day',
  },
]

export const WhatNext = () => {
  return (
    <section className="py-section bg-mint-fresh/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">After Booking</p>
          <h2 className="font-serif text-h2 text-teal">What Happens Next?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-card text-center relative"
            >
              <div className="w-16 h-16 mx-auto bg-white border-2 border-mint-fresh rounded-full flex items-center justify-center mb-5 shadow-card">
                <span className="text-3xl">{step.icon}</span>
              </div>
              <span className="inline-block bg-gold/10 text-gold-dark text-xs font-medium px-3 py-1 rounded-full mb-4">
                {step.time}
              </span>
              <h3 className="font-serif text-lg text-teal mb-3">{step.title}</h3>
              <p className="text-warm-grey text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}