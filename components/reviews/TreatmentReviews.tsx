'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

type TreatmentFilter = 'all' | 'implants' | 'rct' | 'cosmetic' | 'braces'

const treatmentReviews = {
  implants: [
    { name: 'Suresh K.', text: 'Got 4 implants done. Eating normally again after 10 years of dentures. Life-changing treatment.', rating: 5 },
    { name: 'Anita P.', text: 'Single implant for front tooth. Looks and feels 100% natural. Nobody can tell the difference.', rating: 5 },
    { name: 'Karan M.', text: 'Full mouth implants at age 55. Best investment in my health. Dr. Gupta is a true expert.', rating: 5 },
  ],
  rct: [
    { name: 'Rahul D.', text: 'Painless root canal — and I mean truly painless. The microscope technology is amazing.', rating: 5 },
    { name: 'Geeta S.', text: 'Emergency RCT done in one sitting. Saved my tooth and my sanity. So grateful.', rating: 5 },
  ],
  cosmetic: [
    { name: 'Deepika M.', text: 'Veneers transformed my smile. I look 10 years younger. Best cosmetic dentist in Mumbai.', rating: 5 },
    { name: 'Rohit A.', text: 'Teeth whitening was quick and the results are stunning. Highly professional setup.', rating: 5 },
  ],
  braces: [
    { name: 'Tanvi K.', text: 'Clear aligners for 14 months. Nobody knew I was straightening my teeth. Perfect result.', rating: 5 },
    { name: 'Aditya J.', text: 'Ceramic braces were barely visible. Finished treatment in 18 months. Love my new smile.', rating: 5 },
  ],
}

const filters: { value: TreatmentFilter; label: string }[] = [
  { value: 'all', label: 'All Reviews' },
  { value: 'implants', label: 'Implants' },
  { value: 'rct', label: 'Root Canal' },
  { value: 'cosmetic', label: 'Cosmetic' },
  { value: 'braces', label: 'Braces' },
]

export const TreatmentReviews = () => {
  const [filter, setFilter] = useState<TreatmentFilter>('all')

  const getFilteredReviews = () => {
    if (filter === 'all') {
      return Object.values(treatmentReviews).flat()
    }
    return treatmentReviews[filter] || []
  }

  const filteredReviews = getFilteredReviews()

  return (
    <section className="py-section bg-mint-fresh/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">By Treatment</p>
          <h2 className="font-serif text-h2 text-teal">Reviews by Procedure</h2>
          <p className="text-warm-grey mt-4 max-w-xl mx-auto">
            See what patients say about specific treatments. Find experiences relevant to your needs.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                filter === f.value
                  ? 'bg-teal text-white shadow-md'
                  : 'bg-white text-warm-grey hover:bg-mint-fresh/50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Reviews */}
        <motion.div layout className="grid md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((review, i) => (
              <motion.div
                key={`${review.name}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 shadow-card"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-gold" />
                  ))}
                </div>
                <p className="text-charcoal/80 text-sm leading-relaxed mb-4">"{review.text}"</p>
                <p className="text-teal font-medium text-sm">— {review.name}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}