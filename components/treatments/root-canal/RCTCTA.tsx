'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { PhoneIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'

export const RCTCTA = () => {
  return (
    <section className="py-section bg-gradient-to-r from-teal to-teal-dark">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-h2 text-white mb-4">
            Tooth Pain? <span className="text-gold">Don't Wait.</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            The longer you delay, the worse it gets. Get same-day relief with our 
            emergency root canal service. Walk in with pain, walk out smiling.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary-gold" href="/book-appointment" size="lg">
              <CalendarDaysIcon className="w-5 h-5 mr-2" />
              Book Emergency Visit
            </Button>
            <Button variant="outline-white" href="tel:+919XXXXXXXXX" size="lg">
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call for Immediate Relief
            </Button>
          </div>
          <p className="text-white/40 text-sm mt-6">Same-day appointments available — we're here when you need us.</p>
        </motion.div>
      </div>
    </section>
  )
}