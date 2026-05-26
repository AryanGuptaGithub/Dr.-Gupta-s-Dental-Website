'use client'
import { motion } from 'framer-motion'
import {
  EyeIcon,
  SparklesIcon,
  HeartIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline'

const tech = [
  {
    icon: EyeIcon,
    title: 'Dental Microscope',
    desc: 'We use high-magnification microscopes to see every canal clearly — no guesswork, minimal tissue removal, faster healing.',
  },
  {
    icon: SparklesIcon,
    title: 'Rotary Endodontics',
    desc: 'Advanced motorized files clean canals in minutes — not hours. Reduces procedure time by 60% compared to manual methods.',
  },
  {
    icon: BeakerIcon,
    title: 'Advanced Anesthesia',
    desc: "Computer-controlled delivery ensures the anesthetic reaches exactly where it's needed. You feel nothing.",
  },
  {
    icon: HeartIcon,
    title: 'Sedation Options',
    desc: 'For anxious patients, we offer conscious sedation. You remain awake but completely relaxed throughout.',
  },
]

export const PainlessRCT = () => {
  return (
    <section className="py-section bg-mint-fresh/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Our Technology</p>
          <h2 className="font-serif text-h2 text-teal">How We Make RCT Painless</h2>
          <p className="text-warm-grey mt-4 max-w-xl mx-auto">
            The old reputation of root canals is outdated. Here's the modern technology 
            that makes our RCTs comfortable and precise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tech.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-card flex gap-6"
            >
              <div className="p-4 bg-mint-fresh/50 rounded-2xl h-fit shrink-0">
                <item.icon className="w-7 h-7 text-teal" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-teal mb-2">{item.title}</h3>
                <p className="text-warm-grey text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}