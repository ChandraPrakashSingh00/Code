# CodeCPS Technologies — Homepage

Marketing homepage for CodeCPS Technologies, built with React 18 + Vite + Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build locally
npm run lint        # run eslint
```

## Project Structure

```
src/
├── assets/                    Static assets (images, icons) imported by components
├── components/
│   ├── hero/                  Hero section: headline, animated dashboard mockup, floating cards, email CTA
│   │   ├── HeroSection.jsx     Section entry point (default export via index.js)
│   │   ├── HeroVisual.jsx      Composes DigitalPlatform + CodeDashboard + FloatingCards
│   │   ├── CodeDashboard.jsx   Animated "IDE / dashboard" mockup graphic
│   │   ├── DigitalPlatform.jsx Decorative animated rings/glow behind the dashboard
│   │   ├── FloatingCard.jsx    Small reusable floating icon+label card
│   │   ├── ReachOutSection.jsx Email capture form + trust badges
│   │   └── hero.css            Keyframe animations & responsive tweaks used only by this section
│   ├── services/
│   │   ├── ServicesSection.jsx Services grid ("What We Do")
│   │   └── index.js
│   └── tech-stats/
│       ├── TechStatsSection.jsx Tech marquee + stats band
│       ├── TechnologyItem.jsx   Single tech logo/name pill used in the marquee
│       ├── tech-stats.css       Marquee scroll animation
│       └── index.js
├── data/
│   ├── services.js             Services list (id, icon, title, description)
│   └── technologies.js         Tech stack list + stats numbers
├── pages/
│   └── HomePage.jsx            Assembles Hero + TechStats + Services into the homepage
├── App.jsx                     Root component, renders HomePage
├── main.jsx                    React entry point / DOM mount
└── index.css                   Tailwind directives + global base styles
```

### Conventions

- Each section lives in its own folder under `components/` with a barrel `index.js` so it can be imported as `import { HeroSection } from "./components/hero"`.
- Section-specific CSS (keyframe animations, marquee, etc.) lives alongside its component as a plain `.css` file instead of being injected via inline `<style>` tags.
- Content that's likely to change often (service descriptions, tech stack, stats) is separated into `src/data/` so it can be edited without touching component markup.
- Add new homepage sections the same way: `components/<section-name>/`, plus a matching entry in `pages/HomePage.jsx`.
