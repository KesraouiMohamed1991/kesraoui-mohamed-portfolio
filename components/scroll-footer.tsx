'use client'

import React, { useEffect, useRef } from 'react'

export default function ScrollFooter() {
  const container = useRef<HTMLDivElement | null>(null)
  const paths = useRef<SVGTextPathElement[]>([])
  const inner = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const el = container.current
    if (!el) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      // progress based on how much the section is within viewport span
      // 0 when section just enters from below, 1 when fully aligned at bottom
      const denom = Math.max(rect.height + vh, 1)
      let progress = (vh - rect.top) / denom
      progress = Math.min(1, Math.max(0, progress))

      // move text along curve
      paths.current.forEach((path, i) => {
        if (!path) return
        path.setAttribute('startOffset', `${-40 + i * 40 + progress * 40}%`)
      })

      // translate logos
      const y = -250 + progress * 250
      if (inner.current) inner.current.style.transform = `translateY(${y}px)`
    }

    if (prefersReduced) {
      // set to final state without animating
      paths.current.forEach((path, i) => {
        if (!path) return
        path.setAttribute('startOffset', `${-40 + i * 40 + 40}%`)
      })
      if (inner.current) inner.current.style.transform = `translateY(0px)`
      return
    }

    const onFrame = () => {
      update()
      rafRef.current = requestAnimationFrame(onFrame)
    }
    rafRef.current = requestAnimationFrame(onFrame)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div ref={container} className="select-none">
      <svg className="w-full mb-12" viewBox="0 0 250 90" aria-hidden>
        <path
          fill="none"
          id="curve-scroll"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text className="text-[4px] uppercase fill-current text-muted-foreground">
          {Array.from({ length: 3 }).map((_, i) => (
            <textPath
              key={i}
              ref={(ref) => {
                if (ref) paths.current[i] = ref
              }}
              startOffset={`${i * 40}%`}
              href="#curve-scroll"
            >
              Calimo Agency — Branding • Web • Growth
            </textPath>
          ))}
        </text>
      </svg>
      {/* <div className="h-[220px] bg-secondary overflow-hidden rounded-lg border border-border">
        <div ref={inner} className="h-full flex justify-center gap-10 items-center p-10 will-change-transform">
          {Array.from({ length: 6 }).map((_, i) => (
            <img
              key={`logo_${i}`}
              src="/placeholder-logo.svg"
              alt="Logo"
              className="w-[80px] h-[80px] opacity-70"
            />
          ))}
        </div>
      </div> */}
    </div>
  )
}
