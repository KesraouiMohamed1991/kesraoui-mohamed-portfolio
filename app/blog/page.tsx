import Link from "next/link"
import type { Metadata } from "next"
import { posts } from "@/lib/data"

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles et pensées sur le développement (Next.js, Node.js, React).",
}

export default function BlogIndex() {
  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-16 py-16">
      <div className="mb-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Retour à l’accueil"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Accueil
        </a>
      </div>
      <h1 className="text-3xl sm:text-4xl font-light mb-8">Blog</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-colors"
          >
            <div className="flex items-center justify-between text-xs text-muted-foreground font-mono mb-2">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-xl font-medium">{post.title}</h2>
            <p className="text-muted-foreground mt-2">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
