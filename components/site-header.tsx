'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { useLenis } from '@/components/lenis-provider'
import { socials } from '@/lib/data'

const navItems = [
  { href: '/#intro', label: 'Accueil' },
  { href: '/#services', label: 'Services' },
  { href: '/#projects', label: 'Réalisations' },
  { href: '/#blog', label: 'Blog' },
  { href: '/#connect', label: 'Contact' },
]

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

  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith('/#')) return
    if (typeof window === 'undefined') return
    if (window.location.pathname !== '/') return
    e.preventDefault()
    const targetId = href.replace('/#', '')
    const el = document.getElementById(targetId)
    if (!el) return
    if (lenis) lenis.scrollTo(el, { offset: -72 })
    else el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-6xl mx-auto h-16 px-6 sm:px-8 lg:px-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/calimo.png"
            alt="Calimo Agency"
            width={32}
            height={32}
            className="h-9 w-9 rounded-md border border-border bg-card p-1"
            priority
          />
          <span className="hidden sm:block text-sm font-semibold tracking-wide text-foreground/80">
            Calimo Agency
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => handleNav(e, item.href)}
            >
              {item.label}
            </Link>
          ))}
          <button
            aria-label="Changer de thème"
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

        <div className="md:hidden flex items-center gap-2">
          <button
            aria-label="Changer de thème"
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
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="p-2 rounded-md border border-border hover:border-muted-foreground/50 transition-colors"
          >
            <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-background/95 dark:bg-black/80 backdrop-blur-sm"
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpen(false)
          }}
        >
          <nav className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 pt-20 animate-slide-down">
            <ul className="mx-auto max-w-md space-y-1 rounded-xl border border-border bg-background/85 backdrop-blur-md p-3 shadow-xl">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-4 py-3 text-base text-foreground/90 hover:text-foreground hover:bg-muted/70 transition-colors"
                    onClick={(e) => {
                      setOpen(false)
                      handleNav(e, item.href)
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <div className="flex items-center gap-3 px-4 text-sm text-muted-foreground">
                  {socials.slice(0, 3).map((social) => (
                    <Link key={social.name} href={social.url} className="hover:text-foreground" target="_blank" rel="noreferrer">
                      {social.name}
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
