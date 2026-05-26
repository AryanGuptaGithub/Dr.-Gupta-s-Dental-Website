'use client'
import { StarIcon, ShieldCheckIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const items = [
  { icon: StarIcon, label: '4.9 ★ Google Rating', desc: 'Trusted by 500+ families' },
  { icon: SparklesIcon, label: '20+ Years Experience', desc: 'MDS, Implantologist' },
  { icon: UserGroupIcon, label: '5000+ Smiles Transformed', desc: 'And counting...' },
  { icon: ShieldCheckIcon, label: 'ISO Certified Sterilization', desc: 'Safety first, always' },
]

export const TrustBar = () => (
  <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-mint-fresh/20 shadow-sm">
    <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-3"
        >
          <div className="p-2.5 bg-mint-fresh/50 rounded-full shrink-0">
            <item.icon className="w-5 h-5 text-teal" />
          </div>
          <div>
            <p className="text-sm font-semibold text-charcoal">{item.label}</p>
            <p className="text-xs text-warm-grey">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
)