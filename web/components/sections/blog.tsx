import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const PORTAL_URL = 'https://www.podnikajte.sk'

const articles = [
  {
    category: 'Dane',
    title: 'Podanie daňového priznania za rok 2025 (v roku 2026)',
    description: 'Kto, dokedy a ako podáva daňové priznanie za rok 2025, lehoty a formuláre.',
    href: `${PORTAL_URL}/dan-z-prijmov/podanie-danoveho-priznania-za-rok-2025-v-roku-2026`,
  },
  {
    category: 'Odvody',
    title: 'Minimálne odvody SZČO od 1.1.2026',
    description: 'Prehľad vyšších minimálnych sociálnych a zdravotných odvodov od 1.1.2026.',
    href: `${PORTAL_URL}/socialne-a-zdravotne-odvody/minimalne-odvody-szco-od-1-1-2026`,
  },
  {
    category: 'Podnikanie',
    title: 'Zoznam remeselných živností v roku 2026',
    description: 'Prehľad remeselných živností a odbornej spôsobilosti potrebnej v roku 2026.',
    href: `${PORTAL_URL}/zivnost/zoznam-remeselnych-zivnosti-2026`,
  },
  {
    category: 'Financie',
    title: 'Prenos podnikateľského účtu do inej banky: ako prebieha?',
    description: 'Ako prebieha presun účtu do novej banky, postup, doklady a poplatky.',
    href: `${PORTAL_URL}/financny-manazment/prenos-podnikatelskeho-uctu-ako-prebieha`,
  },
  {
    category: 'Dane',
    title: 'Odpisovanie auta v roku 2026',
    description: 'Ako v roku 2026 odpisovať firemné auto, daňové aj účtovné odpisy s príkladmi.',
    href: `${PORTAL_URL}/odpisy/odpisovanie-auta-2026`,
  },
  {
    category: 'Financie',
    title: 'VÚB mení podmienky firemných debetných a kreditných kariet od 1.7.2026',
    description: 'VÚB od 1.7.2026 mení limity, poplatky a benefity firemných kariet.',
    href: `${PORTAL_URL}/financny-manazment/vub-meni-podmienky-firemnych-debetnych-kreditnych-kariet-od-1-7-2026`,
  },
  {
    category: 'Právo',
    title: 'Zákon o rovnakom odmeňovaní mužov a žien od 7.6.2026',
    description: 'Nový zákon prináša zamestnávateľom povinnosti od 7.6.2026.',
    href: `${PORTAL_URL}/pracovne-pravo-bozp/zakon-o-rovnakom-odmenovani-muzov-zien-od-7-6-2026`,
  },
  {
    category: 'Odvody',
    title: 'Dávka v nezamestnanosti od 1.7.2026',
    description: 'Podmienky nároku a výška dávky v nezamestnanosti platné od 1.7.2026.',
    href: `${PORTAL_URL}/socialne-a-zdravotne-odvody/davka-v-nezamestnanosti-od-1-7-2026`,
  },
  {
    category: 'Zamestnanci',
    title: 'Príplatky za prácu cez víkend, vo sviatok a nočnú prácu v roku 2026',
    description: 'Prehľad príplatkov za víkend, sviatok a nočnú prácu podľa minimálnej mzdy.',
    href: `${PORTAL_URL}/pracovne-pravo-bozp/priplatky-za-pracu-cez-vikend-vo-sviatok-nocnu-pracu-2026`,
  },
]

export function Blog() {
  return (
    <section id='blog' className='section'>
      <div className='flex flex-col items-center gap-6 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left'>
        <div>
          <p className='text-sm font-bold tracking-[0.14em] text-blue-600 uppercase'>
            Vzdelávajte sa
          </p>
          <h2 className='mt-3 text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-[2.75rem]'>
            Najnovšie z portálu
            <br className='hidden sm:block' /> podnikajte.sk
          </h2>
        </div>
        <Link
          href={PORTAL_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex w-fit items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-800 shadow-sm transition hover:bg-neutral-50'
        >
          Všetky články
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {articles.map((article) => (
          <Link
            key={article.title}
            href={article.href}
            target='_blank'
            rel='noopener noreferrer'
            className='group flex flex-col rounded-3xl border border-neutral-200/70 bg-white p-6 shadow-sm shadow-neutral-900/[0.03] transition hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-900/[0.06]'
          >
            <div className='flex items-center gap-2.5'>
              <span className='rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold tracking-wide text-blue-700 uppercase'>
                {article.category}
              </span>
              <span className='text-xs text-neutral-400'>podnikajte.sk</span>
            </div>
            <h3 className='mt-4 text-lg font-bold leading-snug text-neutral-900'>
              {article.title}
            </h3>
            <p className='mt-2 flex-1 text-sm leading-relaxed text-neutral-600'>
              {article.description}
            </p>
            <span className='mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-neutral-900 transition group-hover:text-blue-600'>
              Čítať článok
              <ArrowUpRight size={15} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
