'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { SparklesIcon, HomeIcon, GiftIcon } from '@heroicons/react/24/outline'

const packages = [
  {
    icon: SparklesIcon,
    title: 'Laser Whitening',
    desc: 'Single in-clinic session with immediate results.',
    highlight: '60-min session',
    tag: '',
  },
  {
    icon: HomeIcon,
    title: 'Take-Home Kit',
    desc: 'Custom trays + professional gel for 2 weeks.',
    highlight: 'Whiten at home',
    tag: '',
  },
  {
    icon: GiftIcon,
    title: 'Combo Package',
    desc: 'Laser session + take-home kit for maintenance.',
    highlight: 'Best results',
    tag: 'MOST POPULAR',
  },
]

export const WhiteningCost = () => {
  return (
    <section className="py-section max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-card p-10 md:p-14 border border-mint-fresh/30"
      >
        <div className="text-center mb-10">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Packages</p>
          <h2 className="font-serif text-h2 text-teal">Affordable Whitening Packages</h2>
          <p className="text-warm-grey mt-4 max-w-xl mx-auto">
            Choose the option that fits your timeline and budget. All packages include a 
            free dental check-up and shade assessment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((item, i) => (
            <div
              key={i}
              className={`bg-ivory rounded-3xl p-8 text-center relative ${
                item.tag ? 'ring-2 ring-gold' : ''
              }`}
            >
              {item.tag && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-bold px-4 py-1 rounded-full">
                  {item.tag}
                </span>
              )}
              <div className="w-14 h-14 mx-auto bg-mint-fresh/50 rounded-2xl flex items-center justify-center mb-4 mt-2">
                <item.icon className="w-7 h-7 text-teal" />
              </div>
              <h3 className="font-serif text-xl text-teal mb-2">{item.title}</h3>
              <p className="text-warm-grey text-sm mb-3">{item.desc}</p>
              <span className="inline-block bg-gold/10 text-gold-dark text-xs font-medium px-3 py-1 rounded-full mb-4">
                {item.highlight}
              </span>
              <p className="text-xs text-warm-grey">Enquire for pricing</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="primary-gold" href="/book-appointment">
            Get Your Personalized Whitening Plan
          </Button>
        </div>
      </motion.div>
    </section>
  )
}