import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";
import type { BlogPost } from "@/lib/blog";

export const FeaturedPost = ({ post }: { post: BlogPost }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-card">
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-[4/3] md:aspect-auto">
          <Image
            src="/images/bridal-smile-makeover.png"
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <span className="bg-mint-fresh/50 text-teal text-xs font-medium px-3 py-1.5 rounded-full self-start mb-4">
            {post.category}
          </span>
          <h2 className="font-serif text-2xl md:text-h3 text-teal mb-3">
            {post.title}
          </h2>
          <p className="text-warm-grey leading-relaxed mb-4">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-xs text-warm-grey mb-6">
            <span className="flex items-center gap-1">
              <CalendarDaysIcon className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <ClockIcon className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
          <div>
            <Button href={`/blog/${post.slug}`} variant="primary-gold">
              Read Full Article
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
