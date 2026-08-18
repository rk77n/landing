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
      'Dane, odvody, exspirácie poistiek, jeden prešvihnutý dátum stojí peniaze.',
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
    </section>
  )
}
