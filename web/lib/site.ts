// Centrálna konfigurácia webu – používa sa v metadata, robots.ts aj sitemap.ts.
// Produkčnú doménu nastav cez NEXT_PUBLIC_SITE_URL (napr. vo Vercel env premenných).
// Ak nie je nastavená, použije sa produkčná doména projektu na Vercel
// (*.vercel.app, alebo vlastná doména po jej napojení).
const vercelHost =
  process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL

const fallbackUrl = vercelHost ? `https://${vercelHost}` : 'https://cestapodnikatela.sk'

export const siteConfig = {
  name: 'Cesta Podnikateľa',
  // Slová z tagline musia mať oporu v texte stránky (SEO: title vs. obsah).
  tagline: 'podnikanie krok za krokom, dane a odvody',
  // Bez koncového lomítka.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl).replace(/\/$/, ''),
  // Držať do ~160 znakov, inak Google popis oreže v produkte vyhľadávania.
  description:
    'Podnikanie krok za krokom: checklisty, kalkulačky, dane a odvody, ' +
    'strážené termíny a dokumenty na jednom mieste. Začnite bez registrácie.',
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
