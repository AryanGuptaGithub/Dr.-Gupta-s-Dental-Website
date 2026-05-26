import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { FeaturedPost } from '@/components/blog/FeaturedPost'
import { BlogCard } from '@/components/blog/BlogCard'
import { BlogSidebar } from '@/components/blog/BlogSidebar'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Dental Health Blog – Tips, Guides & Advice | Dr. Gupta Mumbai',
  description: 'Expert dental advice from Dr. Gupta. Read about implants, root canals, smile makeovers, braces, and oral health tips for Mumbai patients.',
}

export default function BlogPage() {
  const posts = getAllPosts()
  const featuredPost = posts[0]
  const remainingPosts = posts.slice(1)

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-section">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-gold uppercase tracking-widest text-sm font-medium mb-4">Our Blog</p>
            <h1 className="font-serif text-h1 text-teal mb-4">
              Dental Health <span className="text-gold">Insights</span>
            </h1>
            <p className="text-warm-grey text-lg max-w-2xl mx-auto">
              Expert advice, treatment guides, and oral health tips from Dr. Gupta and the Smiles Forever team.
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <FeaturedPost post={featuredPost} />
            </div>
          )}

          {/* Grid + Sidebar */}
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              {remainingPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}