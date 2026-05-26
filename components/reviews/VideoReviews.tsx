'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { PlayIcon } from '@heroicons/react/24/solid'

const videos = [
  {
    id: 1,
    thumbnail: '/images/video-review-1.webp',
    title: 'Full Mouth Implants Journey',
    patient: 'Rajesh M.',
    duration: '2:34',
    quote: 'I got my life back. From dentures to fixed teeth in 3 days.',
  },
  {
    id: 2,
    thumbnail: '/images/video-review-2.webp',
    title: 'Smile Makeover Experience',
    patient: 'Priya S.',
    duration: '1:48',
    quote: 'My wedding smile was perfect. Dr. Gupta made it happen.',
  },
  {
    id: 3,
    thumbnail: '/images/video-review-3.webp',
    title: 'Painless Root Canal',
    patient: 'Amit K.',
    duration: '1:22',
    quote: 'I felt nothing. The whole thing was over in 45 minutes.',
  },
]

export const VideoReviews = () => {
  const [playingId, setPlayingId] = useState<number | null>(null)

  return (
    <section className="py-section max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Watch Their Stories</p>
        <h2 className="font-serif text-h2 text-teal">Video Testimonials</h2>
        <p className="text-warm-grey mt-4 max-w-xl mx-auto">
          Real patients share their transformation journeys in their own words.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {videos.map((video, i) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-white rounded-3xl overflow-hidden shadow-card group cursor-pointer"
            onClick={() => setPlayingId(playingId === video.id ? null : video.id)}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video bg-teal/10">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 bg-teal/30 flex items-center justify-center group-hover:bg-teal/40 transition-colors">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <PlayIcon className="w-7 h-7 text-teal ml-1" />
                </div>
              </div>
              {/* Duration badge */}
              <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </span>
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="font-serif text-lg text-teal mb-2">{video.title}</h3>
              <p className="text-warm-grey text-sm italic leading-relaxed mb-3">"{video.quote}"</p>
              <p className="text-charcoal text-sm font-medium">— {video.patient}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}