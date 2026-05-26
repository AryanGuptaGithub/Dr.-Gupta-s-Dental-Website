'use client'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const profiles = [
  {
    title: 'The Professional',
    desc: 'You want a confident smile for presentations, meetings, and client interactions. A polished smile elevates your professional presence.',
  },
  {
    title: 'The Bride or Groom',
    desc: 'Your wedding day deserves a radiant smile. We create custom pre-wedding smile plans with whitening and alignment.',
  },
  {
    title: 'The Self-Care Enthusiast',
    desc: 'You\'ve always wanted to fix that one thing about your smile. Now is the time to invest in yourself.',
  },
  {
    title: 'The Social Butterfly',
    desc: 'You love being in photos and meeting new people. A smile makeover gives you the confidence to shine in every social setting.',
  },
]

export const WhoIsItFor = () => {
  return (
    <section className="py-section max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Is This You?</p>
        <h2 className="font-serif text-h2 text-teal">Who Is a Smile Makeover For?</h2>
        <p className="text-warm-grey mt-4 max-w-xl mx-auto">
          There's no "right" candidate — anyone who wants to love their smile is welcome. 
          Here are some people we've helped.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {profiles.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-card border border-mint-fresh/20 flex gap-4"
          >
            <CheckCircleIcon className="w-6 h-6 text-gold shrink-0 mt-1" />
            <div>
              <h3 className="font-serif text-xl text-teal mb-2">{item.title}</h3>
              <p className="text-warm-grey text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}