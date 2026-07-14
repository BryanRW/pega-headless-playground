import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../app/queryKeys";
import { casesApi } from "../../../api/cases";

export const useCases = (query = "") =>
  useQuery({
    queryKey: queryKeys.cases(query),
    queryFn: () => casesApi.searchCases(query),
  });

export const useCase = (caseId: string | undefined) =>
  useQuery({
    queryKey: ["case", caseId],
    queryFn: () => casesApi.getCase(caseId ?? ""),
    enabled: Boolean(caseId),
  });
