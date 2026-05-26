import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { SmileMakeoverHero } from '@/components/treatments/smile-makeover/SmileMakeoverHero'
import { WhatIsSmileMakeover } from '@/components/treatments/smile-makeover/WhatIsSmileMakeover'
import { MakeoverTreatments } from '@/components/treatments/smile-makeover/MakeoverTreatments'
import { DigitalSmileDesign } from '@/components/treatments/smile-makeover/DigitalSmileDesign'
import { MakeoverGallery } from '@/components/treatments/smile-makeover/MakeoverGallery'
import { WhoIsItFor } from '@/components/treatments/smile-makeover/WhoIsItFor'
import { MakeoverCost } from '@/components/treatments/smile-makeover/MakeoverCost'
import { MakeoverFAQ } from '@/components/treatments/smile-makeover/MakeoverFAQ'
import { MakeoverCTA } from '@/components/treatments/smile-makeover/MakeoverCTA'

export const metadata: Metadata = {
  title: 'Smile Makeover Mumbai – Digital Smile Design & Cosmetic Dentistry | Dr. Gupta',
  description: 'Transform your smile with Mumbai\'s premium cosmetic dentist. Digital Smile Design, veneers, whitening & more. See your new smile before treatment begins.',
  openGraph: {
    title: 'Smile Makeover Mumbai – Digital Smile Design & Cosmetic Dentistry',
    description: 'See your dream smile before treatment. Digital Smile Design by Dr. Gupta — 5000+ smiles transformed.',
    images: [{ url: '/images/smile-makeover-og.jpg' }],
  },
}

export default function SmileMakeoverPage() {
  return (
    <>
      <Navbar />
      <main>
        <SmileMakeoverHero />
        <WhatIsSmileMakeover />
        <MakeoverTreatments />
        <DigitalSmileDesign />
        <MakeoverGallery />
        <WhoIsItFor />
        <MakeoverCost />
        <MakeoverFAQ />
        <MakeoverCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}