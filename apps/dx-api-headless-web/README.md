# DX API Headless Web

React/Vite TypeScript app for testing a Pega Constellation DX API style headless vehicle sales operations workspace.

React owns the app shell and presentation layer while Pega-facing adapters are responsible for authentication, case lifecycle, assignments, validations, views, actions, and data.

Target architecture: Constellation.

This app should evolve toward Constellation DX API / React SDK aligned patterns. The Traditional React Starter Pack is not the implementation target for this repo because the connected Pega app runs under Constellation.

Current implementation note: the live adapters still call simplified lab endpoints such as `/cases`, `/assignments`, and `/data/dashboard`. Treat those as temporary until Constellation contracts are introduced.

## Stack

- Vite, React, TypeScript
- React Router
- TanStack Query
- Axios
- React Hook Form
- Zustand
- MUI
- Framer Motion
- React Icons
- Recharts

## Architecture

- `src/app`: runtime composition for providers, router, query client, query keys, and session bootstrap.
- `src/features`: route-level business modules.
- `src/api`: Pega-facing adapters. Future Constellation-specific adapters should be separated from temporary custom lab endpoints.
- `src/mocks`: isolated mock data and mock services for local development.
- `src/components/layout`: shared app shell, navigation, header, footer, and utility panel.
- `src/components/dashboard`: reusable dashboard visualization components.
- `src/components/pega`: replaceable Pega wrapper components for cases, assignments, data views, and forms.
- `src/components/common`: shared loading, error, empty, and search primitives.
- `src/store`: Zustand stores.
- `src/styles`: theme tokens and global styles.
- `src/types`: domain and Pega API response types.

## Run

From the repository root:

```bash
npm run dev
```

Or directly in this workspace:

```bash
npm run dev -w @pega-headless/dx-api-headless-web
```

## Environment

Create local app configuration from `.env.example`:

```bash
cp apps/dx-api-headless-web/.env.example apps/dx-api-headless-web/.env
```

Use `VITE_SERVICE_MODE=mock` for local mock data and `VITE_SERVICE_MODE=live` for the configured Pega Constellation environment.
