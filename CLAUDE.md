# Orlando Portfolio — Claude Context

## Stack

| Layer | Tech | Version |
|---|---|---|
| Framework | React | ^19 |
| Build tool | Vite | ^8 |
| Language | TypeScript | ~6 |
| Styling | Tailwind CSS | ^3 |
| Routing | React Router DOM | ^6.30 |
| Linting | ESLint | ^10 |
| Formatting | Prettier | ^3 |

## Project structure

```
src/
  App.tsx          # Root component
  App.css          # Component-scoped styles
  main.tsx         # Entry point — BrowserRouter lives here
  index.css        # Global styles + Tailwind directives
  assets/          # Images, SVGs
index.html
vite.config.ts
tailwind.config.js
postcss.config.js
eslint.config.js
.prettierrc
```

## Key config facts

- **Tailwind content paths**: `./index.html`, `./src/**/*.{ts,tsx}`
- **Tailwind directives** are at the top of `src/index.css` (`@tailwind base/components/utilities`)
- **BrowserRouter** wraps `<App>` in `src/main.tsx` — add `<Routes>/<Route>` inside `App.tsx`
- **ESLint** uses flat config (`eslint.config.js`) with `typescript-eslint`, `react-hooks`, `react-refresh`, and `prettier` plugins
- **Prettier** config is in `.prettierrc`: no semis, single quotes, 100-char line width, `es5` trailing commas

## Scripts

```bash
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # Type-check + production build → dist/
npm run lint      # ESLint check
npm run format    # Prettier auto-format (all files)
npm run preview   # Preview production build locally
```

## Common tasks

### Add a new route
1. Create `src/pages/MyPage.tsx`
2. In `App.tsx`, import `Routes` / `Route` from `react-router-dom` and add:
   ```tsx
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
   </Routes>
   ```

### Add a Tailwind component
Use utility classes directly in JSX — no extra config needed:
```tsx
<div className="flex items-center gap-4 p-6 rounded-xl bg-white shadow-md">
```

### Add a layout
Create `src/layouts/RootLayout.tsx` with an `<Outlet />` and nest routes under it using React Router's `<Route element={<RootLayout />}>` pattern.

### Lint + format before committing
```bash
npm run format && npm run lint
```
