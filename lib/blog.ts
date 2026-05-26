import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  authorTitle: string
  authorImage: string
  category: string
  readTime: string
  featuredImage: string
  tags: string[]
  seoTitle: string
  seoDescription: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(blogDirectory)
  
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(blogDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        content,
        ...(data as Omit<BlogPost, 'slug' | 'content'>),
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      content,
      ...(data as Omit<BlogPost, 'slug' | 'content'>),
    }
  } catch {
    return null
  }
}

export function getPostsByCategory(category: string): BlogPost[] {
  const posts = getAllPosts()
  return posts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  )
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3): BlogPost[] {
  const posts = getAllPosts()
  return posts
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, limit)
}

export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const categories = new Set(posts.map((post) => post.category))
  return Array.from(categories).sort()
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set(posts.flatMap((post) => post.tags))
  return Array.from(tags).sort()
}