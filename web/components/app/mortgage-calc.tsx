'use client'

import { Home } from 'lucide-react'
import { useState } from 'react'

const KOEFICIENT = 8.72755

const FORMY = {
  szco: {
    label: 'Živnosť (SZČO)',
    methods: [10, 35, 60],
    methodsLabel: 'Metodika banky, % akceptácie tržieb',
  },
  sro: {
    label: 's.r.o.',
    methods: [30, 50, 70],
    methodsLabel: 'Metodika banky, % akceptácie zisku',
  },
} as const

type Forma = keyof typeof FORMY

const formatEur = (value: number) =>
  `${Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} €`

const fillStyle = (value: number, max: number) => ({
  background: `linear-gradient(to right, #2563eb ${(value / max) * 100}%, #e5e7eb ${
    (value / max) * 100
  }%)`,
})

export function MortgageCalc() {
  const [forma, setForma] = useState<Forma>('szco')
  const [trzby, setTrzby] = useState(235000)
  const [zaklad, setZaklad] = useState(29000)
  const [zisk, setZisk] = useState(48000)
  const [mzda, setMzda] = useState(1200)
  const [method, setMethod] = useState<number>(10)

  const estimate = (pct: number) =>
    (forma === 'szco'
      ? Math.max((trzby * pct) / 100, zaklad)
      : (zisk * pct) / 100 + mzda * 12) * KOEFICIENT

  const switchForma = (f: Forma) => {
    setForma(f)
    setMethod(FORMY[f].methods[0])
  }

  const sliders =
    forma === 'szco'
      ? [
          { label: 'Ročné tržby', value: trzby, set: setTrzby, max: 500000, step: 5000 },
          { label: 'Základ dane (ročný)', value: zaklad, set: setZaklad, max: 200000, step: 1000 },
        ]
      : [
          { label: 'Ročný zisk po zdanení', value: zisk, set: setZisk, max: 200000, step: 1000 },
          { label: 'Hrubá mzda konateľa (mesačná)', value: mzda, set: setMzda, max: 5000, step: 100 },
        ]

  return (
    <div className='rounded-3xl border border-neutral-200/70 bg-white p-6 shadow-xl shadow-neutral-900/[0.06] sm:p-8'>
      <div className='flex items-center gap-3'>
        <span className='grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600'>
          <Home size={20} />
        </span>
        <h3 className='text-lg font-bold text-neutral-900'>
          Rýchla kalkulačka hypotéky pre podnikateľov
        </h3>
      </div>

      <div className='mt-6 grid grid-cols-2 gap-1.5 rounded-full bg-neutral-100 p-1.5'>
        {(Object.keys(FORMY) as Forma[]).map((f) => {
          const active = forma === f
          return (
            <button
              key={f}
              type='button'
              onClick={() => switchForma(f)}
              aria-pressed={active}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                active
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/25'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              {FORMY[f].label}
            </button>
          )
        })}
      </div>

      <div className='mt-7 space-y-6'>
        {sliders.map((slider) => (
          <div key={slider.label}>
            <div className='flex items-center justify-between'>
              <label className='text-sm font-semibold text-neutral-700'>
                {slider.label}
              </label>
              <span className='font-bold text-blue-600'>
                {formatEur(slider.value)}
              </span>
            </div>
            <input
              type='range'
              min={0}
              max={slider.max}
              step={slider.step}
              value={slider.value}
              onChange={(e) => slider.set(Number(e.target.value))}
              className='range-slider mt-3'
              style={fillStyle(slider.value, slider.max)}
              aria-label={slider.label}
            />
          </div>
        ))}
      </div>

      <p className='mt-7 text-sm font-semibold text-neutral-700'>
        {FORMY[forma].methodsLabel}
      </p>
      <div className='mt-3 grid grid-cols-3 gap-2'>
        {FORMY[forma].methods.map((pct) => {
          const active = method === pct
          return (
            <button
              key={pct}
              type='button'
              onClick={() => setMethod(pct)}
              className={`rounded-2xl px-3 py-3 text-center transition ${
                active
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/25'
                  : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200/70'
              }`}
            >
              <div className='text-base font-bold'>{pct} %</div>
              <div
                className={`mt-0.5 text-xs ${
                  active ? 'text-blue-100' : 'text-neutral-400'
                }`}
              >
                {formatEur(estimate(pct))}
              </div>
            </button>
          )
        })}
      </div>

      <div className='mt-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 px-6 py-7 text-center shadow-lg shadow-blue-600/30'>
        <p className='text-xs font-semibold tracking-[0.14em] text-blue-100'>
          ODHADOVANÁ MAX. HYPOTÉKA
        </p>
        <p className='mt-2 text-4xl font-extrabold text-white sm:text-5xl'>
          {formatEur(estimate(method))}
        </p>
      </div>

      <p className='mt-4 text-center text-xs text-neutral-400'>
        Orientačný výpočet 2026 · presné metodiky preberáme od partnerov
      </p>
    </div>
  )
}
