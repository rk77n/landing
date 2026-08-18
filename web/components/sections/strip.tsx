import { Fragment } from 'react'

const items = [
  'Akčné kroky',
  'Kalkulačky',
  'Trezor',
  'Pripomienky',
]

export function Strip() {
  return (
    <section className='w-full border-y border-neutral-200/70 bg-white/60'>
      <div className='mx-auto grid w-full max-w-7xl grid-cols-2 gap-y-3 px-4 py-6 text-center sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-2 sm:px-6 lg:px-8'>
        {items.map((item, i) => (
          <Fragment key={item}>
            {i > 0 && (
              <span className='hidden h-1.5 w-1.5 rounded-full bg-neutral-300 sm:block' />
            )}
            <span className='text-[15px] font-bold text-neutral-800 sm:text-base'>
              {item}
            </span>
          </Fragment>
        ))}
      </div>
    </section>
  )
}
