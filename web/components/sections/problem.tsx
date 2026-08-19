import { ArrowDown, Route } from 'lucide-react'
import Link from 'next/link'
import { LuShuffle, LuAlarmClock, LuPuzzle } from 'react-icons/lu'
import { SectionHeading } from '@/components/app/section-heading'

const problems = [
  {
    icon: <LuShuffle size={22} />,
    title: 'Informačný chaos',
    description:
      'Dlhé články namiesto jasných krokov. Nikdy neviete, či ste na niečo nezabudli.',
  },
  {
    icon: <LuAlarmClock size={22} />,
    title: 'Zmeškané termíny',
    description:
      'Dane, odvody, expirácie poistiek. Jeden prešvihnutý dátum stojí peniaze.',
  },
  {
    icon: <LuPuzzle size={22} />,
    title: 'Informačná asymetria',
    description:
      'Ako získať hypotéku ako podnikateľ? Ako vybrať účtovníka? Bez návodu len tápete.',
  },
]

export function Problem() {
  return (
    <section id='problem' className='section'>
      <SectionHeading
        eyebrow='Problém'
        title={
          <>
            Podnikatelia často nevedia,
            <br />
            čo všetko nevedia.
          </>
        }
        subtitle='Termíny daní, odvody, revízie zmlúv, hypotéka pre podnikateľa... Informácie sú roztrúsené a expertné témy sa v škole neučia. Výsledok? Pokuty z omeškania a premárnené príležitosti.'
      />

      <div className='mt-14 grid gap-6 md:grid-cols-3'>
        {problems.map((problem) => (
          <div
            key={problem.title}
            className='rounded-3xl border border-neutral-200/70 bg-white p-7 shadow-sm shadow-neutral-900/[0.03]'
          >
            <div className='grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600'>
              {problem.icon}
            </div>
            <h3 className='mt-5 text-xl font-bold text-neutral-900'>
              {problem.title}
            </h3>
            <p className='mt-2 leading-relaxed text-neutral-600'>
              {problem.description}
            </p>
          </div>
        ))}
      </div>

      <div className='mt-9 flex flex-col items-center gap-9'>
        <ArrowDown size={22} className='text-neutral-400' aria-hidden='true' />
        <Link
          href='/#ako'
          className='inline-flex items-center gap-2.5 rounded-2xl bg-blue-600/10 px-6 py-3.5 text-center text-base font-semibold text-blue-800 transition hover:bg-blue-600/15'
        >
          <Route size={19} className='shrink-0 text-blue-700' />
          Riešenie: päť krokov k poriadku v podnikaní
        </Link>
      </div>
    </section>
  )
}
