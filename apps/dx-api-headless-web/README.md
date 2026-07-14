# DX API Headless Web

React/Vite TypeScript app for testing a Pega DX API style headless vehicle sales operations workspace.

React owns the presentation layer while Pega-facing adapters are responsible for authentication, case lifecycle, assignments, validations, views, actions, and data.

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
- `src/api`: Pega-facing adapters.
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
