import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { BlogCard } from '@/components/blog/BlogCard'
import { getPostsByCategory, getAllCategories } from '@/lib/blog'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

interface Props {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({ category: category.toLowerCase() }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const formattedCategory = category.replace(/-/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  
  return {
    title: `${formattedCategory} Articles – Dental Blog | Dr. Gupta Mumbai`,
    description: `Read our latest articles about ${formattedCategory.toLowerCase()}. Expert advice from Dr. Gupta, Mumbai's trusted dentist.`,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const formattedCategory = category.replace(/-/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  
  const posts = getPostsByCategory(formattedCategory)

  if (posts.length === 0) notFound()

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-section">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-warm-grey hover:text-teal transition-colors mb-8 text-sm">
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Blog
          </Link>
          <h1 className="font-serif text-h2 text-teal mb-2">{formattedCategory}</h1>
          <p className="text-warm-grey mb-12">{posts.length} article{posts.length > 1 ? 's' : ''}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}