const stats = [
  { value: '50+', label: 'biznis momentov' },
  { value: '20+', label: 'finančných kalkulačiek' },
  { value: '0 €', label: 'na začiatok' },
]

export function Stats() {
  return (
    <section className='mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8'>
      <div className='grid gap-6 sm:grid-cols-3'>
        {stats.map((stat) => (
          <div
            key={stat.label}
            className='rounded-3xl border border-neutral-200/70 bg-white px-6 py-10 text-center shadow-sm shadow-neutral-900/[0.03]'
          >
            <div className='text-5xl font-extrabold tracking-tight text-neutral-900'>
              {stat.value}
            </div>
            <div className='mt-2 text-neutral-500'>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
