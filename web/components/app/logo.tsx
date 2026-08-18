import Link from 'next/link'
import { cn } from '@/lib/utils'

const stripes =
  'repeating-linear-gradient(135deg, #2563eb 0 5px, transparent 5px 9px, #22c55e 9px 14px, transparent 14px 18px, #38bdf8 18px 23px, transparent 23px 27px, #84cc16 27px 32px, transparent 32px 36px)'

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        'grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-[10px] bg-white ring-1 ring-neutral-900/5',
        className
      )}
      style={{ backgroundImage: stripes }}
    >
      <span
        className='font-serif text-[15px] font-bold leading-none tracking-tight text-neutral-800'
        style={{
          textShadow:
            '0 0 3px #fff, 0 0 3px #fff, 0 0 4px #fff, 0 1px 3px #fff, 0 -1px 3px #fff',
        }}
      >
        CP
      </span>
    </span>
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
  return (
    <Link
      href='/'
      onClick={onClick}
      className={cn('flex items-center gap-2.5', className)}
    >
      <LogoMark className={markClassName} />
      <span className='text-lg font-extrabold tracking-tight text-neutral-900'>
        Cesta Podnikateľa
      </span>
    </Link>
  )
}
