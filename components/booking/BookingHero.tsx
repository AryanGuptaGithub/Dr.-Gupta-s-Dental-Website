'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { AppointmentForm } from '@/components/common/AppointmentForm'
import {
  ShieldCheckIcon,
  ClockIcon,
  SparklesIcon,
  StarIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon } from '@heroicons/react/24/solid'

const trustBadges = [
  { icon: StarIcon, text: '4.9 ★ Google Rating' },
  { icon: ShieldCheckIcon, text: 'ISO Certified Clinic' },
  { icon: ClockIcon, text: 'Same-Day Appointments' },
  { icon: SparklesIcon, text: '5000+ Smiles Transformed' },
]

export const BookingHero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/5 via-white to-mint-fresh/20" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left — Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-card-hover p-8 md:p-10 border border-mint-fresh/20">
              <h1 className="font-serif text-h2 md:text-h1 text-teal mb-2">
                Book Your <span className="text-gold">Appointment</span>
              </h1>
              <p className="text-warm-grey mb-8">
                Fill in your details below. Our team will call you back within 30 minutes 
                to confirm your visit.
              </p>

              <AppointmentForm />

              <div className="mt-6 pt-6 border-t border-mint-fresh/20">
                <p className="text-center text-warm-grey text-sm mb-4">Prefer instant booking?</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button
                    variant="primary-gold"
                    href="https://wa.me/919XXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
                    external
                    className="flex-1"
                  >
                    Book on WhatsApp
                  </Button>
                  <Button
                    variant="outline-teal"
                    href="tel:+919XXXXXXXXX"
                    className="flex-1"
                  >
                    <PhoneIcon className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Trust Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            {/* Trust Badges */}
            <div className="bg-white rounded-3xl shadow-card p-8">
              <h3 className="font-serif text-xl text-teal mb-6">Why Book With Us</h3>
              <div className="space-y-4">
                {trustBadges.map((badge, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-2 bg-mint-fresh/50 rounded-full">
                      <badge.icon className="w-5 h-5 text-teal" />
                    </div>
                    <span className="text-charcoal text-sm font-medium">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-gradient-to-br from-teal to-teal-dark rounded-3xl p-8 text-white">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} className="w-5 h-5 text-gold" />
                ))}
              </div>
              <p className="text-white/80 text-sm leading-relaxed italic mb-4">
                "Called in the morning for a toothache. Got an appointment the same day. 
                Dr. Gupta fixed my root canal painlessly. Best dental experience ever."
              </p>
              <p className="text-white font-medium text-sm">— Rahul D.</p>
              <p className="text-white/50 text-xs mt-1">Verified Google Review</p>
            </div>

            {/* Emergency Note */}
            <div className="bg-red-50 rounded-3xl p-6 border border-red-100">
              <p className="text-red-600 font-medium text-sm mb-1">🚨 In Pain Right Now?</p>
              <p className="text-red-500 text-xs leading-relaxed mb-3">
                Don't wait. Call us directly for an emergency appointment — we'll fit you in today.
              </p>
              <Button
                variant="primary-gold"
                href="tel:+919XXXXXXXXX"
                size="sm"
                className="w-full bg-red-500 hover:bg-red-600 text-white"
              >
                <PhoneIcon className="w-4 h-4 mr-2" />
                Emergency Call
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}