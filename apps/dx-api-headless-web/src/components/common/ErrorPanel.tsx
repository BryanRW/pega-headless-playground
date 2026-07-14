import { Alert, AlertTitle, Button } from "@mui/material";

interface ErrorPanelProps {
  title?: string;
  error: unknown;
  onRetry?: () => void;
}

export function ErrorPanel({ title = "Something needs attention", error, onRetry }: ErrorPanelProps) {
  const message = error instanceof Error ? error.message : "The request could not be completed.";

  return (
    <Alert
      severity="error"
      action={
        onRetry ? (
          <Button color="inherit" size="small" onClick={onRetry}>
            Retry
          </Button>
        ) : undefined
      }
      sx={{ borderRadius: 2 }}
    >
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  );
}
