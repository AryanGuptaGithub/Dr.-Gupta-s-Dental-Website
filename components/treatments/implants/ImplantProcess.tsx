'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Free Consultation & 3D Scan',
    desc: 'We assess your oral health, take a painless 3D CBCT scan, and create a personalized treatment plan.',
    time: 'Day 1',
  },
  {
    number: '02',
    title: 'Implant Placement',
    desc: 'Using computer-guided surgery, the titanium implant is placed precisely. Most patients feel nothing during the procedure.',
    time: 'Day 2',
  },
  {
    number: '03',
    title: 'Your New Smile',
    desc: 'Your custom crown is attached. You walk out with a complete, natural-looking tooth that functions perfectly.',
    time: 'Day 3',
  },
]

export const ImplantProcess = () => {
  return (
    <section className="py-section max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">The Journey</p>
        <h2 className="font-serif text-h2 text-teal">Your Implant Timeline — Just 3 Days</h2>
      </div>

      <div className="relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-mint-fresh" />

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative text-center"
            >
              {/* Number circle */}
              <div className="w-24 h-24 mx-auto bg-white border-2 border-mint-fresh rounded-full flex items-center justify-center mb-6 relative z-10 shadow-card">
                <span className="font-serif text-3xl text-teal">{step.number}</span>
              </div>
              <span className="inline-block bg-gold/10 text-gold-dark text-xs font-medium px-3 py-1 rounded-full mb-4">
                {step.time}
              </span>
              <h3 className="font-serif text-xl text-teal mb-3">{step.title}</h3>
              <p className="text-warm-grey text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}