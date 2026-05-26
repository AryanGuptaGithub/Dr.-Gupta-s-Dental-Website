'use client'
import { motion } from 'framer-motion'
import {
  EyeSlashIcon,
  FaceSmileIcon,
  ClockIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

const advantages = [
  {
    icon: EyeSlashIcon,
    title: 'Nearly Invisible',
    desc: 'Made from transparent medical-grade plastic. People won\'t know you\'re straightening your teeth unless you tell them.',
  },
  {
    icon: FaceSmileIcon,
    title: 'Comfortable & Removable',
    desc: 'No metal wires or brackets. Remove them to eat, brush, and floss — live your life normally during treatment.',
  },
  {
    icon: ClockIcon,
    title: 'Fewer Clinic Visits',
    desc: 'Receive multiple sets of aligners at once. Change them at home every 2 weeks. Visit us only every 6-8 weeks.',
  },
  {
    icon: CheckCircleIcon,
    title: 'Predictable Results',
    desc: '3D treatment planning shows your teeth movement at every stage. You know exactly what to expect.',
  },
]

export const ClearAligners = () => {
  return (
    <section className="py-section bg-mint-fresh/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Clear Aligners</p>
          <h2 className="font-serif text-h2 text-teal">The Invisible Way to Straighten Teeth</h2>
          <p className="text-warm-grey mt-4 max-w-2xl mx-auto">
            Clear aligners have revolutionized orthodontics. Here's why they're the #1 choice 
            for adults and image-conscious teens.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {advantages.map((item, i) => (
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