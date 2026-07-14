import { Button, Stack } from "@mui/material";
import type { AssignmentAction } from "../../types";

interface ActionButtonsProps {
  actions: AssignmentAction[];
  onAction: (actionId: string) => void;
  disabled?: boolean;
}

export function ActionButtons({ actions, onAction, disabled }: ActionButtonsProps) {
  return (
    <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
      {actions.map((action) => (
        <Button
          key={action.id}
          variant={action.type === "primary" ? "contained" : "outlined"}
          color={action.type === "danger" ? "error" : "primary"}
          onClick={() => onAction(action.id)}
          disabled={disabled}
        >
          {action.label}
        </Button>
      ))}
    </Stack>
  );
}
