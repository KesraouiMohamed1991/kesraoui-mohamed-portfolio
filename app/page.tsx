"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import { jobs, posts, profile, socials, skills, projects, recommendations } from "@/lib/data"
import { useLenis } from "@/components/lenis-provider"
import ScrollFooter from "@/components/scroll-footer"

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme()
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])
  const lenis = useLenis()

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

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark")

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "projects", "work", "thoughts", "recommendations", "connect"].map((section) => (
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
          ref={(el) => (sectionsRef.current[0] = el)}
          className="relative overflow-hidden min-h-screen flex items-center"
        >
          {/* decorative background removed on request */}
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8" data-reveal>
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  {profile.firstName}
                  <br />
                  <span className="text-muted-foreground">{profile.lastName}</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
             <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
  Développeur Fullstack JavaScript (React & Node.js) — je conçois et implémente
  des solutions numériques <span className="text-foreground">performantes</span>, 
  centrées sur l’<span className="text-foreground">utilisateur</span>.
</p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    {profile.available ? "Disponible" : "Indisponible"}
                  </div>
                  <div>{profile.location}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0" data-reveal>
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">ACTUELLEMENT</div>
                <div className="space-y-2">
                  <div className="text-foreground">{profile.title}</div>
                  <div className="text-muted-foreground">@ {jobs[0]?.company ?? "—"}</div>
                  <div className="text-xs text-muted-foreground">{jobs[0]?.year ?? "—"} — Présent</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <ScrollFooter />


        {/* Projects */}
        <section
          id="projects"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Projets</h2>
              <div className="text-sm text-muted-foreground font-mono">Sélection</div>
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

        <section
          id="work"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-20 sm:py-32"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Selected Work</h2>
              <div className="text-sm text-muted-foreground font-mono">2019 — 2025</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  data-reveal
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job?.tech?.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="thoughts"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="min-h-screen py-20 sm:py-32"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Pensées récentes</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  data-reveal
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <span>Lire la suite</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section
          id="recommendations"
          ref={(el) => (sectionsRef.current[4] = el)}
          className="min-h-screen py-20 sm:py-32"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Recommandations</h2>

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


        <section id="connect" ref={(el) => (sectionsRef.current[5] = el)} className="py-20 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Entrons en contact</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Ouvert aux opportunités, collaborations et échanges autour de la tech et du design.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:kesraouidev@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">{profile.email}</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                  <Link
                    href="tel:0656853329"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">06 56 85 33 29</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2l2 4-2 2a16 16 0 006 6l2-2 4 2v2a2 2 0 01-2 2h-1C9.82 19 5 14.18 5 8V7a2 2 0 012-2H7" />
                    </svg>
                  </Link>

                  <div className="flex items-center gap-3 pt-2">
                    <Link
                      href="https://github.com/KesraouiMohamed1991"
                      aria-label="GitHub"
                      target="_blank"
                      rel="noreferrer"
                      className="group p-2 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                    >
                      <svg
                        className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 .5C5.649.5.5 5.649.5 12a11.5 11.5 0 007.864 10.94c.575.105.786-.247.786-.553 0-.273-.01-1.154-.015-2.095-3.2.696-3.877-1.356-3.877-1.356-.523-1.328-1.277-1.682-1.277-1.682-1.044-.714.079-.699.079-.699 1.155.081 1.763 1.186 1.763 1.186 1.027 1.761 2.695 1.253 3.35.958.104-.744.402-1.253.73-1.541-2.554-.291-5.239-1.277-5.239-5.684 0-1.255.45-2.281 1.186-3.087-.119-.29-.514-1.463.112-3.05 0 0 .967-.31 3.17 1.18a10.97 10.97 0 012.885-.388c.979.004 1.966.132 2.885.388 2.203-1.49 3.168-1.18 3.168-1.18.628 1.587.234 2.76.115 3.05.738.806 1.184 1.832 1.184 3.087 0 4.418-2.69 5.39-5.254 5.677.414.353.787 1.046.787 2.108 0 1.524-.014 2.75-.014 3.125 0 .309.208.664.794.551A11.504 11.504 0 0023.5 12C23.5 5.649 18.351.5 12 .5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>

                    <Link
                      href="https://www.linkedin.com/in/kesraouimohamed/"
                      aria-label="LinkedIn"
                      target="_blank"
                      rel="noreferrer"
                      className="group p-2 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                    >
                      <svg
                        className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M4.983 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.983 3.5zM3 9h4v12H3zM9 9h3.8v1.64h.054c.53-1.003 1.827-2.06 3.763-2.06 4.023 0 4.763 2.651 4.763 6.097V21H17v-5.31c0-1.266-.024-2.894-1.764-2.894-1.768 0-2.039 1.382-2.039 2.807V21H9z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">AILLEURS</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm overflow-hidden"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300 break-words">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground break-words">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
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

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <Link
                href="https://github.com/KesraouiMohamed1991"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M12 .5C5.649.5.5 5.649.5 12a11.5 11.5 0 007.864 10.94c.575.105.786-.247.786-.553 0-.273-.01-1.154-.015-2.095-3.2.696-3.877-1.356-3.877-1.356-.523-1.328-1.277-1.682-1.277-1.682-1.044-.714.079-.699.079-.699 1.155.081 1.763 1.186 1.763 1.186 1.027 1.761 2.695 1.253 3.35.958.104-.744.402-1.253.73-1.541-2.554-.291-5.239-1.277-5.239-5.684 0-1.255.45-2.281 1.186-3.087-.119-.29-.514-1.463.112-3.05 0 0 .967-.31 3.17 1.18a10.97 10.97 0 012.885-.388c.979.004 1.966.132 2.885.388 2.203-1.49 3.168-1.18 3.168-1.18.628 1.587.234 2.76.115 3.05.738.806 1.184 1.832 1.184 3.087 0 4.418-2.69 5.39-5.254 5.677.414.353.787 1.046.787 2.108 0 1.524-.014 2.75-.014 3.125 0 .309.208.664.794.551A11.504 11.504 0 0023.5 12C23.5 5.649 18.351.5 12 .5z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <Link
                href="https://www.linkedin.com/in/kesraouimohamed/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M4.983 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.983 3.5zM3 9h4v12H3zM9 9h3.8v1.64h.054c.53-1.003 1.827-2.06 3.763-2.06 4.023 0 4.763 2.651 4.763 6.097V21H17v-5.31c0-1.266-.024-2.894-1.764-2.894-1.768 0-2.039 1.382-2.039 2.807V21H9z" />
                </svg>
              </Link>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
