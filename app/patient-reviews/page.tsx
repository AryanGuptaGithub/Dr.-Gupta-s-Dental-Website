import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { ReviewsHero } from '@/components/reviews/ReviewsHero'
import { VideoReviews } from '@/components/reviews/VideoReviews'
import { ReviewsGrid } from '@/components/reviews/ReviewsGrid'
import { GoogleReviews } from '@/components/reviews/GoogleReviews'
import { TreatmentReviews } from '@/components/reviews/TreatmentReviews'
import { LeaveReview } from '@/components/reviews/LeaveReview'
import { ReviewsCTA } from '@/components/reviews/ReviewsCTA'

export const metadata: Metadata = {
  title: 'Patient Reviews – What Our Patients Say | Dr. Gupta Mumbai',
  description: 'Read 500+ genuine patient reviews for Dr. Gupta\'s dental implants, smile makeovers & family dentistry in Mumbai. 4.9★ Google rating.',
  openGraph: {
    title: 'Patient Reviews – Dr. Gupta\'s Smiles Forever Mumbai',
    description: '500+ genuine patient reviews. See why Mumbai trusts Dr. Gupta for dental implants, root canals & smile makeovers.',
    images: [{ url: '/images/reviews-og.jpg' }],
  },
}

export default function PatientReviewsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ReviewsHero />
        <VideoReviews />
        <ReviewsGrid />
        <GoogleReviews />
        <TreatmentReviews />
        <LeaveReview />
        <ReviewsCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}