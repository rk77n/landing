import { NextResponse, type NextRequest } from 'next/server'

// Poistka nad rámec build-time kontroly v lib/site.ts: rovnaký produkčný
// build je na Vercel dostupný aj cez *.vercel.app alias. Všetko, čo nebeží
// na kanonickej doméne, dostane X-Robots-Tag: noindex, nofollow
// a sitemap.xml aj llms.txt vrátia 404.
const canonicalHost = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cestapodnikatela.sk'
).host

// Host porovnávame bez ohľadu na veľkosť písmen, port a www prefix.
function normalizeHost(host: string) {
  return host
    .toLowerCase()
    .replace(/:\d+$/, '')
    .replace(/^www\./, '')
}

const canonical = normalizeHost(canonicalHost)

function isCanonicalHost(host: string | null) {
  return host !== null && normalizeHost(host) === canonical
}

export default function proxy(request: NextRequest) {
  if (isCanonicalHost(request.headers.get('host'))) {
    return NextResponse.next()
  }

  const { pathname } = request.nextUrl
  if (pathname === '/sitemap.xml' || pathname === '/llms.txt') {
    return new NextResponse('Not Found', { status: 404 })
  }

  const response = NextResponse.next()
  response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  return response
}

export const config = {
  // Buildové assety netreba označovať; obrázky a stránky áno.
  matcher: ['/((?!_next/static).*)'],
}
