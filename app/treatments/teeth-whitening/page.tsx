import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { WhiteningHero } from '@/components/treatments/whitening/WhiteningHero'
import { WhyProfessional } from '@/components/treatments/whitening/WhyProfessional'
import { WhiteningOptions } from '@/components/treatments/whitening/WhiteningOptions'
import { WhiteningProcess } from '@/components/treatments/whitening/WhiteningProcess'
import { WhiteningGallery } from '@/components/treatments/whitening/WhiteningGallery'
import { WhiteningSafety } from '@/components/treatments/whitening/WhiteningSafety'
import { WhiteningCost } from '@/components/treatments/whitening/WhiteningCost'
import { WhiteningFAQ } from '@/components/treatments/whitening/WhiteningFAQ'
import { WhiteningCTA } from '@/components/treatments/whitening/WhiteningCTA'

export const metadata: Metadata = {
  title: 'Teeth Whitening Mumbai – Laser Whitening by Dentist | Dr. Gupta',
  description: 'Professional teeth whitening in Mumbai. Brighten your smile by 5-8 shades in one visit. Safe, painless, and long-lasting results. Book your session today.',
  openGraph: {
    title: 'Teeth Whitening Mumbai – Laser Whitening by Dentist',
    description: 'Brighten your smile by 5-8 shades in one session. Professional laser whitening by Dr. Gupta. Safe & painless.',
    images: [{ url: '/images/whitening-og.jpg' }],
  },
}

export default function TeethWhiteningPage() {
  return (
    <>
      <Navbar />
      <main>
        <WhiteningHero />
        <WhyProfessional />
        <WhiteningOptions />
        <WhiteningProcess />
        <WhiteningGallery />
        <WhiteningSafety />
        <WhiteningCost />
        <WhiteningFAQ />
        <WhiteningCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}