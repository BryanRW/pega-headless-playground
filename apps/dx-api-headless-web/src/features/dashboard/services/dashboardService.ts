import { mockServices } from "../../../mocks/mockServices";
import type { DashboardData } from "../../../types";
import { isMockMode } from "../../../utils/env";
import { assertLiveConfig, pegaClient } from "../../../api/pegaClient";

export const dashboardService = {
  async getDashboard(): Promise<DashboardData> {
    if (isMockMode) return mockServices.getDashboard();
    assertLiveConfig();
    const { data } = await pegaClient.get<DashboardData>("/data/dashboard");
    return data;
  },
};
