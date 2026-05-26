'use client'
import { motion } from 'framer-motion'
import {
  AcademicCapIcon,
  ShieldCheckIcon,
  StarIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'

const credentials = [
  {
    icon: AcademicCapIcon,
    title: 'MDS – Prosthodontics',
    desc: 'Government Dental College, Mumbai',
    year: '2003',
  },
  {
    icon: GlobeAltIcon,
    title: 'Fellowship in Implantology',
    desc: 'University of Frankfurt, Germany',
    year: '2008',
  },
  {
    icon: ShieldCheckIcon,
    title: 'ISO Certified Practice',
    desc: 'Sterilization & Safety Protocols',
    year: 'Since 2010',
  },
  {
    icon: StarIcon,
    title: '5000+ Successful Implants',
    desc: '98% Success Rate',
    year: 'And counting',
  },
]

const memberships = [
  'Indian Dental Association (IDA)',
  'Indian Society of Oral Implantologists (ISOI)',
  'International Congress of Oral Implantologists (ICOI)',
  'American Academy of Cosmetic Dentistry (AACD)',
]

export const Credentials = () => {
  return (
    <section className="py-section bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Trust & Expertise</p>
          <h2 className="font-serif text-h2 text-teal">Credentials That Speak</h2>
        </div>

        {/* Credential Cards */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {credentials.map((item, i) => (
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
              <h3 className="font-serif text-xl text-teal mb-2">{item.title}</h3>
              <p className="text-warm-grey text-sm">{item.desc}</p>
              <span className="inline-block mt-3 px-3 py-1 bg-gold/10 text-gold-dark text-xs font-medium rounded-full">
                {item.year}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Memberships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-ivory rounded-3xl p-10 md:p-14"
        >
          <h3 className="font-serif text-2xl text-teal text-center mb-8">Professional Memberships</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {memberships.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full shrink-0" />
                <span className="text-charcoal/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}