'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { PhoneIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'

export const AboutCTA = () => {
  return (
    <section className="py-section max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-teal to-teal-dark rounded-3xl p-12 md:p-16 text-center shadow-card-hover"
      >
        <h2 className="font-serif text-h3 text-white mb-4">
          Ready to Experience Dentistry Differently?
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
          Join 5000+ patients who've discovered gentle, world‑class dental care in Mumbai. 
          Dr. Gupta and the team are ready to welcome you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary-gold" href="/book-appointment" size="lg">
            <CalendarDaysIcon className="w-5 h-5 mr-2" />
            Book Your Visit
          </Button>
          <Button
            variant="outline-white"
            href="https://wa.me/919XXXXXXXXX?text=Hi%20team%2C%20I%27d%20like%20to%20know%20more%20about%20your%20clinic"
            external
            size="lg"
          >
            <PhoneIcon className="w-5 h-5 mr-2" />
            WhatsApp Us
          </Button>
        </div>
      </motion.div>
    </section>
  )
}