import type { ReactNode } from 'react'
import { Bell, Check, Compass, Lightbulb, ListChecks, Target, Vault } from 'lucide-react'
import { SectionHeading } from '@/components/app/section-heading'

type Step = {
  icon: ReactNode
  step: string
  title: string
  description: string
  points: string[]
  tip: string
}

const steps: Step[] = [
  {
    icon: <Target size={22} />,
    step: 'Krok 1',
    title: 'Vyplníte krátky profil',
    description: 'Za 60 sekúnd nám poviete, kto ste, a celá appka sa prispôsobí.',
    points: [
      'Poviete nám, či už podnikáte, alebo sa na podnikanie len chystáte',
      'Označíte fázu: začínam / 1–3 roky / 3+ rokov',
      'Vyberiete oblasti, ktoré vás zaujímajú (dane, financovanie, zamestnanci...)',
    ],
    tip: 'Obsah, checklisty aj kalkulačky sa filtrujú presne pre vašu situáciu. Začať môžete bez registrácie, postup sa uloží do prehliadača.',
  },
  {
    icon: <Compass size={22} />,
    step: 'Krok 2',
    title: 'Vyberiete si „moment“',
    description: 'Konkrétny cieľ, ktorý práve riešite. Tým sa aktivuje hotová roadmapa.',
    points: [
      'Napr. „Začínam podnikať“, „Hľadám hypotéku“, „Prijímam prvého zamestnanca“',
      'Každý moment má 5–10 krokov v správnom poradí',
      'Vidíte odhad času a náročnosti ešte pred štartom',
    ],
    tip: 'Nemusíte googliť, čo všetko treba, appka vie, čo nasleduje, skôr než to zistíte vy sami.',
  },
  {
    icon: <ListChecks size={22} />,
    step: 'Krok 3',
    title: 'Odškrtávate jasné kroky',
    description: 'Interaktívny checklist vás vedie úlohu po úlohe. Nič dôležité nevynecháte.',
    points: [
      'Ku každému kroku je „Info“, stručne vysvetlí, ako a kde to vybaviť',
      'Pri rozhodnutiach pomôže kalkulačka (bonita, odvody, cena práce)',
      'Progres sa priebežne ukladá a vidíte ho na dashboarde',
    ],
    tip: 'Pri zložitých krokoch vám ponúkneme vzor dokumentu, odkaz na úrad alebo overeného partnera na konzultáciu.',
  },
  {
    icon: <Bell size={22} />,
    step: 'Krok 4',
    title: 'Strážime vaše termíny',
    description: 'Appka pracuje za vás aj keď ju nemáte otvorenú. Žiadne pokuty z omeškania.',
    points: [
      'Automaticky vytvorí pripomienky daní a odvodov (termíny 2026)',
      'Sleduje exspirácie zmlúv a poistiek vo vašom trezore',
      'Včas upozorní e-mailom aj v aplikácii, červená = súrne',
    ],
    tip: 'Jeden ustrážený termín (napr. odvody do 8. v mesiaci) vám ušetrí pokutu, appka sa zaplatí sama.',
  },
  {
    icon: <Vault size={22} />,
    step: 'Krok 5',
    title: 'Dôležité veci ukladáte do trezoru',
    description: 'Zmluvy, poistky a doklady máte na jednom bezpečnom mieste, vždy po ruke.',
    points: [
      'Nahráte zmluvy, poistky, faktúry aj dokumenty z úradov',
      'Pri dokumentoch si nastavíte dátum platnosti a trezor ho stráži',
      'Všetko nájdete za pár sekúnd, aj o rok, aj z mobilu',
    ],
    tip: 'Keď dokument pýta banka, úrad alebo účtovník, nehľadáte ho po e-mailoch a šanónoch, stiahnete ho z trezoru na jeden klik.',
  },
]

export function How() {
  return (
    <section id='ako' className='section'>
      <SectionHeading
        eyebrow='Ako to funguje'
        title='Päť krokov k poriadku v podnikaní'
        subtitle='Žiadna teória. Pri každom kroku presne viete, čo máte urobiť, a my vám k tomu dáme nástroj, vzor alebo overeného partnera.'
      />

      <div className='relative mx-auto mt-16 max-w-3xl'>
        <div className='absolute top-4 bottom-4 left-7 hidden w-px bg-neutral-200 sm:block' />
        <div className='space-y-8'>
          {steps.map((s) => (
            <div key={s.step} className='relative flex flex-col gap-5 sm:flex-row'>
              <div className='z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/25'>
                {s.icon}
              </div>

              <div className='flex-1 rounded-3xl border border-neutral-200/70 bg-white p-6 shadow-sm shadow-neutral-900/[0.03] sm:p-7'>
                <p className='text-xs font-bold tracking-[0.14em] text-blue-600 uppercase'>
                  {s.step}
                </p>
                <h3 className='mt-2 text-2xl font-bold text-neutral-900'>
                  {s.title}
                </h3>
                <p className='mt-2 text-neutral-600'>{s.description}</p>

                <ul className='mt-5 space-y-3'>
                  {s.points.map((point) => (
                    <li
                      key={point}
                      className='flex items-start gap-3 text-[15px] leading-relaxed'
                    >
                      {/* 0.35em posadí hrot fajky na účiarie prvého riadku. Stred
                          riadkového boxu je vyššie – Plus Jakarta Sans má ascent 16
                          a descent 3, teda výrazne nesymetrické metriky. */}
                      <Check
                        size={18}
                        className='mt-[0.35em] shrink-0 text-green-600'
                      />
                      <span className='text-neutral-700'>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className='mt-5 flex items-start gap-3 rounded-2xl bg-blue-50/70 p-4 text-[15px] leading-relaxed'>
                  <Lightbulb
                    size={18}
                    className='mt-[0.35em] shrink-0 text-blue-600'
                  />
                  <p className='text-neutral-600'>
                    <span className='font-bold text-neutral-900'>
                      Čím vám pomôžeme:
                    </span>{' '}
                    {s.tip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
