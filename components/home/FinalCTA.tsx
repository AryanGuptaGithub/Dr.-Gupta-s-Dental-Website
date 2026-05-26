'use client'
import { AppointmentForm } from '@/components/common/AppointmentForm'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'

export const FinalCTA = () => (
  <section className="bg-ivory py-section">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-h2 text-teal mb-6">Ready to Love Your Smile?</h2>
          <p className="text-warm-grey text-lg leading-relaxed mb-8">
            Fill in your details and our team will call you back within 30 minutes to schedule your visit — no waiting, no hassle.
          </p>
          <div className="flex items-center gap-4 text-sm text-teal">
            <span className="w-1 h-1 bg-gold rounded-full" /> Same‑day appointments available
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <AppointmentForm />
          <div className="text-center mt-6">
            <Button
              variant="outline-teal"
              external
              href="https://wa.me/919XXXXXXXXX?text=Hi%20team%2C%20I%27d%20like%20to%20schedule%20an%20appointment"
              className="w-full"
            >
              Or, Chat on WhatsApp Instantly
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)