'use client'

import { ArrowRight, Check } from 'lucide-react'
import { type FormEvent, useState } from 'react'

// Farby míľnikov na krivke = paleta loga (tyrkys → zelená → limetka).
const LOGO_TEAL = '#17b2b3'
const LOGO_GREEN = '#43b967'
const LOGO_LIME = '#84cd1a'

const reassurances = ['Bez záväzkov', 'Zadarmo', 'Odhlásenie jedným klikom']

export function Cta() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: e-mail sa zatiaľ nikam neukladá – pred spustením ostrej verzie
    // napojiť na backend/ESP (API route, Mailchimp, Resend...).
    setSent(true)
  }

  return (
    <section id='cta' className='section'>
      <div className='relative overflow-hidden rounded-[2rem] bg-blue-600 px-6 py-16 text-center shadow-glow-blue-lg sm:px-12 sm:py-20'>
        {/* Dekoratívna bodkovaná cesta s míľnikmi – motív značky */}
        <svg
          aria-hidden='true'
          className='pointer-events-none absolute inset-x-0 top-0 h-40 w-full sm:h-52'
          viewBox='0 0 1200 260'
          preserveAspectRatio='xMidYMin slice'
          fill='none'
        >
          <path
            d='M-40 170 Q 300 10 640 90 T 1240 70'
            stroke='white'
            strokeOpacity='0.35'
            strokeWidth='4'
            strokeLinecap='round'
            strokeDasharray='0.5 16'
          />
          <circle cx='198' cy='87' r='7' fill={LOGO_TEAL} />
          <circle cx='413' cy='63' r='7' fill={LOGO_GREEN} />
          <circle cx='960' cy='125' r='7' fill={LOGO_LIME} />
        </svg>

        <div className='relative'>
          <p className='text-xs font-bold uppercase tracking-[0.25em] text-sky-300'>
            Prvý míľnik zadarmo
          </p>

          <h2 className='mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl'>
            Začnite svoju cestu ešte dnes
          </h2>

          <p className='mx-auto mt-5 max-w-[26rem] text-lg leading-relaxed text-blue-100'>
            Pripravíme vám prvý míľnik na mieru priamo do schránky.
          </p>

          {sent ? (
            <div
              role='status'
              className='mx-auto mt-9 flex min-h-14 max-w-xl flex-wrap items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-base font-semibold text-white'
            >
              <Check size={18} className='shrink-0 text-[#84cd1a]' />
              Ďakujeme! Prvý míľnik poletí na {email}.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className='mx-auto mt-9 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:gap-4'
            >
              <label htmlFor='cta-email' className='sr-only'>
                Váš e-mail
              </label>
              <input
                id='cta-email'
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='vas@email.sk'
                className='h-14 w-full min-w-0 rounded-full bg-white px-6 text-base text-neutral-900 shadow-lg shadow-blue-900/20 outline-none transition placeholder:text-neutral-400 focus:ring-4 focus:ring-white/30 sm:flex-1'
              />
              <button
                type='submit'
                className='group inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-[#84cd1a] px-8 text-base font-bold text-neutral-900 shadow-lg shadow-blue-900/20 transition hover:bg-[#78bb15]'
              >
                Získať míľnik
                {/* -top-px: optická korekcia – diakritika dvíha ťažisko
                    textu, geometrický stred pôsobí nízko. */}
                <ArrowRight
                  size={18}
                  className='relative -top-px transition-transform duration-200 group-hover:translate-x-1.5'
                />
              </button>
            </form>
          )}

          <ul className='mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-blue-100'>
            {reassurances.map((item) => (
              <li key={item} className='flex items-center gap-1.5'>
                <Check size={15} className='shrink-0 text-[#84cd1a]' />
                {item}
              </li>
            ))}
          </ul>

          <div className='mt-9 flex flex-wrap items-center justify-center gap-3'>
            <div className='flex shrink-0 -space-x-2'>
              <span className='grid h-9 w-9 place-items-center rounded-full bg-[#17b2b3] text-xs font-bold text-white ring-2 ring-blue-600'>
                MK
              </span>
              <span className='grid h-9 w-9 place-items-center rounded-full bg-[#43b967] text-xs font-bold text-white ring-2 ring-blue-600'>
                JT
              </span>
              <span className='grid h-9 w-9 place-items-center rounded-full bg-sky-500 text-xs font-bold text-white ring-2 ring-blue-600'>
                +
              </span>
            </div>
            {/* TODO: „1 200+" je placeholder z návrhu – dosadiť reálne číslo,
                alebo avatary aj číslo odstrániť a nechať len vetu. */}
            <p className='text-sm text-blue-50'>
              Pridajte sa k 1&nbsp;200+ podnikateľom, ktorí majú povinnosti
              pod kontrolou.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
