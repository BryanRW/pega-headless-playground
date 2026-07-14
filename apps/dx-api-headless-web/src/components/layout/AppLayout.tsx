import { Box, Button, Divider, Drawer, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiPlus, FiZap } from "react-icons/fi";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useAppStore } from "../../store/appStore";

function RightUtilityPanel() {
  const navigate = useNavigate();
  const notifications = useAppStore((state) => state.notifications);

  return (
    <Box component="aside" aria-label="Operations utility panel" sx={{ width: 310, flexShrink: 0, display: { xs: "none", xl: "block" }, borderLeft: "1px solid", borderColor: "divider", bgcolor: "rgba(255,255,255,0.72)", p: 2 }}>
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Typography variant="h6">Quick Actions</Typography>
          <Button startIcon={<FiPlus />} variant="contained" onClick={() => navigate("/start-case")}>Start Order</Button>
          <Button startIcon={<FiZap />} variant="outlined" onClick={() => navigate("/my-work")}>Review Priority Work</Button>
        </Stack>
        <Divider />
        <Stack spacing={1}>
          <Typography variant="h6">Recent Notifications</Typography>
          <List dense sx={{ p: 0 }}>
            {notifications.map((item) => (
              <ListItem key={item.id} sx={{ px: 0 }}>
                <ListItemText primary={item.title} secondary={item.message} />
              </ListItem>
            ))}
          </List>
        </Stack>
        <Divider />
        <Stack spacing={1}>
          <Typography variant="h6">Pega Assistant</Typography>
          <Typography variant="body2" color="text.secondary">Assignment routing, case validation, and lifecycle actions remain delegated to Pega DX API.</Typography>
        </Stack>
        <Divider />
        <Stack spacing={1}>
          <Typography variant="h6">Upcoming Tasks</Typography>
          <Typography variant="body2">Finance approval review at 2:30 PM</Typography>
          <Typography variant="body2">Delivery readiness sync at 4:00 PM</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export function AppLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box sx={{ minHeight: "100vh", display: "flex" }}>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Sidebar />
      </Box>
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)} ModalProps={{ keepMounted: true }}>
        <Sidebar />
      </Drawer>
      <Box sx={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        <Header onMenuClick={() => setMobileOpen(true)} />
        <Box sx={{ display: "flex", flex: 1, minHeight: 0 }}>
          <Box component="main" tabIndex={-1} sx={{ flex: 1, minWidth: 0, p: { xs: 2, md: 3 }, overflow: "auto" }}>
            <Outlet />
            <Footer />
          </Box>
          <RightUtilityPanel />
        </Box>
      </Box>
    </Box>
  );
}
