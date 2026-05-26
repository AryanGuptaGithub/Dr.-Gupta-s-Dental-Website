'use client'
import { motion } from 'framer-motion'
import {
  TruckIcon,
  BuildingOffice2Icon,
  MapPinIcon,
  HomeModernIcon,
} from '@heroicons/react/24/outline'

const directions = [
  {
    icon: BuildingOffice2Icon,
    title: 'Landmark',
    details: 'We are located right next to the Andheri Sports Complex. Look for the blue building with "Smiles Forever" signage on the ground floor.',
  },
  {
    icon: TruckIcon,
    title: 'By Train',
    details: 'Get down at Andheri Station (Western Line). Take an auto-rickshaw from the west side — it\'s a 10-minute ride to the clinic.',
  },
  {
    icon: MapPinIcon,
    title: 'By Bus',
    details: 'BEST Bus routes 224, 231, and 256 stop at Andheri Sports Complex. The clinic is a 2-minute walk from the bus stop.',
  },
  {
    icon: HomeModernIcon,
    title: 'By Car / Parking',
    details: 'Free parking is available for patients right outside the clinic. Additional paid parking is available at the Sports Complex lot (2 min walk).',
  },
]

export const HowToReach = () => {
  return (
    <section className="py-section max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Getting Here</p>
        <h2 className="font-serif text-h2 text-teal">How to Reach Us</h2>
        <p className="text-warm-grey mt-4 max-w-xl mx-auto">
          Easy access from all parts of Mumbai. Here's how to find us.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {directions.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-card flex gap-5"
          >
            <div className="p-3 bg-mint-fresh/50 rounded-2xl h-fit shrink-0">
              <item.icon className="w-6 h-6 text-teal" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-teal mb-2">{item.title}</h3>
              <p className="text-warm-grey text-sm leading-relaxed">{item.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}