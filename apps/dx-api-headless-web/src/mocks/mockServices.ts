import { assignments, cases, customers, dashboardData } from "./mockData";
import type { Assignment, DashboardData, SalesCase } from "../types";

const wait = async (ms = 220): Promise<void> =>
  new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });

export const mockServices = {
  async getDashboard(): Promise<DashboardData> {
    await wait();
    return dashboardData;
  },

  async searchCases(query = ""): Promise<SalesCase[]> {
    await wait();
    const normalized = query.trim().toLowerCase();
    if (!normalized) return cases;

    return cases.filter(
      (item) =>
        item.id.toLowerCase().includes(normalized) ||
        item.customer.name.toLowerCase().includes(normalized) ||
        item.vehicleModel.toLowerCase().includes(normalized),
    );
  },

  async getCase(caseId: string): Promise<SalesCase> {
    await wait();
    const found = cases.find((item) => item.id === caseId);
    if (!found) throw new Error(`Case ${caseId} was not found.`);
    return found;
  },

  async createCase(payload: Partial<SalesCase>): Promise<SalesCase> {
    await wait();
    return {
      ...cases[0],
      ...payload,
      id: `CS-${Math.floor(250000 + Math.random() * 1000)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  },

  async getAssignments(): Promise<Assignment[]> {
    await wait();
    return assignments;
  },

  async openAssignment(assignmentId: string): Promise<Assignment> {
    await wait();
    const found = assignments.find((item) => item.id === assignmentId);
    if (!found) throw new Error(`Assignment ${assignmentId} was not found.`);
    return found;
  },

  async submitAssignment(assignmentId: string): Promise<{ assignmentId: string; accepted: true }> {
    await wait();
    return { assignmentId, accepted: true };
  },

  async getCustomers() {
    await wait();
    return customers;
  },
};
