import { Card, CardContent, Stack, Typography } from "@mui/material";
import type { SalesCase } from "../../types";
import { formatCurrency, formatDate } from "../../utils/format";
import { CaseStatusBadge, PriorityBadge } from "../ui/StatusBadge";
import { CaseStatus } from "./CaseStatus";

export function CaseView({ salesCase }: { salesCase: SalesCase }) {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" sx={{ justifyContent: "space-between", flexWrap: "wrap", gap: 1 }}>
            <div>
              <Typography variant="h5">{salesCase.id}</Typography>
              <Typography color="text.secondary">{salesCase.caseType}</Typography>
            </div>
            <Stack direction="row" spacing={1}>
              <CaseStatusBadge status={salesCase.status} />
              <PriorityBadge urgency={salesCase.urgency} />
            </Stack>
          </Stack>
          <CaseStatus currentStage={salesCase.currentStage} />
          <Stack direction="row" spacing={4} useFlexGap sx={{ flexWrap: "wrap" }}>
            <Typography>Customer: {salesCase.customer.name}</Typography>
            <Typography>Vehicle: {salesCase.vehicleModel}</Typography>
            <Typography>Value: {formatCurrency(salesCase.totalValue)}</Typography>
            <Typography>Due: {formatDate(salesCase.dueDate)}</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
