import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { RootCanalHero } from '@/components/treatments/root-canal/RootCanalHero'
import { WhatIsRCT } from '@/components/treatments/root-canal/WhatIsRCT'
import { SymptomsRCT } from '@/components/treatments/root-canal/SymptomsRCT'
import { PainlessRCT } from '@/components/treatments/root-canal/PainlessRCT'
import { RCTProcess } from '@/components/treatments/root-canal/RCTProcess'
import { RCTCost } from '@/components/treatments/root-canal/RCTCost'
import { RCTFAQ } from '@/components/treatments/root-canal/RCTFAQ'
import { RCTCTA } from '@/components/treatments/root-canal/RCTCTA'

export const metadata: Metadata = {
  title: 'Painless Root Canal Treatment Mumbai – Single Sitting RCT | Dr. Gupta',
  description: 'Experience painless root canal treatment in Mumbai with modern microscope dentistry. Single sitting RCT, affordable cost, EMI available. Book today.',
  openGraph: {
    title: 'Painless Root Canal Treatment Mumbai – Single Sitting RCT',
    description: 'Modern microscope-assisted root canal. Painless, single visit, affordable. Save your tooth today.',
    images: [{ url: '/images/rct-og.jpg' }],
  },
}

export default function RootCanalPage() {
  return (
    <>
      <Navbar />
      <main>
        <RootCanalHero />
        <WhatIsRCT />
        <SymptomsRCT />
        <PainlessRCT />
        <RCTProcess />
        <RCTCost />
        <RCTFAQ />
        <RCTCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}