# responsive-svg

This is a small Vite-powered React/TypeScript demo showing **responsive SVG icons**.

The app renders a single SVG file (`public/icon-logo-rs.svg`) at various sizes and
updates the detail ("small", "medium", "large") based on width/height. It also
includes an interactive slider preview.

## Getting started

```bash
cd responsive-svg
npm install      # or `pnpm install`, `yarn`
npm run dev      # start development server (Vite)
```

Open http://localhost:5173 in your browser (port may vary).


## Build & preview

```bash
npm run build
npm run preview
```

This will compile the TypeScript, bundle with Vite, and serve the production build.


## Project structure

- `index.html` - entry point for the Vite app
- `src/` - React components and styles
- `public/` - static assets (SVGs)

Feel free to modify or add additional SVGs and logic.
