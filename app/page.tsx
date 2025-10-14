"use client"

import Link from "next/link"
import type { JSX } from "react"
import { useEffect, useMemo, useRef, useState } from "react"
import { jobs, posts, profile, socials, skills, projects, recommendations, services, faqs, pricingPlans } from "@/lib/data"
import { useLenis } from "@/components/lenis-provider"
import ScrollFooter from "@/components/scroll-footer"

const socialIconMap: Record<string, JSX.Element> = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
      <path d="M4.983 3.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM0 8.25h5.004V24H0V8.25zM8.66 8.25H13.5v2.15h.07c.68-1.3 2.32-2.67 4.78-2.67 5.12 0 6.07 3.37 6.07 7.74V24h-5V16.2c0-1.86-.03-4.25-2.59-4.25-2.6 0-3 2.03-3 4.12V24h-5V8.25z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm11 1.75a1 1 0 110 2 1 1 0 010-2zM12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
    </svg>
  ),
  Dribbble: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
      <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm6.93 9.25a15.62 15.62 0 00-5.4-.18 31.74 31.74 0 00-1.23-2.77 15.43 15.43 0 004.16-2.64 8 8 0 012.47 5.59zm-3.9-7.1a13.5 13.5 0 01-3.74 2.36 31.71 31.71 0 00-3.06-4.67 8 8 0 016.8 2.3zM8.3 4.91a30 30 0 013 4.57 32.23 32.23 0 01-7.2.58 8 8 0 014.2-5.15zM4.05 12a6 6 0 01.06-.86 34.64 34.64 0 008.19-.7c.35.7.67 1.42 1 2.16a17.4 17.4 0 00-5.94 4.74A7.94 7.94 0 014.05 12zm7.95 8a7.9 7.9 0 01-4.61-1.5 15.4 15.4 0 015.29-4.17 16.1 16.1 0 011.46 6.11A7.4 7.4 0 0112 20zm3.9-1.1a18.18 18.18 0 00-1.28-5.36 14 14 0 014.7.34A8 8 0 0115.9 18.9z" />
    </svg>
  ),
}

