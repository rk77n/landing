import type { ReactNode } from 'react'
import {
  CalendarClock,
  Handshake,
  ListChecks,
  Smartphone,
  Target,
  Vault,
} from 'lucide-react'
import { SectionHeading } from '@/components/app/section-heading'

type Feature = {
  icon: ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Target size={22} />,
    title: 'Personalizácia',
    description:
      'Obsah sa prispôsobí vášmu podnikaniu a fáze, v ktorej sa práve nachádzate.',
  },
  {
    icon: <Vault size={22} />,
    title: 'Digitálny trezor',
    description:
      'Zmluvy, poistky a firemné dokumenty na jednom mieste, so sledovaním platnosti.',
  },
  {
    icon: <ListChecks size={22} />,
    title: 'Akčné kroky',
    description:
      'Každý cieľ rozložený na jasné kroky, ktoré odškrtávate jeden po druhom.',
  },
  {
    icon: <Handshake size={22} />,
    title: 'Overení partneri',
    description:
      'Prístup k bankám, právnikom a účtovníkom, čo rozumejú malým podnikateľom.',
  },
  {
    icon: <CalendarClock size={22} />,
    title: 'Pripomienky',
    description:
      'Automatické pripomienky daní, odvodov a platnosti dokumentov, e-mailom aj v appke.',
  },
  {
    icon: <Smartphone size={22} />,
    title: 'Mobile-first',
    description:
      'Odškrtávajte úlohy aj „v teréne“, na úrade, v banke, kdekoľvek.',
  },
]

export function Features() {
  return (
    <section id='momenty' className='section'>
      <SectionHeading
        eyebrow='Prečo Cesta Podnikateľa'
        title='Všetko pre vaše podnikanie na jednom mieste'
      />

      <div className='mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {features.map((feature) => (
          <div
            key={feature.title}
            className='rounded-3xl border border-neutral-200/70 bg-white p-7 shadow-sm shadow-neutral-900/[0.03] transition hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-900/[0.06]'
          >
            <div className='grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600'>
              {feature.icon}
            </div>
            <h3 className='mt-5 text-xl font-bold text-neutral-900'>
              {feature.title}
            </h3>
            <p className='mt-2 leading-relaxed text-neutral-600'>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
