# App Core

This folder owns application runtime wiring:

- `AppProviders.tsx`: shared providers for TanStack Query and MUI.
- `bootstrapSession.ts`: startup authentication/session bootstrap.
- `queryClient.ts`: query cache defaults.
- `queryKeys.ts`: stable shared query key factory.
- `router.tsx`: route tree that composes feature pages under the shared layout.
