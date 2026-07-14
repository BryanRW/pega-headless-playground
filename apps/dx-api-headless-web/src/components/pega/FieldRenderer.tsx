import { MenuItem, TextField } from "@mui/material";
import type { AssignmentField } from "../../types";

interface FieldRendererProps {
  field: AssignmentField;
  register: (name: string, options?: { required?: string }) => Record<string, unknown>;
}

export function FieldRenderer({ field, register }: FieldRendererProps) {
  const registration = register(field.name, {
    required: field.required ? `${field.label} is required` : undefined,
  });

  if (field.type === "select") {
    return (
      <TextField
        select
        fullWidth
        label={field.label}
        defaultValue={field.value ?? ""}
        required={field.required}
        {...registration}
      >
        {(field.options ?? []).map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    );
  }

  return (
    <TextField
      fullWidth
      label={field.label}
      type={field.type === "textarea" ? "text" : field.type}
      multiline={field.type === "textarea"}
      minRows={field.type === "textarea" ? 4 : undefined}
      defaultValue={field.value ?? ""}
      required={field.required}
      {...registration}
    />
  );
}
