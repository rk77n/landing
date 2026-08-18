import Link from 'next/link'
import { LogoMark } from '@/components/app/logo'

const columns = [
  {
    title: 'Produkt',
    links: [
      { label: 'Momenty', href: '/#momenty' },
      { label: 'Kalkulačky', href: '/#kalkulacky' },
      { label: 'Dashboard', href: '/#cta' },
    ],
  },
  {
    title: 'Pre koho',
    links: [
      { label: 'Pre všetkých podnikateľov', href: '/#momenty' },
      { label: 'Začínajúci podnikatelia', href: '/#ako' },
    ],
  },
  {
    title: 'Právne informácie',
    links: [
      { label: 'Ochrana osobných údajov (GDPR)', href: '/ochrana-osobnych-udajov' },
      { label: 'Všeobecné obchodné podmienky', href: '/obchodne-podmienky' },
    ],
  },
]

export function Footer() {
  return (
    <footer className='w-full border-t border-neutral-200 bg-white'>
      <div className='mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8'>
        <div className='grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]'>
          <div className='max-w-xs'>
            <div className='flex items-center gap-2.5'>
              <LogoMark />
              <span className='text-lg font-extrabold tracking-tight text-neutral-900'>
                Cesta Podnikateľa
              </span>
            </div>
            <p className='mt-4 text-sm leading-relaxed text-neutral-500'>
              Digitálny kopilot svetom slovenského biznisu.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className='text-sm font-bold text-neutral-900'>
                {col.title}
              </h3>
              <ul className='mt-4 space-y-3'>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-sm text-neutral-500 transition-colors hover:text-neutral-900'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='mt-12 border-t border-neutral-200 pt-6 text-center text-sm text-neutral-400'>
          &copy; {new Date().getFullYear()}{' '}Cesta Podnikateľa &middot;
          Obsahový partner: podnikajte.sk
        </div>
      </div>
    </footer>
  )
}
