import { AlarmClock, Check, Home, Users } from 'lucide-react'

function Bar({
  value,
  className = 'bg-blue-600',
  track = 'bg-slate-200/80',
  height = 'h-2',
}: {
  value: number
  className?: string
  track?: string
  height?: string
}) {
  return (
    <div className={`${height} w-full overflow-hidden rounded-full ${track}`}>
      <div
        className={`h-full rounded-full ${className}`}
        style={{ width: `${value}%` }}
      />
    </div>
  )
}

function Laptop() {
  return (
    <div className='transition-transform duration-700 ease-out [transform:perspective(1600px)_rotateX(5deg)_rotateY(-4deg)] group-hover:[transform:perspective(1600px)_rotateX(1.5deg)_rotateY(-1deg)]'>
      <div className='relative rounded-[28px] bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950 p-3 pt-5 shadow-[0_50px_100px_-25px_rgba(15,23,42,0.45),0_25px_45px_-20px_rgba(15,23,42,0.35)] ring-1 ring-black/50'>
        <span className='absolute top-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-neutral-600' />
        <div
          className='pointer-events-none absolute inset-0 rounded-[28px]'
          style={{
            background:
              'linear-gradient(120deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 28%, transparent 45%)',
          }}
        />

        <div className='overflow-hidden rounded-[16px] bg-white'>
          <div className='flex items-center gap-3 border-b border-slate-100 px-4 py-3'>
            <div className='flex gap-1.5'>
              <span className='h-3 w-3 rounded-full bg-red-400' />
              <span className='h-3 w-3 rounded-full bg-amber-400' />
              <span className='h-3 w-3 rounded-full bg-emerald-400' />
            </div>
            <div className='w-full max-w-[280px] rounded-lg bg-slate-100 px-3.5 py-1.5 text-xs font-medium text-slate-400'>
              cp.podnikajte.sk
            </div>
          </div>

          <div className='p-5 sm:p-6'>
            <div className='grid grid-cols-2 gap-3.5'>
              <div className='rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 p-4 text-white shadow-lg shadow-blue-600/30 sm:p-5'>
                <div className='text-3xl font-extrabold leading-none sm:text-4xl'>
                  3
                </div>
                <div className='mt-3 text-[10px] font-bold tracking-[0.08em] text-blue-100'>
                  AKTÍVNE MILNÍKY
                </div>
              </div>
              <div className='rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-900/[0.04] sm:p-5'>
                <div className='text-3xl font-extrabold leading-none text-blue-600 sm:text-4xl'>
                  1
                </div>
                <div className='mt-3 text-[10px] font-bold tracking-[0.08em] text-slate-400'>
                  TERMÍN BLÍZKO
                </div>
              </div>
            </div>

            <div className='mt-4 space-y-3.5'>
              <div className='rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-900/[0.04]'>
                <div className='mb-3 flex items-center gap-2.5'>
                  <span className='text-blue-600'>
                    <Home size={18} />
                  </span>
                  <span className='text-[13px] font-extrabold tracking-[0.04em] text-slate-800'>
                    HYPOTÉKA PODNIKATEĽA
                  </span>
                </div>
                <Bar value={66} />
              </div>
              <div className='rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-900/[0.04]'>
                <div className='mb-3 flex items-center gap-2.5'>
                  <span className='text-blue-600'>
                    <Users size={18} />
                  </span>
                  <span className='text-[13px] font-extrabold tracking-[0.04em] text-slate-800'>
                    PRVÝ ZAMESTNANEC
                  </span>
                </div>
                <Bar value={34} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='relative -mx-3 sm:-mx-12 lg:-mx-8 xl:-mx-12'>
        <div className='h-[15px] rounded-b-[16px] bg-gradient-to-b from-slate-100 via-slate-200 to-slate-400 shadow-[0_22px_35px_-14px_rgba(15,23,42,0.4)]' />
        <div className='absolute top-0 left-1/2 h-[6px] w-24 -translate-x-1/2 rounded-b-xl bg-slate-300' />
        <div className='absolute inset-x-3 top-0 h-px bg-white/90' />
      </div>

    </div>
  )
}

