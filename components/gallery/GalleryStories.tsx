'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'

const stories = [
  {
    name: 'Rajesh M.',
    age: 52,
    treatment: 'Full Mouth Implants',
    quote: 'I had been wearing dentures for 10 years. Dr. Gupta gave me fixed teeth in 3 days. I can eat anything now — even chikki and peanuts. This changed my life completely.',
    image: '/images/story-rajesh.webp',
    stars: 5,
  },
  {
    name: 'Priya S.',
    age: 34,
    treatment: 'Smile Makeover (Veneers)',
    quote: 'I always hid my smile in photos. After my wedding makeover with Dr. Gupta, I can\'t stop smiling. My wedding pictures are beautiful because I\'m genuinely beaming in every single one.',
    image: '/images/story-priya.webp',
    stars: 5,
  },
  {
    name: 'Ananya K.',
    age: 28,
    treatment: 'Clear Aligners',
    quote: 'I\'m a marketing professional and couldn\'t have metal braces. Clear aligners straightened my teeth without anyone at work noticing. The 3D simulation showed me exactly what I\'d get.',
    image: '/images/story-ananya.webp',
    stars: 5,
  },
]

export const GalleryStories = () => {
  return (
    <section className="py-section bg-mint-fresh/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Patient Stories</p>
          <h2 className="font-serif text-h2 text-teal">More Than Just Photos</h2>
          <p className="text-warm-grey mt-4 max-w-xl mx-auto">
            Behind every transformation is a person whose life changed. Here are their stories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-card"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={story.image}
                  alt={`${story.name} - ${story.treatment}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: story.stars }).map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-gold" />
                  ))}
                </div>
                <p className="text-charcoal text-sm leading-relaxed italic mb-6">
                  "{story.quote}"
                </p>
                <div>
                  <p className="font-medium text-teal">{story.name}</p>
                  <p className="text-warm-grey text-xs">{story.age} years • {story.treatment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}