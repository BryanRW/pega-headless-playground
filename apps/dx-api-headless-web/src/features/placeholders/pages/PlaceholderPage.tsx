import { Card, CardContent, Stack, Typography } from "@mui/material";

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">{title}</Typography>
      <Card>
        <CardContent>
          <Typography color="text.secondary">This workspace is ready for the next Pega-backed feature module.</Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
