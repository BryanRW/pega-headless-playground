import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../app/queryKeys";
import { dashboardService } from "../services/dashboardService";

export const useDashboard = () =>
  useQuery({
    queryKey: queryKeys.dashboard,
    queryFn: dashboardService.getDashboard,
  });
