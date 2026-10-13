# ergOS Harmony design system

The interface language of ergOS, jouleWise's energy management platform. This repository holds the design system on its own: tokens, the `eg-` component kit, the `window.ErgOS` runtime, 31 component and screen previews with usage rules, the generated gallery and the jouleWise logo.

Start with [`design-system/README.md`](design-system/README.md) for the principles, colour, type and component rules, and [`docs/HARMONY.md`](docs/HARMONY.md) for the developer guide.

## What is where

| Path | What it is |
| --- | --- |
| `design-system/tokens/tokens.json` | Source of truth for colour (dark and light), type, spacing, radius, shadow and blur |
| `design-system/tokens/tokens.css`, `tokens.js` | Generated from `tokens.json` by `npm run build:ds`. Do not edit by hand |
| `design-system/harmony.css` | The component kit: every `eg-` class |
| `design-system/harmony.js`, `harmony.d.ts` | `window.ErgOS` runtime and its types |
| `design-system/components/<Name>/` | `preview.html` (live example) and `README.md` (usage rules) for each component |
| `design-system/gallery/` | Generated standalone page per preview, plus an index |
| `design-system/assets/logo/` | jouleWise logo: glass wordmark (dark and light grounds), orb mark, app icon, mono, classic 2D glass |
| `tools/build-design-system.mjs` | Generates `tokens.css`, `tokens.js` and the gallery |
| `tools/logo/` | Logo generator (`python3 tools/logo/build_logo.py`) |
| `dist/energy-flow-chart.min.js` | The ergOS charting library bundle (v1.3.0) that the chart previews in the gallery load |

## Run it locally

```bash
npm run build:ds   # regenerate tokens.css, tokens.js and the gallery from their sources
npm test           # token integrity checks
npm run demo       # http://localhost:5178/design-system/gallery/
```

There are no npm dependencies. Node 18 or newer.

## Use it in a page

```html
<link rel="stylesheet" href="design-system/tokens/tokens.css">
<link rel="stylesheet" href="design-system/harmony.css">
<script src="design-system/harmony.js"></script>
```

Dark is the default. Add `data-theme="light"` on `<html>` for the light theme. Section 3 of `docs/HARMONY.md` covers the page skeleton, and sections 4 and 5 the tokens and components.

## Relationship to the charting library

The Harmony chart themes (`harmony`, `volt`, `verdant`, `aurora`), the price landscape and the price profile live in the charting library, [Ergplan/charting](https://github.com/Ergplan/charting). Its `dist/energy-flow-chart.min.js` is copied here, pinned at v1.3.0, so the gallery previews render without a build step. `docs/HARMONY.md` is the shared developer guide and its chart and Next.js sections refer to that repository.

## Changing the design system

Edit `design-system/tokens/tokens.json`, `harmony.css`, `harmony.js` or a component's `preview.html` and `README.md`, then run `npm run build:ds` and commit the generated files with the change. Section 11 of `docs/HARMONY.md` has the rules.
