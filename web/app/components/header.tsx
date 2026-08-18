'use client'

import { ArrowRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { navLinks } from '@/components/app/nav-links'
import { Logo } from '@/components/app/logo'

const sectionIds = navLinks.map(({ href }) => href.split('#')[1])

export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const visible = new Map<string, number>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRect.height)
          } else {
            visible.delete(entry.target.id)
          }
        }
        let topId = ''
        let topHeight = 0
        for (const [id, height] of visible) {
          if (height > topHeight) {
            topHeight = height
            topId = id
          }
        }
        setActive(topId)
      },
      { rootMargin: '-35% 0px -60% 0px' }
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header className='sticky top-0 z-50 w-full border-b border-neutral-200/70 bg-white/85 backdrop-blur-md'>
      <div className='mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Logo onClick={() => setOpen(false)} />

        <nav className='hidden items-center gap-1 lg:flex'>
          {navLinks.map(({ label, href }) => {
            const id = href.split('#')[1]
            const isActive = active === id
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? 'true' : undefined}
                className={`rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-neutral-700 hover:text-neutral-900'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <div className='hidden items-center gap-4 lg:flex'>
          <Link
            href='/#cta'
            className='text-[15px] font-medium text-neutral-700 transition-colors hover:text-neutral-900'
          >
            Prihlásiť sa
          </Link>
          <Link
            href='/#cta'
            className='inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-[15px] font-semibold text-white shadow-sm shadow-blue-600/20 transition hover:bg-blue-700'
          >
            Začať zadarmo
          </Link>
        </div>

        <button
          type='button'
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Zavrieť menu' : 'Otvoriť menu'}
          aria-expanded={open}
          className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 transition hover:bg-neutral-50 lg:hidden'
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className='h-[3px] w-full'
        style={{
          background:
            'linear-gradient(90deg, #2563eb 0%, #0ea5e9 45%, #22c55e 100%)',
        }}
      />

      {open && (
        <nav className='flex flex-col gap-1 border-t border-neutral-200 bg-white px-4 py-4 lg:hidden'>
          {navLinks.map(({ label, href }) => {
            const id = href.split('#')[1]
            const isActive = active === id
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-neutral-800 hover:bg-neutral-50'
                }`}
              >
                {label}
              </Link>
            )
          })}
          <div className='mt-2 flex flex-col gap-3'>
            <Link
              href='/#cta'
              onClick={() => setOpen(false)}
              className='inline-flex items-center justify-center rounded-full border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-50'
            >
              Prihlásiť sa
            </Link>
            <Link
              href='/#cta'
              onClick={() => setOpen(false)}
              className='inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700'
            >
              Začať zadarmo
              <ArrowRight size={18} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