const buildSchedulingUrl = (baseUrl?: string, note?: string, fallback?: string) => {
  const target = baseUrl ?? fallback
  if (!target) return "#"
  if (!note) return target
  try {
    const url = new URL(target)
    url.searchParams.set("notes", note)
    return url.toString()
  } catch (error) {
    const separator = target.includes("?") ? "&" : "?"
    return `${target}${separator}notes=${encodeURIComponent(note)}`
  }
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])
  const lenis = useLenis()
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL
  const priceFormatter = useMemo(
    () =>
      new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
      }),
    [],
  )
  const contactHighlights = [
    {
      label: "Temps de réponse",
      value: "< 24 h ouvrées",
      gradient: "bg-[radial-gradient(60%_60%_at_85%_15%,rgba(251,191,36,0.28),rgba(0,0,0,0))]",
    },
    {
      label: "Formats",
      value: "Design • Web • Growth",
      gradient: "bg-[radial-gradient(60%_60%_at_15%_15%,rgba(251,191,36,0.26),rgba(0,0,0,0))]",
    },
    {
      label: "Langues",
      value: "Français / Anglais",
      gradient: "bg-[radial-gradient(60%_60%_at_50%_0%,rgba(251,191,36,0.24),rgba(0,0,0,0))]",
    },
  ]
  const serviceHighlights = [
    {
      label: "Vendre en ligne",
      badgeBg: "bg-gradient-to-r from-amber-400/20 via-amber-400/10 to-transparent",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17" strokeLinecap="round" />
          <path d="M12 3.5c2.4 3 2.4 14 0 17" strokeLinecap="round" />
          <path d="M12 3.5c-2.4 3-2.4 14 0 17" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: "Outils sur-mesure",
      badgeBg: "bg-gradient-to-r from-amber-500/18 via-amber-500/10 to-transparent",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
          <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
          <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
          <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
          <path d="M13.5 17h7" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: "Marque mémorable",
      badgeBg: "bg-gradient-to-r from-amber-500/16 via-amber-400/10 to-transparent",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
          <path
            d="M12 4l2.1 4.6 5.1.5-3.8 3.3 1 4.9-4.4-2.6-4.4 2.6 1-4.9-3.8-3.3 5.1-.5L12 4z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Être trouvé",
      badgeBg: "bg-gradient-to-r from-amber-500/18 via-amber-400/12 to-transparent",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
          <circle cx="11" cy="11" r="7" />
          <path d="M16.5 16.5L20.5 20.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: "Booster l’acquisition",
      badgeBg: "bg-gradient-to-r from-amber-500/18 via-amber-400/12 to-transparent",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
          <path d="M3.5 16.5l6-6 4.5 4.5 6.5-10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 6.5v5h-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "Accompagnement continu",
      badgeBg: "bg-gradient-to-r from-amber-500/16 via-amber-400/10 to-transparent",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
          <path
            d="M12 3.5l7 3v5.5c0 5-3.7 9.5-7 9.5s-7-4.5-7-9.5V6.5l7-3z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M9.5 12.5l2.5 2.5 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ]

  // Data order is defined in lib/data.ts

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])


  return (



 

    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "services", "pricing", "projects", "blog", "recommendations", "faq", "connect"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById(section)
                if (el && lenis) {
                  // header height offset ~56px
                  lenis.scrollTo(el, { offset: -64 })
                } else {
                  el?.scrollIntoView({ behavior: "smooth" })
                }
              }}
              aria-current={activeSection === section ? "true" : undefined}
              aria-label={`Aller à ${section}`}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
        <header
          id="intro"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current[0] = el
          }}
          className="relative overflow-hidden min-h-screen flex items-center"
        >
          <div className="grid lg:grid-cols-[minmax(0,3fr),minmax(0,2fr)] gap-12 sm:gap-16 w-full">
            <div className="hero-intro-primary space-y-8 sm:space-y-10" data-reveal-stagger="0.08">
              <div
                className="inline-flex items-center gap-3 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
                data-reveal
                data-reveal-from="up"
                data-reveal-distance="12"
              >
                <span className="text-foreground/80">Calimo Agency</span>
                <span className="hidden sm:inline text-muted-foreground/70">•</span>
                <span className="text-foreground/60">{profile.location}</span>
              </div>

              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight"
                data-reveal
                data-reveal-from="up"
                data-reveal-distance="36"
                data-reveal-duration="0.7"
              >
                Sites web & expériences digitales pour marques{" "}
                <span className="text-amber-400">ambitieuses</span>.
              </h1>

              <p
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
                data-reveal
                data-reveal-from="up"
                data-reveal-distance="28"
                data-reveal-delay="0.08"
              >
                Nous associons branding, design et ingénierie pour livrer des plateformes performantes, orientées conversion et fidèles à votre ADN.
              </p>

              <div
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground"
                data-reveal
                data-reveal-from="up"
                data-reveal-distance="24"
                data-reveal-delay="0.16"
              >
                <span>{profile.location}</span>
                <span className="hidden sm:inline text-muted-foreground/70">•</span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" aria-hidden />
                  {profile.available ? "Disponible" : "Complet"}
                </span>
              </div>
              <div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                data-reveal
                data-reveal-from="up"
                data-reveal-distance="20"
                data-reveal-delay="0.24"
              >
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-sm shadow-foreground/20 transition-transform hover:-translate-y-0.5"
                >
                  Réserver un appel
                </a>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-muted-foreground/60 transition-colors"
                >
                  Voir nos services
                </Link>
              </div>
            </div>

            <aside className="hero-intro-secondary space-y-6 sm:space-y-8" data-reveal-stagger="0.12">
              <div
                className="relative overflow-hidden rounded-3xl border border-border/80 bg-background/85 bg-[radial-gradient(60%_60%_at_85%_15%,rgba(251,191,36,0.24),rgba(0,0,0,0))] bg-no-repeat p-6 shadow-lg shadow-primary/5"
                data-reveal
                data-reveal-from="right"
                data-reveal-distance="28"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-mono">Actuellement</div>
                <div className="mt-3 space-y-1">
                  <p className="text-base font-medium text-foreground">{jobs[0]?.role ?? 'Conception digitale'}</p>
                  <p className="text-sm text-muted-foreground">{jobs[0]?.company ?? 'Calimo Studio'}</p>
                  <p className="text-xs text-muted-foreground">{jobs[0]?.year ?? '2025'} — Présent</p>
                </div>
              </div>

              <div
                className="rounded-3xl border border-border/80 bg-background/85 p-6 shadow-lg shadow-primary/5"
                data-reveal
                data-reveal-from="right"
                data-reveal-distance="28"
                data-reveal-delay="0.1"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-mono">Expertises clés</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:text-foreground hover:border-muted-foreground/60 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </header>

        <ScrollFooter />


        <section
          id="services"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current[1] = el
          }}
          className="min-h-screen py-20 sm:py-32"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Services & expertises</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {services.map((service, index) => {
                const { title, description, benefits, ctaLabel, ctaHref } = service
                const highlight = serviceHighlights[index % serviceHighlights.length]

                return (
                  <div
                    key={title}
                    data-reveal
                    data-reveal-from="up"
                    data-reveal-distance="18"
                    data-reveal-delay={`${index * 0.06}`}
                    className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-background/70 ${
                      index % 2 === 0
                        ? "bg-[radial-gradient(60%_60%_at_80%_100%,rgba(251,191,36,0.30),rgba(0,0,0,0))]"
                        : "bg-[radial-gradient(60%_60%_at_20%_100%,rgba(251,191,36,0.30),rgba(0,0,0,0))]"
                    } bg-no-repeat p-6 sm:p-8 transition-all duration-500 hover:border-muted-foreground/60 hover:-translate-y-1`}
                  >
                    {highlight ? (
                      <div
                        className={`inline-flex items-center gap-3 rounded-full px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-foreground ${highlight.badgeBg}`}
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/15 text-amber-500">
                          {highlight.icon}
                        </span>
                        <span>{highlight.label}</span>
                      </div>
                    ) : null}

                    <h3 className="mt-6 text-lg font-medium text-foreground transition-colors group-hover:text-muted-foreground">{title}</h3>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{description}</p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground/90">
                      {benefits.map((benefit, benefitIndex) => (
                        <li
                          key={`${title}-benefit-${benefitIndex}`}
                          className="flex items-start gap-3 leading-relaxed"
                        >
                          <span
                            className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-muted-foreground/70 sm:mt-2 sm:h-px sm:w-4 sm:rounded-full sm:bg-muted-foreground/60"
                            aria-hidden="true"
                          />
                          <span className="flex-1">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    {ctaLabel && ctaHref ? (
                      <Link
                        href={ctaHref}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-muted-foreground"
                        target={ctaHref.startsWith('http') ? '_blank' : undefined}
                        rel={ctaHref.startsWith('http') ? 'noreferrer' : undefined}
                      >
                        {ctaLabel}
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      </Link>
                    ) : null}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current[2] = el
          }}
          className="py-20 sm:py-32"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-light">Formules d’accompagnement</h2>
                <p className="text-sm text-muted-foreground max-w-xl">
                  Choisissez le rythme qui correspond à vos objectifs. Chaque offre inclut une équipe senior, un pilotage
                  rigoureux et des livrables prêts à activer.
                </p>
              </div>

              <div className="text-xs text-muted-foreground/80">
                Facturation mensuelle, engagement flexible par lots de 3 mois.
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {pricingPlans.map((plan, index) => {
                const iconMap = ["🚀", "⚡️", "👑"] as const
                const currentIcon = iconMap[index] ?? "✨"
                const priceValue = plan.priceMonthly
                const formattedPrice = plan.customLabel
                  ? plan.customLabel
                  : priceValue
                    ? priceFormatter.format(priceValue)
                    : "Sur devis"
                const priceSuffix = plan.customLabel ? "" : "/ mois"
                const bookingUrl = buildSchedulingUrl(plan.ctaHref, plan.ctaNote, calendlyUrl)

                return (
                  <div
                    key={plan.name}
                    className={`group relative overflow-hidden rounded-3xl border p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-muted-foreground/60 ${
                      plan.highlight
                        ? "border-amber-400/60 bg-[radial-gradient(80%_90%_at_50%_0%,rgba(251,191,36,0.35),rgba(0,0,0,0))] shadow-[0_24px_70px_rgba(251,191,36,0.25)] lg:-translate-y-1"
                        : "border-border/70 bg-background/75 bg-[radial-gradient(80%_85%_at_50%_0%,rgba(251,191,36,0.18),rgba(0,0,0,0))]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/15 text-lg">
                          <span aria-hidden="true">{currentIcon}</span>
                        </span>
                        <span>{plan.name}</span>
                      </div>
                      {plan.badge ? (
                        <span className="rounded-full bg-foreground/10 px-3 py-1 text-xs font-semibold text-foreground/90">
                          {plan.badge}
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-end gap-2">
                        <span className="text-3xl font-light text-foreground">{formattedPrice}</span>
                        <span className="text-sm text-muted-foreground/80">{priceSuffix}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{plan.tagline}</p>
                    </div>

                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`mt-8 inline-flex w-full items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold transition-all ${
                        plan.highlight
                          ? "border-transparent bg-foreground text-background shadow-lg shadow-amber-500/20 hover:bg-foreground/90"
                          : "border-border text-foreground hover:border-muted-foreground/60 hover:bg-foreground/5"
                      }`}
                    >
                      {plan.ctaLabel}
                    </a>

                    <div className="mt-8 space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                        Inclus dans l’offre
                      </p>
                      <ul className="space-y-2">
                        {plan.features.map((feature) => (
                          <li key={`${plan.name}-${feature}`} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                            <svg
                              className="mt-1 h-4 w-4 flex-shrink-0 text-amber-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.704 5.29a1 1 0 010 1.414l-7.071 7.071a1 1 0 01-1.414 0L3.296 8.854a1 1 0 111.414-1.414l3.218 3.218 6.364-6.364a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>


        {/* Projects */}
        <section
          id="projects"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current[3] = el
          }}
          className="min-h-screen py-20 sm:py-32"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Réalisations</h2>
              <p className="text-sm text-muted-foreground font-mono">Sélection</p>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {projects.map((p, index) => (
                <div
                  key={index}
                  data-reveal
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {p.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <h3 className="text-lg sm:text-xl font-medium">{p.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{p.description}</p>
                    {p.url ? (
                      <Link
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visiter le projet ${p.title}`}
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Visiter le projet
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      </Link>
                    ) : null}
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {p.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


{/* posts */}
        <section
          id="blog"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current[4] = el
          }}
          className="min-h-screen py-20 sm:py-32"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Blog</h2>
            <p className="text-muted-foreground">Nos articles, études et retours d’expérience.</p>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {posts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  data-reveal
                  className={`group relative overflow-hidden p-6 sm:p-8 border border-border rounded-lg bg-background/70 ${
                    index % 2 === 0
                      ? "bg-[radial-gradient(60%_60%_at_75%_100%,rgba(251,191,36,0.30),rgba(0,0,0,0))]"
                      : "bg-[radial-gradient(60%_60%_at_25%_100%,rgba(251,191,36,0.30),rgba(0,0,0,0))]"
                  } bg-no-repeat transition-all duration-500 hover:border-muted-foreground/50 cursor-pointer`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed ">{post.excerpt}</p>

                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section
          id="recommendations"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current[5] = el
          }}
          className="min-h-screen py-20 sm:py-32"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Ils nous font confiance</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {recommendations.map((r, i) => (
                <article
                  key={i}
                  className={`group relative overflow-hidden p-6 sm:p-8 border border-border rounded-lg bg-background/75 ${
                    i % 2 === 0
                      ? "bg-[radial-gradient(60%_60%_at_80%_0%,rgba(251,191,36,0.28),rgba(0,0,0,0))]"
                      : "bg-[radial-gradient(60%_60%_at_20%_0%,rgba(251,191,36,0.28),rgba(0,0,0,0))]"
                  } bg-no-repeat transition-all duration-500 hover:border-muted-foreground/50 hover:shadow-lg`}
                >
                  <div data-reveal>
                    <div className="space-y-3">
                      {r.link ? (
                        <Link
                          href={r.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-lg font-medium inline-flex items-center gap-2 hover:text-muted-foreground transition-colors"
                        >
                          {r.name}
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M7 7h10v10" />
                          </svg>
                        </Link>
                      ) : (
                        <h3 className="text-lg font-medium">{r.name}</h3>
                      )}
                      {r.affiliation ? (
                        <div className="text-sm text-muted-foreground">{r.affiliation}</div>
                      ) : null}
                      <p className="text-muted-foreground leading-relaxed">“{r.quote}”</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

{/* faq */}
        <section
          id="faq"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current[6] = el
          }}
          className="py-20 sm:py-32"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Questions fréquentes</h2>
              <p className="text-sm text-muted-foreground font-mono">FAQ</p>
            </div>

            <div className="grid gap-4 sm:gap-6">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  data-reveal
                  data-reveal-from="up"
                  data-reveal-distance="18"
                  data-reveal-delay={`${index * 0.04}`}
                  className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-background/75 ${
                    index % 2 === 0
                      ? "bg-[radial-gradient(65%_65%_at_85%_15%,rgba(251,191,36,0.26),rgba(0,0,0,0))]"
                      : "bg-[radial-gradient(65%_65%_at_15%_15%,rgba(251,191,36,0.26),rgba(0,0,0,0))]"
                  } bg-no-repeat p-6 sm:p-7 transition-all hover:border-muted-foreground/60`}
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer text-lg font-medium text-foreground">
                    <span>{faq.question}</span>
                    <svg className="w-4 h-4 text-muted-foreground transition-transform duration-300 group-open:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>


        <section
          id="connect"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current[7] = el
          }}
          className="py-20 sm:py-32"
        >
          <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8" data-reveal-stagger="0.08">
              <div
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
                data-reveal
                data-reveal-from="up"
                data-reveal-distance="16"
              >
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" aria-hidden />
                Calimo — Prendre rendez-vous
              </div>

              <h2
                className="text-3xl sm:text-4xl font-light"
                data-reveal
                data-reveal-from="up"
                data-reveal-distance="32"
              >
                Planifier un échange stratégique
              </h2>

              <p
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
                data-reveal
                data-reveal-from="up"
                data-reveal-distance="28"
                data-reveal-delay="0.08"
              >
                Nous commençons chaque mission par un audit express de votre écosystème digital. Objectif : comprendre vos priorités et cadrer un plan d’action concret sous 24&nbsp;h ouvrées.
              </p>

              <ul className="space-y-3 text-sm text-muted-foreground/90" data-reveal data-reveal-from="up" data-reveal-distance="24" data-reveal-delay="0.16">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" aria-hidden />
                  Audit rapide de votre site / tunnel de conversion
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" aria-hidden />
                  Recommandations priorisées (UX, SEO, marketing)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" aria-hidden />
                  Proposition de mission et calendrier de mise en œuvre
                </li>
              </ul>

              <div className="grid gap-3 sm:grid-cols-3" data-reveal data-reveal-from="up" data-reveal-distance="24" data-reveal-delay="0.24">
                {contactHighlights.map(({ label, value, gradient }) => (
                  <div
                    key={label}
                    className={`relative overflow-hidden rounded-2xl border border-border/70 bg-background/75 ${gradient} bg-no-repeat p-4 text-sm text-muted-foreground/90`}
                  >
                    <div className="text-xs uppercase tracking-[0.3em]">{label}</div>
                    <div className="mt-2 text-foreground font-medium">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-6" data-reveal-stagger="0.12">
              <div
                className="rounded-3xl border border-border/80 bg-background/85 p-6 shadow-lg shadow-primary/5"
                data-reveal
                data-reveal-from="right"
                data-reveal-distance="28"
              >
                <h3 className="text-lg font-medium text-foreground">Réserver un appel</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Choisissez un créneau de 30 minutes pour une visio d’exploration : nous passons en revue votre contexte et proposons des pistes concrètes.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-sm shadow-foreground/20 transition-transform hover:-translate-y-0.5"
                  >
                    Réserver un appel
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-muted-foreground/60 transition-colors"
                  >
                    Écrire au studio
                  </a>
                  <a
                    href="tel:+33656853329"
                    className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-muted-foreground/60 transition-colors"
                  >
                 { process.env.NEXT_PUBLIC_phoneNumber }
                  </a>
                </div>
              </div>

              <div
                className="relative overflow-hidden rounded-3xl border border-border/80 bg-background/85 bg-[radial-gradient(60%_60%_at_15%_15%,rgba(251,191,36,0.22),rgba(0,0,0,0))] bg-no-repeat p-6 shadow-lg shadow-primary/5 space-y-4"
                data-reveal
                data-reveal-from="right"
                data-reveal-distance="24"
                data-reveal-delay="0.12"
              >
                <h3 className="text-lg font-medium text-foreground">Préparez votre brief</h3>
                <ul className="space-y-2 text-sm text-muted-foreground/90">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" aria-hidden />
                    Objectifs prioritaires (ex : leads, lancement, rebranding)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" aria-hidden />
                    Équipe impliquée et délais souhaités
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60" aria-hidden />
                    Liens utiles (site actuel, maquettes, métriques)
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground/80">
                  Pas le temps de tout formaliser ? Note quelques bullet points, on s’occupe du reste lors du call.
                </p>
              </div>
            </aside>
          </div>
        </section>



        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 {profile.firstName} {profile.lastName}. Tous droits réservés.</div>
              
              <div className="text-xs text-muted-foreground flex gap-4">
                <Link href="/legal/mentions-legales" className="hover:text-foreground transition-colors">Mentions légales</Link>
                <Link href="/legal/confidentialite" className="hover:text-foreground transition-colors">Confidentialité</Link>
                <Link href="/legal/cgu" className="hover:text-foreground transition-colors">CGU</Link>
                <Link href="/legal/cookies" className="hover:text-foreground transition-colors">Cookies</Link>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-4">
                <span>{profile.email}</span>
                <span>•</span>
                <span>{ process.env.NEXT_PUBLIC_phoneNumber }</span>
              </div>
              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.24em]">
                {socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target={social.url.startsWith("http") ? "_blank" : undefined}
                    rel={social.url.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-border/60 px-3 py-1.5 hover:border-muted-foreground/60 hover:text-foreground transition-colors"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground/10 text-foreground">
                      {socialIconMap[social.name] ?? (
                        <span aria-hidden="true" className="text-xs font-semibold">
                          {social.name.charAt(0)}
                        </span>
                      )}
                    </span>
                    <span>{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
        </div>
  )
}
