import { Card, CardContent, Stack, Typography } from "@mui/material";
import type { Assignment } from "../../types";
import { PegaForm } from "./PegaForm";

interface AssignmentViewProps {
  assignment: Assignment;
  onSubmit: (actionId: string, values: Record<string, unknown>) => void;
  isSubmitting?: boolean;
}

export function AssignmentView({ assignment, onSubmit, isSubmitting }: AssignmentViewProps) {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <div>
            <Typography variant="h6">Assignment {assignment.id}</Typography>
            <Typography color="text.secondary">{assignment.instructions}</Typography>
          </div>
          <PegaForm assignment={assignment} onSubmit={onSubmit} isSubmitting={isSubmitting} />
        </Stack>
      </CardContent>
    </Card>
  );
}
