import { authApi } from "../api/auth";
import { useAuthStore } from "../store/authStore";

export const bootstrapSession = async (): Promise<void> => {
  const { user, tokens } = await authApi.login();
  useAuthStore.getState().setSession(user, tokens);
};
