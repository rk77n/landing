'use client'

import { useEffect } from 'react'

export function AnchorScroll() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const target = e.target instanceof Element ? e.target : null
      const anchor = target?.closest('a[href*="#"]')
      if (!(anchor instanceof HTMLAnchorElement)) return
      const url = new URL(anchor.href)
      if (url.origin !== window.location.origin) return
      if (url.pathname !== window.location.pathname) return
      const id = decodeURIComponent(url.hash.slice(1))
      const el = id ? document.getElementById(id) : null
      if (!el) return
      e.preventDefault()
      el.scrollIntoView()
      if (window.location.hash !== url.hash) {
        history.pushState(null, '', `${url.pathname}${url.hash}`)
      }
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
