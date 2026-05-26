'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { AppointmentForm } from '@/components/common/AppointmentForm'

export const ImplantCTA = () => {
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
              Ready to Reclaim <br />
              <span className="text-gold">Your Smile?</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Book a free implant consultation today. Get a 3D scan, personalized treatment plan, 
              and transparent cost estimate — all with zero obligation.
            </p>
            <div className="flex items-center gap-4 text-sm text-white/60">
              <span className="w-2 h-2 bg-gold rounded-full" /> Free 3D CBCT Scan
            </div>
            <div className="flex items-center gap-4 text-sm text-white/60 mt-2">
              <span className="w-2 h-2 bg-gold rounded-full" /> Same-day appointment available
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-card-hover">
              <h3 className="font-serif text-2xl text-teal text-center mb-6">Check Your Candidacy</h3>
              <AppointmentForm />
              <div className="text-center mt-4">
                <Button
                  variant="outline-teal"
                  href="https://wa.me/919XXXXXXXXX?text=Hi%2C%20I%20want%20to%20know%20more%20about%20dental%20implants"
                  external
                  className="w-full"
                >
                  Or, Chat on WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}