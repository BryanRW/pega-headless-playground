import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FiActivity, FiBarChart2, FiBookOpen, FiFileText, FiHome, FiSettings, FiUsers } from "react-icons/fi";

const navItems = [
  { label: "Dashboard", path: "/", icon: <FiHome /> },
  { label: "Sales Orders", path: "/sales-orders", icon: <FiFileText /> },
  { label: "Customers", path: "/customers", icon: <FiUsers /> },
  { label: "Analytics", path: "/analytics", icon: <FiBarChart2 /> },
  { label: "Knowledge Center", path: "/knowledge", icon: <FiBookOpen /> },
  { label: "Reports", path: "/reports", icon: <FiActivity /> },
  { label: "Settings", path: "/settings", icon: <FiSettings /> },
];

export function Sidebar() {
  return (
    <Box component="nav" aria-label="Primary navigation" sx={{ width: { xs: 280, lg: 260 }, flexShrink: 0, bgcolor: "#0F172A", color: "white", p: 2, height: "100%" }}>
      <Typography variant="overline" sx={{ opacity: 0.72, px: 1 }}>
        Operations
      </Typography>
      <List sx={{ mt: 1 }}>
        {navItems.map((item) => (
          <ListItemButton key={item.path} component={NavLink} to={item.path} sx={{ borderRadius: 2, color: "rgba(255,255,255,0.76)", mb: 0.5, "&.active": { bgcolor: "rgba(37, 99, 235, 0.28)", color: "white" } }}>
            <ListItemIcon sx={{ color: "inherit", minWidth: 36 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
