import Link from 'next/link'
import { getAllCategories, getAllTags } from '@/lib/blog'

export const BlogSidebar = () => {
  const categories = getAllCategories()
  const tags = getAllTags()

  return (
    <div className="space-y-8">
      {/* Categories */}
      <div className="bg-white rounded-3xl p-8 shadow-card">
        <h3 className="font-serif text-xl text-teal mb-6">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/blog/category/${category.toLowerCase()}`}
              className="flex items-center justify-between py-2 px-4 rounded-xl hover:bg-mint-fresh/20 transition-colors group"
            >
              <span className="text-charcoal text-sm group-hover:text-teal transition-colors">
                {category}
              </span>
              <span className="text-gold text-sm">→</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white rounded-3xl p-8 shadow-card">
        <h3 className="font-serif text-xl text-teal mb-6">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 bg-mint-fresh/20 text-teal text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-br from-teal to-teal-dark rounded-3xl p-8 text-white">
        <h3 className="font-serif text-xl mb-3">Stay Updated</h3>
        <p className="text-white/70 text-sm mb-6">
          Get the latest dental health tips straight to your inbox.
        </p>
        <input
          type="email"
          placeholder="Your email"
          className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm outline-none focus:border-gold mb-3"
        />
        <button className="w-full bg-gold text-teal-dark font-medium py-3 rounded-full text-sm hover:bg-gold-light transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  )
}