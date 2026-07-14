import { mockServices } from "../mocks/mockServices";
import type { Customer } from "../types";
import { isMockMode } from "../utils/env";
import { assertLiveConfig, pegaClient } from "./pegaClient";

export const customersApi = {
  async getCustomers(): Promise<Customer[]> {
    if (isMockMode) return mockServices.getCustomers();
    assertLiveConfig();
    const { data } = await pegaClient.get<Customer[]>("/data/customers");
    return data;
  },
};
