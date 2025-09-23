'use client'

import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import Lenis from '@studio-freight/lenis'

const LenisContext = createContext<Lenis | null>(null)

export function useLenis() {
  return useContext(LenisContext)
}

export function LenisProvider({ children }: { children?: React.ReactNode }) {
  const [instance, setInstance] = useState<Lenis | null>(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const isMobile = window.matchMedia('(pointer: coarse)').matches

    const lenis = new Lenis({
      duration: isMobile ? 0.8 : 1.1,
      smoothWheel: true,
      syncTouch: true,
      gestureOrientation: 'vertical',
    })
    setInstance(lenis)

    const raf = (time: number) => {
      // @ts-expect-error lenis types may vary by version
      lenis.raf(time)
      rafRef.current = requestAnimationFrame(raf)
    }
    rafRef.current = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafRef.current)
      // @ts-expect-error destroy exists at runtime
      lenis.destroy?.()
      setInstance(null)
    }
  }, [])

  return <LenisContext.Provider value={instance}>{children}</LenisContext.Provider>
}
