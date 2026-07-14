import { Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { AssignmentView } from "../../../components/pega/AssignmentView";
import { CaseView } from "../../../components/pega/CaseView";
import { DataView } from "../../../components/pega/DataView";
import { ErrorPanel } from "../../../components/common/ErrorPanel";
import { Loading } from "../../../components/common/Loading";
import { useAssignments, useSubmitAssignment } from "../../workQueue/hooks/useAssignments";
import { useCase } from "../hooks/useCases";

export function CaseDetails() {
  const { caseId } = useParams();
  const salesCase = useCase(caseId);
  const assignments = useAssignments();
  const submitAssignment = useSubmitAssignment();
  const assignment = assignments.data?.find((item) => item.caseId === caseId);

  if (salesCase.isLoading) return <Loading label="Opening case details" />;
  if (salesCase.isError) return <ErrorPanel error={salesCase.error} />;
  if (!salesCase.data) return null;

  return (
    <Stack spacing={2}>
      <div>
        <Typography variant="h4">Case Details</Typography>
        <Typography color="text.secondary">Pega-owned lifecycle data rendered through React UX.</Typography>
      </div>
      <CaseView salesCase={salesCase.data} />
      {assignment ? (
        <AssignmentView
          assignment={assignment}
          isSubmitting={submitAssignment.isPending}
          onSubmit={(actionId, values) => submitAssignment.mutate({ assignmentId: assignment.id, payload: { actionId, values } })}
        />
      ) : null}
      <DataView title="Raw Case Contract Preview" data={salesCase.data} />
    </Stack>
  );
}
