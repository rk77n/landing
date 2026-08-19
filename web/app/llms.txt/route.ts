import { isIndexable, siteConfig } from '@/lib/site'

// Vydávané staticky – llms.txt sa mení len s obsahom webu, nie za behu.
export const dynamic = 'force-static'

export function GET() {
  // Testovacie verzie nemajú AI crawlerom ponúkať obsah s testovacou URL.
  if (!isIndexable) {
    return new Response('Not Found', { status: 404 })
  }

  const u = siteConfig.url

  const body = `# ${siteConfig.name}

> ${siteConfig.description}

Cesta Podnikateľa je slovenská webová aplikácia, ktorá prevedie podnikateľa
konkrétnou situáciou od prvého kroku po posledný. Používateľ si vyberie
„moment“, ktorý práve rieši (začínam podnikať, hľadám hypotéku, prijímam
prvého zamestnanca), a dostane hotovú roadmapu s krokmi v správnom poradí.
Obsahovým partnerom je portál podnikajte.sk.

## Čo aplikácia rieši

- Krátky profil podnikateľa, podľa ktorého sa filtruje obsah, checklisty aj kalkulačky
- Interaktívne checklisty, ktoré vedú úlohu po úlohe a ukladajú progres
- Kalkulačky odvodov, čistého príjmu, bonity na hypotéku a celkovej ceny práce
- Automatické pripomienky termínov daní a odvodov pre rok 2026
- Trezor na zmluvy, poistky a doklady so strážením dátumu platnosti

## Stránky

- [Domovská stránka](${u}): popis produktu, päť krokov, kalkulačky a najnovšie články
- [Ochrana osobných údajov](${u}/ochrana-osobnych-udajov): spracúvanie údajov podľa GDPR
- [Všeobecné obchodné podmienky](${u}/obchodne-podmienky): podmienky používania služby

## Poznámky

- Jazyk obsahu: slovenčina
- Cieľová skupina: podnikatelia na Slovensku, začínajúci aj zabehnutí
- Začať sa dá bez registrácie, postup sa ukladá do prehliadača
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
