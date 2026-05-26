'use client'
import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

const googleReviews = [
  {
    name: 'Amit S.',
    rating: 5,
    time: '2 months ago',
    text: 'Excellent clinic. Dr. Gupta is very professional and caring. Got my implant done here — painless and perfect result.',
  },
  {
    name: 'Lakshmi N.',
    rating: 5,
    time: '1 month ago',
    text: 'Best dentist in Andheri. Clean clinic, modern equipment, and very friendly staff. Highly recommended for families.',
  },
  {
    name: 'Deepak K.',
    rating: 5,
    time: '3 weeks ago',
    text: 'Had a root canal done. Didn\'t feel a thing. Dr. Gupta explained everything clearly. Reasonable pricing too.',
  },
  {
    name: 'Pooja R.',
    rating: 5,
    time: '1 week ago',
    text: 'Got my braces removed yesterday — my teeth look perfect! The entire journey was smooth. Thank you, doctor!',
  },
  {
    name: 'Manish G.',
    rating: 5,
    time: '5 days ago',
    text: 'Took my mother here for dentures. Dr. Gupta suggested implants instead. She\'s so happy now. Worth every rupee.',
  },
  {
    name: 'Shruti D.',
    rating: 4,
    time: '2 weeks ago',
    text: 'Very good clinic for teeth whitening. Results visible immediately. Only giving 4 stars because parking can be tricky.',
  },
]

export const GoogleReviews = () => {
  return (
    <section className="py-section max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-white border border-mint-fresh/30 text-teal text-sm font-medium px-5 py-3 rounded-full mb-6 shadow-card">
          <img src="/images/google-logo.svg" alt="Google" className="w-5 h-5" />
          Reviews from Google Business Profile
        </div>
        <h2 className="font-serif text-h2 text-teal">What Google Says</h2>
        <div className="flex justify-center items-center gap-2 mt-4">
          <span className="font-serif text-3xl text-gold">4.9</span>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} className="w-5 h-5 text-gold" />
            ))}
          </div>
          <span className="text-warm-grey text-sm">500+ reviews</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {googleReviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-white rounded-3xl p-8 shadow-card border border-mint-fresh/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-teal/10 rounded-full flex items-center justify-center text-teal font-bold text-sm">
                {review.name.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-charcoal text-sm">{review.name}</p>
                <p className="text-warm-grey text-xs">{review.time}</p>
              </div>
              <img src="/images/google-logo.svg" alt="Google" className="w-4 h-4 ml-auto" />
            </div>
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: review.rating }).map((_, i) => (
                <StarIcon key={i} className="w-3.5 h-3.5 text-gold" />
              ))}
            </div>
            <p className="text-charcoal/80 text-sm leading-relaxed">{review.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}