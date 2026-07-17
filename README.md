# Pega Headless Car Sales Lab

Single repository for Pega headless experiments using a vehicle sales operations domain.

The repository is organized for three related tracks:

- `apps/metadata-headless-web`: placeholder for older metadata-rendering experiments.
- `apps/dx-api-headless-web`: active React web app for the Constellation-backed DX API exploration.
- `apps/mobile-sdk-instance`: mobile SDK app instance experiments.

Shared code can move into `packages/*` as the tracks grow:

- `packages/pega-client`: reusable Pega API, OAuth, request, and error handling.
- `packages/pega-types`: shared Pega and vehicle sales domain contracts.
- `packages/mock-data`: reusable demo data and mock services.
- `packages/ui`: shared design tokens, components, and Pega UI wrappers.

## Current App

The active implementation is `apps/dx-api-headless-web`, a React/Vite TypeScript app for Pega-powered vehicle sales operations. It currently includes an operations dashboard, sales order case search, case creation, assignment work queue screens, mock data, and Pega-facing API adapters.

Target architecture: Constellation.

This project should evolve toward Pega Constellation DX API / React SDK patterns rather than the Traditional UI React Starter Pack pattern. Traditional DX API starter packs render section and harness metadata. This lab targets a Pega app already running on Constellation, so future UI work should align to Constellation view metadata, case and assignment APIs, field/action component mapping, validation handling, and the Constellation design/runtime model.

Current implementation note: the app still uses simplified custom service adapters such as `/cases`, `/assignments`, and `/data/dashboard`. Treat those as a temporary lab surface, not as the final Constellation integration contract.

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

Vite reads environment values from the app workspace when the workspace dev script runs, so prefer `apps/dx-api-headless-web/.env` for local app configuration.

Use mock mode for local development:

```bash
VITE_SERVICE_MODE=mock
```

Set `VITE_SERVICE_MODE=live` after configuring the Pega Constellation DX API base URL and OAuth values.
