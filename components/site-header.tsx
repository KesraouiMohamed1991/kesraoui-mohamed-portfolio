
'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { profile } from '@/lib/data'
import { useEffect, useState } from 'react'
import { useLenis } from '@/components/lenis-provider'
import Image from 'next/image'

export function SiteHeader() {
  const { resolvedTheme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    if (open) {
      document.documentElement.classList.add('overflow-hidden')
    } else {
      document.documentElement.classList.remove('overflow-hidden')
    }
    return () => document.documentElement.classList.remove('overflow-hidden')
  }, [open])

  const items = [
    { href: '/#projects', label: 'Projects' },
    { href: '/#work', label: 'Work' },
    { href: '/#connect', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <header className="sticky top-0 z-20 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 h-14 flex items-center justify-between border-b border-border/60">
        <Link href="/" className="flex items-center gap-2">
          <span className="sr-only">{profile.firstName} {profile.lastName}</span>
          <Image
            src="/moha.jpeg"
            alt={`${profile.firstName} ${profile.lastName}`}
            width={32}
            height={32}
            sizes="32px"
            className="h-8 w-8 rounded-full object-cover border border-border"
            priority
          />
        </Link>

        <nav className="hidden sm:flex items-center gap-4 text-sm">
          {items.map((item) => {
            const isHash = item.href.startsWith('/#')
            const targetId = isHash ? item.href.replace('/#', '') : ''
            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => {
                  if (isHash && typeof window !== 'undefined' && window.location.pathname === '/') {
                    e.preventDefault()
                    const el = document.getElementById(targetId)
                    if (el && lenis) lenis.scrollTo(el, { offset: -64 })
                    else el?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                {item.label}
              </Link>
            )
          })}
          {/* Email link removed as requested */}

          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-md border border-border hover:border-muted-foreground/50 transition-colors"
          >
            {resolvedTheme === 'dark' ? (
              <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="sm:hidden flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-md border border-border hover:border-muted-foreground/50 transition-colors"
          >
            {resolvedTheme === 'dark' ? (
              <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <button
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md border border-border hover:border-muted-foreground/50 transition-colors"
          >
            <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          className="sm:hidden fixed inset-0 z-30 bg-black/30 dark:bg-black/40 backdrop-blur-lg supports-[backdrop-filter]:bg-black/20"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false)
          }}
        >
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 p-2 rounded-md border border-border bg-background/90 hover:border-muted-foreground/50 transition-colors"
          >
            <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <nav className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 pt-16 animate-slide-down">
            <ul className="mx-auto max-w-md rounded-xl border border-border bg-background/80 backdrop-blur-md p-3 space-y-1 shadow-lg">
              {items.map((item) => {
                const isHash = item.href.startsWith('/#')
                const targetId = isHash ? item.href.replace('/#', '') : ''
                return (
                  <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      setOpen(false)
                      if (isHash && typeof window !== 'undefined' && window.location.pathname === '/') {
                        e.preventDefault()
                        const el = document.getElementById(targetId)
                        if (el && lenis) lenis.scrollTo(el, { offset: -64 })
                        else el?.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="block rounded-md px-4 py-3 text-base text-foreground/90 hover:text-foreground hover:bg-muted/70 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
