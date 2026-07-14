import { create } from "zustand";
import type { AppNotification, Assignment, SalesCase } from "../types";

interface AppState {
  selectedCase: SalesCase | null;
  selectedAssignment: Assignment | null;
  themeName: "Tesla Operations Studio";
  notifications: AppNotification[];
  setSelectedCase: (selectedCase: SalesCase | null) => void;
  setSelectedAssignment: (selectedAssignment: Assignment | null) => void;
  addNotification: (notification: AppNotification) => void;
  markNotificationRead: (id: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedCase: null,
  selectedAssignment: null,
  themeName: "Tesla Operations Studio",
  notifications: [
    {
      id: "notif-001",
      title: "Approval queue rising",
      message: "Finance approvals are 14% above the morning baseline.",
      tone: "warning",
      read: false,
      createdAt: "2026-07-10T13:30:00.000Z",
    },
    {
      id: "notif-002",
      title: "Delivery slots opened",
      message: "Eight new delivery windows are available for west region orders.",
      tone: "success",
      read: false,
      createdAt: "2026-07-10T12:12:00.000Z",
    },
  ],
  setSelectedCase: (selectedCase) => set({ selectedCase }),
  setSelectedAssignment: (selectedAssignment) => set({ selectedAssignment }),
  addNotification: (notification) =>
    set((state) => ({ notifications: [notification, ...state.notifications] })),
  markNotificationRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((item) =>
        item.id === id ? { ...item, read: true } : item,
      ),
    })),
}));
