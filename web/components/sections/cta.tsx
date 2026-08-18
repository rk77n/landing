import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Cta() {
  return (
    <section id='cta' className='section'>
      <div className='relative overflow-hidden rounded-[2rem] bg-blue-600 px-6 py-16 text-center sm:px-12 sm:py-20'>
        <h2 className='text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl'>
          Začnite svoju cestu ešte dnes
        </h2>
        <p className='mx-auto mt-5 max-w-xl text-lg leading-relaxed text-blue-100'>
          Zadajte e-mail a my vám pripravíme prvý míľnik na mieru. Bez záväzkov,
          zadarmo.
        </p>
        <Link
          href='/'
          className='group mt-9 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-blue-600 shadow-lg shadow-blue-900/20 transition hover:bg-blue-50'
        >
          Začať zadarmo
          <ArrowRight
            size={18}
            className='transition-transform duration-200 group-hover:translate-x-1.5'
          />
        </Link>
        <p className='mt-6 text-sm text-blue-200'>
          Pridajte sa k podnikateľom, ktorí majú svoje povinnosti pod kontrolou.
        </p>
      </div>
    </section>
  )
}
