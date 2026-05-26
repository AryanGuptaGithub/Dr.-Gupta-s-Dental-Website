'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { MapPinIcon } from '@heroicons/react/24/outline'

export const ContactMap = () => {
  return (
    <section className="py-section bg-mint-fresh/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Find Us</p>
          <h2 className="font-serif text-h2 text-teal">Our Location</h2>
          <p className="text-warm-grey mt-4">
            Conveniently located in Andheri West with easy access from all parts of Mumbai
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl overflow-hidden shadow-card"
        >
          {/* Google Maps Embed */}
          <div className="w-full h-[400px] md:h-[500px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.XXXXXX!2d72.XXXXXX!3d19.XXXXXX!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSmiles%20Forever%20Dental%20Clinic!5e0!3m2!1sen!2sin!4vXXXXXXXXXX"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Smiles Forever Dental Clinic Location"
              className="absolute inset-0"
            />
          </div>

          {/* Address Overlay Card */}
          <div className="p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-mint-fresh/50 rounded-2xl shrink-0">
                <MapPinIcon className="w-6 h-6 text-teal" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-teal mb-2">Smiles Forever Dental & Implant Centre</h3>
                <p className="text-warm-grey leading-relaxed">
                  123, Smile Street, Near Andheri Sports Complex,<br />
                  Andheri West, Mumbai — 400058
                </p>
                <div className="mt-4">
                  <Button
                    variant="outline-teal"
                    href="https://maps.google.com/?q=Smiles+Forever+Dental+Clinic+Andheri+West+Mumbai"
                    external
                    size="sm"
                  >
                    Get Directions on Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}