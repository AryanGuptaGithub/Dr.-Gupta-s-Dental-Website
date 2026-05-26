'use client'
import { motion } from 'framer-motion'
import {
  BoltIcon,
  HomeIcon,
  GiftIcon,
} from '@heroicons/react/24/outline'

const options = [
  {
    icon: BoltIcon,
    title: 'Laser Whitening (In-Clinic)',
    desc: 'Our most popular option. A single 60-minute session using advanced laser activation. Walk out with visibly whiter teeth immediately.',
    highlight: 'Results in 1 Visit',
    time: '60 minutes',
  },
  {
    icon: HomeIcon,
    title: 'Take-Home Whitening Kit',
    desc: 'Custom-fitted trays with professional-grade gel. Whiten at your convenience over 1-2 weeks. More gradual but equally effective.',
    highlight: 'Whiten on Your Schedule',
    time: '1-2 weeks',
  },
  {
    icon: GiftIcon,
    title: 'Combo Package',
    desc: 'Best value: In-clinic laser session to kickstart results + take-home kit for maintenance. Keep your smile brilliant year-round.',
    highlight: 'Most Popular',
    time: 'Best Results',
  },
]

export const WhiteningOptions = () => {
  return (
    <section className="py-section bg-mint-fresh/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Our Options</p>
          <h2 className="font-serif text-h2 text-teal">Choose Your Whitening Experience</h2>
          <p className="text-warm-grey mt-4 max-w-xl mx-auto">
            Whether you need instant results for an event or prefer gradual whitening at home, 
            we have the perfect solution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {options.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`bg-white rounded-3xl p-8 shadow-card text-center relative ${
                i === 2 ? 'ring-2 ring-gold' : ''
              }`}
            >
              {i === 2 && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-bold px-4 py-1 rounded-full">
                  BEST VALUE
                </span>
              )}
              <div className="w-16 h-16 mx-auto bg-mint-fresh/50 rounded-2xl flex items-center justify-center mb-5 mt-2">
                <item.icon className="w-8 h-8 text-teal" />
              </div>
              <h3 className="font-serif text-xl text-teal mb-2">{item.title}</h3>
              <span className="inline-block bg-gold/10 text-gold-dark text-xs font-medium px-3 py-1 rounded-full mb-4">
                {item.highlight}
              </span>
              <p className="text-warm-grey text-sm leading-relaxed mb-4">{item.desc}</p>
              <p className="text-teal font-medium text-sm">⏱ {item.time}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}