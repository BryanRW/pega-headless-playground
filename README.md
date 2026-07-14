# Pega Headless Car Sales Lab

Single repository for Pega headless experiments using a vehicle sales operations domain.

The repository is organized for three related tracks:

- `apps/metadata-headless-web`: headless web app driven by Pega metadata.
- `apps/dx-api-headless-web`: active React web app using DX API style service adapters.
- `apps/mobile-sdk-instance`: mobile SDK app instance experiments.

Shared code can move into `packages/*` as the tracks grow:

- `packages/pega-client`: reusable Pega API, OAuth, request, and error handling.
- `packages/pega-types`: shared Pega and vehicle sales domain contracts.
- `packages/mock-data`: reusable demo data and mock services.
- `packages/ui`: shared design tokens, components, and Pega UI wrappers.

## Current App

The active implementation is `apps/dx-api-headless-web`, a React/Vite TypeScript app for Pega-powered vehicle sales operations. It includes an operations dashboard, sales order case search, case creation, assignment work queue screens, mock data, and Pega-facing API adapters.

## Run Locally

Install dependencies from the repository root:

```bash
npm install
```

Run the active DX API web app:

```bash
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
```

## Environment

Copy the app environment example:

```bash
cp apps/dx-api-headless-web/.env.example apps/dx-api-headless-web/.env
```

Use mock mode for local development:

```bash
VITE_SERVICE_MODE=mock
```

Set `VITE_SERVICE_MODE=live` after configuring the Pega DX API base URL and OAuth values.
