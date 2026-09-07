# Seekers Group of Schools — Frontend

Vite + React + TypeScript rebuild of the Seekers Group of Schools website,
starting with the landing page.

## Stack

- **Vite** — build tool / dev server
- **React 18 + TypeScript**
- **react-router-dom** — routing (`src/App.tsx`), ready for more pages
- **Plain CSS** (`src/index.css`) — no framework, custom design tokens as CSS vars
- **oxlint** — linting
- **prettier** — formatting

## Getting started

```bash
npm install
npm run dev      # starts the dev server (http://localhost:5174)
npm run build    # type-checks + production build
npm run preview  # preview the production build locally
npm run lint      # oxlint
```

Copy `.env.example` to `.env.local` if it doesn't already exist and adjust as needed.

## Project structure

```
src/
  api/            fetch wrapper / future API calls (src/api/client.ts)
  assets/         images, icons, static files imported by components
  components/
    layout/       Navbar, Footer — shared across every page
    landing/      sections that make up the landing page only
                   (HeroSlideshow, MarqueeBand, AboutSection, PullQuote,
                    FacilitiesSection, NewsSection, CtaBanner)
  hooks/          reusable logic: useSlideshow, useScrollReveal,
                   useHeaderScroll, useMobileMenu
  pages/          route-level pages — LandingPage.tsx composes the
                   components above; add AboutPage.tsx, AdmissionsPage.tsx
                   etc. here as they're built, then register them in App.tsx
  store/          placeholder for shared/global state (none needed yet)
  types/          shared TypeScript types (src/types/landing.ts)
  App.tsx         router setup
  main.tsx        React entry point
  index.css       global styles + design tokens (CSS custom properties)
```

## Design tokens

Defined as CSS variables at the top of `src/index.css`:

| Token              | Value      | Use                          |
|--------------------|------------|-------------------------------|
| `--oxblood`        | `#6E1423`  | primary brand color           |
| `--oxblood-dark`   | `#420C15`  | darker brand shade / footer   |
| `--brass`          | `#C9973F`  | accent (buttons, dividers)    |
| `--parchment`      | `#FAF3E7`  | page background                |
| `--porcelain`      | `#FFFDF9`  | card backgrounds               |
| `--moss`           | `#46613F`  | secondary accent               |
| `--ink`             | `#241B14`  | body text                      |

Fonts: **Playfair Display** (headings/serif accents) + **Inter** (body/UI),
loaded via Google Fonts `<link>` tags in `index.html`.

## Still to do

- [ ] Swap all `picsum.photos` placeholder images for real school photography
      (search each component for `picsum.photos` — 8 total across
      HeroSlideshow, AboutSection and FacilitiesSection).
- [ ] Wire up real routes/pages for About, Admissions, News, Contact, etc.
      and add them to `src/App.tsx`.
- [ ] Hook up the `Apply Now` / `Apply Here` buttons to a real
      admissions form or route.
- [ ] Copy review — current landing page copy is adapted from the old site.
