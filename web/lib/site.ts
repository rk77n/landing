// Centrálna konfigurácia webu – používa sa v metadata, robots.ts aj sitemap.ts.
// Produkčnú doménu nastav cez NEXT_PUBLIC_SITE_URL (napr. vo Vercel env premenných).
export const siteConfig = {
  name: 'Cesta Podnikateľa',
  // Bez koncového lomítka.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cestapodnikatela.sk').replace(/\/$/, ''),
  description:
    'Sprievodca celou cestou podnikania – od prvých krokov po prvého zamestnanca. ' +
    'Kontrolné zoznamy, správa dokumentov, pripomienky termínov a odporúčania na mieru pre všetkých slovenských podnikateľov.',
  locale: 'sk_SK',
  keywords: [
    'podnikanie',
    'začiatok podnikania',
    'podnikateľ',
    'daňové priznanie',
    'odvody',
    'firemný účet',
    'kontrolný zoznam',
    'Slovensko',
  ],
} as const
