# AI Starter — pokyny k projektu

Krátky úvod do toho, ako sa v tomto projekte pracuje. Drž sa týchto pravidiel,
nech je kód konzistentný.

## Pravidlá pre styling

- **Používaj iba tokeny, nie hardcoded hodnoty.** Farby, rádiusy, tiene a fonty
  sú nadefinované ako CSS premenné v [app/globals.css](../app/globals.css).
  Píš `bg-card`, `text-foreground`, `border-border`, `text-primary`… nie
  `bg-[#fff]` ani `text-zinc-600`.
- **Preferuj shadcn komponenty.** Hotové komponenty máš v
  [components/ui/](../components/ui) (napr. `Button`, `Card`). Skôr ako budeš
  niečo písať od nuly, pozri sa, či to už neexistuje. Nové pridávaj cez shadcn
  CLI, nech sedia s konfiguráciou v [components.json](../components.json).
- **Styling píš inline cez Tailwind triedy** priamo v JSX (`className="…"`).
  Nezakladaj samostatné CSS súbory — globálne veci patria do `globals.css`.
- Triedy spájaj cez helper `cn()` z [lib/utils.ts](../lib/utils.ts), keď
  potrebuješ podmienené alebo zlučované triedy.

## Dostupné tokeny (skratka)

Farby: `background`, `foreground`, `card`, `popover`, `primary`, `secondary`,
`muted`, `accent`, `destructive`, `border`, `input`, `ring`. Každá má aj variant
`-foreground`. Ďalej fonty `font-sans` / `font-serif` / `font-mono`, rádius cez
`rounded-*` a tiene `shadow-*`. Všetko nájdeš v `globals.css`.

## Štruktúra projektu

```
app/
  layout.tsx          # root layout (html, body, fonty) — netreba meniť
  page.tsx            # hlavná stránka — skladá sekcie medzi Header a Footer
  globals.css         # tokeny a globálne štýly
  components/
    header.tsx        # hlavička stránky
    footer.tsx        # pätička stránky
components/
  ui/                 # shadcn komponenty (Button, Card…)
  sections/           # sekcie stránky (Hero…)
lib/
  utils.ts            # helper cn()
```

### Priečinok `app/`

Tu ťa budú zaujímať tri veci:

- [app/components/header.tsx](../app/components/header.tsx) — hlavička. Doplníš
  do nej logo a navigáciu.
- [app/components/footer.tsx](../app/components/footer.tsx) — pätička. Doplníš
  odkazy, copyright a podobne.
- [app/page.tsx](../app/page.tsx) — stránka. Tu skladáš jednotlivé sekcie medzi
  hlavičku a pätičku. Wrapper a jeho štýl nechaj tak, len pridávaj sekcie.

### Priečinok `components/`

Tu ťa budú zaujímať **sekcie** v [components/sections/](../components/sections).
Každá sekcia je samostatný komponent (napr. `Hero`), ktorý potom naimportuješ do
`page.tsx`. Nové sekcie zakladaj sem a importuj cez alias `@/components/sections/…`.

## Ako pridať novú sekciu

1. Vytvor súbor v `components/sections/` (napr. `features.tsx`) a exportuj
   komponent.
2. Naimportuj ho v [app/page.tsx](../app/page.tsx) a vlož do `<main>`.
3. Styluj cez tokeny a používaj shadcn komponenty.

> Súbory už obsahujú `// TODO` komentáre — tam doplň obsah.
