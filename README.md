# AILOVER - Phase 1 Foundation

Deployable, styled, authentication-ready base built with Next.js App Router, TailwindCSS, shadcn/ui, Framer Motion, and NextAuth (Credentials) using mock users.

## Features

- Routing: `/` → redirect to `/sign-in`, `/sign-in`, `/sign-up`, `/chat`, `/dashboard`, 404
- UI: TailwindCSS + shadcn/ui, AILOVER brand colors, subtle motion
- Auth: NextAuth Credentials with in-memory mock users
- Guards: Middleware protects `/chat` and `/dashboard`
- Mock API: `/api/auth/signin`, `/api/auth/signup`, `/api/chat`
- Vercel-ready: `vercel.json`, production build scripts

## Prerequisites

- Node.js 18+
- npm

## Setup

1) Install dependencies

```bash
npm install
```

2) Environment variables

Create `.env.local` (see `.env.example`):

```ini
NEXTAUTH_SECRET=your-secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
# Optional for future integrations
DATABASE_URL=
OPENAI_API_KEY=
```

3) Run dev

```bash
npm run dev
```

Open `http://localhost:3000`.

## Authentication

- Credentials provider with mock users stored in-memory (`src/lib/mock-users.ts`).
- Default demo user: `demo@ailover.app` / `password`.
- Sign-up adds a user to the mock store then signs in.

Server-side redirect on `/auth/sign-in` when already authenticated.
Middleware protects `/chat` and `/dashboard`.

## Build & Start

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/[...all]/route.ts    # NextAuth (Credentials)
│   │   ├── auth/signin/route.ts      # Mock sign-in JSON
│   │   ├── auth/signup/route.ts      # Mock sign-up JSON
│   │   └── chat/route.ts             # Mock chat
│   ├── auth/sign-in/page.tsx         # SSR session redirect + UI
│   ├── auth/sign-up/page.tsx         # UI + mock sign-up
│   ├── chat/page.tsx                 # Chat placeholder
│   ├── dashboard/page.tsx            # Protected placeholder
│   ├── page.tsx                      # Redirect → /sign-in
│   └── not-found.tsx
├── lib/
│   ├── mock-users.ts                 # In-memory users
│   ├── nextauth-config.ts            # NextAuth options
│   └── utils.ts
├── modules/auth/ui/views/            # Auth forms (shadcn + motion)
└── middleware.ts                     # Protects /chat and /dashboard
```

## Deployment (Vercel)

- Connect repo to Vercel
- Add `NEXTAUTH_SECRET` in Vercel env
- Deploy (build uses `npm run build`)

## Notes

- Phase 1 uses mock users and mock chat. Replace with real DB and providers in Phase 2.