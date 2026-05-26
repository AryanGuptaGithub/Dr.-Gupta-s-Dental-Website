'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { StarIcon } from '@heroicons/react/24/solid'

export const LeaveReview = () => {
  return (
    <section className="py-section max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-card p-10 md:p-14 text-center border border-mint-fresh/30"
      >
        <div className="flex justify-center gap-1 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon key={star} className="w-8 h-8 text-gold" />
          ))}
        </div>
        <h2 className="font-serif text-h2 text-teal mb-4">Loved Your Experience?</h2>
        <p className="text-warm-grey text-lg max-w-xl mx-auto mb-8">
          Your review helps other patients find the care they need — and helps us 
          continue improving. It only takes a minute.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="primary-gold"
            href="https://g.page/r/XXXXXXXXX/review"
            external
            size="lg"
          >
            Leave a Google Review
          </Button>
          <Button
            variant="outline-teal"
            href="https://wa.me/919XXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20share%20my%20feedback"
            external
            size="lg"
          >
            Share Feedback on WhatsApp
          </Button>
        </div>
      </motion.div>
    </section>
  )
}