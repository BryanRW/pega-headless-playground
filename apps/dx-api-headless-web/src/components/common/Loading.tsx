import { Box, CircularProgress, Typography } from "@mui/material";

interface LoadingProps {
  label?: string;
}

export function Loading({ label = "Loading operations data" }: LoadingProps) {
  return (
    <Box
      role="status"
      aria-live="polite"
      sx={{ display: "grid", placeItems: "center", minHeight: 280, gap: 2 }}
    >
      <CircularProgress size={34} />
      <Typography color="text.secondary">{label}</Typography>
    </Box>
  );
}
