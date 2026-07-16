# Agent Guidance

This repository is a single Pega headless car sales lab. It is currently organized for three related tracks:

- `apps/metadata-headless-web`: headless web app driven by Pega metadata.
- `apps/dx-api-headless-web`: active React/Vite app using DX API style service adapters.
- `apps/mobile-sdk-instance`: placeholder for SDK-driven mobile app instance experiments.

Shared code should move into `packages/*` only when more than one app needs it:

- `packages/pega-client`: reusable Pega API, OAuth, request, and error handling.
- `packages/pega-types`: shared Pega and car sales domain contracts.
- `packages/mock-data`: reusable fixtures and mock services.
- `packages/ui`: shared UI components, design tokens, and Pega wrapper components.

## Current State

- The project currently has a README and repository rules.
- The implementation is built class by class.
- Do not assume app files, scripts, databases, skills, deploy config, or automations exist until they are present in the repo.
- The current working implementation is `apps/dx-api-headless-web`.

## Working Rules

- Inspect the repo before editing.
- Keep changes scoped to the current class objective.
- Prefer small, reproducible files over chat-only state.
- Do not commit secrets, local caches, generated weekly snapshots, build output, videos, screenshots, or temporary reports.
- When a class creates a reusable process, prefer a skill.
- When a class creates deterministic work, prefer a tool or script.
- When adding data examples, use fixtures or contracts unless the class explicitly requires a durable seed.

## Validation

For each class branch, leave a clear state:

- what was added;
- how to verify it;
- what remains intentionally missing.

If commands do not exist yet, do not invent them in docs as if they already work.

Use existing scripts only when they are present in the relevant `package.json`.
