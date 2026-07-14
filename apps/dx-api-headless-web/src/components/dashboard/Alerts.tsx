import { Card, CardContent, List, ListItem, ListItemText, Typography } from "@mui/material";
import type { ActivityItem } from "../../types";

export function Alerts({ activity }: { activity: ActivityItem[] }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Recent Activity
        </Typography>
        <List sx={{ p: 0 }}>
          {activity.map((item) => (
            <ListItem
              key={item.id}
              sx={{
                px: 0,
                borderBottom: "1px solid",
                borderColor: "divider",
                alignItems: "flex-start",
              }}
            >
              <ListItemText
                primary={item.title}
                secondary={`${item.description} • ${new Date(item.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
