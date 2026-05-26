'use client'
import { motion } from 'framer-motion'
import {
  CpuChipIcon,
  FaceSmileIcon,
  ShieldCheckIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'

const reasons = [
  {
    icon: CpuChipIcon,
    title: 'German Implant Systems',
    desc: 'We use only premium implant brands with decades of clinical research and lifetime warranties.',
  },
  {
    icon: FaceSmileIcon,
    title: 'Painless, Computer-Guided Surgery',
    desc: '3D CBCT scanning and surgical guides ensure precise placement with minimal discomfort and faster healing.',
  },
  {
    icon: ShieldCheckIcon,
    title: '98% Success Rate',
    desc: 'Over 5000 implants placed with exceptional long-term results. We stand behind our work.',
  },
  {
    icon: ClockIcon,
    title: 'Teeth in 3 Days',
    desc: 'With immediate loading protocols, you can walk out with fixed teeth the same week — no months of waiting.',
  },
]

export const WhyChooseImplants = () => {
  return (
    <section className="py-section bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Why Smiles Forever</p>
          <h2 className="font-serif text-h2 text-teal">Why Choose Us for Dental Implants?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-ivory rounded-3xl p-8 flex gap-6"
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