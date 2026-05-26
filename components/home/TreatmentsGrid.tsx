'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  DevicePhoneMobileIcon,  // placeholder icons, choose appropriate ones
  CubeTransparentIcon,
  FaceSmileIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'

const treatments = [
  { icon: CubeTransparentIcon, title: 'Dental Implants', desc: 'Permanent teeth in 3 days with German precision.', href: '/treatments/dental-implants' },
  { icon: WrenchScrewdriverIcon, title: 'Root Canal', desc: 'Painless single‑visit RCT using modern microscopes.', href: '/treatments/root-canal' },
  { icon: FaceSmileIcon, title: 'Smile Makeover', desc: 'Digital Smile Design – your dream smile planned before treatment.', href: '/treatments/smile-makeover' },
  { icon: DevicePhoneMobileIcon, title: 'Braces & Aligners', desc: 'Invisible aligners and ceramic braces for all ages.', href: '/treatments/braces-aligners' },
]

export const TreatmentsGrid = () => (
  <section className="py-section max-w-7xl mx-auto px-6">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-serif text-h2 text-teal text-center mb-16"
    >
      Signature Treatments
    </motion.h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {treatments.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -8 }}
          className="bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col items-start"
        >
          <div className="p-4 bg-mint-fresh/50 rounded-2xl mb-6">
            <t.icon className="w-7 h-7 text-teal" />
          </div>
          <h3 className="font-serif text-2xl text-teal mb-3">{t.title}</h3>
          <p className="text-warm-grey text-sm leading-relaxed mb-6 flex-grow">{t.desc}</p>
          <Link href={t.href} className="text-gold text-sm font-semibold hover:underline underline-offset-4">
            Learn More →
          </Link>
        </motion.div>
      ))}
    </div>
    <div className="text-center mt-12">
      <Button variant="outline-teal" href="/treatments">View All Treatments</Button>
    </div>
  </section>
)