import { Box, LinearProgress, Stack, Typography } from "@mui/material";
import type { OrderStage } from "../../types";

const stages: OrderStage[] = [
  "Lead",
  "Capture Order",
  "Vehicle Selection",
  "Approval",
  "Production",
  "Delivery",
];

export function CaseStatus({ currentStage }: { currentStage: OrderStage }) {
  const index = stages.indexOf(currentStage);
  const progress = ((index + 1) / stages.length) * 100;

  return (
    <Box aria-label={`Current case stage is ${currentStage}`}>
      <Stack direction="row" sx={{ justifyContent: "space-between", mb: 1 }}>
        <Typography variant="body2" sx={{ fontWeight: 700 }}>
          {currentStage}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Math.round(progress)}%
        </Typography>
      </Stack>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}
