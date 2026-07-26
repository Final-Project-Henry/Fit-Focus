# Fit Focus API

Express + MongoDB/Mongoose API migrada a TypeScript con arquitectura modular:

`routes → services → repositories`

## Requisitos

- Node.js 18+ recomendado
- Docker + Docker Compose (para MongoDB local)
- Variables de entorno en `api/.env`

Copia `.env.example` a `.env` y completa los valores.

```env
PORT=3001
MONGODB_URI=mongodb://127.0.0.1:27017/fitfocus
SECRET=your-jwt-secret
NODEMAILER=your-gmail-app-password
ACCESS_TOKEN=TEST-xxxx          # Mercado Pago Access Token (ver abajo)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
REDIRECT_URI=http://localhost:3001/authGoogle
```

### Mercado Pago

La API solo usa **una** variable: `ACCESS_TOKEN` (Access Token de Mercado Pago).

1. Entra a [Mercado Pago Developers](https://www.mercadopago.com.pe/developers/panel/app) (Perú).
2. Crea o abre una aplicación.
3. En **Credenciales de prueba** / **Pruebas → Credenciales de prueba**, copia el **Access Token**.
   - Puede empezar con `TEST-...` (legacy) o `APP_USR-...` (formato actual de prueba).
4. Pégalo en `api/.env` como `ACCESS_TOKEN=...`.
5. Reinicia el server de la API.

No necesitas `PUBLIC_KEY` en esta API: el client redirige al `checkout_url` que arma el backend.

- Si `ACCESS_TOKEN` empieza con `TEST-`, se usa **`sandbox_init_point`** (obligatorio en ese modelo).
- Si es `APP_USR-...` de producción / nuevo modelo, se usa **`init_point`**.
- Puedes forzar sandbox con `MERCADOPAGO_USE_SANDBOX=true`.

#### Cómo probar sin cobrar de verdad

El checkout se ve como producción (URL `mercadopago.com.pe`). Eso es normal: ya no hay un sandbox aparte.
Lo que evita cobros reales es:

1. Tener en la API el Access Token de **credenciales de prueba** (no el de producción).
2. Crear un **usuario de prueba Comprador** en tu app:
   *Tus integraciones → tu app → Cuentas de prueba → Crear cuenta de prueba → Buyer*.
3. En el checkout, **cerrar sesión** de tu cuenta real de Mercado Pago.
4. Iniciar sesión con el usuario/contraseña del comprador de prueba (si pide código de 6 dígitos, está en esa misma tabla del panel).
5. Pagar con [tarjetas de prueba](https://www.mercadopago.com.pe/developers/es/docs/checkout-pro/additional-content/test-cards).

Si entras al checkout con tu cuenta real, MP te avisará que el pago es real o fallará el flujo de prueba.

#### Retorno a la app en localhost

Mercado Pago **casi nunca redirige** a `http://localhost` después del pago (hace falta HTTPS / `auto_return`). Por eso:

1. La preferencia guarda `external_reference = userId`.
2. Existe `GET /auth/payment/sync` para buscar un pago `approved` y activar Premium.
3. En el client, el botón **“Ya pagué — activar Premium”** llama a ese endpoint.

Con `CLIENT_URL` en HTTPS (p. ej. ngrok) también se usa `auto_return: approved`.

## MongoDB con Docker

Si no tienes Mongo instalado en Linux:

```bash
cd api
make up        # levanta Mongo en el puerto 27017
make logs      # ver logs
make down      # apagar
make clean     # apagar y borrar el volumen de datos
make help      # ver todos los comandos
```

URI local: `mongodb://127.0.0.1:27017/fitfocus`

## Scripts

```bash
npm install
npm run dev          # desarrollo con tsx watch
npm run build        # compila a dist/
npm start            # corre dist/server.js
npm run typecheck
npm test             # suite completa
npm run test:phase0  # tooling
npm run test:phase1  # + shared/middleware
npm run test:phase2  # + módulos
npm run test:phase3  # + cleanup/regresión
```

Cada `test:phaseN` incluye también los tests de las fases anteriores.

## Estructura

```
src/
  config/       # env, db
  shared/       # errors, middleware, mail, security, validation
  modules/      # auth, users, exercises, routines, payments, comments, admin
  models/       # schemas Mongoose
  app.ts
  server.ts
tests/
  phase-0/
  phase-1/
  phase-2/
  phase-3/
```

## Contrato HTTP (compatibilidad con el client)

Se mantienen los paths existentes, entre otros:

| Método | Path | Auth |
|--------|------|------|
| POST | `/register` | público |
| POST | `/login` | público |
| GET | `/exercises` | público |
| POST | `/authGoogle` | público |
| GET/PUT/DELETE | `/auth/*` | JWT |
| GET/PUT/POST/DELETE | `/admin/*` | JWT + admin |
| POST | `/superAdmin/admin` | JWT + superAdmin |

Cambios de status intencionales respecto al legacy:

- Validación inválida → `400` (antes a veces `500`)
- Usuario no admin → `403` (antes `404`)
