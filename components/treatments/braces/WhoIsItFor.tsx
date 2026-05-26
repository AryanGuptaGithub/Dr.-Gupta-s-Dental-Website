'use client'
import { motion } from 'framer-motion'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const profiles = [
  {
    title: 'Children (7-12 years)',
    desc: 'Early orthodontic evaluation can catch issues before they become serious. Interceptive treatment guides jaw growth and creates space for permanent teeth.',
  },
  {
    title: 'Teenagers (13-19 years)',
    desc: 'The most common age for braces. All permanent teeth are in, making it the ideal time. We offer ceramic and aligner options that won\'t affect school photos.',
  },
  {
    title: 'Adults (20+ years)',
    desc: 'It\'s never too late for a straight smile. 40% of our orthodontic patients are adults. Clear aligners and ceramic braces make treatment discreet and professional.',
  },
  {
    title: 'Pre-Wedding Smile',
    desc: 'Getting married? Start your smile journey 6-12 months before the big day. We create custom timelines to have you photo-ready.',
  },
]

export const WhoIsItFor = () => {
  return (
    <section className="py-section max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">For Everyone</p>
        <h2 className="font-serif text-h2 text-teal">Orthodontics for All Ages</h2>
        <p className="text-warm-grey mt-4 max-w-xl mx-auto">
          Straight teeth aren't just for teenagers. We treat patients from age 7 to 70+.
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