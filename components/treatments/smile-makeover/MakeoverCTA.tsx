'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { AppointmentForm } from '@/components/common/AppointmentForm'

export const MakeoverCTA = () => {
  return (
    <section className="py-section bg-gradient-to-r from-teal to-teal-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="font-serif text-h2 mb-4">
              Ready to Love<br />
              <span className="text-gold">Your Smile?</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Book a free smile design consultation. See your dream smile digitally 
              before any treatment — zero obligation, 100% excitement.
            </p>
            <div className="space-y-3 text-white/60 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-gold rounded-full" /> Free Digital Smile Design
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-gold rounded-full" /> Personalized treatment plan
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-gold rounded-full" /> Transparent cost estimate
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-card-hover">
              <h3 className="font-serif text-2xl text-teal text-center mb-6">Design Your Smile</h3>
              <AppointmentForm />
              <div className="text-center mt-4">
                <Button
                  variant="outline-teal"
                  href="https://wa.me/919XXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20smile%20makeover"
                  external
                  className="w-full"
                >
                  Or, Send Your Photo on WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}