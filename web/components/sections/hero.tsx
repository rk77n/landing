import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import { HeroMockup } from '@/components/app/hero-mockup'

const perks = [
  'Bez registrácie na začiatok',
  'Pripravené pre všetkých podnikateľov',
  'Termíny daní a odvodov 2026',
  'Všetky dokumenty na jednom mieste',
]

export function Hero() {
  return (
    <section id='hero' className='section overflow-x-clip'>
      <div className='grid items-center gap-14 lg:grid-cols-2 lg:gap-10'>
        <div className='text-center lg:text-left'>
          <h1 className='text-4xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl'>
            Digitálny kopilot
            <br />
            vašim <span className='text-blue-600'>podnikaním</span>
          </h1>

          <p className='mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 lg:mx-0'>
            Chaos neprehľadných informácií meníme na jasnú cestu plnú konkrétnych
            krokov. Cesta Podnikateľa vie, čo musíte urobiť skôr, než to zistíte
            sami.
          </p>

          <div className='mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start'>
            <Link
              href='/#cta'
              className='group inline-flex cursor-pointer items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700'
            >
              Začať moju cestu
              <ArrowRight
                size={18}
                className='transition-transform duration-200 group-hover:translate-x-1.5'
              />
            </Link>
            <Link
              href='/#ako'
              className='inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-7 py-4 text-base font-semibold text-neutral-800 shadow-sm transition hover:bg-neutral-50'
            >
              Ako to funguje
            </Link>
          </div>

          <div className='mx-auto mt-8 grid w-fit grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-[auto_auto] lg:mx-0 lg:grid-cols-1 xl:grid-cols-[auto_auto]'>
            {perks.map((perk) => (
              <div key={perk} className='flex items-center gap-2.5'>
                <Check size={18} className='shrink-0 text-green-600' />
                <span className='text-[15px] text-neutral-700 min-[360px]:whitespace-nowrap'>
                  {perk}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className='pb-8 lg:pb-0'>
          <HeroMockup />
        </div>
      </div>
    </section>
  )
}
