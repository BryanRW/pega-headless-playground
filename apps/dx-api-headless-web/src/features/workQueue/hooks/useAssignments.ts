import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../app/queryKeys";
import { assignmentsApi } from "../../../api/assignments";

export const useAssignments = () =>
  useQuery({
    queryKey: queryKeys.assignments,
    queryFn: assignmentsApi.getAssignments,
  });

export const useSubmitAssignment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      assignmentId,
      payload,
    }: {
      assignmentId: string;
      payload: Record<string, unknown>;
    }) => assignmentsApi.submitAssignment(assignmentId, payload),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.assignments });
      void queryClient.invalidateQueries({ queryKey: queryKeys.dashboard });
    },
  });
};
