'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { PhoneIcon, ClockIcon } from '@heroicons/react/24/outline'

export const EmergencyBooking = () => {
  return (
    <section className="py-section">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-50 via-white to-mint-fresh/20 rounded-3xl p-10 md:p-14 border border-red-100"
        >
          <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6">
            <ClockIcon className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="font-serif text-h2 text-teal mb-4">Need Urgent Care?</h2>
          <p className="text-warm-grey text-lg max-w-xl mx-auto mb-8">
            If you're in pain or have a dental emergency, don't use the form — 
            call us directly for immediate assistance. We'll fit you in today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="primary-gold"
              href="tel:+919XXXXXXXXX"
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Emergency Line: +91 9XXX XXXX
            </Button>
            <Button
              variant="outline-teal"
              href="https://wa.me/919XXXXXXXXX?text=EMERGENCY%3A%20I%20need%20urgent%20dental%20care"
              external
              size="lg"
            >
              Emergency WhatsApp
            </Button>
          </div>
          <p className="text-warm-grey text-sm mt-6">
            Available for emergencies even outside regular hours. Call anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}