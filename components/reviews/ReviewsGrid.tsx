'use client'
import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline'

const reviews = [
  {
    id: 1,
    name: 'Sneha P.',
    treatment: 'Dental Implants',
    rating: 5,
    date: '2 weeks ago',
    text: 'I was terrified of implants but Dr. Gupta made the entire process so comfortable. The implant feels exactly like my natural tooth. I can eat, smile, and laugh without any worry. Best decision ever!',
  },
  {
    id: 2,
    name: 'Vikram R.',
    treatment: 'Root Canal Treatment',
    rating: 5,
    date: '1 month ago',
    text: 'Came in with severe tooth pain at 8 PM. Dr. Gupta saw me immediately and performed a painless root canal. I walked out pain-free. True emergency care — highly recommended for anyone in Mumbai.',
  },
  {
    id: 3,
    name: 'Meera J.',
    treatment: 'Smile Makeover',
    rating: 5,
    date: '3 weeks ago',
    text: 'My smile was my biggest insecurity. The digital smile design showed me exactly what I\'d get. 6 veneers later, I can\'t stop looking in the mirror. My confidence has skyrocketed.',
  },
  {
    id: 4,
    name: 'Arjun D.',
    treatment: 'Braces (Ceramic)',
    rating: 5,
    date: '2 months ago',
    text: 'Got ceramic braces as an adult — best decision! Nobody notices them. The treatment was smooth and the results are incredible. Dr. Gupta is a perfectionist and it shows.',
  },
  {
    id: 5,
    name: 'Kavita S.',
    treatment: 'Teeth Whitening',
    rating: 5,
    date: '1 week ago',
    text: 'Had laser whitening before my daughter\'s wedding. My teeth went from dull to dazzling in one hour! No sensitivity at all. The compliments haven\'t stopped.',
  },
  {
    id: 6,
    name: 'Rohan M.',
    treatment: 'Family Dentistry',
    rating: 5,
    date: '3 weeks ago',
    text: 'Brought my whole family here — my wife, two kids, and my mother. Everyone had a great experience. The clinic is spotless, the staff is warm, and Dr. Gupta is fantastic with children.',
  },
  {
    id: 7,
    name: 'Neha A.',
    treatment: 'Full Mouth Implants',
    rating: 5,
    date: '1 month ago',
    text: 'My father got full mouth implants at age 68. He can eat everything now — even his favorite bhajiyas. Seeing him happy and healthy means the world to us. Thank you, Dr. Gupta.',
  },
  {
    id: 8,
    name: 'Sanjay T.',
    treatment: 'Emergency Dental Care',
    rating: 5,
    date: '5 days ago',
    text: 'Had a dental emergency while visiting Mumbai. Called at 10 AM, was in the chair by 11 AM. Dr. Gupta fixed my broken tooth the same day. Efficient, professional, and genuinely caring.',
  },
]

export const ReviewsGrid = () => {
  return (
    <section className="py-section bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Patient Voices</p>
          <h2 className="font-serif text-h2 text-teal">What Our Patients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-ivory rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-shadow"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-medium text-charcoal">{review.name}</p>
                  <p className="text-warm-grey text-xs">{review.treatment}</p>
                </div>
                <span className="text-warm-grey text-xs">{review.date}</span>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-gold" />
                ))}
              </div>

              {/* Review text */}
              <div className="flex gap-3">
                <ChatBubbleLeftIcon className="w-5 h-5 text-gold/40 shrink-0 mt-0.5" />
                <p className="text-charcoal/80 text-sm leading-relaxed">{review.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination or load more */}
        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-white border-2 border-teal text-teal rounded-full font-medium hover:bg-teal hover:text-white transition-colors text-sm">
            Load More Reviews
          </button>
        </div>
      </div>
    </section>
  )
}