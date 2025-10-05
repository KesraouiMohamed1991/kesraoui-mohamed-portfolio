"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { jobs, posts, profile, socials, skills, projects, recommendations, services, faqs } from "@/lib/data"
import { useLenis } from "@/components/lenis-provider"
import ScrollFooter from "@/components/scroll-footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])
  const lenis = useLenis()
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL

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
          {["intro", "services", "projects", "blog", "recommendations", "faq", "connect"].map((section) => (
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

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
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
                Sites web & expériences digitales pour marques ambitieuses.
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
                className="rounded-3xl border border-border/80 bg-background/85 p-6 shadow-lg shadow-primary/5"
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
              <p className="text-sm text-muted-foreground font-mono">Domaines d'intervention</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {services.map(({ title, description, benefits, ctaLabel, ctaHref }, index) => (
                <div
                  key={title}
                  data-reveal
                  data-reveal-from="up"
                  data-reveal-distance="18"
                  data-reveal-delay={`${index * 0.06}`}
                  className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/70 p-6 sm:p-8 transition-all duration-500 hover:border-muted-foreground/60 hover:-translate-y-1"
                >
                  <h3 className="mt-4 text-lg font-medium text-foreground group-hover:text-muted-foreground transition-colors">{title}</h3>
                  <p className="mt-4 text-sm text-muted-foreground  leading-relaxed">{description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground/90">
                    {benefits.map((benefit, benefitIndex) => (
                      <li key={`${title}-benefit-${benefitIndex}`} className="flex items-start gap-2">
                        <span className="mt-1 h-1 w-4 rounded-full bg-muted-foreground/50" aria-hidden />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  {ctaLabel && ctaHref ? (
                    <Link
                      href={ctaHref}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors"
                      target={ctaHref.startsWith('http') ? '_blank' : undefined}
                      rel={ctaHref.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      {ctaLabel}
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </Link>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Projects */}
        <section
          id="projects"
          ref={(el: HTMLElement | null) => {
            sectionsRef.current[2] = el
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
            sectionsRef.current[3] = el
          }}
          className="min-h-screen py-20 sm:py-32"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Blog</h2>
            <p className="text-muted-foreground">Nos articles, études et retours d’expérience.</p>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  data-reveal
                  className="group p-6 sm:p-8 border border-border  rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
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
            sectionsRef.current[4] = el
          }}
          className="min-h-screen py-20 sm:py-32"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Ils nous font confiance</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {recommendations.map((r, i) => (
                <article key={i} className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg">
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
            sectionsRef.current[5] = el
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
                  className="group rounded-2xl border border-border/60 bg-background/70 p-6 sm:p-7 transition-all hover:border-muted-foreground/60"
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
            sectionsRef.current[6] = el
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
                <div className="rounded-2xl border border-border/70 bg-background/70 p-4 text-sm text-muted-foreground/90">
                  <div className="text-xs uppercase tracking-[0.3em]">Temps de réponse</div>
                  <div className="mt-2 text-foreground font-medium">&lt; 24 h ouvrées</div>
                </div>
                <div className="rounded-2xl border border-border/70 bg-background/70 p-4 text-sm text-muted-foreground/90">
                  <div className="text-xs uppercase tracking-[0.3em]">Formats</div>
                  <div className="mt-2 text-foreground font-medium">Design • Web • Growth</div>
                </div>
                <div className="rounded-2xl border border-border/70 bg-background/70 p-4 text-sm text-muted-foreground/90">
                  <div className="text-xs uppercase tracking-[0.3em]">Langues</div>
                  <div className="mt-2 text-foreground font-medium">Français / Anglais</div>
                </div>
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
                className="rounded-3xl border border-border/80 bg-background/85 p-6 shadow-lg shadow-primary/5 space-y-4"
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

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{profile.email}</span>
              <span>•</span>
              <span>{ process.env.NEXT_PUBLIC_phoneNumber }</span>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
        </div>
  )
}
