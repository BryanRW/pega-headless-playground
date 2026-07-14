import { mockServices } from "../mocks/mockServices";
import type { Assignment } from "../types";
import { isMockMode } from "../utils/env";
import { assertLiveConfig, pegaClient } from "./pegaClient";

export const assignmentsApi = {
  async getAssignments(): Promise<Assignment[]> {
    if (isMockMode) return mockServices.getAssignments();
    assertLiveConfig();
    const { data } = await pegaClient.get<Assignment[]>("/assignments");
    return data;
  },

  async openAssignment(assignmentId: string): Promise<Assignment> {
    if (isMockMode) return mockServices.openAssignment(assignmentId);
    assertLiveConfig();
    const { data } = await pegaClient.get<Assignment>(`/assignments/${assignmentId}`);
    return data;
  },

  async submitAssignment(
    assignmentId: string,
    payload: Record<string, unknown>,
  ): Promise<{ assignmentId: string; accepted: boolean }> {
    if (isMockMode) return mockServices.submitAssignment(assignmentId);
    assertLiveConfig();
    const { data } = await pegaClient.post<{ assignmentId: string; accepted: boolean }>(
      `/assignments/${assignmentId}/actions`,
      payload,
    );
    return data;
  },

  async refreshAssignment(assignmentId: string): Promise<Assignment> {
    return this.openAssignment(assignmentId);
  },
};
