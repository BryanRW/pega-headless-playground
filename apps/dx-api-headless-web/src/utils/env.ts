export type ServiceMode = "mock" | "live";

const readEnv = (key: string): string => import.meta.env[key] ?? "";

export const env = {
  pegaUrl: readEnv("VITE_PEGA_URL"),
  clientId: readEnv("VITE_CLIENT_ID"),
  clientSecret: readEnv("VITE_CLIENT_SECRET"),
  authUrl: readEnv("VITE_AUTH_URL"),
  serviceMode: (readEnv("VITE_SERVICE_MODE") || "mock") as ServiceMode,
};

export const isMockMode = env.serviceMode !== "live";

export const validateLiveEnvironment = (): string[] => {
  if (isMockMode) {
    return [];
  }

  return [
    ["VITE_PEGA_URL", env.pegaUrl],
    ["VITE_CLIENT_ID", env.clientId],
    ["VITE_AUTH_URL", env.authUrl],
  ]
    .filter(([, value]) => !value)
    .map(([key]) => key);
};
