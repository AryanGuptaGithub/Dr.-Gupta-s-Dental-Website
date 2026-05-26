'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Photographs & 3D Scan',
    desc: 'We capture high-resolution images and a digital scan of your teeth and face — completely comfortable, no goopy impressions.',
  },
  {
    number: '02',
    title: 'Digital Design',
    desc: 'Using DSD software, Dr. Gupta designs your ideal smile based on your facial proportions, lip line, and personal preferences.',
  },
  {
    number: '03',
    title: 'Preview & Approve',
    desc: 'You see a digital mockup of your new smile on screen. Request changes until it\'s exactly what you want.',
  },
  {
    number: '04',
    title: 'Smile Delivered',
    desc: 'Once approved, we create your new smile with precision. The result matches the design you already fell in love with.',
  },
]

export const DigitalSmileDesign = () => {
  return (
    <section className="py-section max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Digital Smile Design</p>
        <h2 className="font-serif text-h2 text-teal">See Your Smile Before We Begin</h2>
        <p className="text-warm-grey mt-4 max-w-2xl mx-auto">
          The fear of the unknown is the biggest barrier to cosmetic dentistry. With DSD, 
          there are no surprises — only the excitement of seeing your future smile.
        </p>
      </div>

      <div className="relative">
        {/* Vertical line on desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-mint-fresh -translate-x-1/2" />

        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`flex items-center gap-8 md:gap-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className={`hidden md:flex w-1/2 ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                <div className="w-16 h-16 bg-teal text-white rounded-full flex items-center justify-center font-serif text-2xl shadow-card relative z-10">
                  {step.number}
                </div>
              </div>
              <div className="md:w-1/2 bg-white rounded-3xl p-8 shadow-card border border-mint-fresh/20">
                <span className="md:hidden font-serif text-2xl text-gold mb-2 block">{step.number}</span>
                <h3 className="font-serif text-xl text-teal mb-3">{step.title}</h3>
                <p className="text-warm-grey text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}