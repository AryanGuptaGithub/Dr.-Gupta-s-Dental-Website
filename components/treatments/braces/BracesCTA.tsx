'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { AppointmentForm } from '@/components/common/AppointmentForm'

export const BracesCTA = () => {
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
              Ready for Your<br />
              <span className="text-gold">Straightest Smile?</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Book a free smile assessment today. Get a 3D scan, see your predicted result, 
              and receive a personalized treatment plan — all with zero obligation.
            </p>
            <div className="space-y-3 text-white/60 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-gold rounded-full" /> Free 3D scan & smile simulation
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-gold rounded-full" /> Transparent cost estimate
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-gold rounded-full" /> EMI options available
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-card-hover">
              <h3 className="font-serif text-2xl text-teal text-center mb-6">Start Your Journey</h3>
              <AppointmentForm />
              <div className="text-center mt-4">
                <Button
                  variant="outline-teal"
                  href="https://wa.me/919XXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20braces%20and%20aligners"
                  external
                  className="w-full"
                >
                  Ask on WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}