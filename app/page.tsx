import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'
import { TrustBar } from '@/components/home/TrustBar'
import { DoctorIntro } from '@/components/home/DoctorIntro'
import { TreatmentsGrid } from '@/components/home/TreatmentsGrid'
import { BeforeAfterSlider } from '@/components/home/BeforeAfterSlider'
import { TestimonialCarousel } from '@/components/home/TestimonialCarousel'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { FaqTeaser } from '@/components/home/FaqTeaser'
import { FinalCTA } from '@/components/home/FinalCTA'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'

export const metadata: Metadata = {
  title: "Best Dentist in Mumbai | Dr. Gupta's Smiles Forever",
  description: "Premium painless dental implants, root canal, smile makeover in Mumbai. 20+ years experience, 5000+ smiles transformed. Book online.",
  openGraph: {
    title: "Best Dentist in Mumbai | Dr. Gupta's Smiles Forever",
    description: "Premium painless dental implants, root canal, smile makeover in Mumbai.",
    images: [{ url: '/og-image.jpg' }],
  },
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <DoctorIntro />
        <TreatmentsGrid />
        <BeforeAfterSlider />
        <TestimonialCarousel />
        <WhyChooseUs />
        <FaqTeaser />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}