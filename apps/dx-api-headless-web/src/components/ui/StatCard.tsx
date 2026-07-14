import { Card, CardContent, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import type { DashboardMetric } from "../../types";

interface StatCardProps {
  metric: DashboardMetric;
}

export function StatCard({ metric }: StatCardProps) {
  return (
    <Card
      component={motion.article}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.18 }}
      aria-label={`${metric.label}: ${metric.value}`}
    >
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="body2" color="text.secondary">
            {metric.label}
          </Typography>
          <Typography variant="h4">{metric.value}</Typography>
          <Typography
            variant="body2"
            color={metric.tone === "warning" ? "warning.main" : "success.main"}
          >
            {metric.delta} vs last cycle
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
