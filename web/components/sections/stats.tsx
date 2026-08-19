'use client'

import { Fragment, useEffect, useRef, useState } from 'react'

// Štatistiky sa dopĺňajú len v tomto poli. Prípona sa neanimuje,
// vykresľuje sa staticky vedľa čísla.
const stats = [
  { value: 50, suffix: '+', label: 'biznis momentov' },
  { value: 20, suffix: '+', label: 'finančných kalkulačiek' },
  { value: 0, suffix: ' €', label: 'na začiatok' },
]

const DURATION = 1000

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  // SSR aj no-JS vykreslia rovno finálne hodnoty; na 0 sa nulujú až na
  // klientovi pred prvým zobrazením (a len keď je animácia povolená).
  const [display, setDisplay] = useState(stats.map((s) => s.value))
  const [revealed, setRevealed] = useState(true)
  const startedRef = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = sectionRef.current
    if (!el) return

    setDisplay(stats.map(() => 0))
    setRevealed(false)

    const io = new IntersectionObserver(
      (entries) => {
        if (startedRef.current || !entries.some((e) => e.isIntersecting)) {
          return
        }
        startedRef.current = true
        io.disconnect()
        setRevealed(true)
        const t0 = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - t0) / DURATION, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setDisplay(stats.map((s) => Math.round(s.value * eased)))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className='mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8'
    >
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0'>
        {stats.map((stat, i) => (
          <Fragment key={stat.label}>
            {i > 0 && (
              /* Na mobile krátka vodorovná čiara medzi položkami,
                 od sm ju nahrádza zvislý border na stĺpci. */
              <span
                aria-hidden='true'
                className='mx-auto h-px w-10 bg-[#e2dfd9] sm:hidden'
              />
            )}
            <div
              className={`text-center ${
                i > 0 ? 'sm:border-l sm:border-[#e2dfd9]' : ''
              }`}
            >
              <div
                className={`text-[32px] font-extrabold tracking-tight text-[#416fdf] sm:text-[40px] ${
                  stat.value === 0
                    ? `transition-all duration-700 ${
                        revealed
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-2 opacity-0'
                      }`
                    : ''
                }`}
              >
                {display[i]}
                {stat.suffix}
              </div>
              <div className='mt-1 text-sm text-[#6d6c68]'>{stat.label}</div>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  )
}
