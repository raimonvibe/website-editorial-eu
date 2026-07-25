'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { TOUR, TourStep, firstStepOnPage, normalisePath } from '@/data/tour'
import styles from '@/styles/tour.module.css'

/*
  Spotlight walkthrough, ported from raimonvibe/responsive_web_design.

  The one structural difference from the original: that site navigated with
  `location.href` and rebuilt the tour on each page, so it needed sessionStorage
  to resume. Here the component lives in the root layout and survives client-side
  navigation, so the step index simply stays in React state across pages. What it
  does need instead is to wait for the next page's DOM before measuring — hence
  the retry in `resolveTarget`.
*/

const DONE_KEY = 'rv-tour-eu-v1-done'
const AUTOSTART_DELAY = 900
/** How long to keep looking for a step's element after a page change. */
const TARGET_RETRY_MS = 2500
const TARGET_RETRY_STEP = 60

function readStore(key: string): string | null {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

function writeStore(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    // Private browsing: the tour simply won't remember it has run.
  }
}

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function clamp(value: number, min: number, max: number) {
  if (max < min) return min
  return Math.min(Math.max(value, min), max)
}

function isVisible(el: Element | null): el is HTMLElement {
  if (!el || !el.getClientRects().length) return false
  const style = window.getComputedStyle(el)
  return style.visibility !== 'hidden' && style.display !== 'none'
}

