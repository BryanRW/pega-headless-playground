import { Card, CardActionArea, CardContent, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import type { SalesCase } from "../../types";
import { formatCurrency, formatRelativeDate } from "../../utils/format";
import { CaseStatusBadge, PriorityBadge } from "../ui/StatusBadge";

export function CaseCard({ salesCase }: { salesCase: SalesCase }) {
  return (
    <Card>
      <CardActionArea component={Link} to={`/sales-orders/${salesCase.id}`}>
        <CardContent>
          <Stack spacing={1.25}>
            <Stack direction="row" sx={{ justifyContent: "space-between", gap: 1 }}>
              <Typography variant="h6">{salesCase.id}</Typography>
              <PriorityBadge urgency={salesCase.urgency} />
            </Stack>
            <Typography>{salesCase.customer.name}</Typography>
            <Typography color="text.secondary">{salesCase.vehicleModel}</Typography>
            <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
              <CaseStatusBadge status={salesCase.status} />
              <Typography variant="body2">{formatCurrency(salesCase.totalValue)}</Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              Due {formatRelativeDate(salesCase.dueDate)}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
