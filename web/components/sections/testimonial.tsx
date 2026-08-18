export function Testimonial() {
  return (
    <section className='section'>
      <figure className='mx-auto max-w-3xl text-center'>
        <blockquote className='text-2xl font-semibold leading-snug tracking-tight text-neutral-900 sm:text-3xl'>
          „Konečne viem, čo mám urobiť a kedy. Pripomienka na odvody mi minulý
          mesiac ušetrila pokutu, appka sa zaplatila sama.“
        </blockquote>
        <figcaption className='mt-8 flex items-center justify-center gap-4'>
          <span className='grid h-12 w-12 place-items-center rounded-full bg-neutral-900 text-sm font-bold text-white'>
            MK
          </span>
          <div className='text-left'>
            <div className='font-bold text-neutral-900'>Martina K.</div>
            <div className='text-sm text-neutral-500'>
              Podnikateľka, grafická dizajnérka
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}