export default function GuidedTour() {
  const pathname = usePathname()
  const router = useRouter()

  const [flow, setFlow] = useState<TourStep[]>([])
  const [index, setIndex] = useState(-1)
  const [running, setRunning] = useState(false)
  const [visible, setVisible] = useState(false)
  const [mode, setMode] = useState<'spot' | 'center'>('center')
  const [showLauncher, setShowLauncher] = useState(true)
  const [pulse, setPulse] = useState(false)

  const spotRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const launcherRef = useRef<HTMLButtonElement>(null)
  const targetRef = useRef<HTMLElement | null>(null)
  const placedRef = useRef(false)
  const frameRef = useRef<number | null>(null)

  const step = index >= 0 && index < flow.length ? flow[index] : null

  /* Positioning ---------------------------------------------------------- */

  const reposition = useCallback(() => {
    const spot = spotRef.current
    const card = cardRef.current
    if (!spot || !card) return

    const el = targetRef.current
    const rect = el ? el.getBoundingClientRect() : null
    const vw = window.innerWidth
    const vh = window.innerHeight

    if (rect) {
      const pad = 10
      spot.style.top = `${rect.top - pad}px`
      spot.style.left = `${rect.left - pad}px`
      spot.style.width = `${rect.width + pad * 2}px`
      spot.style.height = `${rect.height + pad * 2}px`
    }

    // Below 737px the card is docked to the bottom by CSS.
    if (vw <= 736) return

    const cw = card.offsetWidth
    const ch = card.offsetHeight
    const gap = 18
    const edge = 18
    let top: number
    let left: number

    // A target that fills most of the screen can't be cleared, only annotated.
    const oversized =
      !!rect && (rect.height > vh * 0.62 || rect.width * rect.height > vw * vh * 0.42)

    if (!rect) {
      left = (vw - cw) / 2
      top = (vh - ch) / 2
    } else if (oversized) {
      if (rect.right + gap + cw <= vw - edge) {
        left = rect.right + gap
        top = (vh - ch) / 2
      } else if (rect.left - gap - cw >= edge) {
        left = rect.left - gap - cw
        top = (vh - ch) / 2
      } else {
        // Nothing fits beside it: park in the corner as an annotation.
        left = vw - cw - edge
        top = vh - ch - edge
      }
    } else if (rect.bottom + gap + ch <= vh - edge) {
      top = rect.bottom + gap
      left = rect.left + rect.width / 2 - cw / 2
    } else if (rect.top - gap - ch >= edge) {
      top = rect.top - gap - ch
      left = rect.left + rect.width / 2 - cw / 2
    } else if (rect.right + gap + cw <= vw - edge) {
      left = rect.right + gap
      top = rect.top + rect.height / 2 - ch / 2
    } else if (rect.left - gap - cw >= edge) {
      left = rect.left - gap - cw
      top = rect.top + rect.height / 2 - ch / 2
    } else {
      left = vw - cw - edge
      top = vh - ch - edge
    }

    card.style.top = `${clamp(top, edge, vh - ch - edge)}px`
    card.style.left = `${clamp(left, edge, vw - cw - edge)}px`
  }, [])

  const queueReposition = useCallback(() => {
    if (frameRef.current !== null) return
    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null
      reposition()
    })
  }, [reposition])

  /* Lifecycle ------------------------------------------------------------ */

  const start = useCallback(
    (at?: number) => {
      const width = window.innerWidth
      const active = TOUR.filter((s) => !s.minWidth || width >= s.minWidth)
      if (!active.length) return

      let from =
        typeof at === 'number' ? at : firstStepOnPage(pathname ?? '/', active)
      if (from < 0) from = 0

      placedRef.current = false
      setFlow(active)
      setIndex(from)
      setRunning(true)
      setShowLauncher(false)
    },
    [pathname]
  )

  const finish = useCallback(
    (skipped: boolean) => {
      writeStore(DONE_KEY, skipped ? 'skipped' : 'completed')
      setVisible(false)
      setRunning(false)
      setIndex(-1)
      targetRef.current = null
      setPulse(false)
      setShowLauncher(true)
      window.setTimeout(
        () => launcherRef.current?.focus(),
        prefersReducedMotion() ? 0 : 260
      )
    },
    []
  )

  const goTo = useCallback(
    (next: number) => {
      if (next < 0) return
      if (next >= flow.length) {
        finish(false)
        return
      }
      placedRef.current = placedRef.current && flow[next].page === flow[index]?.page
      setIndex(next)
    },
    [flow, index, finish]
  )

  const restart = useCallback(() => {
    placedRef.current = false
    setIndex(0)
  }, [])

  /* Resolve the current step's element, then place the spotlight ---------- */

  useEffect(() => {
    if (!running || !step) return

    // On a different page than this step wants: navigate and let the effect
    // re-run once `pathname` catches up.
    if (normalisePath(pathname ?? '/') !== step.page) {
      router.push(step.page === '/' ? '/' : `${step.page}/`)
      return
    }

    let cancelled = false
    let waited = 0

    const settle = (el: HTMLElement | null) => {
      if (cancelled) return
      targetRef.current = el
      setMode(el ? 'spot' : 'center')

      const place = () => {
        if (cancelled) return
        const spot = spotRef.current
        if (!placedRef.current && spot) {
          // Without this the spotlight animates out of the top-left corner.
          placedRef.current = true
          spot.classList.add(styles.spotInstant)
          reposition()
          window.setTimeout(() => {
            spotRef.current?.classList.remove(styles.spotInstant)
          }, 60)
        } else {
          reposition()
        }
        window.requestAnimationFrame(reposition)
      }

      if (!el) {
        place()
        return
      }

      const rect = el.getBoundingClientRect()
      if (rect.top >= 80 && rect.bottom <= window.innerHeight - 24) {
        place()
        return
      }

      if (prefersReducedMotion()) {
        el.scrollIntoView({ block: 'center', inline: 'nearest' })
        place()
        return
      }

      el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })

      // Wait for the smooth scroll to settle before measuring. Polled on a timer
      // rather than animation frames, which are suspended in a hidden tab.
      let last: number | null = null
      let stable = 0
      const deadline = Date.now() + 1200
      const poll = () => {
        if (cancelled) return
        const y = window.scrollY
        stable = y === last ? stable + 1 : 0
        last = y
        // Give up on elapsed time rather than a count of iterations: a hidden
        // tab clamps timers to roughly a second, which would stretch a
        // 45-iteration budget out to three quarters of a minute before the
        // spotlight ever moved.
        if (stable >= 3 || Date.now() > deadline) {
          place()
          return
        }
        window.setTimeout(poll, 32)
      }
      poll()
    }

    if (!step.target) {
      settle(null)
      return () => {
        cancelled = true
      }
    }

    // After a client-side navigation the new page may not have painted yet.
    const look = () => {
      if (cancelled) return
      const el = document.querySelector(step.target as string)
      if (isVisible(el)) {
        settle(el)
        return
      }
      waited += TARGET_RETRY_STEP
      if (waited >= TARGET_RETRY_MS) {
        // Give up on the spotlight and show the step centred rather than stall.
        settle(null)
        return
      }
      window.setTimeout(look, TARGET_RETRY_STEP)
    }
    look()

    return () => {
      cancelled = true
    }
  }, [running, step, pathname, router, reposition])

  /* Fade in once running -------------------------------------------------- */

  useEffect(() => {
    if (!running) return
    const timer = window.setTimeout(() => {
      setVisible(true)
      nextRef.current?.focus()
    }, 20)
    return () => window.clearTimeout(timer)
  }, [running])

  /* Track scroll and resize ---------------------------------------------- */

  useEffect(() => {
    if (!running) return
    window.addEventListener('scroll', queueReposition, true)
    window.addEventListener('resize', queueReposition)
    document.addEventListener('visibilitychange', reposition)
    return () => {
      window.removeEventListener('scroll', queueReposition, true)
      window.removeEventListener('resize', queueReposition)
      document.removeEventListener('visibilitychange', reposition)
    }
  }, [running, queueReposition, reposition])

  /* Keyboard -------------------------------------------------------------- */

  useEffect(() => {
    if (!running) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        finish(true)
        return
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        goTo(index + 1)
        return
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        if (index > 0) goTo(index - 1)
        return
      }
      if (event.key !== 'Tab') return

      const card = cardRef.current
      if (!card) return
      const focusable = Array.from(
        card.querySelectorAll<HTMLElement>('button, a[href]')
      ).filter((el) => el.offsetParent !== null)
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (
        event.shiftKey &&
        (document.activeElement === first || document.activeElement === card)
      ) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown, true)
    return () => document.removeEventListener('keydown', onKeyDown, true)
  }, [running, index, goTo, finish])

  /* Boot ------------------------------------------------------------------ */

  useEffect(() => {
    const done = readStore(DONE_KEY)
    setShowLauncher(true)
    setPulse(!done)

    if (done) return
    // Only the homepage auto-starts: someone arriving on an inner page from a
    // search result should get the content, not an overlay.
    if (normalisePath(pathname ?? '/') !== '/') return

    const timer = window.setTimeout(() => start(0), AUTOSTART_DELAY)
    return () => window.clearTimeout(timer)
    // Deliberately runs once on mount: re-running on every route change would
    // re-trigger the auto-start mid-tour.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* Render ---------------------------------------------------------------- */

  const isLast = index === flow.length - 1
  const total = flow.length

  return (
    <>
      <button
        type="button"
        ref={launcherRef}
        className={`${styles.launcher} ${showLauncher && !running ? '' : styles.launcherHidden}`}
        aria-label="Take the guided tour of this site"
        aria-hidden={running}
        onClick={() => start()}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M15.6 8.4 13.2 13.2 8.4 15.6 10.8 10.8Z" />
        </svg>
        <span>Tour</span>
        {pulse && <span className={styles.launcherPulse} />}
      </button>

      {running && step && (
        <div
          className={[
            styles.tour,
            visible ? styles.tourVisible : '',
            mode === 'spot' ? styles.modeSpot : styles.modeCenter,
          ]
            .filter(Boolean)
            .join(' ')}
          role="dialog"
          aria-modal="true"
          aria-labelledby="rv-tour-title"
        >
          <div className={styles.blocker} />
          <div className={styles.veil} />
          <div ref={spotRef} className={styles.spot} />

          <div
            ref={cardRef}
            className={`${styles.card} ${step.cta ? styles.cardWithCta : ''}`}
            tabIndex={-1}
          >
            <button
              type="button"
              className={styles.close}
              aria-label="Close tour"
              onClick={() => finish(true)}
            >
              &times;
            </button>

            <p className={styles.count} aria-live="polite">
              Step {index + 1} of {total}
            </p>
            <h2 className={styles.title} id="rv-tour-title">
              {step.title}
            </h2>
            <div
              className={styles.body}
              dangerouslySetInnerHTML={{ __html: step.body }}
            />

            <ul className={styles.dots}>
              {flow.map((s, i) => (
                <li key={`${s.page}-${i}`}>
                  <span
                    className={[
                      styles.dot,
                      i < index ? styles.dotDone : '',
                      i === index ? styles.dotCurrent : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  />
                </li>
              ))}
            </ul>

            {step.cta ? (
              <div className={`${styles.nav} ${styles.navWithCta}`}>
                <div className={styles.navTop}>
                  <button
                    type="button"
                    className={styles.quiet}
                    onClick={() => finish(true)}
                  >
                    {isLast ? 'Close' : 'Skip'}
                  </button>
                </div>

                <div className={styles.navCta}>
                  <a
                    href={step.cta.href}
                    className={`${styles.primary} ${styles.ctaLink}`}
                    target={step.cta.external ? '_blank' : undefined}
                    rel={step.cta.external ? 'noopener noreferrer' : undefined}
                  >
                    {step.cta.label}
                  </a>
                </div>

                <div className={styles.navActions}>
                  {step.restart ? (
                    <button type="button" onClick={restart}>
                      Restart
                    </button>
                  ) : (
                    index > 0 && (
                      <button type="button" onClick={() => goTo(index - 1)}>
                        Back
                      </button>
                    )
                  )}
                  <button
                    type="button"
                    ref={nextRef}
                    className={styles.nextSecondary}
                    onClick={() => goTo(index + 1)}
                  >
                    {isLast ? 'Finish' : 'Next'}
                  </button>
                </div>
              </div>
            ) : (
              <div className={styles.nav}>
                <button
                  type="button"
                  className={styles.quiet}
                  onClick={() => finish(true)}
                >
                  {isLast ? 'Close' : 'Skip'}
                </button>
                <span className={styles.spacer} />
                {step.restart ? (
                  <button type="button" onClick={restart}>
                    Restart
                  </button>
                ) : (
                  index > 0 && (
                    <button type="button" onClick={() => goTo(index - 1)}>
                      Back
                    </button>
                  )
                )}
                <button
                  type="button"
                  ref={nextRef}
                  className={styles.primary}
                  onClick={() => goTo(index + 1)}
                >
                  {isLast ? 'Finish' : 'Next'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
