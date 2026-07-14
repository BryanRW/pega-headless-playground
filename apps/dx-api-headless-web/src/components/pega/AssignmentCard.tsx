import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import type { Assignment } from "../../types";
import { formatRelativeDate } from "../../utils/format";
import { PriorityBadge } from "../ui/StatusBadge";

export function AssignmentCard({ assignment }: { assignment: Assignment }) {
  return (
    <Card>
      <CardContent>
        <Stack spacing={1.5}>
          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", gap: 1 }}>
            <Typography variant="h6">{assignment.customerName}</Typography>
            <PriorityBadge urgency={assignment.urgency} />
          </Stack>
          <Typography color="text.secondary">{assignment.instructions}</Typography>
          <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
            <Typography variant="body2">Case {assignment.caseId}</Typography>
            <Typography variant="body2">Stage {assignment.currentStage}</Typography>
            <Typography variant="body2">Owner {assignment.assignedTo.name}</Typography>
            <Typography variant="body2">Due {formatRelativeDate(assignment.dueDate)}</Typography>
          </Stack>
          <Button component={Link} to={`/sales-orders/${assignment.caseId}`} variant="contained">
            Open Assignment
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
