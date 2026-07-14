import axios from "axios";
import { env, validateLiveEnvironment } from "../utils/env";
import { mapPegaError } from "../utils/pegaError";
import { useAuthStore } from "../store/authStore";

export const pegaClient = axios.create({
  baseURL: env.pegaUrl,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

pegaClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().tokens?.accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

pegaClient.interceptors.response.use(
  (response) => response,
  (error: unknown) => Promise.reject(mapPegaError(error)),
);

export const assertLiveConfig = (): void => {
  const missing = validateLiveEnvironment();
  if (missing.length > 0) {
    throw new Error(`Missing required live Pega environment variables: ${missing.join(", ")}`);
  }
};
