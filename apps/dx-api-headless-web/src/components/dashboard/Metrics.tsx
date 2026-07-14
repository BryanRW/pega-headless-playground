import { Box } from "@mui/material";
import { StatCard } from "../ui/StatCard";
import type { DashboardMetric } from "../../types";

export function Metrics({ metrics }: { metrics: DashboardMetric[] }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: 2,
      }}
    >
      {metrics.map((metric) => (
        <StatCard key={metric.id} metric={metric} />
      ))}
    </Box>
  );
}
