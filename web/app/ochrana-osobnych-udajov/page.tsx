import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const metadata: Metadata = {
  title: 'Zásady ochrany osobných údajov',
  description:
    'Informácie o spracúvaní osobných údajov pri používaní platformy Cesta podnikateľa.',
  alternates: {
    canonical: '/ochrana-osobnych-udajov',
  },
}

const toc = [
  'Prevádzkovateľ a kontaktné údaje',
  'Zodpovedná osoba',
  'Koho sa tieto zásady týkajú',
  'Aké osobné údaje spracúvame',
  'Účely spracúvania, právne základy a doby uchovávania',
  'Osobitné situácie spracúvania',
  'Príjemcovia osobných údajov',
  'Prenos do tretích krajín',
  'Zabezpečenie osobných údajov',
  'Súbory cookies',
  'Práva dotknutej osoby',
  'Ako si uplatniť svoje práva',
  'Nahlasovanie nezákonného obsahu (Akt o digitálnych službách)',
  'Zmeny týchto zásad',
]

const ucelyRows = [
  [
    'Registrácia a vedenie používateľského účtu',
    'plnenie zmluvy, čl. 6 ods. 1 písm. b)',
    'identifikačné, kontaktné, prihlasovacie',
    'počas trvania účtu + [DOPLNIŤ, napr. 30] dní po jeho zrušení',
  ],
  [
    'Poskytovanie služieb Míľniky, Pripomienky, Kalkulačky',
    'plnenie zmluvy, čl. 6 ods. 1 písm. b)',
    'profilové údaje, údaje o používaní',
    'počas trvania účtu',
  ],
  [
    'Prevádzka Trezora (metadáta, evidencia platnosti)',
    'plnenie zmluvy, čl. 6 ods. 1 písm. b)',
    'metadáta dokumentov, dátumy platnosti',
    'počas trvania účtu + [DOPLNIŤ] dní',
  ],
  [
    'Personalizácia obsahu podľa profilu',
    'plnenie zmluvy, čl. 6 ods. 1 písm. b)',
    'profilové a obohatené údaje',
    'počas trvania účtu',
  ],
  [
    'Doplnenie údajov z verejných registrov',
    'oprávnený záujem, čl. 6 ods. 1 písm. f) – zníženie záťaže používateľa a správnosť údajov',
    'údaje podľa bodu 4.3',
    'počas trvania účtu',
  ],
  [
    'Sprostredkovanie dopytu partnerovi',
    '[DOPLNIŤ – plnenie zmluvy alebo súhlas; zosúladiť s implementáciou]',
    'kontaktné údaje, obsah dopytu, relevantné profilové údaje',
    '[DOPLNIŤ, napr. 3 roky] od odoslania dopytu',
  ],
  [
    'Zákaznícka podpora',
    'oprávnený záujem, čl. 6 ods. 1 písm. f)',
    'kontaktné údaje, obsah komunikácie',
    '[DOPLNIŤ, napr. 2 roky] od uzavretia požiadavky',
  ],
  [
    'Bezpečnosť Platformy, prevencia zneužitia a podvodov',
    'oprávnený záujem, čl. 6 ods. 1 písm. f)',
    'IP adresa, bezpečnostné logy, identifikátory relácie',
    '[DOPLNIŤ, napr. 90 dní]',
  ],
  [
    'Analytika a zlepšovanie Platformy',
    'súhlas, čl. 6 ods. 1 písm. a)',
    'údaje o používaní, cookies, záznamy relácií',
    '[DOPLNIŤ] alebo do odvolania súhlasu',
  ],
  [
    'Zasielanie noviniek a marketingovej komunikácie',
    'súhlas, čl. 6 ods. 1 písm. a) / oprávnený záujem pri vlastných obdobných službách',
    'e-mailová adresa, meno',
    'do odvolania súhlasu, resp. do namietnutia',
  ],
  [
    'Fakturácia a vedenie účtovníctva',
    'zákonná povinnosť, čl. 6 ods. 1 písm. c)',
    'fakturačné údaje',
    '10 rokov podľa zákona o účtovníctve',
  ],
  [
    'Uplatnenie alebo obhajoba právnych nárokov',
    'oprávnený záujem, čl. 6 ods. 1 písm. f)',
    'údaje relevantné pre spor',
    'do uplynutia premlčacích lehôt',
  ],
]

