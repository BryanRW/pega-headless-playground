# Dashboard Feature

Dashboard route ownership lives here:

- `pages/DashboardPage.tsx`: route-level dashboard composition.
- `hooks/useDashboard.ts`: TanStack Query hook for dashboard data.
- `services/dashboardService.ts`: feature orchestration that delegates live Pega calls to `src/api` infrastructure and mock calls to `src/mocks`.
