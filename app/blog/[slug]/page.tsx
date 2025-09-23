import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { posts, profile, type ContentBlock } from "@/lib/data"

type Params = Promise<{ slug: string }>

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return notFound()

  const renderBlock = (b: ContentBlock, i: number) => {
    switch (b.type) {
      case 'h2':
        return (
          <h2 key={i} className="text-2xl font-medium mt-8 mb-3">{b.content}</h2>
        )
      case 'ul':
        return (
          <ul key={i} className="list-disc pl-6 space-y-1 text-muted-foreground">
            {b.items?.map((it, idx) => (
              <li key={idx}>{it}</li>
            ))}
          </ul>
        )
      case 'code':
        return (
          <pre
            key={i}
            className="code-block mt-4 mb-2 overflow-x-auto rounded-md border border-border bg-card p-4 text-sm"
            data-lang={b.language || undefined}
          >
            <code>{b.content}</code>
          </pre>
        )
      default:
        return (
          <p key={i} className="leading-relaxed mt-4">{b.content}</p>
        )
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-16 py-16">
      <div className="mb-6">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Retour au blog"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Retour
        </a>
      </div>
      {/* Breadcrumbs JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: '/blog' },
              { '@type': 'ListItem', position: 3, name: post.title, item: `/blog/${post.slug}` },
            ],
          }),
        }}
      />

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            author: { '@type': 'Person', name: `${profile.firstName} ${profile.lastName}` },
          }),
        }}
      />
      <div className="flex items-center justify-between text-xs text-muted-foreground font-mono mb-4">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-light mb-4">{post.title}</h1>
      <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

      <article className="mt-6">
        {post.content?.map(renderBlock)}
      </article>
    </main>
  )
}
