import { siteConfig } from '@/lib/site'

// Organization + WebSite ako JSON-LD. Vyhľadávače aj LLM z toho čítajú,
// kto je vlastníkom webu – bez toho nevedia priradiť značku k obsahu.
export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        logo: {
          '@type': 'ImageObject',
          url: `${siteConfig.url}/logo.png`,
          width: 512,
          height: 512,
        },
        image: `${siteConfig.url}/opengraph-image`,
        areaServed: { '@type': 'Country', name: 'Slovensko' },
        knowsLanguage: 'sk',
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: 'sk-SK',
        publisher: { '@id': `${siteConfig.url}/#organization` },
      },
    ],
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
