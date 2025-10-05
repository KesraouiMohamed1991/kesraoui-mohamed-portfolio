'use client'

import { useEffect } from 'react'

const DEFAULT_DISTANCE = 24
const DEFAULT_DURATION = 0.6
const DEFAULT_EASING = 'cubic-bezier(0.16, 1, 0.3, 1)'

const parseNumber = (value: string | undefined, fallback: number) => {
  if (!value) return fallback
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : fallback
}

const normalizeDirection = (value: string | undefined) => {
  if (!value) return 'up'
  const normalized = value.toLowerCase()
  switch (normalized) {
    case 'up':
    case 'down':
    case 'left':
    case 'right':
    case 'in':
    case 'out':
    case 'scale':
    case 'zoom':
      return normalized
    default:
      return 'up'
  }
}

const buildTransform = (direction: string, distance: number, scale: number) => {
  const transforms: string[] = []

  switch (direction) {
    case 'down':
      transforms.push(`translate3d(0, ${-distance}px, 0)`)
      break
    case 'left':
      transforms.push(`translate3d(${distance}px, 0, 0)`)
      break
    case 'right':
      transforms.push(`translate3d(${-distance}px, 0, 0)`)
      break
    case 'up':
    default:
      transforms.push(`translate3d(0, ${distance}px, 0)`)
      break
  }

  if (direction === 'out') transforms.push(`scale(${Math.max(1, scale)})`)
  else if (direction === 'in' || direction === 'zoom' || direction === 'scale') transforms.push(`scale(${Math.min(1, scale)})`)
  else if (scale !== 1) transforms.push(`scale(${scale})`)

  return transforms.join(' ')
}

export function ScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches

    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!elements.length) return

    if (prefersReduced || isCoarsePointer) {
      elements.forEach((el) => el.classList.add('is-revealed'))
      return
    }

    document.documentElement.classList.add('reveal-enabled')

    const staggerRegistry = new Map<HTMLElement, number>()

    const prepare = (el: HTMLElement) => {
      if (el.classList.contains('is-revealed')) return

      const direction = normalizeDirection(el.dataset.revealFrom)
      const distance = parseNumber(el.dataset.revealDistance, DEFAULT_DISTANCE)
      const duration = parseNumber(el.dataset.revealDuration, DEFAULT_DURATION)
      const baseDelay = parseNumber(el.dataset.revealDelay, 0)
      const easing = el.dataset.revealEasing ?? DEFAULT_EASING
      const scale = parseNumber(el.dataset.revealScale, direction === 'out' ? 1.08 : direction === 'in' ? 0.94 : 1)

      const staggerContainer = el.closest<HTMLElement>('[data-reveal-stagger]')
      let delay = baseDelay
      if (staggerContainer) {
        const step = parseNumber(staggerContainer.dataset.revealStagger, 0.08)
        const currentIndex = staggerRegistry.get(staggerContainer) ?? 0
        delay += step * currentIndex
        staggerRegistry.set(staggerContainer, currentIndex + 1)
      }

      el.dataset.revealResolvedDelay = `${delay}`
      el.style.opacity = '0'
      el.style.transform = buildTransform(direction, distance, scale)
      el.style.transitionProperty = 'opacity, transform'
      el.style.transitionDuration = `${duration}s`
      el.style.transitionTimingFunction = easing
      el.style.transitionDelay = `${delay}s`
      el.style.willChange = 'opacity, transform'
    }

    elements.forEach(prepare)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const el = entry.target as HTMLElement
          el.classList.add('is-revealed')

          requestAnimationFrame(() => {
            el.style.opacity = '1'
            el.style.transform = 'translate3d(0, 0, 0)'
          })

          const duration = parseNumber(el.dataset.revealDuration, DEFAULT_DURATION)
          const delay = parseNumber(el.dataset.revealResolvedDelay, parseNumber(el.dataset.revealDelay, 0))
          const total = (duration + delay) * 1000 + 200
          window.setTimeout(() => {
            el.style.willChange = ''
            el.style.removeProperty('transition-delay')
            delete el.dataset.revealResolvedDelay
          }, total)

          observer.unobserve(el)
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -12% 0px' }
    )

    elements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('reveal-enabled')
    }
  }, [])

  return null
}
