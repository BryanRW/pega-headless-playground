export const queryKeys = {
  dashboard: ["dashboard"] as const,
  cases: (query = "") => ["cases", query] as const,
  assignments: ["assignments"] as const,
  customers: ["customers"] as const,
};
