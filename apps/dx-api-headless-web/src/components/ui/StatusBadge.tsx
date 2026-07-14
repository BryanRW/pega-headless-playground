import { Chip } from "@mui/material";
import type { CaseStatus, Urgency } from "../../types";

const statusLabels: Record<CaseStatus, string> = {
  new: "New",
  open: "Open",
  "pending-approval": "Pending Approval",
  "in-production": "In Production",
  ready: "Ready",
  delivered: "Delivered",
  resolved: "Resolved",
};

export function CaseStatusBadge({ status }: { status: CaseStatus }) {
  const color = status === "ready" || status === "delivered" ? "success" : "primary";
  return <Chip size="small" color={color} label={statusLabels[status]} />;
}

export function PriorityBadge({ urgency }: { urgency: Urgency }) {
  const color = urgency === "critical" ? "error" : urgency === "high" ? "warning" : "default";
  return <Chip size="small" color={color} label={urgency.toUpperCase()} />;
}
