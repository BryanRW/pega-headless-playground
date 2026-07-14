export type CaseStatus =
  | "new"
  | "open"
  | "pending-approval"
  | "in-production"
  | "ready"
  | "delivered"
  | "resolved";

export type Urgency = "low" | "medium" | "high" | "critical";

export type OrderStage =
  | "Lead"
  | "Capture Order"
  | "Vehicle Selection"
  | "Approval"
  | "Production"
  | "Delivery";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  region: string;
  preferredModel: string;
  lifetimeValue: number;
}

export interface SalesCase {
  id: string;
  caseType: string;
  customer: Customer;
  vehicleModel: string;
  status: CaseStatus;
  currentStage: OrderStage;
  assignedTo: User;
  createdAt: string;
  updatedAt: string;
  dueDate: string;
  totalValue: number;
  urgency: Urgency;
}

export interface AssignmentAction {
  id: string;
  label: string;
  type: "primary" | "secondary" | "danger";
}

export interface AssignmentField {
  name: string;
  label: string;
  type: "text" | "number" | "email" | "select" | "textarea" | "date";
  value?: string | number;
  required?: boolean;
  options?: Array<{ label: string; value: string }>;
}

export interface Assignment {
  id: string;
  caseId: string;
  customerName: string;
  urgency: Urgency;
  currentStage: OrderStage;
  assignedTo: User;
  dueDate: string;
  instructions: string;
  fields: AssignmentField[];
  actions: AssignmentAction[];
}

export interface DashboardMetric {
  id: string;
  label: string;
  value: string;
  delta: string;
  tone: "neutral" | "success" | "warning" | "danger";
}

export interface JourneyStageMetric {
  stage: OrderStage;
  count: number;
  trend: number;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  tone: "info" | "success" | "warning" | "danger";
}

export interface DashboardData {
  metrics: DashboardMetric[];
  journey: JourneyStageMetric[];
  priorityAssignments: Assignment[];
  recentCases: SalesCase[];
  activity: ActivityItem[];
  salesByMonth: Array<{ month: string; sales: number; orders: number }>;
  ordersByStatus: Array<{ status: string; value: number }>;
}

export interface PegaApiResponse<T> {
  data: T;
  status: number;
  correlationId?: string;
  messages?: Array<{ type: "info" | "warning" | "error"; text: string }>;
}

export interface PegaError {
  message: string;
  status?: number;
  code?: string;
  correlationId?: string;
  details?: unknown;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken?: string;
  expiresAt: number;
  tokenType: "Bearer";
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  tone: "info" | "success" | "warning" | "danger";
  read: boolean;
  createdAt: string;
}
