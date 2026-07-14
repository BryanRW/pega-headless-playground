import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import { Analytics } from "../features/analytics/pages/AnalyticsPage";
import { CaseDetails } from "../features/salesOrders/pages/CaseDetailsPage";
import { Dashboard } from "../features/dashboard/pages/DashboardPage";
import { MyWork } from "../features/workQueue/pages/MyWorkPage";
import { PlaceholderPage } from "../features/placeholders/pages/PlaceholderPage";
import { SalesOrders } from "../features/salesOrders/pages/SalesOrdersPage";
import { Settings } from "../features/settings/pages/SettingsPage";
import { StartCase } from "../features/salesOrders/pages/StartCasePage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/my-work", element: <MyWork /> },
      { path: "/sales-orders", element: <SalesOrders /> },
      { path: "/sales-orders/:caseId", element: <CaseDetails /> },
      { path: "/start-case", element: <StartCase /> },
      { path: "/customers", element: <PlaceholderPage title="Customers" /> },
      { path: "/analytics", element: <Analytics /> },
      { path: "/knowledge", element: <PlaceholderPage title="Knowledge Center" /> },
      { path: "/reports", element: <PlaceholderPage title="Reports" /> },
      { path: "/settings", element: <Settings /> },
    ],
  },
]);
