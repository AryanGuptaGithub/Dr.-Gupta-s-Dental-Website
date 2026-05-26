import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { Button } from '@/components/ui/Button'
import { getPostBySlug, getRelatedPosts, getAllPosts } from '@/lib/blog'
import { CalendarDaysIcon, ClockIcon, TagIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      images: [{ url: post.featuredImage }],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const relatedPosts = getRelatedPosts(slug, post.category)

  // Simple markdown to HTML converter
  const renderMarkdown = (content: string) => {
    return content
      .replace(/^### (.+)$/gm, '<h3 class="font-serif text-xl text-teal mt-8 mb-4">$1</h3>')
      .replace(/^## (.+)$/gm, '<h2 class="font-serif text-2xl text-teal mt-10 mb-5">$1</h2>')
      .replace(/^# (.+)$/gm, '<h1 class="font-serif text-h3 text-teal mt-10 mb-6">$1</h1>')
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-charcoal">$1</strong>')
      .replace(/\n- (.+)/g, '\n<li class="flex items-start gap-2 text-warm-grey ml-4 mb-2"><span class="text-gold mt-1.5">•</span><span>$1</span></li>')
      .replace(/\n\n/g, '</p><p class="text-warm-grey leading-relaxed mb-4">')
      .replace(/^(.+)$/gm, '<p class="text-warm-grey leading-relaxed mb-4">$1</p>')
  }

  return (
    <>
      <Navbar />
      <article className="pt-32 pb-section">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-warm-grey hover:text-teal transition-colors mb-8 text-sm">
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <div className="mb-8">
            <span className="bg-mint-fresh/50 text-teal text-xs font-medium px-3 py-1.5 rounded-full mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="font-serif text-h2 md:text-h1 text-teal mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-warm-grey">
              <div className="flex items-center gap-3">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium text-charcoal">{post.author}</p>
                  <p className="text-xs">{post.authorTitle}</p>
                </div>
              </div>
              <span className="flex items-center gap-1">
                <CalendarDaysIcon className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1">
                <ClockIcon className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full aspect-[2/1] rounded-3xl overflow-hidden shadow-card mb-10">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>

          {/* Content */}
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-3 mt-12 pt-8 border-t border-mint-fresh/30">
            <TagIcon className="w-5 h-5 text-gold" />
            {post.tags.map((tag) => (
              <span key={tag} className="px-4 py-1.5 bg-mint-fresh/20 text-teal text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Author Card */}
          <div className="bg-white rounded-3xl p-8 shadow-card mt-10 flex gap-6 items-start">
            <Image
              src={post.authorImage}
              alt={post.author}
              width={80}
              height={80}
              className="rounded-2xl"
            />
            <div>
              <p className="font-serif text-xl text-teal mb-1">{post.author}</p>
              <p className="text-warm-grey text-sm mb-3">{post.authorTitle}</p>
              <p className="text-charcoal/80 text-sm leading-relaxed">
                Dr. Gupta is a leading dentist in Mumbai with 20+ years of experience. 
                He specializes in dental implants, smile makeovers, and painless dentistry. 
                5000+ smiles transformed.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-teal to-teal-dark rounded-3xl p-10 text-center mt-10">
            <h3 className="font-serif text-2xl text-white mb-3">Ready to Transform Your Smile?</h3>
            <p className="text-white/70 mb-6">Book a consultation with Dr. Gupta today.</p>
            <Button variant="primary-gold" href="/book-appointment" size="lg">
              Book Free Consultation
            </Button>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="font-serif text-h3 text-teal mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="33vw"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif text-sm text-teal group-hover:text-gold transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}