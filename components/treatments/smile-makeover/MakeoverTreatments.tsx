'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const treatments = [
  {
    title: 'Dental Veneers',
    desc: 'Thin porcelain shells bonded to front teeth. Instantly corrects gaps, chips, discoloration, and minor misalignment.',
    icon: '✨',
    link: '#',
  },
  {
    title: 'Teeth Whitening',
    desc: 'Professional laser whitening that brightens your smile by 5-8 shades in a single session. Safe, quick, dramatic.',
    icon: '☀️',
    link: '/treatments/teeth-whitening',
  },
  {
    title: 'Dental Crowns',
    desc: 'Custom-made porcelain crowns that restore shape, size, and strength while blending seamlessly with natural teeth.',
    icon: '👑',
    link: '#',
  },
  {
    title: 'Composite Bonding',
    desc: 'Tooth-colored resin applied to repair chips, close gaps, and reshape teeth. Affordable and completed in one visit.',
    icon: '🔧',
    link: '#',
  },
  {
    title: 'Gum Contouring',
    desc: 'Laser gum reshaping to correct a "gummy smile" and create balanced proportions between teeth and gums.',
    icon: '🎯',
    link: '#',
  },
  {
    title: 'Smile Alignment',
    desc: 'Clear aligners or ceramic braces to straighten teeth — often the foundation of a stunning smile makeover.',
    icon: '📐',
    link: '/treatments/braces-aligners',
  },
]

export const MakeoverTreatments = () => {
  return (
    <section className="py-section bg-mint-fresh/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Our Toolkit</p>
          <h2 className="font-serif text-h2 text-teal">Treatments in a Smile Makeover</h2>
          <p className="text-warm-grey mt-4 max-w-xl mx-auto">
            Every smile is unique. Dr. Gupta combines these procedures to create your perfect result.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {treatments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-shadow group"
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="font-serif text-xl text-teal mb-3">{item.title}</h3>
              <p className="text-warm-grey text-sm leading-relaxed mb-6">{item.desc}</p>
              {item.link !== '#' && (
                <Link href={item.link} className="text-gold text-sm font-semibold hover:underline underline-offset-4">
                  Learn More →
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}