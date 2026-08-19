import { isIndexable, siteConfig } from '@/lib/site'

// Route handler namiesto app/sitemap.ts, aby testovacie verzie
// (Vercel preview, *.vercel.app) mohli vrátiť skutočný stav 404
// a nevysielali vyhľadávačom signál na indexáciu.

const pages = [
  { path: '', changeFrequency: 'weekly', priority: '1.0' },
  { path: '/obchodne-podmienky', changeFrequency: 'monthly', priority: '0.3' },
  {
    path: '/ochrana-osobnych-udajov',
    changeFrequency: 'monthly',
    priority: '0.3',
  },
]

export function GET() {
  if (!isIndexable) {
    return new Response('Not Found', { status: 404 })
  }

  const lastModified = new Date().toISOString()
  const entries = pages
    .map(
      (page) => `  <url>
    <loc>${siteConfig.url}${page.path}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('\n')

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
