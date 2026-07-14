import { Stack, Typography } from "@mui/material";
import { AssignmentCard } from "../../../components/pega/AssignmentCard";
import { EmptyState } from "../../../components/common/EmptyState";
import { ErrorPanel } from "../../../components/common/ErrorPanel";
import { Loading } from "../../../components/common/Loading";
import { useAssignments } from "../hooks/useAssignments";

export function MyWork() {
  const assignments = useAssignments();

  if (assignments.isLoading) return <Loading label="Loading priority assignments" />;
  if (assignments.isError) return <ErrorPanel error={assignments.error} />;

  return (
    <Stack spacing={2}>
      <div>
        <Typography variant="h4">My Work</Typography>
        <Typography color="text.secondary">Modern assignment cards backed by Pega work queues.</Typography>
      </div>
      {assignments.data?.length ? assignments.data.map((assignment) => <AssignmentCard key={assignment.id} assignment={assignment} />) : <EmptyState title="No assignments" description="Your Pega work queue is clear." />}
    </Stack>
  );
}
