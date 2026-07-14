import { Box, Typography } from "@mui/material";
import { env } from "../../utils/env";

export function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, color: "text.secondary" }}>
      <Typography variant="caption">Tesla Operations Studio | Service mode: {env.serviceMode}</Typography>
    </Box>
  );
}
