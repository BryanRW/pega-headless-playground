import { AppBar, Avatar, Badge, Box, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { FiBell, FiCommand, FiMenu } from "react-icons/fi";
import { SearchBox } from "../common/SearchBox";
import { useAppStore } from "../../store/appStore";
import { useAuthStore } from "../../store/authStore";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const notifications = useAppStore((state) => state.notifications);
  const user = useAuthStore((state) => state.user);

  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: "1px solid", borderColor: "divider" }}>
      <Toolbar sx={{ gap: 2, minHeight: 72 }}>
        <IconButton edge="start" aria-label="Open navigation" onClick={onMenuClick} sx={{ display: { md: "none" } }}>
          <FiMenu />
        </IconButton>
        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", minWidth: { xs: 0, sm: 230 } }}>
          <Box aria-hidden sx={{ width: 38, height: 38, borderRadius: 2, display: "grid", placeItems: "center", bgcolor: "#0F172A", color: "white" }}>
            <FiCommand />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
              Tesla Operations Studio
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Headless Pega command center
            </Typography>
          </Box>
        </Stack>
        <Box sx={{ flex: 1, display: { xs: "none", md: "block" } }}>
          <SearchBox value="" onChange={() => undefined} label="Global search" />
        </Box>
        <IconButton aria-label="Notifications">
          <Badge badgeContent={notifications.filter((item) => !item.read).length} color="error">
            <FiBell />
          </Badge>
        </IconButton>
        <Avatar alt={user?.name ?? "Operator"} sx={{ bgcolor: "primary.main" }}>
          {(user?.name ?? "OP").slice(0, 2).toUpperCase()}
        </Avatar>
      </Toolbar>
    </AppBar>
  );
}