function ReminderBadge() {
  return (
    <div className='absolute -bottom-9 -left-3 z-20 flex items-center rounded-2xl bg-white px-5 py-3.5 shadow-[0_25px_50px_-15px_rgba(15,23,42,0.3)] ring-1 ring-slate-900/[0.05] sm:-left-6'>
      <div>
        <p className='flex items-center gap-1.5 text-[10px] font-bold tracking-[0.16em] text-slate-400'>
          <AlarmClock size={13} />
          PRIPOMIENKA
        </p>
        <p className='mt-1 text-[15px] font-extrabold text-slate-900'>
          Odvody do 8. júla
        </p>
      </div>
    </div>
  )
}

function Phone() {
  return (
    <div className='absolute top-16 -right-2 z-10 w-[240px] rotate-[7deg] transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:rotate-[4.5deg] lg:-right-5 lg:w-[255px]'>
      <div className='rounded-[44px] border-[9px] border-neutral-900 bg-white shadow-[0_45px_90px_-20px_rgba(15,23,42,0.5),0_20px_40px_-18px_rgba(15,23,42,0.4)]'>
        <div className='relative rounded-[35px] px-4 pt-11 pb-4'>
          <span className='absolute top-2.5 left-1/2 h-6 w-20 -translate-x-1/2 rounded-full bg-neutral-900' />

          <p className='text-[10px] font-bold tracking-[0.2em] text-slate-400'>
            PRIPOMIENKY
          </p>
          <div className='mt-2.5 space-y-2'>
            <div className='flex items-center gap-2.5 rounded-2xl bg-slate-100/90 px-3.5 py-3'>
              <span className='h-2.5 w-2.5 shrink-0 rounded-full bg-red-500' />
              <span className='text-[13px] font-bold text-slate-800'>
                Odvody &middot; 8. 7.
              </span>
            </div>
            <div className='flex items-center gap-2.5 rounded-2xl bg-slate-100/90 px-3.5 py-3'>
              <span className='h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400' />
              <span className='text-[13px] font-bold text-slate-800'>
                DPH &middot; 25. 7.
              </span>
            </div>
            <div className='rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 px-3.5 py-3 text-white shadow-md shadow-blue-600/30'>
              <div className='flex items-center gap-1.5'>
                <Check size={14} strokeWidth={3} />
                <span className='text-[13px] font-bold'>Krok splnený</span>
              </div>
              <div className='mt-2'>
                <Bar value={72} className='bg-white' track='bg-white/25' height='h-1.5' />
              </div>
            </div>
          </div>

          <p className='mt-4 text-[10px] font-bold tracking-[0.2em] text-slate-400'>
            MOJA CESTA
          </p>
          <div className='mt-2.5 space-y-2'>
            <div className='rounded-2xl bg-slate-100/70 p-3.5'>
              <div className='flex items-center justify-between'>
                <span className='text-[13px] font-extrabold text-slate-800'>
                  Začínam podnikať
                </span>
                <span className='text-xs font-extrabold text-blue-600'>4/7</span>
              </div>
              <div className='mt-2'>
                <Bar value={57} height='h-1.5' track='bg-slate-200' />
              </div>
            </div>
            <div className='rounded-2xl bg-slate-100/70 p-3.5'>
              <div className='flex items-center justify-between'>
                <span className='text-[13px] font-extrabold text-slate-800'>
                  Hypotéka podnikateľa
                </span>
                <span className='text-xs font-extrabold text-blue-600'>2/6</span>
              </div>
              <div className='mt-2'>
                <Bar value={33} height='h-1.5' track='bg-slate-200' />
              </div>
            </div>
          </div>

          <div className='mx-auto mt-4 h-1.5 w-16 rounded-full bg-slate-200' />
        </div>
      </div>
    </div>
  )
}

export function HeroMockup() {
  return (
    <div className='group relative mx-auto w-full max-w-[540px] pt-4 pb-10 sm:pr-16 sm:pb-36'>
      <div
        className='pointer-events-none absolute inset-x-0 top-12 bottom-16 -z-10 rounded-full opacity-70 blur-3xl'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, rgba(14,165,233,0.08) 55%, transparent 80%)',
        }}
      />
      <div className='relative h-[320px] min-[400px]:h-[365px] min-[470px]:h-[425px] min-[560px]:h-[490px] sm:h-auto'>
        <div className='absolute left-1/2 w-[540px] origin-top -translate-x-1/2 scale-[0.55] min-[400px]:scale-[0.63] min-[470px]:scale-[0.74] min-[560px]:scale-[0.85] sm:static sm:w-auto sm:translate-x-0 sm:scale-100'>
          <div className='relative'>
            <Laptop />
            <Phone />
            <ReminderBadge />
          </div>
        </div>
      </div>
    </div>
  )
}
