import type { MetadataRoute } from 'next'
import { isIndexable, siteConfig } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  // Testovacie verzie: crawlovanie nechávame povolené, aby roboty videli
  // noindex/nofollow meta tagy (Disallow by ich pred nimi skryl),
  // ale neinzerujeme sitemapu – tá aj tak vracia 404.
  if (!isIndexable) {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
      },
    }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  }
}
