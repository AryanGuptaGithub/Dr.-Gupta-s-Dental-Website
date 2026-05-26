'use client'
import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'
import { ChatBubbleLeftRightIcon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline'

const stats = [
  { icon: StarIcon, value: '4.9', label: 'Google Rating', sublabel: '500+ reviews', color: 'text-gold' },
  { icon: UserGroupIcon, value: '5000+', label: 'Happy Patients', sublabel: 'And counting...', color: 'text-teal' },
  { icon: TrophyIcon, value: '98%', label: 'Satisfaction Rate', sublabel: 'Would recommend us', color: 'text-teal' },
]

export const ReviewsHero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/5 via-white to-mint-fresh/20" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-dark text-sm font-medium px-4 py-2 rounded-full mb-6">
            <StarIcon className="w-4 h-4" />
            Mumbai's Highest Rated Dental Clinic
          </div>
          <h1 className="font-serif text-h1 text-teal mb-6">
            What Our <span className="text-gold">Patients Say</span>
          </h1>
          <p className="text-warm-grey text-lg max-w-2xl mx-auto mb-12">
            Don't just take our word for it. Hear from 5000+ patients who've experienced 
            gentle, world-class dental care at Smiles Forever.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto bg-mint-fresh/50 rounded-2xl flex items-center justify-center mb-4">
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <p className="font-serif text-3xl text-teal">{stat.value}</p>
              <p className="text-charcoal font-medium text-sm mt-1">{stat.label}</p>
              <p className="text-warm-grey text-xs">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}