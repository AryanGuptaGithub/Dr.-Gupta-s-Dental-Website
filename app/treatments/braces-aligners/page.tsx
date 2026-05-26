import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { BracesHero } from '@/components/treatments/braces/BracesHero'
import { WhyStraightTeeth } from '@/components/treatments/braces/WhyStraightTeeth'
import { TreatmentOptions } from '@/components/treatments/braces/TreatmentOptions'
import { BracesTypes } from '@/components/treatments/braces/BracesTypes'
import { ClearAligners } from '@/components/treatments/braces/ClearAligners'
import { WhoIsItFor } from '@/components/treatments/braces/WhoIsItFor'
import { BracesTimeline } from '@/components/treatments/braces/BracesTimeline'
import { BracesCost } from '@/components/treatments/braces/BracesCost'
import { BracesFAQ } from '@/components/treatments/braces/BracesFAQ'
import { BracesCTA } from '@/components/treatments/braces/BracesCTA'

export const metadata: Metadata = {
  title: 'Braces & Aligners Mumbai – Clear Aligners, Ceramic Braces | Dr. Gupta',
  description: 'Best orthodontic treatment in Mumbai. Invisible aligners, ceramic braces & metal braces for kids and adults. EMI available. Free consultation.',
  openGraph: {
    title: 'Braces & Aligners Mumbai – Clear Aligners, Ceramic Braces',
    description: 'Straighten your teeth discreetly with clear aligners or ceramic braces. Affordable EMI plans. Book a free smile assessment.',
    images: [{ url: '/images/braces-og.jpg' }],
  },
}

export default function BracesAlignersPage() {
  return (
    <>
      <Navbar />
      <main>
        <BracesHero />
        <WhyStraightTeeth />
        <TreatmentOptions />
        <BracesTypes />
        <ClearAligners />
        <WhoIsItFor />
        <BracesTimeline />
        <BracesCost />
        <BracesFAQ />
        <BracesCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}