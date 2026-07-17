# Agent Guidance

This repository is a single Pega headless car sales lab. It is currently organized for three related tracks:

- `apps/metadata-headless-web`: placeholder for older metadata-rendering experiments.
- `apps/dx-api-headless-web`: active React/Vite app for the Constellation-backed DX API exploration.
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
- Target architecture is Pega Constellation. Do not steer new UI work toward Traditional UI, section/harness rendering, or the Traditional React Starter Pack unless the user explicitly changes the architecture.
- Current API adapters are simplified lab adapters. Treat `/cases`, `/assignments`, and `/data/dashboard` as temporary endpoints until replaced or wrapped by Constellation DX API / React SDK aligned adapters.

## Constellation Direction

- Prefer Constellation DX API and React SDK concepts for future case, assignment, view, action, validation, and refresh work.
- Keep Pega responsible for case lifecycle, assignment routing, view metadata, validations, and available actions.
- Keep React responsible for app shell, routing, presentation composition, design polish, and any local-only lab visualizations.
- Avoid hardcoding case-specific flow logic in React when Constellation metadata or assignment action contracts should drive it.
- Keep environment values in `apps/dx-api-headless-web/.env` for the active Vite app. Do not commit real `.env` files or secrets.

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
