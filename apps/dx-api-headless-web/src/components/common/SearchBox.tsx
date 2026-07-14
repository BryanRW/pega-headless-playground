import { InputAdornment, TextField } from "@mui/material";
import { FiSearch } from "react-icons/fi";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
}

export function SearchBox({
  value,
  onChange,
  label = "Search",
  placeholder = "Search cases, customers, vehicles",
}: SearchBoxProps) {
  return (
    <TextField
      fullWidth
      size="small"
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <FiSearch aria-hidden />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
