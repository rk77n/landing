'use client'

import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from 'react'

type RevealProps = ComponentPropsWithoutRef<'div'> & {
  /** Oneskorenie nábehu v ms (pre postupné objavovanie viacerých prvkov). */
  delay?: number
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        // Mierny "overshoot" pre pop-up dojem
        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        ...style,
      }}
      className={`transition-all duration-700 will-change-transform ${
        visible ? 'scale-100 opacity-100 blur-0' : 'scale-90 opacity-0 blur-sm'
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