const sprostredkovateliaRows = [
  [
    '[DOPLNIŤ – poskytovateľ hostingu a nasadenia aplikácie]',
    'prevádzka a nasadenie Platformy',
    '[DOPLNIŤ región]',
  ],
  [
    '[DOPLNIŤ – poskytovateľ databázy]',
    'uloženie údajov používateľov a obsahu Trezora',
    '[DOPLNIŤ región]',
  ],
  [
    '[DOPLNIŤ – poskytovateľ cache a rate limitingu]',
    'bezpečnosť, obmedzovanie počtu požiadaviek',
    '[DOPLNIŤ región]',
  ],
  [
    '[DOPLNIŤ – poskytovateľ transakčných e-mailov]',
    'zasielanie potvrdení, obnovy hesla a upozornení',
    '[DOPLNIŤ región]',
  ],
  [
    '[DOPLNIŤ – analytický nástroj]',
    'analýza používania Platformy, záznam relácií',
    '[DOPLNIŤ región]',
  ],
  [
    '[DOPLNIŤ – poskytovateľ dát z registrov]',
    'doplnenie údajov o podnikateľskom subjekte',
    '[DOPLNIŤ región]',
  ],
  ['[DOPLNIŤ ďalšie]', '', ''],
]

function Section({
  index,
  title,
  children,
}: {
  index: number
  title: string
  children: ReactNode
}) {
  return (
    <section id={`b-${index}`} className='mt-12 scroll-mt-24'>
      <h2 className='text-xl font-bold sm:text-2xl'>
        {index}. {title}
      </h2>
      <div className='mt-4 space-y-3 text-[15px] leading-relaxed text-neutral-600'>
        {children}
      </div>
    </section>
  )
}

function SubTitle({ children }: { children: ReactNode }) {
  return <h3 className='pt-3 text-lg font-bold text-neutral-900'>{children}</h3>
}

