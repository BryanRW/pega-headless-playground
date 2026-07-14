import type { AuthTokens, User } from "../types";
import { env, isMockMode } from "../utils/env";
import { pegaClient, assertLiveConfig } from "./pegaClient";
import { users } from "../mocks/mockData";

interface TokenResponse {
  access_token: string;
  refresh_token?: string;
  expires_in: number;
  token_type?: string;
}

export const authApi = {
  async login(): Promise<{ user: User; tokens: AuthTokens }> {
    if (isMockMode) {
      return {
        user: users[0],
        tokens: {
          accessToken: "mock-access-token",
          refreshToken: "mock-refresh-token",
          expiresAt: Date.now() + 60 * 60 * 1000,
          tokenType: "Bearer",
        },
      };
    }

    assertLiveConfig();
    const body = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: env.clientId,
    });

    if (env.clientSecret) {
      body.set("client_secret", env.clientSecret);
    }

    const { data } = await pegaClient.post<TokenResponse>(env.authUrl, body, {
      baseURL: "",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    return {
      user: {
        id: "pega-user",
        name: "Pega Operator",
        email: "operator@example.com",
        role: "Authenticated Operator",
      },
      tokens: {
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
        expiresAt: Date.now() + data.expires_in * 1000,
        tokenType: "Bearer",
      },
    };
  },
};
