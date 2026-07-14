import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Alerts } from "../../../components/dashboard/Alerts";
import { Metrics } from "../../../components/dashboard/Metrics";
import { OrderJourney } from "../../../components/dashboard/OrderJourney";
import { RecentOrders } from "../../../components/dashboard/RecentOrders";
import { Loading } from "../../../components/common/Loading";
import { ErrorPanel } from "../../../components/common/ErrorPanel";
import { AssignmentCard } from "../../../components/pega/AssignmentCard";
import { useDashboard } from "../hooks/useDashboard";

const chartColors = ["#2563EB", "#14B8A6", "#F59E0B", "#22C55E", "#0F172A"];

export function Dashboard() {
  const dashboard = useDashboard();

  if (dashboard.isLoading) return <Loading />;
  if (dashboard.isError) return <ErrorPanel error={dashboard.error} onRetry={() => void dashboard.refetch()} />;
  if (!dashboard.data) return null;

  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h4">Operations Dashboard</Typography>
        <Typography color="text.secondary">Premium command center for Pega-powered vehicle sales operations.</Typography>
      </Box>
      <Metrics metrics={dashboard.data.metrics} />
      <OrderJourney stages={dashboard.data.journey} />
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" }, gap: 2 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>Sales by Month</Typography>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={dashboard.data.salesByMonth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="orders" fill="#2563EB" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>Orders by Status</Typography>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={dashboard.data.ordersByStatus} dataKey="value" nameKey="status" outerRadius={88} label>
                  {dashboard.data.ordersByStatus.map((entry, index) => (
                    <Cell key={entry.status} fill={chartColors[index % chartColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", xl: "1.2fr 0.8fr" }, gap: 2 }}>
        <Stack spacing={2}>
          <Typography variant="h5">Priority Work</Typography>
          {dashboard.data.priorityAssignments.map((assignment) => (
            <AssignmentCard key={assignment.id} assignment={assignment} />
          ))}
        </Stack>
        <Alerts activity={dashboard.data.activity} />
      </Box>
      <RecentOrders cases={dashboard.data.recentCases} />
    </Stack>
  );
}
