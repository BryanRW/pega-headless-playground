import { create } from "zustand";
import type { AuthTokens, User } from "../types";

interface AuthState {
  user: User | null;
  tokens: AuthTokens | null;
  isAuthenticated: boolean;
  setSession: (user: User, tokens: AuthTokens) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  tokens: null,
  isAuthenticated: false,
  setSession: (user, tokens) => set({ user, tokens, isAuthenticated: true }),
  logout: () => set({ user: null, tokens: null, isAuthenticated: false }),
}));
