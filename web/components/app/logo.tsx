'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function LogoMark({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src='/logo-cp.svg'
      alt=''
      aria-hidden
      width={36}
      height={36}
      className={cn('h-9 w-9 shrink-0', className)}
    />
  )
}

export function Logo({
  className,
  markClassName,
  onClick,
}: {
  className?: string
  markClassName?: string
  onClick?: () => void
}) {
  const pathname = usePathname()

  return (
    <Link
      href='/'
      onClick={(e) => {
        // Na domovskej stránke neprenavigúvame, len plynulo posunieme na vrch
        if (pathname === '/') {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        onClick?.()
      }}
      className={cn('flex items-center gap-2.5', className)}
    >
      <LogoMark className={markClassName} />
      <span className='text-lg font-extrabold tracking-tight text-neutral-900'>
        Cesta Podnikateľa
      </span>
    </Link>
  )
}
