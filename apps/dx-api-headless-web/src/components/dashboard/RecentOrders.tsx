import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { formatCurrency, formatDate } from "../../utils/format";
import { CaseStatusBadge, PriorityBadge } from "../ui/StatusBadge";
import type { SalesCase } from "../../types";

export function RecentOrders({ cases }: { cases: SalesCase[] }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Recent Orders
        </Typography>
        <TableContainer>
          <Table size="small" aria-label="Recent sales orders">
            <TableHead>
              <TableRow>
                <TableCell>Case</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Vehicle</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Urgency</TableCell>
                <TableCell align="right">Value</TableCell>
                <TableCell>Due</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cases.map((item) => (
                <TableRow key={item.id} hover>
                  <TableCell>
                    <Link to={`/sales-orders/${item.id}`}>{item.id}</Link>
                  </TableCell>
                  <TableCell>{item.customer.name}</TableCell>
                  <TableCell>{item.vehicleModel}</TableCell>
                  <TableCell>
                    <CaseStatusBadge status={item.status} />
                  </TableCell>
                  <TableCell>
                    <PriorityBadge urgency={item.urgency} />
                  </TableCell>
                  <TableCell align="right">{formatCurrency(item.totalValue)}</TableCell>
                  <TableCell>{formatDate(item.dueDate)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
