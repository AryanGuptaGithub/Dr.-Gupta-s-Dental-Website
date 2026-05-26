import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { GalleryHero } from '@/components/gallery/GalleryHero'
import { GalleryGrid } from '@/components/gallery/GalleryGrid'
import { GalleryStories } from '@/components/gallery/GalleryStories'
import { GalleryCTA } from '@/components/gallery/GalleryCTA'

export const metadata: Metadata = {
  title: 'Smile Gallery – Before & After Dental Transformations Mumbai | Dr. Gupta',
  description: 'See real smile transformations by Dr. Gupta. Dental implants, veneers, whitening & smile makeover results. 5000+ smiles transformed in Mumbai.',
  openGraph: {
    title: 'Smile Gallery – Before & After Transformations | Dr. Gupta',
    description: 'Real patient smile transformations. Dental implants, veneers, whitening results by Mumbai\'s trusted dentist.',
    images: [{ url: '/images/gallery-og.jpg' }],
  },
}

export default function SmileGalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <GalleryHero />
        <GalleryGrid />
        <GalleryStories />
        <GalleryCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}