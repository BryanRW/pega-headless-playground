import { Alert, Card, CardContent, Stack, Typography } from "@mui/material";
import { env, validateLiveEnvironment } from "../../../utils/env";

export function Settings() {
  const missing = validateLiveEnvironment();

  return (
    <Stack spacing={2}>
      <Typography variant="h4">Settings</Typography>
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="h6">Integration mode</Typography>
            <Typography>Current mode: {env.serviceMode}</Typography>
            {missing.length > 0 ? <Alert severity="warning">Live mode is missing: {missing.join(", ")}</Alert> : <Alert severity="success">Environment configuration is ready for the selected mode.</Alert>}
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}
