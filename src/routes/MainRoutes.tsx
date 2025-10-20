import { lazy } from "react";
import { Outlet, type RouteObject } from "react-router-dom";
import AppShell from "@/layouts/AppShell";

// Lazy imports
const HomePage = lazy(() => import("@/pages/home/HomePage"));
const CrateTestPage = lazy(() => import("@/pages/crate/CrateTestPage"));
const DataTestPage = lazy(() => import("@/pages/data/DataTestPage"));
const HistoryTestPage = lazy(() => import("@/pages/history/HistoryTestPage"));
const LogTestPage = lazy(() => import("@/pages/log/LogTestPage"));
const ServiceTestPage = lazy(() => import("@/pages/service/ServiceTestPage"));
const DashboardPage = lazy(() => import("@/pages/DashboardPage"));

export const MainRoutes: RouteObject = {
  path: "/",
  element: (
    <AppShell title="eCrate" subtitle="Dashboard">
      <Outlet />
    </AppShell>
  ),
  children: [
    { index: true, element: <DashboardPage /> },
    { path: "home", element: <HomePage /> },
    { path: "crate-test", element: <CrateTestPage /> },
    { path: "data-test", element: <DataTestPage /> },
    { path: "history-test", element: <HistoryTestPage /> },
    { path: "log-test", element: <LogTestPage /> },
    { path: "service-test", element: <ServiceTestPage /> },
  ],
};
