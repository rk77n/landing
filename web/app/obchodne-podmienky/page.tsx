import type { Metadata } from 'next'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const metadata: Metadata = {
  title: 'Všeobecné obchodné podmienky',
  description:
    'Všeobecné podmienky poskytovania služieb online platformy Cesta podnikateľa.',
  alternates: {
    canonical: '/obchodne-podmienky',
  },
}

type Section = {
  id: string
  title: string
  items: string[]
}

const sections: Section[] = [
  {
    id: 'cl-1',
    title: 'Úvodné ustanovenia',
    items: [
      '1.1. Spoločnosť [DOPLNIŤ obchodné meno], so sídlom: [DOPLNIŤ], zapísaná v Obchodnom registri [DOPLNIŤ], IČO: [DOPLNIŤ], DIČ: [DOPLNIŤ], IČ DPH: [DOPLNIŤ], kontaktný e-mail: [DOPLNIŤ], kontaktné telefónne číslo: [DOPLNIŤ] (ďalej len „Prevádzkovateľ“), je prevádzkovateľom online platformy Cesta podnikateľa, dostupnej na adrese [DOPLNIŤ URL], prostredníctvom ktorej poskytuje informačné, evidenčné, výpočtové a sprostredkovateľské služby (ďalej jednotlivo tiež len ako „Služba“ alebo spolu ako „Služby“) podľa predmetov podnikania zapísaných v obchodnom registri.',
      '1.2. Predmetom VOP je úprava vzájomných práv a povinností Prevádzkovateľa a Používateľa. VOP sú neoddeliteľnou súčasťou Zmluvy uzatvorenej medzi Prevádzkovateľom a Používateľom.',
      '1.3. Tieto VOP sa vzťahujú výlučne na poskytovanie tých Služieb, ktoré sú v nich uvedené. Na vzťah medzi Prevádzkovateľom a Partnerom sa tieto VOP nevzťahujú; ten sa spravuje osobitnými zmluvnými podmienkami pre Partnerov, dostupnými na [DOPLNIŤ URL].',
      '1.4. Pojmy definované v týchto VOP majú zhodný význam vo všetkých záväzkových právnych vzťahoch medzi Prevádzkovateľom a Používateľom, ak nie je výslovne dojednané inak.',
      '1.5. Dokončením registrácie, začatím užívania Služby alebo zaplatením Ceny za objednanú Službu Používateľ potvrdzuje, že sa oboznámil so znením týchto VOP, Reklamačného poriadku [DOPLNIŤ URL] a Zásad ochrany osobných údajov [DOPLNIŤ URL], rozumie im a súhlasí s nimi.',
      '1.6. Orgánom dozoru vo veciach ochrany spotrebiteľa je Slovenská obchodná inšpekcia, Inšpektorát SOI pre Bratislavský kraj, Bajkalská 21/A, P.O. Box 5, 820 07 Bratislava.',
    ],
  },
  {
    id: 'cl-2',
    title: 'Popis Služieb',
    items: [
      '2.1. Služba „Míľniky“ je služba spočívajúca v sprístupnení štruktúrovaných návodov, postupov a krokov súvisiacich so zakladaním a vedením podnikania, členených podľa právnej formy a fázy podnikania Používateľa.',
      '2.2. Služba „Trezor“ je služba spočívajúca v umožnení Používateľovi uložiť, evidovať a spravovať dokumenty a sledovať dobu ich platnosti.',
      '2.3. Služba „Pripomienky“ je služba spočívajúca v sprístupnení kalendára termínov a v zasielaní upozornení na blížiace sa povinnosti Používateľa.',
      '2.4. Služba „Kalkulačky“ je služba spočívajúca v sprístupnení orientačných výpočtových nástrojov, ktoré na základe údajov zadaných Používateľom vypočítajú informatívny výsledok.',
      '2.5. Služba „Dopyty“ je služba spočívajúca v sprostredkovaní kontaktu medzi Používateľom a Partnerom na účel predloženia ponuky Partnera Používateľovi.',
      '2.6. „Ďalšími súvisiacimi službami“ sú najmä personalizácia obsahu podľa profilu Používateľa, export dát, zasielanie informačných e-mailov a ďalšie služby, ktoré Prevádzkovateľ poskytuje alebo bude poskytovať v budúcnosti v rámci predmetov svojho podnikania.',
      '2.7. Prevádzkovateľ poskytuje Služby podľa svojich znalostí a technických možností, ako i technických možností jeho subdodávateľov, v kvalite zodpovedajúcej všeobecne uznávaným požiadavkám na obdobné služby.',
      '2.8. Informačný charakter Služieb. Obsah Platformy má informačný a vzdelávací charakter. Nepredstavuje právne, daňové, účtovné, finančné ani investičné poradenstvo v zmysle osobitných predpisov a nenahrádza konzultáciu s odborníkom. Prevádzkovateľ nie je advokátom, daňovým poradcom, účtovníkom, finančným agentom ani finančným poradcom a neposkytuje služby, na ktorých výkon sa vyžaduje osobitné oprávnenie podľa osobitných predpisov.',
    ],
  },
  {
    id: 'cl-3',
    title: 'Definícia pojmov',
    items: [
      '3.1. Zmluva o poskytovaní služieb platformy Cesta podnikateľa (ďalej len „Zmluva“) je štandardizovaná formulárová zmluva, na základe ktorej Používateľ využíva Služby Prevádzkovateľa. Za Zmluvu sa považuje aj dokončená registrácia Používateľského účtu a vyplnený a odoslaný formulár označený ako Objednávka s povinnosťou platby.',
      '3.2. VOP sú tieto Všeobecné obchodné podmienky, ktoré sú neoddeliteľnou súčasťou Zmluvy.',
      '3.3. Prevádzkovateľom je spoločnosť podľa čl. 1, odseku 1.1 týchto VOP.',
      '3.4. Platformou sa rozumie online platforma Cesta podnikateľa, dostupná prostredníctvom webového rozhrania na adrese [DOPLNIŤ URL], vrátane všetkých jej sekcií, funkcií a súvisiacich rozhraní.',
      '3.5. Používateľom je fyzická osoba alebo právnická osoba, ktorá využíva Služby, či už na základe registrácie alebo bez nej.',
      '3.6. Spotrebiteľom je Používateľ – fyzická osoba, ktorá v súvislosti so spotrebiteľskou zmluvou, z nej vyplývajúcim záväzkom alebo pri obchodnej praktike nekoná v rámci svojej podnikateľskej činnosti alebo povolania.',
      '3.7. Používateľským účtom (ďalej len „Účet“) je používateľské konto vytvorené registráciou, prostredníctvom ktorého Používateľ pristupuje k Službám, spravuje svoje údaje a Obsah Používateľa.',
      '3.8. Partnerom je tretia osoba – podnikateľ (najmä účtovník, advokát, banka, poisťovňa, finančný sprostredkovateľ, dodávateľ softvéru alebo iný poskytovateľ služieb pre podnikateľov), ktorá je zaradená do databázy Prevádzkovateľa a ktorej môže byť na základe konania Používateľa odovzdaný Dopyt.',
      '3.9. Dopytom je žiadosť Používateľa odoslaná prostredníctvom Platformy, ktorou Používateľ prejaví záujem o kontaktovanie zo strany jedného alebo viacerých Partnerov.',
      '3.10. Obsahom Platformy sú texty, návody, míľniky a ich kroky, výpočtové algoritmy, šablóny, vzory dokumentov, databázy, grafické prvky, dizajn a zdrojový kód Platformy.',
      '3.11. Obsahom Používateľa sú dáta, údaje a súbory, ktoré Používateľ zadá alebo nahrá do Platformy, najmä do Trezora, ako aj údaje zadané v Profile a v Dopytoch.',
      '3.12. Profilom je súbor údajov o Používateľovi a jeho podnikaní, ktoré Používateľ zadal alebo ktoré boli odvodené či doplnené z verejne dostupných registrov, a na základe ktorých Platforma personalizuje zobrazovaný obsah.',
      '3.13. Cena Služby je dojednaná v súlade so zákonom č. 18/1996 Z. z. o cenách ako cena zmluvná. Cena poskytovanej Služby je uvedená v Cenníku. Prevádzkovateľ môže na základe svojho rozhodnutia poskytnúť časť Služby alebo Službu ako celok bezplatne. K cene je účtovaná príslušná sadzba dane z pridanej hodnoty podľa právnych predpisov platných v čase poskytnutia Služby.',
      '3.14. Cenník je zoznam Cien za jednotlivé Služby, príplatkov, bezplatných služieb a podmienok ich poskytovania, dostupný na [DOPLNIŤ URL]. Cenník je neoddeliteľnou súčasťou Zmluvy, pokiaľ sa Služba neposkytuje bezplatne.',
      '3.15. Podporou sa rozumie kontaktné miesto Prevádzkovateľa, ktoré prijíma požiadavky, reklamácie, sťažnosti a iné podania Používateľa. Podpora je dostupná na e-mailovej adrese [DOPLNIŤ], prípadne prostredníctvom kontaktného formulára v Platforme.',
      '3.16. Aktiváciou Služby sa rozumie funkčné sprístupnenie Služby Používateľovi.',
      '3.17. Odstávkou Služby sa rozumie plánované prerušenie poskytovania Služby na účel kontroly, údržby, aktualizácie alebo zmeny technického vybavenia.',
      '3.18. Dočasným prerušením poskytovania Služby je úkon Prevádzkovateľa, ktorý dočasne znemožní Používateľovi využívanie Služby za podmienok ustanovených týmito VOP.',
    ],
  },
  {
    id: 'cl-4',
    title: 'Uzavretie Zmluvy, predmet Zmluvy',
    items: [
      '4.1. Každý záujemca má právo na uzavretie Zmluvy s Prevádzkovateľom za podmienok ustanovených všeobecne záväznými právnymi predpismi a týmito VOP.',
      '4.2. Zmluva sa uzatvára na diaľku, a to dokončením registrácie Účtu alebo vyplnením a odoslaním Objednávky prostredníctvom Platformy. Pri bezplatných Službách je Zmluva uzatvorená okamihom potvrdenia registrácie Prevádzkovateľom alebo okamihom skutočného začatia poskytovania Služby. Pri platených Službách nadobúda Zmluva účinnosť potvrdením Objednávky Prevádzkovateľom, resp. zaplatením Ceny, ak je platba podmienkou aktivácie.',
      '4.3. Prevádzkovateľ je viazaný svojou ponukou vrátane Ceny do uplynutia lehoty splatnosti vystavenej faktúry.',
      '4.4. Predmetom Zmluvy na strane Prevádzkovateľa je záväzok sprístupniť Používateľovi Služby v dojednanom rozsahu a kvalite za podmienok uvedených v Zmluve, Cenníku a týchto VOP.',
      '4.5. Predmetom Zmluvy na strane Používateľa je záväzok platiť Cenu za objednané platené Služby, dodržiavať povinnosti podľa Zmluvy a týchto VOP a využívať Služby v súlade s právnymi predpismi.',
      '4.6. Neoddeliteľnou súčasťou Zmluvy sú tieto VOP, Cenník a Reklamačný poriadok.',
      '4.7. Chybu, ktorá vznikla pri zadávaní údajov do Objednávky alebo registračného formulára, možno pred jeho odoslaním opraviť návratom do príslušného poľa a prepísaním nesprávneho údaju. Pred záväzným odoslaním sa Používateľovi zobrazí rekapitulácia zadaných údajov na účel kontroly.',
    ],
  },
  {
    id: 'cl-5',
    title: 'Registrácia a Používateľský účet',
    items: [
      '5.1. Registrácia je dobrovoľná. Časť Obsahu Platformy je prístupná bez registrácie; Služby Trezor, Pripomienky, Dopyty a personalizácia Profilu sú dostupné len registrovaným Používateľom.',
      '5.2. Účet môže vytvoriť osoba staršia ako 16 rokov, resp. [DOPLNIŤ, ak platí iná veková hranica].',
      '5.3. Používateľ je povinný pri registrácii uviesť pravdivé, správne a úplné údaje a počas celého trvania zmluvného vzťahu ich udržiavať aktuálne. Zmenu údajov je Používateľ povinný vykonať v Účte najneskôr do 30 dní odo dňa takejto zmeny.',
      '5.4. Používateľ zodpovedá za pravdivosť, správnosť a úplnosť údajov, ktoré uvedie v Účte, v Profile alebo v Dopyte. Ak Používateľ zadáva údaje tretej osoby, je povinný tak konať len na základe osobitného právneho vzťahu s touto osobou alebo si zabezpečiť jej predchádzajúci súhlas; na žiadosť Prevádzkovateľa je povinný túto skutočnosť preukázať.',
      '5.5. Účet je neprenosný. Používateľ zodpovedá za utajenie prístupových údajov a za všetky úkony vykonané pod jeho Účtom. Podozrenie na zneužitie Účtu je povinný bezodkladne oznámiť Prevádzkovateľovi prostredníctvom Podpory.',
      '5.6. Používateľ nie je oprávnený sprístupniť Účet ani Služby tretej osobe bez súhlasu Prevádzkovateľa.',
      '5.7. Prevádzkovateľ je oprávnený Účet zablokovať alebo zrušiť pri porušení týchto VOP, pri podozrení na zneužitie Platformy, pri uvedení nepravdivých údajov alebo na žiadosť Používateľa.',
    ],
  },
  {
    id: 'cl-6',
    title:
      'Obsah služieb „Míľniky“, „Pripomienky“ a „Kalkulačky“, práva a povinnosti Prevádzkovateľa',
    items: [
      '6.1. Prevádzkovateľ sprístupní Používateľovi Obsah Platformy v rozsahu zodpovedajúcom Profilu Používateľa a zvolenej právnej forme podnikania.',
      '6.2. V súvislosti s poskytovaním Služieb je Prevádzkovateľ povinný najmä:',
      '6.2.1. zabezpečovať funkčnosť Platformy a jej dostupnosť v rozsahu podľa čl. 15 týchto VOP;',
      '6.2.2. vyvíjať primerané úsilie, aby bol Obsah Platformy vecne správny a zosúladený s platnou legislatívou;',
      '6.2.3. pravidelne aktualizovať programové vybavenie Platformy z hľadiska funkčnosti aj bezpečnosti;',
      '6.2.4. vopred informovať o plánovanej Odstávke Služby presahujúcej [DOPLNIŤ, napr. 30] minút, a to oznámením v Platforme, e-mailom alebo inou vhodnou formou, ak je to vzhľadom na okolnosti možné;',
      '6.2.5. poskytovať Používateľovi pomoc a podporu prostredníctvom Podpory.',
      '6.3. V súvislosti s poskytovaním Služieb je Prevádzkovateľ oprávnený najmä:',
      '6.3.1. dočasne a bez predchádzajúceho upozornenia prerušiť poskytovanie Služby, ak Používateľ porušil povinnosti podľa Zmluvy alebo týchto VOP, najmä povinnosti podľa čl. 9, odseku 9.2, a to až do vykonania nápravy;',
      '6.3.2. obmedziť rozsah využívania Služieb Používateľom, ak by jeho doterajšou činnosťou dochádzalo k ohrozeniu alebo podstatnému obmedzeniu plynulosti alebo funkčnosti prevádzky Platformy alebo činnosti ostatných Používateľov;',
      '6.3.3. jednostranne zmeniť funkčnú alebo technickú špecifikáciu Služby alebo vylepšiť užívateľské rozhranie, ak je táto zmena v súlade s najnovšími odbornými poznatkami alebo nesporne prispeje k užívateľskému komfortu;',
      '6.3.4. informovať Používateľa o Službách a iných aktivitách Prevádzkovateľa e-mailom alebo iným vhodným spôsobom, a to v rozsahu prípustnom podľa právnych predpisov o elektronickej komunikácii; Používateľ má právo takúto komunikáciu kedykoľvek bezplatne odmietnuť;',
      '6.3.5. v odôvodnených prípadoch, najmä pri údržbe, technických kontrolách, opravách alebo z dôvodu okolností vyššej moci, bez predchádzajúceho upozornenia prerušiť alebo obmedziť poskytovanie Služby, avšak iba na nevyhnutnú dobu;',
      '6.3.6. odmietnuť poskytnutie Služby Používateľovi, ktorému už predtým bolo poskytovanie Služby pozastavené alebo s ktorým Prevádzkovateľ odstúpil od Zmluvy pre opakované alebo závažné porušenie povinností.',
      '6.4. Osobitné ustanovenia o službe „Kalkulačky“:',
      '6.4.1. Výsledky kalkulačiek sú výlučne orientačné. Vychádzajú z údajov zadaných Používateľom a zo sadzieb, parametrov a právnej úpravy platných v čase výpočtu.',
      '6.4.2. Výsledok kalkulačky nie je ponukou, cenovou ponukou, prísľubom poskytnutia produktu, posúdením bonity ani odborným posudkom a nezakladá Používateľovi žiaden právny nárok voči Prevádzkovateľovi ani voči Partnerovi.',
      '6.4.3. Prevádzkovateľ nezodpovedá za rozhodnutia prijaté Používateľom na základe výsledku kalkulačky.',
      '6.5. Osobitné ustanovenia o službe „Pripomienky“:',
      '6.5.1. Pripomienky sú doplnkovou pomôckou pri sledovaní termínov. Zodpovednosť za včasné a riadne splnenie zákonných povinností nesie výlučne Používateľ.',
      '6.5.2. Neodoslanie, oneskorené doručenie, nesprávne nastavenie alebo nezobrazenie Pripomienky nezbavuje Používateľa jeho povinností voči orgánom verejnej správy a nezakladá zodpovednosť Prevádzkovateľa za sankcie, penále alebo iné následky uložené Používateľovi.',
      '6.5.3. Prevádzkovateľ nezaručuje úplnosť zoznamu termínov vo vzťahu ku konkrétnej situácii Používateľa.',
    ],
  },
  {
    id: 'cl-7',
    title: 'Obsah služby „Trezor“',
    items: [
      '7.1. Prevádzkovateľ umožní Používateľovi ukladať a spravovať Obsah Používateľa v rozsahu a limitoch uvedených v Cenníku alebo v Platforme. Limity úložiska a povolené formáty súborov: [DOPLNIŤ].',
      '7.2. Prevádzkovateľ berie na vedomie, že Obsah Používateľa uložený v Trezore môže byť predmetom obchodného tajomstva Používateľa, know-how alebo inej ochrany.',
      '7.3. Prevádzkovateľ nenadobúda k Obsahu Používateľa vlastnícke ani iné majetkové právo. Prístup k nemu má výlučne v rozsahu nevyhnutnom na prevádzku, podporu, bezpečnosť a plnenie zákonných povinností.',
      '7.4. Trezor nie je zálohovacím ani archivačným riešením v zmysle predpisov o archívoch a registratúre a nenahrádza povinnú evidenciu ani úschovu dokladov podľa osobitných predpisov. Používateľ je povinný udržiavať si vlastné kópie dôležitých dokumentov.',
      '7.5. Prevádzkovateľ nie je povinný vyhotovovať zálohy Obsahu Používateľa nad rámec záloh vyhotovovaných pre vlastnú potrebu obnovy v prípade technickej poruchy. Tieto zálohy neslúžia na obnovu dát na vyžiadanie Používateľa, ak nie je dojednané inak.',
      '7.6. Zodpovednosť za uložený obsah. Prevádzkovateľ v súlade s § 6 zákona č. 22/2004 Z. z. o elektronickom obchode nezodpovedá za informácie uložené na žiadosť Používateľa, ak nevie o protiprávnom obsahu uložených informácií, a nie je povinný sledovať informácie ani aktívne vyhľadávať informácie, ktoré sa prenášajú alebo ukladajú.',
      '7.7. Postup pri protiprávnom obsahu. Ak sa Prevádzkovateľ akýmkoľvek spôsobom dozvie o protiprávnosti uloženého obsahu, vyzve Používateľa na jeho bezodkladné odstránenie. Ak Používateľ výzve nevyhovie, je Prevádzkovateľ povinný takýto obsah odstrániť alebo k nemu zamedziť prístup a je oprávnený pozastaviť poskytovanie Služby alebo Účet zrušiť.',
      '7.8. Prevádzkovateľ nezodpovedá Používateľovi ani tretej osobe za škodu, ušlý zisk ani inú ujmu vzniknutú v príčinnej súvislosti s plnením povinností podľa zákona č. 22/2004 Z. z. o elektronickom obchode.',
      '7.9. Po zrušení Účtu je Obsah Používateľa vymazaný v lehote [DOPLNIŤ, napr. 30] dní, ak právne predpisy neustanovujú inak. Používateľ má pred zrušením Účtu možnosť Obsah Používateľa exportovať.',
    ],
  },
  {
    id: 'cl-8',
    title: 'Obsah služby „Dopyty“, postavenie Prevádzkovateľa a Partnerov',
    items: [
      '8.1. Odoslaním Dopytu Používateľ žiada o odovzdanie svojich kontaktných a súvisiacich údajov vybranému Partnerovi alebo viacerým Partnerom na účel kontaktovania a predloženia ponuky. Rozsah odovzdávaných údajov a identifikácia Partnera sú Používateľovi zobrazené pred záväzným odoslaním Dopytu.',
      '8.2. Prevádzkovateľ vystupuje výlučne ako sprostredkovateľ kontaktu. Nie je zmluvnou stranou vzťahu medzi Používateľom a Partnerom, nekoná v mene Partnera ani na jeho účet, neposkytuje služby Partnera a nezaručuje, že medzi Používateľom a Partnerom dôjde k uzavretiu zmluvy.',
      '8.3. Prevádzkovateľ nezodpovedá za obsah, kvalitu, cenu, rozsah, včasnosť ani zákonnosť plnenia Partnera, za správnosť informácií poskytnutých Partnerom, ani za to, či Partner disponuje potrebným oprávnením na výkon svojej činnosti. Nároky vyplývajúce zo vzťahu s Partnerom si Používateľ uplatňuje priamo u Partnera.',
      '8.4. Prevádzkovateľ vykonáva primeranú kontrolu údajov Partnerov zaradených do databázy, negarantuje však ich úplnosť ani aktuálnosť.',
      '8.5. Odoslanie Dopytu je pre Používateľa bezplatné, ak nie je pri konkrétnom Dopyte uvedené inak. Prevádzkovateľ môže byť za sprostredkovanie odmeňovaný Partnermi; táto skutočnosť neovplyvňuje cenu služby Partnera pre Používateľa. [SKONTROLOVAŤ súlad so skutočným obchodným modelom]',
      '8.6. Poradie a výber zobrazovaných Partnerov sú určované na základe [DOPLNIŤ kritériá – napr. zhoda s Profilom, kategória, región, dostupnosť]. Ak je poradie zobrazenia ovplyvnené odplatou od Partnera, Platforma túto skutočnosť pri výsledkoch výslovne označí.',
      '8.7. Používateľ je povinný odosielať Dopyty len s vážnym záujmom o službu, uvádzať pravdivé údaje a neodosielať Dopyty opakovane bez vážneho dôvodu.',
      '8.8. Prevádzkovateľ je oprávnený obmedziť počet Dopytov odoslaných jedným Používateľom za určité obdobie a odmietnuť odoslanie Dopytu, ktorý javí známky zneužitia Služby.',
    ],
  },
  {
    id: 'cl-9',
    title: 'Práva a povinnosti Používateľa, využívanie dojednaných Služieb',
    items: [
      '9.1. Používateľ je oprávnený najmä:',
      '9.1.1. využívať Služby za podmienok ustanovených v týchto VOP a nebyť v ich využívaní rušený iným Používateľom alebo treťou osobou;',
      '9.1.2. žiadať vrátenie pomernej časti Ceny za dobu neposkytovania platenej Služby zavinenú Prevádzkovateľom, a to za podmienok podľa čl. 15;',
      '9.1.3. obracať sa so svojimi žiadosťami, pripomienkami a reklamáciami na Podporu;',
      '9.1.4. kedykoľvek zrušiť svoj Účet a exportovať Obsah Používateľa;',
      '9.1.5. odmietnuť zasielanie marketingovej komunikácie bez vplyvu na poskytovanie Služieb.',
      '9.2. Používateľ je povinný najmä:',
      '9.2.1. neukladať do Platformy, neprenášať prostredníctvom nej ani nesprístupňovať:',
      '9.2.1.1. obsah erotickej alebo pornografickej povahy;',
      '9.2.1.2. obsah nabádajúci k rodovej, národnostnej, náboženskej, rasovej alebo etnickej neznášanlivosti, šíriaci alebo podnecujúci extrémizmus alebo propagujúci ideológie smerujúce k potlačeniu základných práv a slobôd;',
      '9.2.1.3. obsah zasahujúci do osobných a osobnostných práv tretích osôb alebo do práva na ochranu dobrého mena právnickej osoby;',
      '9.2.1.4. nelegálne nadobudnutý softvér alebo dielo chránené právom duševného vlastníctva bez oprávnenia (tzv. warez), ani odkazy naň;',
      '9.2.1.5. obsah porušujúci alebo ohrozujúci autorské práva alebo iné práva duševného vlastníctva;',
      '9.2.1.6. škodlivý kód, najmä vírusy, trójske kone alebo skripty spôsobilé narušiť funkčnosť Platformy;',
      '9.2.1.7. obsah akýmkoľvek iným spôsobom porušujúci právne predpisy Slovenskej republiky alebo dobré mravy;',
      '9.2.2. platiť Cenu za poskytnutú platenú Službu a všetky súvisiace poplatky podľa Zmluvy a Cenníka;',
      '9.2.3. nevyužívať Trezor ani iné úložné kapacity Platformy na účely skladovania, archivovania alebo zálohovania dát nesúvisiacich s podnikateľskou agendou Používateľa, ani ako priestor na presúvanie dát medzi osobami;',
      '9.2.4. nevyužívať Služby spôsobom, ktorý by neprimerane obmedzoval ostatných Používateľov alebo Prevádzkovateľa, najmä nezaťažovať Platformu automatizovanými požiadavkami nad rámec bežného používania;',
      '9.2.5. neobchádzať zabezpečenie Platformy, nepristupovať k údajom iných Používateľov a nevykonávať bezpečnostné, penetračné ani záťažové testy bez predchádzajúceho písomného súhlasu Prevádzkovateľa;',
      '9.2.6. nezasahovať do zdrojového kódu Platformy, nedekompilovať ho ani sa nepokúšať odvodiť zdrojový kód;',
      '9.2.7. nepoužívať Platformu na rozosielanie nevyžiadanej komunikácie;',
      '9.2.8. bezodkladne oznámiť Prevádzkovateľovi všetky jemu známe skutočnosti, ktoré by mohli nepriaznivo ovplyvniť poskytovanie Služieb, najmä podozrenie na zneužitie Účtu alebo na bezpečnostný incident;',
      '9.2.9. využívať Služby v súlade s právnymi predpismi Slovenskej republiky, Zmluvou a pokynmi Prevádzkovateľa.',
      '9.3. Používateľ si je vedomý svojej prípadnej trestnoprávnej zodpovednosti podľa zákona č. 300/2005 Z. z. (Trestný zákon) za konanie v rozpore s uvedeným zákonom.',
      '9.4. Používateľ zodpovedá za škodu spôsobenú Prevádzkovateľovi porušením povinností podľa tohto článku, a to aj vtedy, ak ju spôsobila tretia osoba, ktorej Používateľ takéto konanie umožnil.',
    ],
  },
  {
    id: 'cl-10',
    title: 'Cena za Službu a platobné podmienky',
    items: [
      '[VARIANT A – ak je Platforma pre Používateľov úplne bezplatná a monetizuje sa výlučne cez Partnerov, ponechať len bod 10.1 a zvyšok článku vypustiť; vypustiť aj čl. 11 v časti týkajúcej sa odplaty.]',
      '10.1. Používanie Platformy je pre Používateľa bezplatné, s výnimkou funkcií výslovne označených ako platené. Na bezplatné poskytnutie Služby nemá Používateľ právny nárok.',
      '10.2. Ceny platených Služieb sú účtované podľa platného Cenníka, ktorý je neoddeliteľnou súčasťou Zmluvy a je zverejnený na [DOPLNIŤ URL]. Ceny sú uvádzané bez DPH i vrátane DPH.',
      '10.3. Zúčtovacím obdobím je [DOPLNIŤ – kalendárny mesiac / rok], ak nie je v Cenníku uvedené inak. Prevádzkovateľ je oprávnený poskytnúť zľavu pri úhrade za viacero zúčtovacích období vopred.',
      '10.4. Predplatné [sa automaticky obnovuje / sa neobnovuje] na ďalšie obdobie. Používateľ ho môže vypovedať v nastaveniach Účtu kedykoľvek s účinnosťou ku koncu prebiehajúceho zúčtovacieho obdobia.',
      '10.5. Faktúra s náležitosťami daňového dokladu je Používateľovi zasielaná elektronicky, s čím Používateľ súhlasí. Splatnosť faktúry je 14 kalendárnych dní odo dňa jej doručenia, ak nie je dohodnuté inak.',
      '10.6. Pri omeškaní s úhradou je Prevádzkovateľ oprávnený účtovať Používateľovi, ktorý nie je Spotrebiteľom, úrok z omeškania vo výške 0,05 % z dlžnej sumy za každý začatý deň omeškania a pozastaviť prístup k plateným funkciám až do vykonania nápravy.',
      '10.7. Prevádzkovateľ je oprávnený meniť výšku Ceny a pravidlá jej tvorby. Každé zvýšenie Ceny je povinný oznámiť Používateľovi spôsobom podľa čl. 12 najneskôr pri vystavení faktúry na ďalšie zúčtovacie obdobie. Zníženie Ceny sa môže oznámiť len zverejnením v Platforme.',
      '10.8. Zmluvy uzavreté elektronicky sú archivované u Prevádzkovateľa a Používateľovi sú dostupné v jeho Účte.',
    ],
  },
  {
    id: 'cl-11',
    title: 'Odstúpenie Spotrebiteľa od zmluvy',
    items: [
      '11.1. Spotrebiteľ je oprávnený odstúpiť od zmluvy uzavretej na diaľku bez uvedenia dôvodu do 14 dní odo dňa jej uzavretia, a to v súlade so zákonom č. 108/2024 Z. z. o ochrane spotrebiteľa.',
      '11.2. Spotrebiteľ nie je oprávnený odstúpiť od zmluvy, ak sa poskytovanie digitálneho obsahu alebo digitálnej služby začalo pred uplynutím lehoty na odstúpenie s jeho výslovným súhlasom a s vyhlásením, že bol poučený o strate práva na odstúpenie po úplnom poskytnutí Služby. Ak bola Služba poskytnutá len čiastočne, Spotrebiteľ uhradí cenu za skutočne poskytnuté plnenie.',
      '11.3. Odstúpenie môže Spotrebiteľ oznámiť e-mailom na [DOPLNIŤ] alebo prostredníctvom formulára dostupného na [DOPLNIŤ URL].',
      '11.4. Odstúpením od zmluvy sa zmluva od začiatku zrušuje. Prevádzkovateľ je povinný nepokračovať v poskytovaní Služby a vrátiť Spotrebiteľovi najneskôr do 14 dní odo dňa doručenia oznámenia o odstúpení všetky prijaté platby, a to rovnakým platobným prostriedkom, ak sa strany nedohodnú inak.',
      '11.5. Týmto článkom nie je dotknuté právo Používateľa odstúpiť od Zmluvy v iných prípadoch, v ktorých to tieto VOP alebo právne predpisy výslovne ustanovujú.',
    ],
  },
  {
    id: 'cl-12',
    title: 'Zmena Služby, zmena VOP a Cenníka',
    items: [
      '12.1. Používateľ je oprávnený kedykoľvek požiadať o zmenu, rozšírenie alebo zúženie rozsahu platenej Služby. Prevádzkovateľ jeho žiadosti vyhovie najneskôr k začiatku nasledujúceho zúčtovacieho obdobia, ak tomu nebránia závažné technické alebo právne prekážky a ak má Používateľ uhradené všetky záväzky.',
      '12.2. Prevádzkovateľ môže funkcie Platformy meniť, dopĺňať alebo ukončiť. Ak by zmena podstatne zhoršila platenú Službu, Používateľ má právo predplatné vypovedať s nárokom na vrátenie pomernej časti Ceny za nevyčerpané obdobie.',
      '12.3. Prevádzkovateľ je oprávnený vykonať jednostrannú zmenu VOP a Cenníka, najmä pri zmene legislatívy, rozsahu Služieb alebo obchodného modelu.',
      '12.4. Zmenu VOP je Prevádzkovateľ povinný oznámiť registrovaným Používateľom e-mailom alebo oznámením v Platforme najmenej [DOPLNIŤ, napr. 15] dní pred nadobudnutím jej účinnosti. Za riadne oznámenie sa považuje aj zverejnenie oznámenia na viditeľnom mieste v Platforme spolu so súčasným zaslaním oznámenia na e-mailovú adresu Používateľa.',
      '12.5. Zmena VOP alebo Cenníka sa považuje za oznámenú dňom doručenia oznámenia Používateľovi. Ak nie je možné doručenie preukázať, považuje sa zmena za oznámenú spôsobom podľa čl. 19, odseku 19.3.',
      '12.6. Ak Používateľ so zmenou nesúhlasí, je oprávnený zrušiť Účet, resp. vypovedať platenú Službu alebo odstúpiť od Zmluvy, a to najneskôr do 1 mesiaca odo dňa oznámenia zmeny. Pokračovaním v používaní Platformy po dni nadobudnutia účinnosti zmeny sa zmena považuje za akceptovanú.',
      '12.7. Predchádzajúce verzie VOP sú archivované a dostupné na [DOPLNIŤ URL].',
    ],
  },
  {
    id: 'cl-13',
    title: 'Trvanie a zánik Zmluvy',
    items: [
      '13.1. Zmluva sa uzatvára na dobu neurčitú, ak sa zmluvné strany výslovne nedohodli inak.',
      '13.2. Zmluva zaniká:',
      '13.2.1. uplynutím času, na ktorý bola uzavretá, ak bola uzavretá na dobu určitú;',
      '13.2.2. dohodou zmluvných strán;',
      '13.2.3. odstúpením od Zmluvy z dôvodov uvedených v týchto VOP alebo v právnych predpisoch;',
      '13.2.4. výpoveďou ktorejkoľvek zmluvnej strany;',
      '13.2.5. zrušením Účtu Používateľom;',
      '13.2.6. zánikom Prevádzkovateľa alebo Používateľa bez právneho nástupcu.',
      '13.3. Používateľ môže odstúpiť od Zmluvy najmä v prípade, ak:',
      '13.3.1. nesúhlasí so zmenou VOP alebo Cenníka podľa čl. 12, odseku 12.6;',
      '13.3.2. Prevádzkovateľ ani po reklamácii opakovane neposkytuje Služby podľa Zmluvy alebo ich poskytuje s podstatnými vadami.',
      '13.4. Prevádzkovateľ môže odstúpiť od Zmluvy v prípade, ak:',
      '13.4.1. sa údaje uvedené Používateľom preukážu ako nepravdivé;',
      '13.4.2. Používateľ porušil čo i len raz niektorú z povinností podľa čl. 9, odseku 9.2, bodov 9.2.1, 9.2.4 alebo 9.2.5, alebo opakovane či závažným spôsobom porušil inú povinnosť podľa týchto VOP;',
      '13.4.3. Používateľ neuhradil Cenu ani v dodatočnej lehote poskytnutej Prevádzkovateľom;',
      '13.4.4. Používateľ pri využívaní Služby porušuje právne predpisy alebo práva tretích osôb.',
      '13.5. Odstúpenie je účinné dňom doručenia oznámenia druhej zmluvnej strane. Pri odstúpení Prevádzkovateľa z dôvodov podľa odseku 13.4 sa nevyžaduje písomná forma a postačuje oznámenie akýmkoľvek preukázateľným spôsobom (e-mail, oznámenie v Platforme).',
      '13.6. Ktorákoľvek zo zmluvných strán je oprávnená vypovedať Zmluvu uzavretú na dobu neurčitú aj bez uvedenia dôvodu. Výpovedná lehota je 1 mesiac a začína plynúť prvým dňom kalendárneho mesiaca nasledujúceho po doručení výpovede druhej zmluvnej strane. Pri bezplatných Službách môže Používateľ ukončiť Zmluvu zrušením Účtu s okamžitou účinnosťou.',
      '13.7. V prípade odstúpenia Prevádzkovateľa od Zmluvy z dôvodov podľa odseku 13.4 nie je Prevádzkovateľ povinný vrátiť Používateľovi nespotrebovanú časť predplatného.',
      '13.8. Zánikom Zmluvy nie sú dotknuté ustanovenia o ochrane dôverných informácií, o zodpovednosti za škodu a o právach duševného vlastníctva.',
    ],
  },
  {
    id: 'cl-14',
    title: 'Uplatnenie práva zo zodpovednosti za vady – Reklamácia',
    items: [
      '14.1. Ak Služba nemá vlastnosti dojednané Zmluvou alebo vlastnosti obvyklé pre obdobnú službu, Používateľ môže vadu vytknúť na [DOPLNIŤ e-mail]. Prevádzkovateľ vydá Používateľovi potvrdenie o vytknutí vady.',
      '14.2. Prevádzkovateľ vybaví reklamáciu najneskôr do 30 dní odo dňa jej uplatnenia. Podrobnosti upravuje Reklamačný poriadok dostupný na [DOPLNIŤ URL].',
      '14.3. Poskytnutie pomoci a podpory na základe žiadosti Používateľa prostredníctvom Podpory nie je reklamáciou.',
      '14.4. Ak Spotrebiteľ nie je spokojný so spôsobom vybavenia reklamácie alebo sa domnieva, že Prevádzkovateľ porušil jeho práva, má právo obrátiť sa na Prevádzkovateľa so žiadosťou o nápravu.',
      '14.5. Ak Prevádzkovateľ na žiadosť o nápravu odpovie zamietavo alebo na ňu neodpovie do 30 dní odo dňa jej odoslania, Spotrebiteľ má právo podať návrh na začatie alternatívneho riešenia sporu podľa § 12 zákona č. 391/2015 Z. z. o alternatívnom riešení spotrebiteľských sporov.',
      '14.6. Príslušným subjektom alternatívneho riešenia sporov je Slovenská obchodná inšpekcia alebo iná oprávnená právnická osoba zapísaná v zozname subjektov alternatívneho riešenia sporov vedenom Ministerstvom hospodárstva Slovenskej republiky. Ak je príslušných viacero subjektov, právo voľby má Spotrebiteľ.',
      '14.7. Zodpovednosť za vady Služby poskytovanej Používateľovi, ktorý nie je Spotrebiteľom, sa spravuje ustanoveniami Obchodného zákonníka, ak tieto VOP neustanovujú inak.',
    ],
  },
  {
    id: 'cl-15',
    title: 'Dostupnosť Služby',
    items: [
      '15.1. Prevádzkovateľ vyvíja primerané úsilie o nepretržitú dostupnosť Platformy, negarantuje ju však. Platforma je poskytovaná „tak, ako je“, ak nie je pri konkrétnej platenej Službe dojednaná garantovaná úroveň dostupnosti.',
      '15.2. Za nedostupnosť Služby sa nepovažuje:',
      '15.2.1. plánovaná Odstávka Služby oznámená podľa čl. 6, odseku 6.2.4;',
      '15.2.2. prerušenie spôsobené okolnosťami vyššej moci alebo výpadkom na strane subdodávateľa, na ktorý Prevádzkovateľ nemá dosah;',
      '15.2.3. nedostupnosť spôsobená sieťovým alebo aplikačným útokom (najmä typu DDoS);',
      '15.2.4. nedostupnosť spôsobená konaním alebo opomenutím Používateľa alebo zariadením či pripojením na jeho strane.',
      '15.3. Do celkovej nedostupnosti Služby sa započítavajú len nepretržité výpadky trvajúce dlhšie ako [DOPLNIŤ, napr. 10] minút.',
      '15.4. Pri platených Službách má Používateľ právo na vrátenie pomernej časti Ceny za dobu nedostupnosti zavinenej Prevádzkovateľom, alebo podľa voľby Prevádzkovateľa na predĺženie predplateného obdobia. O vrátenie musí Používateľ požiadať najneskôr do [DOPLNIŤ, napr. 3] mesiacov odo dňa vzniku nedostupnosti a uviesť presný časový interval jej trvania. Nárok nie je automatický; Prevádzkovateľ posudzuje každú žiadosť podľa okolností prípadu.',
    ],
  },
  {
    id: 'cl-16',
    title: 'Zhromažďovanie informácií o Používateľoch, ochrana osobných údajov',
    items: [
      '[POZNÁMKA: tento článok je zhrnutím. Úplné informácie musia byť v samostatných Zásadách ochrany osobných údajov, na ktoré sa tu odkazuje. Nižšie uvedené je nutné zosúladiť so skutočným stavom spracúvania.]',
      'ČASŤ A – Spracúvanie údajov Prevádzkovateľom vo vlastnom mene',
      '16.1. Prevádzkovateľ spracúva osobné údaje Používateľa – fyzickej osoby na týchto právnych základoch:',
      '16.1.1. plnenie zmluvy podľa čl. 6 ods. 1 písm. b) GDPR – na účel registrácie a vedenia Účtu, poskytovania Služieb, personalizácie obsahu podľa Profilu, sprostredkovania Dopytu a fakturácie;',
      '16.1.2. plnenie zákonnej povinnosti podľa čl. 6 ods. 1 písm. c) GDPR – najmä na účely vedenia účtovníctva a archivácie dokladov;',
      '16.1.3. oprávnený záujem podľa čl. 6 ods. 1 písm. f) GDPR – na účely zákazníckej podpory, bezpečnosti Platformy, prevencie zneužitia, vývoja a zlepšovania Služieb a priameho marketingu vlastných Služieb;',
      '16.1.4. súhlas podľa čl. 6 ods. 1 písm. a) GDPR – na účely, ktoré nie sú kryté vyššie uvedenými základmi, najmä [DOPLNIŤ – napr. analytické cookies, zasielanie newslettera]. Súhlas je dobrovoľný a Používateľ ho môže kedykoľvek odvolať; odvolanie nemá vplyv na zákonnosť spracúvania pred jeho odvolaním.',
      '16.2. Rozsah spracúvaných osobných údajov: [DOPLNIŤ – napr. meno, priezvisko, e-mail, telefónne číslo, IČO a údaje o podnikaní, IP adresa, údaje o používaní Platformy].',
      '16.3. Odovzdanie údajov Partnerovi. Pri odoslaní Dopytu Prevádzkovateľ odovzdá Partnerovi údaje v rozsahu zobrazenom Používateľovi pred odoslaním Dopytu. Partner sa vo vzťahu k takto získaným údajom stáva samostatným prevádzkovateľom a spracúva ich podľa vlastných zásad. Právnym základom odovzdania je [DOPLNIŤ – plnenie zmluvy / súhlas; zosúladiť s implementáciou].',
      '16.4. Kategórie príjemcov osobných údajov:',
      '16.4.1. poskytovatelia hostingu, databázových, e-mailových a analytických služieb zabezpečujúci prevádzku Platformy;',
      '16.4.2. Partneri, ktorým bol odovzdaný Dopyt;',
      '16.4.3. obchodní partneri zabezpečujúci právne, účtovné, daňové a audítorské služby;',
      '16.4.4. orgány verejnej moci v prípadoch, keď to vyplýva z právneho predpisu alebo rozhodnutia.',
      'Aktuálny zoznam príjemcov a ďalších sprostredkovateľov je dostupný na [DOPLNIŤ URL].',
      '16.5. Osobné údaje sú spracúvané v krajinách Európskej únie a Európskeho hospodárskeho priestoru. Prenos do tretej krajiny môže nastať len ak Európska komisia považuje jej právny režim za zabezpečujúci primeranú úroveň ochrany alebo ak boli prijaté primerané záruky.',
      '16.6. Doby uchovávania osobných údajov sú uvedené v Zásadách ochrany osobných údajov.',
      '16.7. Používateľ ako dotknutá osoba má právo na prístup k osobným údajom (čl. 15 GDPR), na opravu (čl. 16), na výmaz (čl. 17), na obmedzenie spracúvania (čl. 18), na prenosnosť (čl. 20), namietať spracúvanie (čl. 21), ako aj právo nebyť predmetom automatizovaného individuálneho rozhodovania (čl. 22) a právo na oznámenie porušenia ochrany osobných údajov (čl. 34).',
      '16.8. Používateľ má právo podať návrh na začatie konania na Úrad na ochranu osobných údajov Slovenskej republiky podľa § 100 zákona č. 18/2018 Z. z.',
      '16.9. Kontakt na zodpovednú osobu (ak je určená): [DOPLNIŤ].',
      '16.10. Prevádzkovateľ prijal primerané technické a organizačné opatrenia na ochranu osobných údajov pred ich stratou, poškodením, zničením alebo neoprávneným spracúvaním. Prehľad opatrení je dostupný na [DOPLNIŤ URL].',
      'ČASŤ B – Spracúvanie údajov v mene Používateľa (sprostredkovateľská doložka podľa čl. 28 GDPR)',
      '16.11. Ak Obsah Používateľa uložený v Trezore obsahuje osobné údaje tretích osôb (najmä zamestnancov, klientov alebo obchodných partnerov Používateľa), Používateľ vystupuje ako prevádzkovateľ a Prevádzkovateľ ako sprostredkovateľ podľa čl. 28 GDPR. Na takéto spracúvanie sa vzťahujú nasledujúce podmienky:',
      '16.11.1. Predmet, povaha a účel spracúvania: uchovávanie a sprístupňovanie Obsahu Používateľa v rámci Služby Trezor. Doba spracúvania: po dobu trvania Zmluvy, resp. do vymazania podľa čl. 7, odseku 7.9. Kategórie dotknutých osôb a osobných údajov: určuje Používateľ tým, aký obsah do Trezora nahrá.',
      '16.11.2. Prevádzkovateľ spracúva osobné údaje výlučne na základe pokynov Používateľa, ktoré sú obsiahnuté v Zmluve a týchto VOP, a to spôsobom zodpovedajúcim bežnému poskytovaniu Služby.',
      '16.11.3. Prevádzkovateľ zabezpečí, aby sa osoby oprávnené spracúvať osobné údaje zaviazali k mlčanlivosti; táto povinnosť trvá aj po zániku Zmluvy.',
      '16.11.4. Prevádzkovateľ má všeobecné povolenie na zapojenie ďalších sprostredkovateľov. O zamýšľanej zmene v ich zozname informuje Používateľa aktualizáciou zoznamu podľa čl. 16, odseku 16.4, čím Používateľovi umožní voči zmene namietať. Ďalšiemu sprostredkovateľovi je Prevádzkovateľ povinný uložiť rovnaké povinnosti; za nesplnenie ich povinností zodpovedá Používateľovi Prevádzkovateľ.',
      '16.11.5. Prevádzkovateľ poskytne Používateľovi súčinnosť pri vybavovaní žiadostí dotknutých osôb podľa kapitoly III GDPR a pri plnení povinností podľa čl. 32 až 36 GDPR.',
      '16.11.6. Prevádzkovateľ oznámi Používateľovi porušenie ochrany osobných údajov bez zbytočného odkladu, najneskôr do 72 hodín od jeho zistenia.',
      '16.11.7. Prevádzkovateľ poskytne Používateľovi informácie potrebné na preukázanie splnenia povinností podľa čl. 28 GDPR a umožní audit. Audit je Používateľ povinný oznámiť najmenej 1 mesiac vopred; audit sa vykoná v pracovnom čase, na náklady Používateľa a nesmie neprimerane zasahovať do činnosti Prevádzkovateľa.',
      '16.11.8. Prevádzkovateľ bezodkladne oznámi Používateľovi, ak podľa jeho názoru pokyn Používateľa porušuje GDPR alebo iný predpis o ochrane osobných údajov.',
      '16.11.9. Po skončení Zmluvy Prevádzkovateľ podľa rozhodnutia Používateľa osobné údaje vymaže alebo ich vráti a vymaže existujúce kópie, ak právny predpis nepožaduje ich uchovávanie.',
    ],
  },
  {
    id: 'cl-17',
    title: 'Zodpovednosť zmluvných strán',
    items: [
      '17.1. Prevádzkovateľ nezodpovedá za škodu, ktorá Používateľovi vznikne v dôsledku rozhodnutí prijatých na základe Obsahu Platformy, výsledkov kalkulačiek, Pripomienok alebo konania Partnera.',
      '17.2. Každá zo zmluvných strán zodpovedá iba za skutočnú škodu preukázateľne spôsobenú jej zavinením. Prevádzkovateľ nezodpovedá za nepriamu škodu, ušlý zisk, sankcie uložené orgánmi verejnej správy ani za stratu dát spôsobenú okolnosťami mimo jeho kontroly.',
      '17.3. Prevádzkovateľ nezodpovedá za škodu spôsobenú treťou osobou, ktorá bez zavinenia Prevádzkovateľa získa neoprávnený prístup k Účtu alebo k Obsahu Používateľa, najmä v dôsledku nedostatočnej ochrany prístupových údajov na strane Používateľa.',
      '17.4. Voči Používateľovi, ktorý nie je Spotrebiteľom, je celková zodpovednosť Prevádzkovateľa obmedzená do výšky 12-násobku mesačnej Ceny Služby, ktorej sa zodpovednosť týka; ak je Služba poskytovaná bezplatne, do výšky [DOPLNIŤ sumu, napr. 500] EUR.',
      '17.5. Vzniknutú škodu môže Prevádzkovateľ vyrovnať alebo znížiť aj poskytnutím Služby alebo kreditu v hodnote zodpovedajúcej výške škody.',
      '17.6. Zmluvná strana je povinná nahradiť preukázanú škodu do 30 kalendárnych dní od jej preukázania.',
      '17.7. Ustanovenia tohto článku sa neuplatnia v rozsahu, v akom to právne predpisy nepripúšťajú, najmä pri škode spôsobenej úmyselne, hrubou nedbanlivosťou alebo na zdraví, a v rozsahu kogentných práv Spotrebiteľa.',
    ],
  },
  {
    id: 'cl-18',
    title: 'Práva duševného vlastníctva',
    items: [
      '18.1. Obsah Platformy, jej zdrojový kód, dizajn, databázy a označenia sú chránené autorským právom a ďalšími predpismi o ochrane duševného vlastníctva a patria Prevádzkovateľovi alebo jeho licenciodarcom.',
      '18.2. Používateľovi sa udeľuje nevýhradné, neprenosné a odvolateľné právo používať Platformu na vlastné podnikateľské účely počas trvania Zmluvy.',
      '18.3. Bez predchádzajúceho písomného súhlasu Prevádzkovateľa je zakázané Obsah Platformy kopírovať, ďalej šíriť, sprístupňovať verejnosti, systematicky sťahovať alebo automatizovane zbierať (scraping), spracúvať na trénovanie modelov strojového učenia alebo z neho vytvárať odvodené diela.',
      '18.4. Šablóny a vzory dokumentov sprístupnené na stiahnutie môže Používateľ použiť pre vlastnú potrebu; nesmie ich ďalej predávať, licencovať ani inak distribuovať.',
      '18.5. Používateľ vyhlasuje, že je oprávnený nahrať a spracúvať Obsah Používateľa a že jeho nahratím neporušuje práva tretích osôb. Za porušenie práv tretích osôb Obsahom Používateľa zodpovedá v plnom rozsahu Používateľ.',
    ],
  },
  {
    id: 'cl-19',
    title: 'Komunikácia medzi zmluvnými stranami',
    items: [
      '19.1. Komunikácia medzi zmluvnými stranami prebieha prednostne v elektronickej forme, prostredníctvom Platformy alebo e-mailom (potvrdenia, oznámenia, faktúry, upozornenia a podobne).',
      '19.2. Používateľ je povinný udržiavať kontaktnú e-mailovú adresu funkčnú a pravidelne ju kontrolovať. Prevádzkovateľ nenesie zodpovednosť za následky vyplývajúce z nesprávne alebo neaktuálne zadaných kontaktných údajov.',
      '19.3. Fikcia doručenia. Za účinné doručenie sa považuje aj odmietnutie prevzatia zásielky adresátom, jej nevyzdvihnutie v odbernej lehote, ako aj uplynutie 7 dní odo dňa odoslania oznámenia na poslednú Používateľom uvedenú e-mailovú adresu.',
      '19.4. Oznámenia, na základe ktorých bude niektorá zo strán uplatňovať právne nároky, musia byť urobené preukázateľným spôsobom. Bežné informatívne oznámenia možno oznámiť aj telefonicky alebo prostredníctvom Podpory.',
    ],
  },
  {
    id: 'cl-20',
    title: 'Voľba práva, riešenie sporov',
    items: [
      '20.1. Všetky práva a povinnosti zmluvných strán sa spravujú právnym poriadkom Slovenskej republiky bez ohľadu na právnu povahu zmluvných strán a ich domicil. Voľbou práva nie sú dotknuté práva Spotrebiteľa vyplývajúce z kogentných ustanovení práva štátu jeho obvyklého pobytu.',
      '20.2. Právne vzťahy medzi Prevádzkovateľom a Používateľom, ktorý je podnikateľom, neupravené týmito VOP sa spravujú najmä zákonom č. 513/1991 Zb. Obchodný zákonník a zákonom č. 22/2004 Z. z. o elektronickom obchode.',
      '20.3. Právne vzťahy medzi Prevádzkovateľom a Spotrebiteľom neupravené týmito VOP sa spravujú najmä zákonom č. 40/1964 Zb. Občiansky zákonník, zákonom č. 108/2024 Z. z. o ochrane spotrebiteľa a zákonom č. 22/2004 Z. z. o elektronickom obchode.',
      '20.4. Spory vyplývajúce zo Zmluvy je každá zmluvná strana oprávnená uplatniť na príslušnom všeobecnom súde podľa zákona č. 160/2015 Z. z. Civilný sporový poriadok. Tým nie je dotknuté právo Spotrebiteľa využiť alternatívne riešenie sporu podľa čl. 14.',
    ],
  },
  {
    id: 'cl-21',
    title: 'Spoločné ustanovenia',
    items: [
      '21.1. Práva a povinnosti Používateľa a Prevádzkovateľa sa riadia Zmluvou, týmito VOP, Cenníkom a Reklamačným poriadkom.',
      '21.2. Vzťah Zmluvy a VOP. Ak sú individuálne zmluvné dojednania v rozpore s týmito VOP, majú prednosť individuálne dojednania.',
      '21.3. Oddeliteľnosť. Neplatnosť niektorého ustanovenia Zmluvy alebo VOP neovplyvní platnosť ostatných ustanovení, ak je takéto ustanovenie oddeliteľné. Zmluvné strany sa zaväzujú nahradiť neplatné ustanovenie takým, ktoré sa svojím obsahom a účelom najviac približuje jeho účelu.',
      '21.4. Úplnosť. Zmluva spolu s VOP predstavuje úplnú dohodu zmluvných strán vo veci predmetu Zmluvy a nahrádza všetky predchádzajúce dojednania, prísľuby a vyhlásenia týkajúce sa tej istej Služby.',
      '21.5. Vyššia moc. Žiadna zo zmluvných strán nezodpovedá za nesplnenie povinnosti spôsobené okolnosťou vylučujúcou zodpovednosť, ktorá nastala nezávisle od jej vôle a bráni jej v splnení povinnosti, ak nemožno rozumne predpokladať, že by ju odvrátila alebo prekonala.',
    ],
  },
  {
    id: 'cl-22',
    title: 'Záverečné ustanovenia',
    items: [
      '22.1. Tieto VOP nadobúdajú platnosť a účinnosť dňom uvedeným v záhlaví a nahrádzajú všetky predchádzajúce znenia.',
      '22.2. Prevádzkovateľ si vyhradzuje právo tieto VOP meniť za podmienok podľa čl. 12.',
    ],
  },
]

