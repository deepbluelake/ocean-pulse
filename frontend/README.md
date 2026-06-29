# OceanPulse Frontend

Production-ready Next.js 15 frontend scaffold for OceanPulse.

## Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- shadcn/ui conventions
- Framer Motion
- Axios
- React Three Fiber dependencies for future 3D globe work

## Getting Started

Install dependencies:

```powershell
npm install
```

Run the development server:

```powershell
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run start` serves the production build.
- `npm run lint` runs ESLint.
- `npm run format` formats files with Prettier.
- `npm run format:check` checks formatting.
- `npm run typecheck` runs TypeScript without emitting files.

## Project Structure

```text
app/
  _components/
    landing-page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  ui/
    button.tsx
lib/
  api.ts
  utils.ts
```

Only the landing page is implemented. Globe and marine API features are intentionally left for later.
