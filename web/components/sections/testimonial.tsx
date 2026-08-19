import { Quote } from 'lucide-react'

// Avatar farby sa striedajú z brand palety loga; na limetkovej je tmavý
// text kvôli kontrastu.
const AVATAR_COLORS = [
  { bg: '#17b2b3', text: '#ffffff' },
  { bg: '#43b967', text: '#ffffff' },
  { bg: '#3089e8', text: '#ffffff' },
  { bg: '#84cd1a', text: '#1d3a00' },
  { bg: '#416fdf', text: '#ffffff' },
]

type TestimonialItem = {
  quote: string
  name: string
  role: string
  initials: string
}

// Referencie sa dopĺňajú len v tomto poli (max. 2 vety na citáciu,
// za pohybu sa dlhší text nedá čítať).
const testimonials: TestimonialItem[] = [
  {
    quote:
      'Konečne viem, čo mám urobiť a kedy. Pripomienka na odvody mi minulý mesiac ušetrila pokutu, appka sa zaplatila sama.',
    name: 'Martina K.',
    role: 'Podnikateľka, grafická dizajnérka',
    initials: 'MK',
  },
  // TODO: nasledujúce položky sú PLACEHOLDER referencie – pred spustením
  // ostrej verzie ich nahraďte skutočnými citáciami od používateľov.
  {
    quote:
      'Založenie s.r.o. som odklikal krok za krokom bez jediného googlenia. Ušetrilo mi to týždeň behania.',
    name: 'Ján T.',
    role: 'Konateľ, IT služby',
    initials: 'JT',
  },
  {
    quote:
      'Trezor na zmluvy je na nezaplatenie. Keď banka pýtala poistku, mala som ju do minúty.',
    name: 'Petra S.',
    role: 'Živnostníčka, prekladateľka',
    initials: 'PS',
  },
  {
    quote:
      'Kalkulačka bonity mi ukázala reálnu hypotéku skôr, ako som oslovil banku. Čísla nakoniec sedeli.',
    name: 'Marek B.',
    role: 'SZČO, stavebníctvo',
    initials: 'MB',
  },
  {
    quote:
      'Prechod z paušálu na skutočné výdavky som si prepočítala za jeden večer. Rozhodnutie bolo hneď jasné.',
    name: 'Lucia H.',
    role: 'Podnikateľka, e-shop',
    initials: 'LH',
  },
  {
    quote:
      'Prvého zamestnanca sme prijali podľa checklistu. Nezaskočilo nás nič, ani celková cena práce.',
    name: 'Tomáš V.',
    role: 'Konateľ, marketingová agentúra',
    initials: 'TV',
  },
  {
    quote:
      'Appka mi stráži termíny a ja sa venujem klientom. Presne takto to má fungovať.',
    name: 'Zuzana P.',
    role: 'Živnostníčka, kaderníctvo',
    initials: 'ZP',
  },
  {
    quote:
      'Za minútu mi zostavila plán na mieru. Odvtedy už len odškrtávam kroky.',
    name: 'Michal D.',
    role: 'SZČO, fotograf',
    initials: 'MD',
  },
]

type ItemWithAvatar = TestimonialItem & {
  avatar: (typeof AVATAR_COLORS)[number]
}

const withAvatars: ItemWithAvatar[] = testimonials.map((t, i) => ({
  ...t,
  avatar: AVATAR_COLORS[i % AVATAR_COLORS.length],
}))

const rows = [
  { items: withAvatars.slice(0, 4), trackClass: 'marquee-track--left' },
  { items: withAvatars.slice(4), trackClass: 'marquee-track--right' },
]

function TestimonialCard({ item }: { item: ItemWithAvatar }) {
  return (
    <figure className='flex w-[290px] shrink-0 flex-col rounded-[14px] border-[0.5px] border-[#e7e4df] bg-white p-6 sm:w-[340px]'>
      <Quote
        size={22}
        aria-hidden='true'
        fill='currentColor'
        strokeWidth={0}
        className='shrink-0 text-[#b5d4f4]'
      />
      <blockquote className='mt-3 flex-1 text-[15px] leading-[1.55] text-[#444340]'>
        {item.quote}
      </blockquote>
      <figcaption className='mt-4 flex items-center gap-3'>
        <span
          className='grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-bold'
          style={{ backgroundColor: item.avatar.bg, color: item.avatar.text }}
        >
          {item.initials}
        </span>
        <span className='min-w-0'>
          <span className='block text-sm font-bold text-neutral-900'>
            {item.name}
          </span>
          <span className='block text-xs text-neutral-500'>{item.role}</span>
        </span>
      </figcaption>
    </figure>
  )
}

function MarqueeGroup({
  items,
  hidden,
}: {
  items: ItemWithAvatar[]
  hidden?: boolean
}) {
  return (
    <div
      className='flex shrink-0 items-stretch gap-4 pr-4'
      aria-hidden={hidden || undefined}
    >
      {items.map((item) => (
        <TestimonialCard key={item.name} item={item} />
      ))}
    </div>
  )
}

export function Testimonial() {
  return (
    <section id='referencie' className='section overflow-x-clip'>
      <div className='text-center'>
        <p className='text-xs font-bold uppercase tracking-[1.5px] text-[#416fdf]'>
          Referencie
        </p>
        <h2 className='mt-3 text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-[2.75rem]'>
          Podnikatelia, ktorí už majú poriadok
        </h2>
      </div>

      <div className='mt-12 space-y-4'>
        {rows.map((row) => (
          <div key={row.trackClass} className='marquee relative overflow-hidden'>
            <div className={`flex w-max ${row.trackClass}`}>
              <MarqueeGroup items={row.items} />
              {/* Duplicitná skupina kvôli plynulému nekonečnému loopu. */}
              <MarqueeGroup items={row.items} hidden />
            </div>
            {/* Fade masky vo farbe reálneho pozadia stránky (#f6f7f9
                z komponentu Background), nie tokenu --background. */}
            <div
              aria-hidden='true'
              className='pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#f6f7f9] to-transparent'
            />
            <div
              aria-hidden='true'
              className='pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#f6f7f9] to-transparent'
            />
          </div>
        ))}
      </div>
    </section>
  )
}