const itemIndent = (text: string) => {
  const match = text.match(/^\d+(?:\.\d+)+/)
  if (!match) return ''
  const level = match[0].split('.').length
  if (level >= 4) return 'pl-10'
  if (level === 3) return 'pl-5'
  return ''
}

const itemStyle = (text: string) => {
  if (text.startsWith('ČASŤ')) return 'mt-8 font-bold text-neutral-900'
  if (text.startsWith('[')) return 'italic text-neutral-400'
  return 'text-neutral-600'
}

export default function ObchodnePodmienkyPage() {
  return (
    <div className='flex min-h-screen flex-col bg-neutral-50 font-sans text-neutral-900'>
      <Header />

      <main className='flex-grow'>
        <article className='mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20'>
          <p className='text-sm font-bold tracking-[0.14em] text-blue-600 uppercase'>
            Právne informácie
          </p>
          <h1 className='mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl'>
            Všeobecné obchodné podmienky
          </h1>
          <p className='mt-5 leading-relaxed text-neutral-600'>
            Všeobecné podmienky poskytovania služieb online platformy Cesta
            podnikateľa a ďalších súvisiacich služieb (ďalej len „VOP“)
            spoločnosti [DOPLNIŤ obchodné meno], IČO: [DOPLNIŤ], so sídlom:
            [DOPLNIŤ], zapísanej v Obchodnom registri [DOPLNIŤ súd, oddiel,
            vložka]
          </p>
          <p className='mt-3 text-sm font-semibold text-neutral-500'>
            Verzia: 2.0 | Účinné od: [DOPLNIŤ]
          </p>

          <nav className='mt-10 rounded-3xl border border-neutral-200/70 bg-white p-6 shadow-sm shadow-neutral-900/[0.03] sm:p-8'>
            <h2 className='text-lg font-bold'>Obsah</h2>
            <ol className='mt-4 columns-1 space-y-2 text-[15px] sm:columns-2'>
              {sections.map((section, i) => (
                <li key={section.id}>
                  <a
                    href={`/obchodne-podmienky#${section.id}`}
                    className='text-neutral-600 transition-colors hover:text-blue-600'
                  >
                    {i + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {sections.map((section, i) => (
            <section key={section.id} id={section.id} className='mt-12 scroll-mt-24'>
              <h2 className='text-xl font-bold sm:text-2xl'>
                {i + 1}. {section.title}
              </h2>
              <div className='mt-4 space-y-3'>
                {section.items.map((item) => (
                  <p
                    key={item}
                    className={`text-[15px] leading-relaxed ${itemStyle(item)} ${itemIndent(item)}`}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </article>
      </main>

      <Footer />
    </div>
  )
}
