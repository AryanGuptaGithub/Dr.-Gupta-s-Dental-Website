'use client'
import { motion } from 'framer-motion'
import {
  HeartIcon,
  FaceSmileIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

const benefits = [
  {
    icon: HeartIcon,
    title: 'Better Oral Health',
    desc: 'Straight teeth are easier to clean, reducing the risk of cavities, gum disease, and bad breath.',
  },
  {
    icon: FaceSmileIcon,
    title: 'Boosted Confidence',
    desc: 'A straight smile makes you feel more confident in social situations, photos, and professional settings.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Prevents Future Problems',
    desc: 'Correct alignment prevents abnormal wear, jaw pain, and TMJ disorders that worsen with time.',
  },
  {
    icon: SparklesIcon,
    title: 'Better Digestion',
    desc: 'Properly aligned teeth chew food more effectively, aiding digestion and overall health.',
  },
]

export const WhyStraightTeeth = () => {
  return (
    <section className="py-section max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Why It Matters</p>
        <h2 className="font-serif text-h2 text-teal">More Than Just a Pretty Smile</h2>
        <p className="text-warm-grey mt-4 max-w-xl mx-auto">
          Straight teeth aren't just about looks. They're the foundation of long-term oral health.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {benefits.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto bg-mint-fresh/50 rounded-2xl flex items-center justify-center mb-5">
              <item.icon className="w-8 h-8 text-teal" />
            </div>
            <h3 className="font-serif text-lg text-teal mb-3">{item.title}</h3>
            <p className="text-warm-grey text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}