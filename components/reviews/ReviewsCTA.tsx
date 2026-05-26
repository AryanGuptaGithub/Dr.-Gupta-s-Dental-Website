'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { StarIcon } from '@heroicons/react/24/solid'

export const ReviewsCTA = () => {
  return (
    <section className="py-section bg-gradient-to-r from-teal to-teal-dark">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} className="w-6 h-6 text-gold" />
            ))}
          </div>
          <h2 className="font-serif text-h3 text-white mb-4">
            Ready to Join Our <span className="text-gold">Happy Patients?</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            5000+ patients have trusted us with their smiles. Experience the care 
            that everyone's talking about.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary-gold" href="/book-appointment" size="lg">
              Book Your Appointment
            </Button>
            <Button
              variant="outline-white"
              href="tel:+919XXXXXXXXX"
              size="lg"
            >
              Call Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}