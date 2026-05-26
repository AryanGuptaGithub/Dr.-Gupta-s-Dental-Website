'use client'
import { motion } from 'framer-motion'
import {
  HeartIcon,
  SparklesIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline'

const principles = [
  {
    icon: HeartIcon,
    title: 'Gentle, Pain‑Free Care',
    desc: 'Every procedure begins with your comfort. We use advanced anesthesia techniques and offer sedation for anxious patients — ensuring a stress‑free experience.',
  },
  {
    icon: SparklesIcon,
    title: 'Precision with German Technology',
    desc: 'From 3D CBCT scanning to computer‑guided implant placement, we invest in the best technology so you get predictable, long‑lasting results.',
  },
  {
    icon: EyeIcon,
    title: 'Transparent Communication',
    desc: 'No hidden costs, no surprise procedures. We explain every treatment option clearly and provide detailed estimates before we begin.',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Patient‑First Philosophy',
    desc: 'You are never just a set of teeth. We listen to your concerns, respect your time, and design treatment plans that fit your life.',
  },
]

export const Philosophy = () => {
  return (
    <section className="py-section bg-mint-fresh/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Our Philosophy</p>
          <h2 className="font-serif text-h2 text-teal">Care That Goes Beyond Teeth</h2>
          <p className="text-warm-grey mt-4 max-w-2xl mx-auto">
            At Smiles Forever, dentistry is not just about procedures — it's about people. 
            Here's what drives every interaction in our clinic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-card flex gap-6"
            >
              <div className="p-4 bg-mint-fresh/50 rounded-2xl h-fit shrink-0">
                <item.icon className="w-7 h-7 text-teal" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-teal mb-3">{item.title}</h3>
                <p className="text-warm-grey text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}