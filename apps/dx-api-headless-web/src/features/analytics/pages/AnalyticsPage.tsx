import { Card, CardContent, Stack, Typography } from "@mui/material";

export function Analytics() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">Analytics</Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">Operational intelligence</Typography>
          <Typography color="text.secondary">Placeholder surface for future Pega data views, SLA analysis, throughput forecasting, and conversion metrics.</Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