function Note({ children }: { children: ReactNode }) {
  return <p className='italic text-neutral-400'>{children}</p>
}

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className='mt-4 overflow-x-auto rounded-2xl border border-neutral-200/70 bg-white shadow-sm shadow-neutral-900/[0.03]'>
      <table className='w-full min-w-[640px] text-left text-sm'>
        <thead>
          <tr className='border-b border-neutral-200/70 bg-neutral-50/80'>
            {head.map((h) => (
              <th key={h} className='px-4 py-3 font-bold text-neutral-900'>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='divide-y divide-neutral-200/70'>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className='px-4 py-3 align-top text-neutral-600'>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function OchranaOsobnychUdajovPage() {
  return (
    <div className='flex min-h-screen flex-col bg-neutral-50 font-sans text-neutral-900'>
      <Header />

      <main className='flex-grow'>
        <article className='mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20'>
          <p className='text-sm font-bold tracking-[0.14em] text-blue-600 uppercase'>
            Právne informácie
          </p>
          <h1 className='mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl'>
            Zásady ochrany osobných údajov
          </h1>
          <p className='mt-5 leading-relaxed text-neutral-600'>
            Informácie o spracúvaní osobných údajov pri používaní platformy
            Cesta podnikateľa podľa nariadenia Európskeho parlamentu a Rady (EÚ)
            2016/679 (ďalej len „<strong>GDPR</strong>“) a zákona č. 18/2018 Z.
            z. o ochrane osobných údajov.
          </p>
          <p className='mt-3 text-sm font-semibold text-neutral-500'>
            Verzia: 1.0 | Účinné od: [DOPLNIŤ]
          </p>

          <nav className='mt-10 rounded-3xl border border-neutral-200/70 bg-white p-6 shadow-sm shadow-neutral-900/[0.03] sm:p-8'>
            <h2 className='text-lg font-bold'>Obsah</h2>
            <ol className='mt-4 columns-1 space-y-2 text-[15px] sm:columns-2'>
              {toc.map((title, i) => (
                <li key={title}>
                  <a
                    href={`/ochrana-osobnych-udajov#b-${i + 1}`}
                    className='text-neutral-600 transition-colors hover:text-blue-600'
                  >
                    {i + 1}. {title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <Section index={1} title='Prevádzkovateľ a kontaktné údaje'>
            <p>
              Spoločnosť [DOPLNIŤ obchodné meno], IČO: [DOPLNIŤ], so sídlom
              [DOPLNIŤ], zapísaná v Obchodnom registri [DOPLNIŤ] (ďalej len „
              <strong>Prevádzkovateľ</strong>“, „<strong>my</strong>“) je
              prevádzkovateľom informačných systémov, v ktorých spracúva osobné
              údaje používateľov platformy Cesta podnikateľa, dostupnej na
              [DOPLNIŤ URL] (ďalej len „<strong>Platforma</strong>“).
            </p>
            <p>
              Kontakt vo veciach ochrany osobných údajov: [DOPLNIŤ e-mail],
              prípadne písomne na adresu sídla.
            </p>
            <p>
              Pri spracúvaní osobných údajov postupujeme v súlade s právnym
              poriadkom Slovenskej republiky a v maximálnej miere dbáme na
              súkromie dotknutých osôb.
            </p>
          </Section>

          <Section index={2} title='Zodpovedná osoba'>
            <Note>
              [DOPLNIŤ – ak je zodpovedná osoba (DPO) určená, uviesť jej
              identifikáciu a kontakt. Ak určená nie je, uviesť:
              „Prevádzkovateľ nemá povinnosť určiť zodpovednú osobu podľa čl.
              37 GDPR. Vo veciach ochrany osobných údajov nás kontaktujte na
              adrese uvedenej v bode 1.“ POZOR: pri Trezore a rozsiahlom
              profilovaní môže povinnosť určiť DPO vzniknúť – posúdiť s
              právnikom.]
            </Note>
          </Section>

          <Section index={3} title='Koho sa tieto zásady týkajú'>
            <p>Tieto zásady sa vzťahujú na:</p>
            <ul className='list-disc space-y-2 pl-5'>
              <li>
                <strong className='text-neutral-900'>
                  návštevníkov Platformy
                </strong>{' '}
                – osoby, ktoré Platformu používajú bez registrácie;
              </li>
              <li>
                <strong className='text-neutral-900'>
                  registrovaných používateľov
                </strong>{' '}
                – osoby, ktoré si vytvorili používateľský účet;
              </li>
              <li>
                <strong className='text-neutral-900'>
                  osoby konajúce za právnické osoby
                </strong>{' '}
                – konatelia, zamestnanci a kontaktné osoby používateľov, ktorí
                sú právnickými osobami;
              </li>
              <li>
                <strong className='text-neutral-900'>
                  kontaktné osoby partnerov
                </strong>{' '}
                – zástupcov účtovníkov, advokátov, bánk a ďalších partnerov
                zaradených do databázy Platformy;
              </li>
              <li>
                <strong className='text-neutral-900'>
                  záujemcov o naše služby
                </strong>{' '}
                – osoby, ktoré nás kontaktovali alebo sa prihlásili na odber
                noviniek.
              </li>
            </ul>
            <p>
              Tieto zásady sa <strong>nevzťahujú</strong> na spracúvanie
              osobných údajov, ktoré do Platformy vložíte vy sami ako
              podnikateľ a ktoré sa týkajú vašich zamestnancov, klientov alebo
              obchodných partnerov – v takom prípade sme v postavení
              sprostredkovateľa a vy v postavení prevádzkovateľa (pozri bod
              6.2).
            </p>
          </Section>

          <Section index={4} title='Aké osobné údaje spracúvame'>
            <p className='font-bold text-neutral-900'>
              4.1. Údaje, ktoré nám poskytnete priamo:
            </p>
            <ul className='list-disc space-y-2 pl-5'>
              <li>
                identifikačné a kontaktné údaje: meno, priezvisko, e-mailová
                adresa, telefónne číslo, [DOPLNIŤ ďalšie];
              </li>
              <li>
                údaje o podnikaní: obchodné meno, IČO, DIČ, IČ DPH, sídlo alebo
                miesto podnikania, právna forma;
              </li>
              <li>
                údaje z profilového dotazníka: fáza podnikania, oblasť
                činnosti, počet zamestnancov, spôsob odmeňovania konateľa a
                ďalšie odpovede, ktoré nám poskytnete;
              </li>
              <li>obsah dokumentov, ktoré nahráte do Trezora;</li>
              <li>obsah komunikácie s našou podporou.</li>
            </ul>
            <p className='pt-2 font-bold text-neutral-900'>
              4.2. Údaje, ktoré vznikajú pri používaní Platformy:
            </p>
            <ul className='list-disc space-y-2 pl-5'>
              <li>
                prihlasovacie a bezpečnostné údaje (dátum a čas prihlásenia, IP
                adresa, identifikátor relácie, bezpečnostné udalosti);
              </li>
              <li>
                údaje o používaní Platformy (navštívené sekcie, dokončené kroky
                míľnikov, použité kalkulačky, nastavené pripomienky);
              </li>
              <li>technické údaje o zariadení a prehliadači;</li>
              <li>
                údaje získané prostredníctvom súborov cookies a obdobných
                technológií (pozri bod 10).
              </li>
            </ul>
            <p className='pt-2 font-bold text-neutral-900'>
              4.3. Údaje získané z verejných zdrojov (informácia podľa čl. 14
              GDPR).
            </p>
            <p>
              Ak zadáte IČO, dopĺňame údaje o vašom podnikaní z verejne
              dostupných zdrojov, najmä z [DOPLNIŤ – napr. Registra právnických
              osôb, podnikateľov a orgánov verejnej moci, Obchodného registra
              SR, Živnostenského registra, Registra účtovných závierok,
              registrov Finančnej správy SR a služby Datahub prevádzkovanej
              Slovensko.Digital].
            </p>
            <p>
              V prípade fyzickej osoby – podnikateľa ide o osobné údaje.
              Dopĺňame najmä: obchodné meno, miesto podnikania, predmety
              podnikania, dátum vzniku oprávnenia, stav subjektu, registráciu
              pre DPH a [DOPLNIŤ]. Tieto údaje spracúvame na účely podľa bodu 5
              a uchovávame ich po rovnakú dobu ako ostatné údaje v profile.
            </p>
            <Note>
              [DOPLNIŤ – čl. 14 GDPR vyžaduje informovať dotknutú osobu do 1
              mesiaca od získania údajov, ak neboli získané od nej. Ak sa
              obohatenie deje na podnet používateľa o jeho vlastnom IČO,
              informačná povinnosť je splnená týmito zásadami. Ak by sa dáta
              sťahovali hromadne dopredu, situácia je iná – overiť s
              právnikom.]
            </Note>
            <p className='pt-2'>
              <strong className='text-neutral-900'>
                4.4. Údaje, ktoré nespracúvame.
              </strong>{' '}
              Nepožadujeme a vedome nespracúvame osobitné kategórie osobných
              údajov podľa čl. 9 GDPR (údaje o zdraví, náboženskom presvedčení,
              politických názoroch a podobne). Ak takéto údaje obsahujú
              dokumenty, ktoré nahráte do Trezora, spracúvame ich výlučne v
              postavení sprostredkovateľa podľa bodu 6.2.
            </p>
          </Section>

          <Section
            index={5}
            title='Účely spracúvania, právne základy a doby uchovávania'
          >
            <Table
              head={['Účel', 'Právny základ', 'Rozsah údajov', 'Doba uchovávania']}
              rows={ucelyRows}
            />
            <p className='pt-2'>
              Ak neexistuje iný právny základ, spracúvame osobné údaje len na
              základe a v rozsahu súhlasu dotknutej osoby. Súhlas je
              dobrovoľný, môžete ho kedykoľvek odvolať a jeho odvolanie nemá
              vplyv na zákonnosť spracúvania pred odvolaním. Neudelenie alebo
              odvolanie súhlasu neovplyvní prístup k základným funkciám
              Platformy.
            </p>
          </Section>

          <Section index={6} title='Osobitné situácie spracúvania'>
            <SubTitle>6.1. Dopyty – odovzdanie kontaktu partnerovi</SubTitle>
            <p>
              Ak odošlete dopyt, odovzdáme vaše údaje vybranému partnerovi, aby
              vás mohol kontaktovať a predložiť ponuku. Rozsah odovzdávaných
              údajov a identita partnera sa vám zobrazia{' '}
              <strong>pred</strong> záväzným odoslaním dopytu.
            </p>
            <p>
              Do momentu odoslania dopytu sú vaše kontaktné údaje partnerovi
              neprístupné. Partner sa vo vzťahu k odovzdaným údajom stáva{' '}
              <strong>samostatným prevádzkovateľom</strong> a ďalej ich
              spracúva podľa vlastných zásad ochrany osobných údajov, na ktoré
              nemáme vplyv. Za jeho postup nezodpovedáme.
            </p>
            <p>
              Ak si neželáte, aby vás partner ďalej kontaktoval, obráťte sa
              priamo na neho; súčasne o tom môžete informovať aj nás na
              [DOPLNIŤ e-mail].
            </p>

            <SubTitle>6.2. Trezor – naše postavenie sprostredkovateľa</SubTitle>
            <p>
              Dokumenty, ktoré nahráte do Trezora, môžu obsahovať osobné údaje
              tretích osôb (napríklad vašich zamestnancov, klientov alebo
              dodávateľov). Vo vzťahu k týmto údajom ste{' '}
              <strong>prevádzkovateľom vy</strong> a my sme{' '}
              <strong>sprostredkovateľom</strong> podľa čl. 28 GDPR.
            </p>
            <p>
              To znamená, že obsah dokumentov spracúvame výlučne na základe
              vašich pokynov, na účel poskytovania služby Trezor, a nepoužívame
              ho na vlastné účely – najmä nie na marketing, analytiku ani na
              trénovanie modelov strojového učenia.
            </p>
            <p>
              Podmienky tohto spracúvania upravuje [DOPLNIŤ – čl. 16, ČASŤ B
              všeobecných obchodných podmienok / samostatná sprostredkovateľská
              zmluva].
            </p>

            <SubTitle>6.3. Personalizácia a profilovanie</SubTitle>
            <p>
              Na základe vášho profilu a správania v Platforme prispôsobujeme
              zobrazovaný obsah – najmä poradie a relevanciu míľnikov, dostupné
              kalkulačky, termíny v pripomienkach a odporúčaných partnerov.
            </p>
            <p>
              Ide o profilovanie v zmysle čl. 4 ods. 4 GDPR.{' '}
              <strong>Nevykonávame</strong> automatizované individuálne
              rozhodovanie, ktoré by malo právne účinky alebo by vás podobne
              významne ovplyvňovalo v zmysle čl. 22 GDPR. Personalizácia
              neobmedzuje váš prístup k žiadnej časti obsahu – celý obsah
              Platformy zostáva dostupný bez ohľadu na profil.
            </p>
            <p>
              Proti profilovaniu založenému na oprávnenom záujme máte právo
              namietať (pozri bod 11).
            </p>

            <SubTitle>
              6.4. Údaje o osobách konajúcich za právnické osoby
            </SubTitle>
            <p>
              Ak Platformu používate za právnickú osobu, spracúvame
              identifikačné a kontaktné údaje osoby, ktorá za ňu koná, na
              základe nášho oprávneného záujmu na plnení zmluvy uzavretej s
              právnickou osobou.
            </p>
          </Section>

          <Section index={7} title='Príjemcovia osobných údajov'>
            <p>
              Osobné údaje môžu byť poskytnuté tretím osobám, ak tak
              rozhodneme, alebo ak nám povinnosť poskytnúť ich vyplýva z
              právneho predpisu. Pri výbere sprostredkovateľov dbáme na to, aby
              bol zaručený vysoký štandard ochrany osobných údajov.
            </p>
            <p>Príjemcov možno rozdeliť do kategórií:</p>
            <ul className='list-[lower-alpha] space-y-2 pl-5'>
              <li>
                poskytovatelia hostingu, databázových, e-mailových,
                analytických a bezpečnostných služieb zabezpečujúci prevádzku
                Platformy;
              </li>
              <li>
                partneri, ktorým bol na váš podnet odovzdaný dopyt (pozri bod
                6.1);
              </li>
              <li>
                obchodní partneri zabezpečujúci právne, účtovné, daňové a
                audítorské služby;
              </li>
              <li>
                poskytovatelia služieb v oblasti marketingu a komunikácie;
              </li>
              <li>
                orgány verejnej moci, ak nám povinnosť poskytnúť údaje vyplýva
                z právneho predpisu alebo rozhodnutia (najmä súdy, orgány činné
                v trestnom konaní, exekútori, Finančná správa SR).
              </li>
            </ul>
            <p className='pt-2 font-bold text-neutral-900'>
              Aktuálny zoznam sprostredkovateľov:
            </p>
            <Table
              head={['Názov', 'Účel', 'Umiestnenie']}
              rows={sprostredkovateliaRows}
            />
            <Note>
              [POZNÁMKA: tabuľku napĺňajte podľa skutočne nasadených služieb –
              hosting, databáza, cache/rate limiting, transakčné e-maily,
              analytika, zdroj registrových dát, prípadne CDN, monitoring a
              alerting. Pri každom uveďte región spracúvania. Zoznam držte na
              samostatnej podstránke, na ktorú odtiaľto odkazujete – mení sa
              častejšie než samotné zásady.]
            </Note>
            <p>
              Zmeny v zozname sprostredkovateľov zverejňujeme aktualizáciou
              tejto stránky.
            </p>
          </Section>

          <Section index={8} title='Prenos do tretích krajín'>
            <p>
              Osobné údaje spracúvame prednostne v krajinách Európskej únie a v
              krajinách, ktoré sú zmluvnou stranou Dohody o Európskom
              hospodárskom priestore.
            </p>
            <p>
              Prenos do tretej krajiny môže nastať len ak Európska komisia
              považuje jej právny režim za zabezpečujúci primeranú úroveň
              ochrany, alebo ak boli prijaté primerané záruky podľa čl. 46
              GDPR, najmä štandardné zmluvné doložky.
            </p>
            <p className='pt-2 font-bold text-neutral-900'>
              Príjemcovia z tretích krajín:
            </p>
            <Table
              head={['Názov', 'Štát', 'Záruka / odkaz na doložky']}
              rows={[
                [
                  '[DOPLNIŤ alebo uviesť „Osobné údaje neprenášame do tretích krajín.“]',
                  '',
                  '',
                ],
              ]}
            />
          </Section>

          <Section index={9} title='Zabezpečenie osobných údajov'>
            <p>
              Osobné údaje spracúvame elektronicky, v odôvodnených prípadoch aj
              manuálne. Prijali sme technické, organizačné a personálne
              opatrenia, aby bola úroveň ochrany čo najvyššia, najmä:
            </p>
            <ul className='list-disc space-y-2 pl-5'>
              <li>
                šifrovanie prenosu údajov (HTTPS/TLS) a šifrovanie údajov v
                úložisku;
              </li>
              <li>
                riadenie prístupov na princípe minimálnych nevyhnutných
                oprávnení;
              </li>
              <li>
                hashovanie hesiel a bezpečné spracovanie tokenov na obnovu
                hesla;
              </li>
              <li>
                obmedzovanie počtu požiadaviek a ochrana pred automatizovaným
                zneužitím;
              </li>
              <li>
                logovanie bezpečnostných udalostí a upozorňovanie na
                neštandardné správanie;
              </li>
              <li>pravidelná aktualizácia softvéru a závislostí;</li>
              <li>
                zmluvné zaviazanie sprostredkovateľov a povinnosť mlčanlivosti
                oprávnených osôb.
              </li>
            </ul>
            <p>
              Podrobnejší prehľad technických a organizačných opatrení je
              dostupný na [DOPLNIŤ URL alebo vypustiť].
            </p>
          </Section>

          <Section index={10} title='Súbory cookies'>
            <p>
              Na Platforme používame súbory cookies a obdobné technológie.
              Nevyhnutné cookies používame na základe nášho oprávneného záujmu
              na funkčnosti a bezpečnosti Platformy; analytické a marketingové
              cookies len na základe vášho súhlasu udeleného prostredníctvom
              cookie lišty.
            </p>
            <p>
              Súhlas môžete kedykoľvek zmeniť alebo odvolať v nastaveniach
              cookies. Podrobnosti nájdete v samostatných Zásadách používania
              súborov cookies na [DOPLNIŤ URL].
            </p>
          </Section>

          <Section index={11} title='Práva dotknutej osoby'>
            <p>Máte právo:</p>
            <ul className='list-[lower-alpha] space-y-2 pl-5'>
              <li>
                <strong className='text-neutral-900'>na prístup</strong> k
                osobným údajom, ktoré o vás spracúvame, a na ich kópiu (čl. 15
                GDPR);
              </li>
              <li>
                <strong className='text-neutral-900'>na opravu</strong>{' '}
                nesprávnych a doplnenie neúplných údajov (čl. 16 GDPR);
              </li>
              <li>
                <strong className='text-neutral-900'>na vymazanie</strong>{' '}
                údajov, ak už nie sú potrebné, ak odvoláte súhlas, ak namietate
                spracúvanie a neprevažujú oprávnené dôvody, alebo ak sa
                spracúvajú nezákonne (čl. 17 GDPR);
              </li>
              <li>
                <strong className='text-neutral-900'>
                  na obmedzenie spracúvania
                </strong>{' '}
                (čl. 18 GDPR);
              </li>
              <li>
                <strong className='text-neutral-900'>na prenosnosť</strong>{' '}
                údajov v štruktúrovanom, bežne používanom a strojovo čitateľnom
                formáte (čl. 20 GDPR);
              </li>
              <li>
                <strong className='text-neutral-900'>namietať</strong> proti
                spracúvaniu založenému na oprávnenom záujme vrátane
                profilovania, a kedykoľvek a bez uvedenia dôvodu proti
                spracúvaniu na účely priameho marketingu (čl. 21 GDPR);
              </li>
              <li>
                <strong className='text-neutral-900'>odvolať súhlas</strong>{' '}
                kedykoľvek, bez vplyvu na zákonnosť predchádzajúceho
                spracúvania;
              </li>
              <li>
                <strong className='text-neutral-900'>
                  podať sťažnosť alebo návrh na začatie konania
                </strong>{' '}
                dozornému orgánu, ktorým je Úrad na ochranu osobných údajov
                Slovenskej republiky, Hraničná 12, 820 07 Bratislava.
              </li>
            </ul>
            <p>
              Ak porušenie ochrany osobných údajov môže viesť k vysokému riziku
              pre vaše práva, oznámime vám ho bez zbytočného odkladu.
            </p>
          </Section>

          <Section index={12} title='Ako si uplatniť svoje práva'>
            <p>
              Žiadosť môžete podať e-mailom na [DOPLNIŤ], písomne na adresu
              sídla, prípadne priamo v nastaveniach používateľského účtu
              (export údajov, zrušenie účtu, správa súhlasov).
            </p>
            <p>
              Odpovieme vám do jedného mesiaca od doručenia žiadosti. V
              odôvodnených prípadoch, s ohľadom na zložitosť a počet žiadostí,
              môžeme túto lehotu predĺžiť o ďalšie dva mesiace, o čom vás
              budeme informovať.
            </p>
            <p>
              Informácie poskytujeme bezplatne. Ak je žiadosť zjavne
              neopodstatnená alebo neprimeraná, najmä pre svoju opakujúcu sa
              povahu, môžeme požadovať primeraný poplatok zohľadňujúci
              administratívne náklady alebo odmietnuť konať.
            </p>
            <p>
              Na overenie totožnosti žiadateľa môžeme požiadať o doplňujúce
              informácie.
            </p>
          </Section>

          <Section
            index={13}
            title='Nahlasovanie nezákonného obsahu (Akt o digitálnych službách)'
          >
            <p>
              Pri prevádzke Platformy postupujeme v súlade s nariadením (EÚ)
              2022/2065 o jednotnom trhu s digitálnymi službami (ďalej len „
              <strong>DSA</strong>“).
            </p>
            <p>
              Za obsah, ktorý do Platformy nahráte, zdieľate alebo inak
              sprístupníte, zodpovedáte vy. Obsah porušujúci DSA, iné právne
              predpisy alebo naše obchodné podmienky môžeme odstrániť a
              používateľský účet pozastaviť alebo zrušiť.
            </p>
            <p>
              <strong className='text-neutral-900'>Kontaktný bod:</strong>{' '}
              [DOPLNIŤ e-mail, napr. abuse@…]. Táto adresa slúži zároveň ako
              jediné kontaktné miesto pre orgány členských štátov, Komisiu a
              Európsky výbor pre digitálne služby; komunikáciu prijímame v
              slovenskom a anglickom jazyku.
            </p>
            <p>Oznámenie o nezákonnom obsahu podľa čl. 16 DSA musí obsahovať:</p>
            <ul className='list-[lower-alpha] space-y-2 pl-5'>
              <li>
                dostatočne podložené vysvetlenie dôvodov, prečo oznamovateľ
                považuje obsah za nezákonný;
              </li>
              <li>
                jasné označenie presného elektronického umiestnenia obsahu,
                najmä konkrétnu URL adresu, prípadne doplňujúce informácie
                umožňujúce jeho identifikáciu;
              </li>
              <li>
                meno a e-mailovú adresu oznamovateľa, s výnimkou obsahu
                týkajúceho sa trestných činov podľa čl. 3 až 7 smernice
                2011/93/EÚ;
              </li>
              <li>
                vyhlásenie, že oznamovateľ v dobrej viere považuje uvedené
                informácie a tvrdenia za presné a úplné.
              </li>
            </ul>
            <p>
              Prijatie oznámenia bez zbytočného odkladu potvrdíme. Ak oznámenie
              spĺňa všetky uvedené náležitosti, považuje sa za skutočnosť
              zakladajúcu naše preukázateľné vedomie o danom obsahu. O našom
              rozhodnutí oznamovateľa informujeme spolu s odôvodnením.
            </p>
            <p>
              Ak s rozhodnutím nesúhlasíte, môžete nás na tej istej adrese
              požiadať o jeho preskúmanie s uvedením dôvodov nesúhlasu;
              následne vám oznámime konečné rozhodnutie. Tým nie je dotknuté
              vaše právo obrátiť sa na príslušné orgány verejnej moci.
            </p>
          </Section>

          <Section index={14} title='Zmeny týchto zásad'>
            <p>
              Tieto zásady môžeme priebežne aktualizovať, najmä pri zmene
              legislatívy, rozsahu služieb alebo použitých technológií. O
              podstatných zmenách vás budeme informovať e-mailom alebo
              oznámením v Platforme. Aktuálne znenie je vždy dostupné na tejto
              stránke; predchádzajúce verzie archivujeme na [DOPLNIŤ URL].
            </p>
          </Section>
        </article>
      </main>

      <Footer />
    </div>
  )
}
