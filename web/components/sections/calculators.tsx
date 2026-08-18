import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { LuChevronRight } from 'react-icons/lu'
import { MortgageCalc } from '@/components/app/mortgage-calc'

const bullets = [
  { title: 'Hypotéka pre podnikateľov', text: 'bonita podľa metodík bánk (10–60 % z tržieb)' },
  { title: 'Odvody & dane 2026', text: 'paušál vs. skutočné výdavky' },
  { title: 'Prvý zamestnanec', text: 'celková cena práce' },
  { title: 'Splátka úveru', text: 'mesačná splátka a preplatenie' },
]

export function Calculators() {
  return (
    <section id='kalkulacky' className='section'>
      <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-16'>
        <div className='text-center lg:text-left'>
          <p className='text-sm font-bold tracking-[0.14em] text-blue-600 uppercase'>
            Srdce aplikácie
          </p>
          <h2 className='mt-3 text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-[2.75rem]'>
            Inteligentné kalkulačky, ktoré modelujú vašu finančnú realitu
          </h2>
          <p className='mt-5 text-lg leading-relaxed text-neutral-600'>
            V reálnom čase vypočítate odvody, čistý príjem, bonitu na hypotéku či
            celkovú cenu práce. Žiadne tabuľky, žiadne hádanie.
          </p>

          <ul className='mx-auto mt-8 w-fit space-y-4 text-left lg:mx-0'>
            {bullets.map((bullet) => (
              <li key={bullet.title} className='flex items-start gap-3'>
                <LuChevronRight
                  size={20}
                  className='mt-0.5 shrink-0 text-blue-600'
                />
                <span className='text-[15px] text-neutral-700'>
                  <span className='font-bold text-neutral-900'>
                    {bullet.title}
                  </span>
                  , {bullet.text}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href='/#cta'
            className='mt-9 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3.5 text-base font-semibold text-neutral-800 shadow-sm transition hover:bg-neutral-50'
          >
            Všetkých 21 kalkulačiek v appke
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className='mx-auto w-full max-w-xl lg:max-w-none'>
          <MortgageCalc />
        </div>
      </div>
    </section>
  )
}
