// import DashboardPage from "@/pages/DashboardPage";
import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const DashboardPage = lazy(() => import("@/pages/DashboardPage"));
// const HomePage = lazy(() => import("@/pages/home/HomePage"));

export const HomeRoute: RouteObject = {
  path: "/",
  element: <DashboardPage />,
  // element: <HomePage />,
};
