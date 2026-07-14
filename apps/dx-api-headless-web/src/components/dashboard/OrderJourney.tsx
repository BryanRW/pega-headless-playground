import { Box, Card, CardContent, LinearProgress, Stack, Typography } from "@mui/material";
import type { JourneyStageMetric } from "../../types";

export function OrderJourney({ stages }: { stages: JourneyStageMetric[] }) {
  const max = Math.max(...stages.map((stage) => stage.count), 1);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Order Journey
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))",
            gap: 2,
          }}
        >
          {stages.map((stage, index) => (
            <Stack
              key={stage.stage}
              spacing={1}
              tabIndex={0}
              aria-label={`${stage.stage}, ${stage.count} orders`}
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: index % 2 === 0 ? "rgba(37, 99, 235, 0.06)" : "rgba(20, 184, 166, 0.08)",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                {stage.stage}
              </Typography>
              <Typography variant="h5">{stage.count}</Typography>
              <LinearProgress
                variant="determinate"
                value={(stage.count / max) * 100}
                aria-label={`${stage.stage} journey volume`}
              />
              <Typography variant="caption" color={stage.trend >= 0 ? "success.main" : "warning.main"}>
                {stage.trend >= 0 ? "+" : ""}
                {stage.trend}% flow
              </Typography>
            </Stack>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
