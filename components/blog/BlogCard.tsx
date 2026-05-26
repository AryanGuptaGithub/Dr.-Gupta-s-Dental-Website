import Link from 'next/link'
import Image from 'next/image'
import { CalendarDaysIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import type { BlogPost } from '@/lib/blog'

export const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 text-teal text-xs font-medium px-3 py-1.5 rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-warm-grey mb-3">
          <span className="flex items-center gap-1">
            <CalendarDaysIcon className="w-3.5 h-3.5" />
            {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
          </span>
          <span className="flex items-center gap-1">
            <ClockIcon className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>
        <h3 className="font-serif text-lg text-teal mb-2 group-hover:text-gold transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-warm-grey text-sm leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <span className="flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all">
          Read More <ArrowRightIcon className="w-4 h-4" />
        </span>
      </div>
    </Link>
  )
}