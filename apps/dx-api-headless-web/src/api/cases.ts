import { mockServices } from "../mocks/mockServices";
import type { SalesCase } from "../types";
import { isMockMode } from "../utils/env";
import { assertLiveConfig, pegaClient } from "./pegaClient";

export const casesApi = {
  async createCase(payload: Partial<SalesCase>): Promise<SalesCase> {
    if (isMockMode) return mockServices.createCase(payload);
    assertLiveConfig();
    const { data } = await pegaClient.post<SalesCase>("/cases", payload);
    return data;
  },

  async getCase(caseId: string): Promise<SalesCase> {
    if (isMockMode) return mockServices.getCase(caseId);
    assertLiveConfig();
    const { data } = await pegaClient.get<SalesCase>(`/cases/${caseId}`);
    return data;
  },

  async searchCases(query = ""): Promise<SalesCase[]> {
    if (isMockMode) return mockServices.searchCases(query);
    assertLiveConfig();
    const { data } = await pegaClient.get<SalesCase[]>("/cases", { params: { query } });
    return data;
  },

  async refreshCase(caseId: string): Promise<SalesCase> {
    return this.getCase(caseId);
  },
};
