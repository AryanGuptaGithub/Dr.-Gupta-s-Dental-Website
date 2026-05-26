'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ExclamationTriangleIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline'

export const EmergencyContact = () => {
  return (
    <section className="py-section">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-50 to-gold/5 rounded-3xl p-10 md:p-14 border-2 border-red-100 text-center"
        >
          <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6">
            <ExclamationTriangleIcon className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="font-serif text-h2 text-teal mb-4">Dental Emergency?</h2>
          <p className="text-warm-grey text-lg max-w-xl mx-auto mb-8">
            Severe tooth pain, broken tooth, swelling, or injury? Don't wait. 
            We provide after-hours emergency dental care for our patients.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="primary-gold" href="tel:+919XXXXXXXXX" size="lg">
              <PhoneIcon className="w-5 h-5 mr-2" />
              Emergency: +91 9XXX XXXX
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 text-warm-grey text-sm">
            <ClockIcon className="w-4 h-4" />
            <span>Available for emergencies outside regular hours — call us anytime</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}