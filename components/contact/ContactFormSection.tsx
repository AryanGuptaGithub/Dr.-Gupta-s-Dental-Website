'use client'
import { motion } from 'framer-motion'
import { AppointmentForm } from '@/components/common/AppointmentForm'
import { Button } from '@/components/ui/Button'

export const ContactFormSection = () => {
  return (
    <section className="py-section max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Send a Message</p>
          <h2 className="font-serif text-h2 text-teal mb-6">We'll Get Back to You Within 30 Minutes</h2>
          <p className="text-warm-grey leading-relaxed mb-8">
            Fill in your details and Dr. Gupta's team will call you back promptly. 
            Whether it's a question, appointment request, or emergency — we're ready to help.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-mint-fresh/50 rounded-full flex items-center justify-center shrink-0">
                <span className="text-teal font-bold">1</span>
              </div>
              <div>
                <p className="font-medium text-charcoal">Fill the form</p>
                <p className="text-warm-grey text-sm">Share your details and concern</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-mint-fresh/50 rounded-full flex items-center justify-center shrink-0">
                <span className="text-teal font-bold">2</span>
              </div>
              <div>
                <p className="font-medium text-charcoal">We call you back</p>
                <p className="text-warm-grey text-sm">Within 30 minutes during working hours</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-mint-fresh/50 rounded-full flex items-center justify-center shrink-0">
                <span className="text-teal font-bold">3</span>
              </div>
              <div>
                <p className="font-medium text-charcoal">Visit the clinic</p>
                <p className="text-warm-grey text-sm">Same-day appointments often available</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-mint-fresh/20 rounded-2xl">
            <p className="text-teal font-medium text-sm">💡 Prefer instant chat?</p>
            <Button
              variant="primary-gold"
              href="https://wa.me/919XXXXXXXXX?text=Hello%20team%2C%20I%20have%20a%20question"
              external
              className="mt-3 w-full"
            >
              WhatsApp Us Now
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl shadow-card p-8 sticky top-28">
            <h3 className="font-serif text-2xl text-teal text-center mb-6">Get in Touch</h3>
            <AppointmentForm />
          </div>
        </motion.div>
      </div>
    </section>
  )
}