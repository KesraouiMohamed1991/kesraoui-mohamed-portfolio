import type { MetadataRoute } from 'next'
import { posts } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const routes: MetadataRoute.Sitemap = [
    '',
    '/blog',
    '/legal/mentions-legales',
    '/legal/confidentialite',
    '/legal/cgu',
    '/legal/cookies',
  ].map((path) => ({ url: `${base}${path}`, changeFrequency: 'weekly' as const, priority: path ? 0.6 : 1 }))

  const blog: MetadataRoute.Sitemap = posts.map((p) => ({ url: `${base}/blog/${p.slug}`, changeFrequency: 'monthly' as const, priority: 0.5 }))

  return [...routes, ...blog]
}
