import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'center' | 'left'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-xl',
        className
      )}
    >
      {eyebrow && (
        <p className='text-sm font-bold tracking-[0.14em] text-blue-600 uppercase'>
          {eyebrow}
        </p>
      )}
      <h2 className='mt-3 text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-[2.75rem]'>
        {title}
      </h2>
      {subtitle && (
        <p className='mt-5 text-lg leading-relaxed text-neutral-600'>
          {subtitle}
        </p>
      )}
    </div>
  )
}
