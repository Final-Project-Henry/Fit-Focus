# Fit Focus Client

React 18 + TypeScript SPA migrada a **Vite**, con estilos en **Tailwind CSS** y estructura modular:

`routes → screens → components (shared) → features (Redux)`

## Requisitos

- Node.js 18+
- API corriendo en `http://localhost:3001` (ver `../api`)

## Variables de entorno

Copia `.env.example` a `.env`:

```env
VITE_API_URL=http://localhost:3001
VITE_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
```

## Scripts

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # salida en dist/
npm run preview   # preview del build
npm run typecheck
npm test                # unit + integration (Vitest)
npm run test:unit
npm run test:integration
npm run test:e2e        # Playwright smoke (build + preview)
npm run test:all        # vitest + e2e
```

Primera vez de e2e: `npx playwright install chromium`

## Estructura

```
src/
  app/           # store, providers, App shell
  routes/        # public / auth / admin + guards
  screens/       # páginas por dominio
  components/    # layout, ui, forms compartidos
  features/      # Redux slices (user, admin, mercadopago…)
  shared/
    api/         # axios + VITE_API_URL
    validators/  # Zod schemas
  styles/        # Tailwind entry
  assets/
```

## Validación

Formularios críticos usan **react-hook-form + Zod** (`shared/validators/schemas.ts`):

- Login / Register / recuperación de contraseña
- Contacto
- Admin ExerciseForm
- Formulario de rutinas (userinfo)
