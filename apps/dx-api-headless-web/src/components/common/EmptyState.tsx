import { Box, Button, Typography } from "@mui/material";
import { FiInbox } from "react-icons/fi";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <Box
      sx={{
        border: "1px dashed",
        borderColor: "divider",
        borderRadius: 2,
        p: 4,
        textAlign: "center",
        bgcolor: "background.paper",
      }}
    >
      <FiInbox aria-hidden size={34} />
      <Typography variant="h6" sx={{ mt: 2 }}>
        {title}
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 0.5, mb: actionLabel ? 2 : 0 }}>
        {description}
      </Typography>
      {actionLabel ? (
        <Button variant="contained" onClick={onAction}>
          {actionLabel}
        </Button>
      ) : null}
    </Box>
  );
}
