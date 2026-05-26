'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ChatBubbleLeftRightIcon, PhoneIcon } from '@heroicons/react/24/outline'

export const FAQCTA = () => {
  return (
    <section className="py-section">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-teal to-teal-dark rounded-3xl p-12 md:p-16 shadow-card-hover"
        >
          <ChatBubbleLeftRightIcon className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-h3 text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            We're happy to answer any questions you have. Call us, send a WhatsApp message, 
            or book a free consultation — we're here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary-gold" href="/book-appointment" size="lg">
              Book Free Consultation
            </Button>
            <Button
              variant="outline-white"
              href="https://wa.me/919XXXXXXXXX?text=Hi%2C%20I%20have%20a%20question%20about..."
              external
              size="lg"
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
              Ask on WhatsApp
            </Button>
            <Button variant="outline-white" href="tel:+919XXXXXXXXX" size="lg">
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}