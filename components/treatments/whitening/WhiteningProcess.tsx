'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Pre-Whitening Check',
    desc: 'We examine your teeth and gums to ensure they\'re healthy. We note your current shade for comparison.',
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Protect Your Gums',
    desc: 'A protective barrier is applied to your gums to shield them completely from the whitening gel.',
    icon: '🛡️',
  },
  {
    number: '03',
    title: 'Apply Whitening Gel',
    desc: 'Professional-strength gel is applied to your teeth. The laser activates the gel for deeper whitening.',
    icon: '✨',
  },
  {
    number: '04',
    title: 'Reveal Your Smile',
    desc: 'After 2-3 cycles (about 45 minutes), we remove the gel. See your new shade — typically 5-8 shades brighter!',
    icon: '😁',
  },
]

export const WhiteningProcess = () => {
  return (
    <section className="py-section max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">The Process</p>
        <h2 className="font-serif text-h2 text-teal">What Happens During Whitening?</h2>
        <p className="text-warm-grey mt-4 max-w-xl mx-auto">
          It's quick, comfortable, and completely painless. Here's exactly what to expect.
        </p>
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

            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 -right-4 text-gold/30 text-2xl">→</div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}