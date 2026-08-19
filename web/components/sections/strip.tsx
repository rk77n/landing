import { Bell, Calculator, ListChecks, Vault } from 'lucide-react'

const items = [
  { icon: ListChecks, label: 'Akčné kroky' },
  { icon: Calculator, label: 'Kalkulačky' },
  { icon: Vault, label: 'Trezor' },
  { icon: Bell, label: 'Pripomienky' },
]

export function Strip() {
  return (
    <section className='w-full border-y border-neutral-200/70 bg-white/60'>
      <div className='mx-auto grid w-fit grid-cols-2 gap-x-10 gap-y-4 px-4 py-6 sm:flex sm:w-full sm:max-w-7xl sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-12 sm:px-6 lg:px-8'>
        {items.map((item) => (
          <span key={item.label} className='flex items-center gap-2.5'>
            <span className='grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-600'>
              <item.icon size={17} />
            </span>
            <span className='text-[15px] font-bold text-neutral-800 sm:text-base'>
              {item.label}
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}
