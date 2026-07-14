import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: colors.electricBlue },
    secondary: { main: colors.teal },
    success: { main: colors.success },
    warning: { main: colors.warning },
    error: { main: colors.danger },
    background: {
      default: colors.background,
      paper: colors.card,
    },
    text: {
      primary: colors.ink,
      secondary: colors.muted,
    },
  },
  typography: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 750 },
    h4: { fontWeight: 750 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 700 },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          border: `1px solid ${colors.separator}`,
          boxShadow: "0 16px 40px rgba(15, 23, 42, 0.08)",
        },
      },
    },
  },
});
