'use client'

import { Cookie } from 'lucide-react'
import { useEffect, useState } from 'react'

const CONSENT_COOKIE = 'cp_cookie_consent'

const saveConsent = (value: 'all' | 'necessary') => {
  document.cookie = `${CONSENT_COOKIE}=${value}; path=/; max-age=31536000; SameSite=Lax`
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (document.cookie.includes(`${CONSENT_COOKIE}=`)) return
    const timer = setTimeout(() => setVisible(true), 600)
    return () => clearTimeout(timer)
  }, [])

  const choose = (value: 'all' | 'necessary') => {
    saveConsent(value)
    setVisible(false)
  }

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-sm rounded-3xl border border-neutral-200/70 bg-white p-6 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.25)] transition-all duration-500 sm:mx-0 sm:left-auto sm:right-6 sm:max-w-sm ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <div className='flex items-center gap-3'>
        <span className='grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600'>
          <Cookie size={20} />
        </span>
        <h3 className='text-base font-bold text-neutral-900'>
          Máme radi cookies
        </h3>
      </div>

      <p className='mt-3 text-sm leading-relaxed text-neutral-600'>
        Používame ich, aby web správne fungoval a aby sme z anonymných štatistík
        vedeli, čo vám pomáha. Svoju voľbu môžete kedykoľvek zmeniť.
      </p>

      <div className='mt-5 flex flex-col gap-2 sm:flex-row'>
        <button
          type='button'
          onClick={() => choose('all')}
          className='flex-1 cursor-pointer rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/25 transition hover:bg-blue-700'
        >
          Prijať všetky
        </button>
        <button
          type='button'
          onClick={() => choose('necessary')}
          className='flex-1 cursor-pointer rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-50'
        >
          Len nevyhnutné
        </button>
      </div>
    </div>
  )
}
