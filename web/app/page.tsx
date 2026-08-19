import type { Metadata } from 'next'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Hero } from '@/components/sections/hero'
import { Strip } from '@/components/sections/strip'
import { Problem } from '@/components/sections/problem'
import { How } from '@/components/sections/how'
import { Calculators } from '@/components/sections/calculators'
import { Features } from '@/components/sections/features'
import { Stats } from '@/components/sections/stats'
import { Blog } from '@/components/sections/blog'
import { Testimonial } from '@/components/sections/testimonial'
import { Cta } from '@/components/sections/cta'
import Background from '@/components/app/background'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <div className='relative flex min-h-screen flex-col font-sans text-neutral-900'>
      <Background />
      <Header />

      <main className='flex w-full flex-grow flex-col'>
        <Hero />
        <Strip />
        <Problem />
        <How />
        <Calculators />
        <Features />
        <Stats />
        <Blog />
        <Testimonial />
        <Cta />
      </main>

      <Footer />
    </div>
  )
}
