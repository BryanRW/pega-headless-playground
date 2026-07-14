import { Box, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import type { Assignment } from "../../types";
import { ActionButtons } from "./ActionButtons";
import { FieldRenderer } from "./FieldRenderer";

interface PegaFormProps {
  assignment: Assignment;
  onSubmit: (actionId: string, values: Record<string, unknown>) => void;
  isSubmitting?: boolean;
}

export function PegaForm({ assignment, onSubmit, isSubmitting }: PegaFormProps) {
  const { handleSubmit, register, getValues } = useForm<Record<string, unknown>>();

  return (
    <Box component="form" onSubmit={handleSubmit((values) => onSubmit("submit", values))}>
      <Stack spacing={2}>
        {assignment.fields.map((field) => (
          <FieldRenderer key={field.name} field={field} register={register} />
        ))}
        <ActionButtons
          actions={assignment.actions}
          disabled={isSubmitting}
          onAction={(actionId) => onSubmit(actionId, getValues())}
        />
      </Stack>
    </Box>
  );
}
