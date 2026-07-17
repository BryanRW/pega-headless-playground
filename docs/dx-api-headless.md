# DX API Headless App

This track contains the current React web app for Pega DX API backed vehicle sales operations.

App path: `apps/dx-api-headless-web`

Current status: active implementation.

## Architecture Decision

Target architecture: Pega Constellation.

The Pega application this lab connects to is running under Constellation, so this track should use Constellation DX API / React SDK patterns. Do not use the Traditional UI React Starter Pack as the implementation target for this app. Traditional starter packs are useful background for understanding headless Pega concepts, but they are centered on section/harness rendering rather than Constellation view metadata.

## Current Implementation

The active app is currently a React/Vite prototype with custom service adapters and mock services. Live mode currently calls simplified endpoints:

- `/cases`
- `/assignments`
- `/data/dashboard`

These endpoints are temporary integration surfaces for the lab. They should be replaced, wrapped, or clearly separated as the project moves to Constellation-aligned contracts.

## Constellation Integration Roadmap

1. Authentication
   - Keep OAuth configuration explicit in app environment files.
   - Avoid storing Pega operator passwords in browser-exposed `VITE_*` variables.
   - Prefer an OAuth flow appropriate for a browser app and the target Pega environment.

2. API contract mapping
   - Identify the Constellation DX API endpoints needed for case creation, case open, assignment open, refresh, action submit, validation, and data references.
   - Split temporary custom adapters from Constellation adapters, for example under `src/api/constellation`.

3. View and field rendering
   - Build a renderer around Constellation view metadata rather than hardcoded case forms.
   - Use a component registry for field types, action controls, layouts, validation messages, and read-only display values.

4. Assignment lifecycle
   - Let Pega drive available assignment actions, required fields, validation, refresh behavior, and post-submit navigation.
   - Keep React pages thin: open assignment, render returned view metadata, submit selected action, handle returned errors or next state.

5. Domain dashboard
   - Keep operational dashboards separate from Constellation case/assignment rendering unless those metrics come from Pega data APIs.
   - Do not mix dashboard-only DTOs into Constellation view contracts.

## Documentation To Keep Current

- Record each confirmed endpoint and response shape before coding against it.
- Document any temporary adapter that does not match Constellation contracts.
- Update `.env.example` when a new required runtime value is introduced.
